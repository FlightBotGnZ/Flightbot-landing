"""Script generador de páginas HTML de Guías Turísticas para FlightBot.

Crea las 10 guías detalladas en 'landing/guias/' y la página índice 'landing/guias/index.html'
con diseño responsivo en Tailwind CSS, imágenes de Unsplash, comparativas de transporte,
escapadas regionales y descargo de afiliación para Travelpayouts y Booking.com.
Soporta el Motor de Temas Dual (Rojo Rubí / Azul Océano) y Modo Claro / Oscuro con persistencia en localStorage.
"""

from __future__ import annotations

import json
import os
import re
import sys

# Asegurar importación de módulos de FlightBot
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "FlightBot")))
from dataclasses import asdict
from guias_turisticas import obtener_todas_las_guias, GUIAS_DESTINOS
from rutas_viaje import (
    obtener_datos_ruta,
    TARIFAS_COMBUSTIBLE,
    PERFILES_VEHICULO,
    NODOS_VIALES_ARGENTINA,
    CORREDORES,
    parsear_consulta_ruta,
    generar_reporte_hitos_ypf_html,
)
from promociones_combustible import PROMOCIONES_COMBUSTIBLE_Y_TIENDAS

LANDING_DIR = os.path.abspath(os.path.dirname(__file__))
OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "guias"))
os.makedirs(OUTPUT_DIR, exist_ok=True)

SHARED_THEME_HEAD = """
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
        }
      }
    };

    // Inicialización inmediata antes del renderizado para evitar FOUC
    (function() {
      const savedColor = localStorage.getItem('fb_theme_color') || 'ruby';
      const savedMode = localStorage.getItem('fb_theme_mode') || 'dark';
      document.documentElement.setAttribute('data-color', savedColor);
      if (savedMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  </script>
  <style>
    /* Variables de Acento Cromático Dinámicas (Rojo Rubí por defecto absoluto) */
    :root, html, html[data-color="ruby"] {
      --brand-primary: #e11d48; /* rose-600 */
      --brand-hover: #be123c;   /* rose-700 */
      --brand-text: #fb7185;    /* rose-400 */
      --brand-text-light: #e11d48;
      --brand-subtle: rgba(225, 29, 72, 0.12);
      --brand-border: rgba(225, 29, 72, 0.25);
      --brand-glow: rgba(225, 29, 72, 0.35);
      --brand-gradient: linear-gradient(135deg, #e11d48 0%, #ef4444 100%);
    }
    html[data-color="blue"] {
      --brand-primary: #2563eb; /* blue-600 */
      --brand-hover: #1d4ed8;   /* blue-700 */
      --brand-text: #60a5fa;    /* blue-400 */
      --brand-text-light: #2563eb;
      --brand-subtle: rgba(37, 99, 235, 0.12);
      --brand-border: rgba(37, 99, 235, 0.25);
      --brand-glow: rgba(37, 99, 235, 0.35);
      --brand-gradient: linear-gradient(135deg, #2563eb 0%, #6366f1 100%);
    }

    .theme-transition {
      transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
    }
    .brand-gradient-text {
      background: var(--brand-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Transición Fluida para la Ventana del Chatbox IA y Soporte de Expansión/Maximizado */
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

  </style>
"""

SHARED_HEADER_SWITCHER = """
        <!-- Control Dual de Personalización (Color + Modo Claro/Oscuro) - Centrado Óptico y Milimétrico Absoluto -->
        <div class="flex items-center p-1 rounded-full dark:bg-slate-900/90 bg-slate-100 border dark:border-slate-800 border-slate-200 backdrop-blur-md shadow-xs theme-transition">
          <!-- Switcher de Color (Rojo Rubí vs Azul) -->
          <div class="flex items-center gap-1.5 pl-1.5 pr-2">
            <button onclick="setThemeColor('ruby')" id="theme-btn-ruby" title="Tema Rojo Rubí" aria-label="Tema Rojo Rubí"
                    class="w-4 h-4 rounded-full bg-rose-600 border-2 border-white dark:border-slate-900 transition-all scale-110 shadow-xs focus:outline-none shrink-0"></button>
            <button onclick="setThemeColor('blue')" id="theme-btn-blue" title="Tema Azul Océano" aria-label="Tema Azul Océano"
                    class="w-4 h-4 rounded-full bg-blue-600 border-2 border-transparent transition-all opacity-50 hover:opacity-100 focus:outline-none shrink-0"></button>
          </div>
          <!-- Separador Vertical Centrado y Proporcional -->
          <div class="w-px h-3.5 bg-slate-300 dark:bg-slate-700 shrink-0 self-center"></div>
          <!-- Switcher de Modo (Claro / Oscuro) - Centrado óptico con corrección de baseline -->
          <div class="flex items-center pl-1 pr-1.5">
            <button onclick="toggleThemeMode()" id="theme-mode-btn" title="Alternar Modo Claro / Oscuro" aria-label="Alternar Modo Claro / Oscuro"
                    class="w-4.5 h-4.5 rounded-full flex items-center justify-center text-xs dark:text-amber-400 text-slate-700 hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-all focus:outline-none shrink-0">
              <span id="theme-mode-icon" class="leading-none select-none inline-flex items-center justify-center -translate-y-[1px]">🌙</span>
            </button>
          </div>
        </div>
"""


SHARED_COOKIE_BANNER = """
  <!-- ==========================================================================
       BANNER DE CONSENTIMIENTO DE COOKIES (GDPR / CCPA / ePrivacy Compliant)
       ========================================================================== -->
  <div id="fb-cookie-banner" 
       class="fixed bottom-4 left-4 z-50 max-w-sm sm:max-w-md p-4 sm:p-5 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300 transform translate-y-8 opacity-0 pointer-events-none theme-transition" 
       role="region" aria-label="Aviso de Cookies y Privacidad">
    <div class="flex items-start gap-3.5">
      <div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 text-xl shadow-sm text-white" 
           style="background: var(--brand-gradient);">
        🍪
      </div>
      <div class="space-y-2 flex-1">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-bold dark:text-white text-slate-900 tracking-tight">Privacidad y Cookies</h4>
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/25">Zero-Trust</span>
        </div>
        <p class="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
          En FlightBot priorizamos tu privacidad local-first. Guardamos tus preferencias de tema y tu <b>Billetera de Viaje</b> directamente en tu navegador (cero datos personales en servidores). Enlaces asociados a Booking y Travelpayouts utilizan identificadores técnicos de atribución sin costo adicional.
        </p>
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <button type="button" onclick="setCookieConsent('all')" 
                  class="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white transition-all shadow-xs hover:brightness-110 cursor-pointer" 
                  style="background-color: var(--brand-primary);">
            Aceptar Todo
          </button>
          <button type="button" onclick="setCookieConsent('essential')" 
                  class="px-3 py-1.5 rounded-xl text-xs font-semibold dark:bg-slate-800 bg-slate-100 hover:dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-200 text-slate-700 border dark:border-slate-700 border-slate-300 transition-colors cursor-pointer">
            Solo Esenciales
          </button>
          <button type="button" onclick="openPrivacyModal('cookies')" 
                  class="text-xs font-semibold underline underline-offset-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 ml-auto transition-colors cursor-pointer">
            Preferencias
          </button>
        </div>
      </div>
    </div>
  </div>
"""

SHARED_PRIVACY_MODAL = """
  <!-- ==========================================================================
       MODAL: CENTRO DE PRIVACIDAD, TÉRMINOS Y CONTROL DE DATOS
       ========================================================================== -->
  <div id="fb-privacy-modal" 
       class="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs hidden items-center justify-center p-4 transition-opacity duration-200" 
       role="dialog" aria-modal="true" aria-labelledby="fb-privacy-modal-title">
    <div class="dark:bg-slate-900 bg-white rounded-3xl border dark:border-slate-800 border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden theme-transition">
      <!-- Encabezado del Modal -->
      <div class="p-5 sm:p-6 border-b dark:border-slate-800 border-slate-200 flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xl text-white shadow-sm" 
               style="background: var(--brand-gradient);">
            🛡️
          </div>
          <div>
            <h3 id="fb-privacy-modal-title" class="text-base sm:text-lg font-bold dark:text-white text-slate-900">Centro de Privacidad &amp; Términos</h3>
            <p class="text-xs dark:text-slate-400 text-slate-500">Transparencia absoluta, arquitectura Zero-Trust y control de tus datos</p>
          </div>
        </div>
        <button type="button" onclick="closePrivacyModal()" 
                class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer" 
                aria-label="Cerrar modal">
          ✕
        </button>
      </div>

      <!-- Barra de Pestañas -->
      <div class="flex border-b dark:border-slate-800 border-slate-200 px-6 gap-2 text-xs font-bold overflow-x-auto no-scrollbar shrink-0 bg-slate-50/50 dark:bg-slate-950/40" style="scrollbar-width: none; -ms-overflow-style: none;">
        <button type="button" onclick="switchPrivacyTab('cookies')" id="fb-tab-btn-cookies" 
                class="py-3 px-3 border-b-2 border-transparent transition-all whitespace-nowrap text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer">
          🍪 Cookies &amp; Almacenamiento
        </button>
        <button type="button" onclick="switchPrivacyTab('privacy')" id="fb-tab-btn-privacy" 
                class="py-3 px-3 border-b-2 border-transparent transition-all whitespace-nowrap text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer">
          🔒 Privacidad &amp; Billetera
        </button>
        <button type="button" onclick="switchPrivacyTab('affiliate')" id="fb-tab-btn-affiliate" 
                class="py-3 px-3 border-b-2 border-transparent transition-all whitespace-nowrap text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer">
          💼 Afiliación &amp; Alianzas
        </button>
        <button type="button" onclick="switchPrivacyTab('terms')" id="fb-tab-btn-terms" 
                class="py-3 px-3 border-b-2 border-transparent transition-all whitespace-nowrap text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer">
          📜 Términos de Servicio
        </button>
      </div>

      <!-- Contenido de las Pestañas -->
      <div class="p-6 overflow-y-auto space-y-4 text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
        <!-- Pestaña 1: Cookies -->
        <div id="fb-tab-content-cookies" class="space-y-4">
          <h4 class="text-sm font-bold dark:text-white text-slate-900">Control de Cookies y Almacenamiento en tu Navegador</h4>
          <p>
            En FlightBot respetamos tu privacidad por diseño. No utilizamos cookies de rastreo invasivas ni vendemos tu historial. A continuación detallamos cada elemento guardado en tu dispositivo:
          </p>
          
          <div class="space-y-2.5">
            <div class="p-3.5 rounded-2xl dark:bg-slate-800/60 bg-slate-100 border dark:border-slate-700/60 border-slate-200">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold dark:text-white text-slate-900">Almacenamiento Esencial (Técnico)</span>
                <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">Siempre Activo</span>
              </div>
              <p class="text-[11px] dark:text-slate-400 text-slate-500 mb-2">
                Indispensable para el funcionamiento de la web. Recuerda tu paleta visual (<code class="text-rose-500 font-mono">fb_theme_color</code>), modo claro/oscuro (<code class="text-rose-500 font-mono">fb_theme_mode</code>) y tu consentimiento.
              </p>
              <div class="text-[10px] text-slate-400 font-mono">Persistencia: localStorage (controlable por el usuario)</div>
            </div>

            <div class="p-3.5 rounded-2xl dark:bg-slate-800/60 bg-slate-100 border dark:border-slate-700/60 border-slate-200">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold dark:text-white text-slate-900">Billetera de Documentos Local-First</span>
                <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">Privado &amp; Offline</span>
              </div>
              <p class="text-[11px] dark:text-slate-400 text-slate-500 mb-2">
                Tus tarjetas de embarque, PNRs de vuelo, vouchers y pólizas se guardan de forma cifrada en el almacenamiento local de tu navegador (<code class="text-rose-500 font-mono">fb_wallet_docs</code>). Nunca viajan a servidores sin tu acción explícita.
              </p>
              <div class="text-[10px] text-slate-400 font-mono">Ubicación: Exclusivamente en tu navegador</div>
            </div>

            <div class="p-3.5 rounded-2xl dark:bg-slate-800/60 bg-slate-100 border dark:border-slate-700/60 border-slate-200">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold dark:text-white text-slate-900">Atribución de Afiliados (Booking &amp; Travelpayouts)</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="pref-cookie-affiliate" class="sr-only peer" checked>
                  <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-500"></div>
                </label>
              </div>
              <p class="text-[11px] dark:text-slate-400 text-slate-500 mb-2">
                Al hacer clic en enlaces de reserva a plataformas asociadas, se generan tokens técnicos anónimos para atribuir la comisión a FlightBot sin que pagues un centavo más.
              </p>
              <div class="text-[10px] text-slate-400 font-mono">Proveedores: Travelpayouts, Booking.com, Google Flights</div>
            </div>
          </div>

          <div class="flex justify-end gap-2 pt-2">
            <button type="button" onclick="saveCookiePreferences()" 
                    class="px-4 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-xs hover:brightness-110 cursor-pointer" 
                    style="background-color: var(--brand-primary);">
              Guardar Preferencias
            </button>
          </div>
        </div>

        <!-- Pestaña 2: Privacidad y Billetera -->
        <div id="fb-tab-content-privacy" class="hidden space-y-3">
          <h4 class="text-sm font-bold dark:text-white text-slate-900">Arquitectura Zero-Trust y Protección de tu Billetera</h4>
          <p>
            En FlightBot aplicamos estándares de seguridad de nivel bancario (OWASP Top 10) para proteger cada interacción:
          </p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Zero PII en Servidores:</strong> No requerimos registro con tarjeta de crédito, número de pasaporte ni datos personales para explorar ofertas.</li>
            <li><strong>Billetera Offline Segura:</strong> Tus documentos e itinerarios residen en el <code class="text-rose-500 font-mono">localStorage</code> de tu navegador. Tienes el control total para borrarlos con un solo clic.</li>
            <li><strong>Sincronización Opcional con Telegram:</strong> La comunicación con el bot de Telegram se realiza a través de la API oficial cifrada de Telegram (TLS 1.3), con tokens efímeros y sin intermediarios.</li>
            <li><strong>Cero Venta de Información:</strong> Jamás vendemos, alquilamos ni compartimos tus búsquedas de vuelos con anunciantes ni bases de datos de terceros.</li>
          </ul>
        </div>

        <!-- Pestaña 3: Afiliación & Alianzas -->
        <div id="fb-tab-content-affiliate" class="hidden space-y-3">
          <h4 class="text-sm font-bold dark:text-white text-slate-900">Transparencia Editorial y Enlaces de Afiliados</h4>
          <p>
            FlightBot es un proyecto independiente creado por viajeros para viajeros. Nuestro radar de precios y la infraestructura de servidores 24/7 se financian mediante programas de afiliados transparentes:
          </p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Booking.com &amp; Travelpayouts:</strong> Cuando reservas un hotel o paquete haciendo clic en nuestros enlaces, recibimos una pequeña comisión por parte de la plataforma asociada.</li>
            <li><strong>Cero Costo Adicional:</strong> El precio final que pagas en Booking o en la aerolínea es exactamente el mismo (o menor con promociones de descuento) que si entraras directamente.</li>
            <li><strong>Independencia Editorial:</strong> Los radares y alertas no están condicionados por aerolíneas comerciales; recomendamos siempre la tarifa más económica o conveniente del mercado. Excluimos activamente operadores con problemas legales o contingencias graves (ej. Flybondi en concurso preventivo).</li>
          </ul>
        </div>

        <!-- Pestaña 4: Términos de Servicio -->
        <div id="fb-tab-content-terms" class="hidden space-y-3">
          <h4 class="text-sm font-bold dark:text-white text-slate-900">Términos y Condiciones de Uso</h4>
          <p>
            Al utilizar FlightBot (en la web o en Telegram), aceptas los siguientes términos de servicio:
          </p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Carácter Informativo:</strong> FlightBot es una herramienta de inteligencia y monitoreo de tarifas en tiempo real. No somos una agencia de viajes ni vendemos boletos directamente.</li>
            <li><strong>Precios Dinámicos:</strong> Las tarifas aéreas varían minuto a minuto según la oferta y demanda de las aerolíneas. La tarifa final vinculante es la emitida por la aerolínea o agencia autorizada al momento del pago.</li>
            <li><strong>Documentación y Visados:</strong> El viajero es el único responsable de contar con pasaporte vigente, visados correspondientes, seguro médico y cumplir las normativas migratorias de cada destino.</li>
            <li><strong>Disponibilidad del Servicio:</strong> Trabajamos 24/7 con radares automáticos (actualización en tiempo real con caché local), pero no nos responsabilizamos por caídas técnicas de servicios de terceros (APIs de Google Flights, Booking, Telegram).</li>
          </ul>
        </div>
      </div>

      <!-- Footer Modal -->
      <div class="p-4 sm:p-5 border-t dark:border-slate-800 border-slate-200 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-slate-950/60">
        <span class="text-[11px] dark:text-slate-400 text-slate-500">Última actualización: Octubre 2026</span>
        <button type="button" onclick="closePrivacyModal()" 
                class="px-4 py-2 rounded-xl text-xs font-semibold dark:bg-slate-800 bg-slate-200 dark:text-white text-slate-900 hover:opacity-90 transition-opacity cursor-pointer">
          Entendido
        </button>
      </div>
    </div>
  </div>
"""

SHARED_COOKIE_PRIVACY_SCRIPT = """
  <!-- Script del Motor de Consentimiento de Cookies y Privacidad -->
  <script>
    (function() {
      function initCookieBanner() {
        const consent = localStorage.getItem('fb_cookie_consent');
        const banner = document.getElementById('fb-cookie-banner');
        if (!banner) return;
        if (!consent) {
          setTimeout(function() {
            banner.classList.remove('translate-y-8', 'opacity-0', 'pointer-events-none');
            banner.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
          }, 1000);
        }
      }

      window.setCookieConsent = function(level) {
        localStorage.setItem('fb_cookie_consent', level);
        const banner = document.getElementById('fb-cookie-banner');
        if (banner) {
          banner.classList.add('translate-y-8', 'opacity-0', 'pointer-events-none');
          banner.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
        }
      };

      window.openCookieBanner = function() {
        const banner = document.getElementById('fb-cookie-banner');
        if (!banner) return;
        banner.classList.remove('translate-y-8', 'opacity-0', 'pointer-events-none');
        banner.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      };

      window.openPrivacyModal = function(tab) {
        const modal = document.getElementById('fb-privacy-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        window.switchPrivacyTab(tab || 'cookies');
        document.body.style.overflow = 'hidden';
      };

      window.closePrivacyModal = function() {
        const modal = document.getElementById('fb-privacy-modal');
        if (!modal) return;
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      };

      window.switchPrivacyTab = function(tabId) {
        const tabs = ['cookies', 'privacy', 'affiliate', 'terms'];
        tabs.forEach(function(t) {
          const content = document.getElementById('fb-tab-content-' + t);
          const btn = document.getElementById('fb-tab-btn-' + t);
          if (content) {
            if (t === tabId) {
              content.classList.remove('hidden');
            } else {
              content.classList.add('hidden');
            }
          }
          if (btn) {
            if (t === tabId) {
              btn.classList.add('dark:text-white', 'text-slate-900', 'border-b-2');
              btn.classList.remove('border-transparent', 'text-slate-500', 'dark:text-slate-400');
              btn.style.borderColor = 'var(--brand-primary)';
            } else {
              btn.classList.remove('dark:text-white', 'text-slate-900', 'border-b-2');
              btn.classList.add('border-transparent', 'text-slate-500', 'dark:text-slate-400');
              btn.style.borderColor = 'transparent';
            }
          }
        });
      };

      window.saveCookiePreferences = function() {
        const affCheck = document.getElementById('pref-cookie-affiliate');
        const level = (affCheck && affCheck.checked) ? 'all' : 'essential';
        window.setCookieConsent(level);
        window.closePrivacyModal();
      };

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          window.closePrivacyModal();
        }
      });

      document.addEventListener('DOMContentLoaded', initCookieBanner);
    })();
  </script>
"""

SHARED_THEME_SCRIPT = """
  <!-- Script del Motor de Temas Dual (Color + Modo) -->
  <script>
    function setThemeColor(col) {
      document.documentElement.setAttribute('data-color', col);
      localStorage.setItem('fb_theme_color', col);
      updateThemeControls();
    }

    function toggleThemeMode() {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('fb_theme_mode', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('fb_theme_mode', 'dark');
      }
      updateThemeControls();
    }

    function updateThemeControls() {
      const col = document.documentElement.getAttribute('data-color') || 'ruby';
      const isDark = document.documentElement.classList.contains('dark');
      const btnR = document.getElementById('theme-btn-ruby');
      const btnB = document.getElementById('theme-btn-blue');
      const modeIcon = document.getElementById('theme-mode-icon');

      if (btnR && btnB) {
        if (col === 'ruby') {
          btnR.className = "w-4 h-4 rounded-full bg-rose-600 border-2 border-white dark:border-slate-900 transition-all scale-110 shadow-xs focus:outline-none";
          btnB.className = "w-4 h-4 rounded-full bg-blue-600 border-2 border-transparent transition-all opacity-50 hover:opacity-100 focus:outline-none";
        } else {
          btnB.className = "w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-slate-900 transition-all scale-110 shadow-xs focus:outline-none";
          btnR.className = "w-4 h-4 rounded-full bg-rose-600 border-2 border-transparent transition-all opacity-50 hover:opacity-100 focus:outline-none";
        }
      }
      if (modeIcon) {
        modeIcon.textContent = isDark ? '🌙' : '☀️';
      }
    }

    document.addEventListener('DOMContentLoaded', updateThemeControls);
  </script>
"""


def _generar_kb_guias_json() -> str:
    """Serializa el conocimiento estructurado de las 10 guías para el fallback local en GitHub Pages."""
    kb = {}
    for k, g in GUIAS_DESTINOS.items():
        kb[k] = {
            "id": g["id"],
            "slug": g["slug"],
            "ciudad": g["ciudad"],
            "pais": g["pais"],
            "icono": g["icono"],
            "aeropuertos": g["aeropuertos"],
            "cmd_vuelo": g["cmd_vuelo"],
            "resumen": g["resumen"],
            "puntos": [f"<b>{p[0]}</b> ({p[1]})" for p in g["puntos_turisticos"][:3]],
            "escapadas": [f"<b>{e[0]}</b>: {e[1]}" for e in g["escapadas_conexiones"][:2]],
            "transporte": [f"<b>{t['medio']}</b> ({t.get('tiempo', 'Directo')} · {t.get('costo', '')}): {t['veredicto']}" for t in g["transporte_comparativa"][:2]],
            "zonas": [f"<b>{z[0]}</b> ({z[1]})" for z in g["zonas_alojamiento"][:3]],
            "tip": g["tip_ahorro"],
            "clima": {
                k_est: f"{v_est['periodo']}: {v_est['temp_media']}. {v_est['descripcion']}"
                for k_est, v_est in g.get("clima_temporadas", {}).items()
            },
            "comidas": [f"<b>{c[0]}</b>: {c[1]}" for c in g.get("gastronomia_tipica", [])[:3]],
            "luz_solar": g.get("horas_luz_solar"),
            "idioma": g.get("idioma"),
        }
    return json.dumps(kb, ensure_ascii=False)


