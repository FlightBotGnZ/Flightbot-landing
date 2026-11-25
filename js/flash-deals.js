/**
 * FlightBot - Top 3 Ofertas con Mayor Rebaja Real (flash-deals.js)
 * Selecciona dinámicamente desde window.RADAR_DATA las 3 rutas reales con mayor porcentaje
 * de descuento (-XX%) respecto al valor medio de referencia de su termómetro estacional.
 */
(function (globalScope) {
  'use strict';

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  function parseNumeric(raw) {
    if (typeof raw === 'number' && Number.isFinite(raw)) return raw;
    const digits = String(raw || '').replace(/[^0-9]/g, '');
    return digits ? parseInt(digits, 10) : 0;
  }

  function formatArs(amount) {
    return '$ ' + Math.round(Number(amount) || 0).toLocaleString('es-AR') + ' ARS';
  }

  // Resuelve la foto oficial del destino desde la base centralizada de guías (FB_GUIAS_KB)
  function resolveDestinationImage(destId, fallbackUrl) {
    const safeFallback = (typeof fallbackUrl === 'string' && fallbackUrl.startsWith('https://'))
      ? fallbackUrl
      : 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80';
    const guideKb = (globalScope && globalScope.FB_GUIAS_KB && typeof globalScope.FB_GUIAS_KB === 'object')
      ? globalScope.FB_GUIAS_KB
      : null;
    if (!guideKb || !destId) return safeFallback;

    const entry = guideKb[destId];
    const rawImg = entry && typeof entry.imagen_unsplash === 'string' ? entry.imagen_unsplash.trim() : '';
    if (!rawImg || !rawImg.startsWith('https://')) return safeFallback;

    return rawImg.replace(/([?&])w=\d+/i, '$1w=800');
  }

  // Calcula el ranking de destinos reales ordenados por mayor rebaja porcentual vs promedio
  function computeTopDiscountDeals(radarList, limit) {
    const maxItems = Number(limit) > 0 ? Number(limit) : 3;
    if (!Array.isArray(radarList) || radarList.length === 0) return [];

    const scored = [];

    for (let i = 0; i < radarList.length; i++) {
      const dest = radarList[i];
      if (!dest || !dest.id) continue;

      const op = dest.oportunidad_relampago || {};
      const hasRealOffer = Boolean(op.found_at);
      if (!hasRealOffer) continue;

      const isCabotaje = dest.es_cabotaje === true || dest.categoria_region === 'cabotaje';
      const term = dest.termometro || {};
      const rMinRaw = String(term.rango_min || '');
      const rMaxRaw = String(term.rango_max || '');
      let rMin = parseNumeric(rMinRaw);
      let rMax = parseNumeric(rMaxRaw);

      const currPrice = isCabotaje
        ? Number(op.precio_ars || 0)
        : Number(op.precio_usd_num || 0);

      if (!Number.isFinite(currPrice) || currPrice <= 0) continue;

      let pctDiscount = 0;
      let avgRef = 0;

      if (rMin > 0 && rMax > rMin) {
        if (isCabotaje) {
          if (rMin >= 10000) {
            avgRef = (rMin + rMax) / 2;
          }
        } else {
          if (rMinRaw.includes('€') || rMaxRaw.includes('€')) {
            rMin = Math.round(rMin * 1.09);
            rMax = Math.round(rMax * 1.09);
          }
          if (rMin < 10000) {
            avgRef = (rMin + rMax) / 2;
          }
        }
      }

      if (avgRef > 0 && currPrice < avgRef) {
        pctDiscount = Math.round(((avgRef - currPrice) / avgRef) * 100);
      }

      const posPct = typeof term.posicion_pct === 'number' ? term.posicion_pct : 50;
      const firstHotel = Array.isArray(dest.hoteles) && dest.hoteles[0] ? dest.hoteles[0] : {};
      const foto = String(dest.imagen_unsplash || firstHotel.foto || '').trim();
      const safeFoto = resolveDestinationImage(String(dest.id), foto);

      const codeCountry = String(dest.codigo_pais || 'ar').toLowerCase().replace(/[^a-z]/g, '').slice(0, 2) || 'ar';
      const iataShort = String(dest.iata || '').split('/')[0].trim().slice(0, 4).toUpperCase();
      const noches = Number(op.noches || 7);
      const fechas = String(op.fechas_texto || op.fechas || 'Fechas flexibles');
      const aerolinea = String(op.aerolinea || 'Aerolínea');
      const priceLabel = isCabotaje ? formatArs(currPrice) : ('US$ ' + Math.round(currPrice).toLocaleString('en-US'));

      // Calcular antigüedad real hasta el momento actual para ser 100% transparentes
      let hoursAgo = null;
      if (op.found_at) {
        const rawFound = String(op.found_at).trim();
        const isoUtc = /(?:Z|[+-]\d{2}:\d{2})$/.test(rawFound) ? rawFound : (rawFound + 'Z');
        const parsedMs = Date.parse(isoUtc);
        if (Number.isFinite(parsedMs) && parsedMs <= Date.now() + 60000) {
          hoursAgo = Math.max(0, (Date.now() - parsedMs) / 3600000);
        }
      }
      if (hoursAgo === null && typeof op.antiguedad_hs === 'number' && Number.isFinite(op.antiguedad_hs)) {
        hoursAgo = Math.max(0, op.antiguedad_hs);
      }

      let foundAgeShort = 'Recién detectada';
      let foundAgeLabel = 'Oferta encontrada hace instantes · sujeta a cambio';
      if (hoursAgo !== null) {
        if (hoursAgo < 1) {
          foundAgeShort = '⏱️ Hace <1 h';
          foundAgeLabel = 'Oferta encontrada hace menos de 1 h · sujeta a cambio';
        } else if (hoursAgo < 24) {
          const hrs = Math.round(hoursAgo);
          foundAgeShort = '⏱️ Hace ' + hrs + ' hs';
          foundAgeLabel = 'Oferta encontrada hace ' + hrs + ' hs · sujeta a cambio';
        } else {
          const days = Math.max(1, Math.round(hoursAgo / 24));
          foundAgeShort = '⏱️ Hace ' + days + (days === 1 ? ' día' : ' días');
          foundAgeLabel = 'Oferta encontrada hace ' + days + (days === 1 ? ' día' : ' días') + ' · sujeta a cambio';
        }
      }

      scored.push({
        id: String(dest.id),
        ciudad: String(dest.ciudad || dest.id).split('&')[0].trim(),
        pais: String(dest.pais || ''),
        iata: iataShort,
        codigo_pais: codeCountry,
        foto: safeFoto,
        aerolinea: aerolinea,
        fechas: fechas,
        noches: noches,
        priceLabel: priceLabel,
        foundAgeShort: foundAgeShort,
        antiguedad: foundAgeLabel,
        pctDiscount: pctDiscount,
        posPct: posPct
      });
    }

    // Ordenar: mayor descuento porcentual real primero; a igualdad, menor posicion_pct en el termómetro
    scored.sort(function (a, b) {
      if (b.pctDiscount !== a.pctDiscount) return b.pctDiscount - a.pctDiscount;
      return a.posPct - b.posPct;
    });

    return scored.slice(0, maxItems);
  }

  function renderFlashDealCard(deal) {
    const badgeText = deal.pctDiscount >= 5
      ? ('⚡ -' + deal.pctDiscount + '% vs promedio')
      : '⚡ Oportunidad del Radar';

    const destEncoded = encodeURIComponent(deal.id);
    const ciudadSafe = escapeHtml(deal.ciudad);
    const paisSafe = escapeHtml(deal.pais);
    const iataSafe = escapeHtml(deal.iata);
    const aeroSafe = escapeHtml(deal.aerolinea);
    const fechasSafe = escapeHtml(deal.fechas);
    const priceSafe = escapeHtml(deal.priceLabel);
    const antiSafe = escapeHtml(deal.antiguedad);
    const fotoSafe = escapeHtml(deal.foto);
    const flagLocal = 'img/flags/' + deal.codigo_pais + '.png';
    const flagCdn = 'https://flagcdn.com/w80/' + deal.codigo_pais + '.png';

    return (
      '<div class="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#111324] border border-slate-200 dark:border-indigo-950/40 shadow-md hover:shadow-xl transition-all flex flex-col justify-between aurora-card">' +
        '<div class="relative h-48 w-full overflow-hidden">' +
          '<img src="' + fotoSafe + '" alt="' + ciudadSafe + '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async">' +
          '<div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>' +
          '<div class="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider backdrop-blur-md aurora-deal-badge bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold shadow-sm">' +
            '<span>' + escapeHtml(badgeText) + '</span>' +
          '</div>' +
          '<div class="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0b0c16]/80 backdrop-blur-md text-white border border-white/15">' +
            '<img src="' + flagLocal + '" onerror="this.onerror=null; this.src=\'' + flagCdn + '\'" alt="' + paisSafe + '" class="w-4 h-3 object-cover rounded-xs" loading="lazy" decoding="async">' +
            '<span>' + iataSafe + '</span>' +
          '</div>' +
          '<div class="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">' +
            '<div class="text-left">' +
              '<h3 class="text-xl font-black leading-tight drop-shadow-sm">' + ciudadSafe + '</h3>' +
              '<span class="text-xs text-slate-200">' + aeroSafe + ' · Tarifa Real</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="p-5 flex-1 flex flex-col justify-between space-y-3">' +
          '<div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">' +
            '<span class="font-medium">🗓️ ' + fechasSafe + ' (' + deal.noches + ' noches)</span>' +
            '<span class="font-bold text-emerald-400-aurora">' + escapeHtml(deal.foundAgeShort) + '</span>' +
          '</div>' +
          '<div class="pt-3 border-t border-slate-100 dark:border-indigo-950/40 flex items-center justify-between">' +
            '<div class="text-left">' +
              '<span class="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">' + antiSafe + '</span>' +
              '<span class="text-xl font-black font-mono text-cyan-300-aurora">' + priceSafe + '</span>' +
            '</div>' +
            '<a href="/vuelos?dest=' + destEncoded + '" class="px-4 py-2.5 rounded-xl text-xs font-extrabold aurora-cta-btn transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5">' +
              '<span>Ver Tarifa</span>' +
              '<span>➔</span>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderTopDealsOnHome() {
    if (typeof document === 'undefined') return;
    const container = document.getElementById('flash-deals-container');
    if (!container) return;

    const deals = computeTopDiscountDeals(globalScope.RADAR_DATA, 3);
    if (deals.length > 0) {
      container.innerHTML = deals.map(renderFlashDealCard).join('');
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderTopDealsOnHome);
    } else {
      renderTopDealsOnHome();
    }
  }

  const FlightBotFlashDeals = {
    computeTopDiscountDeals: computeTopDiscountDeals,
    renderTopDealsOnHome: renderTopDealsOnHome
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FlightBotFlashDeals;
  } else {
    globalScope.FlightBotFlashDeals = FlightBotFlashDeals;
  }
})(typeof window !== 'undefined' ? window : globalThis);
