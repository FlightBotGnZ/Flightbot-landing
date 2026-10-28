/**
 * road-planner.js - FlightBot Escapadas y Rutas Viales
 * Única fuente de verdad (Single Source of Truth) para el cálculo de rutas,
 * semáforos viales, alertas de seguridad, peajes y paradas recomendadas.
 */

// Base de conocimiento exhaustiva de corredores viales para Argentina y el Cono Sur
const CORREDORES_VIALES_KB = {
  bariloche: {
    nombre: "Bariloche & Región de los Lagos",
    km: 1580,
    peajes: 19000,
    peajesDesc: "RN 5 (Olivera, 9 de Julio, Trenque Lauquen)",
    traza: "RN 5 ➔ RP 20 (Ruta del Desierto) ➔ RN 151 ➔ RN 237",
    esPata: true,
    semaforo: {
      nivel: "amarillo",
      icono: "🟡",
      titulo: "Precaución · Tramos Largos y Viento en La Pampa",
      desc: "RN 5 con tránsito de camiones. RP 20 (Ruta del Desierto) son 205 km rectos sin estaciones intermedias ni sombra: tanque lleno obligatorio en Chacharramendi o Colonia 25 de Mayo. Cuidado con somnolencia y animales sueltos."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Chacharramendi (km 650) · Colonia 25 de Mayo (km 850) · Neuquén Capital (km 1.150) · Piedra del Águila (km 1.380)."
  },
  costa: {
    nombre: "Partido de La Costa (San Bernardo / Mar de Ajó / Mar del Tuyú)",
    km: 345,
    peajes: 21500,
    peajesDesc: "Samborombón + Maipú / La Huella RP 11 (AUBASA)",
    traza: "Autovía 2 (Dolores) ➔ RP 63 ➔ RP 11 Interbalnearia",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Doble Mano y Asfalto en Buen Estado",
      desc: "Autovía 2 y RP 11 con calzada doble mano y servicios 24 hs continuos. Precaución con radares de velocidad en zonas urbanas (Chascomús, Castelli, Dolores)."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Parador Atalaya (km 113 Chascomús) · YPF Full Dolores (km 204)."
  },
  mardel: {
    nombre: "Mar del Plata & Chapadmalal",
    km: 415,
    peajes: 21500,
    peajesDesc: "Samborombón + Maipú (Autovía 2 AUBASA)",
    traza: "Autovía 2 directa a Mar del Plata ➔ RP 11 a Chapadmalal",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autovía 2 100% Doble Mano",
      desc: "Calzada rápida y paradores continuos cada 40 km. Controles de velocidad en Lezama, Castelli y Dolores."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Atalaya (km 113 Chascomús) · Minotauro Castelli (km 184) · YPF Maipú (km 274)."
  },
  pinamar: {
    nombre: "Pinamar, Cariló & Villa Gesell",
    km: 365,
    peajes: 21500,
    peajesDesc: "Samborombón + Maipú / La Huella RP 11 (AUBASA)",
    traza: "Autovía 2 ➔ RP 63 ➔ RP 11 ➔ RP 56 (Autovía) ➔ RP 74",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autovía 2 y RP 56 Doble Mano",
      desc: "RP 56 y RP 11 transformadas en autovía. Tránsito fluido con precaución en rotonda de Gral. Conesa y acceso a Pinamar RP 74."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Atalaya Chascomús (km 113) · Dolores (km 204) · Parador Conesa (km 270)."
  },
  tandil: {
    nombre: "Tandil & Sierras del Tandil",
    km: 360,
    peajes: 16000,
    peajesDesc: "Samborombón + Las Armas (Autovía 2) o Peajes RN 3",
    traza: "Autovía 2 (km 299 Las Armas) ➔ RP 74 (o RN 3 ➔ RP 30)",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autovía 2 hasta Las Armas y RP 74",
      desc: "Ruta 74 asfaltada y señalizada. Alternativa por RN 3 con tráfico pesado de camiones hacia Cañuelas y Azul."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Atalaya Chascomús (km 113) · YPF Las Armas (km 299) · Azul YPF (si vas por RN 3)."
  },
  ventana: {
    nombre: "Sierra de la Ventana & Villa Ventana",
    km: 560,
    peajes: 12000,
    peajesDesc: "Cañuelas + Azul (RN 3)",
    traza: "RN 3 (Azul / Olavarría) ➔ RP 76 (Tornquist / Ventana)",
    esPata: false,
    semaforo: {
      nivel: "amarillo",
      icono: "🟡",
      titulo: "Precaución · RN 3 y RP 76 con Baches y Curvas Serranas",
      desc: "RN 3 tiene intenso tráfico de camiones cerealeros. RP 76 hacia Tornquist y Villa Ventana tiene curvas pronunciadas y cruce de fauna."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> San Miguel del Monte (km 110) · Azul YPF cruce RP 226 (km 300) · Gral. La Madrid (km 450)."
  },
  colon: {
    nombre: "Colón & Parque Nacional El Palmar",
    km: 330,
    peajes: 11000,
    peajesDesc: "Puente Zárate-Brazo Largo + Colonia Elía (RN 14)",
    traza: "RN 9 ➔ Zárate-Brazo Largo ➔ RN 12 ➔ RN 14 (Autovía)",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autovía RN 14 100% Doble Mano",
      desc: "Autovía del Mercosur en excelente estado. Atención a controles de Gendarmería en Ceibas y radares en Entre Ríos."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Zárate (km 85) · Ceibas (km 160) · Gualeguaychú YPF Full (km 230)."
  },
  calamuchita: {
    nombre: "Córdoba: Valle de Calamuchita (VGB / Cumbrecita)",
    km: 720,
    peajes: 18000,
    peajesDesc: "Panamericana + Carcarañá + James Craik + Red Accesos Córdoba",
    traza: "Autopista RN 9 (Rosario ➔ Córdoba) ➔ RP C45 ➔ RP 5",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autopista RN 9 Doble Mano + RP 5",
      desc: "Autopista Panamericana y RN 9 Rosario-Córdoba impecable. RP 5 de montaña con curvas escénicas hacia Dique Los Molinos."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Shell Alvear / Rosario (km 280) · Villa María (km 500) · Alta Gracia (km 680)."
  },
  traslasierra: {
    nombre: "Córdoba: Valle de Traslasierra (Mina Clavero / Nono)",
    km: 830,
    peajes: 20000,
    peajesDesc: "Autopista RN 9 + Accesos Córdoba + RP 34",
    traza: "RN 9 ➔ Córdoba ➔ RP 34 (Camino de las Altas Cumbres a 2.200 m)",
    esPata: false,
    semaforo: {
      nivel: "amarillo",
      icono: "🟡",
      titulo: "Precaución · Camino de las Altas Cumbres (2.200 m)",
      desc: "Subida imponente con curvas cerradas, bancos de niebla repentinos y vientos fuertes. Frenar con caja en bajadas."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Rosario (km 300) · Villa María (km 550) · Parador El Cóndor Altas Cumbres (km 760)."
  },
  montehermoso: {
    nombre: "Monte Hermoso & Pehuen Có",
    km: 630,
    peajes: 12000,
    peajesDesc: "Cañuelas + Azul + Tres Arroyos (RN 3)",
    traza: "RN 3 (Azul ➔ Coronel Dorrego) ➔ RP 78",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · RN 3 directo y acceso por RP 78",
      desc: "Ruta 3 con pavimento firme y señalización clara. RP 78 en excelente estado hasta la costa."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> San Miguel del Monte (km 110) · Azul (km 300) · Tres Arroyos YPF (km 495)."
  },
  merlo: {
    nombre: "Villa de Merlo (San Luis)",
    km: 780,
    peajes: 14000,
    peajesDesc: "Peajes Corredores Centrales + San Luis",
    traza: "RN 8 / RN 7 ➔ Río Cuarto ➔ RP 1 / Autopista de los Comechingones",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autopistas de San Luis Iluminadas",
      desc: "San Luis cuenta con autopistas provinciales iluminadas y señalizadas con Wi-Fi en cabinas y asfalto impecable."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Pergamino (km 220) · Venado Tuerto (km 360) · Río Cuarto (km 610)."
  },
  mendoza: {
    nombre: "Mendoza & Valle de Uco",
    km: 1050,
    peajes: 15000,
    peajesDesc: "Peajes Corredor RN 7 + Autopistas San Luis",
    traza: "RN 7 directa a Mendoza ➔ RP 86 al Valle de Uco",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · RN 7 Doble Vía en gran parte",
      desc: "Tramos de autopista y doble vía continuos. Mucho tránsito de camiones internacionales hacia Chile. Desvío por RP 86 a Tupungato."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Junín (km 260) · Laboulaye (km 490) · Villa Mercedes (km 700) · San Luis (km 790)."
  },
  areco: {
    nombre: "San Antonio de Areco",
    km: 120,
    peajes: 6000,
    peajesDesc: "Panamericana Ramal Pilar + Peaje Larena RN 8",
    traza: "RN 8 (Autopista Panamericana Ramal Pilar ➔ Solís)",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autopista RN 8 Rápida",
      desc: "Autovía rápida sin baches a menos de 2 horas de Capital."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Pilar (km 50) · Solís (km 100)."
  },
  chascomus: {
    nombre: "Chascomús y Laguna",
    km: 125,
    peajes: 8600,
    peajesDesc: "Samborombón AUBASA (Autovía 2)",
    traza: "Autovía 2 directa hasta el acceso norte de Chascomús",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autovía 2 Calzada Doble Mano",
      desc: "Autovía rápida doble mano con servicios continuos y radares en zonas urbanas."
    },
    paradas: "💡 <b>Parada Clásica:</b> Parador Atalaya Chascomús (km 113)."
  },
  jofre: {
    nombre: "Tomás Jofré & Mercedes",
    km: 100,
    peajes: 5200,
    peajesDesc: "Autopista del Oeste + Peaje Olivera RN 5",
    traza: "Acceso Oeste ➔ RN 5 hasta Mercedes ➔ RP 42 a Jofré",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Acceso Oeste y RN 5 en Excelente Estado",
      desc: "Autopista rápida y segura hasta Luján y RN 5 hasta Mercedes."
    },
    paradas: "💡 <b>Parada Clásica:</b> Luján (km 65) · Pulperías de Jofré."
  },
  sanpedro: {
    nombre: "San Pedro & Vuelta de Obligado",
    km: 170,
    peajes: 6500,
    peajesDesc: "Panamericana Escobar + Peaje Zárate RN 9",
    traza: "RN 9 (Panamericana Ramal Campana ➔ San Pedro)",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autopista Panamericana RN 9",
      desc: "Ruta troncal rápida doble mano hasta el acceso a San Pedro."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> Campana (km 75) · Baradero (km 145)."
  },
  vicentelopez: {
    nombre: "Costanera Vicente López & Olivos",
    km: 18,
    peajes: 1500,
    peajesDesc: "Autopista Illia / Paseo del Bajo (opcional)",
    traza: "Av. Lugones / Av. del Libertador ➔ Av. Gral Paz ➔ Paseo de la Costa",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Acceso Ribereño Ágil",
      desc: "Vialidad urbana fluida los domingos por la mañana. Se aconseja llegar antes de las 14:00 hs para conseguir estacionamiento fácil frente al río."
    },
    paradas: "💡 <b>Puntos Clave:</b> Paseo de la Costa (Av. San Martín y Río) · Puerto de Olivos (Av. Corrientes y Río)."
  },
  carloskeen: {
    nombre: "Carlos Keen & Luján",
    km: 80,
    peajes: 6000,
    peajesDesc: "Acceso Oeste RN 7 (Ituzaingó + Luján)",
    traza: "Acceso Oeste (RN 7) ➔ Empalme camino asfaltado a Carlos Keen",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autopista Acceso Oeste Doble Mano",
      desc: "Autopista rápida con múltiples carriles hasta Luján. El camino de acceso a Carlos Keen está pavimentado. Tránsito cargado al regreso los domingos después de las 18 hs."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> km 65 Luján (YPF Full) · Puestos rurales de pastelitos en el acceso."
  },
  lobos: {
    nombre: "Lobos & Laguna de Lobos",
    km: 100,
    peajes: 6500,
    peajesDesc: "Autopista Riccheri + Ezeiza-Cañuelas + RN 205",
    traza: "Autopista Ezeiza-Cañuelas ➔ RN 205 directo a Lobos",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Corredor Sur RN 205",
      desc: "Autopista hasta Cañuelas y luego RN 205 de mano única con buen asfalto. Respetar velocidades máximas en cruces urbanos de Cañuelas y Uribelarrea."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> km 64 Cañuelas · Paradores de artículos de pesca y carnada en RP 41."
  },
  uribelarrea: {
    nombre: "Uribelarrea (Cañuelas)",
    km: 85,
    peajes: 5500,
    peajesDesc: "Autopista Riccheri + Ezeiza-Cañuelas",
    traza: "Autopista Ezeiza-Cañuelas ➔ RN 205 (km 82.5)",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Acceso Directo por Autopista",
      desc: "Autopista fluida hasta Cañuelas. Acceso asfaltado flanqueado por eucaliptos. Calles internas de tierra consolidadas transitables para cualquier vehículo."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> km 64 Cañuelas · Escuela Agrotécnica Don Bosco."
  },
  gualeguaychu: {
    nombre: "Gualeguaychú & Playas de Río",
    km: 230,
    peajes: 8000,
    peajesDesc: "Zárate-Brazo Largo + RN 14 (Autovía Artigas)",
    traza: "RN 9 Panamericana ➔ Complejo Zárate-Brazo Largo ➔ RN 12 ➔ RN 14",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autovía Mercosur Doble Vía",
      desc: "Excelente corredor autovía 100% doble carril. Precaución con viento lateral sobre los puentes del complejo Zárate-Brazo Largo."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> km 85 Zárate (YPF Full) · km 145 Ceibas (parador de nueces y cítricos)."
  },
  rosario: {
    nombre: "Rosario & Costanera del Paraná",
    km: 300,
    peajes: 9500,
    peajesDesc: "Panamericana RN 9 (Zárate, Baradero, San Nicolás, Gral. Lagos)",
    traza: "Autopista Panamericana RN 9 directa Buenos Aires - Rosario",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Autopista Doble Mano Rápida",
      desc: "Autopista troncal nacional en buen estado con estaciones y servicios cada 30-40 km. Tránsito fluido con camiones por carril derecho."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> km 153 San Pedro (ensaimadas) · km 225 San Nicolás (Santuario de la Virgen)."
  },
  necochea: {
    nombre: "Necochea & Quequén",
    km: 510,
    peajes: 18500,
    peajesDesc: "Samborombón + Maipú (Autovía 2) + RP 74 / RP 86",
    traza: "Autovía 2 hasta Las Armas ➔ RP 74 (Tandil/Juárez) ➔ RP 86 hasta Necochea",
    esPata: false,
    semaforo: {
      nivel: "amarillo",
      icono: "🟡",
      titulo: "Precaución · Tramo de Ruta Provincial Simple",
      desc: "Autovía 2 excelente hasta km 299. La RP 74 y RP 86 son de mano única: circular de día con luces bajas encendidas y adelantarse con precaución."
    },
    paradas: "💡 <b>Paradas Clásicas:</b> km 113 Chascomús (Atalaya) · km 299 Las Armas · Benito Juárez."
  }
};