def construir_bloque_chatbox_ia(
    contexto_pagina: str = "landing",
    ciudad_titulo: str = "",
    icono_ciudad: str = "✈️",
) -> str:
    """Construye el widget flotante del Chatbox IA con arquitectura híbrida (API Gemini + Fallback Estático)."""
    kb_json = _generar_kb_guias_json()
    if ciudad_titulo:
        saludo_inicial = (
            f"👋 ¡Hola! Soy el <b>Asistente IA de FlightBot</b> {icono_ciudad}.<br><br>"
            f"Veo que estás leyendo la guía de <b>{ciudad_titulo}</b>. "
            f"Preguntame dónde conviene alojarse, cómo moverte en tren/avión, escapadas cercanas o cómo cotizar vuelos:"
        )
        pills_iniciales = [
            f"🏨 ¿Dónde alojarse en {ciudad_titulo}?",
            f"🚆 Transporte y trenes en {ciudad_titulo}",
            f"🗺️ Escapadas desde {ciudad_titulo}",
            f"✈️ Vuelos a {ciudad_titulo}",
            f"💡 Tip de ahorro en {ciudad_titulo}",
        ]
    else:
        saludo_inicial = (
            "👋 ¡Hola! Soy <b>F-Bot Rolli</b>, tu compañero de viaje y asistente de FlightBot 🧳.<br><br>"
            f"Preguntame por vuelos baratos, mejores barrios para hospedarte en nuestros {len(GUIAS_DESTINOS)} destinos globales, "
            "trenes de alta velocidad, equipaje de bebé o salas VIP:"
        )
        pills_iniciales = [
            "✈️ Vuelos a Roma y Madrid",
            "🏨 ¿Dónde alojarse en Madrid?",
            "🏖️ Hoteles en Punta Cana",
            "👶 Viajar con bebé y cochecito",
            "💳 Salas VIP con mis tarjetas",
        ]

    pills_json = json.dumps(pills_iniciales, ensure_ascii=False)
    saludo_json = json.dumps(saludo_inicial, ensure_ascii=False)
    ctx_json = json.dumps(contexto_pagina, ensure_ascii=False)

    return f"""<!-- FLIGHTBOT_AI_CHATBOX_START -->
  <!-- Estilos y Animación Suave para Chatbox IA (Apertura, Cierre y Modo Expandido) -->
  <style>
    #fb-chat-window {{
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
    }}
    #fb-chat-window.fb-chat-open {{
      opacity: 1 !important;
      transform: scale(1) translateY(0) !important;
      pointer-events: auto !important;
      visibility: visible !important;
    }}
    #fb-chat-window.fb-chat-expanded {{
      width: 640px !important;
      max-width: calc(100vw - 2rem) !important;
      height: 700px !important;
      max-height: 86vh !important;
    }}
  </style>

  <!-- Widget Flotante de Chatbox IA (Arquitectura Híbrida: Servidor Gemini + GitHub Pages Fallback) -->
  <div id="fb-chat-widget" class="fixed bottom-5 right-5 z-50 font-sans">
    <!-- Ventana Desplegable del Chatbox -->
    <div id="fb-chat-window"
         class="hidden fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[78vh] dark:bg-slate-900/95 bg-white/95 backdrop-blur-xl border dark:border-slate-700/80 border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden theme-transition"
         style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 25px -5px var(--brand-glow);">

      <!-- Cabecera del Chatbox -->
      <div class="px-4 py-3.5 flex items-center justify-between text-white"
           style="background: var(--brand-gradient);">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/20 flex-shrink-0 p-1 cursor-help"
               title="F-Bot Rolli · Asistente IA de Viajes">
            <svg viewBox="0 0 40 40" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="37" rx="14" ry="2" fill="#000000" opacity="0.35"/>
              <rect x="23" y="19" width="12" height="16" rx="3" fill="url(#fbSuitcaseAlwaysRedChat)" stroke="#ffffff" stroke-width="0.8"/>
              <line x1="25" y1="23" x2="33" y2="23" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <line x1="25" y1="27" x2="33" y2="27" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <circle cx="25.5" cy="36" r="1.3" fill="#1e293b" stroke="#ffffff" stroke-width="0.6"/>
              <circle cx="32.5" cy="36" r="1.3" fill="#1e293b" stroke="#ffffff" stroke-width="0.6"/>
              <path d="M26 19 V13 H32 V19" stroke="#cbd5e1" stroke-width="1.1" stroke-linecap="round"/>
              <path d="M17 24 Q22 20 27 13" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/>
              <rect x="7" y="17" width="14" height="16" rx="7" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
              <rect x="10" y="22" width="8" height="6" rx="2" fill="#0f172a"/>
              <rect x="5.5" y="6" width="17" height="13" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
              <line x1="14" y1="6" x2="14" y2="2" stroke="#94a3b8" stroke-width="1.1" stroke-linecap="round"/>
              <circle cx="14" cy="1.8" r="1.6" fill="#e11d48"/>
              <rect x="8" y="9" width="12" height="6.5" rx="2.5" fill="#0f172a"/>
              <circle cx="11" cy="12.2" r="1.2" fill="#38bdf8"/>
              <circle cx="17" cy="12.2" r="1.2" fill="#38bdf8"/>
              <defs>
                <linearGradient id="fbSuitcaseAlwaysRedChat" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#e11d48"/>
                  <stop offset="100%" stop-color="#be123c"/>
                </linearGradient>
              </defs>
            </svg>
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
                  class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/90 transition-all text-xs">
            ↺
          </button>
          <button type="button" id="fb-chat-expand-btn" onclick="window.toggleFlightBotChatExpand()" title="Maximizar tamaño" aria-label="Maximizar tamaño"
                  class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/90 transition-all text-xs">
            ⛶
          </button>
          <button type="button" onclick="window.toggleFlightBotChat(false)" title="Minimizar chat" aria-label="Minimizar chat"
                  class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/90 transition-all text-sm font-bold">
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
               placeholder="Preguntá sobre vuelos, barrios, trenes o bebés..."
               class="flex-1 px-4 py-2.5 rounded-2xl text-xs sm:text-sm dark:bg-slate-800/90 bg-slate-100 dark:text-white text-slate-900 placeholder-slate-400 border dark:border-slate-700 border-slate-200 focus:outline-none focus:ring-2 transition-all"
               style="--tw-ring-color: var(--brand-primary);" />
        <button id="fb-chat-send" type="submit" title="Enviar consulta" aria-label="Enviar consulta"
                class="w-10 h-10 rounded-2xl text-white flex items-center justify-center shadow-md hover:brightness-110 active:scale-95 transition-all flex-shrink-0"
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

    <!-- Botón Flotante Principal (Trigger) -->
    <button id="fb-chat-fab" type="button" onclick="window.toggleFlightBotChat()"
            aria-label="Abrir Asistente IA de FlightBot"
            class="group flex items-center gap-3 px-4 py-3.5 rounded-full text-white font-bold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all"
            style="background: var(--brand-gradient); box-shadow: 0 14px 30px -5px var(--brand-glow);">
      <span class="relative flex h-6 w-6 items-center justify-center">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-25"></span>
        <span class="relative text-base">💬</span>
      </span>
      <span class="pr-1">F-Bot Rolli · Chat IA</span>
    </button>
  </div>

  <script>
    (function() {{
      const FB_GUIAS_KB = {kb_json};
      const FB_PAGE_CTX = {ctx_json};
      const FB_INITIAL_GREETING = {saludo_json};
      const FB_INITIAL_PILLS = {pills_json};

      // Generar o recuperar session_id efímero para aislamiento multi-tenant
      function getSessionId() {{
        let sid = sessionStorage.getItem('fb_chat_session_id');
        if (!sid || !/^[A-Za-z0-9_\\-]{{4,48}}$/.test(sid)) {{
          sid = 'web_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
          sessionStorage.setItem('fb_chat_session_id', sid);
        }}
        return sid;
      }}

      // Sanitización estricta anti-XSS: escapa todo y solo habilita <b>, <i>, <code> y <br>
      function sanitizeBotHtml(raw) {{
        const escaped = String(raw || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
        return escaped
          .replace(/&lt;b&gt;([\\s\\S]*?)&lt;\\/b&gt;/gi, '<strong>$1</strong>')
          .replace(/&lt;i&gt;([\\s\\S]*?)&lt;\\/i&gt;/gi, '<em>$1</em>')
          .replace(/&lt;code&gt;([\\s\\S]*?)&lt;\\/code&gt;/gi, '<code class="px-1.5 py-0.5 rounded dark:bg-slate-700 bg-slate-200 font-mono text-xs">$1</code>')
          .replace(/&lt;br\\s*\\/?&gt;/gi, '<br>')
          .replace(/\\n/g, '<br>');
      }}

      // Detectar guía mencionada en el texto o usar el contexto de la página actual
      function detectarGuia(texto) {{
        const t = texto.toLowerCase();
        const aliasMap = {{
          rio: ['rio de janeiro', 'río de janeiro', 'janeiro', 'copacabana', 'ipanema', 'buzios', 'búzios', 'arraial', 'galeao', 'santos dumont'],
          roma: ['roma', 'rome', 'italia', 'coliseo', 'vaticano', 'trastevere', 'florencia', 'frecciarossa', 'fco'],
          madrid: ['madrid', 'españa', 'barajas', 'atocha', 'gran via', 'gran vía', 'ouigo', 'iryo', 'toledo'],
          miami: ['miami', 'florida', 'south beach', 'brickell', 'orlando', 'brightline', 'key west', 'everglades'],
          cancun: ['cancun', 'cancún', 'riviera maya', 'playa del carmen', 'tulum', 'chichen', 'ado', 'mexico'],
          puntacana: ['punta cana', 'bavaro', 'bávaro', 'bahia principe', 'saona', 'dominicana', 'puj'],
          aruba: ['aruba', 'eagle beach', 'palm beach', 'oranjestad', 'baby beach'],
          bariloche: ['bariloche', 'nahuel huapi', 'catedral', 'llao llao', 'siete lagos', 'angostura', 'patagonia'],
          mendoza: ['mendoza', 'uco', 'lujan de cuyo', 'luján de cuyo', 'aconcagua', 'bodega', 'bodegas', 'vino'],
          iguazu: ['iguazu', 'iguazú', 'cataratas', 'garganta del diablo', 'foz']
        }};
        if (/\\b(rio|río)\\b/.test(t)) return FB_GUIAS_KB['rio'];
        for (const [id, kws] of Object.entries(aliasMap)) {{
          if (kws.some(k => t.includes(k))) return FB_GUIAS_KB[id];
        }}
        if (FB_PAGE_CTX && FB_GUIAS_KB[FB_PAGE_CTX]) {{
          return FB_GUIAS_KB[FB_PAGE_CTX];
        }}
        return null;
      }}

      // Motor Concierge Local (Fallback instantáneo para GitHub Pages / Sin servidor Python)
      function responderConciergeLocal(mensaje) {{
        const t = mensaje.toLowerCase().trim();

        // 1. Filtro defensivo contra inyecciones de prompt / comandos
        if (/(ignore previous|olvida las instrucciones|system prompt|drop table|select \\*|sudo |rm -rf|api_key|token_secreto)/i.test(t)) {{
          return {{
            respuesta: "🛡️ <b>FlightBot AI Shield:</b> Este asistente está exclusivamente diseñado para orientarte en destinos turísticos, vuelos, trenes, hoteles y equipaje de viaje.",
            quick_replies: FB_INITIAL_PILLS
          }};
        }}

        const guia = detectarGuia(t);

        // 2. Consultas sobre bebés y cochecito
        if (/(bebe|bebé|cochecito|paragüitas|moises|mamadera|infante)/.test(t)) {{
          return {{
            respuesta: "👶 <b>Viajar con Bebé y Cochecito:</b><br><br>Casi todas las aerolíneas (Aerolíneas Argentinas, LATAM, Iberia, ITA Airways, Arajet, y JetSMART) permiten despachar <b>1 cochecito o paragüitas plegable sin cargo hasta la puerta del avión (Gate Check)</b>.<br><br>Además, incluyen 1 bolso de mano o valija de 10 kg para el bebé.",
            quick_replies: ["✈️ Vuelos a Punta Cana", "🇪🇸 Guía Madrid", "💳 Salas VIP", "🏖️ Hoteles Familiares"]
          }};
        }}

        // 3. Consultas sobre Salas VIP y tarjetas
        if (/(vip|lounge|black|signature|infinite|platinum|amex|centurion)/.test(t)) {{
          return {{
            respuesta: "💳 <b>Salas VIP en Aeropuertos:</b><br><br>Podés acceder sin cargo en Ezeiza (EZE), Aeroparque (AEP) y aeropuertos internacionales con:<br>• <b>Visa Signature / Infinite:</b> mediante la app <i>Visa Airport Companion (DragonPass)</i>.<br>• <b>Mastercard Black:</b> sala exclusiva Mastercard en EZE y <i>Mastercard Airport Experiences (LoungeKey)</i>.<br>• <b>American Express Platinum / Black:</b> <i>Salón Centurion</i> y Priority Pass.",
            quick_replies: ["✈️ Vuelos a Roma", "🇪🇸 Vuelos a Madrid", "👶 Viajar con Bebé", "🏖️ Punta Cana"]
          }};
        }}

        // 3.b Consultas sobre Mascotas en ruta (Río Negro / Vacunas / SENASA)
        if (/(mascota|perro|gato|antirrabica|antirrábica|vacuna|cvi|senasa|funbapa)/.test(t) && !/(alimento|fruta|carne)/.test(t)) {{
          return {{
            respuesta: "🐾 <b>Viajar con Mascotas en Ruta (Río Negro, Neuquén y Resto del País):</b><br><br>• <b>Documentación Obligatoria:</b> Certificado de <b>Vacunación Antirrábica al día</b> (aplicada entre 21 días y 1 año antes, firmada por veterinario matriculado) y <b>Libreta Sanitaria</b> con desparasitación vigente.<br>• <b>En el Auto:</b> Deben viajar en el asiento trasero sujetos con pretal/arnés al cinturón o en transportadora.<br>• <b>Si vas a Ushuaia o Brasil:</b> Se exige tramitar el <b>CVI (Certificado Veterinario Internacional)</b> en SENASA.<br>• <b>Parques Nacionales (Nahuel Huapi / Lanín / Iguazú):</b> No permiten ingreso de mascotas para proteger la fauna nativa.",
            quick_replies: ["🍎 Barrera de Alimentos", "🔴 Estado Ruta 152 y 151", "🚗 Calcular Ruta a Bariloche", "🍷 Ruta a Mendoza"]
          }};
        }}

        // 3.c Consultas sobre Barrera Sanitaria de Alimentos (Río Negro / Patagonia / Mendoza)
        if (/(alimento|fruta|verdura|carne|asado|barrera sanitaria|iscamen|decomis|perecedero)/.test(t)) {{
          return {{
            respuesta: "🍎 <b>Barrera Zoofitosanitaria (Patagonia FUNBAPA/SENASA e ISCAMEN Mendoza):</b><br><br>🚫 <b>PROHIBIDO (Decomiso obligatorio en Río Colorado / 25 de Mayo / Desaguadero):</b><br>• <b>Frutas y vegetales frescos</b> hospederos de la <i>Mosca de los Frutos</i> (manzana, pera, cítricos, naranja, mandarina, durazno, ciruela, cereza, uva, arándano, pimiento, palta salvo Hass).<br>• <b>Carnes rojas con hueso, menudencias y chacinados caseros sin rótulo</b> (en Patagonia, por estatus Libre de Fiebre Aftosa).<br><br>✅ <b>QUÉ SÍ PODÉS LLEVAR:</b> Alimentos secos no perecederos (fideos, arroz, galletitas, yerba), comida cocida del día (sándwiches, empanadas, tartas) y fiambres o carnes SIN hueso envasados al vacío con sello oficial de SENASA.",
            quick_replies: ["🐾 Viajar con Mascotas", "🔴 Estado Ruta 152 y 151", "🚗 Calcular Ruta a Bariloche", "🍷 Ruta a Mendoza"]
          }};
        }}

        // 3.d Consultas sobre Rutas Destruidas, Semáforo Vial, Horarios de Salida o Peajes
        if (/(ruta 151|ruta 152|rn 151|rn 152|ruta del desierto|semaforo|semáforo|pozos|baches|destruida|peaje|en auto|en ruta|estaciones 24)/.test(t)) {{
          return {{
            respuesta: "🚦 <b>Semáforo de Rutas y Tramos Críticos 2026:</b><br><br>• 🔴 <b>RN 152 y RN 151 (La Pampa / Río Negro):</b> Muy deterioradas con pozos profundos. <b>Desvío recomendado a Bariloche/SMA:</b> en Gral. Acha tomar <b>RN 143 a Chacharramendi y RP 20 (Ruta del Desierto)</b>. Nunca circular de noche.<br>• 🟠 <b>RN 3 (Patagonia):</b> Deformaciones entre Azul-Tres Arroyos y Trelew-Comodoro + fuerte viento lateral después del mediodía.<br>• 🟡 <b>RN 14 (Corrientes):</b> Autovía hasta Paso de los Libres; mano única con huellas entre Libres y Virasoro.<br>• 🟢 <b>Autovía 2, RN 7 (Mendoza) y AU RN 9 (Córdoba):</b> En muy buen estado.<br><br>⏰ <b>Horario ideal de salida:</b> 04:00 a 05:00 hs para cruzar accesos sin camiones y llegar de día a los tramos críticos.",
            quick_replies: ["🍎 Barrera de Alimentos", "🐾 Viajar con Mascotas", "🍷 Guía Mendoza", "🏔️ Guía Bariloche"]
          }};
        }}

        // 4. Si hay una guía identificada (por mención o por la página actual)
        if (guia) {{
          if (/(barrio|alojar|hosped|donde dormir|zona|hotel)/.test(t)) {{
            return {{
              respuesta: `${{guia.icono}} <b>Dónde alojarse en ${{guia.ciudad}}:</b><br><br>• ${{guia.zonas.join('<br>• ')}}<br><br>💡 <b>Tip:</b> ${{guia.tip}}`,
              quick_replies: [`🚆 Transporte en ${{guia.ciudad}}`, `🗺️ Escapadas desde ${{guia.ciudad}}`, `✈️ Vuelos a ${{guia.ciudad}}`]
            }};
          }}
          if (/(tren|transporte|moverse|aeropuerto|iryo|ouigo|frecciarossa|brightline|auto|bus|metro)/.test(t)) {{
            return {{
              respuesta: `🚆 <b>Cómo moverse en ${{guia.ciudad}} (${{guia.aeropuertos}}):</b><br><br>• ${{guia.transporte.join('<br>• ')}}<br><br>💡 ${{guia.tip}}`,
              quick_replies: [`🏨 Barrios en ${{guia.ciudad}}`, `🗺️ Escapadas desde ${{guia.ciudad}}`, `✈️ Vuelos a ${{guia.ciudad}}`]
            }};
          }}
          if (/(escapada|cerca|excursion|alrededores|conectar|otros lados)/.test(t)) {{
            return {{
              respuesta: `🗺️ <b>Escapadas imperdibles desde ${{guia.ciudad}}:</b><br><br>• ${{guia.escapadas.join('<br><br>• ')}}`,
              quick_replies: [`🏨 Barrios en ${{guia.ciudad}}`, `🚆 Transporte en ${{guia.ciudad}}`, `✈️ Vuelos a ${{guia.ciudad}}`]
            }};
          }}
          if (/(ahorr|tip|consejo|barato|truco)/.test(t)) {{
            return {{
              respuesta: `💡 <b>Consejo Pro para ahorrar en ${{guia.ciudad}}:</b><br><br>${{guia.tip}}<br><br>En nuestro bot de Telegram podés activar el radar gratuito con el comando <code>${{guia.cmd_vuelo}}</code>.`,
              quick_replies: [`🏨 Barrios en ${{guia.ciudad}}`, `🚆 Transporte en ${{guia.ciudad}}`, `✈️ Vuelos a ${{guia.ciudad}}`]
            }};
          }}
          // Resumen integral del destino
          return {{
            respuesta: `${{guia.icono}} <b>Guía Flash · ${{guia.ciudad}} (${{guia.pais}}):</b><br>${{guia.resumen}}<br><br>📍 <b>Imperdibles:</b><br>• ${{guia.puntos.slice(0, 2).join('<br>• ')}}<br><br>🏨 <b>Mejor zona:</b> ${{guia.zonas[0]}}<br>✈️ <b>Cotizar en Telegram:</b> comando <code>${{guia.cmd_vuelo}}</code> o <code>/vuelos ${{guia.ciudad.split(' ')[0]}}</code>.`,
            quick_replies: [`🏨 ¿Dónde alojarse en ${{guia.ciudad}}?`, `🚆 Transporte en ${{guia.ciudad}}`, `🗺️ Escapadas desde ${{guia.ciudad}}`]
          }};
        }}

        // 5. Fallback general orientador
        return {{
          respuesta: "🤖 Puedo ayudarte con nuestras <b>{len(GUIAS_DESTINOS)} Guías Oficiales</b> (Roma, Madrid, Miami, Río, Cancún, Punta Cana, Aruba, Bariloche, Mendoza e Iguazú), comparativas de <b>trenes vs. avión</b>, mejores barrios para alojarte, <b>equipaje de bebé</b> y <b>salas VIP</b>.<br><br>¿Sobre qué destino o tema te gustaría consultar?",
          quick_replies: FB_INITIAL_PILLS
        }};
      }}

      function appendMessage(role, htmlText) {{
        const container = document.getElementById('fb-chat-messages');
        if (!container) return;
        const wrap = document.createElement('div');
        if (role === 'user') {{
          wrap.className = 'flex justify-end';
          const bubble = document.createElement('div');
          bubble.className = 'max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-sm text-white text-xs sm:text-sm leading-relaxed shadow-sm';
          bubble.style.background = 'var(--brand-gradient)';
          bubble.innerHTML = sanitizeBotHtml(htmlText);
          wrap.appendChild(bubble);
        }} else {{
          wrap.className = 'flex justify-start';
          const bubble = document.createElement('div');
          bubble.className = 'max-w-[90%] px-4 py-3 rounded-2xl rounded-bl-sm dark:bg-slate-800/95 bg-white dark:text-slate-100 text-slate-800 border dark:border-slate-700/80 border-slate-200 text-xs sm:text-sm leading-relaxed shadow-sm';
          bubble.innerHTML = sanitizeBotHtml(htmlText);
          wrap.appendChild(bubble);
        }}
        container.appendChild(wrap);
        container.scrollTop = container.scrollHeight;
      }}

      function renderPills(pills) {{
        const bar = document.getElementById('fb-chat-pills');
        if (!bar) return;
        bar.innerHTML = '';
        (pills || FB_INITIAL_PILLS).slice(0, 5).forEach(txt => {{
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border dark:bg-slate-800 bg-slate-100 dark:border-slate-700 border-slate-200 dark:text-slate-200 text-slate-700 hover:brightness-110 transition-all flex-shrink-0';
          btn.textContent = txt;
          btn.onclick = function() {{ window.sendFlightBotPrompt(txt); }};
          bar.appendChild(btn);
        }});
      }}

      function showTypingIndicator() {{
        const container = document.getElementById('fb-chat-messages');
        if (!container) return null;
        const wrap = document.createElement('div');
        wrap.id = 'fb-chat-typing';
        wrap.className = 'flex justify-start';
        wrap.innerHTML = '<div class="px-4 py-2.5 rounded-2xl rounded-bl-sm dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-200 text-xs dark:text-slate-400 text-slate-500 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style="animation-delay:0.15s"></span><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style="animation-delay:0.3s"></span><span class="ml-1">Consultando IA...</span></div>';
        container.appendChild(wrap);
        container.scrollTop = container.scrollHeight;
        return wrap;
      }}

      let fbChatCloseTimer = null;
      window.toggleFlightBotChat = function(forceOpen) {{
        const win = document.getElementById('fb-chat-window');
        if (!win) return;
        if (fbChatCloseTimer) {{
          clearTimeout(fbChatCloseTimer);
          fbChatCloseTimer = null;
        }}
        const isOpen = win.classList.contains('fb-chat-open');
        const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !isOpen;
        if (shouldOpen) {{
          win.classList.remove('hidden');
          void win.offsetWidth;
          win.classList.add('fb-chat-open');
          const inp = document.getElementById('fb-chat-input');
          if (inp) setTimeout(() => inp.focus(), 100);
        }} else {{
          win.classList.remove('fb-chat-open');
          fbChatCloseTimer = setTimeout(() => {{
            if (!win.classList.contains('fb-chat-open')) {{
              win.classList.add('hidden');
            }}
          }}, 360);
        }}
      }};

      window.toggleFlightBotChatExpand = function() {{
        const win = document.getElementById('fb-chat-window');
        const btn = document.getElementById('fb-chat-expand-btn');
        if (!win) return;
        win.classList.toggle('fb-chat-expanded');
        const isExp = win.classList.contains('fb-chat-expanded');
        if (btn) {{
          btn.textContent = isExp ? '🗗' : '⛶';
          btn.title = isExp ? 'Restaurar tamaño' : 'Maximizar tamaño';
          btn.setAttribute('aria-label', btn.title);
        }}
        const messages = document.getElementById('fb-chat-messages');
        if (messages) {{
          setTimeout(() => {{
            messages.scrollTo({{ top: messages.scrollHeight, behavior: 'smooth' }});
          }}, 100);
        }}
      }};

      window.resetFlightBotChat = function() {{
        sessionStorage.removeItem('fb_chat_session_id');
        const container = document.getElementById('fb-chat-messages');
        if (container) container.innerHTML = '';
        appendMessage('bot', FB_INITIAL_GREETING);
        renderPills(FB_INITIAL_PILLS);
      }};

      window.sendFlightBotPrompt = async function(rawText) {{
        const text = String(rawText || '').trim();
        if (!text) return;
        appendMessage('user', text);
        const typingEl = showTypingIndicator();

        let answered = false;
        if (window.location.protocol !== 'file:') {{
          try {{
            const ctrl = new AbortController();
            const timer = setTimeout(() => ctrl.abort(), 6500);
            const res = await fetch('/api/chat', {{
              method: 'POST',
              headers: {{ 'Content-Type': 'application/json' }},
              body: JSON.stringify({{
                mensaje: text,
                session_id: getSessionId(),
                contexto_pagina: FB_PAGE_CTX
              }}),
              signal: ctrl.signal
            }});
            clearTimeout(timer);
            if (res.ok) {{
              const data = await res.json();
              if (data && data.respuesta) {{
                if (typingEl) typingEl.remove();
                appendMessage('bot', data.respuesta);
                renderPills(data.quick_replies || FB_INITIAL_PILLS);
                answered = true;
              }}
            }}
          }} catch (_) {{
            // Fallback transparente al motor Concierge local (ej. GitHub Pages)
          }}
        }}

        if (!answered) {{
          if (typingEl) typingEl.remove();
          const localRes = responderConciergeLocal(text);
          appendMessage('bot', localRes.respuesta);
          renderPills(localRes.quick_replies);
        }}
      }};

      window.handleFlightBotSubmit = function(e) {{
        if (e) e.preventDefault();
        const inp = document.getElementById('fb-chat-input');
        if (!inp) return;
        const val = inp.value.trim();
        if (!val) return;
        inp.value = '';
        window.sendFlightBotPrompt(val);
      }};

      document.addEventListener('DOMContentLoaded', function() {{
        window.resetFlightBotChat();
      }});
    }})();
  </script>
<!-- FLIGHTBOT_AI_CHATBOX_END -->"""


DESTINOS_RUTA_WEB = [
    ("bariloche", "🏔️ Bariloche / Río Negro"),
    ("san martin de los andes", "🌲 San Martín de los Andes / 7 Lagos"),
    ("mendoza", "🍷 Mendoza / Valle de Uco"),
    ("villa general belgrano", "🏞️ Villa General Belgrano (Córdoba)"),
    ("mar del plata", "🏖️ Mar del Plata (Costa Atlántica)"),
    ("tandil", "⛰️ Tandil (Sierras PBA)"),
    ("pinamar", "🌲 Pinamar / Cariló / Villa Gesell"),
    ("cordoba", "🏞️ Córdoba Capital / Sierras"),
    ("iguazu", "🌴 Cataratas del Iguazú (Misiones)"),
    ("colon", "♨️ Colón / Federación (Entre Ríos)"),
    ("salta", "🌵 Salta / Jujuy (Norte Argentino)"),
    ("puerto madryn", "🐋 Puerto Madryn / Las Grutas"),
    ("ushuaia", "🐧 Ushuaia / Tierra del Fuego"),
    ("florianopolis", "🇧🇷 Florianópolis / Bombinhas (En Auto)"),
]


def _generar_kb_rutas_json() -> str:
    """Serializa la base de conocimiento completa de los destinos viales para cálculo instantáneo en la web."""
    kb_rutas = {}
    for dest_key, _ in DESTINOS_RUTA_WEB:
        kb_rutas[dest_key] = obtener_datos_ruta(
            destino_str=dest_key,
            origen_str="Buenos Aires",
            tipo_combustible="nafta",
            tipo_vehiculo="sedan",
            pasajeros=2,
        )
    ciudades_lista = sorted(list(NODOS_VIALES_ARGENTINA.keys())) if NODOS_VIALES_ARGENTINA else []
    promos_lista = [asdict(p) for p in PROMOCIONES_COMBUSTIBLE_Y_TIENDAS]
    payload = {
        "destinos": kb_rutas,
        "corredores": CORREDORES,
        "ciudades": [c.title() for c in ciudades_lista],
        "nodos": NODOS_VIALES_ARGENTINA,
        "combustibles": TARIFAS_COMBUSTIBLE,
        "vehiculos": PERFILES_VEHICULO,
        "promociones_combustible": promos_lista,
    }
    return json.dumps(payload, ensure_ascii=False)


