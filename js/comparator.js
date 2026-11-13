/**
 * FlightBot - Auto vs Avión Interactive Comparator Module
 * Rolli's AI Engine: Direct Cost, Time & Convenience Analysis
 */

(function () {
  'use strict';

  // Base de conocimientos calibrada para rutas turísticas y corporativas argentinas
  const COMPARADOR_KB = {
    bariloche: {
      nombre: 'San Carlos de Bariloche',
      km: 1580,
      autoCombustible: 523770,
      autoPeajes: 19000,
      tiempoAutoHs: 18.6,
      tiempoAutoTexto: '18h 35m',
      tiempoAvionTexto: '4h 15m',
      tiempoAvionHs: 4.25,
      precioAvionBase: 89000,
      costoAlquiler7d: 420000,
      costoUber: 85000,
      iata: 'BRC'
    },
    cordoba: {
      nombre: 'Córdoba Capital / Sierras',
      km: 710,
      autoCombustible: 235000,
      autoPeajes: 9500,
      tiempoAutoHs: 7.8,
      tiempoAutoTexto: '7h 45m',
      tiempoAvionTexto: '3h 15m',
      tiempoAvionHs: 3.25,
      precioAvionBase: 58000,
      costoAlquiler7d: 310000,
      costoUber: 45000,
      iata: 'COR'
    },
    mendoza: {
      nombre: 'Mendoza (Ruta del Vino)',
      km: 1050,
      autoCombustible: 365000,
      autoPeajes: 14000,
      tiempoAutoHs: 11.5,
      tiempoAutoTexto: '11h 30m',
      tiempoAvionTexto: '3h 40m',
      tiempoAvionHs: 3.65,
      precioAvionBase: 68000,
      costoAlquiler7d: 350000,
      costoUber: 55000,
      iata: 'MDZ'
    },
    iguazu: {
      nombre: 'Puerto Iguazú (Cataratas)',
      km: 1290,
      autoCombustible: 445000,
      autoPeajes: 16500,
      tiempoAutoHs: 15.0,
      tiempoAutoTexto: '15h 00m',
      tiempoAvionTexto: '3h 50m',
      tiempoAvionHs: 3.85,
      precioAvionBase: 74000,
      costoAlquiler7d: 380000,
      costoUber: 60000,
      iata: 'IGR'
    },
    salta: {
      nombre: 'Salta La Linda / Cafayate',
      km: 1490,
      autoCombustible: 510000,
      autoPeajes: 18000,
      tiempoAutoHs: 17.5,
      tiempoAutoTexto: '17h 30m',
      tiempoAvionTexto: '4h 10m',
      tiempoAvionHs: 4.15,
      precioAvionBase: 82000,
      costoAlquiler7d: 410000,
      costoUber: 65000,
      iata: 'SLA'
    },
    mardel: {
      nombre: 'Mar del Plata (Costa Atlántica)',
      km: 415,
      autoCombustible: 142000,
      autoPeajes: 8800,
      tiempoAutoHs: 4.75,
      tiempoAutoTexto: '4h 45m',
      tiempoAvionTexto: '3h 45m',
      tiempoAvionHs: 3.75,
      precioAvionBase: 64000,
      costoAlquiler7d: 280000,
      costoUber: 40000,
      iata: 'MDQ'
    },
    sanmartin: {
      nombre: 'San Martín de los Andes',
      km: 1570,
      autoCombustible: 530000,
      autoPeajes: 19000,
      tiempoAutoHs: 19.0,
      tiempoAutoTexto: '19h 00m',
      tiempoAvionTexto: '4h 25m',
      tiempoAvionHs: 4.4,
      precioAvionBase: 92000,
      costoAlquiler7d: 440000,
      costoUber: 75000,
      iata: 'CPC'
    },
    tucuman: {
      nombre: 'San Miguel de Tucumán',
      km: 1250,
      autoCombustible: 430000,
      autoPeajes: 15000,
      tiempoAutoHs: 14.2,
      tiempoAutoTexto: '14h 15m',
      tiempoAvionTexto: '3h 50m',
      tiempoAvionHs: 3.8,
      precioAvionBase: 76000,
      costoAlquiler7d: 390000,
      costoUber: 65000,
      iata: 'TUC'
    },
    ushuaia: {
      nombre: 'Ushuaia (Fin del Mundo)',
      km: 3100,
      autoCombustible: 920000,
      autoPeajes: 60000,
      tiempoAutoHs: 38.0,
      tiempoAutoTexto: '38h 00m (con balsa)',
      tiempoAvionTexto: '5h 35m',
      tiempoAvionHs: 5.6,
      precioAvionBase: 135000,
      costoAlquiler7d: 480000,
      costoUber: 80000,
      iata: 'USH'
    }
  };

  let compPasajeros = 2;
  let compMovilidad = 'uber'; // 'uber' | 'alquiler' | 'ninguna'

  window.setComparadorPasajeros = function (n) {
    compPasajeros = Math.min(5, Math.max(1, parseInt(n, 10) || 2));
    
    // Sincronizar botones de pax si existen
    document.querySelectorAll('.comp-pax-btn').forEach(btn => {
      const pVal = parseInt(btn.getAttribute('data-pax'), 10);
      if (pVal === compPasajeros) {
        btn.className = 'comp-pax-btn px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all';
      } else {
        btn.className = 'comp-pax-btn px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all';
      }
    });

    const paxSlider = document.getElementById('comp-pax-slider');
    if (paxSlider && parseInt(paxSlider.value, 10) !== compPasajeros) {
      paxSlider.value = compPasajeros;
    }
    const paxCountLabel = document.getElementById('comp-pax-display-count');
    if (paxCountLabel) {
      paxCountLabel.textContent = `${compPasajeros} ${compPasajeros === 1 ? 'viajero' : 'viajeros'}`;
    }

    window.recalcularComparadorAutoAvion();
  };

  window.setComparadorMovilidad = function (tipo) {
    compMovilidad = tipo;
    ['uber', 'alquiler', 'ninguna'].forEach(k => {
      const btn = document.getElementById('comp-mov-' + k);
      if (!btn) return;
      if (k === tipo) {
        btn.className = 'comp-mov-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all';
      } else {
        btn.className = 'comp-mov-btn px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all';
      }
    });
    window.recalcularComparadorAutoAvion();
  };

  function formatearMoneda(monto) {
    if (typeof window.formatearPrecioMoneda === 'function') {
      return window.formatearPrecioMoneda(`$ ${monto}`);
    }
    return `$ ${monto.toLocaleString('es-AR')}`;
  }

  window.recalcularComparadorAutoAvion = function () {
    const select = document.getElementById('comp-destino-select');
    const destId = select ? (select.value || 'bariloche') : 'bariloche';
    const data = COMPARADOR_KB[destId] || COMPARADOR_KB.bariloche;

    const autoTotalArs = data.autoCombustible + data.autoPeajes;
    const autoPorPersonaArs = Math.round(autoTotalArs / compPasajeros);

    // Costo de movilidad local si se viaja en avión
    let costoMovilidadArs = 0;
    let labelMovilidad = 'Movilidad local:';
    const ubersNecesarios = compPasajeros > 4 ? 2 : 1;
    const costoUberBase = data.costoUber || 85000;
    const costoUberTotal = costoUberBase * ubersNecesarios;

    if (compMovilidad === 'alquiler') {
      costoMovilidadArs = data.costoAlquiler7d || 420000;
      labelMovilidad = 'Alquiler auto (7 días):';
    } else if (compMovilidad === 'uber') {
      costoMovilidadArs = costoUberTotal;
      labelMovilidad = 'Uber / Traslados en destino:';
    } else {
      costoMovilidadArs = 0;
      labelMovilidad = 'Movilidad extra (a pie):';
    }

    const pasajesTotalArs = data.precioAvionBase * compPasajeros;
    const avionTotalArs = pasajesTotalArs + costoMovilidadArs;
    const avionPorPersonaArs = Math.round(avionTotalArs / compPasajeros);

    // Actualizar Columna 1 (Auto)
    const elDist = document.getElementById('comp-auto-distancia');
    const elComb = document.getElementById('comp-auto-combustible');
    const elPeajes = document.getElementById('comp-auto-peajes');
    const elAutoTotal = document.getElementById('comp-auto-total');
    const elAutoPaxLabel = document.getElementById('comp-auto-pax-label');
    const elAutoPax = document.getElementById('comp-auto-por-persona');
    const elAutoTiempo = document.getElementById('comp-auto-tiempo');

    if (elDist) elDist.textContent = `${data.km} km (ida)`;
    if (elComb) elComb.textContent = formatearMoneda(data.autoCombustible);
    if (elPeajes) elPeajes.textContent = formatearMoneda(data.autoPeajes);
    if (elAutoTotal) elAutoTotal.textContent = formatearMoneda(autoTotalArs);
    if (elAutoPaxLabel) elAutoPaxLabel.textContent = `${compPasajeros} ${compPasajeros === 1 ? 'persona' : 'personas'}`;
    if (elAutoPax) elAutoPax.textContent = `${formatearMoneda(autoPorPersonaArs)} c/u`;
    if (elAutoTiempo) elAutoTiempo.textContent = `${data.tiempoAutoTexto} de manejo`;

    const elPataTip = document.getElementById('comp-auto-pata-tip');
    if (elPataTip) {
      const esPatagonia = ['bariloche', 'sanmartin', 'ushuaia'].includes(destId);
      elPataTip.style.display = esPatagonia ? 'flex' : 'none';
    }

    // Actualizar Columna 2 (Avión)
    const elTarifaBase = document.getElementById('comp-avion-tarifa-base');
    const elAvionTotal = document.getElementById('comp-avion-total');
    const elAvionPasajesTotal = document.getElementById('comp-avion-pasajes-total');
    const elAvionPax = document.getElementById('comp-avion-por-persona');
    const elAvionTiempo = document.getElementById('comp-avion-tiempo');
    const elMovLabel = document.getElementById('comp-avion-mov-label');
    const elMovCosto = document.getElementById('comp-avion-mov-costo');

    if (elTarifaBase) elTarifaBase.textContent = `Tarifa: ${formatearMoneda(data.precioAvionBase)} i/v`;
    if (elAvionPasajesTotal) elAvionPasajesTotal.textContent = formatearMoneda(pasajesTotalArs);
    if (elMovLabel) elMovLabel.textContent = labelMovilidad;
    if (elMovCosto) elMovCosto.textContent = costoMovilidadArs > 0 ? `+${formatearMoneda(costoMovilidadArs)}` : '$ 0 (a pie)';
    if (elAvionTotal) elAvionTotal.textContent = formatearMoneda(avionTotalArs);
    if (elAvionPax) elAvionPax.textContent = `${formatearMoneda(avionPorPersonaArs)} c/u`;
    if (elAvionTiempo) elAvionTiempo.textContent = `${data.tiempoAvionTexto} (vuelo + aeropuerto)`;

    // Consejos de movilidad
    const elAvionTipBox = document.getElementById('comp-avion-tip-box');
    const elAvionTipTexto = document.getElementById('comp-avion-tip-texto');
    if (elAvionTipBox && elAvionTipTexto) {
      if (compMovilidad === 'uber') {
        elAvionTipTexto.innerHTML = '<b>Capacidad de remís/Uber:</b> Admite hasta 4 personas. Con 5 pasajeros o mucho equipaje, Rolli calcula automáticamente 2 vehículos en destino.';
      } else if (compMovilidad === 'alquiler') {
        elAvionTipTexto.innerHTML = '<b>Política de Tanque Lleno:</b> Las rentadoras exigen devolver el tanque lleno. Te da total libertad para recorrer puntos turísticos alejados.';
      } else {
        elAvionTipTexto.innerHTML = '<b>Movilidad a pie / centro:</b> Excelente para hospedajes céntricos. Te ahorrás traslados urbanos.';
      }
    }

    // Veredicto / Dictamen de Rolli
    const diffHs = Math.abs(data.tiempoAutoHs - data.tiempoAvionHs).toFixed(1);
    const diffPlata = Math.abs(autoTotalArs - avionTotalArs);
    const diffPlataFmt = formatearMoneda(diffPlata);

    const elDiffPlata = document.getElementById('comp-veredicto-diff-plata');
    const elDiffTiempo = document.getElementById('comp-veredicto-diff-tiempo');
    if (elDiffPlata) elDiffPlata.textContent = diffPlataFmt;
    if (elDiffTiempo) elDiffTiempo.textContent = `${diffHs} hs de diferencia`;

    const elVerBadge = document.getElementById('comp-veredicto-badge');
    const elVerTitulo = document.getElementById('comp-veredicto-titulo');
    const elVerDetalle = document.getElementById('comp-veredicto-detalle');
    const elCta = document.getElementById('comp-veredicto-cta');

    // Regla inteligente de Rolli
    if (destId === 'mardel') {
      if (compPasajeros === 1) {
        if (elVerBadge) elVerBadge.textContent = '✈️ Dictamen de Rolli: Solo laburo relámpago';
        if (elVerTitulo) elVerTitulo.textContent = `Avión solo si viajás solo y vas por pocas horas`;
        if (elVerDetalle) elVerDetalle.textContent = `Ahorrás 1 hora neta puerta a puerta vs la ruta, pero pagás ${diffPlataFmt} más. Para escapada turística no se justifica.`;
      } else {
        if (elVerBadge) elVerBadge.textContent = '🚗 Dictamen de Rolli: ¡Andá en Auto!';
        if (elVerTitulo) elVerTitulo.textContent = `Para ${compPasajeros} personas te conviene 100% el auto`;
        if (elVerDetalle) elVerDetalle.textContent = `En auto ahorrás ${diffPlataFmt} y viajás con total libertad por la costa. El avión puerta a puerta apenas ahorra 45 minutos.`;
      }
      if (elCta) {
        elCta.href = '/escapadas';
        elCta.innerHTML = '<span>Ver Hoja de Ruta y Peajes (Autovía 2)</span> ➔';
      }
    } else if (avionTotalArs < autoTotalArs) {
      if (elVerBadge) elVerBadge.textContent = '✈️ Dictamen de Rolli: ¡Viajá en Avión!';
      if (elVerTitulo) elVerTitulo.textContent = `Para ${compPasajeros} ${compPasajeros === 1 ? 'persona' : 'personas'} conviene Avión de acá a la China`;
      if (elVerDetalle) elVerDetalle.textContent = `Ahorrás aprox. ${diffPlataFmt} en total y te ahorrás ${diffHs} horas agotadoras de manejo en ruta. Llegás descansado para disfrutar.`;
      if (elCta) {
        elCta.href = `/vuelos?dest=${destId}`;
        elCta.innerHTML = '<span>Ver Vuelos Baratos Cazados por Rolli</span> ➔';
      }
    } else {
      if (elVerBadge) elVerBadge.textContent = '🚗 Dictamen de Rolli: ¡Conviene el Auto!';
      if (elVerTitulo) elVerTitulo.textContent = `Al ser grupo de ${compPasajeros} personas conviene mover el auto`;
      if (elVerDetalle) elVerDetalle.textContent = `El costo del auto se divide entre ${compPasajeros} y ahorrás aprox. ${diffPlataFmt} frente a comprar ${compPasajeros} pasajes de avión.`;
      if (elCta) {
        elCta.href = '/escapadas';
        elCta.innerHTML = '<span>Ver Hoja de Ruta y Paradores 24hs</span> ➔';
      }
    }
  };

  // Inicialización al cargar el DOM
  document.addEventListener('DOMContentLoaded', function () {
    const paxSlider = document.getElementById('comp-pax-slider');
    if (paxSlider) {
      paxSlider.addEventListener('input', function (e) {
        window.setComparadorPasajeros(e.target.value);
      });
    }
    const selectDest = document.getElementById('comp-destino-select');
    if (selectDest) {
      selectDest.addEventListener('change', window.recalcularComparadorAutoAvion);
    }
    window.recalcularComparadorAutoAvion();
  });
})();