// Función para obtener los datos del corredor a partir del texto ingresado
function obtenerCorredorVial(destinoTexto) {
  if (!destinoTexto) return CORREDORES_VIALES_KB.costa;
  const d = destinoTexto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (d.includes('bariloche') || d.includes('angostura') || d.includes('san martin') || d.includes('lagos')) {
    return CORREDORES_VIALES_KB.bariloche;
  } else if (d.includes('tuyu') || d.includes('bernardo') || d.includes('ajo') || d.includes('costa') || d.includes('teresita')) {
    return CORREDORES_VIALES_KB.costa;
  } else if (d.includes('plata') || d.includes('chapadmalal') || d.includes('miramar')) {
    return CORREDORES_VIALES_KB.mardel;
  } else if (d.includes('pinamar') || d.includes('gesell') || d.includes('carilo') || d.includes('pampas')) {
    return CORREDORES_VIALES_KB.pinamar;
  } else if (d.includes('tandil')) {
    return CORREDORES_VIALES_KB.tandil;
  } else if (d.includes('ventana') || d.includes('tornquist')) {
    return CORREDORES_VIALES_KB.ventana;
  } else if (d.includes('colon') || d.includes('palmar') || d.includes('gualeguaychu')) {
    return CORREDORES_VIALES_KB.colon;
  } else if (d.includes('calamuchita') || d.includes('belgrano') || d.includes('cumbrecita') || d.includes('santa rosa')) {
    return CORREDORES_VIALES_KB.calamuchita;
  } else if (d.includes('traslasierra') || d.includes('mina clavero') || d.includes('nono') || d.includes('san javier')) {
    return CORREDORES_VIALES_KB.traslasierra;
  } else if (d.includes('monte hermoso') || d.includes('pehuen')) {
    return CORREDORES_VIALES_KB.montehermoso;
  } else if (d.includes('merlo') || d.includes('san luis')) {
    return CORREDORES_VIALES_KB.merlo;
  } else if (d.includes('mendoza') || d.includes('uco') || d.includes('san rafael')) {
    return CORREDORES_VIALES_KB.mendoza;
  } else if (d.includes('areco') || d.includes('vagues')) {
    return CORREDORES_VIALES_KB.areco;
  } else if (d.includes('chascomus')) {
    return CORREDORES_VIALES_KB.chascomus;
  } else if (d.includes('jofre') || d.includes('mercedes')) {
    return CORREDORES_VIALES_KB.jofre;
  } else if (d.includes('san pedro') || d.includes('obligado')) {
    return CORREDORES_VIALES_KB.sanpedro;
  } else if (d.includes('vicente lopez') || d.includes('olivos')) {
    return CORREDORES_VIALES_KB.vicentelopez;
  } else if (d.includes('carlos keen') || d.includes('keen')) {
    return CORREDORES_VIALES_KB.carloskeen;
  } else if (d.includes('lobos')) {
    return CORREDORES_VIALES_KB.lobos;
  } else if (d.includes('uribelarrea') || d.includes('uribe')) {
    return CORREDORES_VIALES_KB.uribelarrea;
  } else if (d.includes('gualeguaychu') || d.includes('nandubaysal')) {
    return CORREDORES_VIALES_KB.gualeguaychu;
  } else if (d.includes('rosario')) {
    return CORREDORES_VIALES_KB.rosario;
  } else if (d.includes('necochea') || d.includes('quequen')) {
    return CORREDORES_VIALES_KB.necochea;
  }

  // Fallback seguro
  return {
    nombre: destinoTexto,
    km: 380,
    peajes: 15000,
    peajesDesc: "Peajes según cabinas de la traza",
    traza: "Ruta Nacional según corredor de viaje",
    esPata: false,
    semaforo: {
      nivel: "verde",
      icono: "🟢",
      titulo: "Verde · Corredor Transitable",
      desc: "Ruta pavimentada. Manejá con luces bajas encendidas, velocidad moderada y descansá cada 2 horas."
    },
    paradas: "💡 <b>Recomendación:</b> Cargar combustible en estaciones de servicio de bandera antes de salir."
  };
}

