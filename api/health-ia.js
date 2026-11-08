/**
 * FlightBot - Endpoint de Auditoría y Salud de Modelos IA: /api/health-ia
 * Permite ejecutar Smoke Tests automáticos periódicos (Vercel Cron / UptimeRobot / CI).
 *
 * Directivas de Arquitectura y Seguridad Defensiva:
 * - Sin exposición de claves ni tokens en la respuesta.
 * - Validación HTTP 200 y medición de latencias por modelo.
 * - Auto-detección de modelos deprecados o degradados con alerta a Telegram.
 */

const CANDIDATOS_FLASH = [
  'gemini-3.5-flash-lite',
  'gemini-3.5-flash',
  'gemini-flash-lite-latest',
  'gemini-flash-latest'
];

async function notificarTelegramFalla(operativos, fallidos, resultados) {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();
  if (!token || !chatId) return;

  const esCritico = operativos.length === 0;
  const titulo = esCritico
    ? '🚨 <b>ALERTA CRÍTICA FLIGHTBOT WEB · CAÍDA TOTAL DE IA</b>'
    : '⚠️ <b>GUARDIÁN IA FLIGHTBOT WEB · MODELO DEGRADADO DETECTADO</b>';

  const detalleModelos = resultados.map(r => {
    const ic = r.ok ? '✅' : (r.status === 404 ? '⚠️' : '❌');
    return `• ${ic} <code>${r.modelo}</code>: HTTP ${r.status} (${r.latenciaMs} ms)`;
  }).join('\n');

  const texto = `${titulo}\n\n` +
    `• <b>Modelos Operativos:</b> <code>${operativos.join(', ') || 'Ninguno'}</code>\n` +
    `• <b>Modelos con Fallo:</b> <code>${fallidos.join(', ') || 'Ninguno'}</code>\n\n` +
    `<b>Diagnóstico en la Nube (Vercel):</b>\n${detalleModelos}\n\n` +
    `<i>Verificación automática de Vercel Cron: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</i>`;

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: texto, parse_mode: 'HTML' })
    });
  } catch (_) {}
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  const apiKey = (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(503).json({
      status: 'error',
      mensaje: 'GEMINI_API_KEY no configurada en variables de entorno de Vercel.',
      modelos_operativos: [],
      timestamp: new Date().toISOString()
    });
  }

  const resultados = [];
  const operativos = [];
  const fallidos = [];

  for (const modelo of CANDIDATOS_FLASH) {
    const t0 = Date.now();
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4500);

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'ping' }] }],
          generationConfig: { maxOutputTokens: 5, temperature: 0.0 }
        }),
        signal: controller.signal
      });
      clearTimeout(timeout);
      const latenciaMs = Date.now() - t0;

      if (response.ok) {
        operativos.push(modelo);
        resultados.push({ modelo, ok: true, status: response.status, latenciaMs });
      } else {
        fallidos.push(modelo);
        resultados.push({ modelo, ok: false, status: response.status, latenciaMs });
      }
    } catch (err) {
      fallidos.push(modelo);
      resultados.push({
        modelo,
        ok: false,
        status: (err && err.name === 'AbortError') ? 408 : 500,
        latenciaMs: Date.now() - t0,
        error: (err && err.message) || 'Error de conexion'
      });
    }
  }

  const estadoGral = operativos.length > 0 ? (fallidos.length === 0 ? 'healthy' : 'degraded') : 'down';
  const statusCode = estadoGral === 'down' ? 503 : 200;

  // Notificar a Telegram si hay degradación o caída
  if (fallidos.length > 0 || estadoGral === 'down') {
    await notificarTelegramFalla(operativos, fallidos, resultados);
  }

  return res.status(statusCode).json({
    status: estadoGral,
    modelos_operativos: operativos,
    modelos_fallidos: fallidos,
    detalles: resultados,
    modelo_recomendado: operativos[0] || null,
    timestamp: new Date().toISOString()
  });
};

module.exports.default = module.exports;
