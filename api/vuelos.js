/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/vuelos
 * Conexión viva y segura con Travelpayouts / Aviasales Data API v2,
 * enriquecimiento dinámico de tarifas con dólar vigente vía DolarApi,
 * caché HTTP en Edge CDN (6 horas), prevención de SSRF (CWE-918) y fallback resiliente.
 */

const fs = require('fs');
const net = require('net');
const path = require('path');

const ALLOWED_ORIGINS = new Set([
  'https://flightbot.com.ar',
  'https://www.flightbot.com.ar',
  'https://flightbot-landing.vercel.app',
  'http://localhost:8000',
  'http://127.0.0.1:8000'
]);

const MESES_ABR = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const MESES_LARGO = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Mapa canónico de las 5 categorías regionales oficiales del Radar FlightBot
const CANONICAL_REGION_BY_ID = {
  bariloche: 'cabotaje', cordoba: 'cabotaje', calafate: 'cabotaje', jujuy: 'cabotaje',
  mendoza: 'cabotaje', neuquen: 'cabotaje', iguazu: 'cabotaje', madryn: 'cabotaje',
  salta: 'cabotaje', sanmartin: 'cabotaje', ushuaia: 'cabotaje',
  florianopolis: 'brasil', maceio: 'brasil', natal: 'brasil', recife: 'brasil',
  rio: 'brasil', salvador: 'brasil',
  puntacana: 'caribe', cancun: 'caribe', aruba: 'caribe', curazao: 'caribe',
  cuba: 'caribe', sanandres: 'caribe', cartagena: 'caribe', panama: 'caribe', costarica: 'caribe',
  santiago: 'america', cusco: 'america', newyork: 'america', miami: 'america',
  orlando: 'america', mexico: 'america',
  madrid: 'europa_mundo', barcelona: 'europa_mundo', lisboa: 'europa_mundo', roma: 'europa_mundo',
  paris: 'europa_mundo', londres: 'europa_mundo', berlin: 'europa_mundo', frankfurt: 'europa_mundo',
  amsterdam: 'europa_mundo', atenas: 'europa_mundo', oslo: 'europa_mundo', reikiavik: 'europa_mundo',
  estambul: 'europa_mundo', dubai: 'europa_mundo', maldivas: 'europa_mundo', bangkok: 'europa_mundo',
  tokio: 'europa_mundo', seul: 'europa_mundo', pekin: 'europa_mundo', sydney: 'europa_mundo',
  nuevazelanda: 'europa_mundo', polinesia: 'europa_mundo', elcairo: 'europa_mundo',
  marrakech: 'europa_mundo', ciudaddelcabo: 'europa_mundo'
};

function normalizarCategoriaRegion(dest) {
  if (!dest || typeof dest !== 'object') return 'europa_mundo';
  const id = String(dest.id || '').toLowerCase();
  if (CANONICAL_REGION_BY_ID[id]) return CANONICAL_REGION_BY_ID[id];
  const actual = String(dest.categoria_region || '').toLowerCase();
  if (['cabotaje', 'brasil', 'caribe', 'america', 'europa_mundo'].includes(actual)) return actual;
  return dest.es_cabotaje ? 'cabotaje' : 'europa_mundo';
}

