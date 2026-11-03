/**
 * FlightBot - API Endpoint Serverless: /api/auth/me
 * Retorna los datos del usuario actual y su balance de tokens.
 * Aplica recarga semanal automática (Rollover) si corresponde.
 */

const {
  verificarJwt,
  firmarJwt,
  parsearCookies,
  sincronizarTokensUsuario,
} = require('./_utils');

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido. Use GET.' });
  }

  try {
    const cookies = parsearCookies(req.headers.cookie);
    const sessionToken = cookies.fb_session;

    if (!sessionToken) {
      return res.status(200).json({
        authenticated: false,
        user: null,
      });
    }

    const payload = verificarJwt(sessionToken);
    if (!payload) {
      return res.status(200).json({
        authenticated: false,
        user: null,
      });
    }

    // Comprobar si corresponde recarga de tokens por inicio de nueva semana
    const semanaPrevia = payload.last_reset_week;
    sincronizarTokensUsuario(payload);

    // Si cambió la semana, renovar la cookie con los tokens actualizados
    if (payload.last_reset_week !== semanaPrevia) {
      const nuevoToken = firmarJwt(payload);
      const isProd = process.env.NODE_ENV === 'production' || origin.startsWith('https://');
      const cookieFlags = [
        `fb_session=${nuevoToken}`,
        'Path=/',
        'HttpOnly',
        'SameSite=Lax',
        'Max-Age=2592000',
      ];
      if (isProd) cookieFlags.push('Secure');
      res.setHeader('Set-Cookie', cookieFlags.join('; '));
    }

    return res.status(200).json({
      authenticated: true,
      user: {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        tokens_available: payload.tokens_available,
        max_tokens: payload.max_tokens,
        telegram_linked: Boolean(payload.telegram_id),
      },
    });
  } catch (error) {
    console.error('[Auth Me] Error:', error);
    return res.status(500).json({ error: 'Error interno verificando sesión.' });
  }
};