def construir_bloque_planificador_rutas(destino_inicial: str = "bariloche", es_guia_interna: bool = False) -> str:
    """Construye la sección interactiva 'Viajar en Ruta' con Semáforo Vial, Peajes, Horarios 24hs, Barrera Sanitaria y Mascotas."""
    kb_rutas_json = _generar_kb_rutas_json()
    dest_init = destino_inicial if destino_inicial in dict(DESTINOS_RUTA_WEB) else "bariloche"
    dict_titulos = {
        "bariloche": "Bariloche",
        "san martin de los andes": "San Martín de los Andes",
        "mendoza": "Mendoza",
        "villa general belgrano": "Villa General Belgrano",
        "mar del plata": "Mar del Plata",
        "tandil": "Tandil",
        "pinamar": "Pinamar",
        "cordoba": "Córdoba",
        "iguazu": "Puerto Iguazú",
        "colon": "Colón",
        "salta": "Salta",
        "puerto madryn": "Puerto Madryn",
        "ushuaia": "Ushuaia",
        "florianopolis": "Florianópolis",
    }
    dest_titulo_inicial = dict_titulos.get(dest_init, dest_init.title())

    ciudades_nodos = sorted(NODOS_VIALES_ARGENTINA.keys()) if NODOS_VIALES_ARGENTINA else []
    datalist_ciudades_html = "".join([f'<option value="{c.title()}"></option>' for c in ciudades_nodos])

    clases_seccion = (
        "mb-16 pt-8 border-t dark:border-slate-800 border-slate-200 theme-transition"
        if es_guia_interna
        else "py-24 dark:bg-slate-900/50 bg-slate-100/80 border-t dark:border-slate-800 border-slate-200 theme-transition"
    )
    contenedor_clases = "" if es_guia_interna else "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

    return f"""<!-- FLIGHTBOT_ROAD_PLANNER_START -->
  <!-- Datalist de Ciudades y Nodos Viales de Argentina -->
  <datalist id="fb-road-ciudades-list">
    {datalist_ciudades_html}
  </datalist>

  <!-- Sección Interactiva: Viajar en Ruta, Semáforo de Calzadas, Peajes, Barrera Sanitaria y Mascotas -->
  <section id="rutas-auto" class="{clases_seccion}">
    <div class="{contenedor_clases}">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="flex items-center justify-center gap-2 mb-4 flex-wrap">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider theme-transition"
               style="background-color: var(--brand-subtle); border: 1px solid var(--brand-border); color: var(--brand-primary);">
            🚗 Inteligencia Vial &amp; Hoja de Ruta 2026
          </div>
          <span id="fb-radar-followers-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-sky-500/15 text-sky-400 border border-sky-500/30">
            👥 +1.480 viajeros siguen el Radar en vivo
          </span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4 theme-transition">
          ¿Viajás en auto? Semáforo de Rutas, Peajes, Horarios y Controles
        </h2>
        <p class="dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed theme-transition">
          Calculá el presupuesto real de combustible y peajes de cualquier punto a punto de Argentina, qué rutas están destruidas y cómo esquivarlas, a qué hora salir por las estaciones 24 hs, qué alimentos prohíbe la barrera sanitaria (SENASA / FUNBAPA / ISCAMEN) y qué papeles llevar si viajás con mascotas.
        </p>
      </div>

      <!-- Barra de Controles Interactivos -->
      <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl mb-8 theme-transition">
        <!-- Fila 1: Origen, Destino y Botón Buscar Hoja de Ruta -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4">
          <!-- 1. Selector de Origen (Cualquier Ciudad) -->
          <div class="md:col-span-5">
            <label for="fb-road-origin" class="block text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-2">
              🛫 Origen (Cualquier Ciudad)
            </label>
            <input id="fb-road-origin" type="text" list="fb-road-ciudades-list" value="Buenos Aires"
                   onkeydown="if(event.key === 'Enter') {{ event.preventDefault(); window.triggerRoadSearch(); }}"
                   placeholder="Ej: Buenos Aires, Pellegrini 1500 Rosario, Córdoba..."
                   class="w-full px-4 py-3 rounded-xl text-sm font-bold dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all">
          </div>

          <!-- 2. Selector de Destino (Cualquier Ciudad o Pueblo) -->
          <div class="md:col-span-5">
            <label for="fb-road-dest" class="block text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-2">
              📍 Destino (Cualquier Ciudad o Pueblo)
            </label>
            <input id="fb-road-dest" type="text" list="fb-road-ciudades-list" value="{dest_titulo_inicial}"
                   onkeydown="if(event.key === 'Enter') {{ event.preventDefault(); window.triggerRoadSearch(); }}"
                   placeholder="Ej: Bariloche, Bustillo km 5 Bariloche, Villa Gral. Belgrano..."
                   class="w-full px-4 py-3 rounded-xl text-sm font-bold dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all">
          </div>

          <!-- 3. Botón de Búsqueda y Actualización de Hoja de Ruta -->
          <div class="md:col-span-2 flex items-end">
            <button id="fb-road-search-btn" type="button" onclick="window.triggerRoadSearch()"
                    class="w-full h-[46px] px-4 py-3 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 active:scale-95 shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer">
              <span>🔍</span>
              <span>Buscar</span>
            </button>
          </div>
        </div>

        <!-- Fila 2: Parámetros del Vehículo y Gastos -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <!-- Combustible / Motor -->
          <div>
            <label for="fb-road-fuel" class="block text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-2">
              ⛽ Combustible / Motor
            </label>
            <select id="fb-road-fuel" onchange="window.triggerRoadSearch()"
                    class="w-full px-4 py-3 rounded-xl text-sm font-bold dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all">
              <option value="nafta">⛽ Nafta Súper / Infinia</option>
              <option value="diesel">🛢️ Diésel Premium</option>
              <option value="gnc">🔵 GNC (Gas Natural)</option>
              <option value="electrico">⚡ Eléctrico / Híbrido</option>
            </select>
          </div>

          <!-- Tipo de Vehículo -->
          <div>
            <label for="fb-road-veh" class="block text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-2">
              🚘 Tipo de Vehículo
            </label>
            <select id="fb-road-veh" onchange="window.triggerRoadSearch()"
                    class="w-full px-4 py-3 rounded-xl text-sm font-bold dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all">
              <option value="compacto">🚗 Auto Compacto (-15%)</option>
              <option value="sedan" selected="selected">🚘 Sedán / Mediano</option>
              <option value="suv">🚙 SUV / Rural (+18%)</option>
              <option value="pickup">🛻 Pickup / 4x4 (+38%)</option>
            </select>
          </div>

          <!-- Cantidad de Viajeros -->
          <div>
            <label for="fb-road-pax" class="block text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-2">
              👥 Dividir Gastos
            </label>
            <select id="fb-road-pax" onchange="window.triggerRoadSearch()"
                    class="w-full px-4 py-3 rounded-xl text-sm font-bold dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all">
              <option value="1">1 Viajero (Solo)</option>
              <option value="2" selected="selected">2 Viajeros (Pareja)</option>
              <option value="3">3 Viajeros</option>
              <option value="4">4 Viajeros (Familia)</option>
              <option value="5">5 Viajeros (Auto lleno)</option>
            </select>
          </div>
        </div>

        <!-- Chips de Acceso Rápido a Destinos Frecuentes -->
        <div class="mt-4 pt-3 border-t dark:border-slate-800 border-slate-200 flex items-center gap-2 overflow-x-auto text-xs pb-1">
          <span class="text-slate-400 font-bold whitespace-nowrap">Rutas rápidas:</span>
          <button type="button" onclick="window.setQuickDest('Bariloche')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">🏔️ Bariloche</button>
          <button type="button" onclick="window.setQuickDest('Villa General Belgrano')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">🏞️ Villa Gral. Belgrano</button>
          <button type="button" onclick="window.setQuickDest('Mendoza')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">🍷 Mendoza</button>
          <button type="button" onclick="window.setQuickDest('Mar del Plata')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">🏖️ Mar del Plata</button>
          <button type="button" onclick="window.setQuickDest('Tandil')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">⛰️ Tandil</button>
          <button type="button" onclick="window.setQuickDest('San Martín de los Andes')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">🌲 San Martín</button>
          <button type="button" onclick="window.setQuickDest('Puerto Iguazú')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">🌴 Cataratas</button>
          <button type="button" onclick="window.setQuickDest('Florianópolis')" class="px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-700 whitespace-nowrap transition-all">🇧🇷 Florianópolis</button>
        </div>

        <!-- Contenedor con Efecto Escénico Discreto al Buscar -->
        <div id="fb-road-results-container" class="transition-all duration-300 ease-out">
          <!-- Cabecera Dinámica del Corredor y Semáforo Vial -->
        <div id="fb-road-semaforo-box" class="mt-6 p-5 rounded-2xl border transition-all">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
            <div>
              <div class="flex items-center gap-2.5 flex-wrap">
                <span id="fb-road-semaforo-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide text-white shadow-sm">
                  🔴 Semáforo Vial
                </span>
                <span id="fb-road-corredor-title" class="text-sm sm:text-base font-extrabold dark:text-white text-slate-900">
                  Corredor Vial
                </span>
              </div>
            </div>
            <div class="flex items-center gap-4 text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800 flex-wrap">
              <span id="fb-road-dist-badge" class="px-3 py-1.5 rounded-xl dark:bg-slate-900/90 bg-white border dark:border-slate-700 border-slate-200">
                📏 ~1.580 km (Ida)
              </span>
              <span id="fb-road-time-badge" class="px-3 py-1.5 rounded-xl dark:bg-slate-900/90 bg-white border dark:border-slate-700 border-slate-200">
                ⏱️ ~18h 35m de manejo
              </span>
            </div>
          </div>
          <p id="fb-road-semaforo-desc" class="text-xs sm:text-sm dark:text-slate-200 text-slate-700 leading-relaxed"></p>
          <div id="fb-road-alertas-criticas" class="mt-3 space-y-2 text-xs sm:text-sm"></div>
        </div>

        <!-- Termómetro Comunitario de Asfalto (Un billar / Buena / Baches / Destruida) -->
        <div id="fb-road-community-box" class="mt-6 p-6 rounded-3xl dark:bg-slate-950/80 bg-slate-50 border dark:border-slate-800 border-slate-200 transition-all">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                  🗣️ Termómetro Comunitario
                </span>
                <span id="fb-road-comm-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Cargando reportes...
                </span>
              </div>
              <h4 class="text-base sm:text-lg font-extrabold dark:text-white text-slate-900">
                ¿Cómo está el asfalto según los conductores que viajaron?
              </h4>
              <p id="fb-road-comm-desc" class="text-xs sm:text-sm dark:text-slate-400 text-slate-600 mt-0.5">
                Votos reales de la comunidad: si la ruta es un billar o está hecha pelota.
              </p>
            </div>

            <!-- Botones de Voto Rápido 1-Touch -->
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs font-bold text-slate-400 mr-1 hidden sm:inline">Tu voto:</span>
              <button type="button" onclick="window.submitRoadFeedbackQuick('billar')" title="Asfalto impecable"
                      class="px-3 py-2 rounded-xl text-xs font-extrabold dark:bg-slate-900 bg-white hover:bg-emerald-500/20 hover:text-emerald-500 border dark:border-slate-700 border-slate-200 transition-all flex items-center gap-1.5 shadow-sm">
                <span>🎱</span><span>Un billar</span>
              </button>
              <button type="button" onclick="window.submitRoadFeedbackQuick('buena')" title="Transitable normal"
                      class="px-3 py-2 rounded-xl text-xs font-extrabold dark:bg-slate-900 bg-white hover:bg-green-500/20 hover:text-green-500 border dark:border-slate-700 border-slate-200 transition-all flex items-center gap-1.5 shadow-sm">
                <span>🟢</span><span>Buena</span>
              </button>
              <button type="button" onclick="window.submitRoadFeedbackQuick('precaucion')" title="Baches aislados / Obras"
                      class="px-3 py-2 rounded-xl text-xs font-extrabold dark:bg-slate-900 bg-white hover:bg-amber-500/20 hover:text-amber-500 border dark:border-slate-700 border-slate-200 transition-all flex items-center gap-1.5 shadow-sm">
                <span>🟡</span><span>Baches</span>
              </button>
              <button type="button" onclick="window.submitRoadFeedbackQuick('destruida')" title="Cráteres / Destruida"
                      class="px-3 py-2 rounded-xl text-xs font-extrabold dark:bg-slate-900 bg-white hover:bg-rose-500/20 hover:text-rose-500 border dark:border-slate-700 border-slate-200 transition-all flex items-center gap-1.5 shadow-sm">
                <span>💥</span><span>Destruida</span>
              </button>
            </div>
          </div>

          <!-- Barra de distribución porcentual -->
          <div class="space-y-1.5 mb-4">
            <div class="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
              <div id="fb-bar-billar" class="bg-emerald-500 h-full transition-all" style="width: 50%" title="Un billar"></div>
              <div id="fb-bar-buena" class="bg-green-500 h-full transition-all" style="width: 25%" title="Buena"></div>
              <div id="fb-bar-precaucion" class="bg-amber-500 h-full transition-all" style="width: 15%" title="Precaución"></div>
              <div id="fb-bar-destruida" class="bg-rose-500 h-full transition-all" style="width: 10%" title="Destruida"></div>
            </div>
            <div class="flex items-center justify-between text-[11px] font-bold dark:text-slate-400 text-slate-500 flex-wrap gap-2">
              <span class="text-emerald-500">🎱 Billar: <span id="fb-pct-billar">0%</span></span>
              <span class="text-green-500">🟢 Buena: <span id="fb-pct-buena">0%</span></span>
              <span class="text-amber-500">🟡 Baches: <span id="fb-pct-precaucion">0%</span></span>
              <span class="text-rose-500">💥 Destruida: <span id="fb-pct-destruida">0%</span></span>
              <span class="text-slate-400">Total: <span id="fb-total-votos">0</span> votos</span>
            </div>
          </div>

          <!-- Mini formulario para advertencia o comentario puntual -->
          <div id="fb-road-comment-form" class="p-3.5 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 mb-3">
            <div class="flex flex-col sm:flex-row gap-2">
              <input id="fb-comm-input-text" type="text" maxlength="240"
                     placeholder="¿Querés sumar una advertencia puntual? Ej: 'Km 140 pozos en mano norte' (Opcional)"
                     class="flex-1 px-3.5 py-2 rounded-xl text-xs dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none">
              <input id="fb-comm-input-autor" type="text" maxlength="30"
                     placeholder="Tu nombre / Auto (Opcional)"
                     class="w-full sm:w-48 px-3.5 py-2 rounded-xl text-xs dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none">
              <button type="button" onclick="window.submitRoadCommentWithCurrentVote()"
                      class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow transition-all hover:brightness-110 whitespace-nowrap"
                      style="background-color: var(--brand-primary);">
                Enviar Reseña 🚀
              </button>
            </div>
            <div id="fb-comm-msg" class="hidden text-xs font-semibold mt-2"></div>
          </div>

          <!-- Muro de Reseñas de Conductores Recientes -->
          <div id="fb-road-reviews-list" class="space-y-2 text-xs"></div>
        </div>
      </div>

      <!-- Rejilla Principal de Información Vial (Presupuesto + Horarios 24hs + Barrera Sanitaria + Mascotas) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        <!-- Tarjeta 1: Presupuesto de Combustible, Peajes y Ahorro -->
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between theme-transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg sm:text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
                <span>💵</span>
                <span>Presupuesto Estimado (Ida y Vuelta)</span>
              </h3>
              <span id="fb-road-saving-pill" class="hidden text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                Ahorro GNC
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div class="p-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200">
                <div class="text-[11px] uppercase font-bold text-slate-500" id="fb-road-fuel-label">⛽ Combustible (I/V)</div>
                <div class="text-xl font-extrabold dark:text-white text-slate-900 mt-1" id="fb-road-fuel-cost">$0 ARS</div>
                <div class="text-xs dark:text-slate-400 text-slate-500 mt-0.5" id="fb-road-fuel-units">0 Litros</div>
              </div>
              <div class="p-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200">
                <div class="text-[11px] uppercase font-bold text-slate-500">🎟️ Peajes (Ida y Vuelta)</div>
                <div class="text-xl font-extrabold dark:text-white text-slate-900 mt-1" id="fb-road-tolls-cost">$0 ARS</div>
                <div class="text-xs dark:text-slate-400 text-slate-500 mt-0.5" id="fb-road-tolls-oneway">$0 por tramo</div>
              </div>
              <div class="p-4 rounded-2xl border" style="background-color: var(--brand-subtle); border-color: var(--brand-border);">
                <div class="text-[11px] uppercase font-bold" style="color: var(--brand-primary);">💰 Costo por Persona</div>
                <div class="text-xl font-extrabold dark:text-white text-slate-900 mt-1" id="fb-road-per-person">$0 ARS</div>
                <div class="text-xs dark:text-slate-300 text-slate-600 mt-0.5" id="fb-road-total-cost">Total: $0 ARS</div>
              </div>
            </div>

            <div class="p-4 rounded-2xl dark:bg-slate-950/70 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
              <div class="font-bold dark:text-white text-slate-900 mb-1">🎟️ Detalle de Peajes y TelePASE en este Corredor:</div>
              <p id="fb-road-tolls-detail"></p>
            </div>
          </div>

          <div class="mt-5 pt-4 border-t dark:border-slate-800 border-slate-200 flex flex-col sm:flex-row gap-3">
            <a id="fb-road-maps-btn" href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"
               class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:brightness-110"
               style="background-color: var(--brand-primary);">
              <span>🗺️</span>
              <span>Navegación GPS Puerta a Puerta (Google Maps / Waze)</span>
            </a>
            <button type="button" onclick="window.onSyncRoadTripClick()"
                    class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl dark:bg-slate-800 bg-slate-100 hover:dark:bg-slate-700 hover:bg-slate-200 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 font-bold text-xs sm:text-sm transition-all">
              <span>📲</span>
              <span id="fb-road-sync-label">Enviar Hoja de Ruta a mi Telegram</span>
            </button>
          </div>
        </div>

        <!-- Tarjeta 2: Horario Ideal de Salida, Estaciones 24 hs y Dónde Hacer Noche -->
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between theme-transition">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-lg sm:text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
                <span>⏰</span>
                <span>Horario Ideal de Salida &amp; Estaciones 24 hs</span>
              </h3>
              <span id="fb-road-departure-badge" class="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/15 text-amber-500 border border-amber-500/30">
                04:30 hs
              </span>
            </div>

            <div class="p-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs sm:text-sm leading-relaxed">
              <div class="font-bold dark:text-white text-slate-900 mb-1">🌅 ¿Por qué salir en este horario?</div>
              <p id="fb-road-departure-reason" class="dark:text-slate-300 text-slate-600"></p>
            </div>

            <div class="p-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 text-xs sm:text-sm leading-relaxed">
              <div class="font-bold dark:text-white text-slate-900 mb-1">⛽ Disponibilidad 24 hs de Estaciones de Servicio:</div>
              <p id="fb-road-stations-24h" class="dark:text-slate-300 text-slate-600"></p>
            </div>

            <div id="fb-road-overnight-box" class="hidden p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 text-xs sm:text-sm leading-relaxed">
              <div class="font-bold text-indigo-400 mb-1" id="fb-road-overnight-title">🛏️ Dónde Conviene Hacer Noche:</div>
              <p id="fb-road-overnight-desc" class="dark:text-slate-200 text-slate-700"></p>
            </div>
          </div>
        </div>

        <!-- Tarjeta 3: Barrera Sanitaria (Alimentos Prohibidos vs Permitidos) -->
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm theme-transition">
          <div class="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <h3 class="text-lg sm:text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
              <span>🍎</span>
              <span>Barrera Sanitaria y Alimentos en Ruta</span>
            </h3>
            <span id="fb-road-food-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30">
              SENASA / FUNBAPA
            </span>
          </div>
          <div class="space-y-3 text-xs sm:text-sm leading-relaxed">
            <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 dark:text-slate-200 text-slate-800" id="fb-road-food-prohibited"></div>
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 dark:text-slate-200 text-slate-800" id="fb-road-food-allowed"></div>
          </div>
        </div>

        <!-- Tarjeta 4: Viajar con Mascotas (Vacunas, Libreta Sanitaria, Río Negro y Parques) -->
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm theme-transition">
          <div class="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <h3 class="text-lg sm:text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
              <span>🐾</span>
              <span>Viajar con Mascotas (Vacunas y Controles)</span>
            </h3>
            <span id="fb-road-pets-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
              Requisitos Viales
            </span>
          </div>
          <div class="space-y-3 text-xs sm:text-sm leading-relaxed">
            <div class="p-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 dark:text-slate-200 text-slate-800" id="fb-road-pets-docs"></div>
            <div class="p-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-600" id="fb-road-pets-rules"></div>
          </div>
        </div>
      </div>

      <!-- Paradores y Estaciones Recomendadas con Km e Indicadores 24 hs / GNC / EV -->
      <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm theme-transition">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 class="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
              <span>☕</span>
              <span>Paradores y Estaciones Estratégicas en el Camino</span>
            </h3>
            <p class="text-xs sm:text-sm dark:text-slate-400 text-slate-500 mt-1">
              Paradas verificadas con baños limpios, tienda de descanso, disponibilidad 24 hs, GNC y cargadores eléctricos.
            </p>
          </div>
        </div>
        <div id="fb-road-stops-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </div>

      <!-- Puntos de Referencia YPF Full por Cartel de Ruta (Pueblo · Ruta · Km) -->
      <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 theme-transition">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 class="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
              <span>🪧</span>
              <span>Puntos de Referencia YPF Full en Cartelera (Pueblo · Ruta · Km)</span>
            </h3>
            <p class="text-xs sm:text-sm dark:text-slate-400 text-slate-500 mt-1">
              Guía táctica para el conductor: cuando veas en los carteles verdes de la ruta cuántos kilómetros faltan para estos pueblos, sabés con certeza que ahí tenés una YPF Full / ACA 24 hs sobre la traza.
            </p>
          </div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30 whitespace-nowrap self-start sm:self-auto">
            ⛽ Red 24 hs &amp; Baños
          </span>
        </div>
        <div id="fb-road-ypf-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"></div>
        </div> <!-- Fin fb-road-results-container -->
      </div>

      <!-- Descuentos y Promociones en Combustible y Tiendas: 3 Pestañitas Interactivas -->
      <div id="promos-combustible" class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 theme-transition">
        <div class="mb-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            💳 Ahorro en Surtidor y Cafetería 2026
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
            <span>🏷️</span>
            <span>Promociones por Marca: YPF + Full, Shell + Select y Axion + Spot!</span>
          </h3>
          <p class="text-xs sm:text-sm dark:text-slate-400 text-slate-500 mt-1">
            Tocá la flechita de cada bandera para desglosar sus descuentos en nafta/diésel, reintegros bancarios y combos de cafetería en ruta:
          </p>
        </div>

        <script>
          window.toggleFuelAccordion = function(brandId) {{
            var content = document.getElementById('fuel-content-' + brandId);
            var arrow = document.getElementById('fuel-arrow-' + brandId);
            if (!content) return;
            var isHidden = content.classList.contains('hidden');
            if (isHidden) {{
              content.classList.remove('hidden');
              if (arrow) arrow.style.transform = 'rotate(180deg)';
            }} else {{
              content.classList.add('hidden');
              if (arrow) arrow.style.transform = 'rotate(0deg)';
            }}
          }};
        </script>

        <div class="space-y-4">
          
          <!-- Pestaña 1: YPF + Full -->
          <div class="rounded-2xl border dark:border-slate-800 border-slate-200 overflow-hidden shadow-sm dark:bg-slate-950/60 bg-slate-50 theme-transition">
            <button type="button" onclick="window.toggleFuelAccordion('ypf')"
                    class="w-full px-5 py-4 flex items-center justify-between text-left text-white transition-all hover:brightness-105"
                    style="background: linear-gradient(135deg, #0284c7 0%, #1e3a8a 100%);">
              <div class="flex items-center gap-3">
                <span class="text-2xl">⛽</span>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h4 class="text-base sm:text-lg font-extrabold">YPF + Full</h4>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20 text-white border border-white/30">
                      App YPF 15% • Serviclub • Banco Santander &amp; Macro
                    </span>
                  </div>
                  <p class="text-xs text-white/85">Descuentos en Infinia, Infinia Diésel, GNC y combos de cafetería Full 24 hs.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-shrink-0 ml-2">
                <span class="text-xs font-bold bg-white/15 px-2.5 py-1 rounded-lg hidden sm:inline">Desglosar</span>
                <span id="fuel-arrow-ypf" class="text-base font-bold transition-transform duration-300" style="transform: rotate(180deg);">▼</span>
              </div>
            </button>
            <div id="fuel-content-ypf" class="p-5 space-y-3">
              <div id="fuel-grid-ypf" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
            </div>
          </div>

          <!-- Pestaña 2: Shell + Select -->
          <div class="rounded-2xl border dark:border-slate-800 border-slate-200 overflow-hidden shadow-sm dark:bg-slate-950/60 bg-slate-50 theme-transition">
            <button type="button" onclick="window.toggleFuelAccordion('shell')"
                    class="w-full px-5 py-4 flex items-center justify-between text-left text-white transition-all hover:brightness-105"
                    style="background: linear-gradient(135deg, #eab308 0%, #dc2626 100%);">
              <div class="flex items-center gap-3">
                <span class="text-2xl">🐚</span>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h4 class="text-base sm:text-lg font-extrabold">Shell + Select</h4>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20 text-white border border-white/30">
                      Shell BOX 10% • V-Power • Cencosud &amp; BNA
                    </span>
                  </div>
                  <p class="text-xs text-white/85">Combustibles premium V-Power, café de especialidad y paradores Select en autopista.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-shrink-0 ml-2">
                <span class="text-xs font-bold bg-white/15 px-2.5 py-1 rounded-lg hidden sm:inline">Desglosar</span>
                <span id="fuel-arrow-shell" class="text-base font-bold transition-transform duration-300">▼</span>
              </div>
            </button>
            <div id="fuel-content-shell" class="hidden p-5 space-y-3">
              <div id="fuel-grid-shell" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
            </div>
          </div>

          <!-- Pestaña 3: Axion + Spot! -->
          <div class="rounded-2xl border dark:border-slate-800 border-slate-200 overflow-hidden shadow-sm dark:bg-slate-950/60 bg-slate-50 theme-transition">
            <button type="button" onclick="window.toggleFuelAccordion('axion')"
                    class="w-full px-5 py-4 flex items-center justify-between text-left text-white transition-all hover:brightness-105"
                    style="background: linear-gradient(135deg, #701a75 0%, #e11d48 100%);">
              <div class="flex items-center gap-3">
                <span class="text-2xl">🔴</span>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h4 class="text-base sm:text-lg font-extrabold">Axion + Spot!</h4>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20 text-white border border-white/30">
                      App ON • Quantium • Modo &amp; Banco del Sol
                    </span>
                  </div>
                  <p class="text-xs text-white/85">Combustibles Quantium con Castrol, paradas gastronómicas Spot! y carga rápida.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-shrink-0 ml-2">
                <span class="text-xs font-bold bg-white/15 px-2.5 py-1 rounded-lg hidden sm:inline">Desglosar</span>
                <span id="fuel-arrow-axion" class="text-base font-bold transition-transform duration-300">▼</span>
              </div>
            </button>
            <div id="fuel-content-axion" class="hidden p-5 space-y-3">
              <div id="fuel-grid-axion" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal Elegante de Personalización de Hoja de Ruta (Nombre + Edad) -->
    <div id="fb-profile-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-all">
      <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 sm:p-7 max-w-sm w-full shadow-2xl">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base sm:text-lg font-extrabold dark:text-white text-slate-900 flex items-center gap-2">
            <span>👤</span><span>Personalizá tu Hoja de Ruta</span>
          </h3>
          <button type="button" onclick="window.closeProfileModal()" class="text-slate-400 hover:text-white text-lg font-bold leading-none">&times;</button>
        </div>
        <p class="text-xs dark:text-slate-400 text-slate-600 mb-4 leading-relaxed">
          ¿A nombre de quién emitimos tu hoja de ruta? Tu edad nos permite sugerirte beneficios etarios de combustible y seguros al volante.
        </p>
        <div class="space-y-3 mb-4">
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nombre Completo</label>
            <input id="fb-prof-modal-nombre" type="text" maxlength="50" placeholder="Ej: Gonzalo Pérez"
                   class="w-full px-3.5 py-2.5 rounded-xl text-xs dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Edad (Años)</label>
            <input id="fb-prof-modal-edad" type="number" min="12" max="100" placeholder="Ej: 34"
                   class="w-full px-3.5 py-2.5 rounded-xl text-xs dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 border dark:border-slate-700 border-slate-300 focus:outline-none">
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="window.submitProfileAndSync()"
                  class="flex-1 py-3 rounded-xl text-xs font-bold text-white shadow hover:brightness-110 transition-all"
                  style="background-color: var(--brand-primary);">
            Emitir y Sincronizar 🚀
          </button>
          <button type="button" onclick="window.skipProfileAndSync()"
                  class="px-3 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            Omitir
          </button>
        </div>
      </div>
    </div>
  </section>

  <script>
    (function() {{
      const FB_ROAD_KB = {kb_rutas_json};
      let _currentPromoBrand = 'todas';
      let _currentPromoType = 'todos';

      function fmtARS(n) {{
        return '$' + Math.round(Number(n || 0)).toLocaleString('es-AR') + ' ARS';
      }}

      window.setPromoBrandFilter = function(b) {{
        _currentPromoBrand = b;
        ['todas', 'ypf', 'shell', 'axion'].forEach(x => {{
          const btn = document.getElementById('pfilter-b-' + x);
          if (btn) {{
            if (x === b) {{
              btn.className = 'px-3 py-1.5 rounded-lg transition-all dark:bg-slate-800 bg-white shadow-sm dark:text-white text-slate-900';
            }} else {{
              btn.className = 'px-3 py-1.5 rounded-lg transition-all dark:text-slate-400 text-slate-600 hover:text-white';
            }}
          }}
        }});
        window.renderRoadPromos();
      }};

      window.setPromoTypeFilter = function(t) {{
        _currentPromoType = t;
        ['todos', 'combustible', 'tienda'].forEach(x => {{
          const btn = document.getElementById('pfilter-t-' + x);
          if (btn) {{
            if (x === t) {{
              btn.className = 'px-3 py-1.5 rounded-lg transition-all dark:bg-slate-800 bg-white shadow-sm dark:text-white text-slate-900';
            }} else {{
              btn.className = 'px-3 py-1.5 rounded-lg transition-all dark:text-slate-400 text-slate-600 hover:text-white';
            }}
          }}
        }});
        window.renderRoadPromos();
      }};

      window.renderRoadPromos = function() {{
        const ypfGrid = document.getElementById('fuel-grid-ypf');
        const shellGrid = document.getElementById('fuel-grid-shell');
        const axionGrid = document.getElementById('fuel-grid-axion');
        if (ypfGrid) ypfGrid.innerHTML = '';
        if (shellGrid) shellGrid.innerHTML = '';
        if (axionGrid) axionGrid.innerHTML = '';

        const promos = (typeof FB_ROAD_KB !== 'undefined' && FB_ROAD_KB.promociones_combustible) ? FB_ROAD_KB.promociones_combustible : [];
        promos.forEach(p => {{
          const card = document.createElement('div');
          card.className = 'p-5 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 flex flex-col justify-between gap-3 hover:border-slate-700 transition-all';
          const iconoMarca = p.marca_petrolera === 'YPF' ? '⛽' : (p.marca_petrolera === 'Shell' ? '🐚' : '🔴');
          const colorBadge = p.marca_petrolera === 'YPF' ? 'bg-sky-500/15 text-sky-400 border-sky-500/30' : (p.marca_petrolera === 'Shell' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' : 'bg-rose-500/15 text-rose-400 border-rose-500/30');
          const catBadge = p.categoria === 'combustible' ? '🛢️ Combustible' : ('☕ ' + (p.tienda_nombre || 'Tienda'));
          const dias = Array.isArray(p.dias_vigencia) ? p.dias_vigencia.join(', ') : (p.dias_vigencia || 'Todos los días');
          card.innerHTML =
            '<div>' +
              '<div class="flex items-center justify-between gap-2 mb-2">' +
                '<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ' + colorBadge + '">' + iconoMarca + ' ' + p.marca_petrolera + '</span>' +
                '<span class="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">' + catBadge + '</span>' +
              '</div>' +
              '<div class="font-bold text-sm dark:text-white text-slate-900 mb-1">' + p.entidad + '</div>' +
              '<div class="text-xs font-semibold text-emerald-500 dark:text-emerald-400 mb-2">' + p.descuento_texto + ' · ' + dias + '</div>' +
              '<div class="p-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 mb-2.5">' +
                '<div class="text-[11px] font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wide">🛡️ ' + p.tope_texto + '</div>' +
                '<div class="text-[11px] dark:text-slate-400 text-slate-500 mt-0.5">' + p.medio_pago + '</div>' +
              '</div>' +
              '<p class="text-xs dark:text-slate-300 text-slate-600 leading-relaxed mb-2">' + p.descripcion_corta + '</p>' +
            '</div>' +
            '<div class="text-[11px] p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">💡 <strong>Tip:</strong> ' + p.tip_viajero + '</div>';

          const brand = (p.marca_petrolera || '').toLowerCase();
          if (brand === 'ypf' && ypfGrid) ypfGrid.appendChild(card);
          else if (brand === 'shell' && shellGrid) shellGrid.appendChild(card);
          else if (brand === 'axion' && axionGrid) axionGrid.appendChild(card);
        }});
      }};

      window.triggerRoadSearch = async function() {{
        const btn = document.getElementById('fb-road-search-btn');
        const container = document.getElementById('fb-road-results-container');
        if (btn) {{
          btn.disabled = true;
          btn.innerHTML = '<span class="inline-block animate-pulse">⏳</span><span>Buscando...</span>';
        }}
        if (container) {{
          container.style.opacity = '0.25';
          container.style.transform = 'translateY(6px)';
          container.style.filter = 'blur(1px)';
          container.style.pointerEvents = 'none';
        }}

        // Retardo escénico discreto (~220ms) para percibir el recálculo fluido
        await new Promise(r => setTimeout(r, 220));

        try {{
          await window.updateFlightBotRoadPlanner();
        }} finally {{
          if (container) {{
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
            container.style.filter = 'none';
            container.style.pointerEvents = 'auto';
          }}
          if (btn) {{
            btn.disabled = false;
            btn.innerHTML = '<span>🔍</span><span>Buscar</span>';
          }}
        }}
      }};

      window.debouncedUpdateRoadPlanner = function() {{
        window.updateFlightBotRoadPlanner();
      }};

      window.setQuickDest = function(destName) {{
        const destInp = document.getElementById('fb-road-dest');
        if (destInp) {{
          destInp.value = destName;
          window.triggerRoadSearch();
        }}
      }};

      function _normalizarStr(s) {{
        return (s || '')
          .normalize('NFKD')
          .replace(/[\\u0300-\\u036f]/g, '')
          .toLowerCase()
          .replace(/[,.;:()\\[\\]"']/g, ' ')
          .replace(/\\s+/g, ' ')
          .trim();
      }}

      function _buscarNodoCliente(nombre) {{
        if (!nombre || !FB_ROAD_KB.nodos) return null;
        let t = _normalizarStr(nombre);
        t = t.replace(/^(?:ir a|viajar a|ruta a|camino a|hacia|hasta|para)\\s+/, '').trim();
        if (FB_ROAD_KB.nodos[t]) return FB_ROAD_KB.nodos[t];

        // 1. Si el usuario ingresó una dirección con coma o barra ("Pellegrini 1500, Rosario")
        const partes = nombre.split(/[,/]/).map(p => _normalizarStr(p)).filter(Boolean);
        if (partes.length > 1) {{
          const ult = partes[partes.length - 1];
          if (FB_ROAD_KB.nodos[ult]) return FB_ROAD_KB.nodos[ult];
          for (let k in FB_ROAD_KB.nodos) {{
            if (k.length >= 4 && (k === ult || ult.includes(k))) {{
              return FB_ROAD_KB.nodos[k];
            }}
          }}
        }}

        // 2. Si tiene sufijo provincial (solo si el resto es un nodo o si la provincia es capital)
        const sufijos = ['buenos aires', 'cordoba', 'santa fe', 'mendoza', 'rio negro', 'neuquen', 'salta', 'jujuy', 'misiones', 'entre rios', 'chubut'];
        for (let prov of sufijos) {{
          if (t.endsWith(' ' + prov) && t !== prov) {{
            const cand = t.substring(0, t.length - prov.length).trim();
            if (FB_ROAD_KB.nodos[cand]) return FB_ROAD_KB.nodos[cand];
            if (FB_ROAD_KB.nodos[prov]) return FB_ROAD_KB.nodos[prov];
          }}
        }}

        // 3. Coincidencia por palabra completa de nodos conocidos
        const keys = Object.keys(FB_ROAD_KB.nodos).sort((a,b) => b.length - a.length);
        for (let k of keys) {{
          if (k.length >= 4) {{
            const regex = new RegExp('\\b' + k + '\\b');
            if (regex.test(t)) {{
              return FB_ROAD_KB.nodos[k];
            }}
          }}
        }}
        for (let k of keys) {{
          if (k.length >= 4 && (k.includes(t) || (t.length >= 4 && t.includes(k)))) {{
            return FB_ROAD_KB.nodos[k];
          }}
        }}
        return null;
      }}

      function _distanciaVialClientSide(nOrig, nDest) {{
        const rad = Math.PI / 180.0;
        const lat1 = nOrig.lat * rad, lon1 = nOrig.lon * rad;
        const lat2 = nDest.lat * rad, lon2 = nDest.lon * rad;
        const dlat = lat2 - lat1, dlon = lon2 - lon1;
        const a = Math.sin(dlat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dlon/2)**2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const dRecta = 6371.0 * c;
        if (dRecta < 15) return 20;
        const mont = ['cordillera_sur', 'norte_noa', 'patagonia_sur'];
        const esMontana = mont.includes(nOrig.corredor) || mont.includes(nDest.corredor);
        let factor = 1.20;
        if (dRecta >= 800) {{
          factor = esMontana ? 1.14 : 1.18;
        }} else if (esMontana) {{
          factor = 1.25;
        }}
        return Math.round((dRecta * factor) / 5.0) * 5;
      }}

      window.updateFlightBotRoadPlanner = async function() {{
        const origInp = document.getElementById('fb-road-origin');
        const destInp = document.getElementById('fb-road-dest');
        const fuelSel = document.getElementById('fb-road-fuel');
        const vehSel = document.getElementById('fb-road-veh');
        const paxSel = document.getElementById('fb-road-pax');
        if (!destInp || !fuelSel || !vehSel || !paxSel) return;

        const origStr = (origInp && origInp.value) ? origInp.value.trim() : 'Buenos Aires';
        const destStr = destInp.value.trim() || 'Bariloche';
        const fuelKey = fuelSel.value || 'nafta';
        const vehKey = vehSel.value || 'sedan';
        const pax = Math.max(1, parseInt(paxSel.value || '2', 10));

        let base = null;

        // 1. Intento de consulta en vivo al backend de FlightBot (/api/ruta)
        if (window.location.protocol.startsWith('http')) {{
          try {{
            const apiUrl = '/api/ruta?origen=' + encodeURIComponent(origStr) +
                           '&destino=' + encodeURIComponent(destStr) +
                           '&combustible=' + encodeURIComponent(fuelKey) +
                           '&vehiculo=' + encodeURIComponent(vehKey) +
                           '&pasajeros=' + pax;
            const res = await fetch(apiUrl);
            if (res.ok) {{
              const data = await res.json();
              if (data && !data.error && data.distancia_km) {{
                base = data;
              }}
            }}
          }} catch (_) {{}}
        }}

        // 2. Fallback dinámico client-side (offline o file:///)
        if (!base) {{
          const destNorm = _normalizarStr(destStr);
          const origNorm = _normalizarStr(origStr);
          const nOrig = _buscarNodoCliente(origStr);
          const nDest = _buscarNodoCliente(destStr);

          // Identificar el corredor vial correspondiente al destino (o buscar en la KB de corredores)
          let cKey = (nDest && nDest.corredor) ? nDest.corredor : null;
          if (!cKey && FB_ROAD_KB.corredores) {{
            for (let ck in FB_ROAD_KB.corredores) {{
              const corr = FB_ROAD_KB.corredores[ck];
              if (corr.nombres && corr.nombres.some(n => destNorm.includes(n) || n.includes(destNorm))) {{
                cKey = ck;
                break;
              }}
            }}
          }}

          // Buscar plantilla en destinos registrados
          let plantilla = null;
          for (let k in FB_ROAD_KB.destinos) {{
            if (destNorm.includes(k) || k.includes(destNorm)) {{
              plantilla = FB_ROAD_KB.destinos[k];
              if (!cKey) cKey = plantilla.corredor_id;
              break;
            }}
          }}

          if (!cKey) {{
            cKey = (nOrig && nOrig.corredor) ? nOrig.corredor : 'centro_norte';
          }}

          // Si no hubo plantilla directa, buscar una plantilla representativa del mismo corredor
          if (!plantilla) {{
            for (let k in FB_ROAD_KB.destinos) {{
              if (FB_ROAD_KB.destinos[k].corredor_id === cKey) {{
                plantilla = FB_ROAD_KB.destinos[k];
                break;
              }}
            }}
          }}
          if (!plantilla) plantilla = FB_ROAD_KB.destinos['bariloche'] || {{}};

          const corrData = (FB_ROAD_KB.corredores && FB_ROAD_KB.corredores[cKey]) ? FB_ROAD_KB.corredores[cKey] : null;

          let distIda = 450;
          if (nOrig && nDest) {{
            distIda = _distanciaVialClientSide(nOrig, nDest);
          }} else if (origNorm === 'buenos aires' || origNorm === 'caba') {{
            distIda = Number(plantilla.distancia_km || 450);
          }}

          const fuelInfo = FB_ROAD_KB.combustibles[fuelKey] || FB_ROAD_KB.combustibles['nafta'];
          const naftaInfo = FB_ROAD_KB.combustibles['nafta'];
          const vehInfo = FB_ROAD_KB.vehiculos[vehKey] || FB_ROAD_KB.vehiculos['sedan'];

          const consumo100 = Math.round(fuelInfo.consumo_100 * vehInfo.factor_consumo * 10) / 10;
          const unidadesTotal = Math.round(((distIda / 100.0) * consumo100 * 2) * 10) / 10;
          const costoCombustible = Math.round(unidadesTotal * fuelInfo.precio_unidad);

          const naftaConsumo100 = naftaInfo.consumo_100 * vehInfo.factor_consumo;
          const naftaCostoTotal = ((distIda / 100.0) * naftaConsumo100 * 2) * naftaInfo.precio_unidad;
          const ahorroArs = Math.max(0, Math.round(naftaCostoTotal - costoCombustible));
          const ahorroPct = naftaCostoTotal > 0 ? Math.round((ahorroArs / naftaCostoTotal) * 100) : 0;

          // Adaptación contextual según el punto de partida real y el corredor de destino
          let rutaNombre = (corrData && corrData.ruta_principal) ? corrData.ruta_principal : (plantilla.ruta_nombre || 'Rutas Nacionales principales');
          let peajesDetalle = (corrData && corrData.peajes_detalle) ? corrData.peajes_detalle : (plantilla.peajes_detalle || '');
          let peajesIda = (corrData && corrData.peajes_estimados_ida) ? Number(corrData.peajes_estimados_ida) : Math.max(1500, Math.round((distIda / 400.0) * 3000));
          let hitosYpf = (plantilla.hitos_ypf_cartel && plantilla.hitos_ypf_cartel.length > 0)
            ? plantilla.hitos_ypf_cartel
            : ((corrData && corrData.hitos_ypf_cartel) ? corrData.hitos_ypf_cartel : []);
          let paradores = (plantilla.paradores && plantilla.paradores.length > 0)
            ? plantilla.paradores
            : ((corrData && corrData.paradores) ? corrData.paradores : []);
          let estadoRuta = (corrData && corrData.estado_ruta) ? Object.assign({{}}, corrData.estado_ruta) : Object.assign({{}}, plantilla.estado_ruta || {{}});
          let controlAlimentos = (corrData && corrData.control_alimentos) ? corrData.control_alimentos : (plantilla.control_alimentos || {{}});
          let requisitosMascotas = (corrData && corrData.requisitos_mascotas) ? corrData.requisitos_mascotas : (plantilla.requisitos_mascotas || {{}});
          let alertaDesierto = (corrData && corrData.alerta_desierto !== undefined) ? corrData.alerta_desierto : plantilla.alerta_desierto;
          let alertaFrontera = (corrData && corrData.alerta_frontera !== undefined) ? corrData.alerta_frontera : plantilla.alerta_frontera;
          let alertaGnc = (corrData && corrData.alerta_gnc !== undefined) ? corrData.alerta_gnc : plantilla.alerta_gnc;
          let horarioSalida = (corrData && corrData.horario_salida) ? corrData.horario_salida : (plantilla.horario_salida || {{}});
          let paradaNoche = (corrData && corrData.parada_noche !== undefined) ? corrData.parada_noche : plantilla.parada_noche;

          const esAmba = ['buenos aires', 'caba', 'capital federal', 'la plata', 'pilar', 'lujan', 'canuelas', 'campana', 'zarate'].includes(origNorm);
          const provOrig = (nOrig && nOrig.prov) ? nOrig.prov : '';
          const esSantaFe = provOrig === 'Santa Fe' || ['rosario', 'santa fe', 'rafaela', 'venado tuerto', 'firmat', 'casilda'].includes(origNorm);
          const esCordoba = provOrig === 'Córdoba' || ['cordoba', 'villa carlos paz', 'carlos paz', 'rio cuarto', 'villa maria', 'leones'].includes(origNorm);

          const esConsultaTramo152 = destNorm.includes('152') || destNorm.includes('casa de piedra') || origNorm.includes('152');
          if (esConsultaTramo152) {{
            estadoRuta = {{
              nivel: 'rojo',
              codigo_color: 'rojo',
              color_hex: '#dc2626',
              etiqueta: 'Rojo · RN 152 Colapsada (Desvío Obligatorio RP 20)',
              icono: '🔴',
              descripcion: 'El tramo de la RN 152 entre General Acha y Casa de Piedra se encuentra colapsado con cráteres profundos. Desvío obligatorio en Gral. Acha por RN 143 y RP 20 (Ruta del Desierto).'
            }};
          }} else if (cKey === 'cordillera_sur') {{
            estadoRuta = {{
              nivel: 'amarillo',
              codigo_color: 'amarillo',
              color_hex: '#ca8a04',
              etiqueta: 'Amarillo · Transitable con Precaución / Traza Recomendada por RP 20',
              icono: '🟡',
              descripcion: "Traza recomendada asfaltada y transitable por RP 20 ('Ruta del Desierto'). ⚠️ Desvío obligatorio: en General Acha evitar la RN 152 por Casa de Piedra (asfalto colapsado con cráteres); tomar RN 143 y RP 20 hacia 25 de Mayo. En RN 151 (Catriel a Barda del Medio, Río Negro) circular de día y a velocidad moderada (80 km/h) por baches y camiones petroleros. Desde Neuquén a Bariloche/SMA por RN 237 la calzada está en muy buen estado."
            }};
          }}

          if (!esAmba) {{
            if (esSantaFe) {{
              if (cKey === 'cordillera_sur') {{
                rutaNombre = 'RN 33 (Venado Tuerto - Rufino - Trenque Lauquen) ➔ RN 5 (Santa Rosa) ➔ RN 143 + RP 20 (Ruta del Desierto) ➔ RN 151 ➔ RN 22 / RN 237';
                peajesIda = 5000;
                peajesDetalle = 'RN 33 Corredores Viales (Venado Tuerto: ~$1.500) + RN 5 Trenque Lauquen ($1.500) + Cipolletti/Neuquén (~$2.000). Total estimado por tramo: ~$5.000 ARS (sin cabinas de peaje de Buenos Aires/AMBA).';
                hitosYpf = [
                  {{ pueblo_cartel: 'Venado Tuerto', nombre_estacion: 'YPF Full Venado Tuerto', ruta: 'RN 33 y RN 8', km_cartel: 'Km 170', gnc: true, ev: true }},
                  {{ pueblo_cartel: 'Rufino', nombre_estacion: 'YPF Full Rufino', ruta: 'RN 33 y RN 7', km_cartel: 'Km 265', gnc: true, ev: false }},
                  {{ pueblo_cartel: 'Trenque Lauquen', nombre_estacion: 'YPF Full Trenque Lauquen', ruta: 'RN 33 y RN 5', km_cartel: 'Km 490', gnc: true, ev: true }},
                  {{ pueblo_cartel: 'Santa Rosa (La Pampa)', nombre_estacion: 'YPF Full / ACA Santa Rosa', ruta: 'RN 5', km_cartel: 'Km 650', gnc: true, ev: true }},
                  {{ pueblo_cartel: 'General Acha (ANTES DEL DESIERTO)', nombre_estacion: 'YPF Full General Acha', ruta: 'RN 152 · Km 29', km_cartel: 'Km 765', gnc: true, ev: false }},
                  {{ pueblo_cartel: 'Chacharramendi', nombre_estacion: 'YPF ACA Chacharramendi', ruta: 'RN 143 / RP 20', km_cartel: 'Km 845', gnc: false, ev: false }},
                  {{ pueblo_cartel: '25 de Mayo / Catriel', nombre_estacion: 'YPF Full 25 de Mayo / Catriel', ruta: 'RP 20 / RN 151', km_cartel: 'Km 1040', gnc: false, ev: false }},
                  {{ pueblo_cartel: 'Cipolletti / Neuquén', nombre_estacion: 'YPF Full Cipolletti / Neuquén', ruta: 'RN 22', km_cartel: 'Km 1190', gnc: true, ev: true }},
                  {{ pueblo_cartel: 'Piedra del Águila', nombre_estacion: 'YPF Full Piedra del Águila', ruta: 'RN 237', km_cartel: 'Km 1445', gnc: false, ev: false }}
                ];
                paradores = [
                  {{ nombre: 'YPF Full Venado Tuerto (Santa Fe)', pueblo_cartel: 'Venado Tuerto', km: 'Km 170 (RN 33)', tipo: '☕ Primera Parada y GNC 24hs', icono: '🥐', abierto_24hs: true, tiene_gnc: true, cargador_electrico: true, descripcion: 'Estación moderna sobre la RN 33 con tienda Full 24 hs y descanso ágil.' }},
                  {{ nombre: 'Hotel ACA Santa Rosa + YPF Full (La Pampa)', pueblo_cartel: 'Santa Rosa', km: 'Km 650 del viaje', tipo: '🏨 Ideal para Hacer Noche', icono: '🛏️', abierto_24hs: true, tiene_gnc: true, cargador_electrico: true, descripcion: 'El punto clásico para almorzar o hacer noche a mitad de camino.' }},
                  {{ nombre: 'YPF Full General Acha (Antes del Desierto)', pueblo_cartel: 'General Acha', km: 'Km 765 del viaje', tipo: '🚨 Carga Obligatoria al 100%', icono: '⛽', abierto_24hs: true, tiene_gnc: true, cargador_electrico: false, descripcion: 'Llená el tanque acá antes de encarar la RP 20.' }},
                  {{ nombre: 'Puesto Barrera Sanitaria 25 de Mayo / Catriel', pueblo_cartel: '25 de Mayo', km: 'Km 1040 del viaje', tipo: '🛂 Barrera Sanitaria y Descuento Patagónico', icono: '🛡️', abierto_24hs: true, tiene_gnc: false, cargador_electrico: false, descripcion: 'Control fitosanitario al ingresar a Río Negro/Neuquén y nafta más barata.' }},
                  {{ nombre: 'Piedra del Águila (YPF Full / Shell Select)', pueblo_cartel: 'Piedra del Águila', km: 'Km 1445 del viaje', tipo: '🏔️ Portal de la Cordillera', icono: '☕', abierto_24hs: true, tiene_gnc: false, cargador_electrico: false, descripcion: 'Parada estratégica sobre la RN 237 antes de entrar a Bariloche o SMA.' }}
                ];
              }} else if (cKey === 'centro_norte') {{
                const esVGB = ['belgrano', 'calamuchita', 'reartes', 'cumbrecita'].some(w => destNorm.includes(w));
                rutaNombre = esVGB ? 'Autopista Rosario - Córdoba (RN 9) ➔ RP C-45 / Autovía RP 5 (Valle de Calamuchita)' : 'Autopista Rosario - Córdoba (RN 9)';
                peajesIda = 3500;
                peajesDetalle = 'RN 9 Corredores Viales (Carcarañá ~$1.500, James Craik ~$1.500) + Red de Accesos a Córdoba RAC (~$1.500). Sin peajes de Buenos Aires/AMBA. Total ida: ~$3.500 ARS.';
                hitosYpf = [
                  {{ pueblo_cartel: 'Carcarañá', nombre_estacion: 'YPF Full Carcarañá', ruta: 'Autopista RN 9', km_cartel: 'Km 48', gnc: false, ev: true }},
                  {{ pueblo_cartel: 'Leones', nombre_estacion: 'YPF Full Leones (Megaparador)', ruta: 'Autopista RN 9', km_cartel: 'Km 155', gnc: true, ev: true }},
                  {{ pueblo_cartel: 'Villa María', nombre_estacion: 'YPF Full Villa María', ruta: 'Autopista RN 9', km_cartel: 'Km 255', gnc: true, ev: true }},
                  {{ pueblo_cartel: 'Río Segundo / Pilar', nombre_estacion: 'YPF Full Río Segundo / Pilar', ruta: 'Autopista RN 9', km_cartel: 'Km 355', gnc: true, ev: false }},
                  {{ pueblo_cartel: 'Alta Gracia', nombre_estacion: 'YPF Full Alta Gracia', ruta: 'Autovía RP 5', km_cartel: 'Km 395', gnc: true, ev: false }}
                ];
                paradores = (plantilla.paradores || []).filter(p => !p.pueblo_cartel || (!p.pueblo_cartel.includes('San Pedro') && !p.ruta_corta.includes('Panamericana')));
              }} else if (cKey === 'cuyo') {{
                rutaNombre = 'RN 33 (hacia Rufino) ➔ RN 7 (Autopista Serranías Puntanas hacia San Luis y Mendoza)';
                peajesIda = 5500;
                peajesDetalle = 'RN 33 (Venado Tuerto: ~$1.500) + RN 7 (Vicuña Mackenna: ~$1.500) + Peajes San Luis y Desaguadero (~$2.500). Total ida: ~$5.500 ARS (sin cabinas de peaje de Buenos Aires/AMBA).';
                hitosYpf = (plantilla.hitos_ypf_cartel || []).filter(h => !h.pueblo_cartel.includes('Areco') && !h.pueblo_cartel.includes('Junín'));
                paradores = (plantilla.paradores || []).filter(p => !p.pueblo_cartel.includes('Junín'));
              }}
            }} else if (esCordoba && cKey === 'cordillera_sur') {{
              rutaNombre = 'RN 36 (Autovía Córdoba - Río Cuarto) ➔ RN 35 (Vicuña Mackenna - Realicó - Santa Rosa) ➔ RN 143 + RP 20 (Ruta del Desierto) ➔ RN 151 / RN 22 ➔ RN 237';
              peajesIda = 4500;
              peajesDetalle = 'Caminos de las Sierras (RN 36: ~$1.500) + Corredor RN 35 + Cipolletti/Neuquén (~$2.000). Sin peajes de PBA/AMBA. Total estimado por tramo: ~$4.500 ARS.';
              hitosYpf = [
                {{ pueblo_cartel: 'Río Cuarto', nombre_estacion: 'YPF Full Río Cuarto', ruta: 'Autovía RN 36', km_cartel: 'Km 215', gnc: true, ev: true }},
                {{ pueblo_cartel: 'Vicuña Mackenna', nombre_estacion: 'YPF Full Vicuña Mackenna', ruta: 'RN 35 y RN 7', km_cartel: 'Km 310', gnc: true, ev: false }},
                {{ pueblo_cartel: 'Santa Rosa (La Pampa)', nombre_estacion: 'YPF Full / ACA Santa Rosa', ruta: 'RN 35 y RN 5', km_cartel: 'Km 570', gnc: true, ev: true }},
                {{ pueblo_cartel: 'General Acha (ANTES DEL DESIERTO)', nombre_estacion: 'YPF Full General Acha', ruta: 'RN 152 · Km 29', km_cartel: 'Km 685', gnc: true, ev: false }},
                {{ pueblo_cartel: '25 de Mayo / Catriel', nombre_estacion: 'YPF Full 25 de Mayo', ruta: 'RP 20 / RN 151', km_cartel: 'Km 960', gnc: false, ev: false }},
                {{ pueblo_cartel: 'Cipolletti / Neuquén', nombre_estacion: 'YPF Full Cipolletti / Neuquén', ruta: 'RN 22', km_cartel: 'Km 1110', gnc: true, ev: true }},
                {{ pueblo_cartel: 'Piedra del Águila', nombre_estacion: 'YPF Full Piedra del Águila', ruta: 'RN 237', km_cartel: 'Km 1365', gnc: false, ev: false }}
              ];
              paradores = [
                {{ nombre: 'YPF Full Río Cuarto (Córdoba)', pueblo_cartel: 'Río Cuarto', km: 'Km 215 (RN 36)', tipo: '☕ Primera Parada y GNC 24hs', icono: '🥐', abierto_24hs: true, tiene_gnc: true, cargador_electrico: true, descripcion: 'Circunvalación de Río Cuarto antes de bajar hacia La Pampa por RN 35.' }},
                {{ nombre: 'Hotel ACA Santa Rosa (La Pampa)', pueblo_cartel: 'Santa Rosa', km: 'Km 570 del viaje', tipo: '🏨 Ideal para Hacer Noche', icono: '🛏️', abierto_24hs: true, tiene_gnc: true, cargador_electrico: true, descripcion: 'Parada para descansar a mitad de camino Córdoba-Bariloche.' }},
                {{ nombre: 'YPF Full General Acha (Antes del Desierto)', pueblo_cartel: 'General Acha', km: 'Km 685 del viaje', tipo: '🚨 Carga Obligatoria al 100%', icono: '⛽', abierto_24hs: true, tiene_gnc: true, cargador_electrico: false, descripcion: 'Llená el tanque acá antes de encarar la RP 20.' }},
                {{ nombre: 'Puesto Barrera Sanitaria 25 de Mayo', pueblo_cartel: '25 de Mayo', km: 'Km 960 del viaje', tipo: '🛂 Barrera Sanitaria y Descuento', icono: '🛡️', abierto_24hs: true, tiene_gnc: false, cargador_electrico: false, descripcion: 'Control fitosanitario de ingreso a Patagonia.' }},
                {{ nombre: 'Piedra del Águila (YPF Full / Shell)', pueblo_cartel: 'Piedra del Águila', km: 'Km 1365 del viaje', tipo: '🏔️ Portal de la Cordillera', icono: '☕', abierto_24hs: true, tiene_gnc: false, cargador_electrico: false, descripcion: 'Última gran parada antes de llegar a Bariloche.' }}
              ];
            }} else {{
              let rutaLimpia = (plantilla.ruta_nombre || '');
              ['Acceso Oeste ➔ ', 'Autopista Panamericana (RN 9) ➔ ', 'Autopista Bs.As.-La Plata ➔ '].forEach(m => {{
                rutaLimpia = rutaLimpia.replace(m, '');
              }});
              const origNombre = nOrig ? nOrig.nombre : origStr;
              const destNombre = nDest ? nDest.nombre : destStr;
              rutaNombre = 'Tramo ' + origNombre + ' ➔ ' + destNombre + ' (' + rutaLimpia + ')';
              peajesIda = Math.max(1500, Math.round((distIda / 800.0) * 4500));
              peajesDetalle = 'Cabinas troncales de peaje en ruta (~$' + peajesIda.toLocaleString('es-AR') + ' ARS por tramo). Sin peajes de CABA/AMBA.';
              hitosYpf = (plantilla.hitos_ypf_cartel || []).filter(h => !h.pueblo_cartel || !['Chivilcoy', '9 de Julio', 'Pehuajó', 'Chascomús', 'San Pedro', 'Zárate'].some(ex => h.pueblo_cartel.includes(ex)));
              paradores = (plantilla.paradores || []).filter(p => !p.pueblo_cartel || !['Chivilcoy', '9 de Julio', 'Pehuajó', 'Chascomús', 'San Pedro', 'Zárate'].some(ex => p.pueblo_cartel.includes(ex)));
            }}
          }} else {{
            peajesIda = Number(plantilla.peajes_ida_ars || 4500);
            peajesDetalle = plantilla.peajes_detalle || '';
            rutaNombre = plantilla.ruta_nombre || '';
          }}

          const peajesTotal = peajesIda * 2;
          const costoTotal = costoCombustible + peajesTotal;
          const costoPorPersona = Math.round(costoTotal / pax);

          const horasTot = distIda / 85.0;
          const hEnt = Math.floor(horasTot);
          const mEnt = Math.round((horasTot - hEnt) * 60);

          base = Object.assign({{}}, plantilla, {{
            origen: nOrig ? nOrig.nombre : origStr,
            destino: nDest ? nDest.nombre : destStr,
            corredor_id: cKey,
            ruta_nombre: rutaNombre,
            peajes_detalle: peajesDetalle,
            hitos_ypf_cartel: hitosYpf,
            paradores: paradores,
            estado_ruta: estadoRuta,
            control_alimentos: controlAlimentos,
            requisitos_mascotas: requisitosMascotas,
            alerta_desierto: alertaDesierto,
            alerta_frontera: alertaFrontera,
            alerta_gnc: alertaGnc,
            horario_salida: horarioSalida,
            parada_noche: paradaNoche,
            distancia_km: distIda,
            distancia_total_iv_km: distIda * 2,
            tiempo_estimado: hEnt + 'h ' + mEnt + 'm',
            costo_combustible_ars: costoCombustible,
            unidades_combustible_total: unidadesTotal,
            consumo_100_ajustado: consumo100,
            peajes_ida_ars: peajesIda,
            peajes_total_ars: peajesTotal,
            costo_total_ars: costoTotal,
            costo_por_persona_ars: costoPorPersona,
            ahorro_vs_nafta_ars: ahorroArs,
            ahorro_pct: ahorroPct,
            maps_url: 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(origStr.toLowerCase().includes('argentina') || origStr.toLowerCase().includes('brasil') ? origStr : (origStr + ', Argentina')) + '&destination=' + encodeURIComponent(destStr.toLowerCase().includes('argentina') || destStr.toLowerCase().includes('brasil') ? destStr : (destStr + ', Argentina')) + '&travelmode=driving',
          }});
        }}

        const fuelInfo = FB_ROAD_KB.combustibles[fuelKey] || FB_ROAD_KB.combustibles['nafta'];
        const vehInfo = FB_ROAD_KB.vehiculos[vehKey] || FB_ROAD_KB.vehiculos['sedan'];

        const distIda = Number(base.distancia_km || 400);
        const distTotal = Number(base.distancia_total_iv_km || (distIda * 2));
        const costoCombustible = Number(base.costo_combustible_ars || 0);
        const unidadesTotal = Number(base.unidades_combustible_total || 0);
        const consumo100 = Number(base.consumo_100_ajustado || (fuelInfo.consumo_100 * vehInfo.factor_consumo));
        const peajesIda = Number(base.peajes_ida_ars || 0);
        const peajesTotal = Number(base.peajes_total_ars || (peajesIda * 2));
        const costoTotal = Number(base.costo_total_ars || (costoCombustible + peajesTotal));
        const costoPorPersona = Number(base.costo_por_persona_ars || Math.round(costoTotal / pax));
        const ahorroArs = Number(base.ahorro_vs_nafta_ars || 0);
        const ahorroPct = Number(base.ahorro_pct || 0);

        // 1. Actualizar Semáforo Vial
        const est = base.estado_ruta || {{}};
        const semBox = document.getElementById('fb-road-semaforo-box');
        const semBadge = document.getElementById('fb-road-semaforo-badge');
        const corredorTitle = document.getElementById('fb-road-corredor-title');
        const distBadge = document.getElementById('fb-road-dist-badge');
        const timeBadge = document.getElementById('fb-road-time-badge');
        const semDesc = document.getElementById('fb-road-semaforo-desc');
        const alertasBox = document.getElementById('fb-road-alertas-criticas');

        const colorStyles = {{
          rojo: {{ bg: 'rgba(220, 38, 38, 0.10)', border: 'rgba(220, 38, 38, 0.35)', badge: '#dc2626' }},
          naranja: {{ bg: 'rgba(234, 88, 12, 0.10)', border: 'rgba(234, 88, 12, 0.35)', badge: '#ea580c' }},
          amarillo: {{ bg: 'rgba(202, 138, 4, 0.10)', border: 'rgba(202, 138, 4, 0.35)', badge: '#ca8a04' }},
          verde: {{ bg: 'rgba(22, 163, 74, 0.10)', border: 'rgba(22, 163, 74, 0.35)', badge: '#16a34a' }}
        }};
        const st = colorStyles[est.codigo_color] || colorStyles.verde;
        if (semBox) {{
          semBox.style.backgroundColor = st.bg;
          semBox.style.borderColor = st.border;
        }}
        if (semBadge) {{
          semBadge.style.backgroundColor = st.badge;
          semBadge.textContent = (est.icono || '🚦') + ' ' + (est.etiqueta || 'Estado Vial');
        }}
        if (corredorTitle) corredorTitle.textContent = '🛣️ ' + (base.ruta_nombre || '');
        if (distBadge) distBadge.textContent = '📏 ~' + distIda.toLocaleString('es-AR') + ' km ida (' + distTotal.toLocaleString('es-AR') + ' km I/V)';
        if (timeBadge) timeBadge.textContent = '⏱️ ~' + (base.tiempo_estimado || '') + ' por tramo';
        if (semDesc) semDesc.textContent = est.descripcion || '';

        if (alertasBox) {{
          let alertasHtml = '';
          if (base.alerta_desierto) {{
            alertasHtml += '<div class="p-3.5 rounded-xl dark:bg-slate-950/85 bg-white/90 border dark:border-slate-800 border-slate-200 leading-relaxed">' + base.alerta_desierto + '</div>';
          }}
          if (base.alerta_frontera) {{
            alertasHtml += '<div class="p-3.5 rounded-xl dark:bg-slate-950/85 bg-white/90 border dark:border-slate-800 border-slate-200 leading-relaxed">' + base.alerta_frontera + '</div>';
          }}
          if (base.alerta_gnc && (fuelKey === 'gnc' || base.alerta_gnc.indexOf('ATENCIÓN GNC') !== -1 || base.alerta_gnc.indexOf('SIN GNC') !== -1)) {{
            alertasHtml += '<div class="p-3.5 rounded-xl dark:bg-slate-950/85 bg-white/90 border dark:border-slate-800 border-slate-200 leading-relaxed">' + base.alerta_gnc + '</div>';
          }}
          alertasBox.innerHTML = alertasHtml;
        }}

        // 2. Actualizar Presupuesto
        const fuelLabel = document.getElementById('fb-road-fuel-label');
        const fuelCostEl = document.getElementById('fb-road-fuel-cost');
        const fuelUnitsEl = document.getElementById('fb-road-fuel-units');
        const tollsCostEl = document.getElementById('fb-road-tolls-cost');
        const tollsOnewayEl = document.getElementById('fb-road-tolls-oneway');
        const tollsDetailEl = document.getElementById('fb-road-tolls-detail');
        const perPersonEl = document.getElementById('fb-road-per-person');
        const totalCostEl = document.getElementById('fb-road-total-cost');
        const savingPill = document.getElementById('fb-road-saving-pill');
        const mapsBtn = document.getElementById('fb-road-maps-btn');

        if (fuelLabel) fuelLabel.textContent = fuelInfo.icono + ' ' + fuelInfo.nombre;
        if (fuelCostEl) fuelCostEl.textContent = fmtARS(costoCombustible);
        if (fuelUnitsEl) fuelUnitsEl.textContent = '~' + unidadesTotal + ' ' + fuelInfo.unidad + ' (' + consumo100 + ' ' + fuelInfo.unidad + '/100km)';
        if (tollsCostEl) tollsCostEl.textContent = fmtARS(peajesTotal);
        if (tollsOnewayEl) tollsOnewayEl.textContent = fmtARS(peajesIda) + ' por tramo';
        if (tollsDetailEl) tollsDetailEl.textContent = base.peajes_detalle || '';
        if (perPersonEl) perPersonEl.textContent = fmtARS(costoPorPersona);
        if (totalCostEl) totalCostEl.textContent = 'Total I/V: ' + fmtARS(costoTotal) + ' (' + pax + (pax === 1 ? ' viajero' : ' viajeros') + ')';
        if (savingPill) {{
          if (ahorroArs > 0 && fuelKey !== 'nafta') {{
            savingPill.classList.remove('hidden');
            savingPill.textContent = '💰 Ahorrás ' + fmtARS(ahorroArs) + ' (-' + ahorroPct + '% vs Nafta)';
          }} else {{
            savingPill.classList.add('hidden');
          }}
        }}
        if (mapsBtn && base.maps_url) mapsBtn.href = base.maps_url;

        // 3. Actualizar Horario Ideal y Estaciones 24 hs
        const hs = base.horario_salida || {{}};
        const depBadge = document.getElementById('fb-road-departure-badge');
        const depReason = document.getElementById('fb-road-departure-reason');
        const st24h = document.getElementById('fb-road-stations-24h');
        const overnightBox = document.getElementById('fb-road-overnight-box');
        const overnightTitle = document.getElementById('fb-road-overnight-title');
        const overnightDesc = document.getElementById('fb-road-overnight-desc');

        if (depBadge) depBadge.textContent = '⏰ Salir ' + (hs.hora_recomendada || '04:30 hs');
        if (depReason) depReason.textContent = hs.motivo || '';
        if (st24h) st24h.textContent = hs.estaciones_24hs_info || '';
        if (overnightBox) {{
          if (base.parada_noche && distIda >= 750) {{
            overnightBox.classList.remove('hidden');
            if (overnightTitle) overnightTitle.textContent = '🛏️ Dónde Hacer Noche (' + (base.parada_noche.km_desde_origen || '') + '): ' + (base.parada_noche.ciudad_recomendada || '');
            if (overnightDesc) overnightDesc.textContent = base.parada_noche.consejo || '';
          }} else {{
            overnightBox.classList.add('hidden');
          }}
        }}

        // 4. Actualizar Barrera Sanitaria (Alimentos)
        const ca = base.control_alimentos || {{}};
        const foodBadge = document.getElementById('fb-road-food-badge');
        const foodProh = document.getElementById('fb-road-food-prohibited');
        const foodAllow = document.getElementById('fb-road-food-allowed');
        if (foodBadge) {{
          foodBadge.textContent = ca.tiene_barrera ? '🛂 Barrera Sanitaria Activa' : '✅ Sin Decomiso de Alimentos';
          foodBadge.className = ca.tiene_barrera
            ? 'px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30'
            : 'px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30';
        }}
        if (foodProh) foodProh.innerHTML = '<strong>Organismo:</strong> ' + (ca.organismo || '') + '<br><br>' + (ca.prohibidos || '');
        if (foodAllow) foodAllow.innerHTML = ca.permitidos || '';

        // 5. Actualizar Mascotas
        const rm = base.requisitos_mascotas || {{}};
        const petsBadge = document.getElementById('fb-road-pets-badge');
        const petsDocs = document.getElementById('fb-road-pets-docs');
        const petsRules = document.getElementById('fb-road-pets-rules');
        if (petsBadge) petsBadge.textContent = rm.exigencia || 'Controles Viales';
        if (petsDocs) petsDocs.innerHTML = rm.documentacion || '';
        if (petsRules) petsRules.innerHTML = rm.transporte_y_playas || '';

        // 6. Actualizar Paradores
        const stopsGrid = document.getElementById('fb-road-stops-grid');
        if (stopsGrid) {{
          stopsGrid.innerHTML = '';
          (base.paradores || []).forEach(p => {{
            const card = document.createElement('div');
            card.className = 'p-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 flex flex-col justify-between gap-2';
            let badges = '';
            if (p.abierto_24hs) {{
              badges += '<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">🕒 24 hs</span>';
            }} else if (p.horario_atencion) {{
              badges += '<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">🕒 ' + p.horario_atencion + '</span>';
            }}
            if (p.tiene_gnc) {{
              badges += '<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">🔵 GNC</span>';
            }}
            if (p.cargador_electrico) {{
              badges += '<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30">⚡ Carga EV</span>';
            }}
            card.innerHTML =
              '<div>' +
                '<div class="flex items-start justify-between gap-2 mb-1">' +
                  '<div class="font-bold text-sm dark:text-white text-slate-900">' + (p.icono || '⛽') + ' ' + (p.nombre || '') + '</div>' +
                  '<span class="text-xs font-mono font-semibold dark:text-slate-400 text-slate-500 whitespace-nowrap">' + (p.km || '') + '</span>' +
                '</div>' +
                '<div class="text-xs font-semibold mb-2" style="color: var(--brand-primary);">' + (p.tipo || '') + '</div>' +
                '<p class="text-xs dark:text-slate-300 text-slate-600 leading-relaxed mb-3">' + (p.descripcion || '') + '</p>' +
              '</div>' +
              '<div class="flex items-center gap-1.5 flex-wrap">' + badges + '</div>';
            stopsGrid.appendChild(card);
          }});
        }}

        // 7. Actualizar Puntos de Referencia YPF Full por Cartel de Ruta
        const ypfGrid = document.getElementById('fb-road-ypf-grid');
        if (ypfGrid) {{
          ypfGrid.innerHTML = '';
          const hitos = base.hitos_ypf_cartel || [];
          if (hitos.length === 0) {{
            ypfGrid.innerHTML = '<div class="text-xs text-slate-500 italic p-3 col-span-full">Paradas YPF Full disponibles a lo largo de toda la traza troncal.</div>';
          }} else {{
            hitos.forEach(h => {{
              const pill = document.createElement('a');
              const stNombre = h.nombre_estacion || h.estacion || 'YPF Full';
              const kmTexto = h.km_cartel || (h.km ? ('Km ' + h.km) : '');
              const qMap = encodeURIComponent(stNombre + ' ' + (h.pueblo_cartel || ''));
              pill.href = 'https://www.google.com/maps/search/?api=1&query=' + qMap;
              pill.target = '_blank';
              pill.rel = 'noopener noreferrer';
              pill.className = 'flex items-center gap-2.5 p-3.5 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 hover:border-sky-500/50 hover:dark:bg-slate-900 transition-all text-xs';
              let extras = '';
              if (h.gnc) extras += '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/15 text-sky-400">GNC</span>';
              if (h.ev) extras += '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-500/15 text-purple-400">EV</span>';
              pill.innerHTML =
                '<div class="w-2.5 h-2.5 rounded-full bg-sky-500 flex-shrink-0"></div>' +
                '<div class="flex-1 min-w-0">' +
                  '<div class="font-bold dark:text-white text-slate-900 flex items-center justify-between gap-1">' +
                    '<span class="truncate">' + (h.pueblo_cartel || '') + '</span>' +
                    '<span class="text-sky-500 font-mono text-[11px] flex-shrink-0">' + kmTexto + '</span>' +
                  '</div>' +
                  '<div class="text-[11px] dark:text-slate-400 text-slate-500 truncate mt-0.5">' + stNombre + ' · ' + (h.ruta || '') + ' ' + extras + '</div>' +
                '</div>';
              ypfGrid.appendChild(pill);
            }});
          }}
        }}

        // 8. Actualizar Termómetro Comunitario y Reseñas de Asfalto
        window.loadRoadCommunityFeedback(origStr, destStr);
      }};

      let _currentRoadRating = 'billar';

      window.loadRoadCommunityFeedback = async function(orig, dest) {{
        const commBadge = document.getElementById('fb-road-comm-badge');
        const commDesc = document.getElementById('fb-road-comm-desc');
        const barBillar = document.getElementById('fb-bar-billar');
        const barBuena = document.getElementById('fb-bar-buena');
        const barPrec = document.getElementById('fb-bar-precaucion');
        const barDest = document.getElementById('fb-bar-destruida');
        const pctBillar = document.getElementById('fb-pct-billar');
        const pctBuena = document.getElementById('fb-pct-buena');
        const pctPrec = document.getElementById('fb-pct-precaucion');
        const pctDest = document.getElementById('fb-pct-destruida');
        const totalVotosEl = document.getElementById('fb-total-votos');
        const reviewsList = document.getElementById('fb-road-reviews-list');

        let data = null;
        if (window.location.protocol.startsWith('http')) {{
          try {{
            const res = await fetch('/api/ruta/feedback?origen=' + encodeURIComponent(orig) + '&destino=' + encodeURIComponent(dest));
            if (res.ok) {{
              data = await res.json();
            }}
          }} catch (_) {{}}
        }}

        if (!data) {{
          data = {{
            total_votos: 12,
            porcentajes: {{ billar: 55, buena: 25, precaucion: 15, destruida: 5 }},
            semaforo_comunitario: {{
              icono: '🎱',
              etiqueta: 'Comunidad: ¡Un Billar!',
              descripcion: 'El 55% de los conductores reporta asfalto óptimo para circular.',
              color_hex: '#10b981'
            }},
            comentarios: [
              {{ icono: '🎱', autor: 'Conductor Verificado', fecha_relativa: 'ayer', comentario: 'Asfalto en excelente estado, sin pozos y banquinas limpias.' }},
              {{ icono: '🟡', autor: 'Viajero Rutero', fecha_relativa: 'hace 3 días', comentario: 'Atención a reducciones de velocidad en empalmes.' }}
            ]
          }};
        }}

        const sem = data.semaforo_comunitario || {{}};
        const pct = data.porcentajes || {{ billar: 0, buena: 0, precaucion: 0, destruida: 0 }};
        const total = data.total_votos || 0;

        if (commBadge) {{
          commBadge.textContent = (sem.icono || '🛣️') + ' ' + (sem.etiqueta || 'Termómetro Activo');
          commBadge.style.color = sem.color_hex || '#10b981';
        }}
        if (commDesc) {{
          commDesc.textContent = sem.descripcion || 'Opiniones en tiempo real de la comunidad.';
        }}
        if (barBillar) barBillar.style.width = (pct.billar || 0) + '%';
        if (barBuena) barBuena.style.width = (pct.buena || 0) + '%';
        if (barPrec) barPrec.style.width = (pct.precaucion || 0) + '%';
        if (barDest) barDest.style.width = (pct.destruida || 0) + '%';

        if (pctBillar) pctBillar.textContent = (pct.billar || 0) + '%';
        if (pctBuena) pctBuena.textContent = (pct.buena || 0) + '%';
        if (pctPrec) pctPrec.textContent = (pct.precaucion || 0) + '%';
        if (pctDest) pctDest.textContent = (pct.destruida || 0) + '%';
        if (totalVotosEl) totalVotosEl.textContent = total;

        if (reviewsList) {{
          reviewsList.innerHTML = '';
          const comms = data.comentarios || [];
          if (comms.length === 0) {{
            reviewsList.innerHTML = '<div class="text-slate-400 italic py-1">Sin reseñas escritas aún para este tramo. ¡Sé el primero en dejar una!</div>';
          }} else {{
            comms.forEach(c => {{
              const row = document.createElement('div');
              row.className = 'p-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 flex items-start gap-2.5';
              row.innerHTML =
                '<span class="text-base flex-shrink-0">' + (c.icono || '💬') + '</span>' +
                '<div class="flex-1 min-w-0 leading-relaxed">' +
                  '<div class="flex items-center justify-between gap-1 text-[11px] mb-0.5">' +
                    '<span class="font-bold dark:text-slate-200 text-slate-800 truncate">' + (c.autor || 'Conductor') + '</span>' +
                    '<span class="text-slate-400 flex-shrink-0 font-mono">' + (c.fecha_relativa || '') + '</span>' +
                  '</div>' +
                  '<p class="dark:text-slate-300 text-slate-600 break-words">' + (c.comentario || '') + '</p>' +
                '</div>';
              reviewsList.appendChild(row);
            }});
          }}
        }}
      }};

      window.submitRoadFeedbackQuick = async function(calif) {{
        _currentRoadRating = calif;
        const origInp = document.getElementById('fb-road-origin');
        const destInp = document.getElementById('fb-road-dest');
        const orig = (origInp && origInp.value) ? origInp.value.trim() : 'Buenos Aires';
        const dest = (destInp && destInp.value) ? destInp.value.trim() : 'Bariloche';
        const msgEl = document.getElementById('fb-comm-msg');

        const califNombres = {{ billar: '¡Un billar! 🎱', buena: 'Buena / Normal 🟢', precaucion: 'Precaución / Baches 🟡', destruida: 'Hecha pelota 💥' }};
        const nombreCalif = califNombres[calif] || calif;

        if (window.location.protocol.startsWith('http')) {{
          try {{
            const res = await fetch('/api/ruta/feedback', {{
              method: 'POST',
              headers: {{ 'Content-Type': 'application/json' }},
              body: JSON.stringify({{ origen: orig, destino: dest, calificacion: calif }})
            }});
            const resData = await res.json();
            if (msgEl) {{
              msgEl.classList.remove('hidden');
              if (res.ok) {{
                msgEl.className = 'text-xs font-semibold text-emerald-500 mt-2';
                msgEl.textContent = '✅ ¡Voto registrado como ' + nombreCalif + '! Podés sumar una advertencia puntual abajo.';
              }} else {{
                msgEl.className = 'text-xs font-semibold text-amber-500 mt-2';
                msgEl.textContent = resData.error || 'Aviso de voto.';
              }}
              setTimeout(() => {{ if (msgEl) msgEl.classList.add('hidden'); }}, 4500);
            }}
          }} catch (_) {{}}
        }} else if (msgEl) {{
          msgEl.classList.remove('hidden');
          msgEl.className = 'text-xs font-semibold text-emerald-500 mt-2';
          msgEl.textContent = '✅ ¡Voto registrado como ' + nombreCalif + '! (Modo local)';
          setTimeout(() => {{ if (msgEl) msgEl.classList.add('hidden'); }}, 3500);
        }}

        window.loadRoadCommunityFeedback(orig, dest);
      }};

      window.submitRoadCommentWithCurrentVote = async function() {{
        const origInp = document.getElementById('fb-road-origin');
        const destInp = document.getElementById('fb-road-dest');
        const textInp = document.getElementById('fb-comm-input-text');
        const autorInp = document.getElementById('fb-comm-input-autor');
        const msgEl = document.getElementById('fb-comm-msg');

        const orig = (origInp && origInp.value) ? origInp.value.trim() : 'Buenos Aires';
        const dest = (destInp && destInp.value) ? destInp.value.trim() : 'Bariloche';
        const texto = textInp ? textInp.value.trim() : '';
        const autor = autorInp ? autorInp.value.trim() : '';

        if (!texto) {{
          if (msgEl) {{
            msgEl.classList.remove('hidden');
            msgEl.className = 'text-xs font-semibold text-amber-500 mt-2';
            msgEl.textContent = '⚠️ Por favor escribí un breve comentario o advertencia de la ruta.';
            setTimeout(() => {{ if (msgEl) msgEl.classList.add('hidden'); }}, 3000);
          }}
          return;
        }}

        if (window.location.protocol.startsWith('http')) {{
          try {{
            const res = await fetch('/api/ruta/feedback', {{
              method: 'POST',
              headers: {{ 'Content-Type': 'application/json' }},
              body: JSON.stringify({{
                origen: orig,
                destino: dest,
                calificacion: _currentRoadRating || 'buena',
                comentario: texto,
                autor: autor || 'Conductor'
              }})
            }});
            const resData = await res.json();
            if (msgEl) {{
              msgEl.classList.remove('hidden');
              if (res.ok) {{
                msgEl.className = 'text-xs font-semibold text-emerald-500 mt-2';
                msgEl.textContent = '🚀 ¡Reseña vial publicada con éxito en el muro!';
                if (textInp) textInp.value = '';
                if (autorInp) autorInp.value = '';
              }} else {{
                msgEl.className = 'text-xs font-semibold text-amber-500 mt-2';
                msgEl.textContent = resData.error || 'No se pudo publicar la reseña.';
              }}
              setTimeout(() => {{ if (msgEl) msgEl.classList.add('hidden'); }}, 4500);
            }}
          }} catch (_) {{}}
        }} else if (msgEl) {{
          msgEl.classList.remove('hidden');
          msgEl.className = 'text-xs font-semibold text-emerald-500 mt-2';
          msgEl.textContent = '🚀 ¡Reseña simulada con éxito! (Modo local)';
          if (textInp) textInp.value = '';
          setTimeout(() => {{ if (msgEl) msgEl.classList.add('hidden'); }}, 3500);
        }}

        window.loadRoadCommunityFeedback(orig, dest);
      }};

      window.onSyncRoadTripClick = function() {{
        const guardadoNom = localStorage.getItem('fb_viajero_nombre');
        const guardadoEdad = localStorage.getItem('fb_viajero_edad');
        if (guardadoNom && guardadoEdad) {{
          window.syncRoadTripToTelegram(guardadoNom, guardadoEdad);
        }} else {{
          const modal = document.getElementById('fb-profile-modal');
          if (modal) modal.classList.remove('hidden');
          else window.syncRoadTripToTelegram();
        }}
      }};

      window.closeProfileModal = function() {{
        const modal = document.getElementById('fb-profile-modal');
        if (modal) modal.classList.add('hidden');
      }};

      window.submitProfileAndSync = function() {{
        const nomInp = document.getElementById('fb-prof-modal-nombre');
        const edadInp = document.getElementById('fb-prof-modal-edad');
        const nom = nomInp ? nomInp.value.trim() : '';
        const edad = edadInp ? parseInt(edadInp.value, 10) : 30;

        if (nom) localStorage.setItem('fb_viajero_nombre', nom);
        if (edad) localStorage.setItem('fb_viajero_edad', edad);

        window.closeProfileModal();
        window.syncRoadTripToTelegram(nom, edad);
      }};

      window.skipProfileAndSync = function() {{
        window.closeProfileModal();
        window.syncRoadTripToTelegram();
      }};

      window.syncRoadTripToTelegram = async function(nombreViajero, edadViajero) {{
        const origInp = document.getElementById('fb-road-origin');
        const destInp = document.getElementById('fb-road-dest');
        const fuelSel = document.getElementById('fb-road-fuel');
        const vehSel = document.getElementById('fb-road-veh');
        const paxSel = document.getElementById('fb-road-pax');
        const lbl = document.getElementById('fb-road-sync-label');
        const orig = (origInp && origInp.value) ? origInp.value.trim() : 'Buenos Aires';
        const dest = (destInp && destInp.value) ? destInp.value.trim() : 'Bariloche';
        const fuel = fuelSel ? fuelSel.value : 'nafta';
        const veh = vehSel ? vehSel.value : 'sedan';
        const pax = paxSel ? parseInt(paxSel.value || '2', 10) : 2;

        const nom = nombreViajero || localStorage.getItem('fb_viajero_nombre') || '';
        const edad = edadViajero || localStorage.getItem('fb_viajero_edad') || '';

        if (window.location.protocol !== 'file:') {{
          try {{
            if (lbl) lbl.textContent = 'Enviando a Telegram...';
            const res = await fetch('/api/telegram/sync_ruta', {{
              method: 'POST',
              headers: {{ 'Content-Type': 'application/json' }},
              body: JSON.stringify({{
                destino: dest,
                origen: orig,
                combustible: fuel,
                vehiculo: veh,
                pasajeros: pax,
                nombre_viajero: nom,
                edad_viajero: edad
              }})
            }});
            if (res.ok) {{
              const data = await res.json();
              if (data && data.ok) {{
                if (lbl) lbl.textContent = '¡Enviado a tu Telegram! ✅';
                setTimeout(() => {{ if (lbl) lbl.textContent = 'Enviar Hoja de Ruta a mi Telegram'; }}, 3500);
                return;
              }}
            }}
          }} catch (_) {{}}
        }}
        if (lbl) lbl.textContent = 'Enviar Hoja de Ruta a mi Telegram';
        const slugRuta = encodeURIComponent((orig + ' a ' + dest).replace(/\\s+/g, '_'));
        window.open('https://t.me/GnZFlightBot?start=ruta_' + slugRuta, '_blank', 'noopener,noreferrer');
      }};

      window.loadRadarFollowersCounter = async function() {{
        const badge = document.getElementById('fb-radar-followers-badge');
        if (!badge) return;
        if (window.location.protocol.startsWith('http')) {{
          try {{
            const res = await fetch('/api/radar/stats');
            if (res.ok) {{
              const data = await res.json();
              if (data && data.texto_social_proof) {{
                badge.textContent = data.texto_social_proof;
              }}
            }}
          }} catch (_) {{}}
        }}
      }};

      document.addEventListener('DOMContentLoaded', function() {{
        window.updateFlightBotRoadPlanner();
        window.renderRoadPromos();
        window.loadRadarFollowersCounter();
      }});
    }})();
  </script>
<!-- FLIGHTBOT_ROAD_PLANNER_END -->"""


