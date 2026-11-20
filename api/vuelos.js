/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/vuelos
 * Conexión viva y segura con Travelpayouts / Aviasales Data API v2,
 * enriquecimiento dinámico de tarifas, fechas reales, termómetro coherente y vínculos de reserva
 * para los 57 destinos del Radar, con caché HTTP en Edge CDN (3 horas), prevención de SSRF (CWE-918)
 * y exclusión de Flybondi.
 */

const fs = require('fs');
const path = require('path');

const ALLOWED_ORIGINS = new Set([
  'https://flightbot.com.ar',
  'https://www.flightbot.com.ar',
  'https://flightbot-landing.vercel.app',
  'http://localhost:8000',
  'http://127.0.0.1:8000'
]);

const MESES_ABR = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const MESES_NOMBRES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const TIPO_CAMBIO_FALLBACK = 1350;
const EUR_USD_FALLBACK = 1.08;
const CACHE_TASAS_TTL_MS = 3 * 60 * 60 * 1000;
let _cacheTasasVivo = { ts: 0, usdArs: TIPO_CAMBIO_FALLBACK, eurUsd: EUR_USD_FALLBACK };

// Taxonomía canónica única de 5 regiones (57 destinos)
const CANONICAL_REGION_BY_ID = {
  bariloche: 'cabotaje', cordoba: 'cabotaje', calafate: 'cabotaje',
  jujuy: 'cabotaje', mendoza: 'cabotaje', neuquen: 'cabotaje',
  iguazu: 'cabotaje', madryn: 'cabotaje', salta: 'cabotaje',
  sanmartin: 'cabotaje', ushuaia: 'cabotaje',
  florianopolis: 'brasil', maceio: 'brasil', natal: 'brasil',
  recife: 'brasil', rio: 'brasil', salvador: 'brasil',
  puntacana: 'caribe', cancun: 'caribe', aruba: 'caribe',
  curazao: 'caribe', cuba: 'caribe', sanandres: 'caribe',
  cartagena: 'caribe', panama: 'caribe', costarica: 'caribe',
  santiago: 'america', cusco: 'america', newyork: 'america',
  miami: 'america', orlando: 'america', mexico: 'america',
  madrid: 'europa_mundo', barcelona: 'europa_mundo', lisboa: 'europa_mundo',
  roma: 'europa_mundo', paris: 'europa_mundo', londres: 'europa_mundo',
  berlin: 'europa_mundo', frankfurt: 'europa_mundo', amsterdam: 'europa_mundo',
  atenas: 'europa_mundo', oslo: 'europa_mundo', reikiavik: 'europa_mundo',
  estambul: 'europa_mundo', dubai: 'europa_mundo', maldivas: 'europa_mundo',
  bangkok: 'europa_mundo', tokio: 'europa_mundo', seul: 'europa_mundo',
  pekin: 'europa_mundo', sydney: 'europa_mundo', nuevazelanda: 'europa_mundo',
  polinesia: 'europa_mundo', elcairo: 'europa_mundo', marrakech: 'europa_mundo',
  ciudaddelcabo: 'europa_mundo'
};

function normalizarCategoriaRegion(dest) {
  if (!dest || typeof dest !== 'object') return dest;
  const id = String(dest.id || '').toLowerCase();
  const reg = CANONICAL_REGION_BY_ID[id] || dest.categoria_region;
  if (reg === dest.categoria_region) return dest;
  return { ...dest, categoria_region: reg };
}

async function obtenerTiposCambioEnVivo() {
  const ahora = Date.now();
  if (_cacheTasasVivo.ts > 0 && (ahora - _cacheTasasVivo.ts) < CACHE_TASAS_TTL_MS) {
    return _cacheTasasVivo;
  }

  let usdArs = _cacheTasasVivo.usdArs || TIPO_CAMBIO_FALLBACK;
  let eurUsd = _cacheTasasVivo.eurUsd || EUR_USD_FALLBACK;

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2500);
    const [resAr, resEur] = await Promise.allSettled([
      fetch('https://dolarapi.com/v1/dolares', { signal: ctrl.signal }),
      fetch('https://open.er-api.com/v6/latest/USD', { signal: ctrl.signal })
    ]);
    clearTimeout(timer);

    if (resAr.status === 'fulfilled' && resAr.value.ok) {
      const lista = await resAr.value.json();
      if (Array.isArray(lista)) {
        const bolsa = lista.find(x => String(x.casa || '').toLowerCase() === 'bolsa');
        const oficial = lista.find(x => String(x.casa || '').toLowerCase() === 'oficial');
        const venta = Number((bolsa && (bolsa.venta || bolsa.compra)) || (oficial && (oficial.venta || oficial.compra)) || 0);
        if (venta > 100) usdArs = Math.round(venta);
      }
    }

    if (resEur.status === 'fulfilled' && resEur.value.ok) {
      const fx = await resEur.value.json();
      const eurPerUsd = Number(fx && fx.rates && fx.rates.EUR || 0);
      if (eurPerUsd > 0.2 && eurPerUsd < 2) {
        eurUsd = Number((1 / eurPerUsd).toFixed(4));
      }
    }

    _cacheTasasVivo = { ts: ahora, usdArs, eurUsd };
  } catch (_err) {
    // Conservar último valor conocido en memoria si falló la consulta externa
  }

  return _cacheTasasVivo;
}

const EUROPE_DEST_IDS = new Set([
  'madrid', 'barcelona', 'lisboa', 'roma', 'paris', 'londres',
  'berlin', 'frankfurt', 'amsterdam', 'atenas', 'oslo', 'reikiavik', 'estambul'
]);

