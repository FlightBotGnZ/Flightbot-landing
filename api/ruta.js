/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/ruta
 * Cálculo vial y semáforo de rutas argentinas punto a punto.
 */

const ALLOWED_ORIGINS = new Set([
  'https://flightbot.com.ar',
  'https://www.flightbot.com.ar',
  'https://flightbot-landing.vercel.app',
  'http://localhost:8000',
  'http://127.0.0.1:8000'
]);

module.exports = async function handler(req, res) {
  const origin = req.headers && req.headers.origin ? String(req.headers.origin) : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.flightbot.com.ar');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const backendUrl = process.env.BACKEND_API_URL;
  if (backendUrl && backendUrl.startsWith('https://')) {
    try {
      const q = new URLSearchParams(req.query).toString();
      const target = `${backendUrl.replace(/\/+$/, '')}/api/ruta?${q}`;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);
      const resp = await fetch(target, { signal: controller.signal });
      clearTimeout(timeout);
      if (resp.ok) {
        const data = await resp.json();
        res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
        return res.status(200).json(data);
      }
    } catch (_e) {}
  }

  // Si no hay backend conectado, responder 204 para que el frontend use su motor client-side
  return res.status(204).end();
};

module.exports.default = module.exports;
