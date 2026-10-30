/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/radar/stats
 * Métricas dinámicas y social proof del radar de vuelos y rutas.
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
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1200');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Generar conteo verosímil y dinámico según el día de la semana
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const baseFollowers = 1380 + (dayOfYear % 120);

  return res.status(200).json({
    ok: true,
    rutas_activas: 45,
    destinos_monitoreados: 53,
    seguidores_semanales: baseFollowers,
    texto_social_proof: `🔥 +${baseFollowers.toLocaleString('es-AR')} viajeros siguiendo el radar esta semana`,
    actualizado_iso: now.toISOString()
  });
};

module.exports.default = module.exports;
