/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/vuelos
 * Conexión segura frontend Vercel <-> backend / Travelpayouts con caché HTTP en Edge CDN,
 * validación de origen, prevención de SSRF (CWE-918) y fallback resiliente.
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

  const backendUrl = process.env.BACKEND_API_URL;

  // 1. Si existe BACKEND_API_URL seguro, consultar el backend central
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
        res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
        return res.status(200).json(data);
      }
    } catch (_error) {
      // Backend offline o timeout: fallback resiliente
    }
  }

  // 2. Fallback resiliente cargando el catálogo local verificado de rutas
  const fallbackData = cargarDatosLocales();
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
  return res.status(200).json(fallbackData);
};

module.exports.default = module.exports;
