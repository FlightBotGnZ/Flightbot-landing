/**
 * FlightBot Telegram Mini App Bridge (telegram-webapp.js)
 * Adapta automáticamente la interfaz web cuando se abre dentro de Telegram:
 * - Expande la ventana a pantalla completa y sincroniza tema claro/oscuro.
 * - Habilita botón Atrás nativo de Telegram y feedback háptico suave.
 * - Permite crear alertas de precio en 1 toque enviando datos seguros al bot.
 */
(function (globalScope) {
  'use strict';

  function getTelegramWebApp() {
    if (
      typeof globalScope !== 'undefined' &&
      globalScope.Telegram &&
      globalScope.Telegram.WebApp
    ) {
      return globalScope.Telegram.WebApp;
    }
    return null;
  }

  function isInsideTelegram() {
    const tg = getTelegramWebApp();
    if (!tg) return false;
    // initData no vacío o plataforma nativa de Telegram
    return Boolean((tg.initData && tg.initData.length > 0) || (tg.platform && tg.platform !== 'unknown'));
  }

  function applyTelegramTheme(tg) {
    if (!tg || !tg.colorScheme) return;
    const isDark = tg.colorScheme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('fb_theme_mode', isDark ? 'dark' : 'light');
    } catch (_e) {}

    // Alinear colores de barra superior e inferior de Telegram con el diseño de FlightBot
    try {
      if (typeof tg.setHeaderColor === 'function') {
        tg.setHeaderColor(isDark ? '#020617' : '#ffffff');
      }
      if (typeof tg.setBackgroundColor === 'function') {
        tg.setBackgroundColor(isDark ? '#020617' : '#f8fafc');
      }
    } catch (_e) {}
  }

  function setupTelegramBackButton(tg) {
    if (!tg || !tg.BackButton) return;
    const path = (window.location && window.location.pathname) || '/';
    const isHome = path === '/' || path === '/index.html';
    if (!isHome) {
      tg.BackButton.show();
      tg.BackButton.onClick(function () {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = '/vuelos?tg_app=1';
        }
      });
    } else {
      tg.BackButton.hide();
    }
  }

  // Envía una acción estructurada al bot desde la Mini App (ej. crear alerta de precio en 1 toque)
  function sendActionToBot(actionPayload) {
    const tg = getTelegramWebApp();
    if (!tg || !isInsideTelegram() || typeof tg.sendData !== 'function') {
      return false;
    }
    try {
      if (tg.HapticFeedback && typeof tg.HapticFeedback.impactOccurred === 'function') {
        tg.HapticFeedback.impactOccurred('light');
      }
      const serialized = JSON.stringify(actionPayload);
      if (serialized.length > 3500) return false;
      tg.sendData(serialized);
      return true;
    } catch (_err) {
      return false;
    }
  }

  // Crea una alerta de precio objetivo en 1 toque desde la Mini App o abre deep link en navegador normal
  function createPriceAlertInOneTap(destinationIata, maxPriceUsd) {
    const dest = String(destinationIata || '').trim().toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);
    const price = Math.round(Number(maxPriceUsd) || 0);
    if (!dest || dest.length !== 3 || price < 10) return false;

    if (sendActionToBot({ action: 'price_alert', destination: dest, max_price_usd: price })) {
      return true;
    }
    // Fallback para usuarios abriendo desde navegador web normal
    const deepUrl = 'https://t.me/GnZFlightBot?start=' + encodeURIComponent('alerta_' + dest.toLowerCase());
    window.open(deepUrl, '_blank', 'noopener,noreferrer');
    return false;
  }

  function initTelegramMiniApp() {
    const tg = getTelegramWebApp();
    if (!tg || !isInsideTelegram()) return;

    document.documentElement.classList.add('fb-tg-miniapp');
    try {
      tg.ready();
      tg.expand();
    } catch (_e) {}

    applyTelegramTheme(tg);
    setupTelegramBackButton(tg);

    if (typeof tg.onEvent === 'function') {
      tg.onEvent('themeChanged', function () {
        applyTelegramTheme(tg);
      });
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initTelegramMiniApp);
    } else {
      initTelegramMiniApp();
    }
  }

  const FlightBotTgApp = {
    isInsideTelegram: isInsideTelegram,
    sendActionToBot: sendActionToBot,
    createPriceAlertInOneTap: createPriceAlertInOneTap,
    initTelegramMiniApp: initTelegramMiniApp
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FlightBotTgApp;
  } else {
    globalScope.FlightBotTgApp = FlightBotTgApp;
  }
})(typeof window !== 'undefined' ? window : globalThis);