function construirSalidasRelampagoEnVivo(dest, ofertasValidas, esCabotaje, exchangeRateArs, hoy) {
  const ahoraIso = new Date().toISOString();
  const iata = String(dest.iata || '').toUpperCase();
  const originIata = esCabotaje ? 'AEP' : 'EZE';
  const formatArsLocal = (n) => '$ ' + Math.round(n).toLocaleString('es-AR') + ' ARS';

  const salidas = ofertasValidas.slice(0, 6).map((oferta, idx) => {
    const depDate = new Date(oferta.depart_date + 'T00:00:00');
    const retDate = new Date(oferta.return_date + 'T00:00:00');
    const noches = Math.max(1, Math.round((retDate - depDate) / 86400000));
    const diasRestantes = Math.max(0, Math.round((depDate - hoy) / 86400000));
    const valorReal = Math.round(Number(oferta.value));
    const precioArs = esCabotaje ? valorReal : Math.round(valorReal * exchangeRateArs);
    const precioUsd = esCabotaje ? Math.round(valorReal / exchangeRateArs) : valorReal;

    const [, m1, d1] = String(oferta.depart_date).split('-');
    const [y2, m2, d2] = String(oferta.return_date).split('-');
    const fechasTexto = `${d1} ${MESES_ABR[parseInt(m1, 10)] || m1} - ${d2} ${MESES_ABR[parseInt(m2, 10)] || m2} ${y2}`;
    const canal = String(oferta.gate || oferta.airline || 'Kiwi.com');
    const foundAt = oferta.found_at || ahoraIso;
    const antiguedadHs = Math.max(0, Math.round(((Date.now() - new Date(foundAt).getTime()) / 3600000) * 10) / 10);

    return {
      opcion: idx + 1,
      etiqueta_opcion: `Salida ${String.fromCharCode(65 + idx)}`,
      fecha_ida: oferta.depart_date,
      fecha_vuelta: oferta.return_date,
      fechas_texto: fechasTexto,
      noches,
      dias_restantes: diasRestantes,
      precio_usd: precioUsd,
      precio_ars: precioArs,
      precio_texto: esCabotaje ? formatArsLocal(precioArs) : `US$ ${precioUsd}`,
      google_flights_url: `https://www.google.com/travel/flights?q=${encodeURIComponent(`Flights to ${iata} from ${originIata} on ${oferta.depart_date} through ${oferta.return_date}`)}&hl=es`,
      kiwi_url: `https://www.kiwi.com/es/search/results/buenos-aires-argentina/${encodeURIComponent(iata.toLowerCase())}/${oferta.depart_date}/${oferta.return_date}?affilid=flightbot`,
      aerolinea_gate: canal,
      found_at: foundAt,
      antiguedad_hs: Number.isFinite(antiguedadHs) ? antiguedadHs : 0.1,
      es_real_aviasales: true
    };
  });

  if (salidas.length === 0) return null;

  const mejor = salidas[0];
  const [y0, m0] = String(mejor.fecha_ida).split('-');
  const mesIdx = parseInt(m0, 10) || 1;
  const baseRel = (dest.oportunidad_relampago && typeof dest.oportunidad_relampago === 'object') ? dest.oportunidad_relampago : {};
  const ahorroStr = baseRel.ahorro_porcentaje || '20% OFF';

  const salidasRealesCazadas = {
    iata,
    ciudad: dest.ciudad || iata,
    actualizado_at: ahoraIso,
    meses: [
      {
        key: 'mes1',
        nombre: `${MESES_LARGO[mesIdx] || 'Próximo'} ${y0}`,
        nombre_mes: `${MESES_LARGO[mesIdx] || 'Próximo'} ${y0}`,
        nombre_corto: MESES_ABR[mesIdx] || 'Prox',
        año: Number(y0) || new Date().getFullYear(),
        ahorro_porcentaje: ahorroStr,
        ahorro_pct_num: parseInt(ahorroStr, 10) || 20,
        salidas
      }
    ]
  };

  const oportunidadRelampago = {
    ...baseRel,
    activa: true,
    titulo: baseRel.titulo || '🔥 Oportunidad Relámpago',
    subtitulo: `Salida en ${mejor.dias_restantes} días · Actualizado en vivo`,
    aerolinea: mejor.aerolinea_gate,
    fechas: mejor.fechas_texto,
    fechas_texto: mejor.fechas_texto,
    fecha_ida: mejor.fecha_ida,
    fecha_vuelta: mejor.fecha_vuelta,
    noches: mejor.noches,
    dias_para_el_vuelo: mejor.dias_restantes,
    precio: esCabotaje ? formatArsLocal(mejor.precio_ars) : `US$ ${mejor.precio_usd}`,
    precio_usd: `US$ ${mejor.precio_usd} aprox`,
    precio_ars: mejor.precio_ars,
    precio_usd_num: mejor.precio_usd,
    ahorro_porcentaje: ahorroStr,
    google_flights_url: mejor.google_flights_url,
    kiwi_url: mejor.kiwi_url,
    actualizado_at: ahoraIso,
    fuente: 'Travelpayouts Live',
    found_at: mejor.found_at,
    antiguedad_hs: mejor.antiguedad_hs
  };

  return { salidas, salidasRealesCazadas, oportunidadRelampago };
}
const EXCHANGE_RATE_FALLBACK = 1350; // Tipo de cambio de respaldo si DolarApi no responde
const FX_CACHE_TTL_MS = 30 * 60 * 1000; // Caché en memoria de 30 minutos
let exchangeRateCache = { ts: 0, usdArs: EXCHANGE_RATE_FALLBACK };

