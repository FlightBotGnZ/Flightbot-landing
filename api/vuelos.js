/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/vuelos
 * Conexión segura frontend Vercel <-> backend Docker con caché HTTP y fallback resiliente.
 * 
 * Variables de entorno (Configurable en Vercel Dashboard -> Settings -> Environment Variables):
 * - BACKEND_API_URL: URL base del backend de Docker (ej: https://api.flightbot.travel o http://1.2.3.4:8080)
 */

const fs = require('fs');
const path = require('path');

// Carga resiliente de los datos locales de respaldo (window.RADAR_DATA / radar-data.json)
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

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const backendUrl = process.env.BACKEND_API_URL;

  if (!backendUrl || typeof backendUrl !== 'string' || !backendUrl.trim()) {
    const fallback = cargarDatosLocales();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(fallback);
  }

  try {
    const baseUrl = backendUrl.trim().replace(/\/+$/, '');
    const apiUrl = baseUrl.endsWith('/api/vuelos') ? baseUrl : `${baseUrl}/api/vuelos`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const remoteRes = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'FlightBot-Vercel-Proxy/1.0'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (remoteRes.ok) {
      const data = await remoteRes.json();
      res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
      return res.status(200).json(data);
    }
  } catch (_error) {
    // Backend offline o timeout: fallback silencioso a datos locales
  }

  const fallbackData = cargarDatosLocales();
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  return res.status(200).json(fallbackData);
};

module.exports.default = module.exports;
