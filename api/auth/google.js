/**
 * FlightBot - API Endpoint Serverless: /api/auth/google
 * Procesa la autenticación con Google Identity Services (GIS / One Tap).
 *
 * Directivas de Seguridad:
 * - Valida criptográficamente el ID Token con Google Tokeninfo.
 * - Emite Cookie HttpOnly, Secure, SameSite=Lax con JWT firmado.
 * - Asigna cuota de 4 tokens semanales base con rollover.
 */

const {
  validarGoogleIdToken,
  firmarJwt,
  sincronizarTokensUsuario,
  TOKENS_BASE_SEMANAL,
  TOKENS_MAX_ROLLOVER,
  obtenerSemanaIsoActual,
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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const credential = body.credential;

    if (!credential) {
      return res.status(400).json({ error: 'Falta el parámetro credential de Google.' });
    }

    // 1. Validar identidad con Google
    const googleUser = await validarGoogleIdToken(credential);
    if (!googleUser) {
      return res.status(401).json({ error: 'Credencial de Google inválida o expirada.' });
    }

    // 2. Construir estado del usuario con sus tokens
    const semanaActual = obtenerSemanaIsoActual();
    const userSession = {
      sub: googleUser.sub,
      email: googleUser.email,
      name: googleUser.name,
      picture: googleUser.picture,
      tokens_available: TOKENS_BASE_SEMANAL,
      max_tokens: TOKENS_MAX_ROLLOVER,
      last_reset_week: semanaActual,
      telegram_id: null,
      telegram_bonus_awarded: false,
    };

    // Sincronizar tokens si fuera necesario
    sincronizarTokensUsuario(userSession);

    // 3. Emitir JWT de sesión
    const sessionToken = firmarJwt(userSession);

    // 4. Configurar Cookie HttpOnly (30 días)
    const isProd = process.env.NODE_ENV === 'production' || origin.startsWith('https://');
    const cookieFlags = [
      `fb_session=${sessionToken}`,
      'Path=/',
      'HttpOnly',
      'SameSite=Lax',
      'Max-Age=2592000', // 30 días
    ];
    if (isProd) {
      cookieFlags.push('Secure');
    }

    res.setHeader('Set-Cookie', cookieFlags.join('; '));

    return res.status(200).json({
      success: true,
      message: 'Inicio de sesión exitoso',
      user: {
        email: userSession.email,
        name: userSession.name,
        picture: userSession.picture,
        tokens_available: userSession.tokens_available,
        max_tokens: userSession.max_tokens,
        telegram_linked: Boolean(userSession.telegram_id),
      },
    });
  } catch (error) {
    console.error('[Auth Google] Error interno:', error);
    return res.status(500).json({ error: 'Error interno en el servidor de autenticación.' });
  }
};