// Obtiene el tipo de cambio USD/ARS vigente vía DolarApi con caché y fallback resiliente
async function fetchLiveExchangeRate() {
  const now = Date.now();
  if ((now - exchangeRateCache.ts) < FX_CACHE_TTL_MS && exchangeRateCache.usdArs > 0) {
    return exchangeRateCache.usdArs;
  }

  let usdArs = exchangeRateCache.usdArs || EXCHANGE_RATE_FALLBACK;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);
    const res = await fetch('https://dolarapi.com/v1/dolares/bolsa', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'FlightBot-Vercel-Radar/2.0'
      },
      signal: controller.signal
    });
    clearTimeout(timer);

    if (res && res.ok) {
      const data = await res.json();
      const rawValue = Number(data && (data.venta || data.compra));
      if (Number.isFinite(rawValue) && rawValue >= 500 && rawValue <= 10000) {
        usdArs = Math.round(rawValue);
        exchangeRateCache = { ts: now, usdArs };
      }
    }
  } catch (_err) {
    // Degradar limpiamente a la última cotización conocida o al valor de respaldo
  }
  return usdArs;
}

// Verifica si una dirección IP pertenece a rangos privados, loopback o metadatos cloud (CWE-918)
function isPrivateIp(ip) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(n => parseInt(n, 10));
    return (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 100 && b >= 64 && b <= 127)
    );
  }
  if (net.isIPv6(ip)) {
    const norm = ip.toLowerCase();
    if (norm === '::' || norm === '::1') return true;
    if (norm.startsWith('::ffff:')) {
      const mapped = norm.slice(7);
      if (net.isIPv4(mapped)) return isPrivateIp(mapped);
    }
    const h0 = norm.split(':')[0] || '';
    return h0.startsWith('fc') || h0.startsWith('fd') || /^fe[89ab]/.test(h0) || h0.startsWith('ff');
  }
  return false;
}

