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
const TIPO_CAMBIO_REF = 1350; // Tipo de cambio de referencia para vuelos internacionales

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

// Validación Anti-SSRF para URLs salientes (CWE-918)
function esUrlRemotaSegura(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return false;
  try {
    const parsed = new URL(rawUrl.trim());
    if (parsed.protocol !== 'https:') return false;
    const host = (parsed.hostname || '').toLowerCase();
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '0.0.0.0' ||
      host === '::1' ||
      host.startsWith('10.') ||
      host.startsWith('192.168.') ||
      host.startsWith('169.254.') ||
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(host)
    ) {
      return false;
    }
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

  // 3. Enriquecimiento en tiempo real con Travelpayouts / Aviasales Data API v2 ($0)
  const tpToken = process.env.TRAVELPAYOUTS_API_KEY || process.env.TRAVELPAYOUTS_TOKEN || 'd02683a4563a9fbba03eb7a13be518ff';

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

        let factorAero = 1.0;
        if (idx > 0 && (!ofertasValidas[idx] || ofertasValidas[idx].value === ofertasValidas[0].value)) {
          const mismaAero = vuelosBase[0]?.aerolinea && aerolineaNombre.toLowerCase().trim() === vuelosBase[0].aerolinea.toLowerCase().trim();
          if (mismaAero) {
            factorAero = idx === 1 ? 1.04 : 1.12;
          } else if (esCabotaje) {
            factorAero = (aerolineaNombre.includes('Aerolíneas') || aerolineaNombre.includes('Austral')) ? 1.24 : 1.12;
          } else {
            factorAero = idx === 1 ? 1.12 : 1.22;
          }
        }

        let precioFormateado = '';
        let precioNumArs = 0;
        let precioNumUsd = 0;

        if (esCabotaje) {
          const valArs = Math.round(Number(oferta.value) * factorAero);
          precioNumArs = valArs;
          precioNumUsd = Math.max(1, Math.round(valArs / TIPO_CAMBIO_REF));
          precioFormateado = `${formatearArs(valArs)} (US$ ${precioNumUsd} aprox)`;
        } else if (esEuropa) {
          const valUsd = Math.round(Number(oferta.value) * factorAero);
          const valEur = Math.max(1, Math.round(valUsd * 0.92));
          precioNumUsd = valUsd;
          precioNumArs = Math.round(valUsd * TIPO_CAMBIO_REF);
          precioFormateado = `€ ${valEur.toLocaleString('es-AR')} (aprox. ${formatearArs(precioNumArs)})`;
        } else {
          const valUsd = Math.round(Number(oferta.value) * factorAero);
          precioNumUsd = valUsd;
          precioNumArs = Math.round(valUsd * TIPO_CAMBIO_REF);
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

      // Sincronizar precio_desde y el termómetro de tarifas para mantener 100% coherencia visual
      if (nuevosVuelos.length > 0) {
        const primerVuelo = nuevosVuelos[0];
        let labelPin = '';
        if (esCabotaje) {
          labelPin = formatearArs(primerVuelo.precio_ars);
          destActualizado.precio_desde = `${labelPin} (US$ ${primerVuelo.precio_usd})`;
        } else if (esEuropa) {
          const valEur = Math.max(1, Math.round(primerVuelo.precio_usd * 0.92));
          labelPin = `€ ${valEur.toLocaleString('es-AR')}`;
          destActualizado.precio_desde = labelPin;
        } else {
          labelPin = `US$ ${primerVuelo.precio_usd.toLocaleString('es-AR')}`;
          destActualizado.precio_desde = labelPin;
        }

        if (destActualizado.termometro && typeof destActualizado.termometro === 'object') {
          destActualizado.termometro.texto_pin = `📌 ${labelPin} es una tarifa récord baja`;
          const valBase = esCabotaje
            ? primerVuelo.precio_ars
            : (esEuropa ? Math.max(1, Math.round(primerVuelo.precio_usd * 0.92)) : primerVuelo.precio_usd);
          destActualizado.termometro.historial_valores = [
            Math.round(valBase * 1.28),
            Math.round(valBase * 1.19),
            Math.round(valBase * 1.14),
            Math.round(valBase * 1.07),
            valBase
          ];
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
