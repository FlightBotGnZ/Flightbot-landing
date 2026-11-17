/**
 * FlightBot - Utilidades compartidas de Seguridad Serverless (Vercel API)
 *
 * Controles implementados:
 * - Extracción consistente de IP cliente detrás de Vercel/Cloudflare (C-01).
 * - Validación Anti-SSRF IPv4/IPv6 para URLs HTTPS salientes (CWE-918 / C-04).
 * - Sanitización estricta HTML allowlist y detección de Prompt Injection (OWASP LLM01).
 */

const net = require('net');

/**
 * Extrae y normaliza la IP del cliente priorizando cabeceras confiables del edge.
 * @param {import('http').IncomingMessage} req
 * @returns {string}
 */
function extractClientIp(req) {
  const headers = (req && req.headers) || {};
  const candidates = [
    headers['x-real-ip'],
    headers['cf-connecting-ip'],
    headers['x-vercel-forwarded-for'],
    headers['x-forwarded-for'],
    req && req.socket ? req.socket.remoteAddress : ''
  ];

  for (const raw of candidates) {
    if (!raw) continue;
    const first = String(raw).split(',')[0].trim().slice(0, 64);
    const cleaned = first.replace(/^\[|\]$/g, '');
    if (net.isIP(cleaned)) {
      return cleaned;
    }
  }
  return 'ip-desconocida';
}

/**
 * Evalúa si una dirección IPv4 pertenece a un rango privado, loopback o link-local.
 * @param {string} ip
 * @returns {boolean}
 */
function isPrivateIpv4(ip) {
  const parts = ip.split('.').map(n => parseInt(n, 10));
  if (parts.length !== 4 || parts.some(n => Number.isNaN(n) || n < 0 || n > 255)) {
    return true;
  }
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT RFC 6598
  return false;
}

/**
 * Evalúa si una dirección IPv6 corresponde a loopback, link-local, ULA o multicast.
 * @param {string} ip
 * @returns {boolean}
 */
function isPrivateIpv6(ip) {
  const norm = ip.toLowerCase();
  if (norm === '::' || norm === '::1') return true;
  if (norm.startsWith('::ffff:')) {
    const mapped = norm.slice(7);
    if (net.isIPv4(mapped)) return isPrivateIpv4(mapped);
  }
  const firstHextet = norm.split(':')[0] || '';
  if (firstHextet.startsWith('fc') || firstHextet.startsWith('fd')) return true; // ULA fc00::/7
  if (/^fe[89ab]/.test(firstHextet)) return true; // Link-local fe80::/10
  if (firstHextet.startsWith('ff')) return true; // Multicast
  return false;
}

/**
 * Valida que una URL saliente sea exclusivamente HTTPS pública (Anti-SSRF CWE-918).
 * @param {string} rawUrl
 * @returns {boolean}
 */
function isSafeRemoteHttpsUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return false;
  try {
    const parsed = new URL(rawUrl.trim());
    if (parsed.protocol !== 'https:') return false;
    if (parsed.username || parsed.password) return false;

    const host = (parsed.hostname || '').toLowerCase().replace(/^\[|\]$/g, '');
    if (!host) return false;

    if (
      host === 'localhost' ||
      host.endsWith('.localhost') ||
      host.endsWith('.local') ||
      host.endsWith('.internal') ||
      host === 'metadata.google.internal'
    ) {
      return false;
    }

    const ipType = net.isIP(host);
    if (ipType === 4) return !isPrivateIpv4(host);
    if (ipType === 6) return !isPrivateIpv6(host);

    return true;
  } catch (_e) {
    return false;
  }
}

/**
 * Limita el crecimiento de mapas de rate limiting en memoria serverless.
 * @param {Map<string, number[]>} rateMap
 * @param {number} windowMs
 * @param {number} maxEntries
 */
function pruneRateLimitMap(rateMap, windowMs, maxEntries = 2000) {
  if (rateMap.size <= maxEntries) return;
  const now = Date.now();
  for (const [key, timestamps] of rateMap.entries()) {
    if (!Array.isArray(timestamps) || timestamps.length === 0 || now - timestamps[timestamps.length - 1] > windowMs) {
      rateMap.delete(key);
    }
  }
}

/**
 * Detecta patrones básicos de Prompt Injection o payloads HTML/script peligrosos.
 * @param {string} text
 * @returns {boolean}
 */
function detectPromptInjection(text) {
  const value = String(text || '');
  return /(ignore previous instructions|disregard previous|olvida las instrucciones|system prompt|reveal your prompt|drop table|select \*|api_key|token_secreto|<\/?(script|iframe|object|embed|svg|img|style)|javascript:|onerror\s*=|onload\s*=)/i.test(value);
}

/**
 * Sanitiza la salida HTML de Gemini usando allowlist estricta (<b>, <i>, <code>, <br>).
 * Escapa primero cualquier carácter HTML y solo restaura etiquetas permitidas sin atributos.
 * @param {string} raw
 * @returns {string}
 */
function sanitizeGeminiHtml(raw) {
  let clean = String(raw || '').trim();
  // Eliminar enlaces antes de escapar para evitar URLs residuales en el texto
  clean = clean.replace(/<a\s+href=["']#?["'][^>]*>([\s\S]*?)<\/a>/gi, '$1');
  clean = clean.replace(/<\/?a[^>]*>/gi, '');

  // Escapar todo HTML potencialmente peligroso
  clean = clean
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // Restaurar exclusivamente tags de formato básicos sin atributos
  clean = clean
    .replace(/&lt;(b|strong)&gt;([\s\S]*?)&lt;\/\1&gt;/gi, '<b>$2</b>')
    .replace(/&lt;(i|em)&gt;([\s\S]*?)&lt;\/\1&gt;/gi, '<i>$2</i>')
    .replace(/&lt;code&gt;([\s\S]*?)&lt;\/code&gt;/gi, '<code>$1</code>')
    .replace(/&lt;br\s*\/?&gt;/gi, '<br>')
    .replace(/\r?\n\r?\n/g, '<br><br>')
    .replace(/\r?\n/g, '<br>');

  return clean;
}

module.exports = {
  extractClientIp,
  isSafeRemoteHttpsUrl,
  pruneRateLimitMap,
  detectPromptInjection,
  sanitizeGeminiHtml
};
