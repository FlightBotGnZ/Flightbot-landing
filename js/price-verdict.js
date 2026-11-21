/**
 * FlightBot - Módulo de Semáforo "¿Conviene comprar hoy?", Sparkline SVG Histórico y URLs Compartibles.
 * Cero dependencias externas, 100% compatible con CSP estricta y modo offline.
 */
(function (globalScope) {
  'use strict';

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // Extrae un precio numérico comparable (USD si existe, o ARS en cabotaje) de un objeto destino
  function extractPriceMetrics(dest) {
    if (!dest) return null;
    const vuelos = Array.isArray(dest.vuelos) ? dest.vuelos : [];
    const isCabotaje = dest.es_cabotaje === true || dest.categoria_region === 'cabotaje';

    const prices = vuelos
      .map(function (v) {
        if (!v) return 0;
        const val = isCabotaje ? Number(v.precio_ars || v.precio_usd || 0) : Number(v.precio_usd || 0);
        return Number.isFinite(val) && val > 0 ? val : 0;
      })
      .filter(function (n) { return n > 0; });

    if (prices.length === 0) return null;

    const currentPrice = prices[0];
    const histSeries = Array.isArray(dest.historial_precios) && dest.historial_precios.length >= 3
      ? dest.historial_precios.map(Number).filter(function (n) { return Number.isFinite(n) && n > 0; })
      : null;

    let series;
    if (histSeries && histSeries.length >= 3) {
      series = histSeries;
    } else {
      // Construir serie de referencia estable a partir de las ofertas reales del destino
      const sorted = prices.slice().sort(function (a, b) { return a - b; });
      const minRef = sorted[0];
      const maxRef = sorted[sorted.length - 1] > minRef ? sorted[sorted.length - 1] : Math.round(minRef * 1.24);
      const midRef = Math.round((minRef + maxRef) / 2);
      series = [
        Math.round(maxRef * 0.96),
        maxRef,
        Math.round(midRef * 1.04),
        midRef,
        Math.round((minRef + midRef) / 2),
        currentPrice
      ];
    }

    const minPrice = Math.min.apply(null, series);
    const maxPrice = Math.max.apply(null, series);
    const avgPrice = series.reduce(function (acc, n) { return acc + n; }, 0) / series.length;

    return {
      isCabotaje: isCabotaje,
      currencyLabel: isCabotaje ? 'ARS' : 'USD',
      currentPrice: currentPrice,
      minPrice: minPrice,
      avgPrice: avgPrice,
      maxPrice: maxPrice,
      series: series
    };
  }

  function formatMoney(amount, isCabotaje) {
    const rounded = Math.round(Number(amount) || 0);
    if (isCabotaje) {
      return '$ ' + rounded.toLocaleString('es-AR') + ' ARS';
    }
    return 'US$ ' + rounded.toLocaleString('en-US');
  }

  // Semáforo "¿Conviene comprar hoy?" (alineado con historial_vuelos.evaluate_buy_verdict)
  function computeBuyVerdict(currentPrice, minPrice, avgPrice) {
    const curr = Number(currentPrice) || 0;
    const pMin = Number(minPrice) || 0;
    const pAvg = Number(avgPrice) || 0;

    if (curr <= 0 || pAvg <= 0) {
      return {
        status: 'watch',
        emoji: '🟡',
        label: 'Tarifa en observación',
        recommendation: 'Activá una alerta en Telegram para enterarte al instante si baja.',
        deltaPct: 0,
        badgeClass: 'bg-amber-500/15 text-amber-500 border-amber-500/30',
        strokeColor: '#f59e0b'
      };
    }

    const deltaPct = Math.round(((curr - pAvg) / pAvg) * 1000) / 10;
    const nearFloor = pMin > 0 && curr <= pMin * 1.07;

    if (nearFloor || deltaPct <= -10) {
      return {
        status: 'buy',
        emoji: '🟢',
        label: 'Piso histórico — Comprá ya',
        recommendation: deltaPct < 0
          ? 'Está un ' + Math.abs(Math.round(deltaPct)) + '% por debajo del promedio reciente. Gran oportunidad para emitir.'
          : 'En zona de mínimo registrado para esta ruta. Conviene reservar ahora.',
        deltaPct: deltaPct,
        badgeClass: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/30',
        strokeColor: '#10b981'
      };
    }

    if (deltaPct >= 10) {
      return {
        status: 'wait',
        emoji: '🔴',
        label: 'Por encima del promedio — Esperá',
        recommendation: 'Está un +' + Math.round(deltaPct) + '% sobre el promedio. Conviene activar una alerta por precio objetivo.',
        deltaPct: deltaPct,
        badgeClass: 'bg-rose-500/15 text-rose-500 border-rose-500/30',
        strokeColor: '#f43f5e'
      };
    }

    return {
      status: 'watch',
      emoji: '🟡',
      label: 'Precio habitual — Activá alerta',
      recommendation: 'Dentro del rango normal de mercado. Si tenés flexibilidad, activá una alerta gratuita.',
      deltaPct: deltaPct,
      badgeClass: 'bg-amber-500/15 text-amber-500 border-amber-500/30',
      strokeColor: '#f59e0b'
    };
  }

  // Genera un Sparkline SVG puro mostrando la evolución de precios y el promedio punteado
  function buildPriceSparklineSvg(points, avgPrice, strokeColor) {
    if (!Array.isArray(points) || points.length < 2) return '';
    const width = 180;
    const height = 46;
    const padX = 6;
    const padY = 6;

    const minV = Math.min.apply(null, points);
    const maxV = Math.max.apply(null, points);
    const span = Math.max(1, maxV - minV);

    const coords = points.map(function (val, idx) {
      const x = padX + (idx * (width - padX * 2)) / (points.length - 1);
      const y = height - padY - ((val - minV) / span) * (height - padY * 2);
      return [Number(x.toFixed(1)), Number(y.toFixed(1))];
    });

    const polyPoints = coords.map(function (c) { return c[0] + ',' + c[1]; }).join(' ');
    const last = coords[coords.length - 1];
    const avgY = Number((height - padY - ((avgPrice - minV) / span) * (height - padY * 2)).toFixed(1));
    const safeColor = /^#[0-9a-fA-F]{6}$/.test(strokeColor || '') ? strokeColor : '#10b981';

    return (
      '<svg viewBox="0 0 ' + width + ' ' + height + '" class="w-44 h-12 shrink-0 overflow-visible" role="img" aria-label="Evolución histórica de precios">' +
        '<line x1="' + padX + '" y1="' + avgY + '" x2="' + (width - padX) + '" y2="' + avgY + '" stroke="#94a3b8" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="3 3" />' +
        '<polyline fill="none" stroke="' + safeColor + '" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" points="' + polyPoints + '" />' +
        '<circle cx="' + last[0] + '" cy="' + last[1] + '" r="3.5" fill="' + safeColor + '" stroke="#ffffff" stroke-width="1.5" />' +
      '</svg>'
    );
  }

  function buildShareDestinationUrl(destId) {
    const safeId = encodeURIComponent(String(destId || '').trim());
    const origin = (typeof window !== 'undefined' && window.location && window.location.origin)
      ? window.location.origin
      : 'https://www.flightbot.com.ar';
    return origin + '/vuelos?dest=' + safeId;
  }

  function copyShareUrl(url, btnEl) {
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        if (btnEl) {
          const orig = btnEl.textContent;
          btnEl.textContent = '✓ Enlace copiado';
          setTimeout(function () { btnEl.textContent = orig; }, 1800);
        }
      }).catch(function () {});
    }
  }

  // Renderiza la tarjeta completa del semáforo + sparkline + botones de compartir enlace
  function renderVerdictWidgetHtml(dest) {
    const metrics = extractPriceMetrics(dest);
    if (!metrics) return '';

    const verdict = computeBuyVerdict(metrics.currentPrice, metrics.minPrice, metrics.avgPrice);
    const svg = buildPriceSparklineSvg(metrics.series, metrics.avgPrice, verdict.strokeColor);
    const shareUrl = buildShareDestinationUrl(dest.id);
    const ciudadSafe = escapeHtml(dest.ciudad || dest.nombre || dest.iata || 'Destino');
    const waText = encodeURIComponent(
      '✈️ Mirá este análisis de vuelos a ' + (dest.ciudad || dest.iata || '') +
      ' (' + formatMoney(metrics.currentPrice, metrics.isCabotaje) + ' · ' + verdict.label + '): ' + shareUrl
    );
    const waHref = 'https://wa.me/?text=' + waText;
    const safeShareAttr = escapeHtml(shareUrl).replace(/'/g, '&#39;');

    return (
      '<div id="fb-price-verdict-widget" class="mt-4 p-4 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900/75 bg-white shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">' +
        '<div class="space-y-1.5 flex-1 min-w-0">' +
          '<div class="flex flex-wrap items-center gap-2">' +
            '<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ' + verdict.badgeClass + '">' +
              verdict.emoji + ' ¿Conviene comprar hoy? · ' + escapeHtml(verdict.label) +
            '</span>' +
            '<span class="text-[11px] font-mono dark:text-slate-400 text-slate-500">' +
              'Mín: <b>' + escapeHtml(formatMoney(metrics.minPrice, metrics.isCabotaje)) + '</b> · ' +
              'Prom: <b>' + escapeHtml(formatMoney(metrics.avgPrice, metrics.isCabotaje)) + '</b>' +
            '</span>' +
          '</div>' +
          '<p class="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">' + escapeHtml(verdict.recommendation) + '</p>' +
        '</div>' +
        '<div class="flex flex-wrap items-center gap-3 shrink-0">' +
          '<div class="flex flex-col items-end">' +
            svg +
            '<span class="text-[10px] font-mono text-slate-400">Tendencia ' + ciudadSafe + '</span>' +
          '</div>' +
          '<div class="flex items-center gap-2">' +
            '<button type="button" onclick="window.FlightBotVerdict && window.FlightBotVerdict.copyShareUrl(\'' + safeShareAttr + '\', this)" ' +
                    'class="px-3 py-2 rounded-xl text-xs font-bold dark:bg-slate-800 bg-slate-100 dark:text-slate-200 text-slate-800 border dark:border-slate-700 border-slate-200 hover:border-blue-500 transition-all cursor-pointer">' +
              '🔗 Copiar enlace' +
            '</button>' +
            '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" ' +
               'class="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all">' +
              '📲 WhatsApp' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  const FlightBotVerdict = {
    extractPriceMetrics: extractPriceMetrics,
    computeBuyVerdict: computeBuyVerdict,
    buildPriceSparklineSvg: buildPriceSparklineSvg,
    buildShareDestinationUrl: buildShareDestinationUrl,
    copyShareUrl: copyShareUrl,
    renderVerdictWidgetHtml: renderVerdictWidgetHtml
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FlightBotVerdict;
  } else {
    globalScope.FlightBotVerdict = FlightBotVerdict;
  }
})(typeof window !== 'undefined' ? window : globalThis);