const IATA_ALIASES = {
  'JFK': ['JFK', 'EWR', 'NYC', 'LGA'],
  'NRT': ['NRT', 'HND', 'TYO'],
  'PEK': ['PEK', 'PKX', 'BJS'],
  'GIG': ['GIG', 'SDU', 'RIO'],
  'REL': ['REL', 'PMY'],
  'LHR': ['LHR', 'LGW', 'LON'],
  'CDG': ['CDG', 'ORY', 'PAR'],
  'FCO': ['FCO', 'ROM'],
  'BER': ['BER', 'TXL'],
  'IST': ['IST', 'SAW'],
  'ICN': ['ICN', 'GMP', 'SEL'],
  'HAV': ['HAV', 'VRA'],
  'SJO': ['SJO', 'LIR']
};

const { isSafeRemoteHttpsUrl } = require('./_security');

// Carga resiliente de los datos locales de respaldo (radar-data.json / radar-data.js)
function cargarDatosLocales() {
  const posiblesRutas = [
    path.join(__dirname, '../js/radar-data.json'),
    path.join(__dirname, 'js/radar-data.json'),
    path.join(process.cwd(), 'landing/js/radar-data.json'),
    path.join(process.cwd(), 'js/radar-data.json'),
    path.join(__dirname, '../js/radar-data.js'),
    path.join(__dirname, 'js/radar-data.js'),
    path.join(process.cwd(), 'landing/js/radar-data.js'),
    path.join(process.cwd(), 'js/radar-data.js')
  ];

  for (const archivo of posiblesRutas) {
    try {
      if (fs.existsSync(archivo)) {
        const contenido = fs.readFileSync(archivo, 'utf8');
        if (archivo.endsWith('.json')) {
          const parsed = JSON.parse(contenido);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } else if (archivo.endsWith('.js')) {
          const match = contenido.match(/window\.RADAR_DATA\s*=\s*(\[[\s\S]*?\]);\s*\}\)\(\);/);
          if (match && match[1]) {
            const parsed = JSON.parse(match[1]);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
          }
        }
      }
    } catch (_err) {
      // Intentar la siguiente ruta disponible
    }
  }

  return [];
}

// Formatea fechas ISO (YYYY-MM-DD) a texto legible en español (ej. "25 Nov - 01 Dic 2026")
function formatearRangoFechas(depStr, retStr) {
  try {
    const [y1, m1, d1] = depStr.split('-').map(Number);
    const [y2, m2, d2] = retStr.split('-').map(Number);
    const mes1 = MESES_ABR[m1] || String(m1);
    const mes2 = MESES_ABR[m2] || String(m2);
    const dia1 = String(d1).padStart(2, '0');
    const dia2 = String(d2).padStart(2, '0');
    return `${dia1} ${mes1} - ${dia2} ${mes2} ${y2}`;
  } catch (_e) {
    return `${depStr} al ${retStr}`;
  }
}

// Formatea montos en ARS con separador de miles
function formatearArs(monto) {
  return `$ ${Math.round(monto).toLocaleString('es-AR')} ARS`;
}

// Consulta a Travelpayouts Aviasales Data API v2 con timeout seguro
async function consultarTravelpayouts(url, timeoutMs = 4500) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'FlightBot-Vercel-Radar/2.1'
      },
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch (_e) {
    return [];
  }
}

function esFlybondi(item) {
  if (!item) return false;
  const gate = String(item.gate || '').toLowerCase();
  const air = String(item.airline || '').toLowerCase();
  return gate.includes('flybondi') || air === 'fo' || air.includes('flybondi');
}

const MAX_RELAMPAGO_FRESH_HOURS = 72;
const MAX_RELAMPAGO_FALLBACK_HOURS = 120;

function calcularAntiguedadHoras(foundAtStr) {
  if (!foundAtStr) return null;
  const raw = String(foundAtStr).trim();
  if (!raw) return null;
  const normalized = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(raw) ? raw : `${raw}Z`;
  const ts = Date.parse(normalized);
  if (Number.isNaN(ts)) return null;
  return Math.max(0, (Date.now() - ts) / (1000 * 60 * 60));
}

function formatearDeteccionRolli(antiguedadHs) {
  if (antiguedadHs === null || antiguedadHs === undefined || !Number.isFinite(Number(antiguedadHs))) {
    return 'Detectado por Rolli';
  }
  const hs = Number(antiguedadHs);
  if (hs < 1) return 'Detectado por Rolli hace minutos';
  if (hs < 48) return `Detectado por Rolli hace ${Math.max(1, Math.round(hs))} hs`;
  return `Detectado por Rolli hace ${Math.max(2, Math.round(hs / 24))} días`;
}

