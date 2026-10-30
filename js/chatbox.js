/**
 * FlightBot - Chatbox Concierge con Asistente IA 'F-Bot Rolli'
 * Motor unificado con persistencia multi-pestaña (Cross-Tab Synchronization).
 * Mantiene el hilo de conversación y estado en todas las páginas y pestañas.
 */
(function() {
  const STORAGE_KEY_HISTORY = 'fb_chat_history_v2';
  const STORAGE_KEY_OPEN = 'fb_chat_is_open_v2';
  const STORAGE_KEY_SESSION = 'fb_chat_session_id';
  const STORAGE_KEY_RESET = 'fb_chat_reset_trigger';

  const FB_INITIAL_GREETING = "👋 ¡Hola! Soy <b>F-Bot Rolli</b>, tu compañero de viaje y asistente de FlightBot 🧳.<br><br>Preguntame por vuelos baratos, mejores barrios para hospedarte en nuestros 53 destinos globales, trenes de alta velocidad, equipaje de bebé, o rutas viales:";
  const FB_INITIAL_PILLS = [
    "✈️ Vuelos a Roma y Madrid",
    "🏖️ Hoteles en Punta Cana",
    "🏨 ¿Dónde alojarse en Madrid?",
    "👶 Viajar con bebé y cochecito",
    "💳 Salas VIP con mis tarjetas"
  ];

  // Avatar Oficial en Alta Definición de F-Bot Rolli
  const rolliAvatarSrc = (typeof window !== 'undefined' && window.location.pathname.includes('/guias/')) 
    ? '../img/rolli-avatar-transparent.png' 
    : 'img/rolli-avatar-transparent.png';
  const ROLLI_DNI_SVG = `<img src="${rolliAvatarSrc}" alt="F-Bot Rolli" class="w-full h-full object-contain filter drop-shadow select-none pointer-events-none">`;

  // 1. Inyección de Estilos CSS si no existen en la página
  function ensureStyles() {
    if (document.getElementById('fb-chat-injected-styles')) return;
    const style = document.createElement('style');
    style.id = 'fb-chat-injected-styles';
    style.textContent = `
      #fb-chat-window {
        transform-origin: bottom right;
        transition: opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
                    visibility 0.32s ease,
                    width 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                    height 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                    max-height 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        opacity: 0;
        transform: scale(0.88) translateY(20px);
        pointer-events: none;
        visibility: hidden;
        max-width: calc(100vw - 2rem);
      }
      #fb-chat-window.fb-chat-open {
        opacity: 1 !important;
        transform: scale(1) translateY(0) !important;
        pointer-events: auto !important;
        visibility: visible !important;
      }
      #fb-chat-window.fb-chat-expanded {
        width: 640px !important;
        max-width: calc(100vw - 2rem) !important;
        height: 700px !important;
        max-height: 86vh !important;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Inyección del Contenedor HTML si no existe en la página
  function ensureChatMarkup() {
    if (document.getElementById('fb-chat-window')) return;

    const wrap = document.createElement('div');
    wrap.id = 'fb-chat-global-container';
    wrap.className = 'fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto';
    wrap.innerHTML = `
      <!-- Ventana Desplegable del Chatbox -->
      <div id="fb-chat-window"
           class="hidden fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[78vh] dark:bg-slate-900/95 bg-white/95 backdrop-blur-xl border dark:border-slate-700/80 border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden theme-transition"
           style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 25px -5px var(--brand-glow);">

        <!-- Cabecera del Chatbox con Rolli DNI -->
        <div class="px-4 py-3.5 flex items-center justify-between text-white"
             style="background: var(--brand-gradient);">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/20 flex-shrink-0 p-1 cursor-help overflow-hidden"
                 title="F-Bot Rolli · Asistente IA de Viajes">
              ${ROLLI_DNI_SVG}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="font-extrabold text-sm tracking-tight text-white">F-Bot Rolli</span>
                <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 flex-shrink-0">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  IA Activa
                </span>
              </div>
              <div id="fb-chat-status" class="text-[11px] text-white/85 font-medium truncate">
                Mascota &amp; Asistente IA de Viajes
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="window.resetFlightBotChat()" title="Reiniciar conversación" aria-label="Reiniciar conversación"
                    class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/90 transition-all text-xs cursor-pointer">
              ↺
            </button>
            <button type="button" id="fb-chat-expand-btn" onclick="window.toggleFlightBotChatExpand()" title="Maximizar tamaño" aria-label="Maximizar tamaño"
                    class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/90 transition-all text-xs cursor-pointer">
              ⛶
            </button>
            <button type="button" onclick="window.toggleFlightBotChat(false)" title="Minimizar chat" aria-label="Minimizar chat"
                    class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/90 transition-all text-sm font-bold cursor-pointer">
              ✕
            </button>
          </div>
        </div>

        <!-- Historial de Mensajes -->
        <div id="fb-chat-messages"
             class="flex-1 p-4 overflow-y-auto space-y-3 dark:bg-slate-950/60 bg-slate-50/80 text-sm scroll-smooth">
        </div>

        <!-- Sugerencias Rápidas (Quick Replies) -->
        <div id="fb-chat-pills"
             class="px-3 py-2.5 dark:bg-slate-900/90 bg-white border-t dark:border-slate-800 border-slate-200 flex gap-2 overflow-x-auto no-scrollbar">
        </div>

        <!-- Formulario de Entrada -->
        <form id="fb-chat-form" onsubmit="window.handleFlightBotSubmit(event)"
              class="p-3 dark:bg-slate-900 bg-white border-t dark:border-slate-800 border-slate-200 flex items-center gap-2">
          <input id="fb-chat-input" type="text" maxlength="320" autocomplete="off"
                 placeholder="Preguntá sobre vuelos, destinos, tarifas o consejos..."
                 class="flex-1 px-4 py-2.5 rounded-2xl text-xs sm:text-sm dark:bg-slate-800/90 bg-slate-100 dark:text-white text-slate-900 placeholder-slate-400 border dark:border-slate-700 border-slate-200 focus:outline-none focus:ring-2 transition-all"
                 style="--tw-ring-color: var(--brand-primary);" />
          <button id="fb-chat-send" type="submit" title="Enviar consulta" aria-label="Enviar consulta"
                  class="w-10 h-10 rounded-2xl text-white flex items-center justify-center shadow-md hover:brightness-110 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
                  style="background: var(--brand-gradient);">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>

        <!-- Pie del Chatbox con acceso directo a Telegram -->
        <div class="px-4 py-1.5 dark:bg-slate-950 bg-slate-100 border-t dark:border-slate-800/80 border-slate-200 flex items-center justify-between text-[11px] dark:text-slate-400 text-slate-500">
          <span>Asistente en tiempo real</span>
          <a href="https://t.me/GnZFlightBot" target="_blank" rel="noopener noreferrer"
             class="font-bold hover:underline flex items-center gap-1" style="color: var(--brand-primary);">
            Abrir en Telegram &rarr;
          </a>
        </div>
      </div>

      <!-- Botón Flotante Principal con Cara DNI de Rolli -->
      <button id="fb-chat-fab" type="button" onclick="window.toggleFlightBotChat()"
              aria-label="Abrir Asistente IA de FlightBot"
              class="group flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full text-white font-bold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              style="background: var(--brand-gradient); box-shadow: 0 14px 30px -5px var(--brand-glow);">
        <div class="relative w-8 h-8 rounded-full bg-slate-900/60 border border-white/30 flex items-center justify-center p-0.5 overflow-hidden shadow-inner">
          ${ROLLI_DNI_SVG}
        </div>
        <span class="pr-1 tracking-tight">F-Bot Rolli · Chat IA</span>
      </button>
    `;
    document.body.appendChild(wrap);
  }

  // 3. Gestión Segura de LocalStorage
  function storageGet(key, def = null) {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? v : def;
    } catch (_) {
      return def;
    }
  }

  function storageSet(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (_) {}
  }

  function storageRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch (_) {}
  }

  // Recuperar o generar session_id persistente entre pestañas
  function getSessionId() {
    let sid = storageGet(STORAGE_KEY_SESSION);
    if (!sid || !/^[A-Za-z0-9_\-]{4,48}$/.test(sid)) {
      sid = 'web_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
      storageSet(STORAGE_KEY_SESSION, sid);
    }
    return sid;
  }

  // Sanitización estricta anti-XSS
  function sanitizeBotHtml(raw) {
    const escaped = String(raw || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return escaped
      .replace(/&lt;b&gt;([\s\S]*?)&lt;\/b&gt;/gi, '<strong>$1</strong>')
      .replace(/&lt;i&gt;([\s\S]*?)&lt;\/i&gt;/gi, '<em>$1</em>')
      .replace(/&lt;code&gt;([\s\S]*?)&lt;\/code&gt;/gi, '<code class="px-1.5 py-0.5 rounded dark:bg-slate-700 bg-slate-200 font-mono text-xs">$1</code>')
      .replace(/&lt;br\s*\/?&gt;/gi, '<br>')
      .replace(/\n/g, '<br>');
  }

  // Carga y guardado del historial en localStorage
  function loadHistory() {
    try {
      const raw = storageGet(STORAGE_KEY_HISTORY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(-50); // últimos 50 mensajes
    } catch (_) {}
    return [];
  }

  function saveHistory(historyArr) {
    try {
      storageSet(STORAGE_KEY_HISTORY, JSON.stringify(historyArr.slice(-50)));
    } catch (_) {}
  }

  function appendToHistory(role, text) {
    const hist = loadHistory();
    hist.push({ role, text, timestamp: Date.now() });
    saveHistory(hist);
  }

  // Renderizar un nodo de mensaje en el DOM
  function renderMessageDOM(role, htmlText) {
    const container = document.getElementById('fb-chat-messages');
    if (!container) return;
    const wrap = document.createElement('div');
    if (role === 'user') {
      wrap.className = 'flex justify-end';
      const bubble = document.createElement('div');
      bubble.className = 'max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-sm text-white text-xs sm:text-sm leading-relaxed shadow-sm';
      bubble.style.background = 'var(--brand-gradient)';
      bubble.innerHTML = sanitizeBotHtml(htmlText);
      wrap.appendChild(bubble);
    } else {
      wrap.className = 'flex justify-start items-end gap-2';
      const avatar = document.createElement('div');
      avatar.className = 'w-7 h-7 rounded-xl bg-slate-800 border border-slate-700/80 shadow-xs flex-shrink-0 flex items-center justify-center p-0.5 overflow-hidden';
      avatar.title = 'F-Bot Rolli';
      avatar.innerHTML = ROLLI_DNI_SVG;
      wrap.appendChild(avatar);

      const bubble = document.createElement('div');
      bubble.className = 'max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm dark:bg-slate-800/95 bg-white dark:text-slate-100 text-slate-800 border dark:border-slate-700/80 border-slate-200 text-xs sm:text-sm leading-relaxed shadow-sm';
      bubble.innerHTML = sanitizeBotHtml(htmlText);
      wrap.appendChild(bubble);
    }
    container.appendChild(wrap);
    container.scrollTop = container.scrollHeight;
  }

  // Reconstruir toda la conversación desde el historial persistente
  function restoreConversationUI() {
    const container = document.getElementById('fb-chat-messages');
    if (!container) return;
    container.innerHTML = '';

    const history = loadHistory();
    if (history.length === 0) {
      // Saludo inicial predeterminado o contextual de la guía
      const greeting = window.FB_INITIAL_GREETING || FB_INITIAL_GREETING;
      renderMessageDOM('bot', greeting);
      appendToHistory('bot', greeting);
    } else {
      // Recrear cada mensaje del hilo
      history.forEach(m => {
        renderMessageDOM(m.role, m.text);
      });
    }
    const pills = window.FB_INITIAL_PILLS || FB_INITIAL_PILLS;
    renderPills(pills);
  }

  function renderPills(pills) {
    const bar = document.getElementById('fb-chat-pills');
    if (!bar) return;
    bar.innerHTML = '';
    (pills || FB_INITIAL_PILLS).slice(0, 5).forEach(txt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border dark:bg-slate-800 bg-slate-100 dark:border-slate-700 border-slate-200 dark:text-slate-200 text-slate-700 hover:brightness-110 transition-all flex-shrink-0 cursor-pointer';
      btn.textContent = txt;
      btn.onclick = function() { window.sendFlightBotPrompt(txt); };
      bar.appendChild(btn);
    });
  }

  function showTypingIndicator() {
    const container = document.getElementById('fb-chat-messages');
    if (!container) return null;
    const wrap = document.createElement('div');
    wrap.id = 'fb-chat-typing';
    wrap.className = 'flex justify-start items-end gap-2';
    wrap.innerHTML = `<div class="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700/80 shadow-xs flex-shrink-0 flex items-center justify-center p-0.5 overflow-hidden">${ROLLI_DNI_SVG}</div><div class="px-4 py-2.5 rounded-2xl rounded-bl-sm dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-200 text-xs dark:text-slate-400 text-slate-500 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style="animation-delay:0.15s"></span><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style="animation-delay:0.3s"></span><span class="ml-1">Consultando IA...</span></div>`;
    container.appendChild(wrap);
    container.scrollTop = container.scrollHeight;
    return wrap;
  }

  // 4. Lógica de Apertura / Cierre con Persistencia de Estado
  let fbChatCloseTimer = null;
  window.toggleFlightBotChat = function(forceOpen) {
    const win = document.getElementById('fb-chat-window');
    if (!win) return;
    if (fbChatCloseTimer) {
      clearTimeout(fbChatCloseTimer);
      fbChatCloseTimer = null;
    }
    const isOpen = win.classList.contains('fb-chat-open');
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !isOpen;

    if (shouldOpen) {
      win.classList.remove('hidden');
      void win.offsetWidth;
      win.classList.add('fb-chat-open');
      storageSet(STORAGE_KEY_OPEN, 'true');
      const inp = document.getElementById('fb-chat-input');
      if (inp) setTimeout(() => inp.focus(), 120);
      const container = document.getElementById('fb-chat-messages');
      if (container) container.scrollTop = container.scrollHeight;
    } else {
      win.classList.remove('fb-chat-open');
      storageSet(STORAGE_KEY_OPEN, 'false');
      fbChatCloseTimer = setTimeout(() => {
        if (!win.classList.contains('fb-chat-open')) {
          win.classList.add('hidden');
        }
      }, 360);
    }
  };

  window.toggleFlightBotChatExpand = function() {
    const win = document.getElementById('fb-chat-window');
    const btn = document.getElementById('fb-chat-expand-btn');
    if (!win) return;
    win.classList.toggle('fb-chat-expanded');
    const isExp = win.classList.contains('fb-chat-expanded');
    if (btn) {
      btn.textContent = isExp ? '🗗' : '⛶';
      btn.title = isExp ? 'Restaurar tamaño' : 'Maximizar tamaño';
      btn.setAttribute('aria-label', btn.title);
    }
    const messages = document.getElementById('fb-chat-messages');
    if (messages) {
      setTimeout(() => {
        messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  };

  // Reiniciar conversación y sincronizar entre pestañas
  window.resetFlightBotChat = function() {
    storageRemove(STORAGE_KEY_HISTORY);
    storageRemove(STORAGE_KEY_SESSION);
    storageSet(STORAGE_KEY_RESET, Date.now().toString());

    const container = document.getElementById('fb-chat-messages');
    if (container) container.innerHTML = '';
    const greeting = window.FB_INITIAL_GREETING || FB_INITIAL_GREETING;
    renderMessageDOM('bot', greeting);
    appendToHistory('bot', greeting);
    const pills = window.FB_INITIAL_PILLS || FB_INITIAL_PILLS;
    renderPills(pills);
  };

  // Base de Conocimiento de Destinos
  function getKB() {
    return window.FB_GUIAS_KB || {};
  }

  function detectarGuia(texto) {
    const t = texto.toLowerCase();
    const aliasMap = {
      rio: ['rio de janeiro', 'río de janeiro', 'janeiro', 'copacabana', 'ipanema', 'buzios', 'búzios', 'arraial', 'galeao', 'santos dumont'],
      roma: ['roma', 'rome', 'italia', 'coliseo', 'vaticano', 'trastevere', 'florencia', 'frecciarossa', 'fco'],
      madrid: ['madrid', 'españa', 'barajas', 'atocha', 'gran via', 'gran vía', 'ouigo', 'iryo', 'toledo'],
      miami: ['miami', 'florida', 'south beach', 'brickell', 'orlando', 'brightline', 'key west', 'everglades'],
      cancun: ['cancun', 'cancún', 'riviera maya', 'playa del carmen', 'tulum', 'chichen', 'ado', 'mexico'],
      puntacana: ['punta cana', 'puntacana', 'bavaro', 'bávaro', 'saona', 'republica dominicana', 'dominicana'],
      aruba: ['aruba', 'eagle beach', 'baby beach', 'palm beach', 'oranjestad'],
      bariloche: ['bariloche', 'circuito chico', 'campanario', 'catedral', '7 lagos', 'siete lagos', 'angostura'],
      mendoza: ['mendoza', 'valle de uco', 'lujan de cuyo', 'maipu', 'malbec', 'aconcagua', 'cacheuta'],
      iguazu: ['iguazu', 'iguazú', 'cataratas', 'garganta del diablo', 'puerto iguazu', 'foz'],
      reikiavik: ['reikiavik', 'reykjavik', 'islandia', 'auroras', 'aurora boreal', 'blue lagoon', 'circulo dorado'],
      oslo: ['oslo', 'noruega', 'fiordos', 'munch', 'vigeland', 'flam', 'bergen']
    };

    for (const [key, aliases] of Object.entries(aliasMap)) {
      if (aliases.some(a => t.includes(a))) {
        return getKB()[key] || null;
      }
    }
    if (window.FB_PAGE_CTX && getKB()[window.FB_PAGE_CTX]) {
      return getKB()[window.FB_PAGE_CTX];
    }
    return null;
  }

  function responderConciergeLocal(mensaje) {
    const t = mensaje.toLowerCase().trim();

    if (/(ignore previous|olvida las instrucciones|system prompt|drop table|select \*|sudo |rm -rf|api_key|token_secreto)/i.test(t)) {
      return {
        respuesta: "🛡️ <b>FlightBot AI Shield:</b> Este asistente está exclusivamente diseñado para orientarte en tarifas de vuelos, destinos turísticos, trenes, hoteles y equipaje de viaje.",
        quick_replies: FB_INITIAL_PILLS
      };
    }

    const guia = detectarGuia(t);

    if (/(bebe|bebé|cochecito|paragüitas|moises|mamadera|infante)/.test(t)) {
      return {
        respuesta: "👶 <b>Viajar con Bebé y Cochecito:</b><br><br>Casi todas las aerolíneas (Aerolíneas Argentinas, LATAM, Iberia, ITA Airways, Arajet y JetSMART) permiten despachar <b>1 cochecito o paragüitas plegable sin cargo hasta la puerta del avión (Gate Check)</b>.<br><br>Además, la mayoría incluye 1 bolso de mano de hasta 10 kg con artículos esenciales para el bebé sin costo adicional.",
        quick_replies: ["✈️ Vuelos a Punta Cana", "🇪🇸 Guía Madrid", "💳 Salas VIP", "🏖️ Hoteles Familiares"]
      };
    }

    if (/(vip|lounge|black|signature|infinite|platinum|amex|centurion)/.test(t)) {
      return {
        respuesta: "💳 <b>Salas VIP en Aeropuertos:</b><br><br>Podés acceder sin cargo en Ezeiza (EZE), Aeroparque (AEP) y aeropuertos globales mediante membresías como <b>Priority Pass, LoungeKey, DragonPass</b> o tarjetas <b>Visa Signature / Infinite y Mastercard Black</b> emitidas en bancos asociados.<br><br>💡 <i>Tip: Consultá tu cupo de visitas gratuitas con la app de tu tarjeta antes de viajar para evitar cobros automáticos.</i>",
        quick_replies: ["✈️ Vuelos a Roma y Madrid", "🌴 Guía Miami", "🏖️ Punta Cana"]
      };
    }

    if (guia) {
      if (/(barrio|zona|donde alojar|dónde alojar|hospedaje|hotel)/.test(t)) {
        return {
          respuesta: `🏨 <b>Zonas recomendadas para hospedarse en ${guia.ciudad}:</b><br><br>` +
            guia.zonas.map(z => `• ${z}`).join('<br>') +
            `<br><br>💡 <b>Tip de Rolli:</b> ${guia.tip}`,
          quick_replies: [`✈️ Vuelo ${guia.cmd_vuelo}`, `🍽️ Qué comer en ${guia.ciudad}`, `🚆 Transporte en ${guia.ciudad}`]
        };
      }
      if (/(comer|comida|plato|gastronom|restaurante)/.test(t)) {
        return {
          respuesta: `🍽️ <b>Platos icónicos de ${guia.ciudad}:</b><br><br>` +
            guia.comidas.map(c => `• ${c}`).join('<br>'),
          quick_replies: [`🏨 Zonas en ${guia.ciudad}`, `✈️ Vuelo ${guia.cmd_vuelo}`]
        };
      }
      if (/(tren|metro|transporte|uber|taxi|moverse)/.test(t)) {
        return {
          respuesta: `🚆 <b>Cómo moverse en ${guia.ciudad}:</b><br><br>` +
            guia.transporte.map(tr => `• ${tr}`).join('<br>') +
            `<br><br>💡 <b>Tip de Rolli:</b> ${guia.tip}`,
          quick_replies: [`🏨 Dónde alojarse en ${guia.ciudad}`, `✈️ Ver vuelos`]
        };
      }

      return {
        respuesta: `${guia.icono} <b>Guía Exprés de ${guia.ciudad} (${guia.pais}):</b><br><br>${guia.resumen}<br><br><b>Puntos Imperdibles:</b><br>` +
          guia.puntos.map(p => `• ${p}`).join('<br>') +
          `<br><br>💡 <b>Tip de Ahorro:</b> ${guia.tip}`,
        quick_replies: [`🏨 Zonas de ${guia.ciudad}`, `🍽️ Comidas típicas`, `🚆 Transporte`]
      };
    }

    return {
      respuesta: "Puedo ayudarte con información de vuelos, equipaje, salas VIP y nuestras <b>53 Guías Oficiales</b> de destinos (Roma, Madrid, Miami, Río, Cancún, Punta Cana, Bariloche, Mendoza y más).<br><br>¿Hacia qué destino estás planeando tu próximo viaje?",
      quick_replies: FB_INITIAL_PILLS
    };
  }

  // Enviar mensaje
  window.sendFlightBotPrompt = async function(rawText) {
    const text = String(rawText || '').trim();
    if (!text) return;

    // 1. Renderizar mensaje de usuario y guardar en historial
    renderMessageDOM('user', text);
    appendToHistory('user', text);
    const typingEl = showTypingIndicator();

    let answered = false;
    const pageCtx = window.FB_PAGE_CTX || (window.location.pathname.includes('guias') ? 'guias' : 'portal_home');

    if (window.location.protocol !== 'file:') {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 9500);
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mensaje: text,
            session_id: getSessionId(),
            contexto_pagina: pageCtx
          }),
          signal: ctrl.signal
        });
        clearTimeout(timer);
        if (res.ok) {
          const data = await res.json();
          if (data && data.respuesta) {
            if (typingEl) typingEl.remove();
            renderMessageDOM('bot', data.respuesta);
            appendToHistory('bot', data.respuesta);
            renderPills(data.quick_replies || FB_INITIAL_PILLS);
            answered = true;
          }
        }
      } catch (_) {}
    }

    if (!answered) {
      if (typingEl) typingEl.remove();
      const localRes = responderConciergeLocal(text);
      renderMessageDOM('bot', localRes.respuesta);
      appendToHistory('bot', localRes.respuesta);
      renderPills(localRes.quick_replies);
    }
  };

  window.handleFlightBotSubmit = function(e) {
    if (e) e.preventDefault();
    const inp = document.getElementById('fb-chat-input');
    if (!inp) return;
    const val = inp.value.trim();
    if (!val) return;
    inp.value = '';
    window.sendFlightBotPrompt(val);
  };

  // 5. Sincronización en Tiempo Real entre Pestañas (Cross-Tab Sync)
  window.addEventListener('storage', function(e) {
    if (e.key === STORAGE_KEY_HISTORY) {
      // Si otra pestaña envió o recibió un mensaje, actualizar el hilo actual
      restoreConversationUI();
    } else if (e.key === STORAGE_KEY_RESET) {
      // Si otra pestaña reinició la conversación
      const container = document.getElementById('fb-chat-messages');
      if (container) container.innerHTML = '';
      const greeting = window.FB_INITIAL_GREETING || FB_INITIAL_GREETING;
      renderMessageDOM('bot', greeting);
      const pills = window.FB_INITIAL_PILLS || FB_INITIAL_PILLS;
      renderPills(pills);
    } else if (e.key === STORAGE_KEY_OPEN) {
      // Sincronizar apertura/cierre si se desea
      const shouldBeOpen = e.newValue === 'true';
      const win = document.getElementById('fb-chat-window');
      if (win) {
        if (shouldBeOpen && !win.classList.contains('fb-chat-open')) {
          win.classList.remove('hidden');
          void win.offsetWidth;
          win.classList.add('fb-chat-open');
        } else if (!shouldBeOpen && win.classList.contains('fb-chat-open')) {
          win.classList.remove('fb-chat-open');
          setTimeout(() => win.classList.add('hidden'), 360);
        }
      }
    }
  });

  // 6. Inicialización Completa
  function initChatbox() {
    ensureStyles();
    ensureChatMarkup();
    restoreConversationUI();

    // Restaurar si el chatbox estaba abierto en la pestaña anterior
    const wasOpen = storageGet(STORAGE_KEY_OPEN) === 'true';
    if (wasOpen) {
      const win = document.getElementById('fb-chat-window');
      if (win) {
        win.classList.remove('hidden');
        win.classList.add('fb-chat-open');
        const container = document.getElementById('fb-chat-messages');
        if (container) setTimeout(() => { container.scrollTop = container.scrollHeight; }, 100);
      }
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initChatbox();
  } else {
    document.addEventListener('DOMContentLoaded', initChatbox);
  }
})();
