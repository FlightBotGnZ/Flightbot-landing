/**
 * FlightBot - Módulo Frontend de Autenticación con Google y Billetera de Tokens
 *
 * Características:
 * - Integración con Google Identity Services (GIS / One Tap).
 * - Control de estado de sesión persistente con Cookies HttpOnly y /api/auth/me.
 * - Widget dinámico en Navbar con Avatar, Nombre y Badge de Tokens (🎟️).
 * - Modal de Billetera con botón de sincronización a Telegram (+1 token de regalo).
 * - Despacho de eventos personalizados 'flightbot:auth-changed' para otros módulos.
 */

(function () {
  'use strict';

  // Configuración de Google OAuth Client ID (se puede inyectar por variable global o fallback de desarrollo)
  const GOOGLE_CLIENT_ID = window.FB_GOOGLE_CLIENT_ID || '1047123984567-dummy-client-id.apps.googleusercontent.com';

  // Estado reactivo del usuario
  window.FB_AUTH = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  };

  /**
   * Inicializa la autenticación al cargar el DOM
   */
  async function initAuth() {
    renderAuthSkeleton();
    await verificarSesionActual();
    cargarScriptGoogle();
  }

  /**
   * Carga dinámica y asíncrona del script de Google Identity Services
   */
  function cargarScriptGoogle() {
    if (document.getElementById('google-gsi-script')) return;
    const script = document.createElement('script');
    script.id = 'google-gsi-script';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      configurarGoogleOneTap();
    };
    document.head.appendChild(script);
  }

  /**
   * Verifica si existe una cookie de sesión activa consultando al endpoint /api/auth/me
   */
  async function verificarSesionActual() {
    try {
      const res = await fetch('/api/auth/me', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated && data.user) {
          window.FB_AUTH.user = data.user;
          window.FB_AUTH.isAuthenticated = true;
        } else {
          window.FB_AUTH.user = null;
          window.FB_AUTH.isAuthenticated = false;
        }
      }
    } catch (err) {
      console.warn('[Auth] No se pudo verificar la sesión previa:', err);
      window.FB_AUTH.isAuthenticated = false;
    } finally {
      window.FB_AUTH.isLoading = false;
      actualizarInterfazAuth();
      dispararEventoAuth();
    }
  }

  /**
   * Configura Google One Tap y el cliente de identidad
   */
  function configurarGoogleOneTap() {
    if (!window.google || !window.google.accounts || !window.google.accounts.id) return;

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: manejarRespuestaGoogle,
      auto_select: false,
      cancel_on_tap_outside: true,
    });

    // Si el usuario no está autenticado, ofrecer One Tap de forma no intrusiva
    if (!window.FB_AUTH.isAuthenticated) {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          // One tap omitido o no compatible, se mantiene el botón visible en el header
        }
      });
    }
  }

  /**
   * Maneja el credential JWT devuelto por Google y lo valida con nuestro backend
   */
  async function manejarRespuestaGoogle(response) {
    if (!response || !response.credential) return;

    mostrarNotificacion('Iniciando sesión...', 'info');

    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        window.FB_AUTH.user = data.user;
        window.FB_AUTH.isAuthenticated = true;
        actualizarInterfazAuth();
        dispararEventoAuth();
        mostrarNotificacion(`¡Bienvenido, ${data.user.name}! Tenés ${data.user.tokens_available} tokens 🎟️`, 'success');
      } else {
        mostrarNotificacion(data.error || 'No se pudo iniciar sesión con Google.', 'error');
      }
    } catch (err) {
      console.error('[Auth] Error enviando credencial:', err);
      mostrarNotificacion('Error de conexión al autenticar con Google.', 'error');
    }
  }

  /**
   * Cierra la sesión activa
   */
  async function cerrarSesion() {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
    } catch (_e) {}

    window.FB_AUTH.user = null;
    window.FB_AUTH.isAuthenticated = false;
    actualizarInterfazAuth();
    dispararEventoAuth();
    cerrarModalUsuario();
    mostrarNotificacion('Sesión cerrada correctamente.', 'info');
  }

  /**
   * Inicia el flujo de sincronización con Telegram para ganar +1 token
   */
  async function sincronizarConTelegram() {
    try {
      const res = await fetch('/api/auth/telegram-sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok && data.deepLink) {
        // Abrir Telegram en nueva pestaña o aplicación nativa
        window.open(data.deepLink, '_blank', 'noopener,noreferrer');
        mostrarNotificacion('¡Abriendo Telegram! Pulsa "INICIAR" para activar tu +1 token de regalo 🎁', 'success');
      } else if (data.already_linked) {
        mostrarNotificacion('Tu cuenta ya está vinculada con Telegram.', 'info');
      } else {
        mostrarNotificacion(data.error || 'Error al conectar con Telegram.', 'error');
      }
    } catch (err) {
      mostrarNotificacion('Error de red al solicitar vinculación.', 'error');
    }
  }

  /**
   * Notifica a otros componentes de la aplicación sobre cambios de sesión
   */
  function dispararEventoAuth() {
    window.dispatchEvent(
      new CustomEvent('flightbot:auth-changed', {
        detail: {
          isAuthenticated: window.FB_AUTH.isAuthenticated,
          user: window.FB_AUTH.user,
        },
      })
    );
  }

  /**
   * Renderiza un contenedor temporal en el header mientras se resuelve la sesión
   */
  function renderAuthSkeleton() {
    const container = document.getElementById('auth-nav-container');
    if (!container) return;
    container.innerHTML = `
      <div class="h-8 w-24 rounded-full bg-slate-200/60 dark:bg-slate-800/60 animate-pulse"></div>
    `;
  }

  /**
   * Actualiza el widget de autenticación en la barra de navegación
   */
  function actualizarInterfazAuth() {
    const container = document.getElementById('auth-nav-container');
    if (!container) return;

    if (window.FB_AUTH.isAuthenticated && window.FB_AUTH.user) {
      const u = window.FB_AUTH.user;
      const avatarHtml = u.picture
        ? `<img src="${u.picture}" alt="${u.name}" class="w-6 h-6 rounded-full object-cover border border-white/20">`
        : `<div class="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold">${u.name.charAt(0).toUpperCase()}</div>`;

      container.innerHTML = `
        <button id="btn-user-profile" onclick="window.FB_AUTH_UI.toggleModal()"
                class="flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full dark:bg-slate-900/90 bg-slate-100 border dark:border-slate-800 border-slate-200 shadow-sm hover:border-rose-500/40 transition-all text-xs font-medium cursor-pointer">
          ${avatarHtml}
          <span class="max-w-[70px] truncate hidden md:inline text-slate-800 dark:text-slate-200">${u.name.split(' ')[0]}</span>
          <span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20">
            🎟️ ${u.tokens_available}
          </span>
        </button>
      `;
    } else {
      container.innerHTML = `
        <button onclick="window.FB_AUTH_UI.iniciarLoginGoogle()" 
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 dark:bg-slate-900/90 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 border dark:border-slate-800 border-slate-200 transition-all shadow-xs cursor-pointer">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          <span>Acceder</span>
        </button>
      `;
    }
  }

  /**
   * Modal interactivo de usuario y gestión de tokens
   */
  function renderModalUsuario() {
    let modal = document.getElementById('fb-user-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'fb-user-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm hidden';
      modal.onclick = (e) => {
        if (e.target === modal) cerrarModalUsuario();
      };
      document.body.appendChild(modal);
    }

    const u = window.FB_AUTH.user;
    if (!u) {
      modal.classList.add('hidden');
      return;
    }

    const tgStatusHtml = u.telegram_linked
      ? `<div class="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
           <span>✅</span>
           <span>Vinculado con Telegram</span>
         </div>`
      : `<div class="p-3 rounded-xl bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-rose-500/10 border border-rose-500/20 text-left">
           <div class="flex items-center justify-between mb-1.5">
             <span class="text-xs font-bold text-slate-800 dark:text-slate-100">🎁 Bono de Bienvenida</span>
             <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500">+1 Token Gratis</span>
           </div>
           <p class="text-[11px] text-slate-600 dark:text-slate-400 mb-2.5">
             Sincronizá con nuestro bot en Telegram para recibir alertas en vivo y sumar 1 token adicional a tu cuenta.
           </p>
           <button onclick="window.FB_AUTH_UI.sincronizarTelegram()" 
                   class="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-all shadow-sm">
             <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .36z"/>
             </svg>
             <span>Conectar con Telegram</span>
           </button>
         </div>`;

    modal.innerHTML = `
      <div class="relative w-full max-w-sm rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl p-5 text-center">
        <!-- Botón Cerrar -->
        <button onclick="window.FB_AUTH_UI.toggleModal()" class="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg">&times;</button>
        
        <!-- Perfil -->
        <div class="flex flex-col items-center mb-4">
          ${u.picture ? `<img src="${u.picture}" class="w-14 h-14 rounded-full border-2 border-rose-500 shadow-md mb-2">` : ''}
          <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">${u.name}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">${u.email}</p>
        </div>

        <!-- Billetera de Tokens -->
        <div class="p-3.5 rounded-xl dark:bg-slate-800/60 bg-slate-100 border dark:border-slate-700/60 border-slate-200/80 mb-3.5 text-left">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">Búsquedas en Vivo</span>
            <span class="text-xs font-bold text-amber-500">🎟️ ${u.tokens_available} de ${u.max_tokens}</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mb-2">
            <div class="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" style="width: ${(u.tokens_available / u.max_tokens) * 100}%"></div>
          </div>
          <p class="text-[10px] text-slate-500 dark:text-slate-400">
            💡 Las consultas al radar y tarifas cacheadas son gratis ($0). Las búsquedas con fechas exactas descuentan 1 token. Se recargan los lunes (máx 6 con rollover).
          </p>
        </div>

        <!-- Sección Telegram -->
        <div class="mb-4">
          ${tgStatusHtml}
        </div>

        <!-- Botón Salir -->
        <button onclick="window.FB_AUTH_UI.cerrarSesion()" class="w-full py-2 rounded-xl text-xs font-semibold text-rose-500 hover:bg-rose-500/10 border border-rose-500/20 transition-all">
          Cerrar Sesión
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  function cerrarModalUsuario() {
    const modal = document.getElementById('fb-user-modal');
    if (modal) modal.classList.add('hidden');
  }

  /**
   * Muestra notificaciones estilo Toast
   */
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

  // Interfaz pública para el UI
  window.FB_AUTH_UI = {
    toggleModal: () => {
      const modal = document.getElementById('fb-user-modal');
      if (modal && !modal.classList.contains('hidden')) {
        cerrarModalUsuario();
      } else {
        renderModalUsuario();
      }
    },
    iniciarLoginGoogle: () => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        window.google.accounts.id.prompt();
      } else {
        mostrarNotificacion('Cargando servicios de Google... Intentá en un instante.', 'info');
      }
    },
    cerrarSesion: cerrarSesion,
    sincronizarTelegram: sincronizarConTelegram,
  };

  // Iniciar al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
  } else {
    initAuth();
  }
})();
