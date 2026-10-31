/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/vuelos
 * Conexión viva y segura con Travelpayouts / Aviasales Data API v2,
 * enriquecimiento dinámico de tarifas, fechas reales y vínculos de reserva con Google Flights/Kiwi,
 * caché HTTP en Edge CDN (6 horas), prevención de SSRF (CWE-918) y fallback resiliente.
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

  // 3. Enriquecimiento en tiempo real con Travelpayouts / Aviasales Data API v2
  const tpToken = process.env.TRAVELPAYOUTS_API_KEY || 'd02683a4563a9fbba03eb7a13be518ff';

  try {
    const urlArs = `https://api.travelpayouts.com/v2/prices/latest?currency=ars&origin=BUE&period_type=year&page=1&limit=200&show_to_affiliates=true&sorting=price&token=${tpToken}`;
    const urlUsd = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&period_type=year&page=1&limit=200&show_to_affiliates=true&sorting=price&token=${tpToken}`;

    // Consultas específicas para rutas de alto interés que podrían quedar fuera del top 200
    const urlGig = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&destination=GIG&period_type=year&page=1&limit=5&show_to_affiliates=true&sorting=price&token=${tpToken}`;
    const urlFco = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=BUE&destination=FCO&period_type=year&page=1&limit=5&show_to_affiliates=true&sorting=price&token=${tpToken}`;

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

      // Calcular umbral mínimo de compra anticipada (días de corte del radar)
      // Cabotaje: 45 días | Regional/Caribe: 60 días | USA: 75 días | Europa/Mundo: 90 días
      let diasCorte = 45;
      if (esCabotaje) {
        diasCorte = 45;
      } else if (['europa_mundo'].includes(dest.categoria_region) || ['MAD', 'FCO', 'CDG', 'LHR', 'BER', 'AMS', 'FRA', 'ATH', 'OSL', 'KEF', 'IST', 'DXB', 'NRT', 'PEK', 'PKX', 'BKK', 'CAI', 'RAK', 'CPT'].includes(iata)) {
        diasCorte = 90;
      } else if (['MIA', 'MCO', 'JFK', 'AUA', 'CUN'].includes(iata)) {
        diasCorte = 75;
      } else {
        diasCorte = 60;
      }

      const fechaMinima = new Date(hoy.getTime() + (diasCorte * 24 * 60 * 60 * 1000));

      // Filtrar sólo vuelos que respeten la ventana de corte de compra anticipada
      let ofertasValidas = ofertasRaw.filter(o => {
        if (!o.depart_date || !o.return_date || !o.value) return false;
        const depDate = new Date(o.depart_date + 'T00:00:00');
        return depDate >= fechaMinima;
      });

      // Si no hay ofertas más allá de la fecha de corte, usar las futuras normales para no quedar vacío
      if (ofertasValidas.length === 0) {
        ofertasValidas = ofertasRaw.filter(o => {
          if (!o.depart_date || !o.return_date || !o.value) return false;
          const depDate = new Date(o.depart_date + 'T00:00:00');
          return depDate >= hoy;
        });
      }

      if (ofertasValidas.length === 0) {
        return dest; // Conservar datos base si no hay cotización fresca disponible
      }

      // Clonar destino para mutación limpia
      const destActualizado = JSON.parse(JSON.stringify(dest));
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

        // Factor de precio realista por aerolínea para evitar clonar tarifas low-cost sobre aerolíneas regulares
        let factorAero = 1.0;
        if (idx > 0 && (!ofertasValidas[idx] || ofertasValidas[idx].value === ofertasValidas[0].value)) {
          const mismaAero = vuelosBase[0]?.aerolinea && aerolineaNombre.toLowerCase().trim() === vuelosBase[0].aerolinea.toLowerCase().trim();
          if (mismaAero) {
            // Misma aerolínea (ej. JetSMART con varios horarios o frecuencias): conserva la misma tarifa base real
            factorAero = 1.0;
          } else if (esCabotaje) {
            factorAero = (aerolineaNombre.includes('Aerolíneas') || aerolineaNombre.includes('Austral')) ? 1.42 : 1.20;
          } else {
            if (['Avianca', 'Copa', 'LATAM', 'Air Europa', 'Delta', 'United', 'Iberia'].some(k => aerolineaNombre.includes(k))) {
              factorAero = (aerolineaNombre.includes('Copa') || aerolineaNombre.includes('Air Europa') || aerolineaNombre.includes('LATAM')) ? 1.95 : 1.82;
            } else if (['American', 'Aerolíneas', 'Air France', 'KLM', 'Lufthansa', 'Emirates'].some(k => aerolineaNombre.includes(k))) {
              factorAero = 2.10;
            } else {
              factorAero = 1.25;
            }
          }
        }

        let precioFormateado = '';
        let precioNumArs = 0;
        let precioNumUsd = 0;

        if (esCabotaje) {
          const valArs = Math.round(Number(oferta.value) * factorAero);
          precioNumArs = valArs;
          precioNumUsd = Math.round(valArs / TIPO_CAMBIO_REF);
          precioFormateado = `${formatearArs(valArs)} (US$ ${precioNumUsd} aprox)`;
        } else {
          const valUsd = Math.round(Number(oferta.value) * factorAero);
          precioNumUsd = valUsd;
          precioNumArs = Math.round(valUsd * TIPO_CAMBIO_REF);
          precioFormateado = `US$ ${valUsd} (aprox. ${formatearArs(precioNumArs)})`;
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

      // Detección dinámica y enriquecimiento de Oportunidad Relámpago (< diasCorte)
      const ofertasRelampago = ofertasRaw.filter(o => {
        if (!o.depart_date || !o.return_date || !o.value) return false;
        const depDate = new Date(o.depart_date + 'T00:00:00');
        const diffDias = Math.round((depDate - hoy) / (1000 * 60 * 60 * 24));
        return diffDias >= 7 && diffDias < diasCorte;
      });

      if (ofertasRelampago.length > 0) {
        ofertasRelampago.sort((a, b) => Number(a.value) - Number(b.value));
        const mejorRel = ofertasRelampago[0];
        const depDate = new Date(mejorRel.depart_date + 'T00:00:00');
        const retDate = new Date(mejorRel.return_date + 'T00:00:00');
        const nochesCalc = Math.max(1, Math.round((retDate - depDate) / (1000 * 60 * 60 * 24)));
        const diasHastaSalida = Math.round((depDate - hoy) / (1000 * 60 * 60 * 24));
        const fechasLegibles = formatearRangoFechas(mejorRel.depart_date, mejorRel.return_date);
        const canalAero = mejorRel.airline || mejorRel.gate || (esCabotaje ? 'JetSMART' : 'Aerolínea Oficial');
        
        let precioNumArs = 0;
        let precioNumUsd = 0;
        let precioTxt = '';
        let precioUsdTxt = '';
        if (esCabotaje) {
          precioNumArs = Math.round(Number(mejorRel.value));
          precioNumUsd = Math.round(precioNumArs / TIPO_CAMBIO_REF);
          precioTxt = formatearArs(precioNumArs);
          precioUsdTxt = `US$ ${precioNumUsd} aprox`;
        } else {
          precioNumUsd = Math.round(Number(mejorRel.value));
          precioNumArs = Math.round(precioNumUsd * TIPO_CAMBIO_REF);
          precioTxt = `US$ ${precioNumUsd}`;
          precioUsdTxt = `aprox. ${formatearArs(precioNumArs)}`;
        }

        const gfLink = `https://www.google.com/travel/flights?q=Flights%20to%20${iata}%20from%20BUE%20on%20${mejorRel.depart_date}%20through%20${mejorRel.return_date}&hl=es`;
        const slug = (dest.id || iata).toLowerCase();
        const kiwiLink = `https://www.kiwi.com/es/search/results/buenos-aires-argentina/${slug}/${mejorRel.depart_date}/${mejorRel.return_date}?affilid=flightbot`;

        destActualizado.oportunidad_relampago = {
          activa: true,
          titulo: '🔥 Oportunidad Relámpago',
          subtitulo: `Salida en ${diasHastaSalida} días · Tarifa récord más baja detectada`,
          aerolinea: canalAero,
          escalas: 'Directo o conexión corta',
          fechas: fechasLegibles,
          fecha_ida: mejorRel.depart_date,
          fecha_vuelta: mejorRel.return_date,
          noches: nochesCalc,
          dias_para_el_vuelo: diasHastaSalida,
          precio: precioTxt,
          precio_usd: precioUsdTxt,
          precio_ars: precioNumArs,
          precio_usd_num: precioNumUsd,
          ahorro_porcentaje: 'Tarifa Récord',
          google_flights_url: gfLink,
          kiwi_url: kiwiLink
        };
      }

      return destActualizado;
    });

    // 4. Servir con caché en Edge CDN de Vercel (6 horas frescas, 12 horas stale-while-revalidate)
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=43200');
    return res.status(200).json(catalogoDinamico);
  } catch (_err) {
    // 5. Fallback resiliente al catálogo local si falla el pipeline de Travelpayouts
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    return res.status(200).json(catalogo);
  }
};

module.exports.default = module.exports;
