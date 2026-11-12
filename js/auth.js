/**
 * FlightBot - Gestor de Fichas Semanales (Arcade Tokens) y Billetera Rolli
 *
 * Características:
 * - Fichas plateadas de fichín vintage (Insert Coin para cotizar en vivo).
 * - 100% Cero-Fricción: Sin cuentas de Google, sin contraseñas ni captchas.
 * - Cuota Ética: 4 fichas semanales de búsqueda en vivo con rollover acumulable hasta 6.
 * - Renovación automática cada lunes a las 00:00 UTC (+4 fichas).
 * - Embudo de Crecimiento: Bono de +1 ficha gratis por abrir Rolli en Telegram.
 * - Radar y consultas cacheadas siempre gratis e ilimitadas (0 fichas).
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'fb_tokens_state_v1';
  const TOKENS_BASE_SEMANAL = 4;
  const TOKENS_MAX_ROLLOVER = 6;
  const TELEGRAM_BOT_URL = 'https://t.me/GnZFlightBot?start=bonus_web';

  // SVG de la Ficha Plateada FlightBot (Modelo Arcade Vintage)
  const SVG_FICHA_HTML = `
    <svg class="w-4 h-4 shrink-0 drop-shadow-sm inline-block align-middle -translate-y-[0.5px]" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" fill="url(#fbCoinBase)" stroke="url(#fbCoinRim)" stroke-width="4"/>
      <circle cx="50" cy="50" r="34" fill="url(#fbCoinInner)" stroke="#475569" stroke-width="2"/>
      <path d="M50 28 L53 44 L68 52 L68 56 L53 52 L53 64 L58 68 L58 71 L50 69 L42 71 L42 68 L47 64 L47 52 L32 56 L32 52 L47 44 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1"/>
      <text x="50" y="24" text-anchor="middle" font-size="6.5" font-weight="900" fill="#475569" letter-spacing="1">FLIGHT</text>
      <text x="50" y="80" text-anchor="middle" font-size="6.5" font-weight="900" fill="#475569" letter-spacing="1">BOT</text>
      <path d="M22 32 C30 18, 70 18, 78 32 C68 24, 32 24, 22 32 Z" fill="#ffffff" opacity="0.45"/>
      <defs>
        <linearGradient id="fbCoinBase" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff"/>
          <stop offset="0.3" stop-color="#e2e8f0"/>
          <stop offset="0.7" stop-color="#94a3b8"/>
          <stop offset="1" stop-color="#475569"/>
        </linearGradient>
        <linearGradient id="fbCoinRim" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff"/>
          <stop offset="0.5" stop-color="#64748b"/>
          <stop offset="1" stop-color="#cbd5e1"/>
        </linearGradient>
        <linearGradient id="fbCoinInner" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stop-color="#cbd5e1"/>
          <stop offset="0.5" stop-color="#94a3b8"/>
          <stop offset="1" stop-color="#64748b"/>
        </linearGradient>
      </defs>
    </svg>
  `;

  const SVG_FICHA_HERO = `
    <svg class="w-16 h-16 drop-shadow-md mx-auto mb-2" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" fill="url(#fbCoinBaseHero)" stroke="url(#fbCoinRimHero)" stroke-width="4"/>
      <circle cx="50" cy="50" r="34" fill="url(#fbCoinInnerHero)" stroke="#475569" stroke-width="2"/>
      <path d="M50 28 L53 44 L68 52 L68 56 L53 52 L53 64 L58 68 L58 71 L50 69 L42 71 L42 68 L47 64 L47 52 L32 56 L32 52 L47 44 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <text x="50" y="24" text-anchor="middle" font-size="6.5" font-weight="900" fill="#475569" letter-spacing="1">FLIGHT</text>
      <text x="50" y="80" text-anchor="middle" font-size="6.5" font-weight="900" fill="#475569" letter-spacing="1">BOT</text>
      <path d="M22 32 C30 18, 70 18, 78 32 C68 24, 32 24, 22 32 Z" fill="#ffffff" opacity="0.45"/>
      <defs>
        <linearGradient id="fbCoinBaseHero" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff"/>
          <stop offset="0.3" stop-color="#e2e8f0"/>
          <stop offset="0.7" stop-color="#94a3b8"/>
          <stop offset="1" stop-color="#475569"/>
        </linearGradient>
        <linearGradient id="fbCoinRimHero" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff"/>
          <stop offset="0.5" stop-color="#64748b"/>
          <stop offset="1" stop-color="#cbd5e1"/>
        </linearGradient>
        <linearGradient id="fbCoinInnerHero" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stop-color="#cbd5e1"/>
          <stop offset="0.5" stop-color="#94a3b8"/>
          <stop offset="1" stop-color="#64748b"/>
        </linearGradient>
      </defs>
    </svg>
  `;

  /**
   * Calcula el identificador de la semana ISO actual (ej: "2026-W45")
   */
  function obtenerSemanaISO(d = new Date()) {
    const target = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNr = (target.getUTCDay() + 6) % 7;
    target.setUTCDate(target.getUTCDate() - dayNr + 3);
    const primerJueves = target.valueOf();
    target.setUTCMonth(0, 1);
    if (target.getUTCDay() !== 4) {
      target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
    }
    const semanaNr = 1 + Math.ceil((primerJueves - target.valueOf()) / 604800000);
    return `${target.getUTCFullYear()}-W${String(semanaNr).padStart(2, '0')}`;
  }

  /**
   * Carga el estado de fichas desde localStorage y aplica rollover semanal
   */
  function cargarEstadoTokens() {
    const semanaActual = obtenerSemanaISO();
    let estado = null;

    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      if (guardado) {
        estado = JSON.parse(guardado);
      }
    } catch (_e) {
      estado = null;
    }

    if (!estado || typeof estado.tokens_available !== 'number') {
      estado = {
        tokens_available: TOKENS_BASE_SEMANAL,
        max_tokens: TOKENS_MAX_ROLLOVER,
        last_reset_week: semanaActual,
        telegram_bonus_claimed: false,
      };
    } else if (estado.last_reset_week !== semanaActual) {
      const saldoAnterior = estado.tokens_available || 0;
      estado.tokens_available = Math.min(TOKENS_MAX_ROLLOVER, saldoAnterior + TOKENS_BASE_SEMANAL);
      estado.last_reset_week = semanaActual;
    }

    guardarEstadoTokens(estado);
    return estado;
  }

  /**
   * Guarda el estado actual en localStorage
   */
  function guardarEstadoTokens(estado) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
    } catch (_e) {}
  }

  let estadoTokens = cargarEstadoTokens();

  window.FB_AUTH = {
    tokens_available: estadoTokens.tokens_available,
    max_tokens: estadoTokens.max_tokens,
    telegram_bonus_claimed: estadoTokens.telegram_bonus_claimed,
    isAuthenticated: true,
    isGuest: true,
  };

  /**
   * Actualiza el widget de fichas en la barra de navegación y drawer móvil
   */
  function actualizarInterfazTokens() {
    const navCount = document.getElementById('nav-tokens-display');
    const mobileCount = document.getElementById('mobile-tokens-display');

    if (navCount) {
      navCount.textContent = `(${estadoTokens.tokens_available})`;
      if (estadoTokens.tokens_available === 0) {
        navCount.classList.add('text-rose-500');
        navCount.classList.remove('font-bold');
      } else {
        navCount.classList.remove('text-rose-500');
        navCount.classList.add('font-bold');
      }
    }

    if (mobileCount) {
      mobileCount.textContent = `${estadoTokens.tokens_available} disponibles`;
      if (estadoTokens.tokens_available === 0) {
        mobileCount.className = 'px-2 py-0.5 rounded-full text-[11px] font-bold text-rose-500 bg-rose-500/10 border border-rose-500/20';
      } else {
        mobileCount.className = 'px-2 py-0.5 rounded-full text-[11px] font-bold text-slate-300 bg-slate-800 border border-slate-700';
      }
    }

    window.FB_AUTH.tokens_available = estadoTokens.tokens_available;
    window.FB_AUTH.telegram_bonus_claimed = estadoTokens.telegram_bonus_claimed;

    window.dispatchEvent(
      new CustomEvent('flightbot:tokens-changed', {
        detail: {
          tokens_available: estadoTokens.tokens_available,
          max_tokens: estadoTokens.max_tokens,
        },
      })
    );
  }

  /**
   * Consume 1 ficha para una búsqueda en vivo personalizada
   */
  function consumirToken() {
    estadoTokens = cargarEstadoTokens();
    if (estadoTokens.tokens_available <= 0) {
      actualizarInterfazTokens();
      renderModalTokens(true);
      return false;
    }

    estadoTokens.tokens_available -= 1;
    guardarEstadoTokens(estadoTokens);
    actualizarInterfazTokens();
    return true;
  }

  /**
   * Reclama el bono de bienvenida de Telegram (+1 ficha)
   */
  function reclamarBonoTelegram() {
    estadoTokens = cargarEstadoTokens();
    if (!estadoTokens.telegram_bonus_claimed) {
      estadoTokens.telegram_bonus_claimed = true;
      estadoTokens.tokens_available = Math.min(TOKENS_MAX_ROLLOVER, estadoTokens.tokens_available + 1);
      guardarEstadoTokens(estadoTokens);
      actualizarInterfazTokens();
      mostrarNotificacion('¡Ficha de regalo acreditada! Abriendo Telegram... 🪙', 'success');
    }
    window.open(TELEGRAM_BOT_URL, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      renderModalTokens(false);
    }, 400);
  }

  /**
   * Renderiza el modal de billetera de fichas
   */
  function renderModalTokens(agotados = false) {
    let modal = document.getElementById('fb-user-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'fb-user-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md hidden';
      modal.onclick = (e) => {
        if (e.target === modal) cerrarModalTokens();
      };
      document.body.appendChild(modal);
    }

    estadoTokens = cargarEstadoTokens();
    const porcentaje = Math.min(100, Math.round((estadoTokens.tokens_available / TOKENS_MAX_ROLLOVER) * 100));

    const cardBonoTelegram = !estadoTokens.telegram_bonus_claimed
      ? `
        <div class="p-3.5 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950/40 border border-slate-700 text-left mb-4 shadow-sm">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-bold text-slate-100 flex items-center gap-1.5">
              <span>🎁</span> Bono de Bienvenida
            </span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-700/80 text-slate-200 border border-slate-600 flex items-center gap-1">
              +1 Ficha Gratis
            </span>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed mb-3">
            Hablale a Rolli por Telegram para sumar <strong>1 ficha extra</strong> y activar alertas 24/7 en tu celular cuando bajen los precios.
          </p>
          <button onclick="window.FB_AUTH_UI.reclamarBonoTelegram()" 
                  class="w-full flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-600 active:scale-[0.98] transition-all shadow-md shadow-sky-500/20 cursor-pointer">
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .36z"/>
            </svg>
            <span>Desbloquear +1 Ficha en Telegram</span>
          </button>
        </div>
      `
      : `
        <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-left mb-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-emerald-500 text-lg">✅</span>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              <div class="font-bold text-emerald-500">Bono de Telegram acreditado</div>
              <div>Alertas instantáneas activas con Rolli</div>
            </div>
          </div>
          <a href="${TELEGRAM_BOT_URL}" target="_blank" rel="noopener noreferrer" 
             class="px-2.5 py-1 rounded-lg text-[11px] font-bold text-sky-500 hover:underline">
            Abrir chat ➔
          </a>
        </div>
      `;

    const alertaAgotadoHtml = agotados || estadoTokens.tokens_available === 0
      ? `
        <div class="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/25 text-left mb-3.5">
          <div class="text-xs font-bold text-rose-500 flex items-center gap-1.5 mb-1">
            <span>💡</span> Te quedaste sin fichas de búsqueda en vivo esta semana
          </div>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
            Las consultas al <strong>Radar</strong> y tarifas cacheadas siguen siendo <strong>100% gratis e ilimitadas</strong>. Rolli sigue monitoreando las 24 hs en Telegram.
          </p>
        </div>
      `
      : '';

    modal.innerHTML = `
      <div class="relative w-full max-w-sm rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl p-5 text-center transition-all">
        <!-- Botón Cerrar -->
        <button onclick="window.FB_AUTH_UI.toggleModal()" 
                class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl leading-none cursor-pointer">
          &times;
        </button>

        <!-- Ficha Plateada Hero -->
        ${SVG_FICHA_HERO}

        <div class="mb-3">
          <h3 class="text-base font-bold text-slate-900 dark:text-white leading-tight">Fichas de Búsqueda</h3>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">FlightBot Arcade • Insert Coin para cotizar</p>
        </div>

        ${alertaAgotadoHtml}

        <!-- Estado de Fichas -->
        <div class="p-3.5 rounded-2xl dark:bg-slate-800/60 bg-slate-100 border dark:border-slate-700/60 border-slate-200/80 mb-3.5 text-left">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">Fichas en Vivo Disponibles</span>
            <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
              ${SVG_FICHA_HTML}
              <span>${estadoTokens.tokens_available} de ${TOKENS_MAX_ROLLOVER}</span>
            </span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mb-2">
            <div class="h-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-100 rounded-full transition-all duration-500 shadow-sm" 
                 style="width: ${porcentaje}%"></div>
          </div>
          <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
            ● <strong>Caché & Radar:</strong> $0 y 0 fichas (ilimitados).<br>
            ● <strong>Renovación:</strong> +4 fichas cada lunes (tope 6 con rollover).
          </p>
        </div>

        <!-- Tarjeta de Conversión a Telegram -->
        ${cardBonoTelegram}

        <!-- Botón Cerrar -->
        <button onclick="window.FB_AUTH_UI.toggleModal()" 
                class="w-full py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
          Entendido
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  function cerrarModalTokens() {
    const modal = document.getElementById('fb-user-modal');
    if (modal) modal.classList.add('hidden');
  }

  function mostrarNotificacion(mensaje, tipo = 'info') {
    let toast = document.getElementById('fb-auth-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'fb-auth-toast';
      toast.className = 'fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl transition-all transform translate-y-10 opacity-0 pointer-events-none';
      document.body.appendChild(toast);
    }

    toast.innerText = mensaje;
    if (tipo === 'success') {
      toast.className = 'fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl transition-all bg-emerald-600 text-white translate-y-0 opacity-100';
    } else if (tipo === 'error') {
      toast.className = 'fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl transition-all bg-rose-600 text-white translate-y-0 opacity-100';
    } else {
      toast.className = 'fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl transition-all dark:bg-slate-800 bg-slate-900 text-white translate-y-0 opacity-100';
    }

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-10');
    }, 4000);
  }

  window.FB_AUTH_UI = {
    toggleModal: () => {
      const modal = document.getElementById('fb-user-modal');
      if (modal && !modal.classList.contains('hidden')) {
        cerrarModalTokens();
      } else {
        renderModalTokens(false);
      }
    },
    abrirModalAgotado: () => renderModalTokens(true),
    consumirToken: consumirToken,
    obtenerTokens: () => estadoTokens.tokens_available,
    reclamarBonoTelegram: reclamarBonoTelegram,
    iniciarLoginGoogle: () => renderModalTokens(false),
    cerrarSesion: () => {
      mostrarNotificacion('La web de FlightBot no requiere cuentas.', 'info');
    },
    sincronizarTelegram: reclamarBonoTelegram,
  };

  function inicializar() {
    actualizarInterfazTokens();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
  } else {
    inicializar();
  }
})();
