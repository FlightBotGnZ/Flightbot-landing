/**
 * FlightBot - Endpoint de Auditoría y Salud de Modelos IA: /api/health-ia
 * Permite ejecutar Smoke Tests automáticos periódicos (Vercel Cron / UptimeRobot / CI).
 *
 * Directivas de Arquitectura y Seguridad Defensiva:
 * - Sin exposición de claves ni tokens en la respuesta.
 * - Validación HTTP 200 y medición de latencias por modelo.
 * - Auto-detección de modelos deprecados o degradados.
 */

const CANDIDATOS_FLASH = [
  'gemini-3.5-flash-lite',
  'gemini-3.5-flash',
  'gemini-flash-lite-latest',
  'gemini-flash-latest'
];

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