// Validación Anti-SSRF para URLs salientes (CWE-918)
function esUrlRemotaSegura(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return false;
  try {
    const parsed = new URL(rawUrl.trim());
    if (parsed.protocol !== 'https:') return false;
    if (parsed.username || parsed.password) return false;
    const host = (parsed.hostname || '').toLowerCase().replace(/^\[|\]$/g, '');
    if (
      !host ||
      host === 'localhost' ||
      host.endsWith('.localhost') ||
      host.endsWith('.local') ||
      host.endsWith('.internal') ||
      host === 'metadata.google.internal'
    ) {
      return false;
    }
    if (net.isIP(host)) return !isPrivateIp(host);
    return true;
  } catch (_e) {
    return false;
  }
}

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
    const timer = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'FlightBot-Vercel-Radar/2.0'
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
  if (esUrlRemotaSegura(backendUrl)) {
    try {
      const baseUrl = backendUrl.trim().replace(/\/+$/, '');
      const apiUrl = baseUrl.endsWith('/api/vuelos') ? baseUrl : `${baseUrl}/api/vuelos`;

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);

      const remoteRes = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'FlightBot-Vercel-Proxy/2.0'
        },
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (remoteRes.ok) {
        const data = await remoteRes.json();
        res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=43200');
        return res.status(200).json(data);
      }
    } catch (_error) {
      // Backend offline: continuar al enriquecedor Travelpayouts
    }
  }

  // 2. Cargar catálogo local base para preservar fotos, descripciones, hoteles y estructura
  const catalogo = cargarDatosLocales();
  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    return res.status(500).json({ error: 'Catálogo de vuelos no disponible' });
  }

  // 3. Enriquecimiento en tiempo real con Travelpayouts / Aviasales Data API v2 (sin secretos hardcodeados)
  const tpToken = (process.env.TRAVELPAYOUTS_API_KEY || '').trim();
  if (!tpToken) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200');
    return res.status(200).json(catalogo);
  }

  try {
    const exchangeRateArs = await fetchLiveExchangeRate();
    const encodedToken = encodeURIComponent(tpToken);
    const urlArs = `https://api.travelpayouts.com/v2/prices/latest?currency=ars&origin=BUE&period_type=year&page=1&limit=200&show_to_affiliates=true&sorting=price&token=${encodedToken}`;
    const urlUsd = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&period_type=year&page=1&limit=200&show_to_affiliates=true&sorting=price&token=${encodedToken}`;

    // Consultas específicas para rutas de alto interés que podrían quedar fuera del top 200
    const urlGig = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&destination=GIG&period_type=year&page=1&limit=5&show_to_affiliates=true&sorting=price&token=${encodedToken}`;
    const urlFco = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&destination=FCO&period_type=year&page=1&limit=5&show_to_affiliates=true&sorting=price&token=${encodedToken}`;

    const [resArs, resUsd, resGig, resFco] = await Promise.allSettled([
      consultarTravelpayouts(urlArs),
      consultarTravelpayouts(urlUsd),
      consultarTravelpayouts(urlGig),
      consultarTravelpayouts(urlFco)
    ]);

    const itemsArs = resArs.status === 'fulfilled' ? resArs.value : [];
    const itemsUsd = resUsd.status === 'fulfilled' ? resUsd.value : [];
    const itemsGig = resGig.status === 'fulfilled' ? resGig.value : [];
    const itemsFco = resFco.status === 'fulfilled' ? resFco.value : [];

    // Combinar elementos en mapas ordenados por precio
    const mapArs = {};
    for (const it of itemsArs) {
      if (it && it.destination) {
        if (!mapArs[it.destination]) mapArs[it.destination] = [];
        mapArs[it.destination].push(it);
      }
    }

    const mapUsd = {};
    for (const it of [...itemsUsd, ...itemsGig, ...itemsFco]) {
      if (it && it.destination) {
        if (!mapUsd[it.destination]) mapUsd[it.destination] = [];
        mapUsd[it.destination].push(it);
      }
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Mapear cada destino del catálogo con las mejores ofertas vivas
    const catalogoDinamico = catalogo.map(dest => {
      const iata = (dest.iata || '').toUpperCase();
      const esCabotaje = dest.es_cabotaje === true || dest.categoria_region === 'cabotaje';

      // Seleccionar ofertas de origen según categoría de cabotaje o internacional
      const ofertasRaw = esCabotaje
        ? (mapArs[iata] || mapUsd[iata] || [])
        : (mapUsd[iata] || mapArs[iata] || []);

      // Filtrar sólo vuelos con fecha de salida futura y retorno válido
      const ofertasValidas = ofertasRaw.filter(o => {
        if (!o.depart_date || !o.return_date || !o.value) return false;
        const depDate = new Date(o.depart_date + 'T00:00:00');
        return depDate >= hoy;
      });

      if (ofertasValidas.length === 0) {
        return {
          ...dest,
          categoria_region: normalizarCategoriaRegion(dest)
        }; // Conservar datos base si no hay cotización fresca disponible
      }

      // Clonar destino para mutación limpia y normalizar región
      const destActualizado = JSON.parse(JSON.stringify(dest));
      destActualizado.categoria_region = normalizarCategoriaRegion(destActualizado);
      const vuelosBase = Array.isArray(destActualizado.vuelos) ? destActualizado.vuelos : [];

      // Actualizar los puestos de vuelo con las opciones más económicas reales
      const nuevosVuelos = vuelosBase.map((vueloBase, idx) => {
        const oferta = ofertasValidas[idx] || ofertasValidas[0];
        if (!oferta) return vueloBase;

        const depDate = new Date(oferta.depart_date + 'T00:00:00');
        const retDate = new Date(oferta.return_date + 'T00:00:00');
        const nochesCalc = Math.max(1, Math.round((retDate - depDate) / (1000 * 60 * 60 * 24)));
        const fechasLegibles = formatearRangoFechas(oferta.depart_date, oferta.return_date);

        const canalEmisor = oferta.gate || oferta.airline || 'Kiwi.com';
        const aerolineaNombre = (vueloBase.aerolinea && !vueloBase.aerolinea.includes('Flybondi'))
          ? vueloBase.aerolinea
          : canalEmisor;

        let precioFormateado = '';
        let precioNumArs = 0;
        let precioNumUsd = 0;

        // Usar estrictamente la tarifa real devuelta por la fuente externa (sin multiplicadores sintéticos)
        const valorReal = Math.round(Number(oferta.value));

        if (esCabotaje) {
          precioNumArs = valorReal;
          precioNumUsd = Math.round(valorReal / exchangeRateArs);
          precioFormateado = `${formatearArs(valorReal)} (US$ ${precioNumUsd} aprox)`;
        } else {
          precioNumUsd = valorReal;
          precioNumArs = Math.round(valorReal * exchangeRateArs);
          precioFormateado = `US$ ${valorReal} (aprox. ${formatearArs(precioNumArs)})`;
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
          emisor: canalEmisor,
          actualizado_en_vivo: true
        };
      });

      // Actualizar precio_desde del destino según el vuelo más barato
      destActualizado.vuelos = nuevosVuelos;
      if (nuevosVuelos.length > 0) {
        const primerVuelo = nuevosVuelos[0];
        if (esCabotaje) {
          destActualizado.precio_desde = `${formatearArs(primerVuelo.precio_ars)} (US$ ${primerVuelo.precio_usd})`;
        } else {
          destActualizado.precio_desde = `US$ ${primerVuelo.precio_usd}`;
        }
      }

      // Actualizar salidas relámpago en vivo para /relampago y /vuelos
      const relampagoVivo = construirSalidasRelampagoEnVivo(destActualizado, ofertasValidas, esCabotaje, exchangeRateArs, hoy);
      if (relampagoVivo) {
        destActualizado.salidas_reales = relampagoVivo.salidas;
        destActualizado.salidas_reales_cazadas = relampagoVivo.salidasRealesCazadas;
        destActualizado.oportunidad_relampago = relampagoVivo.oportunidadRelampago;
      }

      return destActualizado;
    });

    // 4. Servir con caché en Edge CDN de Vercel (6 horas frescas, 12 horas stale-while-revalidate)
    res.setHeader('X-FlightBot-Usd-Ars', String(exchangeRateArs));
    res.setHeader('X-Radar-Updated-At', new Date().toISOString());
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=43200');
    return res.status(200).json(catalogoDinamico);
  } catch (_err) {
    // 5. Fallback resiliente al catálogo local si falla el pipeline de Travelpayouts
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    return res.status(200).json(catalogo);
  }
};

module.exports.default = module.exports;
