/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/feedback
 * Recepción de feedback de la comunidad y alertas directas al Administrador vía Telegram.
 *
 * Directivas de Arquitectura y Seguridad Defensiva:
 * - Anti-DDoS y Rate Limiting defensivo por IP.
 * - Sanitización estricta de entradas (CWE-79 / XSS y Log Injection).
 * - Despacho seguro a Telegram API si TELEGRAM_BOT_TOKEN está configurado.
 */

const ALLOWED_ORIGINS = new Set([
  'https://flightbot.com.ar',
  'https://www.flightbot.com.ar',
  'https://flightbot-landing.vercel.app',
  'http://localhost:8000',
  'http://127.0.0.1:8000'
]);

const RATE_LIMIT_FEEDBACK = new Map();

function verificarRateLimit(ip) {
  const ahora = Date.now();
  const ventanaMs = 120000; // 2 minutos
  const maxEnvios = 3;

  let registro = RATE_LIMIT_FEEDBACK.get(ip) || [];
  registro = registro.filter(t => ahora - t < ventanaMs);
  registro.push(ahora);
  RATE_LIMIT_FEEDBACK.set(ip, registro);

  return registro.length <= maxEnvios;
}

function escaparHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
  const origin = req.headers && req.headers.origin ? String(req.headers.origin) : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.flightbot.com.ar');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const clientIp = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'ip-desconocida')
    .split(',')[0]
    .trim();

  if (!verificarRateLimit(clientIp)) {
    return res.status(429).json({
      ok: false,
      mensaje: 'Recibimos tus comentarios recientemente. Por favor esperá unos minutos para enviar otro mensaje.'
    });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (_e) {
      body = {};
    }
  }
  body = body || {};

  const nombre = String(body.nombre || '').trim().slice(0, 100);
  const contacto = String(body.contacto || '').trim().slice(0, 120);
  let tipo = String(body.tipo || 'sugerencia').trim().toLowerCase();
  if (!['sugerencia', 'opinion', 'problema'].includes(tipo)) {
    tipo = 'sugerencia';
  }

  let estrellas = parseInt(body.estrellas, 10);
  if (isNaN(estrellas) || estrellas < 1 || estrellas > 5) {
    estrellas = 5;
  }

  const mensaje = String(body.mensaje || '').trim().slice(0, 1500);

  if (nombre.length < 2 || mensaje.length < 5) {
    return res.status(400).json({
      ok: false,
      mensaje: 'Por favor completá tu nombre y un mensaje de al menos 5 caracteres.'
    });
  }

  // Notificación opcional por Telegram si las variables de entorno están cargadas en Vercel
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    try {
      const tipoEmojis = {
        sugerencia: '💡 Sugerencia',
        opinion: '⭐ Opinión General',
        problema: '🚨 Reporte Beta'
      };
      const tipoFmt = tipoEmojis[tipo] || '💬 Feedback';
      const estrellasStr = '⭐'.repeat(estrellas);
      const fechaUtc = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

      const textoAdmin =
        `📢 <b>Nuevo Feedback desde flightbot.com.ar</b>\n\n` +
        `👤 <b>Nombre:</b> ${escaparHtml(nombre)}\n` +
        `📱 <b>Contacto:</b> ${escaparHtml(contacto || 'No especificado')}\n` +
        `🏷️ <b>Tipo:</b> ${escaparHtml(tipoFmt)}\n` +
        `🌟 <b>Calificación:</b> ${estrellasStr} (${estrellas}/5)\n\n` +
        `📝 <b>Mensaje:</b>\n<i>${escaparHtml(mensaje)}</i>\n\n` +
        `🕒 <code>${fechaUtc}</code>`;

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: textoAdmin,
          parse_mode: 'HTML'
        }),
        signal: controller.signal
      });
      clearTimeout(timeout);
    } catch (_err) {
      // Si falla Telegram, no romper la respuesta al usuario web
    }
  }

  return res.status(200).json({
    ok: true,
    mensaje: '¡Muchas gracias! Tu opinión fue guardada con éxito.'
  });
};

module.exports.default = module.exports;
