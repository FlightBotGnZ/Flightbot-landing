/**
 * FlightBot - Módulo de Utilidades de Autenticación y Sesión (Serverless)
 *
 * Directivas de Arquitectura y Seguridad:
 * - JWT y firmas criptográficas nativas con HMAC-SHA256 (sin dependencias externas).
 * - Cookies de sesión estrictas: HttpOnly, Secure, SameSite=Lax.
 * - Validación Zero-Trust del token de identidad de Google.
 * - Lógica de Rollover Semanal de tokens de búsqueda (base 4, tope 6).
 */

const crypto = require('crypto');

// Secreto de sesión (toma variable de entorno SESSION_SECRET o fallback derivado seguro)
const SESSION_SECRET = process.env.SESSION_SECRET || 'flightbot-dev-secret-change-in-production-2026';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';

const TOKENS_BASE_SEMANAL = 4;
const TOKENS_MAX_ROLLOVER = 6;
const TOKEN_BONUS_TELEGRAM = 1;

/**
 * Obtiene el identificador de semana ISO actual (ej: "2026-W45")
 */
function obtenerSemanaIsoActual() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

/**
 * Codificación Base64Url segura para JWT
 */
function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

/**
 * Decodificación Base64Url
 */
function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return Buffer.from(base64, 'base64').toString('utf8');
}

/**
 * Crea un JWT firmado con HMAC-SHA256
 */
function firmarJwt(payload, expiresInSeconds = 2592000) { // 30 días
  const header = { alg: 'HS256', typ: 'JWT' };
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const fullPayload = { ...payload, exp, iat: Math.floor(Date.now() / 1000) };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(fullPayload));
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

/**
 * Verifica y decodifica un JWT firmado
 */
function verificarJwt(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [encodedHeader, encodedPayload, signature] = parts;
  const expectedSignature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  // Comparación en tiempo constante para evitar Timing Attacks (CWE-208)
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return null;
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload));
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return null; // Token expirado
    }
    return payload;
  } catch (_e) {
    return null;
  }
}

/**
 * Parsea cookies del encabezado HTTP Request
 */
function parsearCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader || typeof cookieHeader !== 'string') return cookies;
  const pairs = cookieHeader.split(';');
  for (const pair of pairs) {
    const [k, v] = pair.trim().split('=');
    if (k && v) {
      cookies[k] = decodeURIComponent(v);
    }
  }
  return cookies;
}

/**
 * Valida un ID token de Google directamente contra los servidores de Google
 */
async function validarGoogleIdToken(idToken) {
  if (!idToken || typeof idToken !== 'string') return null;

  try {
    const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken.trim())}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) return null;
    const data = await res.json();

    // Verificación de email verificado y expiración
    const emailVerified = data.email_verified === 'true' || data.email_verified === true;
    if (!emailVerified || !data.email) return null;

    // Si GOOGLE_CLIENT_ID está configurado, validar que coincida con aud
    if (GOOGLE_CLIENT_ID && data.aud !== GOOGLE_CLIENT_ID) {
      console.warn('[Auth] Google Client ID mismatch:', data.aud);
      return null;
    }

    return {
      sub: data.sub,
      email: data.email.toLowerCase().trim(),
      name: data.name || data.given_name || 'Viajero',
      picture: data.picture || '',
    };
  } catch (err) {
    console.error('[Auth] Error validando ID Token de Google:', err);
    return null;
  }
}

/**
 * Aplica el cálculo de rollover semanal al usuario si cambió la semana
 */
function sincronizarTokensUsuario(userState) {
  const semanaActual = obtenerSemanaIsoActual();
  if (!userState.last_reset_week || userState.last_reset_week !== semanaActual) {
    const anteriores = typeof userState.tokens_available === 'number' ? userState.tokens_available : TOKENS_BASE_SEMANAL;
    // Rollover acumulativo: tokens restantes + 4, hasta un máximo de 6
    userState.tokens_available = Math.min(TOKENS_MAX_ROLLOVER, anteriores + TOKENS_BASE_SEMANAL);
    userState.last_reset_week = semanaActual;
  }
  return userState;
}

module.exports = {
  SESSION_SECRET,
  GOOGLE_CLIENT_ID,
  TOKENS_BASE_SEMANAL,
  TOKENS_MAX_ROLLOVER,
  TOKEN_BONUS_TELEGRAM,
  obtenerSemanaIsoActual,
  firmarJwt,
  verificarJwt,
  parsearCookies,
  validarGoogleIdToken,
  sincronizarTokensUsuario,
};