METADATOS_EDITORIALES = {
    "newyork": {
        "region": "América del Norte",
        "categoria": "Metrópolis, Broadway, Arte & Rascacielos",
        "mejor_epoca": "Abril a Junio y Septiembre a Noviembre",
        "tiempo_lectura": "10 min",
        "moneda": "Dólar Estadounidense (USD)",
        "idioma": "Inglés (con enorme presencia de español)",
        "perfil_viajero": "Parejas, cultura, amantes del teatro, compras y viajeros urbanos",
    },
    "shanghai": {
        "region": "Asia & Pacífico",
        "categoria": "Megaciudad Futurista, El Bund & Gastronomía",
        "mejor_epoca": "Septiembre a Noviembre (Otoño templado)",
        "tiempo_lectura": "10 min",
        "moneda": "Yuan Chino (CNY)",
        "idioma": "Chino Mandarín (apps de traducción recomendadas)",
        "perfil_viajero": "Viajeros curiosos, amantes de la arquitectura, tecnología y cultura oriental",
    },
    "rio": {
        "region": "América del Sur",
        "categoria": "Playa, Naturaleza & Vida Urbana",
        "mejor_epoca": "Noviembre a Abril (Verano tropical)",
        "tiempo_lectura": "8 min",
        "moneda": "Real Brasileño (BRL)",
        "idioma": "Portugués",
        "perfil_viajero": "Parejas, amigos, amantes de la playa y la cultura carioca",
    },
    "roma": {
        "region": "Europa",
        "categoria": "Historia, Arte Sacro & Trenes Alta Velocidad",
        "mejor_epoca": "Abril a Junio y Septiembre a Octubre",
        "tiempo_lectura": "9 min",
        "moneda": "Euro (EUR)",
        "idioma": "Italiano",
        "perfil_viajero": "Cultura, gastronomía, parejas y escapadas en tren",
    },
    "madrid": {
        "region": "Europa",
        "categoria": "Cultura, Gastronomía & Hub Ferroviario",
        "mejor_epoca": "Marzo a Junio y Septiembre a Noviembre",
        "tiempo_lectura": "8 min",
        "moneda": "Euro (EUR)",
        "idioma": "Español",
        "perfil_viajero": "Escapadas urbanas, museos, compras y conexión europea",
    },
    "miami": {
        "region": "América del Norte",
        "categoria": "Playas, Shopping, Arte & Hub Aéreo",
        "mejor_epoca": "Noviembre a Mayo (Clima templado y seco)",
        "tiempo_lectura": "7 min",
        "moneda": "Dólar Estadounidense (USD)",
        "idioma": "Inglés / Español extendido",
        "perfil_viajero": "Familias, compras, vida nocturna y conexiones al Caribe",
    },
    "cancun": {
        "region": "Caribe & México",
        "categoria": "Playas del Caribe, Cenotes & Arqueología Maya",
        "mejor_epoca": "Diciembre a Mayo (Temporada seca)",
        "tiempo_lectura": "8 min",
        "moneda": "Peso Mexicano (MXN) / Dólares (USD)",
        "idioma": "Español",
        "perfil_viajero": "Relax all-inclusive, snorkel, historia y vida nocturna",
    },
    "puntacana": {
        "region": "Caribe",
        "categoria": "All-Inclusive, Palmeras & Mar Turquesa",
        "mejor_epoca": "Diciembre a Abril",
        "tiempo_lectura": "7 min",
        "moneda": "Peso Dominicano (DOP) / Dólares (USD)",
        "idioma": "Español",
        "perfil_viajero": "Familias, parejas en luna de miel y descanso absoluto",
    },
    "aruba": {
        "region": "Caribe Holandés",
        "categoria": "Playas Pristinas & Clima Seguro (Fuera de Huracanes)",
        "mejor_epoca": "Todo el año (300+ días de sol constante)",
        "tiempo_lectura": "7 min",
        "moneda": "Florín de Aruba (AWG) / Dólares (USD)",
        "idioma": "Papiamento, Neerlandés, Español e Inglés",
        "perfil_viajero": "Turismo de lujo, tranquilidad, parejas y deportes náuticos",
    },
    "bariloche": {
        "region": "Argentina & Patagonia",
        "categoria": "Lagos Glaciares, Nieve, Chocolates & Rutas Escénicas",
        "mejor_epoca": "Julio a Septiembre (Nieve) / Diciembre a Marzo (Lagos y trekking)",
        "tiempo_lectura": "9 min",
        "moneda": "Peso Argentino (ARS)",
        "idioma": "Español",
        "perfil_viajero": "Aventura, familias, parejas y road trips cordilleranos",
    },
    "mendoza": {
        "region": "Argentina & Cuyo",
        "categoria": "Enoturismo, Alta Montaña, Bodegas & Gastronomía",
        "mejor_epoca": "Febrero a Mayo (Vendimia) / Octubre a Diciembre",
        "tiempo_lectura": "8 min",
        "moneda": "Peso Argentino (ARS)",
        "idioma": "Español",
        "perfil_viajero": "Amantes del vino, gastronomía gourmet y paisajes andinos",
    },
    "iguazu": {
        "region": "Argentina & Triple Frontera",
        "categoria": "Maravilla Natural del Mundo, Selva Subtropical & Biodiversidad",
        "mejor_epoca": "Marzo a Mayo y Agosto a Noviembre (Clima templado)",
        "tiempo_lectura": "8 min",
        "moneda": "Peso Argentino (ARS) / Real Brasileño (BRL)",
        "idioma": "Español / Portugués",
        "perfil_viajero": "Ecoturismo, familias, fotógrafos y amantes de la naturaleza",
    },
    "reikiavik": {
        "region": "Europa del Norte / Atlántico Norte",
        "categoria": "Naturaleza Ártica, Geotermia & Auroras Boreales",
        "mejor_epoca": "Junio a Agosto (Sol de Medianoche) u Octubre a Marzo (Auroras)",
        "tiempo_lectura": "9 min",
        "moneda": "Corona Islandesa (ISK)",
        "idioma": "Islandés / Inglés general",
        "perfil_viajero": "Aventura, paisajes volcánicos, road trips 4x4 y auroras boreales",
    },
    "oslo": {
        "region": "Escandinavia / Europa del Norte",
        "categoria": "Arquitectura, Fiordos & Cultura Nórdica",
        "mejor_epoca": "Mayo a Septiembre (Días largos) o Diciembre a Febrero (Nieve)",
        "tiempo_lectura": "8 min",
        "moneda": "Corona Noruega (NOK)",
        "idioma": "Noruego / Inglés fluido en toda la ciudad",
        "perfil_viajero": "Cultura, diseño, senderismo y escapadas en tren a fiordos",
    },
    "calafate": {       'categoria': 'Glaciares Milenarios, Hielo & Trekking de Montaña',
        'idioma': 'Español',
        'mejor_epoca': 'Octubre a Abril (Clima óptimo de trekking)',
        'moneda': 'Peso Argentino (ARS)',
        'perfil_viajero': 'Aventura, naturaleza salvaje, trekking y familias',
        'region': 'Argentina & Patagonia Austral',
        'tiempo_lectura': '9 min'},
    "jujuy": {       'categoria': 'Patrimonio UNESCO, Pueblos Andinos, Cerros de Colores & Salares',
        'idioma': 'Español',
        'mejor_epoca': 'Abril a Noviembre (Cielos diáfanos sin lluvias)',
        'moneda': 'Peso Argentino (ARS)',
        'perfil_viajero': 'Turismo cultural andino, fotografía, parejas y familias',
        'region': 'Argentina & Quebrada',
        'tiempo_lectura': '8 min'},
    "sanmartin": {       'categoria': 'Ruta de los 7 Lagos, Esquí en Chapelco & Playas Lacustres',
        'idioma': 'Español',
        'mejor_epoca': 'Julio a Septiembre (Esquí) o Diciembre a Marzo (Playas y lagos)',
        'moneda': 'Peso Argentino (ARS)',
        'perfil_viajero': 'Parejas, road trips escénicos, relax y familias',
        'region': 'Argentina & Patagonia Cordillerana',
        'tiempo_lectura': '8 min'},
    "madryn": {       'categoria': 'Avistamiento de Ballenas, Pingüinos & Santuario UNESCO',
        'idioma': 'Español',
        'mejor_epoca': 'Junio a Diciembre (Ballenas Francas Australes)',
        'moneda': 'Peso Argentino (ARS)',
        'perfil_viajero': 'Ecoturismo, amantes de la fauna marina, buceo y familias',
        'region': 'Argentina & Costa Patagónica',
        'tiempo_lectura': '8 min'},
    "neuquen": {       'categoria': 'Ruta del Vino Patagónico, Dinosaurios & Valles Frutales',
        'idioma': 'Español',
        'mejor_epoca': 'Octubre a Abril (Vendimia y paseos costeros)',
        'moneda': 'Peso Argentino (ARS)',
        'perfil_viajero': 'Turismo corporativo, enoturismo, paleontología y escapadas',
        'region': 'Argentina & Alto Valle',
        'tiempo_lectura': '7 min'},
    "salvador": {       'categoria': 'Cultura Afrobrasileña, Pelourinho, Playas & Gastronomía con Dendê',
        'idioma': 'Portugués',
        'mejor_epoca': 'Septiembre a Marzo (Temporada seca y Carnaval)',
        'moneda': 'Real Brasileño (BRL)',
        'perfil_viajero': 'Cultura viva, historia colonial, música y parejas',
        'region': 'Brasil & Nordeste',
        'tiempo_lectura': '8 min'},
    "recife": {       'categoria': 'Piscinas de Coral, Olinda Barroca, Historia Holandesa & Playas',
        'idioma': 'Portugués',
        'mejor_epoca': 'Septiembre a Febrero (Aguas cristalinas y pocas lluvias)',
        'moneda': 'Real Brasileño (BRL)',
        'perfil_viajero': 'Familias, turismo cultural, resorts all-inclusive y parejas',
        'region': 'Brasil & Nordeste',
        'tiempo_lectura': '8 min'},
    "maceio": {       'categoria': 'El Caribe Brasileño, Galés de Maragogi & Playas Esmeralda',
        'idioma': 'Portugués',
        'mejor_epoca': 'Septiembre a Marzo (Mar cristalino y sol pleno)',
        'moneda': 'Real Brasileño (BRL)',
        'perfil_viajero': 'Familias, luna de miel, relax de playa y ecoturismo',
        'region': 'Brasil & Alagoas',
        'tiempo_lectura': '8 min'},
    "natal": {       'categoria': 'Dunas Gigantes en Buggy, Delfines en Pipa & Clima Soleado',
        'idioma': 'Portugués',
        'mejor_epoca': 'Septiembre a Febrero (Sol garantizado y mar calmo)',
        'moneda': 'Real Brasileño (BRL)',
        'perfil_viajero': 'Aventura, familias, surfistas y parejas en Pipa',
        'region': 'Brasil & Rio Grande do Norte',
        'tiempo_lectura': '8 min'},
    "orlando": {       'categoria': 'Parques Temáticos Mundiales, Entretenimiento & Compras',
        'idioma': 'Inglés / Español muy frecuente',
        'mejor_epoca': 'Septiembre a Noviembre y Enero a Mayo (Clima templado)',
        'moneda': 'Dólar Estadounidense (USD)',
        'perfil_viajero': 'Familias con niños, fanáticos de Disney/Universal y compras',
        'region': 'Estados Unidos & Florida',
        'tiempo_lectura': '9 min'},
    "sanandres": {       'categoria': 'Mar de los 7 Colores, Buceo de Arrecife, Cayos & Reggae Raizal',
        'idioma': 'Español / Creole Sanandresano / Inglés',
        'mejor_epoca': 'Diciembre a Mayo (Temporada seca y mar como espejo)',
        'moneda': 'Peso Colombiano (COP)',
        'perfil_viajero': 'Amantes del mar, snorkel, parejas y descanso tropical',
        'region': 'Caribe Colombiano',
        'tiempo_lectura': '8 min'},
    "santiago": {       'categoria': 'Metrópolis Andina, Valle del Maipo, Sky Costanera & Esquí',
        'idioma': 'Español',
        'mejor_epoca': 'Octubre a Abril (Clima templado) o Julio a Septiembre (Esquí)',
        'moneda': 'Peso Chileno (CLP)',
        'perfil_viajero': 'Enoturismo, compras, escapadas andinas y turismo urbano',
        'region': 'Chile & Zona Central',
        'tiempo_lectura': '8 min'},
    "barcelona": {       'categoria': 'Modernismo de Gaudí, Costa Brava, Barrio Gótico & Playas',
        'idioma': 'Español / Catalán',
        'mejor_epoca': 'Mayo a Junio y Septiembre a Octubre',
        'moneda': 'Euro (EUR)',
        'perfil_viajero': 'Cultura, arquitectura, gastronomía mediterránea y parejas',
        'region': 'España & Cataluña',
        'tiempo_lectura': '8 min'},
    "paris": {       'categoria': 'La Ciudad de la Luz, Museos de Arte Universal & Bistrós',
        'idioma': 'Francés (Inglés extendido en turismo)',
        'mejor_epoca': 'Abril a Junio y Septiembre a Noviembre',
        'moneda': 'Euro (EUR)',
        'perfil_viajero': 'Romance, cultura, arte, compras y alta gastronomía',
        'region': 'Francia & Europa',
        'tiempo_lectura': '9 min'},
    "londres": {       'categoria': 'Museos Gratuitos, Monarquía Británica, West End & Parques',
        'idioma': 'Inglés',
        'mejor_epoca': 'Mayo a Septiembre (Días largos y templados)',
        'moneda': 'Libra Esterlina (GBP)',
        'perfil_viajero': 'Familias, cultura urbana, compras, teatro y amigos',
        'region': 'Reino Unido & Europa',
        'tiempo_lectura': '9 min'},
    "berlin": {       'categoria': 'Historia del Muro, Vanguardia Urbana, Museos UNESCO & Clubes',
        'idioma': 'Alemán (Inglés muy fluido en toda la ciudad)',
        'mejor_epoca': 'Mayo a Octubre (Clima templado y vida al aire libre)',
        'moneda': 'Euro (EUR)',
        'perfil_viajero': 'Jóvenes, historia del siglo XX, arte urbano y música',
        'region': 'Alemania & Europa Central',
        'tiempo_lectura': '8 min'},
    "frankfurt": {       'categoria': "Hub Financiero 'Mainhattan', Römerberg Histórico & Valle del Rin",
        'idioma': 'Alemán (Inglés universal)',
        'mejor_epoca': 'Mayo a Octubre (Terrazas sobre el Meno)',
        'moneda': 'Euro (EUR)',
        'perfil_viajero': 'Turismo corporativo, escalas aéreas, historia y trenes',
        'region': 'Alemania & Hesse',
        'tiempo_lectura': '7 min'},
    "atenas": {       'categoria': 'Cuna Clásica, La Acrópolis, Plaka Bohemia & Ferries a Islas',
        'idioma': 'Griego (Inglés muy generalizado)',
        'mejor_epoca': 'Abril a Junio y Septiembre a Noviembre',
        'moneda': 'Euro (EUR)',
        'perfil_viajero': 'Historia clásica, arqueología, parejas y conexión isleña',
        'region': 'Grecia & Mediterráneo',
        'tiempo_lectura': '8 min'},
    "tokio": {       'categoria': 'Megalópolis del Futuro, Templos Sintoístas, Shibuya & Shinkansen',
        'idioma': 'Japonés (Inglés en transporte y hoteles)',
        'mejor_epoca': 'Marzo a Mayo (Sakura) u Octubre a Noviembre (Momiji)',
        'moneda': 'Yen Japonés (JPY)',
        'perfil_viajero': 'Viajeros solos, tecnología, gastronomía de culto y parejas',
        'region': 'Japón & Asia',
        'tiempo_lectura': '9 min'},
    "elcairo": {       'categoria': 'Pirámides de Giza, Gran Museo Egipcio, Jan el-Jalili & El Nilo',
        'idioma': 'Árabe (Inglés y español en turismo)',
        'mejor_epoca': 'Octubre a Abril (Clima templado sin calor extremo)',
        'moneda': 'Libra Egipcia (EGP)',
        'perfil_viajero': 'Arqueología milenaria, misterio, fotografía y cultura',
        'region': 'Egipto & Norte de África',
        'tiempo_lectura': '9 min'},
    "marrakech": {       'categoria': 'La Ciudad Roja, Jemaa el-Fna, Riads de Azulejos & Desierto',
        'idioma': 'Árabe / Francés / Español',
        'mejor_epoca': 'Octubre a Mayo (Temperaturas agradables)',
        'moneda': 'Dírham Marroquí (MAD)',
        'perfil_viajero': 'Sensaciones sensoriales, parejas, compras exóticas y aventura',
        'region': 'Marruecos & Norte de África',
        'tiempo_lectura': '8 min'},
    "ciudaddelcabo": {       'categoria': 'Table Mountain, Pingüinos en Boulders, Cabo de Buena Esperanza & Vinos',
        'idioma': 'Inglés / Afrikáans / Xhosa',
        'mejor_epoca': 'Noviembre a Abril (Verano templado y atardeceres)',
        'moneda': 'Rand Sudafricano (ZAR)',
        'perfil_viajero': 'Naturaleza monumental, fauna marina, enoturismo y parejas',
        'region': 'Sudáfrica & África Austral',
        'tiempo_lectura': '9 min'},
}