function construirSalidasRelampagoEnVivo(dest, ofertasRaw, hoy, tipoCambioUsdArs) {
  const iataRaw = String(dest.iata || '').toUpperCase();
  const primaryIata = iataRaw.split('/')[0].trim() || 'BUE';
  const esCabotaje = dest.es_cabotaje === true || dest.categoria_region === 'cabotaje';
  const origGf = esCabotaje ? 'BUE' : 'EZE';
  const minN = esCabotaje ? 3 : 4;
  const maxN = esCabotaje ? 12 : 28;
  const fechaMin3d = new Date(hoy.getTime() + (3 * 24 * 60 * 60 * 1000));
  const min3dIso = `${fechaMin3d.getFullYear()}-${String(fechaMin3d.getMonth() + 1).padStart(2, '0')}-${String(fechaMin3d.getDate()).padStart(2, '0')}`;
  const ahoraIso = new Date().toISOString();

  // Filtrar primero por validez de fechas, noches y escalas
  const candidatas = [];
  for (const o of ofertasRaw) {
    if (!o || !o.depart_date || !o.return_date || !o.value) continue;
    const val = Number(o.value);
    if (!Number.isFinite(val) || val <= 0) continue;
    const depDate = new Date(o.depart_date + 'T00:00:00');
    const retDate = new Date(o.return_date + 'T00:00:00');
    if (Number.isNaN(depDate.getTime()) || Number.isNaN(retDate.getTime())) continue;
    if (depDate < fechaMin3d || retDate <= depDate) continue;
    const noches = Math.round((retDate - depDate) / (1000 * 60 * 60 * 24));
    if (noches < minN || noches > maxN) continue;
    if (esCabotaje && Number(o.number_of_changes || 0) > 0) continue;
    candidatas.push({
      oferta: o,
      val,
      depDate,
      retDate,
      noches,
      antiguedadHs: calcularAntiguedadHoras(o.found_at)
    });
  }

  // Filtro estricto de frescura: priorizar <= 72h, respaldo <= 120h, descartar > 120h (cachés viejas)
  const pool72 = candidatas.filter(x => x.antiguedadHs !== null && x.antiguedadHs <= MAX_RELAMPAGO_FRESH_HOURS);
  const pool120 = candidatas.filter(x => x.antiguedadHs !== null && x.antiguedadHs <= MAX_RELAMPAGO_FALLBACK_HOURS);
  const sinTimestamp = candidatas.every(x => x.antiguedadHs === null);
  let poolElegido = pool72.length > 0
    ? pool72
    : (pool120.length > 0 ? pool120 : (sinTimestamp ? candidatas : []));

  // Descartar outliers viejos (> 18h) cuyo precio supere en > 1.55x el mínimo real disponible
  if (poolElegido.length > 0) {
    const minValGlobal = Math.min(...poolElegido.map(x => x.val));
    const poolSinOutliers = poolElegido.filter(
      x => !(x.antiguedadHs !== null && x.antiguedadHs > 18 && x.val > minValGlobal * 1.55)
    );
    if (poolSinOutliers.length > 0) {
      poolElegido = poolSinOutliers;
    }
  }

  const tierFrescura = (hs) => {
    if (hs === null || hs === undefined || !Number.isFinite(Number(hs))) return 1;
    const n = Number(hs);
    if (n <= 18) return 0;
    if (n <= 24) return 1;
    if (n <= 48) return 2;
    return 3;
  };

  // Priorizar ofertas más frescas (<= 18h, <= 24h) y luego menor precio
  poolElegido.sort((a, b) => {
    const ta = tierFrescura(a.antiguedadHs);
    const tb = tierFrescura(b.antiguedadHs);
    if (ta !== tb) return ta - tb;
    return a.val - b.val;
  });

  const vistas = new Set();
  const salidasReales = [];
  for (const item of poolElegido) {
    const { oferta: o, val, depDate, noches, antiguedadHs } = item;

    const parKey = `${o.depart_date}_${o.return_date}`;
    if (vistas.has(parKey)) continue;
    vistas.add(parKey);

    const diasRestantes = Math.max(1, Math.round((depDate - hoy) / (1000 * 60 * 60 * 24)));
    const pArs = esCabotaje
      ? Math.round(val / 100) * 100
      : Math.round((Math.round(val) * tipoCambioUsdArs) / 100) * 100;
    const pUsd = esCabotaje
      ? Math.max(1, Math.round(val / tipoCambioUsdArs))
      : Math.round(val);

    let gate = String(o.gate || (esCabotaje ? 'JetSMART' : 'Aerolínea Oficial'));
    if (gate.toLowerCase().includes('flybondi')) {
      gate = esCabotaje ? 'JetSMART' : 'Aerolínea Oficial';
    }

    const idxVal = salidasReales.length;
    salidasReales.push({
      opcion: idxVal + 1,
      etiqueta_opcion: idxVal === 0 ? 'Mejor Tarifa' : `Salida ${String.fromCharCode(65 + (idxVal % 26))}`,
      fecha_ida: o.depart_date,
      fecha_vuelta: o.return_date,
      fechas_texto: formatearRangoFechas(o.depart_date, o.return_date),
      noches,
      dias_restantes: diasRestantes,
      precio_ars: pArs,
      precio_usd: pUsd,
      escalas: Number(o.number_of_changes || 0),
      aerolinea_gate: gate,
      gate,
      found_at: o.found_at || null,
      antiguedad_hs: antiguedadHs !== null ? Math.round(antiguedadHs * 10) / 10 : null,
      es_real_aviasales: true,
      actualizado_utc: ahoraIso,
      google_flights_url: `https://www.google.com/travel/flights?q=Flights%20to%20${primaryIata}%20from%20${origGf}%20on%20${o.depart_date}%20through%20${o.return_date}&hl=es`,
      kiwi_url: `https://www.kiwi.com/deep?from=BUE&to=${primaryIata}&departure=${o.depart_date}&return=${o.return_date}&currency=${esCabotaje ? 'ARS' : 'USD'}&lang=es&affilid=travelpayoutsdeeplink_flightbot-landing.vercel.app_fd35e8e828cf46f19c2af3768-791785`
    });
    if (salidasReales.length >= 30) break;
  }

  if (salidasReales.length === 0) {
    return null;
  }

  // Agrupar salidas_reales_cazadas en vivo (3 meses con rollover fin de mes + Early Bird 6M)
  let startYear = hoy.getFullYear();
  let startMonth = hoy.getMonth();
  const ultimoDiaMes = new Date(startYear, startMonth + 1, 0).getDate();
  if (hoy.getDate() >= ultimoDiaMes - 4) {
    startMonth += 1;
    if (startMonth > 11) {
      startMonth = 0;
      startYear += 1;
    }
  }

  const prevCaz = dest.salidas_reales_cazadas && Array.isArray(dest.salidas_reales_cazadas.meses)
    ? dest.salidas_reales_cazadas
    : null;
  const prevValidas = [];
  if (prevCaz) {
    for (const m of prevCaz.meses) {
      for (const s of (m.salidas || [])) {
        if (
          s &&
          s.es_real_aviasales === true &&
          s.antiguedad_hs !== null &&
          s.antiguedad_hs !== undefined &&
          Number(s.antiguedad_hs) <= 24 &&
          s.fecha_ida &&
          s.fecha_ida >= min3dIso
        ) {
          prevValidas.push(s);
        }
      }
    }
    if (prevCaz.early_bird && Array.isArray(prevCaz.early_bird.salidas)) {
      for (const s of prevCaz.early_bird.salidas) {
        if (
          s &&
          s.es_real_aviasales === true &&
          s.antiguedad_hs !== null &&
          s.antiguedad_hs !== undefined &&
          Number(s.antiguedad_hs) <= 24 &&
          s.fecha_ida &&
          s.fecha_ida >= min3dIso
        ) {
          prevValidas.push(s);
        }
      }
    }
  }

  const relBase = dest.oportunidad_relampago || {};
  const baseAhorroNum = parseInt(relBase.ahorro_porcentaje, 10) || (esCabotaje ? 25 : 20);
  const paresUsados = new Set();
  const slotsMes = [];

  // Pasada 1: reservar para cada mes sus propias mejores salidas (frescura + precio)
  for (let i = 0; i < 3; i++) {
    let y = startYear;
    let m = startMonth + i;
    if (m > 11) {
      y += Math.floor(m / 12);
      m = m % 12;
    }
    const prefijo = `${y}-${String(m + 1).padStart(2, '0')}`;
    const cands = salidasReales
      .filter(s => s.fecha_ida.startsWith(prefijo))
      .sort((a, b) => {
        const ta = tierFrescura(a.antiguedad_hs);
        const tb = tierFrescura(b.antiguedad_hs);
        return ta !== tb ? ta - tb : (a.precio_usd - b.precio_usd);
      });
    const sel = [];
    for (const c of cands) {
      const k = `${c.fecha_ida}_${c.fecha_vuelta}`;
      if (paresUsados.has(k)) continue;
      if (sel.length === 0) {
        sel.push({ ...c, opcion: 1, etiqueta_opcion: 'Salida A' });
        paresUsados.add(k);
      } else if (sel.length < 2) {
        const d1 = new Date(sel[0].fecha_ida + 'T00:00:00');
        const d2 = new Date(c.fecha_ida + 'T00:00:00');
        if (Math.abs((d2 - d1) / (1000 * 60 * 60 * 24)) >= 3) {
          sel.push({ ...c, opcion: 2, etiqueta_opcion: 'Salida B' });
          paresUsados.add(k);
          break;
        }
      }
    }
    slotsMes.push({ y, m, prefijo, sel });
  }

  // Pasada 2: completar con fechas cercanas reales y frescas (sin duplicar entre pestañas)
  const meses = [];
  for (let i = 0; i < 3; i++) {
    const { y, m, prefijo, sel } = slotsMes[i];
    const centroMes = new Date(y, m, 15);
    if (sel.length < 2) {
      const cercanas = salidasReales
        .filter(s => {
          const k = `${s.fecha_ida}_${s.fecha_vuelta}`;
          if (paresUsados.has(k)) return false;
          if (s.antiguedad_hs !== null && s.antiguedad_hs !== undefined && Number(s.antiguedad_hs) > 48) return false;
          if ((s.dias_restantes || 0) >= 140) return false;
          const d = new Date(s.fecha_ida + 'T00:00:00');
          return Math.abs((d - centroMes) / (1000 * 60 * 60 * 24)) <= 45;
        })
        .sort((a, b) => {
          const ta = tierFrescura(a.antiguedad_hs);
          const tb = tierFrescura(b.antiguedad_hs);
          if (ta !== tb) return ta - tb;
          const da = Math.abs((new Date(a.fecha_ida + 'T00:00:00') - centroMes) / 86400000);
          const db = Math.abs((new Date(b.fecha_ida + 'T00:00:00') - centroMes) / 86400000);
          if (Math.abs(da - db) > 7) return da - db;
          return a.precio_usd - b.precio_usd;
        });

      for (const c of cercanas) {
        if (sel.length >= 2) break;
        if (sel.length === 1) {
          const d1 = new Date(sel[0].fecha_ida + 'T00:00:00');
          const d2 = new Date(c.fecha_ida + 'T00:00:00');
          if (Math.abs((d2 - d1) / (1000 * 60 * 60 * 24)) < 3) continue;
        }
        const k = `${c.fecha_ida}_${c.fecha_vuelta}`;
        sel.push({
          ...c,
          opcion: sel.length + 1,
          etiqueta_opcion: sel.length === 0 ? 'Salida A' : 'Salida B'
        });
        paresUsados.add(k);
      }
    }

    if (sel.length < 2) {
      for (const p of prevValidas) {
        if (p.fecha_ida.startsWith(prefijo) && !paresUsados.has(`${p.fecha_ida}_${p.fecha_vuelta}`)) {
          const k = `${p.fecha_ida}_${p.fecha_vuelta}`;
          sel.push({
            ...p,
            opcion: sel.length + 1,
            etiqueta_opcion: sel.length === 0 ? 'Salida A' : 'Salida B'
          });
          paresUsados.add(k);
          if (sel.length >= 2) break;
        }
      }
    }
    if (sel.length === 0) {
      const disp = salidasReales.find(s => !paresUsados.has(`${s.fecha_ida}_${s.fecha_vuelta}`)) || salidasReales[0];
      sel.push({ ...disp, opcion: 1, etiqueta_opcion: 'Salida A' });
      paresUsados.add(`${disp.fecha_ida}_${disp.fecha_vuelta}`);
    }

    const ahorroMes = Math.max(10, Math.round(baseAhorroNum * (1 - (i * 0.17))));
    meses.push({
      key: `mes${i + 1}`,
      nombre: `${MESES_NOMBRES[m]} ${y}`,
      nombre_mes: `${MESES_NOMBRES[m]} ${y}`,
      nombre_corto: MESES_ABR[m + 1],
      año: y,
      ahorro_porcentaje: `${ahorroMes}% OFF`,
      ahorro_pct_num: ahorroMes,
      salidas: sel
    });
  }

  const lejanas = salidasReales.filter(s => s.dias_restantes >= 140);
  const ebRef = lejanas[0] || salidasReales[salidasReales.length - 1];
  const ebDate = new Date(ebRef.fecha_ida + 'T00:00:00');
  const ahorroEb = Math.max(15, Math.round(baseAhorroNum * 0.92));
  const earlyBird = {
    key: 'mes6',
    nombre: `A 6 Meses (${MESES_ABR[ebDate.getMonth() + 1]} ${ebDate.getFullYear()})`,
    nombre_corto: '6 Meses',
    año: ebDate.getFullYear(),
    ahorro_porcentaje: `${ahorroEb}% OFF`,
    ahorro_pct_num: ahorroEb,
    salidas: [{ ...ebRef, opcion: 1, etiqueta_opcion: '🎯 Early Bird' }]
  };

  const salidasCercanas = salidasReales.filter(s => s.dias_restantes <= 90);
  const flashTop = salidasCercanas[0] || salidasReales[0];
  const precioFlashTexto = esCabotaje
    ? formatearArs(flashTop.precio_ars)
    : `US$ ${flashTop.precio_usd.toLocaleString('es-AR')}`;
  const precioSecTexto = esCabotaje
    ? `US$ ${flashTop.precio_usd} aprox`
    : `aprox. ${formatearArs(flashTop.precio_ars)}`;

  return {
    salidas_reales: salidasReales,
    salidas_reales_cazadas: {
      iata: iataRaw,
      ciudad: dest.ciudad,
      actualizado_at: ahoraIso,
      fuente: 'aviasales_live_vercel',
      meses,
      early_bird: earlyBird,
      mapa_tabs: { mes1: meses[0], mes2: meses[1], mes3: meses[2], mes6: earlyBird }
    },
    oportunidad_relampago: {
      ...(dest.oportunidad_relampago || {}),
      activa: true,
      subtitulo: `Salida en ${flashTop.dias_restantes} días · ${formatearDeteccionRolli(flashTop.antiguedad_hs)}`,
      aerolinea: flashTop.aerolinea_gate,
      fechas: flashTop.fechas_texto,
      fechas_texto: flashTop.fechas_texto,
      fecha_ida: flashTop.fecha_ida,
      fecha_vuelta: flashTop.fecha_vuelta,
      noches: flashTop.noches,
      dias_para_el_vuelo: flashTop.dias_restantes,
      precio_ars: flashTop.precio_ars,
      precio_usd_num: flashTop.precio_usd,
      precio: precioFlashTexto,
      precio_usd: precioSecTexto,
      found_at: flashTop.found_at || null,
      antiguedad_hs: flashTop.antiguedad_hs,
      google_flights_url: flashTop.google_flights_url,
      kiwi_url: flashTop.kiwi_url,
      actualizado_utc: ahoraIso,
      fuente: 'Aviasales Live 3h'
    }
  };
}

