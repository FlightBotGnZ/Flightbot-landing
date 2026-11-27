/**
 * FlightBot - Theme & Currency Management Module
 * Rolli Brand Standard: Official Aurora Mint Palette & Tri-Currency (NATIVO | ARS | USD)
 */

(function () {
  'use strict';

  // Constantes de cotización de referencia (MEP / Tarjeta) sincronizables con DolarAPI (caché 30m) y RADAR_DATA
  const FX_CACHE_KEY = 'fb_fx_rates_v1';
  const FX_TTL_MS = 30 * 60 * 1000;
  let TIPO_CAMBIO_USD_ARS = 1350;
  let TIPO_CAMBIO_EUR_USD = 1.08;
  let TIPO_CAMBIO_EUR_ARS = 1460;
  let fxDesdeCacheOVivo = false;

  function aplicarTasasEnMemoria(usdArs, eurArs, eurUsd) {
    const u = Number(usdArs);
    if (u >= 500 && u <= 5000) {
      TIPO_CAMBIO_USD_ARS = Math.round(u);
    }
    const eu = Number(eurUsd);
    if (eu >= 0.8 && eu <= 1.6) {
      TIPO_CAMBIO_EUR_USD = eu;
    }
    const ea = Number(eurArs);
    if (ea >= 500 && ea <= 6500) {
      TIPO_CAMBIO_EUR_ARS = Math.round(ea);
    } else {
      TIPO_CAMBIO_EUR_ARS = Math.round(TIPO_CAMBIO_USD_ARS * TIPO_CAMBIO_EUR_USD);
    }
  }

  function cargarDivisasDesdeCache() {
    try {
      const raw = localStorage.getItem(FX_CACHE_KEY);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed.ts !== 'number') return false;
      if ((Date.now() - parsed.ts) >= FX_TTL_MS) return false;
      if (Number(parsed.usdArs) >= 500 && Number(parsed.usdArs) <= 5000) {
        aplicarTasasEnMemoria(parsed.usdArs, parsed.eurArs, parsed.eurUsd);
        fxDesdeCacheOVivo = true;
        return true;
      }
    } catch (_) {}
    return false;
  }

  function guardarDivisasEnCache(usdArs, eurArs, eurUsd, fuente) {
    try {
      localStorage.setItem(FX_CACHE_KEY, JSON.stringify({
        ts: Date.now(),
        usdArs: Math.round(Number(usdArs)),
        eurArs: Math.round(Number(eurArs)),
        eurUsd: Number(eurUsd),
        fuente: fuente || 'dolarapi'
      }));
    } catch (_) {}
  }

  function resolverTipoCambioDesdeRadar() {
    if (fxDesdeCacheOVivo) return;
    try {
      if (!Array.isArray(window.RADAR_DATA) || !window.RADAR_DATA.length) return;
      const cab = window.RADAR_DATA.find((d) => d && d.es_cabotaje && Array.isArray(d.vuelos) && d.vuelos[0] && Number(d.vuelos[0].precio_ars) > 0 && Number(d.vuelos[0].precio_usd) > 0);
      if (cab) {
        const ratio = Number(cab.vuelos[0].precio_ars) / Number(cab.vuelos[0].precio_usd);
        if (ratio >= 500 && ratio <= 5000) {
          TIPO_CAMBIO_USD_ARS = Math.round(ratio / 10) * 10;
          TIPO_CAMBIO_EUR_ARS = Math.round((TIPO_CAMBIO_USD_ARS * TIPO_CAMBIO_EUR_USD) / 10) * 10;
        }
      }
    } catch (_) {}
  }

  cargarDivisasDesdeCache();

  window.getTipoCambioUsdArs = function () {
    resolverTipoCambioDesdeRadar();
    return TIPO_CAMBIO_USD_ARS;
  };

  window.getTiposCambioVivos = function () {
    resolverTipoCambioDesdeRadar();
    return {
      usdArs: TIPO_CAMBIO_USD_ARS,
      eurArs: TIPO_CAMBIO_EUR_ARS,
      eurUsd: TIPO_CAMBIO_EUR_USD
    };
  };

  window.setTiposCambioVivos = function (usdArs, eurUsd, fuente) {
    const u = Number(usdArs);
    if (!(u >= 500 && u <= 5000)) return;
    const eu = (Number(eurUsd) >= 0.8 && Number(eurUsd) <= 1.6) ? Number(eurUsd) : TIPO_CAMBIO_EUR_USD;
    const ea = Math.round(u * eu);
    aplicarTasasEnMemoria(u, ea, eu);
    fxDesdeCacheOVivo = true;
    guardarDivisasEnCache(TIPO_CAMBIO_USD_ARS, TIPO_CAMBIO_EUR_ARS, TIPO_CAMBIO_EUR_USD, fuente || 'backend');
    if (typeof sincronizarTextosCotizacionFooter === 'function') {
      sincronizarTextosCotizacionFooter();
    }
  };
  const EUROPE_DEST_IDS = [
    'madrid', 'barcelona', 'lisboa', 'roma', 'paris',
    'londres', 'berlin', 'frankfurt', 'amsterdam', 'atenas', 'oslo', 'reikiavik'
  ];

  // 1. Inicialización de Tema (Aurora Mint oficial, Modo Oscuro Midnight Slate por defecto al migrar)
  function initTheme() {
    try {
      if (!localStorage.getItem('fb_theme_aurora_v2')) {
        localStorage.setItem('fb_theme_mode', 'dark');
        localStorage.setItem('fb_theme_color', 'aurora-mint');
        localStorage.setItem('fb_theme_aurora_v2', '1');
      }
    } catch (_) {}
    const savedMode = localStorage.getItem('fb_theme_mode') || 'dark';
    document.documentElement.setAttribute('data-color', 'aurora-mint');
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
    const mModeIcon = document.getElementById('m-theme-mode-icon');
    if (mModeIcon) {
      mModeIcon.textContent = isDark ? '🌙' : '☀️';
    }
    const mModeText = document.getElementById('m-theme-mode-text');
    if (mModeText) {
      mModeText.textContent = isDark ? 'Modo Oscuro' : 'Modo Claro';
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
    const isNativo = currentMonedaGlobal === 'NATIVO' || currentMonedaGlobal === 'DEFAULT';
    const isArs = currentMonedaGlobal === 'ARS';
    const isUsd = currentMonedaGlobal === 'USD';

    const navBtnNativo = document.getElementById('nav-btn-curr-nativo');
    const navBtnArs = document.getElementById('nav-btn-curr-ars');
    const navBtnUsd = document.getElementById('nav-btn-curr-usd');

    const btnNativo = document.getElementById('btn-curr-nativo');
    const btnArs = document.getElementById('btn-curr-ars');
    const btnUsd = document.getElementById('btn-curr-usd');

    const mBtnNativo = document.getElementById('m-btn-curr-nativo');
    const mBtnArs = document.getElementById('m-btn-curr-ars');
    const mBtnUsd = document.getElementById('m-btn-curr-usd');

    const fBtnNativo = document.getElementById('footer-btn-curr-nativo');
    const fBtnArs = document.getElementById('footer-btn-curr-ars');
    const fBtnUsd = document.getElementById('footer-btn-curr-usd');

    const activeClasses = 'px-2 py-1 rounded-md aurora-cta-btn aurora-curr-active text-white shadow-sm font-semibold transition-all text-[11px] cursor-pointer';
    const inactiveClasses = 'px-2 py-1 rounded-md text-slate-600 dark:text-slate-400 hover-cyan-aurora font-medium transition-colors text-[11px] cursor-pointer';

    if (navBtnNativo) navBtnNativo.className = isNativo ? activeClasses : inactiveClasses;
    if (navBtnArs) navBtnArs.className = isArs ? activeClasses : inactiveClasses;
    if (navBtnUsd) navBtnUsd.className = isUsd ? activeClasses : inactiveClasses;

    if (btnNativo) btnNativo.className = isNativo ? activeClasses : inactiveClasses;
    if (btnArs && !document.getElementById('btn-curr-default')) btnArs.className = isArs ? activeClasses : inactiveClasses;
    if (btnUsd && !document.getElementById('btn-curr-default')) btnUsd.className = isUsd ? activeClasses : inactiveClasses;

    if (mBtnNativo) mBtnNativo.className = isNativo ? activeClasses : inactiveClasses;
    if (mBtnArs) mBtnArs.className = isArs ? activeClasses : inactiveClasses;
    if (mBtnUsd) mBtnUsd.className = isUsd ? activeClasses : inactiveClasses;

    if (fBtnNativo) fBtnNativo.className = isNativo ? activeClasses : inactiveClasses;
    if (fBtnArs) fBtnArs.className = isArs ? activeClasses : inactiveClasses;
    if (fBtnUsd) fBtnUsd.className = isUsd ? activeClasses : inactiveClasses;
  }

  // 4. Formateador inteligente de precios en moneda activa
  window.formatearPrecioMoneda = function (precioOriginalStr, dest) {
    if (!precioOriginalStr) return '';
    resolverTipoCambioDesdeRadar();
    let str = String(precioOriginalStr).trim();

    const isEn = !!(window.FB_I18N && window.FB_I18N.isEn && window.FB_I18N.isEn());
    let suffix = '';
    if (str.includes(' / noche')) {
      suffix = isEn ? ' / night' : ' / noche';
      str = str.replace(' / noche', '');
    } else if (str.includes('/noche')) {
      suffix = isEn ? ' / night' : ' / noche';
      str = str.replace('/noche', '');
    } else if (str.includes(' c/u')) {
      suffix = isEn ? ' ea.' : ' c/u';
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

  function sincronizarTextosCotizacionFooter() {
    resolverTipoCambioDesdeRadar();
    const cotizTxt = `$${TIPO_CAMBIO_USD_ARS.toLocaleString('es-AR')} ARS`;
    document.querySelectorAll('footer strong, footer span, [data-fb-fx="usd"], [title*="MEP"], [title*="1.350"], #footer-usd-ref-rate').forEach(function (el) {
      if (el.id === 'footer-usd-ref-rate' || el.getAttribute('data-fb-fx') === 'usd') {
        el.textContent = cotizTxt;
      } else if (el.children.length === 0 && el.textContent && /\$\s*\d[\d\.]*\s*ARS/i.test(el.textContent)) {
        el.textContent = el.textContent.replace(/\$\s*\d[\d\.]*\s*ARS/gi, cotizTxt);
      }
      const ttl = el.getAttribute && el.getAttribute('title');
      if (ttl && /\$\s*\d[\d\.]*\s*ARS/i.test(ttl)) {
        el.setAttribute('title', ttl.replace(/\$\s*\d[\d\.]*\s*ARS/gi, cotizTxt));
      }
    });
  }

  function emitirCambioDivisas() {
    sincronizarTextosCotizacionFooter();
    window.dispatchEvent(new CustomEvent('flightbot:fxUpdate', {
      detail: {
        usdArs: TIPO_CAMBIO_USD_ARS,
        eurArs: TIPO_CAMBIO_EUR_ARS,
        eurUsd: TIPO_CAMBIO_EUR_USD
      }
    }));
    if (typeof window.renderRadarDestino === 'function' && window.currentDestinationId) {
      window.renderRadarDestino(window.currentDestinationId);
    }
    if (typeof window.recalcularComparadorAutoAvion === 'function') {
      window.recalcularComparadorAutoAvion();
    }
    if (typeof window.actualizarBurbujaYTarjetasRolli === 'function') {
      window.actualizarBurbujaYTarjetasRolli();
    }
  }

  async function actualizarDivisasEnVivo() {
    if (cargarDivisasDesdeCache()) {
      sincronizarTextosCotizacionFooter();
      return;
    }
    if (typeof fetch !== 'function' || window.location.protocol === 'file:') return;
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(function () { ctrl.abort(); }, 5000);
      const [resUsd, resEur] = await Promise.all([
        fetch('https://dolarapi.com/v1/dolares/bolsa', { signal: ctrl.signal, cache: 'no-store' }),
        fetch('https://dolarapi.com/v1/cotizaciones/eur', { signal: ctrl.signal, cache: 'no-store' }).catch(function () { return null; })
      ]);
      clearTimeout(timer);

      let usdArs = null;
      if (resUsd && resUsd.ok) {
        const dUsd = await resUsd.json();
        const val = Number(dUsd && (dUsd.venta || dUsd.compra));
        if (val >= 500 && val <= 5000) usdArs = Math.round(val);
      }

      let eurArs = null;
      let eurUsd = TIPO_CAMBIO_EUR_USD;
      if (resEur && resEur.ok) {
        const dEur = await resEur.json();
        const valE = Number(dEur && (dEur.venta || dEur.compra));
        if (valE >= 500 && valE <= 6500) eurArs = Math.round(valE);
      }

      if (usdArs) {
        if (eurArs && usdArs > 0) {
          const ratio = Number((eurArs / usdArs).toFixed(4));
          if (ratio >= 0.8 && ratio <= 1.6) eurUsd = ratio;
        } else {
          eurArs = Math.round(usdArs * eurUsd);
        }
        aplicarTasasEnMemoria(usdArs, eurArs, eurUsd);
        fxDesdeCacheOVivo = true;
        guardarDivisasEnCache(TIPO_CAMBIO_USD_ARS, TIPO_CAMBIO_EUR_ARS, TIPO_CAMBIO_EUR_USD, 'dolarapi');
        emitirCambioDivisas();
      }
    } catch (_) {
      // Silencioso: conserva la caché previa, ratio de RADAR_DATA o fallback
    }
  }

  function hidratarEstadisticasSitio() {
    const base = (window.FLIGHTBOT_STATS && typeof window.FLIGHTBOT_STATS === 'object') ? window.FLIGHTBOT_STATS : {};
    const destinos = Array.isArray(window.RADAR_DATA) && window.RADAR_DATA.length
      ? window.RADAR_DATA.length
      : Number(base.destinos || 57);
    const rutasTop = Number(base.rutas_top || 8);
    const rutasSecundarias = Math.max(0, destinos - rutasTop);
    const resorts = Array.isArray(window.RESORTS_DATA) && window.RESORTS_DATA.length
      ? window.RESORTS_DATA.length
      : Number(base.resorts || 31);
    const cupones = Array.isArray(window.CUPONES_DATA)
      ? window.CUPONES_DATA.filter(function (c) { return c && c.activo !== false && c.codigo; }).length
      : Number(base.cupones || 5);
    const domEscapadas = document.querySelectorAll('.esc-card').length;
    const escapadas = domEscapadas > 0 ? domEscapadas : Number(base.escapadas || 24);
    const domGuias = document.querySelectorAll('#guias-grid article').length;
    const guias = domGuias > 0 ? domGuias : Number(base.guias || 57);

    const mapa = {
      destinos: destinos,
      rutas_top: rutasTop,
      rutas_secundarias: rutasSecundarias,
      resorts: resorts,
      cupones: cupones,
      escapadas: escapadas,
      guias: guias
    };

    document.querySelectorAll('[data-fb-stat]').forEach(function (el) {
      const clave = el.getAttribute('data-fb-stat');
      if (clave && Object.prototype.hasOwnProperty.call(mapa, clave)) {
        el.textContent = String(mapa[clave]);
      }
    });
    return mapa;
  }

  window.hidratarEstadisticasSitio = hidratarEstadisticasSitio;

  // 5. Speculation Rules (Prerender / Prefetch al pasar el cursor sobre la navbar)
  function initNavigationSpeculationRules() {
    try {
      if (
        typeof HTMLScriptElement === 'undefined' ||
        typeof HTMLScriptElement.supports !== 'function' ||
        !HTMLScriptElement.supports('speculationrules')
      ) {
        return;
      }
      if (document.getElementById('fb-speculation-rules')) return;

      const rules = {
        prerender: [
          {
            source: 'document',
            where: {
              and: [
                { selector_matches: 'header nav a[href^="/"], header a[href="/"]' },
                { not: { selector_matches: '[target="_blank"]' } }
              ]
            },
            eagerness: 'moderate'
          }
        ],
        prefetch: [
          {
            source: 'document',
            where: {
              and: [
                { href_matches: '/*' },
                { not: { href_matches: '/api/*' } },
                { not: { selector_matches: '[target="_blank"]' } }
              ]
            },
            eagerness: 'moderate'
          }
        ]
      };

      const script = document.createElement('script');
      script.id = 'fb-speculation-rules';
      script.type = 'speculationrules';
      script.textContent = JSON.stringify(rules);
      (document.head || document.documentElement).appendChild(script);
    } catch (_) {
      // Silencioso en navegadores sin soporte o con políticas restrictivas
    }
  }

  // 6. Inicialización al cargar el DOM
  document.addEventListener('DOMContentLoaded', function () {
    updateThemeControls();
    updateCurrencyControls();
    hidratarEstadisticasSitio();
    sincronizarTextosCotizacionFooter();
    actualizarDivisasEnVivo();
    initNavigationSpeculationRules();
  });
})();
