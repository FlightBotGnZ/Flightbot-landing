/**
 * FlightBot - Internationalization (i18n) Engine (ES / EN)
 * Rolli Brand Standard: Aurora Mint Language Switcher & Zero-XSS DOM Translator
 */

(function () {
  'use strict';

  const LANG_STORAGE_KEY = 'fb_lang';
  const SUPPORTED_LANGS = ['es', 'en'];
  const TRANSLATABLE_ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  const IGNORED_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'CODE', 'PRE', 'SVG']);

  let currentLang = detectInitialLang();
  let isApplying = false;
  let observer = null;
  let pendingRoots = new Set();
  let rafScheduled = false;

  // Mapa de meses cortos y largos español -> inglés para fechas dinámicas
  const MONTH_MAP = {
    Ene: 'Jan', Feb: 'Feb', Mar: 'Mar', Abr: 'Apr', May: 'May', Jun: 'Jun',
    Jul: 'Jul', Ago: 'Aug', Sep: 'Sep', Oct: 'Oct', Nov: 'Nov', Dic: 'Dec',
    Enero: 'January', Febrero: 'February', Marzo: 'March', Abril: 'April',
    Mayo: 'May', Junio: 'June', Julio: 'July', Agosto: 'August',
    Septiembre: 'September', Octubre: 'October', Noviembre: 'November', Diciembre: 'December',
    enero: 'January', febrero: 'February', marzo: 'March', abril: 'April',
    mayo: 'May', junio: 'June', julio: 'July', agosto: 'August',
    septiembre: 'September', octubre: 'October', noviembre: 'November', diciembre: 'December'
  };

  // Reglas de patrones dinámicos (orden de prioridad: específico -> general)
  const PATTERN_RULES = [
    // Fechas tipo "08 Abr - 12 Abr 2027" o "27 Feb - 04 Mar 2027"
    {
      test: /\b(Ene|Feb|Mar|Abr|May|Jun|Jul|Ago|Sep|Oct|Nov|Dic)\b/g,
      replace: function (str) {
        return str.replace(/\b(Ene|Feb|Mar|Abr|May|Jun|Jul|Ago|Sep|Oct|Nov|Dic)\b/g, function (m) {
          return MONTH_MAP[m] || m;
        });
      }
    },
    // Escalas de vuelos en radar / buscador
    {
      test: /^Directo\s*\(([^)]+)\)$/i,
      replace: function (str) {
        return str.replace(/^Directo\s*\(([^)]+)\)$/i, 'Nonstop ($1)');
      }
    },
    {
      test: /^Directo$/i,
      replace: function () { return 'Nonstop'; }
    },
    {
      test: /^(\d+)\s+escala(s)?(\s*\([^)]+\))?$/i,
      replace: function (str) {
        return str.replace(/^(\d+)\s+escala(s)?(\s*\([^)]+\))?$/i, function (_, n, _p, paren) {
          const unit = Number(n) === 1 ? 'stop' : 'stops';
          return n + ' ' + unit + (paren || '');
        });
      }
    },
    // Noches / días / horas / minutos
    {
      test: /^(\d+)\s+noches$/i,
      replace: function (str) {
        return str.replace(/^(\d+)\s+noches$/i, function (_, n) {
          return n + (Number(n) === 1 ? ' night' : ' nights');
        });
      }
    },
    {
      test: /^(\d+)\s+días$/i,
      replace: function (str) {
        return str.replace(/^(\d+)\s+días$/i, function (_, n) {
          return n + (Number(n) === 1 ? ' day' : ' days');
        });
      }
    },
    {
      test: /^Hace\s+(\d+)\s+(min|minuto|minutos|hora|horas|día|días)$/i,
      replace: function (str) {
        return str.replace(/^Hace\s+(\d+)\s+(min|minuto|minutos|hora|horas|día|días)$/i, function (_, n, u) {
          const low = u.toLowerCase();
          if (low.startsWith('min')) return n + 'm ago';
          if (low.startsWith('hora')) return n + (Number(n) === 1 ? ' hour ago' : ' hours ago');
          return n + (Number(n) === 1 ? ' day ago' : ' days ago');
        });
      }
    },
    // Sufijos de precios y aproximaciones
    {
      test: /\baprox\b/i,
      replace: function (str) {
        return str.replace(/\baprox\.?\b/gi, 'approx.');
      }
    },
    // Frecuencias diarias
    {
      test: /^(\d+)\s+frecuencias?\s+diarias?\s+en\s+verano$/i,
      replace: function (str) {
        return str.replace(/^(\d+)\s+frecuencias?\s+diarias?\s+en\s+verano$/i, '$1 daily flights in summer');
      }
    },
    // "Actualizado: ..." / "Última actualización: ..."
    {
      test: /^Última actualización:\s*(.+)$/i,
      replace: function (str) {
        return str.replace(/^Última actualización:\s*(.+)$/i, 'Last updated: $1');
      }
    },
    // "Ver guía de ..."
    {
      test: /^Ver guía de\s+(.+)$/i,
      replace: function (str) {
        return str.replace(/^Ver guía de\s+(.+)$/i, 'View $1 guide');
      }
    },
    // "Buscar vuelos a ..."
    {
      test: /^Buscar vuelos a\s+(.+)$/i,
      replace: function (str) {
        return str.replace(/^Buscar vuelos a\s+(.+)$/i, 'Search flights to $1');
      }
    }
  ];

  // Detecta el idioma inicial: ?lang= > localStorage > 'es' por defecto
  function detectInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const qLang = (params.get('lang') || '').trim().toLowerCase();
      if (SUPPORTED_LANGS.includes(qLang)) {
        localStorage.setItem(LANG_STORAGE_KEY, qLang);
        return qLang;
      }
    } catch (_) {}

    try {
      const saved = (localStorage.getItem(LANG_STORAGE_KEY) || '').trim().toLowerCase();
      if (SUPPORTED_LANGS.includes(saved)) {
        return saved;
      }
    } catch (_) {}

    return 'es';
  }

  // Normaliza espacios internos para buscar en el diccionario
  function normalizeKey(str) {
    return String(str).replace(/\s+/g, ' ').trim();
  }

  // Traduce una cadena de español a inglés usando diccionario exacto y patrones
  function translateStringToEn(rawStr) {
    if (!rawStr || typeof rawStr !== 'string') return rawStr;
    const dict = window.FB_I18N_DICT || {};
    const norm = normalizeKey(rawStr);
    if (!norm) return rawStr;

    // 1. Coincidencia exacta en diccionario
    if (Object.prototype.hasOwnProperty.call(dict, norm)) {
      return dict[norm];
    }

    // 2. Coincidencia sin signo de puntuación final o con dos puntos
    if (norm.endsWith(':') && Object.prototype.hasOwnProperty.call(dict, norm.slice(0, -1))) {
      return dict[norm.slice(0, -1)] + ':';
    }

    // 3. Reglas de patrones dinámicos
    let out = norm;
    let changed = false;
    for (let i = 0; i < PATTERN_RULES.length; i++) {
      const rule = PATTERN_RULES[i];
      if (rule.test.test(out)) {
        const next = rule.replace(out);
        if (next !== out) {
          out = next;
          changed = true;
        }
      }
    }
    if (changed) return out;

    return rawStr;
  }

  // Traduce según idioma activo
  function translateText(esText, enOverride) {
    if (currentLang !== 'en') return esText;
    if (enOverride !== undefined && enOverride !== null) return enOverride;
    return translateStringToEn(esText);
  }

  // Traduce por clave de diccionario FB_I18N_KEYS con interpolación segura {var}
  function t(key, vars, fallbackEs) {
    const keys = window.FB_I18N_KEYS || {};
    const entry = keys[key];
    let template = '';
    if (entry && typeof entry === 'object') {
      template = (currentLang === 'en' ? entry.en : entry.es) || entry.es || '';
    } else if (typeof entry === 'string') {
      template = currentLang === 'en' ? entry : (fallbackEs || entry);
    } else {
      template = currentLang === 'en' ? translateStringToEn(fallbackEs || key) : (fallbackEs || key);
    }

    if (vars && typeof vars === 'object') {
      Object.keys(vars).forEach(function (k) {
        const val = vars[k] === undefined || vars[k] === null ? '' : String(vars[k]);
        template = template.split('{' + k + '}').join(val);
      });
    }
    return template;
  }

  // Verifica si un elemento debe ignorarse en la traducción automática
  function shouldIgnoreElement(el) {
    if (!el || el.nodeType !== 1) return false;
    if (IGNORED_TAGS.has(el.tagName)) return true;
    if (el.hasAttribute('data-no-i18n')) return true;
    if (el.closest && el.closest('[data-no-i18n]')) return true;
    return false;
  }

  // Aplica traducción a un atributo específico preservando el original en español
  function applyAttrTranslation(el, attr) {
    if (!el.hasAttribute(attr)) return;
    if (!el._fbOrigAttrs) el._fbOrigAttrs = {};
    if (!Object.prototype.hasOwnProperty.call(el._fbOrigAttrs, attr)) {
      el._fbOrigAttrs[attr] = el.getAttribute(attr);
    }
    const orig = el._fbOrigAttrs[attr];
    if (!orig) return;

    if (currentLang === 'es') {
      if (el.getAttribute(attr) !== orig) el.setAttribute(attr, orig);
      return;
    }

    const translated = translateStringToEn(orig);
    if (translated && el.getAttribute(attr) !== translated) {
      el.setAttribute(attr, translated);
    }
  }

  // Aplica traducción a un nodo de texto preservando espacios iniciales/finales
  function applyTextNodeTranslation(node) {
    if (!node || node.nodeType !== 3) return;
    const parent = node.parentElement;
    if (!parent || shouldIgnoreElement(parent)) return;

    const currentVal = node.nodeValue || '';
    if (!currentVal.trim()) return;

    if (node._fbOrigText === undefined) {
      node._fbOrigText = currentVal;
    } else if (currentLang === 'en' && node._fbLastTranslated !== currentVal) {
      // Si otro script actualizó el nodo dinámicamente en español, refrescamos el original
      if (!Object.values(window.FB_I18N_DICT || {}).includes(normalizeKey(currentVal))) {
        node._fbOrigText = currentVal;
      }
    }

    const orig = node._fbOrigText;
    if (currentLang === 'es') {
      if (node.nodeValue !== orig) {
        node.nodeValue = orig;
      }
      node._fbLastTranslated = orig;
      return;
    }

    const leadMatch = orig.match(/^\s*/);
    const trailMatch = orig.match(/\s*$/);
    const lead = leadMatch ? leadMatch[0] : '';
    const trail = trailMatch ? trailMatch[0] : '';
    const core = orig.slice(lead.length, orig.length - trail.length);
    if (!core) return;

    const translated = translateStringToEn(core);
    if (translated && translated !== core) {
      const nextVal = lead + translated + trail;
      if (node.nodeValue !== nextVal) {
        node.nodeValue = nextVal;
      }
      node._fbLastTranslated = nextVal;
    }
  }

  // Aplica traducciones explícitas por data-i18n y recorrido TreeWalker sobre un subárbol
  function applyTranslations(root) {
    const targetRoot = root || document.body;
    if (!targetRoot) return;

    isApplying = true;
    try {
      // 1. Atributos explícitos data-i18n
      if (targetRoot.querySelectorAll) {
        targetRoot.querySelectorAll('[data-i18n]').forEach(function (el) {
          const key = el.getAttribute('data-i18n');
          if (!el._fbOrigTextContent) el._fbOrigTextContent = el.textContent;
          const next = currentLang === 'es' ? el._fbOrigTextContent : t(key, null, el._fbOrigTextContent);
          if (next && el.textContent !== next) el.textContent = next;
        });

        targetRoot.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
          const key = el.getAttribute('data-i18n-placeholder');
          if (!el._fbOrigPh) el._fbOrigPh = el.getAttribute('placeholder') || '';
          const next = currentLang === 'es' ? el._fbOrigPh : t(key, null, el._fbOrigPh);
          if (next && el.getAttribute('placeholder') !== next) el.setAttribute('placeholder', next);
        });

        targetRoot.querySelectorAll('[data-i18n-title]').forEach(function (el) {
          const key = el.getAttribute('data-i18n-title');
          if (!el._fbOrigTitle) el._fbOrigTitle = el.getAttribute('title') || '';
          const next = currentLang === 'es' ? el._fbOrigTitle : t(key, null, el._fbOrigTitle);
          if (next && el.getAttribute('title') !== next) el.setAttribute('title', next);
        });
      }

      // 2. Atributos traducibles estándar en todo el subárbol
      if (targetRoot.nodeType === 1 && !shouldIgnoreElement(targetRoot)) {
        TRANSLATABLE_ATTRS.forEach(function (attr) { applyAttrTranslation(targetRoot, attr); });
      }
      if (targetRoot.querySelectorAll) {
        const selector = TRANSLATABLE_ATTRS.map(function (a) { return '[' + a + ']'; }).join(',');
        targetRoot.querySelectorAll(selector).forEach(function (el) {
          if (shouldIgnoreElement(el)) return;
          TRANSLATABLE_ATTRS.forEach(function (attr) { applyAttrTranslation(el, attr); });
        });
      }

      // 3. Nodos de texto via TreeWalker
      const walker = document.createTreeWalker(targetRoot, NodeFilter.SHOW_TEXT, null);
      let textNode;
      while ((textNode = walker.nextNode())) {
        applyTextNodeTranslation(textNode);
      }
    } finally {
      isApplying = false;
    }
  }

  // Actualiza metadatos <head> (<html lang>, <title>, meta description / og / twitter)
  function updateDocumentMetadata() {
    document.documentElement.setAttribute('lang', currentLang);

    if (document._fbOrigTitle === undefined) {
      document._fbOrigTitle = document.title;
    }
    document.title = currentLang === 'es'
      ? document._fbOrigTitle
      : translateStringToEn(document._fbOrigTitle);

    const metaSelectors = [
      'meta[name="description"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]'
    ];
    metaSelectors.forEach(function (sel) {
      const el = document.querySelector(sel);
      if (!el) return;
      if (el._fbOrigContent === undefined) {
        el._fbOrigContent = el.getAttribute('content') || '';
      }
      const next = currentLang === 'es'
        ? el._fbOrigContent
        : translateStringToEn(el._fbOrigContent);
      if (next) el.setAttribute('content', next);
    });
  }

  // Crea e inyecta el selector ES | EN en el header, drawer móvil y footer si no existen
  function ensureLanguageSwitchers() {
    // 1. Selector en Desktop & Mobile Header (antes de #theme-mode-btn o al final del header)
    if (!document.getElementById('lang-switcher-header')) {
      const themeBtn = document.getElementById('theme-mode-btn');
      const headerRight = themeBtn
        ? themeBtn.parentElement
        : (document.querySelector('header .flex.items-center.gap-2') || document.querySelector('header'));
      if (headerRight) {
        const wrapper = document.createElement('div');
        wrapper.id = 'lang-switcher-header';
        wrapper.setAttribute('data-no-i18n', '1');
        wrapper.className = 'inline-flex items-center gap-0.5 p-0.5 rounded-lg border border-slate-200 dark:border-indigo-950/40 bg-slate-100/90 dark:bg-[#111324] shrink-0 shadow-xs';
        wrapper.setAttribute('role', 'group');
        wrapper.setAttribute('aria-label', 'Language / Idioma');
        wrapper.setAttribute('title', 'Idioma / Language (ES | EN)');

        const globe = document.createElement('span');
        globe.className = 'pl-1.5 pr-0.5 text-[11px] select-none opacity-80 hidden sm:inline';
        globe.setAttribute('aria-hidden', 'true');
        globe.textContent = '🌐';
        wrapper.appendChild(globe);

        wrapper.appendChild(createLangButton('es', 'ES', 'lang-btn-es'));
        wrapper.appendChild(createLangButton('en', 'EN', 'lang-btn-en'));

        if (themeBtn) {
          headerRight.insertBefore(wrapper, themeBtn);
        } else {
          headerRight.appendChild(wrapper);
        }
      }
    }

    // 2. Selector en Mobile Drawer (#mobile-nav-drawer)
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileDrawer && !document.getElementById('lang-switcher-mobile')) {
      const mWrap = document.createElement('div');
      mWrap.id = 'lang-switcher-mobile';
      mWrap.setAttribute('data-no-i18n', '1');
      mWrap.className = 'pt-2 border-t border-slate-200 dark:border-indigo-950/40 flex items-center justify-between gap-2';

      const label = document.createElement('span');
      label.id = 'lang-switcher-mobile-label';
      label.className = 'text-xs font-semibold text-slate-500 dark:text-slate-400';
      label.textContent = currentLang === 'en' ? '🌐 Language' : '🌐 Idioma';

      const pill = document.createElement('div');
      pill.className = 'inline-flex items-center p-0.5 rounded-lg border border-slate-200 dark:border-indigo-950/40 bg-slate-100/80 dark:bg-[#111324]';
      pill.appendChild(createLangButton('es', 'ES', 'm-lang-btn-es'));
      pill.appendChild(createLangButton('en', 'EN', 'm-lang-btn-en'));

      mWrap.appendChild(label);
      mWrap.appendChild(pill);
      mobileDrawer.appendChild(mWrap);
    }

    // 3. Selector en Footer (junto a los controles de moneda si existen, o al pie)
    const footerCurrBtn = document.getElementById('footer-btn-curr-nativo');
    const footerTarget = footerCurrBtn ? footerCurrBtn.parentElement && footerCurrBtn.parentElement.parentElement : null;
    if (footerTarget && !document.getElementById('lang-switcher-footer')) {
      const fWrap = document.createElement('div');
      fWrap.id = 'lang-switcher-footer';
      fWrap.setAttribute('data-no-i18n', '1');
      fWrap.className = 'mt-2 flex items-center gap-2';

      const fLabel = document.createElement('span');
      fLabel.id = 'lang-switcher-footer-label';
      fLabel.className = 'text-[11px] font-medium text-slate-500 dark:text-slate-400';
      fLabel.textContent = currentLang === 'en' ? 'Language:' : 'Idioma:';

      const fPill = document.createElement('div');
      fPill.className = 'inline-flex items-center p-0.5 rounded-lg border border-slate-200 dark:border-indigo-950/40 bg-slate-100/80 dark:bg-[#111324]';
      fPill.appendChild(createLangButton('es', 'ES', 'f-lang-btn-es'));
      fPill.appendChild(createLangButton('en', 'EN', 'f-lang-btn-en'));

      fWrap.appendChild(fLabel);
      fWrap.appendChild(fPill);
      footerTarget.appendChild(fWrap);
    }

    updateLanguageButtons();
  }

  function createLangButton(langCode, label, id) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = id;
    btn.textContent = label;
    btn.title = langCode === 'en' ? 'Switch to English' : 'Cambiar a Español';
    btn.addEventListener('click', function () {
      setLang(langCode);
    });
    return btn;
  }

  function updateLanguageButtons() {
    const activeCls = 'px-2 py-1 rounded-md aurora-cta-btn text-white shadow-sm font-bold transition-all text-[11px] leading-none cursor-pointer';
    const inactiveCls = 'px-2 py-1 rounded-md text-slate-600 dark:text-slate-400 hover-cyan-aurora font-semibold transition-colors text-[11px] leading-none cursor-pointer';

    const pairs = [
      ['lang-btn-es', 'lang-btn-en'],
      ['m-lang-btn-es', 'm-lang-btn-en'],
      ['f-lang-btn-es', 'f-lang-btn-en']
    ];
    pairs.forEach(function (pair) {
      const bEs = document.getElementById(pair[0]);
      const bEn = document.getElementById(pair[1]);
      if (bEs) bEs.className = currentLang === 'es' ? activeCls : inactiveCls;
      if (bEn) bEn.className = currentLang === 'en' ? activeCls : inactiveCls;
    });

    const mLabel = document.getElementById('lang-switcher-mobile-label');
    if (mLabel) mLabel.textContent = currentLang === 'en' ? '🌐 Language' : '🌐 Idioma';

    const fLabel = document.getElementById('lang-switcher-footer-label');
    if (fLabel) fLabel.textContent = currentLang === 'en' ? 'Language:' : 'Idioma:';
  }

  // Observador de mutaciones para traducir contenido dinámico insertado después de la carga
  function startObserver() {
    if (observer || !document.body || typeof MutationObserver !== 'function') return;
    observer = new MutationObserver(function (mutations) {
      if (isApplying || currentLang !== 'en') return;
      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type === 'childList') {
          m.addedNodes.forEach(function (n) {
            if (n.nodeType === 1 && !shouldIgnoreElement(n)) {
              pendingRoots.add(n);
            } else if (n.nodeType === 3 && n.parentElement && !shouldIgnoreElement(n.parentElement)) {
              pendingRoots.add(n.parentElement);
            }
          });
        } else if (m.type === 'characterData' && m.target && m.target.parentElement && !shouldIgnoreElement(m.target.parentElement)) {
          pendingRoots.add(m.target.parentElement);
        }
      }
      if (pendingRoots.size > 0 && !rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(function () {
          rafScheduled = false;
          const roots = Array.from(pendingRoots);
          pendingRoots.clear();
          roots.forEach(function (r) {
            if (document.body.contains(r)) applyTranslations(r);
          });
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  // Cambia el idioma activo, persiste y notifica a todos los módulos
  function setLang(lang) {
    const normalized = String(lang || '').trim().toLowerCase();
    if (!SUPPORTED_LANGS.includes(normalized) || normalized === currentLang) return;
    currentLang = normalized;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, currentLang);
    } catch (_) {}

    updateDocumentMetadata();
    updateLanguageButtons();
    applyTranslations(document.body);

    window.dispatchEvent(new CustomEvent('flightbot:langChange', {
      detail: { lang: currentLang }
    }));

    // Re-disparar renders dinámicos conocidos si existen en la página
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

  // API Pública
  window.FB_I18N = {
    getLang: function () { return currentLang; },
    isEn: function () { return currentLang === 'en'; },
    setLang: setLang,
    t: t,
    translateText: translateText,
    translateStringToEn: translateStringToEn,
    applyTranslations: applyTranslations,
    onLangChange: function (cb) {
      if (typeof cb === 'function') {
        window.addEventListener('flightbot:langChange', function (e) {
          cb(e.detail && e.detail.lang ? e.detail.lang : currentLang);
        });
      }
    }
  };

  function init() {
    ensureLanguageSwitchers();
    updateDocumentMetadata();
    if (currentLang === 'en') {
      applyTranslations(document.body);
    }
    startObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