// Automatización dinámica de contadores de escapadas
window.actualizarContadoresEscapadas = function() {
  const cards = document.querySelectorAll('.esc-card');
  const total = cards.length;
  if (!total) return;

  const counts = { todas: total };
  cards.forEach(card => {
    const cat = card.getAttribute('data-cat');
    if (cat) {
      counts[cat] = (counts[cat] || 0) + 1;
    }
  });

  const countBadge = document.getElementById('escapadas-total-count');
  if (countBadge) {
    countBadge.textContent = total;
  }
  const subtitleEl = document.getElementById('escapadas-header-subtitle');
  if (subtitleEl && !countBadge) {
    subtitleEl.innerHTML = `Explorá las <b>${total} guías</b> organizadas en 4 anillos con base en Buenos Aires. Calculá presupuesto real con <b>nafta Shell ($2.200)</b>, peajes exactos, tramos rotos y <b>ahorro por Ley Patagónica</b>.`;
  }

  const titulosBase = {
    todas: '🌟 Todas las Guías',
    finde_corto: '🟢 Finde Corto (< 3.5 hs · hasta 250 km)',
    finde_largo: '🟡 Finde Largo (4 a 6.5 hs · 350-550 km)',
    vacaciones_semana: '🔵 Vacaciones 1 Semana (7 a 11 hs · 600-950 km)',
    gran_ruta: '🟣 Grandes Rutas (+1000 km)'
  };

  document.querySelectorAll('.esc-filtro-btn').forEach(btn => {
    const cat = btn.getAttribute('data-cat') || (btn.id ? btn.id.replace('btn-filtro-', '') : null);
    if (cat && counts[cat] !== undefined) {
      const base = titulosBase[cat] || btn.textContent.replace(/\s*\(\d+\)/, '').trim();
      btn.textContent = `${base} (${counts[cat]})`;
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.actualizarContadoresEscapadas);
} else {
  window.actualizarContadoresEscapadas();
}

// Filtro interactivo de tarjetas de escapadas
window.filtrarEscapadas = function(cat) {
  const cards = document.querySelectorAll('.esc-card');
  const btns = document.querySelectorAll('.esc-filtro-btn');
  
  btns.forEach(b => {
    b.style.backgroundColor = '';
    b.style.color = '';
    b.style.borderColor = '';
  });

  const activeBtn = document.getElementById(`btn-filtro-${cat}`);
  if (activeBtn) {
    activeBtn.style.backgroundColor = 'var(--brand-primary)';
    activeBtn.style.color = '#ffffff';
    activeBtn.style.borderColor = 'var(--brand-primary)';
  }

  cards.forEach(card => {
    if (cat === 'todas' || card.getAttribute('data-cat') === cat) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

// Carga rápida en el buscador de ruta
window.cargarRutaEnBuscador = function(destino) {
  const input = document.getElementById('road-destino-input') || document.getElementById('fb-road-dest');
  if (input) {
    input.value = destino;
    window.calcularRutaWeb();
    const sec = document.getElementById('planificador-ruta') || document.getElementById('rutas-auto');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }
};

// Función universal de cálculo dinámico
window.calcularRutaWeb = function() {
  const origenInp = document.getElementById('road-origen-input') || document.getElementById('fb-road-orig');
  const destInp = document.getElementById('road-destino-input') || document.getElementById('fb-road-dest');
  const fuelSel = document.getElementById('road-fuel-select') || document.getElementById('fb-road-fuel');
  const vehSel = document.getElementById('road-veh-select') || document.getElementById('fb-road-veh');
  const paxSel = document.getElementById('road-pax-select') || document.getElementById('fb-road-pax');

  const origen = (origenInp ? origenInp.value : 'Buenos Aires') || 'Buenos Aires';
  const destino = (destInp ? destInp.value : 'San Bernardo') || 'San Bernardo';
  const fuel = (fuelSel ? fuelSel.value : 'nafta') || 'nafta';
  const veh = (vehSel ? vehSel.value : 'sedan') || 'sedan';
  const pax = parseInt((paxSel ? paxSel.value : '4') || '4');

  const cData = obtenerCorredorVial(destino);

  const km = cData.km;
  const peajes = cData.peajes;
  const traza = cData.traza;
  const esPata = cData.esPata;

  // Precios de combustible Shell y factores de vehículo
  const factorVeh = { compacto: 0.85, sedan: 1.0, suv: 1.18, pickup: 1.38 }[veh] || 1.0;
  let precioUnidad = 2200; // Nafta Súper Ref. Shell
  let consumo100 = 8.5 * factorVeh;
  let nombreComb = 'Nafta Súper';

  if (fuel === 'premium') {
    precioUnidad = 2520; // Shell V-Power
    consumo100 = 8.2 * factorVeh;
    nombreComb = 'V-Power Nafta';
  } else if (fuel === 'diesel') {
    precioUnidad = 2380; // Shell Evolux
    consumo100 = 7.2 * factorVeh;
    nombreComb = 'Diésel';
  } else if (fuel === 'gnc') {
    precioUnidad = 920;
    consumo100 = 9.5 * factorVeh;
    nombreComb = 'GNC';
  }

  if (esPata && fuel !== 'gnc') {
    precioUnidad = Math.round(precioUnidad * 0.90); // Tarifa patagónica ponderada
  }

  const litrosIV = Math.round(((km * 2) / 100) * consumo100);
  const costoComb = litrosIV * precioUnidad;
  const totalViaje = costoComb + peajes;
  const costoPax = Math.round(totalViaje / pax);

  // 1. Textos principales de cabecera
  const elTitulo = document.getElementById('res-titulo-trayecto');
  if (elTitulo) elTitulo.innerText = `${origen} ➔ ${destino}`;

  const elCorredor = document.getElementById('res-corredor-badge');
  if (elCorredor) elCorredor.innerText = `🛣️ ${traza}`;

  const elSubtitulo = document.getElementById('res-subtitulo-vial');
  if (elSubtitulo) elSubtitulo.innerText = `Distancia: ~${km} km por tramo (${km*2} km Ida y Vuelta) · Manejo estimado: ~${Math.floor(km/85)}h ${Math.round((km%85)/85*60)}m`;

  const elTotal = document.getElementById('res-total-ars');
  if (elTotal) elTotal.innerText = `$ ${totalViaje.toLocaleString('es-AR')}`;

  const elPax = document.getElementById('res-pax-ars');
  if (elPax) elPax.innerText = `$ ${costoPax.toLocaleString('es-AR')} c/u (${pax} pax)`;

  // 2. Semáforo vial dinámico
  const semaforoBox = document.getElementById('res-semaforo-box');
  const semaforoIcon = document.getElementById('res-semaforo-icon');
  const semaforoTitle = document.getElementById('res-semaforo-title');
  const semaforoDesc = document.getElementById('res-semaforo-desc');

  if (semaforoBox && cData.semaforo) {
    if (cData.semaforo.nivel === 'amarillo') {
      semaforoBox.className = "mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 transition-all";
      if (semaforoTitle) semaforoTitle.className = "text-sm font-extrabold text-amber-400";
    } else if (cData.semaforo.nivel === 'rojo') {
      semaforoBox.className = "mt-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 transition-all";
      if (semaforoTitle) semaforoTitle.className = "text-sm font-extrabold text-rose-400";
    } else {
      semaforoBox.className = "mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 transition-all";
      if (semaforoTitle) semaforoTitle.className = "text-sm font-extrabold text-emerald-400";
    }
    if (semaforoIcon) semaforoIcon.innerText = cData.semaforo.icono;
    if (semaforoTitle) semaforoTitle.innerText = cData.semaforo.titulo;
    if (semaforoDesc) semaforoDesc.innerText = cData.semaforo.desc;
  }

  // 3. Desglose detallado de combustible y peajes
  const combDetalleEl = document.getElementById('res-comb-detalle');
  if (combDetalleEl) combDetalleEl.innerText = `~$ ${costoComb.toLocaleString('es-AR')} ARS`;

  const combLitrosEl = document.getElementById('res-comb-litros');
  if (combLitrosEl) {
    combLitrosEl.innerText = `~${litrosIV} ${fuel === 'gnc' ? 'm³' : 'Litros'} (${consumo100.toFixed(1)} ${fuel === 'gnc' ? 'm³' : 'L'}/100km a $${precioUnidad.toLocaleString('es-AR')} ${nombreComb})`;
  }

  const peajesDetalleEl = document.getElementById('res-peajes-detalle');
  if (peajesDetalleEl) peajesDetalleEl.innerText = `~$ ${peajes.toLocaleString('es-AR')} ARS`;

  const peajesDescEl = document.getElementById('res-peajes-desc');
  if (peajesDescEl) {
    peajesDescEl.innerText = cData.peajesDesc || "Peajes según cabinas de la traza";
  }

  // 4. Paradas clásicas
  const paradaEl = document.getElementById('res-parada-clasica');
  if (paradaEl) {
    paradaEl.innerHTML = cData.paradas;
  }

  // 5. Alerta patagónica y botón Google Maps
  const pataBox = document.getElementById('res-pata-box');
  if (pataBox) {
    pataBox.classList.toggle('hidden', !esPata);
  }

  const mapsBtn = document.getElementById('res-maps-btn');
  if (mapsBtn) {
    mapsBtn.href = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origen)}&destination=${encodeURIComponent(destino)}&travelmode=driving`;
  }
};

// Inicialización automática
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  if (typeof window.calcularRutaWeb === 'function') window.calcularRutaWeb();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.calcularRutaWeb === 'function') window.calcularRutaWeb();
  });
}