module.exports = async function handler(req, res) {
  const origin = req.headers && req.headers.origin ? String(req.headers.origin) : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.flightbot.com.ar');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 1. Si existe BACKEND_API_URL configurado y activo, usarlo como prioridad
  const backendUrl = process.env.BACKEND_API_URL;
  if (isSafeRemoteHttpsUrl(backendUrl)) {
    try {
      const baseUrl = backendUrl.trim().replace(/\/+$/, '');
      const apiUrl = baseUrl.endsWith('/api/vuelos') ? baseUrl : `${baseUrl}/api/vuelos`;

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);

      const remoteRes = await fetch(apiUrl, {
        method: 'GET',
        redirect: 'manual',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'FlightBot-Vercel-Proxy/2.1'
        },
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (remoteRes.ok) {
        const rawRemote = await remoteRes.json();
        const data = Array.isArray(rawRemote) ? rawRemote.map(normalizarCategoriaRegion) : rawRemote;
        res.setHeader('X-Radar-Source', 'backend-proxy');
        res.setHeader('Cache-Control', 's-maxage=10800, stale-while-revalidate=21600');
        return res.status(200).json(data);
      }
    } catch (_error) {
      // Backend offline: continuar al enriquecedor Travelpayouts
    }
  }

  // 2. Cargar catálogo local base (57 destinos) para preservar fotos, descripciones, hoteles y estructura
  const catalogoRaw = cargarDatosLocales();
  if (!Array.isArray(catalogoRaw) || catalogoRaw.length === 0) {
    return res.status(500).json({ error: 'Catálogo de vuelos no disponible' });
  }
  const catalogo = catalogoRaw.map(normalizarCategoriaRegion);

  // 3. Enriquecimiento de tasas vivas y Travelpayouts / Aviasales Data API v2 ($0)
  const { usdArs: TIPO_CAMBIO_VIVO, eurUsd: EUR_USD_VIVO } = await obtenerTiposCambioEnVivo();
  res.setHeader('X-FlightBot-Usd-Ars', String(TIPO_CAMBIO_VIVO));
  res.setHeader('X-FlightBot-Eur-Usd', String(EUR_USD_VIVO));

  const tpToken = (process.env.TRAVELPAYOUTS_API_KEY || process.env.TRAVELPAYOUTS_TOKEN || '').trim();
  if (!tpToken) {
    res.setHeader('X-Radar-Source', 'local-snapshot');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    return res.status(200).json(catalogo);
  }

  try {
    const urlArs = `https://api.travelpayouts.com/v2/prices/latest?currency=ars&origin=BUE&period_type=year&page=1&limit=1000&show_to_affiliates=true&sorting=price&token=${tpToken}`;
    const urlUsd = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&period_type=year&page=1&limit=1000&show_to_affiliates=true&sorting=price&token=${tpToken}`;

    // Consultas específicas paralelas para rutas troncales que garantizan frescura total
    const rutasEspecificasArs = ['BRC', 'COR', 'MDZ', 'IGR', 'USH', 'FTE', 'SLA', 'JUJ', 'NQN', 'REL', 'CPC'];
    const rutasEspecificasUsd = ['GIG', 'FLN', 'MIA', 'CUN', 'PUJ', 'AUA', 'JFK', 'MCO', 'MAD', 'BCN', 'FCO', 'CDG', 'LHR', 'LIS'];

    const promesasArs = rutasEspecificasArs.map(code =>
      consultarTravelpayouts(`https://api.travelpayouts.com/v2/prices/latest?currency=ars&origin=BUE&destination=${code}&period_type=year&page=1&limit=100&show_to_affiliates=true&sorting=price&token=${tpToken}`)
    );
    const promesasUsd = rutasEspecificasUsd.map(code =>
      consultarTravelpayouts(`https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&destination=${code}&period_type=year&page=1&limit=100&show_to_affiliates=true&sorting=price&token=${tpToken}`)
    );

    const [resGlobalArs, resGlobalUsd, ...resEspecificas] = await Promise.allSettled([
      consultarTravelpayouts(urlArs),
      consultarTravelpayouts(urlUsd),
      ...promesasArs,
      ...promesasUsd
    ]);

    const itemsArs = resGlobalArs.status === 'fulfilled' ? resGlobalArs.value : [];
    const itemsUsd = resGlobalUsd.status === 'fulfilled' ? resGlobalUsd.value : [];

    const extraArs = resEspecificas.slice(0, rutasEspecificasArs.length)
      .flatMap(r => r.status === 'fulfilled' ? r.value : []);
    const extraUsd = resEspecificas.slice(rutasEspecificasArs.length)
      .flatMap(r => r.status === 'fulfilled' ? r.value : []);

    // Combinar elementos en mapas ordenados por precio (excluyendo Flybondi)
    const mapArs = {};
    for (const it of [...itemsArs, ...extraArs]) {
      if (it && it.destination && !esFlybondi(it)) {
        if (!mapArs[it.destination]) mapArs[it.destination] = [];
        mapArs[it.destination].push(it);
      }
    }

    const mapUsd = {};
    for (const it of [...itemsUsd, ...extraUsd]) {
      if (it && it.destination && !esFlybondi(it)) {
        if (!mapUsd[it.destination]) mapUsd[it.destination] = [];
        mapUsd[it.destination].push(it);
      }
    }

    // Etapa 2: consultar en paralelo las rutas secundarias que quedaron con < 4 ofertas en Etapa 1
    const faltantesUsd = new Set();
    for (const dest of catalogo) {
      const esCab = dest.es_cabotaje === true || dest.categoria_region === 'cabotaje';
      if (esCab) continue;
      const primaryIata = String(dest.iata || '').toUpperCase().split('/')[0].trim();
      const codigos = IATA_ALIASES[primaryIata] || [primaryIata];
      const totalObs = codigos.reduce((acc, c) => acc + ((mapUsd[c] || []).length), 0);
      if (totalObs < 4 && primaryIata) {
        faltantesUsd.add(codigos[0]);
      }
    }
    if (faltantesUsd.size > 0) {
      const promesasSec = Array.from(faltantesUsd).slice(0, 35).map(code =>
        consultarTravelpayouts(
          `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&destination=${code}&period_type=year&page=1&limit=100&show_to_affiliates=true&sorting=price&token=${tpToken}`,
          2200
        )
      );
      const resSec = await Promise.allSettled(promesasSec);
      for (const r of resSec) {
        if (r.status !== 'fulfilled' || !Array.isArray(r.value)) continue;
        for (const it of r.value) {
          if (it && it.destination && !esFlybondi(it)) {
            if (!mapUsd[it.destination]) mapUsd[it.destination] = [];
            mapUsd[it.destination].push(it);
          }
        }
      }
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const ahoraIso = new Date().toISOString();

    // Mapear cada uno de los 57 destinos del catálogo con las mejores ofertas vivas
    const catalogoDinamico = catalogo.map(dest => {
      const iataRaw = (dest.iata || '').toUpperCase();
      const primaryIata = iataRaw.split('/')[0].trim();
      const codigosBusqueda = IATA_ALIASES[primaryIata] || [primaryIata];
      const destId = String(dest.id || '').toLowerCase();
      const esCabotaje = dest.es_cabotaje === true || dest.categoria_region === 'cabotaje';
      const esEuropa = EUROPE_DEST_IDS.has(destId);

      // Recolectar ofertas de todos los aeropuertos alias del destino
      let ofertasRaw = [];
      for (const code of codigosBusqueda) {
        const lista = esCabotaje
          ? (mapArs[code] || [])
          : (mapUsd[code] || []);
        ofertasRaw.push(...lista);
      }
      ofertasRaw.sort((a, b) => Number(a.value || 0) - Number(b.value || 0));

      // Construir salidas reales para Relámpago antes de aplicar el recorte largo del Radar
      const relampagoVivo = construirSalidasRelampagoEnVivo(dest, ofertasRaw, hoy, TIPO_CAMBIO_VIVO);

      // Umbral mínimo de compra anticipada según región y estadía lógica (3 a 21 noches)
      let diasCorte = 45;
      if (esCabotaje) {
        diasCorte = 45;
      } else if (dest.categoria_region === 'europa_mundo') {
        diasCorte = 90;
      } else if (dest.categoria_region === 'brasil' || ['GIG', 'PUJ', 'SCL', 'CUZ'].includes(primaryIata)) {
        diasCorte = 60;
      } else if (['caribe', 'america', 'caribe_usa'].includes(dest.categoria_region) || ['MIA', 'MCO', 'JFK', 'AUA', 'CUN', 'CUR', 'HAV', 'MEX'].includes(primaryIata)) {
        diasCorte = 75;
      } else {
        diasCorte = 60;
      }

      const maxNoches = esCabotaje ? 14 : (dest.categoria_region === 'brasil' ? 15 : 21);
      const fechaMinima = new Date(hoy.getTime() + (diasCorte * 24 * 60 * 60 * 1000));

      const filtrarPorEstadia = (lista, minDiasFecha, minN, maxN) => {
        const vistas = new Set();
        const out = [];
        for (const o of lista) {
          if (!o.depart_date || !o.return_date || !o.value) continue;
          const depDate = new Date(o.depart_date + 'T00:00:00');
          const retDate = new Date(o.return_date + 'T00:00:00');
          if (depDate < minDiasFecha) continue;
          const nCalc = Math.round((retDate - depDate) / (1000 * 60 * 60 * 24));
          if (nCalc < minN || nCalc > maxN) continue;
          const key = `${o.depart_date}_${o.return_date}`;
          if (vistas.has(key)) continue;
          vistas.add(key);
          out.push(o);
        }
        return out;
      };

      let ofertasValidas = filtrarPorEstadia(ofertasRaw, fechaMinima, 3, maxNoches);
      if (ofertasValidas.length === 0) {
        const fecha7d = new Date(hoy.getTime() + (7 * 24 * 60 * 60 * 1000));
        ofertasValidas = filtrarPorEstadia(ofertasRaw, fecha7d, 3, maxNoches);
      }
      if (ofertasValidas.length === 0) {
        const fecha3d = new Date(hoy.getTime() + (3 * 24 * 60 * 60 * 1000));
        ofertasValidas = filtrarPorEstadia(ofertasRaw, fecha3d, 2, 28);
      }

      if (ofertasValidas.length === 0 && !relampagoVivo) {
        return dest; // Conservar datos base ya sincronizados si no hay cotización nueva en el feed
      }

      // Clonar destino para mutación limpia
      const destActualizado = JSON.parse(JSON.stringify(dest));
      if (relampagoVivo) {
        destActualizado.salidas_reales = relampagoVivo.salidas_reales;
        destActualizado.salidas_reales_cazadas = relampagoVivo.salidas_reales_cazadas;
        destActualizado.oportunidad_relampago = relampagoVivo.oportunidad_relampago;
      }

      if (ofertasValidas.length === 0) {
        return destActualizado;
      }

      const vuelosBase = Array.isArray(destActualizado.vuelos) ? destActualizado.vuelos : [];

      const nuevosVuelos = vuelosBase.map((vueloBase, idx) => {
        const oferta = ofertasValidas[idx] || ofertasValidas[0];
        if (!oferta) return vueloBase;

        const depDate = new Date(oferta.depart_date + 'T00:00:00');
        const retDate = new Date(oferta.return_date + 'T00:00:00');
        const nochesCalc = Math.max(2, Math.round((retDate - depDate) / (1000 * 60 * 60 * 24)));
        const fechasLegibles = formatearRangoFechas(oferta.depart_date, oferta.return_date);

        const aerolineaNombre = (vueloBase.aerolinea && !vueloBase.aerolinea.includes('Flybondi'))
          ? vueloBase.aerolinea
          : (esCabotaje ? 'JetSMART' : 'Aerolínea Oficial');

        // Usar estrictamente la tarifa real devuelta por Travelpayouts sin multiplicadores sintéticos
        const valorReal = Number(oferta.value);
        let precioFormateado = '';
        let precioNumArs = 0;
        let precioNumUsd = 0;

        if (esCabotaje) {
          const valArs = Math.round(valorReal);
          precioNumArs = valArs;
          precioNumUsd = Math.max(1, Math.round(valArs / TIPO_CAMBIO_VIVO));
          precioFormateado = `${formatearArs(valArs)} (US$ ${precioNumUsd} aprox)`;
        } else if (esEuropa) {
          const valUsd = Math.round(valorReal);
          const valEur = Math.max(1, Math.round(valUsd / EUR_USD_VIVO));
          precioNumUsd = valUsd;
          precioNumArs = Math.round(valUsd * TIPO_CAMBIO_VIVO);
          precioFormateado = `€ ${valEur.toLocaleString('es-AR')} (aprox. ${formatearArs(precioNumArs)})`;
        } else {
          const valUsd = Math.round(valorReal);
          precioNumUsd = valUsd;
          precioNumArs = Math.round(valUsd * TIPO_CAMBIO_VIVO);
          precioFormateado = `US$ ${valUsd.toLocaleString('es-AR')} (aprox. ${formatearArs(precioNumArs)})`;
        }

        return {
          ...vueloBase,
          aerolinea: aerolineaNombre,
          fechas: fechasLegibles,
          fecha_ida: oferta.depart_date,
          fecha_vuelta: oferta.return_date,
          noches: nochesCalc,
          precio: precioFormateado,
          precio_ars: precioNumArs,
          precio_usd: precioNumUsd,
          actualizado_en_vivo: true
        };
      });

      destActualizado.vuelos = nuevosVuelos;

      // Sincronizar precio_desde y el termómetro de tarifas con percentiles reales de las ofertas observadas
      if (nuevosVuelos.length > 0) {
        const primerVuelo = nuevosVuelos[0];
        let labelPin = '';
        let valBase = 0;
        const valoresObs = ofertasValidas
          .map(o => Number(o.value || 0))
          .filter(v => v > 0)
          .map(v => esCabotaje ? Math.round(v) : (esEuropa ? Math.max(1, Math.round(v * 0.92)) : Math.round(v)))
          .sort((a, b) => a - b);

        if (esCabotaje) {
          labelPin = formatearArs(primerVuelo.precio_ars);
          destActualizado.precio_desde = `${labelPin} (US$ ${primerVuelo.precio_usd})`;
          valBase = primerVuelo.precio_ars;
        } else if (esEuropa) {
          const valEur = Math.max(1, Math.round(primerVuelo.precio_usd * 0.92));
          labelPin = `€ ${valEur.toLocaleString('es-AR')}`;
          destActualizado.precio_desde = labelPin;
          valBase = valEur;
        } else {
          labelPin = `US$ ${primerVuelo.precio_usd.toLocaleString('es-AR')}`;
          destActualizado.precio_desde = labelPin;
          valBase = primerVuelo.precio_usd;
        }

        if (destActualizado.termometro && typeof destActualizado.termometro === 'object') {
          const fmtMoneda = (n) => esCabotaje
            ? formatearArs(n)
            : (esEuropa ? `€ ${Math.round(n).toLocaleString('es-AR')}` : `US$ ${Math.round(n).toLocaleString('es-AR')}`);

          if (valoresObs.length >= 2) {
            const minReal = valoresObs[0];
            const maxReal = valoresObs[valoresObs.length - 1];
            const medianaReal = valoresObs[Math.floor(valoresObs.length / 2)];
            const span = maxReal - minReal;
            const posPct = span > 0
              ? Math.max(8, Math.min(92, Math.round(((valBase - minReal) / span) * 100)))
              : 25;
            const nivelReal = posPct <= 35 ? 'bajo' : (posPct >= 75 ? 'alto' : 'normal');

            destActualizado.termometro.nivel = nivelReal;
            destActualizado.termometro.posicion_pct = posPct;
            destActualizado.termometro.rango_min = fmtMoneda(minReal);
            destActualizado.termometro.rango_max = fmtMoneda(maxReal);
            destActualizado.termometro.observaciones_reales = valoresObs.length;
            destActualizado.termometro.fuente_datos = 'ofertas_reales_aviasales';
            destActualizado.termometro.texto_pin = nivelReal === 'bajo'
              ? `${labelPin} · mínimo observado`
              : `${labelPin} · tarifa vigente`;
            if (nivelReal === 'bajo') {
              destActualizado.termometro.mensaje = `Tarifa en el tramo más bajo de las ${valoresObs.length} salidas analizadas.`;
            } else if (nivelReal === 'alto') {
              destActualizado.termometro.mensaje = `Precio por encima del promedio observado (${fmtMoneda(medianaReal)}). Conviene activar alerta.`;
            } else {
              destActualizado.termometro.mensaje = `Tarifa habitual frente al promedio observado (${fmtMoneda(medianaReal)}).`;
            }

            // Construir serie de 5 valores reales observados (de mayor a menor hacia el mínimo vigente)
            const serieDesc = [...valoresObs].reverse().slice(0, 5);
            while (serieDesc.length < 5) {
              serieDesc.unshift(serieDesc[0]);
            }
            destActualizado.termometro.historial_valores = serieDesc.map(v => Math.round(v));

            // Detectar caída >= 20% frente a la mediana observada de la ruta
            if (medianaReal > 0 && valBase <= medianaReal * 0.80) {
              const descPct = Math.round(((medianaReal - valBase) / medianaReal) * 100);
              const existingRel = destActualizado.oportunidad_relampago || {};
              const keepRelDates = Boolean(existingRel.fuente === 'Aviasales Live 3h' && existingRel.fecha_ida);
              destActualizado.oportunidad_relampago = {
                ...existingRel,
                activa: true,
                descuento_pct: descPct,
                criterio: 'caida_20pct_observada',
                fecha_ida: keepRelDates ? existingRel.fecha_ida : primerVuelo.fecha_ida,
                fecha_vuelta: keepRelDates ? existingRel.fecha_vuelta : primerVuelo.fecha_vuelta,
                fechas: keepRelDates ? existingRel.fechas : primerVuelo.fechas,
                noches: keepRelDates ? existingRel.noches : primerVuelo.noches
              };
            }
          } else {
            destActualizado.termometro.texto_pin = `${labelPin} · tarifa vigente`;
            destActualizado.termometro.observaciones_reales = valoresObs.length || 1;
          }
        }
      }

      return destActualizado;
    });

    // 4. Servir con caché en Edge CDN de Vercel (3 horas frescas = 10800s, alineado a la cadencia 3h)
    res.setHeader('X-Radar-Source', 'live-travelpayouts');
    res.setHeader('X-Radar-Updated-At', ahoraIso);
    res.setHeader('Access-Control-Expose-Headers', 'X-FlightBot-Usd-Ars, X-FlightBot-Eur-Usd, X-Radar-Source, X-Radar-Updated-At');
    res.setHeader('Cache-Control', 's-maxage=10800, stale-while-revalidate=21600');
    return res.status(200).json(catalogoDinamico);
  } catch (_err) {
    // 5. Fallback resiliente al catálogo local si falla el pipeline de Travelpayouts
    res.setHeader('X-Radar-Source', 'local-fallback');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    return res.status(200).json(catalogo);
  }
};

module.exports.default = module.exports;
