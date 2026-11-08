/**
 * FlightBot - Radar de Vuelos & Catálogo Master-Detail
 * Mobile-Optimized Selector, Region Tabs & 3-Tab Detailed Destination Card
 */

(function () {
  'use strict';

  let currentDestinationId = 'bariloche';
  let currentRegionFilter = 'todos';
  let currentDetailTab = 'vuelos'; // 'vuelos' | 'hoteles' | 'tips'

  function getRadarData() {
    return (window.RADAR_DATA && Array.isArray(window.RADAR_DATA)) ? window.RADAR_DATA : [];
  }

  function limpiarNombreCiudad(str) {
    if (!str) return '';
    return str.replace(/ & .*$/i, '').replace(/ \(.*$/i, '').trim();
  }

  function generarBanderaHtml(dest, tamano) {
    const code = (dest.codigo_pais || 'ar').toLowerCase();
    const cdnUrl = `https://flagcdn.com/w80/${code}.png`;
    const localUrl = `img/flags/${code}.png`;
    if (tamano === 'sm') {
      return `<img src="${localUrl}" onerror="this.onerror=null; this.src='${cdnUrl}'" alt="${dest.pais}" class="w-6 h-4 object-cover rounded shadow-xs flex-shrink-0" loading="lazy" />`;
    }
    return `<img src="${localUrl}" onerror="this.onerror=null; this.src='${cdnUrl}'" alt="${dest.pais}" class="w-10 h-7 object-cover rounded-md shadow-xs flex-shrink-0" loading="lazy" />`;
  }

  // Filtrado por región
  window.filtrarRadarRegion = function (region) {
    currentRegionFilter = region;

    // Actualizar botones de tabs
    document.querySelectorAll('.fb-region-tab').forEach(tab => {
      const reg = tab.getAttribute('data-region');
      if (reg === region) {
        tab.className = 'fb-region-tab px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 shadow-sm transition-all whitespace-nowrap';
      } else {
        tab.className = 'fb-region-tab px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all whitespace-nowrap';
      }
    });

    renderSidebarYSelectorMovil();

    const data = getRadarData();
    const destinosFiltrados = data.filter(d => {
      if (region === 'todos') return true;
      if (region === 'relampago') return Boolean(d.oportunidad_relampago && d.oportunidad_relampago.activa);
      return d.categoria_region === region;
    });

    if (destinosFiltrados.length > 0 && !destinosFiltrados.some(d => d.id === currentDestinationId)) {
      window.renderRadarDestino(destinosFiltrados[0].id);
    }
  };

  // Renderizar la lista lateral (desktop) y el selector desplegable colapsable (móvil)
  function renderSidebarYSelectorMovil() {
    const data = getRadarData();
    const listContainer = document.getElementById('radar-destinos-list');
    const mobileSelect = document.getElementById('radar-mobile-dest-select');

    const destinosFiltrados = data.filter(d => {
      if (currentRegionFilter === 'todos') return true;
      if (currentRegionFilter === 'relampago') return Boolean(d.oportunidad_relampago && d.oportunidad_relampago.activa);
      return d.categoria_region === currentRegionFilter;
    });

    // 1. Selector colapsable para Móvil (evita scrolls infinitos)
    if (mobileSelect) {
      let optionsHtml = '';
      destinosFiltrados.forEach(dest => {
        const isSelected = dest.id === currentDestinationId ? 'selected' : '';
        optionsHtml += `<option value="${dest.id}" ${isSelected}>${dest.iata} · ${limpiarNombreCiudad(dest.ciudad)} (${dest.pais})</option>`;
      });
      mobileSelect.innerHTML = optionsHtml;
    }

    // 2. Lista lateral para Desktop / Tablet
    if (listContainer) {
      let itemsHtml = '';
      destinosFiltrados.forEach(dest => {
        const isSelected = dest.id === currentDestinationId;
        const activeClass = isSelected
          ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 shadow-sm'
          : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700';

        const precioFmt = (typeof window.formatearPrecioMoneda === 'function')
          ? window.formatearPrecioMoneda(dest.precio_desde, dest)
          : dest.precio_desde;

        itemsHtml += `
          <button type="button" onclick="window.renderRadarDestino('${dest.id}')"
                  class="w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${activeClass} group">
            <div class="flex items-center gap-2.5 min-w-0">
              ${generarBanderaHtml(dest, 'sm')}
              <div class="truncate">
                <div class="text-xs font-bold dark:text-white text-slate-900 truncate group-hover:text-rose-600 transition-colors">
                  ${limpiarNombreCiudad(dest.ciudad)}
                </div>
                <div class="text-[10px] font-mono text-slate-400">
                  ${dest.iata} · ${dest.tipo_ruta || 'Internacional'}
                </div>
              </div>
            </div>
            <div class="text-right shrink-0">
              <span class="text-[9px] uppercase font-bold text-slate-400 block">Desde</span>
              <span class="text-xs font-black font-mono text-rose-600 dark:text-rose-500">${precioFmt}</span>
            </div>
          </button>
        `;
      });
      listContainer.innerHTML = itemsHtml;
    }
  }

  // Cambiar pestaña activa en la ficha de detalle (1. Vuelos, 2. Hoteles, 3. Clima y Tips)
  window.setDetailTab = function (tab) {
    currentDetailTab = tab;
    ['vuelos', 'hoteles', 'tips'].forEach(t => {
      const btn = document.getElementById(`tab-btn-${t}`);
      const content = document.getElementById(`tab-content-${t}`);
      if (btn) {
        if (t === tab) {
          btn.className = 'tab-btn px-4 py-2.5 text-xs font-extrabold border-b-2 border-rose-600 text-rose-600 transition-all flex items-center gap-2';
        } else {
          btn.className = 'tab-btn px-4 py-2.5 text-xs font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all flex items-center gap-2';
        }
      }
      if (content) {
        content.style.display = (t === tab) ? 'block' : 'none';
      }
    });
  };

  // Renderizar la ficha de detalle del destino activo
  window.renderRadarDestino = function (destId) {
    const data = getRadarData();
    const dest = data.find(d => d.id === destId) || data[0];
    if (!dest) return;

    currentDestinationId = dest.id;
    window.currentDestinationId = dest.id;

    renderSidebarYSelectorMovil();

    const detailContainer = document.getElementById('radar-detalle-destino');
    if (!detailContainer) return;

    const precioDesdeFmt = (typeof window.formatearPrecioMoneda === 'function')
      ? window.formatearPrecioMoneda(dest.precio_desde, dest)
      : dest.precio_desde;

    // A. Encabezado de la Ficha
    const headerHtml = `
      <div class="p-6 sm:p-8 bg-slate-900 text-white rounded-t-3xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-rose-600/20 blur-3xl pointer-events-none"></div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div class="flex items-center gap-4">
            ${generarBanderaHtml(dest, 'lg')}
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-2xl sm:text-3xl font-black">${dest.ciudad}</h3>
                <span class="px-2 py-0.5 rounded-lg text-xs font-mono font-bold bg-white/10 text-rose-400">${dest.iata}</span>
              </div>
              <p class="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">${dest.resena || ''}</p>
            </div>
          </div>
          <div class="text-left sm:text-right shrink-0">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Piso Histórico Rolli</span>
            <span class="text-2xl sm:text-3xl font-black font-mono text-rose-500">${precioDesdeFmt}</span>
            <span class="text-[10px] text-slate-400 block mt-0.5">Ida y vuelta final con tasas</span>
          </div>
        </div>
      </div>
    `;

    // B. Pestañas de Navegación de la Ficha
    const tabsNavHtml = `
      <div class="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 gap-2">
        <button type="button" id="tab-btn-vuelos" onclick="window.setDetailTab('vuelos')"
                class="tab-btn px-4 py-3 text-xs font-extrabold border-b-2 border-rose-600 text-rose-600 transition-all flex items-center gap-2">
          <span>✈️</span>
          <span>1. Tarifas Aéreas por Temporada</span>
        </button>
        <button type="button" id="tab-btn-hoteles" onclick="window.setDetailTab('hoteles')"
                class="tab-btn px-4 py-3 text-xs font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all flex items-center gap-2">
          <span>🏨</span>
          <span>2. Alojamiento Recomendado</span>
        </button>
        <button type="button" id="tab-btn-tips" onclick="window.setDetailTab('tips')"
                class="tab-btn px-4 py-3 text-xs font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all flex items-center gap-2">
          <span>☀️</span>
          <span>3. Clima & Tips de Rolli</span>
        </button>
      </div>
    `;

    // C. Contenido Tab 1: Vuelos
    let vuelosHtml = '<div class="space-y-4">';
    if (dest.vuelos && Array.isArray(dest.vuelos) && dest.vuelos.length > 0) {
      dest.vuelos.forEach((v) => {
        const vPrice = (typeof window.formatearPrecioMoneda === 'function')
          ? window.formatearPrecioMoneda(v.precio, dest)
          : v.precio;

        vuelosHtml += `
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
            <div class="flex items-start gap-3.5">
              <span class="text-2xl">${v.puesto || '✈️'}</span>
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="text-base font-extrabold dark:text-white text-slate-900">${v.aerolinea}</h4>
                  <span class="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">${v.escalas}</span>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400 mt-1 flex flex-wrap items-center gap-2">
                  <span>🗓️ ${v.fechas} (${v.noches} noches)</span>
                  <span class="text-slate-300 dark:text-slate-600">·</span>
                  <span class="text-emerald-500 font-semibold">${v.destacado || 'Tarifa verificada'}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between w-full md:w-auto md:justify-end gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
              <div class="text-left md:text-right">
                <span class="text-[9px] uppercase font-bold text-slate-400 block">Total i/v</span>
                <span class="text-lg font-black font-mono text-rose-600 dark:text-rose-500">${vPrice}</span>
              </div>
              <a href="https://t.me/GnZFlightBot?start=dest_${dest.id}" target="_blank" rel="noopener noreferrer"
                 class="px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-rose-600 hover:bg-rose-700 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 whitespace-nowrap">
                <span>Alerta 24/7</span>
                <span>➔</span>
              </a>
            </div>
          </div>
        `;
      });
    } else {
      vuelosHtml += `<div class="p-8 text-center text-slate-400 text-sm">Escaneando vuelos activos para este destino...</div>`;
    }
    vuelosHtml += '</div>';

    // D. Contenido Tab 2: Hoteles
    let hotelesHtml = '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">';
    if (dest.hoteles && Array.isArray(dest.hoteles) && dest.hoteles.length > 0) {
      dest.hoteles.forEach(h => {
        const hotelPrice = (typeof window.formatearPrecioMoneda === 'function')
          ? window.formatearPrecioMoneda(h.precio_noche, dest)
          : h.precio_noche;

        hotelesHtml += `
          <div class="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div class="h-36 relative overflow-hidden bg-slate-800">
              <img src="${h.imagen || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80'}"
                   alt="${h.nombre}" class="w-full h-full object-cover" loading="lazy" />
              <div class="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/80 text-white backdrop-blur-xs">
                ⭐ ${h.estrellas || 4} estrellas
              </div>
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h5 class="text-sm font-bold dark:text-white text-slate-900 leading-snug">${h.nombre}</h5>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${h.descripcion || 'Excelente ubicación y confort verificado por viajeros.'}</p>
              </div>
              <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span class="text-[9px] uppercase font-bold text-slate-400">Por noche</span>
                  <span class="text-sm font-black font-mono text-slate-900 dark:text-white block">${hotelPrice}</span>
                </div>
                <a href="${h.url_booking || 'https://www.booking.com'}" target="_blank" rel="noopener noreferrer"
                   class="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Ver en Booking
                </a>
              </div>
            </div>
          </div>
        `;
      });
    } else {
      hotelesHtml += `<div class="col-span-3 p-8 text-center text-slate-400 text-sm">Consultando alojamientos top de Booking...</div>`;
    }
    hotelesHtml += '</div>';

    // E. Contenido Tab 3: Clima & Tips de Rolli
    const tipsHtml = `
      <div class="space-y-4">
        <div class="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-800 dark:text-rose-200 flex items-start gap-3">
          <img src="img/rolli-avatar-transparent.png" alt="Rolli" class="w-10 h-10 object-contain shrink-0 filter drop-shadow">
          <div>
            <h5 class="font-extrabold text-sm text-rose-600 dark:text-rose-400 mb-1">El Secreto de Rolli para viajar a ${dest.ciudad}:</h5>
            <p class="leading-relaxed">
              "Para conseguir la tarifa más baja en ${dest.iata}, reservá con al menos 6 a 8 semanas de anticipación si viajás en temporada media. Los martes y miércoles a la madrugada suelen liberarse las cancelaciones con piso histórico."
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-lg">☀️</span>
            <div class="text-[10px] font-bold uppercase text-slate-400 mt-1">Mejor Época</div>
            <div class="text-xs font-extrabold dark:text-white text-slate-900 mt-0.5">${dest.clima_mejor_mes || 'Marzo a Mayo / Primavera'}</div>
          </div>
          <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-lg">🧳</span>
            <div class="text-[10px] font-bold uppercase text-slate-400 mt-1">Equipaje Sugerido</div>
            <div class="text-xs font-extrabold dark:text-white text-slate-900 mt-0.5">Carry-on 10kg + mochila bajo asiento</div>
          </div>
          <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-lg">🚕</span>
            <div class="text-[10px] font-bold uppercase text-slate-400 mt-1">Traslado Aeropuerto</div>
            <div class="text-xs font-extrabold dark:text-white text-slate-900 mt-0.5">Uber / Remís oficial en arribos</div>
          </div>
        </div>
      </div>
    `;

    detailContainer.innerHTML = `
      <div class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg">
        ${headerHtml}
        ${tabsNavHtml}
        <div class="p-6 bg-slate-50/50 dark:bg-slate-950/40">
          <div id="tab-content-vuelos">${vuelosHtml}</div>
          <div id="tab-content-hoteles" style="display:none;">${hotelesHtml}</div>
          <div id="tab-content-tips" style="display:none;">${tipsHtml}</div>
        </div>
      </div>
    `;

    // Restaurar pestaña activa
    window.setDetailTab(currentDetailTab);
  };

  // 4. Inicializar Buscador Rápido del Hero
  function initHeroSearchBar() {
    const heroSelect = document.getElementById('hero-dest-select');
    const heroBtn = document.getElementById('hero-search-btn');
    if (!heroSelect) return;

    const data = getRadarData();
    const totalDestinos = Array.isArray(data) ? data.length : 0;
    let optionsHtml = `<option value="todos">🌐 Todos los ${totalDestinos} destinos monitoreados</option>`;
    data.forEach(d => {
      optionsHtml += `<option value="${d.id}">${d.iata} · ${limpiarNombreCiudad(d.ciudad)} (${d.pais})</option>`;
    });
    heroSelect.innerHTML = optionsHtml;

    // Actualizar contador dinámico en el badge del radar si existe en la página
    const radarBadgeCount = document.getElementById('radar-destinos-total-count');
    if (radarBadgeCount && totalDestinos > 0) {
      radarBadgeCount.textContent = totalDestinos;
    }

    if (heroBtn) {
      heroBtn.addEventListener('click', function () {
        const selectedId = heroSelect.value;
        const radarSec = document.getElementById('radar-vuelos');
        if (radarSec) {
          radarSec.scrollIntoView({ behavior: 'smooth' });
        }
        if (selectedId && selectedId !== 'todos') {
          setTimeout(() => {
            window.renderRadarDestino(selectedId);
          }, 300);
        }
      });
    }
  }

  // 5. Inicialización al cargar el DOM
  function initRadar() {
    // Si RADAR_DATA tarda en cargarse por defer, esperar
    function boot() {
      if (window.RADAR_DATA && window.RADAR_DATA.length > 0) {
        initHeroSearchBar();
        renderSidebarYSelectorMovil();
        window.renderRadarDestino('bariloche');

        const mobileSelect = document.getElementById('radar-mobile-dest-select');
        if (mobileSelect) {
          mobileSelect.addEventListener('change', function (e) {
            window.renderRadarDestino(e.target.value);
          });
        }
      } else {
        setTimeout(boot, 50);
      }
    }
    boot();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRadar);
  } else {
    initRadar();
  }
})();
