/**
 * FlightBot - API Endpoint Serverless: /api/auth/telegram-sync
 * Genera un ticket efímero de un solo uso para vincular la cuenta Web con Telegram.
 * Otorga el bono de +1 token de regalo al completarse en Telegram.
 */

const {
  verificarJwt,
  firmarJwt,
  parsearCookies,
} = require('./_utils');

const ALLOWED_ORIGINS = new Set([
  'https://flightbot.com.ar',
  'https://www.flightbot.com.ar',
  'https://flightbot-landing.vercel.app',
  'http://localhost:8000',
  'http://127.0.0.1:8000',
]);

const BOT_USERNAME = process.env.TELEGRAM_BOT_USERNAME || 'GnZFlightBot';

module.exports = async function handler(req, res) {
  const origin = req.headers && req.headers.origin ? String(req.headers.origin) : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.flightbot.com.ar');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const cookies = parsearCookies(req.headers.cookie);
    const sessionToken = cookies.fb_session;
    const payload = verificarJwt(sessionToken);

    if (!payload || !payload.email) {
      return res.status(401).json({ error: 'Debes iniciar sesión con Google antes de vincular Telegram.' });
    }

    if (payload.telegram_id) {
      return res.status(200).json({
        already_linked: true,
        message: 'Tu cuenta ya está vinculada con Telegram.',
      });
    }

    // Generar un ticket efímero firmado válido por 10 minutos (600 segundos)
    const ticketPayload = {
      action: 'sync_telegram',
      email: payload.email,
      sub: payload.sub,
    };
    const ticket = firmarJwt(ticketPayload, 600);

    // Deep link seguro a Telegram
    const deepLink = `https://t.me/${BOT_USERNAME}?start=sync_${ticket}`;

    return res.status(200).json({
      success: true,
      ticket,
      deepLink,
      expiresInSeconds: 600,
      bonusTokens: 1,
    });
  } catch (error) {
    console.error('[Auth Telegram Sync] Error:', error);
    return res.status(500).json({ error: 'Error interno generando enlace de vinculación.' });
  }
};
