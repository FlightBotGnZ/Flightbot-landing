/**
 * FlightBot - API Endpoint Serverless: /api/auth/logout
 * Cierra la sesión activa eliminando la cookie HttpOnly.
 */

const ALLOWED_ORIGINS = new Set([
  'https://flightbot.com.ar',
  'https://www.flightbot.com.ar',
  'https://flightbot-landing.vercel.app',
  'http://localhost:8000',
  'http://127.0.0.1:8000',
]);

module.exports = async function handler(req, res) {
  const origin = req.headers && req.headers.origin ? String(req.headers.origin) : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.flightbot.com.ar');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Borrar cookie configurando Max-Age=0
  const isProd = process.env.NODE_ENV === 'production' || origin.startsWith('https://');
  const cookieFlags = [
    'fb_session=',
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=0',
    'Expires=Thu, 01 Jan 1970 00:00:00 GMT',
  ];
  if (isProd) cookieFlags.push('Secure');

  res.setHeader('Set-Cookie', cookieFlags.join('; '));

  return res.status(200).json({
    success: true,
    message: 'Sesión cerrada correctamente.',
  });
};
