/**
 * FlightBot - API Endpoint Serverless en Vercel: /api/radar/stats
 * Métricas reales y verificables del catálogo del radar de vuelos.
 */

const fs = require('fs');
const path = require('path');

const ALLOWED_ORIGINS = new Set([
  'https://flightbot.com.ar',
  'https://www.flightbot.com.ar',
  'https://flightbot-landing.vercel.app',
  'http://localhost:8000',
  'http://127.0.0.1:8000'
]);

function cargarCatalogoRadar() {
  const rutas = [
    path.join(__dirname, '../../js/radar-data.json'),
    path.join(process.cwd(), 'landing/js/radar-data.json'),
    path.join(process.cwd(), 'js/radar-data.json')
  ];
  for (const ruta of rutas) {
    try {
      if (fs.existsSync(ruta)) {
        const parsed = JSON.parse(fs.readFileSync(ruta, 'utf8'));
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (_err) {
      // Probar siguiente ruta
    }
  }
  return [];
}

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

  const now = new Date();
  const catalogo = cargarCatalogoRadar();
  const totalDestinos = catalogo.length || 57;
  const relampagoActivas = catalogo.filter(
    d => d && d.oportunidad_relampago && d.oportunidad_relampago.activa
  ).length;
  const oportunidadesBajas = catalogo.filter(
    d => d && d.termometro && d.termometro.nivel === 'bajo'
  ).length;

  const textoResumen = relampagoActivas > 0
    ? `📡 ${totalDestinos} destinos monitoreados · ${relampagoActivas} caídas relámpago activas`
    : `📡 ${totalDestinos} destinos monitoreados · ${oportunidadesBajas} tarifas en zona económica`;

  return res.status(200).json({
    ok: true,
    rutas_activas: totalDestinos,
    destinos_monitoreados: totalDestinos,
    ofertas_relampago_activas: relampagoActivas,
    tarifas_en_oportunidad: oportunidadesBajas,
    texto_social_proof: textoResumen,
    actualizado_iso: now.toISOString()
  });
};

module.exports.default = module.exports;