def generar_html_guia(guia: dict) -> str:
    """Genera el código HTML completo para una guía de destino individual con soporte de tema dual y formato editorial."""
    ciudad = guia["ciudad"]
    pais = guia["pais"]
    icono = guia["icono"]
    slug = guia["slug"]
    aeropuertos = guia["aeropuertos"]
    resumen = guia["resumen"]
    img_url = guia["imagen_unsplash"]
    cmd_vuelo = guia["cmd_vuelo"]
    tip_ahorro = guia["tip_ahorro"]
    meta = METADATOS_EDITORIALES.get(guia["id"], {
        "region": pais,
        "categoria": "Guía de Viaje & Destino",
        "mejor_epoca": "Todo el año",
        "tiempo_lectura": "8 min",
        "moneda": "Moneda Local",
        "idioma": "Español",
        "perfil_viajero": "Viajeros independientes, parejas y familias",
    })

    # Generación de tarjetas de puntos turísticos
    puntos_html = ""
    for idx, (nombre, desc) in enumerate(guia["puntos_turisticos"], start=1):
        puntos_html += f"""
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 hover:shadow-lg dark:hover:border-slate-700 transition-all theme-transition shadow-sm">
          <div class="w-10 h-10 rounded-xl font-bold flex items-center justify-center mb-4 text-sm"
               style="background-color: var(--brand-subtle); border: 1px solid var(--brand-border); color: var(--brand-primary);">
            {idx}
          </div>
          <h3 class="text-xl font-bold dark:text-white text-slate-900 mb-2 theme-transition">{nombre}</h3>
          <p class="dark:text-slate-400 text-slate-600 text-sm leading-relaxed theme-transition">{desc}</p>
        </div>"""

    # Generación de tarjetas de Clima Habitual por Temporadas
    clima_html = ""
    if "clima_temporadas" in guia:
        estaciones_meta = [
            ("verano", "☀️ Verano", "border-amber-500/20 bg-amber-500/10 text-amber-500"),
            ("otono", "🍂 Otoño", "border-orange-500/20 bg-orange-500/10 text-orange-500"),
            ("invierno", "❄️ Invierno", "border-cyan-500/20 bg-cyan-500/10 text-cyan-500"),
            ("primavera", "🌸 Primavera", "border-rose-500/20 bg-rose-500/10 text-rose-500"),
        ]
        for k_est, nom_est, badge_cls in estaciones_meta:
            if k_est in guia["clima_temporadas"]:
                est_data = guia["clima_temporadas"][k_est]
                clima_html += f"""
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm theme-transition">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full border {badge_cls}">{nom_est}</span>
              <span class="text-xs font-semibold dark:text-slate-400 text-slate-500">{est_data['periodo']}</span>
            </div>
            <div class="text-lg font-extrabold dark:text-white text-slate-900 mb-2 font-mono" style="color: var(--brand-primary);">{est_data['temp_media']}</div>
            <p class="dark:text-slate-300 text-slate-600 text-sm leading-relaxed mb-4 theme-transition">{est_data['descripcion']}</p>
          </div>
          <div class="pt-3 border-t dark:border-slate-800 border-slate-200 text-xs">
            <span class="font-bold text-slate-500 uppercase tracking-wider block mb-1">Qué empacar:</span>
            <span class="dark:text-slate-400 text-slate-600 leading-relaxed">{est_data['ropa_recomendada']}</span>
          </div>
        </div>"""

    # Generación de bloque especial para Régimen Solar Nórdico
    luz_solar_html = ""
    bloque_enlace_luz_indice = ""
    if guia.get("horas_luz_solar"):
        hl = guia["horas_luz_solar"]
        bloque_enlace_luz_indice = """
        <a href="#horas-luz-solar" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xs font-bold">☀️</span>
          <span class="font-medium">Horas de Luz & Atardeceres</span>
        </a>"""
        luz_solar_html = f"""
    <section id="horas-luz-solar" class="mb-16 scroll-mt-24">
      <div class="rounded-3xl border dark:border-cyan-900/40 border-cyan-200 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 bg-gradient-to-br from-cyan-50/80 to-blue-50/80 p-6 sm:p-8 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b dark:border-slate-800 border-cyan-200/60">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🌅</span>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Régimen Solar Nórdico & Atardeceres</span>
              <h2 class="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900">Horas de Luz & Fenómenos Árticos</h2>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
            Factor Determinante en Itinerario
          </span>
        </div>
        <div class="grid sm:grid-cols-3 gap-5 mb-6">
          <div class="dark:bg-slate-900/90 bg-white/90 p-5 rounded-2xl border dark:border-slate-800 border-cyan-100 shadow-sm">
            <div class="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>☀️</span> Solsticio de Verano
            </div>
            <p class="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">{hl['solsticio_verano']}</p>
          </div>
          <div class="dark:bg-slate-900/90 bg-white/90 p-5 rounded-2xl border dark:border-slate-800 border-cyan-100 shadow-sm">
            <div class="text-xs font-bold text-cyan-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>🌌</span> Solsticio de Invierno
            </div>
            <p class="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">{hl['solsticio_invierno']}</p>
          </div>
          <div class="dark:bg-slate-900/90 bg-white/90 p-5 rounded-2xl border dark:border-slate-800 border-cyan-100 shadow-sm">
            <div class="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>⚖️</span> Primavera / Otoño
            </div>
            <p class="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">{hl['equinoccios']}</p>
          </div>
        </div>
        <div class="p-4 rounded-xl dark:bg-slate-950/70 bg-white/80 border dark:border-slate-800 border-cyan-200/50 flex items-start gap-3">
          <span class="text-xl">🧭</span>
          <p class="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
            <strong class="dark:text-white text-slate-900">Consejo clave para tu viaje:</strong> {hl['impacto_viajero']}
          </p>
        </div>
      </div>
    </section>"""

    # Generación de tarjetas de Gastronomía Típica
    gastronomia_html = ""
    for plato, desc in guia.get("gastronomia_tipica", []):
        gastronomia_html += f"""
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all theme-transition">
          <div class="flex items-center gap-3 mb-2.5">
            <span class="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center text-base">🍲</span>
            <h4 class="text-lg font-bold dark:text-white text-slate-900 theme-transition">{plato}</h4>
          </div>
          <p class="dark:text-slate-400 text-slate-600 text-sm leading-relaxed theme-transition">{desc}</p>
        </div>"""

    # Generación de escapadas / conexiones
    escapadas_html = ""
    for nombre, desc in guia["escapadas_conexiones"]:
        escapadas_html += f"""
        <div class="dark:bg-slate-900/80 bg-white border dark:border-slate-800/80 border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-sm theme-transition">
          <div class="flex items-center gap-3 mb-3">
            <span class="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <h4 class="text-lg font-bold dark:text-white text-slate-900 theme-transition">{nombre}</h4>
          </div>
          <p class="dark:text-slate-300 text-slate-600 text-sm leading-relaxed theme-transition">{desc}</p>
        </div>"""

    # Generación de comparativa de transporte
    transporte_html = ""
    for item in guia["transporte_comparativa"]:
        transporte_html += f"""
        <tr class="border-b dark:border-slate-800/80 border-slate-200 dark:hover:bg-slate-900/40 hover:bg-slate-50 transition-colors">
          <td class="py-4 px-4 font-semibold dark:text-white text-slate-900 flex items-center gap-2 theme-transition">
            <span class="w-2 h-2 rounded-full" style="background-color: var(--brand-primary);"></span>
            {item['medio']}
          </td>
          <td class="py-4 px-4 dark:text-slate-300 text-slate-600 text-sm theme-transition">{item['tiempo']}</td>
          <td class="py-4 px-4 text-emerald-600 dark:text-emerald-400 font-mono text-sm font-semibold">{item['costo']}</td>
          <td class="py-4 px-4 dark:text-slate-400 text-slate-600 text-sm leading-relaxed theme-transition">{item['veredicto']}</td>
        </tr>"""

    # Generación de zonas de alojamiento
    zonas_html = ""
    for zona, desc in guia["zonas_alojamiento"]:
        zonas_html += f"""
        <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm theme-transition">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-lg font-bold dark:text-white text-slate-900 theme-transition">{zona}</h4>
              <span class="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style="background-color: var(--brand-subtle); color: var(--brand-primary); border: 1px solid var(--brand-border);">
                Recomendado
              </span>
            </div>
            <p class="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4 theme-transition">{desc}</p>
          </div>
          <a href="https://t.me/GnZFlightBot" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center justify-center gap-2 text-xs font-bold py-2 rounded-lg transition-all hover:brightness-110"
             style="background-color: var(--brand-subtle); color: var(--brand-primary); border: 1px solid var(--brand-border);">
            Consultar Tarifas en Telegram &rarr;
          </a>
        </div>"""

    # Enlaces a otras guías
    otras_guias_html = ""
    for g_id, g_item in GUIAS_DESTINOS.items():
        if g_id != guia["id"]:
            otras_guias_html += f"""
            <a href="{g_item['slug']}.html" class="p-3 rounded-xl dark:bg-slate-900 bg-white hover:bg-slate-100 dark:hover:bg-slate-800 border dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 text-sm flex items-center gap-2 transition-all shadow-sm theme-transition">
              <span>{g_item['icono']}</span>
              <span class="font-medium dark:text-white text-slate-900">{g_item['ciudad']}</span>
            </a>"""

    # Generación de sección de Idioma y Comunicación para el Turista
    idioma_html = ""
    if "idioma" in guia and guia["idioma"]:
        idi = guia["idioma"]
        idioma_html = f"""
    <!-- Sección: Idioma y Comunicación para el Turista -->
    <section id="idioma-comunicacion" class="mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-lg">🗣️</div>
        <div>
          <h2 class="text-2xl font-bold dark:text-white text-slate-900 theme-transition">Idioma y Comunicación</h2>
          <p class="text-xs dark:text-slate-400 text-slate-500">Recomendaciones prácticas para moverte, ordenar y comunicarte en {guia['ciudad']}.</p>
        </div>
      </div>

      <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 shadow-sm theme-transition">
        <div class="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-blue-500 mb-1">Idioma Oficial</div>
            <div class="text-base font-bold dark:text-white text-slate-900 mb-3">{idi['oficial']}</div>
            <div class="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-1">Experiencia del Viajero &amp; Nivel de Inglés</div>
            <p class="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">{idi['comunicacion_turista']}</p>
          </div>
          <div class="p-4 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800 border-slate-200">
            <div class="flex items-center gap-2 text-xs font-bold text-amber-500 mb-2">
              <span>💡</span> Consejo de Cortesía y Convivencia
            </div>
            <p class="text-xs dark:text-slate-300 text-slate-600 leading-relaxed font-medium">
              {idi['consejo_util']}
            </p>
          </div>
        </div>
      </div>
    </section>
"""

        # Si es un destino nacional (Bariloche, Mendoza, Iguazú), incluir el Planificador de Ruta en Auto preseleccionado
    # Generación de bloque de Requisitos de Ingreso y Visas
    bloque_requisitos_html = ""
    if "requisitos_ingreso" in guia:
        req = guia["requisitos_ingreso"]
        bloque_requisitos_html = f"""
      <!-- Sección: Documentación y Requisitos de Ingreso Oficiales -->
      <section id="requisitos-visas" class="mb-16 scroll-mt-24">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white shadow-md flex-shrink-0"
               style="background: var(--brand-gradient);">
            🛂
          </div>
          <div>
            <h2 class="text-2xl font-bold dark:text-white text-slate-900 tracking-tight theme-transition">Documentación, Visas y Requisitos de Ingreso</h2>
            <p class="text-xs dark:text-slate-400 text-slate-500">Normativa migratoria oficial para viajar a {ciudad} ({pais})</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-5 shadow-sm theme-transition">
            <div class="flex items-center gap-2 mb-2 font-bold dark:text-slate-200 text-slate-800 text-sm">
              <span>📄</span>
              <span>Documento de Identidad / Pasaporte</span>
            </div>
            <p class="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed theme-transition">{req['documento_base']}</p>
          </div>
          <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-5 shadow-sm theme-transition">
            <div class="flex items-center gap-2 mb-2 font-bold dark:text-slate-200 text-slate-800 text-sm">
              <span>🛂</span>
              <span>Régimen de Visado de Turismo</span>
            </div>
            <p class="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed theme-transition">{req['visa_turismo']}</p>
          </div>
          <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-5 shadow-sm theme-transition md:col-span-2">
            <div class="flex items-center gap-2 mb-2 font-bold dark:text-slate-200 text-slate-800 text-sm">
              <span>🌐</span>
              <span>Exención de Visa y Autorizaciones Electrónicas</span>
            </div>
            <p class="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 theme-transition">{req['exencion_visas']}</p>
            <a href="{req['link_oficial_exencion']}" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl text-white shadow-md hover:opacity-95 transition-all"
               style="background: var(--brand-gradient);">
              <span>Ver Listado Oficial de Países Exentos / Trámite Electrónico</span>
              <span>↗</span>
            </a>
          </div>
          <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-5 shadow-sm theme-transition md:col-span-2">
            <div class="flex items-center gap-2 mb-2 font-bold dark:text-slate-200 text-slate-800 text-sm">
              <span>🏥</span>
              <span>Asistencia Médica y Seguro de Viaje</span>
            </div>
            <p class="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed theme-transition">{req['asistencia_medica']}</p>
          </div>
        </div>
      </section>"""

    bloque_ruta_guia = ""
    bloque_enlace_ruta_indice = ""
    if guia["id"] in ("bariloche", "mendoza", "iguazu"):
        bloque_ruta_guia = f"""
        <div id="planificador-ruta" class="scroll-mt-24 mb-16">
          {construir_bloque_planificador_rutas(destino_inicial=guia["id"], es_guia_interna=True)}
        </div>"""
        bloque_enlace_ruta_indice = """
        <a href="#planificador-ruta" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xs font-bold">6</span>
          <span class="font-medium">Planificador Vial & Nafta</span>
        </a>"""

    # Esquema JSON-LD BlogPosting estructurado
    schema_blog_posting = json.dumps({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": f"https://flightbot.com.ar/guias/{slug}.html"
        },
        "headline": f"Guía de Viaje a {ciudad} 2026: Qué Ver, Transporte, Barrios y Ahorro",
        "description": resumen,
        "image": [img_url],
        "datePublished": "2026-10-15T09:00:00+00:00",
        "dateModified": "2026-10-21T08:00:00+00:00",
        "author": {
            "@type": "Organization",
            "name": "Equipo Editorial de FlightBot",
            "url": "https://t.me/GnZFlightBot"
        },
        "publisher": {
            "@type": "Organization",
            "name": "FlightBot Travel Intelligence",
            "logo": {
                "@type": "ImageObject",
                "url": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=200&q=80"
            }
        },
        "articleSection": meta["categoria"],
        "inLanguage": "es"
    }, indent=2, ensure_ascii=False)

    return f"""<!DOCTYPE html>
<html lang="es" class="scroll-smooth dark" data-color="ruby">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guía de Viaje a {ciudad} 2026 · Puntos Turísticos, Transporte y Alojamiento | FlightBot</title>
  <meta name="description" content="Descubre qué ver en {ciudad}, cómo moverte en tren o avión, excursiones cercanas y las mejores zonas para alojarte según el equipo editorial de FlightBot.">
  <meta name="author" content="Equipo Editorial FlightBot">
  <meta name="publisher" content="FlightBot Travel Intelligence">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta property="og:locale" content="es_ES">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Guía de Viaje a {ciudad} 2026: Qué Ver, Transporte y Alojamiento">
  <meta property="og:description" content="{resumen}">
  <meta property="og:image" content="{img_url}">
  <meta property="article:published_time" content="2026-10-15T09:00:00+00:00">
  <meta property="article:modified_time" content="2026-10-21T08:00:00+00:00">
  <meta property="article:section" content="{meta['categoria']}">
  <meta property="article:tag" content="{ciudad}">
  <meta property="article:tag" content="Vuelos">
  <meta property="article:tag" content="Hoteles">
  <meta property="article:tag" content="Guía de Viaje">

  <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  {SHARED_THEME_HEAD}

  <script type="application/ld+json">
{schema_blog_posting}
  </script>
</head>
<body class="dark:bg-slate-950 dark:text-slate-100 bg-slate-50 text-slate-900 font-sans antialiased selection:bg-rose-600 selection:text-white theme-transition">

  <!-- Navegación Superior -->
  <header class="sticky top-0 z-50 backdrop-blur-md dark:bg-slate-950/80 bg-white/90 border-b dark:border-slate-800 border-slate-200 theme-transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
      <div class="flex items-center gap-3 shrink-0 z-10">
        <a href="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg text-white theme-transition"
               style="background: var(--brand-gradient); box-shadow: 0 10px 20px -5px var(--brand-glow);">
            <svg viewBox="0 0 40 40" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="37" rx="14" ry="2" fill="#000000" opacity="0.35"/>
              <rect x="23" y="19" width="12" height="16" rx="3" fill="url(#fbSuitcaseAlwaysRedNav)" stroke="#ffffff" stroke-width="0.8"/>
              <line x1="25" y1="23" x2="33" y2="23" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <line x1="25" y1="27" x2="33" y2="27" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <line x1="25" y1="31" x2="33" y2="31" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <circle cx="25.5" cy="36" r="1.3" fill="#1e293b" stroke="#ffffff" stroke-width="0.6"/>
              <circle cx="32.5" cy="36" r="1.3" fill="#1e293b" stroke="#ffffff" stroke-width="0.6"/>
              <path d="M26 19 V13 H32 V19" stroke="#cbd5e1" stroke-width="1.1" stroke-linecap="round"/>
              <rect x="27" y="11.5" width="4" height="1.8" rx="0.9" fill="#ffffff"/>
              <path d="M17 24 Q22 20 27 13" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/>
              <rect x="7" y="17" width="14" height="16" rx="7" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
              <rect x="10" y="22" width="8" height="6" rx="2" fill="#0f172a"/>
              <path d="M11 25 L12.5 23.5 L14 26 L15.5 24 L17 25" stroke="#10b981" stroke-width="0.8" stroke-linecap="round"/>
              <rect x="5.5" y="6" width="17" height="13" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
              <line x1="14" y1="6" x2="14" y2="2" stroke="#94a3b8" stroke-width="1.1" stroke-linecap="round"/>
              <circle cx="14" cy="1.8" r="1.6" fill="#e11d48"/>
              <circle cx="14" cy="1.8" r="3.2" stroke="#ffffff" stroke-width="0.5" stroke-dasharray="1 1" opacity="0.8"/>
              <rect x="8" y="9" width="12" height="6.5" rx="2.5" fill="#0f172a"/>
              <circle cx="11" cy="12.2" r="1.2" fill="#38bdf8"/>
              <circle cx="17" cy="12.2" r="1.2" fill="#38bdf8"/>
              <path d="M7 23 Q2 19 3 14" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/>
              <defs>
                <linearGradient id="fbSuitcaseAlwaysRedNav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#e11d48"/>
                  <stop offset="100%" stop-color="#be123c"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="text-2xl font-extrabold tracking-tight dark:text-white text-slate-900 theme-transition">
            FlightBot
          </span>
        </a>
      </div>

      <!-- Barra de Navegación Central Simétrica (Dock Centrado Matemáticamente) -->
      <nav class="hidden lg:flex items-center p-1 rounded-full dark:bg-slate-900/80 bg-slate-100/90 border dark:border-slate-800 border-slate-200/90 backdrop-blur-md shadow-sm gap-1">
        <a href="/" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🏠</span> Inicio
        </a>
        <a href="/billetera" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🧳</span> Billetera
        </a>
        <a href="/guias/" class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-150 flex items-center gap-1.5" style="color: var(--brand-primary); background-color: var(--brand-subtle); border-color: var(--brand-border);">
          <span>📖</span> Guías (45)
        </a>
        <a href="/#destinos" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🏨</span> Destinos
        </a>
        <a href="/escapadas" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🚗</span> En Ruta
        </a>
        <a href="/faq" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>❓</span> FAQ
        </a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3 shrink-0 z-10">
        {SHARED_HEADER_SWITCHER}

        <a href="https://t.me/GnZFlightBot" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all shadow-lg hover:brightness-110"
           style="background-color: var(--brand-primary); box-shadow: 0 10px 20px -5px var(--brand-glow);">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .36z"/>
          </svg>
          <span class="hidden sm:inline">Probar Bot en Telegram</span>
          <span class="sm:hidden">Bot</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs & Encabezado Principal -->
  <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <nav class="flex items-center gap-2 text-xs dark:text-slate-500 text-slate-500 mb-8 theme-transition" aria-label="Breadcrumb">
      <a href="/" class="dark:hover:text-slate-300 hover:text-slate-800">Inicio</a>
      <span>/</span>
      <a href="/guias/" class="dark:hover:text-slate-300 hover:text-slate-800">Blog de Viajes</a>
      <span>/</span>
      <span class="font-semibold" style="color: var(--brand-primary);">{ciudad}</span>
    </nav>

    <!-- Hero Card de la Guía Editorial -->
    <div class="relative rounded-3xl overflow-hidden border dark:border-slate-800 border-slate-200 dark:bg-slate-900 bg-white mb-12 shadow-2xl theme-transition">
      <div class="h-80 sm:h-96 relative">
        <img src="{img_url}" alt="{ciudad}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t dark:from-slate-900 dark:via-slate-900/60 from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute top-6 left-6">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-white shadow-lg">
            <span>{icono}</span> {pais}
          </span>
        </div>
      </div>

      <div class="p-8 sm:p-10 relative -mt-20 z-10">
        <!-- Badges de Categoría y Radar -->
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style="background-color: var(--brand-subtle); border: 1px solid var(--brand-border); color: var(--brand-primary);">
            <span>📰</span> Artículo Editorial · Guía Oficial 2026
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 border dark:border-slate-700 border-slate-300">
            <span>📍</span> {meta['region']}
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <span>✓</span> Radar Activo 24/7
          </span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4 theme-transition">
          Guía Completa de Viaje: {ciudad}
        </h1>

        <!-- Byline del Artículo (Autoría, Fecha, Tiempo de Lectura) -->
        <div class="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs dark:text-slate-400 text-slate-500 pb-5 mb-5 border-b dark:border-slate-800 border-slate-200 theme-transition">
          <div class="flex items-center gap-2 font-semibold dark:text-slate-200 text-slate-800">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                  style="background: var(--brand-gradient);">FB</span>
            <span>Por Redacción FlightBot</span>
          </div>
          <span>•</span>
          <span class="flex items-center gap-1">📅 Publicado: 15 Oct 2026 · Actualizado: 21 Oct 2026</span>
          <span>•</span>
          <span class="flex items-center gap-1">⏱ Lectura: {meta['tiempo_lectura']}</span>
          <span>•</span>
          <span class="text-emerald-500 dark:text-emerald-400 font-medium">Revisión Editorial Independiente</span>
        </div>

        <p class="text-lg dark:text-slate-300 text-slate-700 leading-relaxed mb-6 max-w-3xl theme-transition">
          {resumen}
        </p>

        <!-- Chips de datos prácticos y ficha técnica rápida -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t dark:border-slate-800 border-slate-200 text-xs sm:text-sm theme-transition">
          <div>
            <div class="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Aeropuertos Clave</div>
            <div class="dark:text-slate-200 text-slate-800 font-bold mt-0.5">{aeropuertos}</div>
          </div>
          <div>
            <div class="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Mejor Época</div>
            <div class="dark:text-slate-200 text-slate-800 font-semibold mt-0.5">{meta['mejor_epoca']}</div>
          </div>
          <div>
            <div class="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Moneda Local</div>
            <div class="dark:text-slate-200 text-slate-800 font-semibold mt-0.5">{meta['moneda']}</div>
          </div>
          <div>
            <div class="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Comando Telegram</div>
            <div class="font-mono font-bold mt-0.5" style="color: var(--brand-primary);">{cmd_vuelo}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Índice Rápido del Artículo -->
    <div class="rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900/60 bg-white p-6 mb-12 shadow-sm theme-transition">
      <div class="flex items-center justify-between mb-4 pb-3 border-b dark:border-slate-800 border-slate-200">
        <div class="flex items-center gap-2 font-bold text-sm uppercase tracking-wider dark:text-white text-slate-900">
          <span>📑</span> En esta Guía de Viaje
        </div>
        <span class="text-xs dark:text-slate-400 text-slate-500">Índice interactivo de navegación</span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
        <a href="#puntos-turisticos" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                style="background-color: var(--brand-subtle); color: var(--brand-primary);">1</span>
          <span class="font-medium">Qué Ver & Puntos Imperdibles</span>
        </a>
        <a href="#clima-temporadas" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs font-bold">2</span>
          <span class="font-medium">Clima Habitual por Temporadas</span>
        </a>
        {bloque_enlace_luz_indice}
        <a href="#gastronomia-tipica" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center text-xs font-bold">3</span>
          <span class="font-medium">Gastronomía Típica & Platos</span>
        </a>
        <a href="#idioma-comunicacion" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs font-bold">🗣️</span>
          <span class="font-medium">Idioma &amp; Comunicación</span>
        </a>
        <a href="#escapadas-conexiones" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xs font-bold">4</span>
          <span class="font-medium">Escapadas & Hubs Cercanos</span>
        </a>
        <a href="#transporte-logistica" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold">5</span>
          <span class="font-medium">Logística & Transporte</span>
        </a>
        <a href="#donde-alojarse" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center text-xs font-bold">6</span>
          <span class="font-medium">Dónde Hospedarse & Barrios</span>
        </a>
        <a href="#consejos-expertos" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors dark:text-slate-300 text-slate-700">
          <span class="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center text-xs font-bold">7</span>
          <span class="font-medium">Consejos Pro de Ahorro</span>
        </a>
        {bloque_enlace_ruta_indice}
      </div>
    </div>

    <!-- Nota de Independencia Editorial -->
    <div class="p-5 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900/50 bg-white mb-12 shadow-sm theme-transition">
      <div class="flex items-start gap-3.5">
        <span class="text-2xl mt-0.5">🧭</span>
        <div>
          <h3 class="text-sm font-bold dark:text-white text-slate-900 mb-1 theme-transition">Criterio Editorial y Guía de Viaje Independiente</h3>
          <p class="text-xs dark:text-slate-400 text-slate-600 leading-relaxed theme-transition">
            Esta guía es redactada y actualizada periódicamente por investigadores de viajes y analistas de tarifas aéreas de FlightBot. Evaluamos tendencias de precios, conexiones terrestres, opiniones de viajeros verificadas y la seguridad de cada barrio. Ninguna cadena hotelera ni aerolínea paga por influir en nuestras recomendaciones prioritarias.
          </p>
        </div>
      </div>
    </div>

    <!-- Sección 1: Puntos Turísticos e Imperdibles -->
    <section id="puntos-turisticos" class="mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 rounded-lg font-bold flex items-center justify-center text-sm"
             style="background-color: var(--brand-subtle); color: var(--brand-primary);">1</div>
        <h2 class="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 theme-transition">Qué Ver & Puntos Turísticos Imperdibles</h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-6">
        {puntos_html}
      </div>
    </section>

    <!-- Sección 2: Clima Habitual por Temporada -->
    <section id="clima-temporadas" class="mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm">2</div>
        <h2 class="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 theme-transition">Clima Habitual por Temporadas</h2>
      </div>
      <p class="dark:text-slate-400 text-slate-600 text-sm mb-6 leading-relaxed theme-transition">
        Promedios y comportamientos meteorológicos normales históricos para {ciudad}. Planifica con base en la temperatura típica usual y la vestimenta adecuada:
      </p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clima_html}
      </div>
    </section>

    {luz_solar_html}

    <!-- Sección 3: Gastronomía Típica y Autóctona -->
    <section id="gastronomia-tipica" class="mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 font-bold flex items-center justify-center text-sm">3</div>
        <h2 class="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 theme-transition">Gastronomía Típica & Platos Autóctonos</h2>
      </div>
      <p class="dark:text-slate-400 text-slate-600 text-sm mb-6 leading-relaxed theme-transition">
        Los sabores y recetas que definen la cultura gastronómica de {ciudad}. Lo que no podés dejar de probar:
      </p>
      <div class="grid sm:grid-cols-2 gap-6">
        {gastronomia_html}
      </div>
    </section>

    {idioma_html}

    <!-- Sección 2: El Pie para ir a otros lados (Escapadas y Conexiones) -->
    <section id="escapadas-conexiones" class="mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-sm">2</div>
        <h2 class="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 theme-transition">El Pie para ir a Otros Lados: Escapadas y Hubs</h2>
      </div>
      <p class="dark:text-slate-400 text-slate-600 text-sm mb-6 leading-relaxed theme-transition">
        {ciudad} funciona como una base estratégica inmejorable para conectar con destinos cercanos sin gastar una fortuna en vuelos adicionales:
      </p>
      <div class="space-y-4">
        {escapadas_html}
      </div>
    </section>

    <!-- Sección 3: Comparativa de Transporte (Tren vs Avión vs Auto) -->
    <section id="transporte-logistica" class="mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-sm">3</div>
        <h2 class="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 theme-transition">Logística de Transporte: Cómo Moverse Mejor</h2>
      </div>
      <div class="overflow-x-auto rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900/60 bg-white p-2 shadow-sm theme-transition">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b dark:border-slate-800 border-slate-200 text-xs uppercase font-semibold dark:text-slate-400 text-slate-500">
              <th class="py-3 px-4">Medio de Transporte</th>
              <th class="py-3 px-4">Tiempo Estimado</th>
              <th class="py-3 px-4">Costo Aproximado</th>
              <th class="py-3 px-4">Veredicto FlightBot</th>
            </tr>
          </thead>
          <tbody>
            {transporte_html}
          </tbody>
        </table>
      </div>
    </section>

    <!-- Sección 4: Dónde Conviene Alojarse -->
    <section id="donde-alojarse" class="mb-16 scroll-mt-24">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-sm">4</div>
        <h2 class="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 theme-transition">Dónde Hospedarse: Barrios Recomendados</h2>
      </div>
      <p class="dark:text-slate-400 text-slate-600 text-sm mb-6 leading-relaxed theme-transition">
        Analizamos las zonas con mejor balance de seguridad, transporte y relación precio-calidad para reservar en Booking.com y plataformas líderes:
      </p>
      <div class="grid sm:grid-cols-3 gap-6">
        {zonas_html}
      </div>
    </section>

    <!-- Sección 5: Tip de Ahorro Pro -->
    <section id="consejos-expertos" class="mb-16 scroll-mt-24">
      <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 sm:p-8 flex items-start gap-4 shadow-sm theme-transition">
        <div class="text-3xl">💡</div>
        <div>
          <h4 class="text-lg font-bold dark:text-white text-slate-900 mb-1 theme-transition">Consejo Pro de FlightBot para {ciudad}</h4>
          <p class="dark:text-slate-300 text-slate-600 text-sm leading-relaxed theme-transition">{tip_ahorro}</p>
        </div>
      </div>
    </section>

    {bloque_requisitos_html}

    {bloque_ruta_guia}

    <!-- Firma Editorial y Contacto -->
    <div class="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-sm theme-transition">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-5 mb-5 border-b dark:border-slate-800 border-slate-200">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-md flex-shrink-0"
             style="background: var(--brand-gradient);">
          ✍️
        </div>
        <div>
          <h4 class="text-base font-bold dark:text-white text-slate-900 theme-transition">Sobre la Redacción Editorial de FlightBot</h4>
          <p class="text-xs dark:text-slate-400 text-slate-600 mt-1 leading-relaxed theme-transition">
            Nuestro equipo combina monitoreo automatizado de tarifas aéreas cada 48 horas con investigación turística de campo. Actualizamos estas guías semanalmente para asegurar que los precios de traslados, conexiones de trenes y zonas de hospedaje reflejen las condiciones reales de viaje en 2026.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-3 text-xs dark:text-slate-400 text-slate-500">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>¿Tenés información actualizada o querés sugerir una corrección sobre {ciudad}?</span>
        </div>
        <a href="mailto:soporte.flightbot@gmail.com?subject=Consulta Guia {ciudad}" class="font-semibold hover:underline" style="color: var(--brand-primary);">
          Contactar al Equipo Editorial &rarr;
        </a>
      </div>
    </div>

    <!-- Banner de Activación en Telegram -->
    <div class="dark:bg-slate-900 bg-slate-900 text-white border dark:border-slate-800 border-slate-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden mb-16 shadow-xl">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent pointer-events-none"></div>
      <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">¿Buscando vuelos u hoteles para {ciudad}?</h3>
      <p class="text-slate-400 max-w-xl mx-auto text-sm mb-8 leading-relaxed">
        Activa nuestro radar inteligente en Telegram. Monitoreamos fluctuaciones reales de precios cada 48 horas y te avisamos inmediatamente cuando aparece una caída récord.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://t.me/GnZFlightBot" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-base transition-all shadow-xl hover:brightness-110"
           style="background-color: var(--brand-primary); box-shadow: 0 10px 20px -5px var(--brand-glow);">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .36z"/>
          </svg>
          Monitorear {ciudad} en Telegram
        </a>
        <button type="button" onclick="window.toggleFlightBotChat(true)"
                class="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-base transition-all shadow-lg">
          <span>💬</span>
          <span>Preguntar al Asistente IA</span>
        </button>
      </div>
    </div>

    <!-- Navegación a Otras Guías -->
    <section class="border-t dark:border-slate-800 border-slate-200 pt-12 theme-transition">
      <h3 class="text-xl font-bold dark:text-white text-slate-900 mb-6 theme-transition">Explora otros artículos y guías de viaje de nuestro blog</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {otras_guias_html}
      </div>
    </section>

  </main>

  <!-- Pie de Página y Descargo de Afiliación -->
  <footer class="py-12 dark:bg-slate-950 bg-slate-100 border-t dark:border-slate-800 border-slate-200 text-xs dark:text-slate-400 text-slate-600 mt-20 theme-transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="dark:bg-slate-900/70 bg-white p-4 rounded-xl border dark:border-slate-800/80 border-slate-200 mb-6 shadow-sm theme-transition">
        <p class="dark:text-slate-400 text-slate-600 leading-relaxed">
          <strong class="dark:text-slate-300 text-slate-900">Divulgación de Afiliación (Affiliate Disclosure):</strong> 
          FlightBot participa en programas de marketing de afiliados, incluyendo Travelpayouts y Booking.com. Algunos de los enlaces sugeridos generan una pequeña comisión para mantener nuestra infraestructura y radares 24/7 sin ningún costo extra para el viajero. Toda recomendación de transporte y alojamiento es editorial, objetiva e independiente.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
        <div>&copy; <span class="current-year">2026</span> FlightBot. Blog y Guía oficial de viaje para {ciudad}.</div>
        <div class="flex flex-wrap items-center gap-4 text-xs font-medium">
          <a href="/" class="dark:hover:text-slate-300 hover:text-slate-800 transition-colors">Página Principal</a>
          <a href="/billetera" class="hover:underline flex items-center gap-1 font-bold" style="color: var(--brand-primary);"><span>🧳</span> Billetera</a>
          <a href="/guias/" class="dark:hover:text-slate-300 hover:text-slate-800 transition-colors">Blog &amp; Guías</a>
          <a href="javascript:void(0)" onclick="openPrivacyModal('privacy')" class="hover:underline">Privacidad</a>
          <a href="javascript:void(0)" onclick="openPrivacyModal('cookies')" class="hover:underline">Cookies</a>
          <a href="javascript:void(0)" onclick="openPrivacyModal('terms')" class="hover:underline">Términos</a>
          <a href="https://t.me/GnZFlightBot" class="dark:hover:text-slate-300 hover:text-slate-800 transition-colors">Telegram</a>
        </div>
      </div>
    </div>
  </footer>

  {SHARED_THEME_SCRIPT}
  {SHARED_COOKIE_BANNER}
  {SHARED_PRIVACY_MODAL}
  {SHARED_COOKIE_PRIVACY_SCRIPT}
  {construir_bloque_chatbox_ia(contexto_pagina=guia["id"], ciudad_titulo=ciudad, icono_ciudad=icono)}

</body>
</html>"""


