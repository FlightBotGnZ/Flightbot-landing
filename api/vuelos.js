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
const TIPO_CAMBIO_FALLBACK = 1350;
const EUR_USD_FALLBACK = 1.08;
const CACHE_TASAS_TTL_MS = 3 * 60 * 60 * 1000;
let _cacheTasasVivo = { ts: 0, usdArs: TIPO_CAMBIO_FALLBACK, eurUsd: EUR_USD_FALLBACK };

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
async function consultarTravelpayouts(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);
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
        const data = await remoteRes.json();
        res.setHeader('Cache-Control', 's-maxage=10800, stale-while-revalidate=21600');
        return res.status(200).json(data);
      }
    } catch (_error) {
      // Backend offline: continuar al enriquecedor Travelpayouts
    }
  }

  // 2. Cargar catálogo local base (57 destinos) para preservar fotos, descripciones, hoteles y estructura
  const catalogo = cargarDatosLocales();
  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    return res.status(500).json({ error: 'Catálogo de vuelos no disponible' });
  }

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
      consultarTravelpayouts(`https://api.travelpayouts.com/v2/prices/latest?currency=ars&origin=BUE&destination=${code}&period_type=year&page=1&limit=15&show_to_affiliates=true&sorting=price&token=${tpToken}`)
    );
    const promesasUsd = rutasEspecificasUsd.map(code =>
      consultarTravelpayouts(`https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&destination=${code}&period_type=year&page=1&limit=15&show_to_affiliates=true&sorting=price&token=${tpToken}`)
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

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

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

      // Umbral mínimo de compra anticipada según región y estadía lógica (3 a 21 noches)
      let diasCorte = 45;
      if (esCabotaje) {
        diasCorte = 45;
      } else if (dest.categoria_region === 'europa_mundo') {
        diasCorte = 90;
      } else if (['MIA', 'MCO', 'JFK', 'AUA', 'CUN', 'CUR', 'HAV', 'MEX'].includes(primaryIata)) {
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

      if (ofertasValidas.length === 0) {
        return dest; // Conservar datos base ya sincronizados si no hay cotización nueva en el feed
      }

      // Clonar destino para mutación limpia
      const destActualizado = JSON.parse(JSON.stringify(dest));
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
              destActualizado.oportunidad_relampago = {
                ...(destActualizado.oportunidad_relampago || {}),
                activa: true,
                descuento_pct: descPct,
                criterio: 'caida_20pct_observada',
                fecha_ida: primerVuelo.fecha_ida,
                fecha_vuelta: primerVuelo.fecha_vuelta,
                fechas: primerVuelo.fechas,
                noches: primerVuelo.noches
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
    res.setHeader('Cache-Control', 's-maxage=10800, stale-while-revalidate=21600');
    return res.status(200).json(catalogoDinamico);
  } catch (_err) {
    // 5. Fallback resiliente al catálogo local si falla el pipeline de Travelpayouts
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    return res.status(200).json(catalogo);
  }
};

module.exports.default = module.exports;
