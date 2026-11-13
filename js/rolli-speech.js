/**
 * FlightBot - Rolli Speech & Flash Deals Engine
 * Brand Voice: First-person argentinian traveler tech copilot (friendly, sharp, data-driven)
 */

(function () {
  'use strict';

  // Catálogo de oportunidades destacadas detectadas por Rolli
  const ROLLI_DEALS = [
    {
      id: 'bariloche',
      ciudad: 'Bariloche',
      iata: 'BRC',
      pais: 'Argentina',
      flagCode: 'ar',
      aerolinea: 'JetSMART / AR',
      escalas: 'Vuelo Directo',
      precioOriginal: '$ 137.460 ARS',
      ahorroPct: '-32%',
      fechas: '14 May - 19 May (5 noches)',
      cupos: 4,
      tag: 'Detectado por Rolli',
      tiempoDeteccion: 'hace 18 min',
      speech: 'Tarifa mínima récord para Bariloche: $ 137.460 ARS final con tasas. Vuelo directo sin escalas.',
      img: 'https://images.unsplash.com/photo-1548685913-fe6678babe8d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'puntacana',
      ciudad: 'Punta Cana',
      iata: 'PUJ',
      pais: 'República Dominicana',
      flagCode: 'do',
      aerolinea: 'Arajet',
      escalas: 'Vuelo Directo',
      precioOriginal: 'US$ 621',
      ahorroPct: '-38%',
      fechas: '23 Abr - 01 May (8 noches)',
      cupos: 3,
      tag: 'Detectado por Rolli',
      tiempoDeteccion: 'hace 12 min',
      speech: 'Punta Cana directo a US$ 621 ida y vuelta. Un 38% por debajo del promedio histórico registrado.',
      img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rio',
      ciudad: 'Río de Janeiro',
      iata: 'GIG',
      pais: 'Brasil',
      flagCode: 'br',
      aerolinea: 'Gol Linhas Aéreas',
      escalas: 'Vuelo Directo',
      precioOriginal: 'US$ 240',
      ahorroPct: '-29%',
      fechas: '08 Jun - 15 Jun (7 noches)',
      cupos: 2,
      tag: 'Detectado por Rolli',
      tiempoDeteccion: 'hace 24 min',
      speech: 'Río de Janeiro a US$ 240 ida y vuelta en vuelo directo desde Aeroparque. Piso histórico detectado.',
      img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'madrid',
      ciudad: 'Madrid',
      iata: 'MAD',
      pais: 'España',
      flagCode: 'es',
      aerolinea: 'Air Europa / Iberia',
      escalas: 'Vía Roma / Directo',
      precioOriginal: '€ 701',
      ahorroPct: '-24%',
      fechas: '18 Sep - 03 Oct (15 noches)',
      cupos: 2,
      tag: 'Detectado por Rolli',
      tiempoDeteccion: 'hace 35 min',
      speech: 'Madrid a € 701 ida y vuelta: oportunidad destacada del día para viajar en temporada media.',
      img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'miami',
      ciudad: 'Miami',
      iata: 'MIA',
      pais: 'Estados Unidos',
      flagCode: 'us',
      aerolinea: 'American Airlines',
      escalas: 'Directo EZE-MIA',
      precioOriginal: 'US$ 638',
      ahorroPct: '-31%',
      fechas: '10 Ago - 22 Ago (12 noches)',
      cupos: 3,
      tag: 'Detectado por Rolli',
      tiempoDeteccion: 'hace 41 min',
      speech: 'Cupos confirmados en American Airlines para Miami a US$ 638 directo ida y vuelta.',
      img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'iguazu',
      ciudad: 'Puerto Iguazú',
      iata: 'IGR',
      pais: 'Argentina',
      flagCode: 'ar',
      aerolinea: 'JetSMART / AR',
      escalas: 'Vuelo Directo',
      precioOriginal: '$ 118.900 ARS',
      ahorroPct: '-27%',
      fechas: '04 Jun - 08 Jun (4 noches)',
      cupos: 5,
      tag: 'Detectado por Rolli',
      tiempoDeteccion: 'hace 52 min',
      speech: 'Cataratas del Iguazú a $ 118.900 ARS ida y vuelta final. Escapada directa sin pagar de más.',
      img: 'https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  let currentDealIdx = 0;
  let intervalTimer = null;
  let isPaused = false;
  let countdownSeconds = 17295; // ~4h 48m

  function renderOferta(idx) {
    if (idx < 0) idx = ROLLI_DEALS.length - 1;
    if (idx >= ROLLI_DEALS.length) idx = 0;
    currentDealIdx = idx;

    const deal = ROLLI_DEALS[currentDealIdx];
    const nextDeal = ROLLI_DEALS[(currentDealIdx + 1) % ROLLI_DEALS.length];

    // 1. Burbuja de diálogo de Rolli en Hero
    const speechEl = document.getElementById('rolli-speech-text');
    if (speechEl) {
      speechEl.style.opacity = '0';
      setTimeout(() => {
        speechEl.textContent = `"${deal.speech}"`;
        speechEl.style.opacity = '1';
      }, 150);
    }
    const badgeTextEl = document.getElementById('rolli-bubble-badge-text');
    if (badgeTextEl) {
      badgeTextEl.textContent = `Oportunidad ${currentDealIdx + 1} de ${ROLLI_DEALS.length}`;
    } else {
      const badgeEl = document.getElementById('rolli-bubble-badge');
      if (badgeEl) {
        badgeEl.textContent = `Oportunidad ${currentDealIdx + 1} de ${ROLLI_DEALS.length}`;
      }
    }

    // 2. Tarjeta activa de Rolli
    const flagEl = document.getElementById('rolli-deal-flag');
    if (flagEl) {
      flagEl.innerHTML = `<img src="img/flags/${deal.flagCode}.png" onerror="this.onerror=null; this.src='https://flagcdn.com/w80/${deal.flagCode}.png'" alt="${deal.pais}" class="w-6 h-4 object-cover rounded shadow-xs inline-block">`;
    }
    const cityEl = document.getElementById('rolli-deal-city');
    if (cityEl) cityEl.textContent = deal.ciudad;

    const iataEl = document.getElementById('rolli-deal-iata');
    if (iataEl) iataEl.textContent = `(${deal.iata})`;

    const airlineEl = document.getElementById('rolli-deal-airline');
    if (airlineEl) airlineEl.textContent = deal.aerolinea;

    const scalesEl = document.getElementById('rolli-deal-scales');
    if (scalesEl) scalesEl.textContent = deal.escalas;

    const priceEl = document.getElementById('rolli-deal-price');
    if (priceEl) {
      const formatted = (typeof window.formatearPrecioMoneda === 'function')
        ? window.formatearPrecioMoneda(deal.precioOriginal, deal.id)
        : deal.precioOriginal;
      priceEl.textContent = formatted;
    }

    const badgeStatusEl = document.getElementById('rolli-deal-status');
    if (badgeStatusEl) badgeStatusEl.textContent = deal.tag;

    const ahorroBadgeEl = document.getElementById('rolli-deal-badge');
    if (ahorroBadgeEl) ahorroBadgeEl.textContent = `${deal.ahorroPct} récord`;

    const fechasEl = document.getElementById('rolli-deal-fechas');
    if (fechasEl) fechasEl.textContent = `🗓️ ${deal.fechas}`;

    const cuposEl = document.getElementById('rolli-deal-cupos');
    if (cuposEl) cuposEl.textContent = `${deal.cupos} cupos`;

    const timeEl = document.getElementById('rolli-deal-time');
    if (timeEl) timeEl.textContent = deal.tiempoDeteccion;

    const indexEl = document.getElementById('rolli-deal-index');
    if (indexEl) indexEl.textContent = `${currentDealIdx + 1}/${ROLLI_DEALS.length}`;

    // Mini preview de la siguiente oferta
    const nextFlagEl = document.getElementById('rolli-next-flag');
    if (nextFlagEl) {
      nextFlagEl.innerHTML = `<img src="img/flags/${nextDeal.flagCode}.png" onerror="this.onerror=null; this.src='https://flagcdn.com/w80/${nextDeal.flagCode}.png'" alt="${nextDeal.pais}" class="w-4 h-3 object-cover rounded-xs inline-block">`;
    }
    const nextCityEl = document.getElementById('rolli-next-city');
    if (nextCityEl) nextCityEl.textContent = `${nextDeal.ciudad} (${nextDeal.iata})`;

    const nextPriceEl = document.getElementById('rolli-next-price');
    if (nextPriceEl) {
      const nextFormatted = (typeof window.formatearPrecioMoneda === 'function')
        ? window.formatearPrecioMoneda(nextDeal.precioOriginal, nextDeal.id)
        : nextDeal.precioOriginal;
      nextPriceEl.textContent = nextFormatted;
    }
  }

  // Renderizar la grilla de 3 tarjetas de Oportunidades Destacadas del Día
  function renderFlashDealsGrid() {
    const container = document.getElementById('flash-deals-container');
    if (!container) return;

    let html = '';
    const topDeals = ROLLI_DEALS.slice(0, 3);
    topDeals.forEach((d) => {
      const priceFmt = (typeof window.formatearPrecioMoneda === 'function')
        ? window.formatearPrecioMoneda(d.precioOriginal, d.id)
        : d.precioOriginal;

      html += `
        <div class="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between">
          <div class="relative h-48 w-full overflow-hidden">
            <img src="${d.img}" alt="${d.ciudad}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
            
            <div class="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border backdrop-blur-md bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800 shadow-sm">
              <span>🔥 ${d.ahorroPct} piso histórico</span>
            </div>

            <div class="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
              <img src="img/flags/${d.flagCode}.png" onerror="this.onerror=null; this.src='https://flagcdn.com/w80/${d.flagCode}.png'" alt="${d.pais}" class="w-4 h-3 object-cover rounded-xs" />
              <span>${d.iata}</span>
            </div>

            <div class="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
              <div>
                <h3 class="text-xl font-black leading-tight drop-shadow-sm">${d.ciudad}</h3>
                <span class="text-xs text-slate-200">${d.aerolinea} · ${d.escalas}</span>
              </div>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span class="font-medium">🗓️ ${d.fechas}</span>
              <span class="font-bold text-amber-500">🔥 ${d.cupos} cupos</span>
            </div>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Detectado por Rolli</span>
                <span class="text-xl font-black font-mono text-blue-600 dark:text-blue-400">${priceFmt}</span>
              </div>

              <a href="/vuelos?dest=${d.id}" class="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5">
                <span>Ver Tarifa</span>
                <span>➔</span>
              </a>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  window.cambiarOfertaRolli = function (dir) {
    renderOferta(currentDealIdx + dir);
  };

  window.pausarRotadorRolli = function (pausar) {
    isPaused = pausar;
  };

  window.irAOfertaActualEnRadar = function () {
    const deal = ROLLI_DEALS[currentDealIdx];
    window.location.href = `/vuelos?dest=${deal.id}`;
  };

  window.actualizarBurbujaYTarjetasRolli = function () {
    renderOferta(currentDealIdx);
    renderFlashDealsGrid();
  };

  // Temporizador de cuenta regresiva
  function tickCountdown() {
    countdownSeconds = Math.max(0, countdownSeconds - 1);
    const h = String(Math.floor(countdownSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(countdownSeconds % 60).padStart(2, '0');
    const timerEl = document.getElementById('rolli-countdown-timer');
    if (timerEl) {
      timerEl.textContent = `${h}:${m}:${s}`;
    }
  }

  function startRotation() {
    if (intervalTimer) clearInterval(intervalTimer);
    intervalTimer = setInterval(() => {
      if (!isPaused) {
        renderOferta(currentDealIdx + 1);
      }
    }, 6000);
    setInterval(tickCountdown, 1000);
  }

  function bootRolliSpeech() {
    renderOferta(0);
    renderFlashDealsGrid();
    startRotation();

    // Re-render al cambiar la moneda
    window.addEventListener('flightbot:currencyChange', function () {
      renderOferta(currentDealIdx);
      renderFlashDealsGrid();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootRolliSpeech);
  } else {
    bootRolliSpeech();
  }
})();