def generar_indice_guias(guias: list) -> str:
    """Genera la página central 'landing/guias/index.html' con formato de Blog Editorial de Viajes y catálogo completo."""
    tarjetas_html = ""
    for g in guias:
        g_meta = METADATOS_EDITORIALES.get(g["id"], {
            "region": g["pais"],
            "categoria": "Guía de Destino",
            "tiempo_lectura": "8 min",
            "mejor_epoca": "Todo el año",
        })
        tarjetas_html += f"""
        <article class="group dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:border-slate-700 transition-all flex flex-col shadow-sm theme-transition">
          <div class="h-48 bg-slate-800 relative overflow-hidden">
            <img src="{g['imagen_unsplash']}" alt="{g['ciudad']}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-[11px] font-bold text-white px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
              {g_meta['region']}
            </div>
            <div class="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-xs font-bold text-white px-3 py-1 rounded-full border border-white/10 shadow-sm">
              {g['icono']} {g['pais']}
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-[11px] dark:text-slate-400 text-slate-500 mb-2 font-medium">
                <span>📅 15 Oct 2026</span>
                <span>•</span>
                <span>⏱ {g_meta['tiempo_lectura']}</span>
                <span>•</span>
                <span class="text-emerald-500 font-semibold">✓ Verificado</span>
              </div>
              <h3 class="text-xl font-bold dark:text-white text-slate-900 mb-1 group-hover:text-rose-500 transition-colors theme-transition">
                <a href="{g['slug']}.html">{g['ciudad']}</a>
              </h3>
              <div class="text-xs font-semibold mb-2" style="color: var(--brand-primary);">
                {g_meta['categoria']}
              </div>
              <p class="text-xs dark:text-slate-400 text-slate-500 mb-3">
                Aeropuertos: <strong class="dark:text-slate-300 text-slate-700">{g['aeropuertos']}</strong>
              </p>
              <p class="text-sm dark:text-slate-300 text-slate-600 leading-relaxed mb-4 theme-transition">
                {g['resumen'][:140]}...
              </p>
            </div>
            <div class="pt-4 border-t dark:border-slate-800 border-slate-200 flex items-center justify-between theme-transition">
              <span class="text-xs dark:text-slate-500 text-slate-500 font-mono">{g['cmd_vuelo']}</span>
              <a href="{g['slug']}.html" class="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:translate-x-0.5" style="color: var(--brand-primary);">
                Leer Artículo Completo &rarr;
              </a>
            </div>
          </div>
        </article>"""

    schema_blog_index = json.dumps({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog de Viajes & Guías Editoriales de FlightBot",
        "description": "Artículos de viaje, comparativas de transporte, zonas de hospedaje y monitoreo de tarifas de vuelos para los destinos más buscados.",
        "url": "https://flightbot.com.ar/guias/index.html",
        "publisher": {
            "@type": "Organization",
            "name": "FlightBot Travel Intelligence",
            "logo": {
                "@type": "ImageObject",
                "url": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=200&q=80"
            }
        },
        "blogPost": [
            {
                "@type": "BlogPosting",
                "headline": f"Guía de Viaje a {g['ciudad']} 2026",
                "url": f"{g['slug']}.html",
                "datePublished": "2026-10-15T09:00:00+00:00"
            }
            for g in guias
        ]
    }, indent=2, ensure_ascii=False)

    return f"""<!DOCTYPE html>
<html lang="es" class="scroll-smooth dark" data-color="ruby">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog de Viajes & Guías Editoriales 2026 · FlightBot</title>
  <meta name="description" content="Artículos de viaje originales, análisis de transporte, trenes de alta velocidad, zonas de alojamiento y consejos de ahorro en los 54 destinos monitoreados por FlightBot.">
  <meta name="author" content="Equipo Editorial FlightBot">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Blog de Viajes & Guías de Destino 2026 · FlightBot">
  <meta property="og:description" content="Artículos exhaustivos, consejos prácticos, comparativas de transporte y las mejores zonas para reservar tu alojamiento con criterios editoriales independientes.">

  <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  {SHARED_THEME_HEAD}

  <script type="application/ld+json">
{schema_blog_index}
  </script>
</head>
<body class="dark:bg-slate-950 dark:text-slate-100 bg-slate-50 text-slate-900 font-sans antialiased selection:bg-rose-600 selection:text-white theme-transition">

  <!-- Navegación Superior -->
  <header class="sticky top-0 z-50 backdrop-blur-md dark:bg-slate-950/80 bg-white/90 border-b dark:border-slate-800 border-slate-200 theme-transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
      <div class="flex items-center gap-3 shrink-0 z-10">
        <a href="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg text-white theme-transition"
               style="background: var(--brand-gradient); box-shadow: 0 10px 20px -5px var(--brand-glow);">
            <svg viewBox="0 0 40 40" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="37" rx="14" ry="2" fill="#000000" opacity="0.35"/>
              <rect x="23" y="19" width="12" height="16" rx="3" fill="url(#fbSuitcaseAlwaysRedNav)" stroke="#ffffff" stroke-width="0.8"/>
              <line x1="25" y1="23" x2="33" y2="23" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <line x1="25" y1="27" x2="33" y2="27" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <line x1="25" y1="31" x2="33" y2="31" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.7" stroke-linecap="round"/>
              <circle cx="25.5" cy="36" r="1.3" fill="#1e293b" stroke="#ffffff" stroke-width="0.6"/>
              <circle cx="32.5" cy="36" r="1.3" fill="#1e293b" stroke="#ffffff" stroke-width="0.6"/>
              <path d="M26 19 V13 H32 V19" stroke="#cbd5e1" stroke-width="1.1" stroke-linecap="round"/>
              <rect x="27" y="11.5" width="4" height="1.8" rx="0.9" fill="#ffffff"/>
              <path d="M17 24 Q22 20 27 13" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/>
              <rect x="7" y="17" width="14" height="16" rx="7" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
              <rect x="10" y="22" width="8" height="6" rx="2" fill="#0f172a"/>
              <path d="M11 25 L12.5 23.5 L14 26 L15.5 24 L17 25" stroke="#10b981" stroke-width="0.8" stroke-linecap="round"/>
              <rect x="5.5" y="6" width="17" height="13" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
              <line x1="14" y1="6" x2="14" y2="2" stroke="#94a3b8" stroke-width="1.1" stroke-linecap="round"/>
              <circle cx="14" cy="1.8" r="1.6" fill="#e11d48"/>
              <circle cx="14" cy="1.8" r="3.2" stroke="#ffffff" stroke-width="0.5" stroke-dasharray="1 1" opacity="0.8"/>
              <rect x="8" y="9" width="12" height="6.5" rx="2.5" fill="#0f172a"/>
              <circle cx="11" cy="12.2" r="1.2" fill="#38bdf8"/>
              <circle cx="17" cy="12.2" r="1.2" fill="#38bdf8"/>
              <path d="M7 23 Q2 19 3 14" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/>
              <defs>
                <linearGradient id="fbSuitcaseAlwaysRedNav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#e11d48"/>
                  <stop offset="100%" stop-color="#be123c"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="text-2xl font-extrabold tracking-tight dark:text-white text-slate-900 theme-transition">
            FlightBot
          </span>
        </a>
      </div>

      <!-- Barra de Navegación Central Simétrica (Dock Centrado Matemáticamente) -->
      <nav class="hidden lg:flex items-center p-1 rounded-full dark:bg-slate-900/80 bg-slate-100/90 border dark:border-slate-800 border-slate-200/90 backdrop-blur-md shadow-sm gap-1">
        <a href="/" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🏠</span> Inicio
        </a>
        <a href="/billetera" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🧳</span> Billetera
        </a>
        <a href="/guias/" class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-150 flex items-center gap-1.5" style="color: var(--brand-primary); background-color: var(--brand-subtle); border-color: var(--brand-border);">
          <span>📖</span> Guías (45)
        </a>
        <a href="/#destinos" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🏨</span> Destinos
        </a>
        <a href="/escapadas" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>🚗</span> En Ruta
        </a>
        <a href="/faq" class="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent transition-all duration-150 flex items-center gap-1.5">
          <span>❓</span> FAQ
        </a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3 shrink-0 z-10">
        {SHARED_HEADER_SWITCHER}

        <a href="https://t.me/GnZFlightBot" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all shadow-lg hover:brightness-110"
           style="background-color: var(--brand-primary); box-shadow: 0 10px 20px -5px var(--brand-glow);">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .36z"/>
          </svg>
          <span class="hidden sm:inline">Probar Bot en Telegram</span>
          <span class="sm:hidden">Bot</span>
        </a>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 theme-transition"
           style="background-color: var(--brand-subtle); border: 1px solid var(--brand-border); color: var(--brand-primary);">
        📰 Blog Editorial & Guías de Destino <span class="current-year">2026</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-6 theme-transition">
        Guías Turísticas & Rutas Monitoreadas · Blog de Viajes 2026
      </h1>
      <p class="dark:text-slate-400 text-slate-600 text-base sm:text-lg leading-relaxed mb-8 theme-transition">
        Informes editoriales independientes preparados por el equipo de FlightBot. Analizamos conexiones aéreas, trenes de alta velocidad, logística de traslados y las mejores zonas para reservar tu hospedaje con total seguridad y sin sesgos comerciales.
      </p>

      <!-- Indicadores de Calidad Editorial -->
      <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs dark:text-slate-300 text-slate-600">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
          <span>📚</span> <span id="contador-guias-badge">{len(CATALOGO_DESTINOS_EXTENDIDO)} Guías Publicadas</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
          <span>⏱</span> Actualización en Tiempo Real
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
          <span>🛡</span> Criterio 100% Independiente
        </span>
      </div>
    </div>

    <!-- Rejilla de Artículos del Blog -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {tarjetas_html}
    </div>

    <!-- Bloque de Compromiso Editorial y Metodología (Clave para revisión Travelpayouts / Afiliados) -->
    <section class="rounded-3xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900/60 bg-white p-8 sm:p-12 mb-16 shadow-lg theme-transition">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 theme-transition"
             style="background-color: var(--brand-subtle); border: 1px solid var(--brand-border); color: var(--brand-primary);">
          Criterio Editorial & Transparencia de Afiliación
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 mb-4 theme-transition">
          Artículos originales respaldados por inteligencia de datos de viaje
        </h2>
        <p class="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed mb-6 theme-transition">
          En FlightBot no publicamos reseñas patrocinadas ni aceptamos compensaciones de hoteles o aerolíneas por posicionamiento favorable. Cada guía es elaborada y revisada de forma independiente por nuestro equipo editorial combinando monitoreo en vivo de tarifas aéreas (actualización en tiempo real 24/7), análisis de hubs ferroviarios europeos y verificación geográfica de seguridad barrial.
        </p>
        <div class="grid sm:grid-cols-3 gap-6 pt-6 border-t dark:border-slate-800 border-slate-200 text-xs theme-transition">
          <div>
            <div class="font-bold dark:text-white text-slate-900 mb-1">100% Sin Patrocinios</div>
            <p class="dark:text-slate-400 text-slate-500">Recomendaciones seleccionadas por relación precio-calidad real y no por acuerdos comerciales.</p>
          </div>
          <div>
            <div class="font-bold dark:text-white text-slate-900 mb-1">Actualización Continua</div>
            <p class="dark:text-slate-400 text-slate-500">Monitoreamos fluctuaciones estacionales, nuevas rutas de tren y aperturas hoteleras.</p>
          </div>
          <div>
            <div class="font-bold dark:text-white text-slate-900 mb-1">Transparencia Total</div>
            <p class="dark:text-slate-400 text-slate-500">Participamos en programas de afiliados (Booking.com, Travelpayouts) sin costo extra para el lector.</p>
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer class="py-12 dark:bg-slate-950 bg-slate-100 border-t dark:border-slate-800 border-slate-200 text-xs dark:text-slate-400 text-slate-600 theme-transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="dark:bg-slate-900/70 bg-white p-4 rounded-xl border dark:border-slate-800/80 border-slate-200 mb-6 shadow-sm theme-transition">
        <p class="dark:text-slate-400 text-slate-600 leading-relaxed">
          <strong class="dark:text-slate-300 text-slate-900">Divulgación de Afiliación (Affiliate Disclosure):</strong> 
          FlightBot participa en programas de marketing de afiliados, incluyendo Travelpayouts y Booking.com. Algunos de los enlaces que recomendamos pueden generar una comisión para nuestro proyecto si decides realizar una reserva, sin que esto implique ningún coste adicional para ti.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4 text-xs font-medium">
        <div>&copy; <span class="current-year">2026</span> FlightBot. Todos los derechos reservados.</div>
        <div class="flex flex-wrap items-center gap-4">
          <a href="/" class="dark:hover:text-slate-300 hover:text-slate-800 transition-colors">Inicio</a>
          <a href="/billetera" class="hover:underline flex items-center gap-1 font-bold" style="color: var(--brand-primary);"><span>🧳</span> Billetera</a>
          <a href="/guias/" class="dark:hover:text-slate-300 hover:text-slate-800 transition-colors font-semibold" style="color: var(--brand-primary);">Blog &amp; Guías</a>
          <a href="javascript:void(0)" onclick="openPrivacyModal('privacy')" class="hover:underline">Privacidad</a>
          <a href="javascript:void(0)" onclick="openPrivacyModal('cookies')" class="hover:underline">Cookies</a>
          <a href="javascript:void(0)" onclick="openPrivacyModal('terms')" class="hover:underline">Términos</a>
          <a href="https://t.me/GnZFlightBot" class="dark:hover:text-slate-300 hover:text-slate-800 transition-colors">Telegram</a>
        </div>
      </div>
    </div>
  </footer>

  {SHARED_THEME_SCRIPT}
  {SHARED_COOKIE_BANNER}
  {SHARED_PRIVACY_MODAL}
  {SHARED_COOKIE_PRIVACY_SCRIPT}
  {construir_bloque_chatbox_ia(contexto_pagina="guias", ciudad_titulo="", icono_ciudad="🗺️")}

  <script>
    (function initContadorGuias() {
      function actualizarContador() {
        const articulos = document.querySelectorAll('article');
        const cantidad = articulos.length;
        const badge = document.getElementById('contador-guias-badge');
        if (badge && cantidad > 0) {
          badge.textContent = `${cantidad} Guías Publicadas`;
        }
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', actualizarContador);
      } else {
        actualizarContador();
      }
      if (typeof MutationObserver !== 'undefined') {
        const grid = document.querySelector('.grid');
        if (grid) {
          const observer = new MutationObserver(actualizarContador);
          observer.observe(grid, { childList: true });
        }
      }
    })();
  </script>

</body>
</html>"""


