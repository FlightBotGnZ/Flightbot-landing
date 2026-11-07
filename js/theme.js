/**
 * FlightBot - Theme & Currency Management Module
 * Rolli Brand Standard: Official Ruby Palette & Tri-Currency (NATIVO | ARS | USD)
 */

(function () {
  'use strict';

  // Constantes de cotización de referencia (MEP / Tarjeta)
  const TIPO_CAMBIO_USD_ARS = 1350;
  const TIPO_CAMBIO_EUR_ARS = 1460;
  const TIPO_CAMBIO_EUR_USD = 1.08;
  const EUROPE_DEST_IDS = [
    'madrid', 'barcelona', 'lisboa', 'roma', 'paris',
    'londres', 'berlin', 'frankfurt', 'amsterdam', 'atenas', 'oslo', 'reikiavik'
  ];

  // 1. Inicialización de Tema (Ruby fijo, Dark/Light configurable)
  function initTheme() {
    const savedMode = localStorage.getItem('fb_theme_mode') || 'dark';
    document.documentElement.setAttribute('data-color', 'ruby');
    if (savedMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  initTheme();

  // 2. Alternancia de Modo Claro / Oscuro
  window.toggleThemeMode = function () {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('fb_theme_mode', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('fb_theme_mode', 'dark');
    }
    updateThemeControls();
  };

  function updateThemeControls() {
    const isDark = document.documentElement.classList.contains('dark');
    const modeIcon = document.getElementById('theme-mode-icon');
    if (modeIcon) {
      modeIcon.textContent = isDark ? '🌙' : '☀️';
    }
    const modeLabel = document.getElementById('theme-mode-label');
    if (modeLabel) {
      modeLabel.textContent = isDark ? 'Modo Oscuro' : 'Modo Claro';
    }
  }

  // 3. Gestión de Moneda Global (NATIVO | ARS | USD)
  let currentMonedaGlobal = localStorage.getItem('fb_user_currency') || 'NATIVO';
  if (currentMonedaGlobal === 'DEFAULT') {
    currentMonedaGlobal = 'NATIVO';
    localStorage.setItem('fb_user_currency', 'NATIVO');
  }
  if (!['NATIVO', 'ARS', 'USD'].includes(currentMonedaGlobal)) {
    currentMonedaGlobal = 'NATIVO';
    localStorage.setItem('fb_user_currency', 'NATIVO');
  }

  window.getMonedaGlobal = function () {
    return currentMonedaGlobal;
  };

  window.cambiarMonedaGlobal = function (moneda) {
    if (moneda === 'DEFAULT') moneda = 'NATIVO';
    if (!['NATIVO', 'ARS', 'USD'].includes(moneda)) moneda = 'NATIVO';
    currentMonedaGlobal = moneda;
    localStorage.setItem('fb_user_currency', moneda);

    updateCurrencyControls();

    // Notificar al sistema de cambio de moneda
    window.dispatchEvent(new CustomEvent('flightbot:currencyChange', { detail: { currency: moneda } }));

    // Re-renderizado de catálogo si está presente
    if (typeof window.renderRadarDestino === 'function' && window.currentDestinationId) {
      window.renderRadarDestino(window.currentDestinationId);
    }
    if (typeof window.recalcularComparadorAutoAvion === 'function') {
      window.recalcularComparadorAutoAvion();
    }
    if (typeof window.actualizarBurbujaYTarjetasRolli === 'function') {
      window.actualizarBurbujaYTarjetasRolli();
    }
  };

  function updateCurrencyControls() {
    const btnNativo = document.getElementById('btn-curr-nativo') || document.getElementById('btn-curr-default');
    const btnArs = document.getElementById('btn-curr-ars');
    const btnUsd = document.getElementById('btn-curr-usd');

    const mBtnNativo = document.getElementById('m-btn-curr-nativo');
    const mBtnArs = document.getElementById('m-btn-curr-ars');
    const mBtnUsd = document.getElementById('m-btn-curr-usd');

    const activeClasses = 'px-2.5 py-1 rounded-md text-white font-semibold bg-rose-600 shadow-xs transition-all text-xs';
    const inactiveClasses = 'px-2.5 py-1 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium transition-all text-xs';

    if (btnNativo) btnNativo.className = (currentMonedaGlobal === 'NATIVO') ? activeClasses : inactiveClasses;
    if (btnArs) btnArs.className = (currentMonedaGlobal === 'ARS') ? activeClasses : inactiveClasses;
    if (btnUsd) btnUsd.className = (currentMonedaGlobal === 'USD') ? activeClasses : inactiveClasses;

    if (mBtnNativo) mBtnNativo.className = (currentMonedaGlobal === 'NATIVO') ? activeClasses : inactiveClasses;
    if (mBtnArs) mBtnArs.className = (currentMonedaGlobal === 'ARS') ? activeClasses : inactiveClasses;
    if (mBtnUsd) mBtnUsd.className = (currentMonedaGlobal === 'USD') ? activeClasses : inactiveClasses;
  }

  // 4. Formateador inteligente de precios en moneda activa
  window.formatearPrecioMoneda = function (precioOriginalStr, dest) {
    if (!precioOriginalStr) return '';
    let str = String(precioOriginalStr).trim();

    let suffix = '';
    if (str.includes(' / noche')) {
      suffix = ' / noche';
      str = str.replace(' / noche', '');
    } else if (str.includes('/noche')) {
      suffix = ' / noche';
      str = str.replace('/noche', '');
    } else if (str.includes(' c/u')) {
      suffix = ' c/u';
      str = str.replace(' c/u', '');
    }

    // A. Detectar EUR
    let eur = null;
    const mEur = str.match(/€\s*([0-9]+(?:[\.,][0-9]{3})*|[0-9]+)|([0-9]+(?:[\.,][0-9]{3})*|[0-9]+)\s*€/i);
    if (mEur) {
      const rawEur = (mEur[1] || mEur[2]).replace(/[\.,]/g, '');
      const valEur = parseInt(rawEur, 10);
      if (!isNaN(valEur) && valEur > 0) eur = valEur;
    }

    // B. Detectar USD
    let usd = null;
    const mUsd = str.match(/US?\$?\s*([0-9]+(?:[\.,][0-9]{3})*|[0-9]+)/i);
    if (mUsd) {
      const rawUsd = mUsd[1].replace(/[\.,]/g, '');
      const valUsd = parseInt(rawUsd, 10);
      if (!isNaN(valUsd) && valUsd > 0) usd = valUsd;
    }

    // C. Detectar ARS
    let ars = null;
    const strSinUsdEur = str.replace(/US?\$?\s*[0-9]+(?:[\.,][0-9]{3})*/gi, '').replace(/€\s*[0-9]+(?:[\.,][0-9]{3})*/gi, '');
    const mArs = strSinUsdEur.match(/\$\s*([0-9]+(?:[\.,][0-9]{3})*|[0-9]+)/) ||
                 strSinUsdEur.match(/([0-9]+(?:[\.,][0-9]{3})*|[0-9]+)\s*ARS/i);
    if (mArs) {
      const rawArs = mArs[1].replace(/[\.,]/g, '');
      const valArs = parseInt(rawArs, 10);
      if (!isNaN(valArs) && valArs > 0) ars = valArs;
    } else if (usd === null && eur === null) {
      const raw = strSinUsdEur.replace(/[^0-9]/g, '');
      const val = parseInt(raw, 10);
      if (!isNaN(val) && val > 0) ars = val;
    }

    const destId = (dest && typeof dest === 'object') ? dest.id : (typeof dest === 'string' ? dest : null);
    const isEurope = (destId && EUROPE_DEST_IDS.includes(destId)) || (dest && dest.categoria_region === 'europa') || (eur !== null);
    const isCabotaje = (dest && (dest.es_cabotaje === true || dest.categoria_region === 'cabotaje')) || (ars !== null && usd === null && eur === null && !isEurope);

    if (currentMonedaGlobal === 'NATIVO') {
      if (isCabotaje) {
        if (ars !== null) return `$ ${ars.toLocaleString('es-AR')}${suffix}`;
      } else if (isEurope) {
        if (eur !== null) return `€ ${eur.toLocaleString('es-ES')}${suffix}`;
        if (usd !== null) return `€ ${Math.round(usd / TIPO_CAMBIO_EUR_USD).toLocaleString('es-ES')}${suffix}`;
        if (ars !== null) return `€ ${Math.round(ars / TIPO_CAMBIO_EUR_ARS).toLocaleString('es-ES')}${suffix}`;
      } else {
        if (usd !== null) return `US$ ${usd.toLocaleString('en-US')}${suffix}`;
        if (eur !== null) return `US$ ${Math.round(eur * TIPO_CAMBIO_EUR_USD).toLocaleString('en-US')}${suffix}`;
        if (ars !== null) return `US$ ${Math.round(ars / TIPO_CAMBIO_USD_ARS).toLocaleString('en-US')}${suffix}`;
      }
    } else if (currentMonedaGlobal === 'ARS') {
      if (ars !== null) return `$ ${ars.toLocaleString('es-AR')}${suffix}`;
      if (usd !== null) return `$ ${Math.round(usd * TIPO_CAMBIO_USD_ARS).toLocaleString('es-AR')}${suffix}`;
      if (eur !== null) return `$ ${Math.round(eur * TIPO_CAMBIO_EUR_ARS).toLocaleString('es-AR')}${suffix}`;
    } else if (currentMonedaGlobal === 'USD') {
      if (usd !== null) return `US$ ${usd.toLocaleString('en-US')}${suffix}`;
      if (eur !== null) return `US$ ${Math.round(eur * TIPO_CAMBIO_EUR_USD).toLocaleString('en-US')}${suffix}`;
      if (ars !== null) return `US$ ${Math.round(ars / TIPO_CAMBIO_USD_ARS).toLocaleString('en-US')}${suffix}`;
    }

    return str + suffix;
  };

  window.formatearTextoPin = function (textoPin, dest) {
    if (!textoPin) return '';
    return textoPin.replace(/(?:€\s*[0-9]+(?:\.[0-9]{3})*|\$\s*[0-9]+(?:\.[0-9]{3})*\s*ARS|US\$\s*[0-9]+(?:\.[0-9]{3})*|\$\s*[0-9]+(?:\.[0-9]{3})*)/gi, function (m) {
      return window.formatearPrecioMoneda(m, dest);
    });
  };

  window.toggleMobileNav = function (forceClose) {
    const drawer = document.getElementById('mobile-nav-drawer');
    const iconMenu = document.getElementById('nav-icon-menu');
    const iconClose = document.getElementById('nav-icon-close');
    if (!drawer) return;
    const shouldOpen = forceClose === undefined ? drawer.classList.contains('hidden') : !forceClose;
    if (shouldOpen) {
      drawer.classList.remove('hidden');
      if (iconMenu) iconMenu.classList.add('hidden');
      if (iconClose) iconClose.classList.remove('hidden');
    } else {
      drawer.classList.add('hidden');
      if (iconMenu) iconMenu.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
    }
  };

  // 5. Inicialización al cargar el DOM
  document.addEventListener('DOMContentLoaded', function () {
    updateThemeControls();
    updateCurrencyControls();
  });
})();