def actualizar_landing_principal():
    """Inyecta o actualiza el Planificador de Rutas en Auto y el Chatbox IA dentro de 'landing/index.html'."""
    ruta_landing = os.path.join(LANDING_DIR, "index.html")
    if not os.path.isfile(ruta_landing):
        return
    with open(ruta_landing, "r", encoding="utf-8") as f:
        html_actual = f.read()

    # 1. Asegurar enlace al Blog en el menú superior con badge distintivo
    if 'Blog</span>' not in html_actual:
        html_actual = html_actual.replace(
            '<a href="guias/index.html" class="font-bold transition-colors" style="color: var(--brand-primary);">Guías de Viaje</a>',
            '<a href="guias/index.html" class="font-bold transition-colors flex items-center gap-1.5" style="color: var(--brand-primary);"><span class="px-1.5 py-0.5 rounded text-[10px] bg-rose-500/15 text-rose-500 border border-rose-500/25 uppercase tracking-wider font-extrabold">Blog</span> Blog & Guías</a>',
        )

    # 2. Asegurar mención editorial en sección de destinos
    html_actual = html_actual.replace(
        'Guías de Hospedaje & Destinos 2026',
        'Blog de Viajes & Guías Editoriales 2026'
    )
    html_actual = re.sub(
        r'Ver las? \d+ Guías [^<]+ &rarr;',
        f'Ver las {len(GUIAS_DESTINOS)} Guías Editoriales del Blog &rarr;',
        html_actual
    )
    html_actual = re.sub(
        r'Explora las \d+ Guías Turísticas Oficiales',
        f'Explora las {len(GUIAS_DESTINOS)} Guías Turísticas Oficiales',
        html_actual
    )
    html_actual = re.sub(
        r'<span>📖</span> Guías \(\d+\)',
        f'<span>📖</span> Guías ({len(GUIAS_DESTINOS)})',
        html_actual
    )

    # 3. Asegurar enlaces 'Viajar en Ruta' y 'Promociones' en el menú superior si no existen aún
    if 'href="#rutas-auto"' not in html_actual:
        html_actual = html_actual.replace(
            '<a href="#destinos" class="hover:text-rose-500 transition-colors">Destinos & Hoteles</a>',
            '<a href="#destinos" class="hover:text-rose-500 transition-colors">Destinos & Hoteles</a>\n        <a href="#rutas-auto" class="hover:text-rose-500 transition-colors font-semibold">🚗 Viajar en Ruta</a>',
        )
    if 'href="#promociones"' not in html_actual:
        html_actual = html_actual.replace(
            '<a href="#rutas-auto" class="hover:text-rose-500 transition-colors font-semibold">🚗 Viajar en Ruta</a>',
            '<a href="#rutas-auto" class="hover:text-rose-500 transition-colors font-semibold">🚗 Viajar en Ruta</a>\n        <a href="#promociones" class="hover:text-rose-500 transition-colors font-semibold flex items-center gap-1.5"><span>💳</span> Promociones</a>',
        )

    # 4. Inyectar o actualizar el Planificador de Viajes en Ruta antes de Preguntas Frecuentes
    bloque_rutas = construir_bloque_planificador_rutas(destino_inicial="bariloche", es_guia_interna=False)
    patron_rutas = re.compile(r"<!-- FLIGHTBOT_ROAD_PLANNER_START -->[\s\S]*?<!-- FLIGHTBOT_ROAD_PLANNER_END -->")
    if patron_rutas.search(html_actual):
        html_actual = patron_rutas.sub(lambda _: bloque_rutas, html_actual)
    elif "<!-- Sección: Preguntas Frecuentes -->" in html_actual:
        html_actual = html_actual.replace(
            "<!-- Sección: Preguntas Frecuentes -->",
            f"{bloque_rutas}\n\n  <!-- Sección: Preguntas Frecuentes -->",
        )

    # 5. Inyectar o actualizar el Chatbox IA Híbrido
    bloque_chat = construir_bloque_chatbox_ia(contexto_pagina="landing", ciudad_titulo="", icono_ciudad="✈️")
    patron = re.compile(r"<!-- FLIGHTBOT_AI_CHATBOX_START -->[\s\S]*?<!-- FLIGHTBOT_AI_CHATBOX_END -->")
    if patron.search(html_actual):
        html_nuevo = patron.sub(lambda _: bloque_chat, html_actual)
    else:
        html_nuevo = html_actual.replace("</body>", f"{bloque_chat}\n\n</body>")

    with open(ruta_landing, "w", encoding="utf-8") as f:
        f.write(html_nuevo)
    print("  [OK] Actualizado: landing/index.html (con Blog Editorial + Planificador Vial + Chatbox IA Híbrido)")


def ejecutar_generacion():
    guias = obtener_todas_las_guias()
    print(f"Generando {len(guias)} guías turísticas en {OUTPUT_DIR} con soporte para temas y Chatbox IA...")

    for g in guias:
        nombre_arch = f"{g['slug']}.html"
        ruta_arch = os.path.join(OUTPUT_DIR, nombre_arch)
        contenido = generar_html_guia(g)
        with open(ruta_arch, "w", encoding="utf-8") as f:
            f.write(contenido)
        print(f"  [OK] Creado: {nombre_arch}")

    # Generar índice general de guías
    ruta_index = os.path.join(OUTPUT_DIR, "index.html")
    with open(ruta_index, "w", encoding="utf-8") as f:
        f.write(generar_indice_guias(guias))
    print("  [OK] Creado: index.html (Catálogo General)")

    # Sincronizar landing/index.html con el mismo widget de Chatbox IA
    actualizar_landing_principal()
    print("Generación completada con éxito!")


if __name__ == "__main__":
    ejecutar_generacion()
