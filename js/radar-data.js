// FlightBot - Catalogo Maestro Sincronizado
(function(){
  window.RADAR_DATA = [
  {
    "id": "bariloche",
    "ciudad": "Bariloche & Región de los Lagos",
    "pais": "Argentina",
    "bandera": "🏔️",
    "iata": "BRC",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "precio_desde": "$ 137.460 ARS (US$ 102)",
    "comando_tg": "/bariloche",
    "resena": "Capital nacional del turismo de aventura: majestuosos lagos glaciares, el Cerro Campanario con una de las 7 mejores vistas del planeta, circuito de chocolaterías y el inicio de la Ruta de los 7 Lagos.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP/EZE ➔ BRC)",
        "fechas": "07 Ene - 14 Ene 2027",
        "noches": 7,
        "precio": "$ 137.460 ARS (US$ 102 aprox)",
        "destacado": "Radar Planificado Verano",
        "fecha_ida": "2027-01-07",
        "fecha_vuelta": "2027-01-14",
        "actualizado_en_vivo": true,
        "precio_ars": 137460,
        "precio_usd": 102
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ BRC)",
        "fechas": "13 Ene - 20 Ene 2027",
        "noches": 7,
        "precio": "$ 157.267 ARS (US$ 116 aprox)",
        "destacado": "3 frecuencias diarias en verano",
        "fecha_ida": "2027-01-13",
        "fecha_vuelta": "2027-01-20",
        "actualizado_en_vivo": true,
        "precio_ars": 157267,
        "precio_usd": 116
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ BRC)",
        "fechas": "11 Ene - 18 Ene 2027",
        "noches": 7,
        "precio": "$ 172.686 ARS (US$ 128 aprox)",
        "destacado": "Equipaje de mano y bodega incluido",
        "fecha_ida": "2027-01-11",
        "fecha_vuelta": "2027-01-18",
        "actualizado_en_vivo": true,
        "precio_ars": 172686,
        "precio_usd": 128
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Llao Llao Resort, Golf-Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (4.500 reseñas)",
        "zona": "Villa Llao Llao / Circuito Chico",
        "precio_noche": "$ 320.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El resort de montaña más prestigioso de la Patagonia argentina: campo de golf de 18 hoyos, piscina climatizada con vista al Nahuel Huapi y gastronomía de autor.",
        "booking_url": "https://www.booking.com/hotel/ar/llao-llao-resort-golf-spa.es.html",
        "precio_noche_ars": 320000,
        "precio_noche_usd": 237,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hotel Cacique Inacayal Lake & Spa",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.620 reseñas)",
        "zona": "Costanera San Martín (a 4 cuadras del Cívico)",
        "precio_noche": "$ 145.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ubicación ideal sobre la costa del lago para salir a cenar y caminar por la calle Mitre. Piscina cubierta climatizada y spa con vista panorámica.",
        "booking_url": "https://www.booking.com/hotel/ar/cacique-inacayal-lake-spa.es.html",
        "precio_noche_ars": 145000,
        "precio_noche_usd": 107,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Hostería Villa Huinid Pioneros",
        "estrellas": "⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (2.410 reseñas)",
        "zona": "Av. Bustillo Km 2,6",
        "precio_noche": "$ 78.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Entorno de bosque nativo a solo 5 minutos del centro. Desayuno buffet artesanal casero, piscina climatizada y excelente relación precio/servicio.",
        "booking_url": "https://www.booking.com/hotel/ar/villa-huinid-pioneros.es.html",
        "precio_noche_ars": 78000,
        "precio_noche_usd": 58,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 20,
      "rango_min": "$ 124.000 ARS",
      "rango_max": "$ 199.000 ARS",
      "mensaje": "¡Tarifa récord de cabotaje! El precio actual está en el 20% más económico de la temporada.",
      "texto_pin": "$ 137.460 ARS es una tarifa récord baja",
      "consejo": "JetSMART directo desde Aeroparque. Al haber purgado a Flybondi por concurso, JetSMART lidera las tarifas más confiables con flota A320neo.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        170450,
        160828,
        152581,
        144333,
        137460
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "categoria_region": "cabotaje",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "JetSMART",
      "escalas": "Directo (AEP/EZE ➔ BRC)",
      "fechas": "25 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-12-01",
      "noches": 6,
      "dias_para_el_vuelo": 26,
      "precio": "$ 139.240 ARS",
      "precio_usd": "US$ 103 aprox",
      "precio_ars": 139240,
      "precio_usd_num": 103,
      "ahorro_porcentaje": "35% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20BUE%20on%202026-11-25%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bariloche/2026-11-25/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "BRC",
      "ciudad": "Bariloche & Región de los Lagos",
      "actualizado_at": "2026-11-06T09:38:21.298670+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "35% OFF",
          "ahorro_pct_num": 35,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-28",
              "fecha_vuelta": "2026-12-05",
              "fechas_texto": "28 Nov - 05 Dec 2026",
              "noches": 7,
              "dias_restantes": 22,
              "precio_usd": 97,
              "precio_ars": 140600,
              "precio_texto": "$ 140.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-11-28%20through%202026-12-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-11-28/2026-12-05?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "13 Nov - 18 Nov 2026",
              "noches": 5,
              "dias_restantes": 7,
              "precio_usd": 134,
              "precio_ars": 194300,
              "precio_texto": "$ 194.300 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-11-13%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-11-13/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "29% OFF",
          "ahorro_pct_num": 29,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 91,
              "precio_ars": 132000,
              "precio_texto": "$ 132.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-15",
              "fechas_texto": "08 Dec - 15 Dec 2026",
              "noches": 7,
              "dias_restantes": 32,
              "precio_usd": 103,
              "precio_ars": 149400,
              "precio_texto": "$ 149.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-12-08%20through%202026-12-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-12-08/2026-12-15?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "23% OFF",
          "ahorro_pct_num": 23,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-07",
              "fecha_vuelta": "2027-01-14",
              "fechas_texto": "07 Jan - 14 Jan 2027",
              "noches": 7,
              "dias_restantes": 62,
              "precio_usd": 89,
              "precio_ars": 129000,
              "precio_texto": "$ 129.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202027-01-07%20through%202027-01-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2027-01-07/2027-01-14?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-13",
              "fecha_vuelta": "2027-01-20",
              "fechas_texto": "13 Jan - 20 Jan 2027",
              "noches": 7,
              "dias_restantes": 68,
              "precio_usd": 102,
              "precio_ars": 147900,
              "precio_texto": "$ 147.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202027-01-13%20through%202027-01-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2027-01-13/2027-01-20?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "32% OFF",
        "ahorro_pct_num": 32,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-10",
            "fechas_texto": "05 May - 10 May 2027",
            "noches": 5,
            "dias_restantes": 180,
            "precio_usd": 98,
            "precio_ars": 142100,
            "precio_texto": "$ 142.100 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2027-05-05/2027-05-10?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "35% OFF",
          "ahorro_pct_num": 35,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-28",
              "fecha_vuelta": "2026-12-05",
              "fechas_texto": "28 Nov - 05 Dec 2026",
              "noches": 7,
              "dias_restantes": 22,
              "precio_usd": 97,
              "precio_ars": 140600,
              "precio_texto": "$ 140.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-11-28%20through%202026-12-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-11-28/2026-12-05?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "13 Nov - 18 Nov 2026",
              "noches": 5,
              "dias_restantes": 7,
              "precio_usd": 134,
              "precio_ars": 194300,
              "precio_texto": "$ 194.300 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-11-13%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-11-13/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "29% OFF",
          "ahorro_pct_num": 29,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 91,
              "precio_ars": 132000,
              "precio_texto": "$ 132.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-15",
              "fechas_texto": "08 Dec - 15 Dec 2026",
              "noches": 7,
              "dias_restantes": 32,
              "precio_usd": 103,
              "precio_ars": 149400,
              "precio_texto": "$ 149.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202026-12-08%20through%202026-12-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2026-12-08/2026-12-15?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "23% OFF",
          "ahorro_pct_num": 23,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-07",
              "fecha_vuelta": "2027-01-14",
              "fechas_texto": "07 Jan - 14 Jan 2027",
              "noches": 7,
              "dias_restantes": 62,
              "precio_usd": 89,
              "precio_ars": 129000,
              "precio_texto": "$ 129.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202027-01-07%20through%202027-01-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2027-01-07/2027-01-14?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-13",
              "fecha_vuelta": "2027-01-20",
              "fechas_texto": "13 Jan - 20 Jan 2027",
              "noches": 7,
              "dias_restantes": 68,
              "precio_usd": 102,
              "precio_ars": 147900,
              "precio_texto": "$ 147.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202027-01-13%20through%202027-01-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2027-01-13/2027-01-20?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "32% OFF",
          "ahorro_pct_num": 32,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-10",
              "fechas_texto": "05 May - 10 May 2027",
              "noches": 5,
              "dias_restantes": 180,
              "precio_usd": 98,
              "precio_ars": 142100,
              "precio_texto": "$ 142.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BRC%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/brc/2027-05-05/2027-05-10?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "cordoba",
    "ciudad": "Córdoba & Sierras",
    "pais": "Argentina",
    "bandera": "🌄",
    "iata": "COR",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 81.727 ARS (US$ 61)",
    "comando_tg": "/cordoba",
    "resena": "Segundo polo urbano de Argentina con la Manzana Jesuítica, barrios bohemios como Güemes y escapadas inmediatas a las sierras de Calamuchita, Punilla y Traslasierra.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ COR)",
        "fechas": "05 Ene - 09 Ene 2027",
        "noches": 4,
        "precio": "$ 81.727 ARS (US$ 61 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-01-05",
        "fecha_vuelta": "2027-01-09",
        "actualizado_en_vivo": true,
        "precio_ars": 81727,
        "precio_usd": 61
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ COR)",
        "fechas": "31 Dic - 08 Ene 2027",
        "noches": 8,
        "precio": "$ 88.594 ARS (US$ 66 aprox)",
        "destacado": "Vuelo directo de 1h 15m",
        "fecha_ida": "2026-12-31",
        "fecha_vuelta": "2027-01-08",
        "actualizado_en_vivo": true,
        "precio_ars": 88594,
        "precio_usd": 66
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ COR)",
        "fechas": "31 Dic - 10 Ene 2027",
        "noches": 10,
        "precio": "$ 88.670 ARS (US$ 66 aprox)",
        "destacado": "Puente aéreo frecuente",
        "fecha_ida": "2026-12-31",
        "fecha_vuelta": "2027-01-10",
        "actualizado_en_vivo": true,
        "precio_ars": 88670,
        "precio_usd": 66
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Azur Real Hotel Boutique",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (1.850 reseñas)",
        "zona": "Centro Histórico / Manzana Jesuítica",
        "precio_noche": "$ 320.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Boutique premiado internacionalmente con baños subterráneos de aguas termales inspirados en termas romanas.",
        "booking_url": "https://www.booking.com/hotel/ar/azur-real.es.html",
        "precio_noche_ars": 320000,
        "precio_noche_usd": 237,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Windsor Hotel & Tower",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.900 reseñas)",
        "zona": "Centro Histórico",
        "precio_noche": "$ 95.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Piscina climatizada en la terraza con vistas panorámicas, spa y el célebre restaurante Sibaris.",
        "booking_url": "https://www.booking.com/hotel/ar/windsor-tower.es.html",
        "precio_noche_ars": 95000,
        "precio_noche_usd": 70,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Holiday Inn Córdoba",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (1.750 reseñas)",
        "zona": "Barrio Poeta Lugones / Zona Norte",
        "precio_noche": "$ 62.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Gran parque con piscina exterior, estacionamiento gratuito y acceso rápido tanto al aeropuerto como a las sierras.",
        "booking_url": "https://www.booking.com/hotel/ar/holiday-inn-cordoba.es.html",
        "precio_noche_ars": 62000,
        "precio_noche_usd": 46,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 22,
      "rango_min": "$ 74.000 ARS",
      "rango_max": "$ 119.000 ARS",
      "mensaje": "¡Tarifa imbatible para una escapada rápida a Córdoba!",
      "texto_pin": "$ 81.727 ARS es una tarifa récord baja",
      "consejo": "Vuelo de solo 1h 15m ideal para fin de semana largo o turismo corporativo.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        101341,
        95621,
        90717,
        85813,
        81727
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 25 días · Tarifa récord más baja detectada",
      "aerolinea": "JetSMART",
      "escalas": "Directo (AEP ➔ COR)",
      "fechas": "24 Nov - 29 Nov 2026",
      "fecha_ida": "2026-11-24",
      "fecha_vuelta": "2026-11-29",
      "noches": 5,
      "dias_para_el_vuelo": 25,
      "precio": "$ 78.900 ARS",
      "precio_usd": "US$ 58 aprox",
      "precio_ars": 78900,
      "precio_usd_num": 58,
      "ahorro_porcentaje": "28% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20BUE%20on%202026-11-24%20through%202026-11-29&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cordoba/2026-11-24/2026-11-29?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "COR",
      "ciudad": "Córdoba & Sierras",
      "actualizado_at": "2026-11-06T09:38:21.545067+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "28% OFF",
          "ahorro_pct_num": 28,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 91,
              "precio_ars": 132000,
              "precio_texto": "$ 132.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "23 Nov - 28 Nov 2026",
              "noches": 5,
              "dias_restantes": 17,
              "precio_usd": 58,
              "precio_ars": 84100,
              "precio_texto": "$ 84.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-11-23%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-11-23/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "23% OFF",
          "ahorro_pct_num": 23,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-31",
              "fecha_vuelta": "2027-01-07",
              "fechas_texto": "31 Dec - 07 Jan 2027",
              "noches": 7,
              "dias_restantes": 55,
              "precio_usd": 58,
              "precio_ars": 84100,
              "precio_texto": "$ 84.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-12-31%20through%202027-01-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-12-31/2027-01-07?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-26",
              "fecha_vuelta": "2026-12-31",
              "fechas_texto": "26 Dec - 31 Dec 2026",
              "noches": 5,
              "dias_restantes": 50,
              "precio_usd": 66,
              "precio_ars": 95700,
              "precio_texto": "$ 95.700 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-12-26%20through%202026-12-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-12-26/2026-12-31?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-05",
              "fecha_vuelta": "2027-01-09",
              "fechas_texto": "05 Jan - 09 Jan 2027",
              "noches": 4,
              "dias_restantes": 60,
              "precio_usd": 53,
              "precio_ars": 76800,
              "precio_texto": "$ 76.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202027-01-05%20through%202027-01-09&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2027-01-05/2027-01-09?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-17",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "17 Jan - 22 Jan 2027",
              "noches": 5,
              "dias_restantes": 72,
              "precio_usd": 64,
              "precio_ars": 92800,
              "precio_texto": "$ 92.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202027-01-17%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2027-01-17/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "26% OFF",
        "ahorro_pct_num": 26,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-10",
            "fechas_texto": "05 May - 10 May 2027",
            "noches": 5,
            "dias_restantes": 180,
            "precio_usd": 55,
            "precio_ars": 79800,
            "precio_texto": "$ 79.800 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2027-05-05/2027-05-10?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "28% OFF",
          "ahorro_pct_num": 28,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 91,
              "precio_ars": 132000,
              "precio_texto": "$ 132.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "23 Nov - 28 Nov 2026",
              "noches": 5,
              "dias_restantes": 17,
              "precio_usd": 58,
              "precio_ars": 84100,
              "precio_texto": "$ 84.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-11-23%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-11-23/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "23% OFF",
          "ahorro_pct_num": 23,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-31",
              "fecha_vuelta": "2027-01-07",
              "fechas_texto": "31 Dec - 07 Jan 2027",
              "noches": 7,
              "dias_restantes": 55,
              "precio_usd": 58,
              "precio_ars": 84100,
              "precio_texto": "$ 84.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-12-31%20through%202027-01-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-12-31/2027-01-07?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-26",
              "fecha_vuelta": "2026-12-31",
              "fechas_texto": "26 Dec - 31 Dec 2026",
              "noches": 5,
              "dias_restantes": 50,
              "precio_usd": 66,
              "precio_ars": 95700,
              "precio_texto": "$ 95.700 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202026-12-26%20through%202026-12-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2026-12-26/2026-12-31?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-05",
              "fecha_vuelta": "2027-01-09",
              "fechas_texto": "05 Jan - 09 Jan 2027",
              "noches": 4,
              "dias_restantes": 60,
              "precio_usd": 53,
              "precio_ars": 76800,
              "precio_texto": "$ 76.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202027-01-05%20through%202027-01-09&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2027-01-05/2027-01-09?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-17",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "17 Jan - 22 Jan 2027",
              "noches": 5,
              "dias_restantes": 72,
              "precio_usd": 64,
              "precio_ars": 92800,
              "precio_texto": "$ 92.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202027-01-17%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2027-01-17/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "26% OFF",
          "ahorro_pct_num": 26,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-10",
              "fechas_texto": "05 May - 10 May 2027",
              "noches": 5,
              "dias_restantes": 180,
              "precio_usd": 55,
              "precio_ars": 79800,
              "precio_texto": "$ 79.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20COR%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cor/2027-05-05/2027-05-10?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "calafate",
    "ciudad": "El Calafate & Glaciares",
    "pais": "Argentina",
    "bandera": "🧊",
    "iata": "FTE",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 218.809 ARS (US$ 162)",
    "comando_tg": "/calafate",
    "resena": "Portal de entrada al imponente Glaciar Perito Moreno y sus estruendosos desprendimientos de hielo. Minitrekking sobre el glaciar, estancias gauchas y navegación entre témpanos.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ FTE)",
        "fechas": "09 Mar - 20 Mar 2027",
        "noches": 11,
        "precio": "$ 218.809 ARS (US$ 162 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-03-09",
        "fecha_vuelta": "2027-03-20",
        "actualizado_en_vivo": true,
        "precio_ars": 218809,
        "precio_usd": 162
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ FTE)",
        "fechas": "17 Abr - 25 Abr 2027",
        "noches": 8,
        "precio": "$ 225.430 ARS (US$ 167 aprox)",
        "destacado": "Vuelo directo de 3h 15m",
        "fecha_ida": "2027-04-17",
        "fecha_vuelta": "2027-04-25",
        "actualizado_en_vivo": true,
        "precio_ars": 225430,
        "precio_usd": 167
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ FTE)",
        "fechas": "23 Feb - 04 Mar 2027",
        "noches": 9,
        "precio": "$ 226.660 ARS (US$ 168 aprox)",
        "destacado": "Múltiples frecuencias",
        "fecha_ida": "2027-02-23",
        "fecha_vuelta": "2027-03-04",
        "actualizado_en_vivo": true,
        "precio_ars": 226660,
        "precio_usd": 168
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Posada Los Álamos",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (2.800 reseñas)",
        "zona": "Centro / Campo de Golf Privado",
        "precio_noche": "$ 310.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort tradicional patagónico con campo de golf par 3, spa de nivel internacional y asador criollo de cordero.",
        "booking_url": "https://www.booking.com/hotel/ar/posada-los-alamos.es.html",
        "precio_noche_ars": 310000,
        "precio_noche_usd": 230,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Xelena Hotel & Suites",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.400 reseñas)",
        "zona": "Costanera Lago Argentino",
        "precio_noche": "$ 210.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Piscina in-out climatizada con vistas panorámicas al Lago Argentino y diseño contemporáneo de alta gama.",
        "booking_url": "https://www.booking.com/hotel/ar/xelena-deluxe-suites.es.html",
        "precio_noche_ars": 210000,
        "precio_noche_usd": 156,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Kosten Aike",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (1.950 reseñas)",
        "zona": "Centro de El Calafate",
        "precio_noche": "$ 88.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Decorado con motivos tehuelches, sauna, gimnasio y excelente ubicación a 2 cuadras de la avenida principal.",
        "booking_url": "https://www.booking.com/hotel/ar/kosten-aike.es.html",
        "precio_noche_ars": 88000,
        "precio_noche_usd": 65,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "$ 197.000 ARS",
      "rango_max": "$ 317.000 ARS",
      "mensaje": "¡Tarifa baja confirmada para visitar los Glaciares!",
      "texto_pin": "$ 218.809 ARS es una tarifa récord baja",
      "consejo": "Octubre y noviembre ofrecen clima ideal y pasarelas con menos concurrencia masiva.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        271323,
        256007,
        242878,
        229749,
        218809
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 30 días · Tarifa récord más baja detectada",
      "aerolinea": "Aerolíneas Argentinas",
      "escalas": "Directo (AEP ➔ FTE)",
      "fechas": "29 Nov - 05 Dic 2026",
      "fecha_ida": "2026-11-29",
      "fecha_vuelta": "2026-12-05",
      "noches": 6,
      "dias_para_el_vuelo": 30,
      "precio": "$ 195.000 ARS",
      "precio_usd": "US$ 144 aprox",
      "precio_ars": 195000,
      "precio_usd_num": 144,
      "ahorro_porcentaje": "29% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20BUE%20on%202026-11-29%20through%202026-12-05&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/calafate/2026-11-29/2026-12-05?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "FTE",
      "ciudad": "El Calafate & Glaciares",
      "actualizado_at": "2026-11-06T09:38:21.822642+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "29% OFF",
          "ahorro_pct_num": 29,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-17",
              "fechas_texto": "11 Nov - 17 Nov 2026",
              "noches": 6,
              "dias_restantes": 5,
              "precio_usd": 199,
              "precio_ars": 288600,
              "precio_texto": "$ 288.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-11-11%20through%202026-11-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-11-11/2026-11-17?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-22",
              "fecha_vuelta": "2026-11-29",
              "fechas_texto": "22 Nov - 29 Nov 2026",
              "noches": 7,
              "dias_restantes": 16,
              "precio_usd": 255,
              "precio_ars": 369800,
              "precio_texto": "$ 369.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-11-22%20through%202026-11-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-11-22/2026-11-29?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-17",
              "fecha_vuelta": "2026-12-20",
              "fechas_texto": "17 Dec - 20 Dec 2026",
              "noches": 3,
              "dias_restantes": 41,
              "precio_usd": 271,
              "precio_ars": 393000,
              "precio_texto": "$ 393.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-12-17%20through%202026-12-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-12-17/2026-12-20?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-07",
              "fecha_vuelta": "2026-12-10",
              "fechas_texto": "07 Dec - 10 Dec 2026",
              "noches": 3,
              "dias_restantes": 31,
              "precio_usd": 275,
              "precio_ars": 398800,
              "precio_texto": "$ 398.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-12-07%20through%202026-12-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-12-07/2026-12-10?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "19% OFF",
          "ahorro_pct_num": 19,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-13",
              "fecha_vuelta": "2027-01-20",
              "fechas_texto": "13 Jan - 20 Jan 2027",
              "noches": 7,
              "dias_restantes": 68,
              "precio_usd": 261,
              "precio_ars": 378400,
              "precio_texto": "$ 378.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202027-01-13%20through%202027-01-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2027-01-13/2027-01-20?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-01-23",
              "fechas_texto": "20 Jan - 23 Jan 2027",
              "noches": 3,
              "dias_restantes": 75,
              "precio_usd": 274,
              "precio_ars": 397300,
              "precio_texto": "$ 397.300 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202027-01-20%20through%202027-01-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2027-01-20/2027-01-23?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "27% OFF",
        "ahorro_pct_num": 27,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-14",
            "fecha_vuelta": "2027-05-17",
            "fechas_texto": "14 May - 17 May 2027",
            "noches": 3,
            "dias_restantes": 189,
            "precio_usd": 215,
            "precio_ars": 311800,
            "precio_texto": "$ 311.800 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202027-05-14%20through%202027-05-17&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2027-05-14/2027-05-17?affilid=flightbot",
            "aerolinea_gate": "Clickavia",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "29% OFF",
          "ahorro_pct_num": 29,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-17",
              "fechas_texto": "11 Nov - 17 Nov 2026",
              "noches": 6,
              "dias_restantes": 5,
              "precio_usd": 199,
              "precio_ars": 288600,
              "precio_texto": "$ 288.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-11-11%20through%202026-11-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-11-11/2026-11-17?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-22",
              "fecha_vuelta": "2026-11-29",
              "fechas_texto": "22 Nov - 29 Nov 2026",
              "noches": 7,
              "dias_restantes": 16,
              "precio_usd": 255,
              "precio_ars": 369800,
              "precio_texto": "$ 369.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-11-22%20through%202026-11-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-11-22/2026-11-29?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-17",
              "fecha_vuelta": "2026-12-20",
              "fechas_texto": "17 Dec - 20 Dec 2026",
              "noches": 3,
              "dias_restantes": 41,
              "precio_usd": 271,
              "precio_ars": 393000,
              "precio_texto": "$ 393.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-12-17%20through%202026-12-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-12-17/2026-12-20?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-07",
              "fecha_vuelta": "2026-12-10",
              "fechas_texto": "07 Dec - 10 Dec 2026",
              "noches": 3,
              "dias_restantes": 31,
              "precio_usd": 275,
              "precio_ars": 398800,
              "precio_texto": "$ 398.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202026-12-07%20through%202026-12-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2026-12-07/2026-12-10?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "19% OFF",
          "ahorro_pct_num": 19,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-13",
              "fecha_vuelta": "2027-01-20",
              "fechas_texto": "13 Jan - 20 Jan 2027",
              "noches": 7,
              "dias_restantes": 68,
              "precio_usd": 261,
              "precio_ars": 378400,
              "precio_texto": "$ 378.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202027-01-13%20through%202027-01-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2027-01-13/2027-01-20?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-01-23",
              "fechas_texto": "20 Jan - 23 Jan 2027",
              "noches": 3,
              "dias_restantes": 75,
              "precio_usd": 274,
              "precio_ars": 397300,
              "precio_texto": "$ 397.300 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202027-01-20%20through%202027-01-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2027-01-20/2027-01-23?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "27% OFF",
          "ahorro_pct_num": 27,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-14",
              "fecha_vuelta": "2027-05-17",
              "fechas_texto": "14 May - 17 May 2027",
              "noches": 3,
              "dias_restantes": 189,
              "precio_usd": 215,
              "precio_ars": 311800,
              "precio_texto": "$ 311.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FTE%20from%20AEP%20on%202027-05-14%20through%202027-05-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fte/2027-05-14/2027-05-17?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "jujuy",
    "ciudad": "Jujuy & Quebrada de Humahuaca",
    "pais": "Argentina",
    "bandera": "🌵",
    "iata": "JUJ",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 254.678 ARS (US$ 189)",
    "comando_tg": "/jujuy",
    "resena": "El Cerro de los Siete Colores en Purmamarca, Tilcara y las serranías del Hornocal. Patrimonio de la Humanidad con cultura andina milenaria viva y salares infinitos.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ JUJ)",
        "fechas": "29 Mar - 05 Abr 2027",
        "noches": 7,
        "precio": "$ 254.678 ARS (US$ 189 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-03-29",
        "fecha_vuelta": "2027-04-05",
        "actualizado_en_vivo": true,
        "precio_ars": 254678,
        "precio_usd": 189
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ JUJ)",
        "fechas": "05 Abr - 12 Abr 2027",
        "noches": 7,
        "precio": "$ 272.505 ARS (US$ 202 aprox)",
        "destacado": "Vuelo directo de 2h 15m",
        "fecha_ida": "2027-04-05",
        "fecha_vuelta": "2027-04-12",
        "actualizado_en_vivo": true,
        "precio_ars": 272505,
        "precio_usd": 202
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ JUJ)",
        "fechas": "12 Abr - 19 Abr 2027",
        "noches": 7,
        "precio": "$ 310.707 ARS (US$ 230 aprox)",
        "destacado": "Excelente puntualidad",
        "fecha_ida": "2027-04-12",
        "fecha_vuelta": "2027-04-19",
        "actualizado_en_vivo": true,
        "precio_ars": 310707,
        "precio_usd": 230
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "El Manantial del Silencio",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (1.280 reseñas)",
        "zona": "Purmamarca (Paseo de los Colorados)",
        "precio_noche": "$ 260.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Boutique de arquitectura neocolonial construido en adobe frente a los cerros de Purmamarca, piscina y spa.",
        "booking_url": "https://www.booking.com/hotel/ar/el-manantial-del-silencio.es.html",
        "precio_noche_ars": 260000,
        "precio_noche_usd": 193,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hotel Huacalera",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (1.640 reseñas)",
        "zona": "Huacalera (Trópico de Capricornio)",
        "precio_noche": "$ 140.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Finca histórica restaurada con huerta orgánica propia, piscina al aire libre y gastronomía de autor.",
        "booking_url": "https://www.booking.com/hotel/ar/hotel-huacalera.es.html",
        "precio_noche_ars": 140000,
        "precio_noche_usd": 104,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Altos de la Viña Hotel",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (1.920 reseñas)",
        "zona": "San Salvador de Jujuy (Colina Panorámica)",
        "precio_noche": "$ 72.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Vistas panorámicas a la ciudad y a la quebrada, piscina descubierta y fácil acceso a la Ruta 9.",
        "booking_url": "https://www.booking.com/hotel/ar/altos-de-la-vina.es.html",
        "precio_noche_ars": 72000,
        "precio_noche_usd": 53,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "$ 229.000 ARS",
      "rango_max": "$ 369.000 ARS",
      "mensaje": "¡Precio bajo para explorar la Quebrada de Humahuaca!",
      "texto_pin": "$ 254.678 ARS es una tarifa récord baja",
      "consejo": "Combinar vuelo a Jujuy con regreso desde Salta permite recorrer toda la quebrada en auto alquilado sin retroceder.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        315801,
        297973,
        282693,
        267412,
        254678
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "Aerolíneas Argentinas",
      "escalas": "Directo (AEP ➔ JUJ)",
      "fechas": "25 Nov - 30 Nov 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-11-30",
      "noches": 5,
      "dias_para_el_vuelo": 26,
      "precio": "$ 159.000 ARS",
      "precio_usd": "US$ 118 aprox",
      "precio_ars": 159000,
      "precio_usd_num": 118,
      "ahorro_porcentaje": "31% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20BUE%20on%202026-11-25%20through%202026-11-30&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jujuy/2026-11-25/2026-11-30?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "JUJ",
      "ciudad": "Jujuy & Quebrada de Humahuaca",
      "actualizado_at": "2026-11-06T09:38:22.065954+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "31% OFF",
          "ahorro_pct_num": 31,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-15",
              "fechas_texto": "11 Nov - 15 Nov 2026",
              "noches": 4,
              "dias_restantes": 5,
              "precio_usd": 269,
              "precio_ars": 390000,
              "precio_texto": "$ 390.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202026-11-11%20through%202026-11-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2026-11-11/2026-11-15?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "23 Nov - 28 Nov 2026",
              "noches": 5,
              "dias_restantes": 17,
              "precio_usd": 118,
              "precio_ars": 171100,
              "precio_texto": "$ 171.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202026-11-23%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2026-11-23/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "26% OFF",
          "ahorro_pct_num": 26,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "12 Dec - 17 Dec 2026",
              "noches": 5,
              "dias_restantes": 36,
              "precio_usd": 124,
              "precio_ars": 179800,
              "precio_texto": "$ 179.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202026-12-12%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2026-12-12/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 130,
              "precio_ars": 188500,
              "precio_texto": "$ 188.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Mar 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "29% OFF",
        "ahorro_pct_num": 29,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-03-29",
            "fecha_vuelta": "2027-04-05",
            "fechas_texto": "29 Mar - 05 Apr 2027",
            "noches": 7,
            "dias_restantes": 143,
            "precio_usd": 165,
            "precio_ars": 239200,
            "precio_texto": "$ 239.200 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202027-03-29%20through%202027-04-05&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2027-03-29/2027-04-05?affilid=flightbot",
            "aerolinea_gate": "Trip.com",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "31% OFF",
          "ahorro_pct_num": 31,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-15",
              "fechas_texto": "11 Nov - 15 Nov 2026",
              "noches": 4,
              "dias_restantes": 5,
              "precio_usd": 269,
              "precio_ars": 390000,
              "precio_texto": "$ 390.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202026-11-11%20through%202026-11-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2026-11-11/2026-11-15?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "23 Nov - 28 Nov 2026",
              "noches": 5,
              "dias_restantes": 17,
              "precio_usd": 118,
              "precio_ars": 171100,
              "precio_texto": "$ 171.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202026-11-23%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2026-11-23/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "26% OFF",
          "ahorro_pct_num": 26,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "12 Dec - 17 Dec 2026",
              "noches": 5,
              "dias_restantes": 36,
              "precio_usd": 124,
              "precio_ars": 179800,
              "precio_texto": "$ 179.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202026-12-12%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2026-12-12/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 130,
              "precio_ars": 188500,
              "precio_texto": "$ 188.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Mar 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "29% OFF",
          "ahorro_pct_num": 29,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-03-29",
              "fecha_vuelta": "2027-04-05",
              "fechas_texto": "29 Mar - 05 Apr 2027",
              "noches": 7,
              "dias_restantes": 143,
              "precio_usd": 165,
              "precio_ars": 239200,
              "precio_texto": "$ 239.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JUJ%20from%20AEP%20on%202027-03-29%20through%202027-04-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/juj/2027-03-29/2027-04-05?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "mendoza",
    "ciudad": "Mendoza & Valle de Uco",
    "pais": "Argentina",
    "bandera": "🍷",
    "iata": "MDZ",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "precio_desde": "$ 111.126 ARS (US$ 82)",
    "comando_tg": "/mendoza",
    "resena": "Capital internacional del vino y los viñedos al pie de la cordillera de los Andes. Bodegas futuristas en Valle de Uco con menús de pasos maridados, la noche de calle Arístides y el imponente Cerro Aconcagua.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ MDZ)",
        "fechas": "01 Feb - 04 Feb 2027",
        "noches": 3,
        "precio": "$ 111.126 ARS (US$ 82 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-02-01",
        "fecha_vuelta": "2027-02-04",
        "actualizado_en_vivo": true,
        "precio_ars": 111126,
        "precio_usd": 82
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP/EZE ➔ MDZ)",
        "fechas": "08 Ene - 11 Ene 2027",
        "noches": 3,
        "precio": "$ 111.334 ARS (US$ 82 aprox)",
        "destacado": "Equipaje de mano estándar",
        "fecha_ida": "2027-01-08",
        "fecha_vuelta": "2027-01-11",
        "actualizado_en_vivo": true,
        "precio_ars": 111334,
        "precio_usd": 82
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ MDZ)",
        "fechas": "12 Ene - 19 Ene 2027",
        "noches": 7,
        "precio": "$ 119.923 ARS (US$ 89 aprox)",
        "destacado": "Gran disponibilidad de horarios",
        "fecha_ida": "2027-01-12",
        "fecha_vuelta": "2027-01-19",
        "actualizado_en_vivo": true,
        "precio_ars": 119923,
        "precio_usd": 89
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "The Vines Resort & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (1.290 reseñas)",
        "zona": "Valle de Uco (Los Chacayes)",
        "precio_noche": "$ 490.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El wine resort más exclusivo de Argentina: villas privadas rodeadas de viñedos y el restaurante 'Siete Fuegos' de Francis Mallmann frente a la cordillera.",
        "booking_url": "https://www.booking.com/hotel/ar/the-vines-resort-spa.es.html",
        "precio_noche_ars": 490000,
        "precio_noche_usd": 363,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Park Hyatt Mendoza Hotel, Casino & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (3.120 reseñas)",
        "zona": "Plaza Independencia (Pleno Centro)",
        "precio_noche": "$ 220.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Fachada neoclásica del siglo XIX frente a la plaza principal. Piscina descubierta climatizada, spa Kaua y los mejores restaurantes a pasos caminando.",
        "booking_url": "https://www.booking.com/hotel/ar/park-hyatt-mendoza.es.html",
        "precio_noche_ars": 220000,
        "precio_noche_usd": 163,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Huentala Hotel Boutique",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (2.560 reseñas)",
        "zona": "Centro Histórico (a 1 cuadra de Peatonal)",
        "precio_noche": "$ 72.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Boutique de arte con cava propia de degustación de vinos, piscina al aire libre, desayuno buffet incluido y tarifas accesibles sin sobreprecios.",
        "booking_url": "https://www.booking.com/hotel/ar/huentala.es.html",
        "precio_noche_ars": 72000,
        "precio_noche_usd": 53,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 18,
      "rango_min": "$ 100.000 ARS",
      "rango_max": "$ 161.000 ARS",
      "mensaje": "¡Oportunidad destacada! Menos de $90.000 ARS ida y vuelta a la capital del vino.",
      "texto_pin": "$ 111.126 ARS es una tarifa récord baja",
      "consejo": "Tarifa ideal para escapadas de enoturismo a bodegas de Valle de Uco. Aerolíneas Argentinas y JetSMART compiten fuerte en este corredor.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        137796,
        130017,
        123350,
        116682,
        111126
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "categoria_region": "cabotaje",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 27 días · Tarifa récord más baja detectada",
      "aerolinea": "JetSMART",
      "escalas": "Directo (AEP ➔ MDZ)",
      "fechas": "26 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-26",
      "fecha_vuelta": "2026-12-01",
      "noches": 5,
      "dias_para_el_vuelo": 27,
      "precio": "$ 94.200 ARS",
      "precio_usd": "US$ 70 aprox",
      "precio_ars": 94200,
      "precio_usd_num": 70,
      "ahorro_porcentaje": "30% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20BUE%20on%202026-11-26%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mendoza/2026-11-26/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "MDZ",
      "ciudad": "Mendoza & Valle de Uco",
      "actualizado_at": "2026-11-06T09:38:22.311896+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "30% OFF",
          "ahorro_pct_num": 30,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 103,
              "precio_ars": 149400,
              "precio_texto": "$ 149.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-22",
              "fecha_vuelta": "2026-11-25",
              "fechas_texto": "22 Nov - 25 Nov 2026",
              "noches": 3,
              "dias_restantes": 16,
              "precio_usd": 123,
              "precio_ars": 178400,
              "precio_texto": "$ 178.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-11-22%20through%202026-11-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-11-22/2026-11-25?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-05",
              "fechas_texto": "01 Dec - 05 Dec 2026",
              "noches": 4,
              "dias_restantes": 25,
              "precio_usd": 84,
              "precio_ars": 121800,
              "precio_texto": "$ 121.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-12-01%20through%202026-12-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-12-01/2026-12-05?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-31",
              "fecha_vuelta": "2027-01-03",
              "fechas_texto": "31 Dec - 03 Jan 2027",
              "noches": 3,
              "dias_restantes": 55,
              "precio_usd": 98,
              "precio_ars": 142100,
              "precio_texto": "$ 142.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-12-31%20through%202027-01-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-12-31/2027-01-03?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-08",
              "fecha_vuelta": "2027-01-11",
              "fechas_texto": "08 Jan - 11 Jan 2027",
              "noches": 3,
              "dias_restantes": 63,
              "precio_usd": 72,
              "precio_ars": 104400,
              "precio_texto": "$ 104.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202027-01-08%20through%202027-01-11&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2027-01-08/2027-01-11?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 77,
              "precio_ars": 111600,
              "precio_texto": "$ 111.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Jul 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "28% OFF",
        "ahorro_pct_num": 28,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-07-01",
            "fecha_vuelta": "2027-07-04",
            "fechas_texto": "01 Jul - 04 Jul 2027",
            "noches": 3,
            "dias_restantes": 237,
            "precio_usd": 92,
            "precio_ars": 133400,
            "precio_texto": "$ 133.400 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202027-07-01%20through%202027-07-04&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2027-07-01/2027-07-04?affilid=flightbot",
            "aerolinea_gate": "Clickavia",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "30% OFF",
          "ahorro_pct_num": 30,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 103,
              "precio_ars": 149400,
              "precio_texto": "$ 149.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-22",
              "fecha_vuelta": "2026-11-25",
              "fechas_texto": "22 Nov - 25 Nov 2026",
              "noches": 3,
              "dias_restantes": 16,
              "precio_usd": 123,
              "precio_ars": 178400,
              "precio_texto": "$ 178.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-11-22%20through%202026-11-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-11-22/2026-11-25?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-05",
              "fechas_texto": "01 Dec - 05 Dec 2026",
              "noches": 4,
              "dias_restantes": 25,
              "precio_usd": 84,
              "precio_ars": 121800,
              "precio_texto": "$ 121.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-12-01%20through%202026-12-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-12-01/2026-12-05?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-31",
              "fecha_vuelta": "2027-01-03",
              "fechas_texto": "31 Dec - 03 Jan 2027",
              "noches": 3,
              "dias_restantes": 55,
              "precio_usd": 98,
              "precio_ars": 142100,
              "precio_texto": "$ 142.100 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202026-12-31%20through%202027-01-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2026-12-31/2027-01-03?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-08",
              "fecha_vuelta": "2027-01-11",
              "fechas_texto": "08 Jan - 11 Jan 2027",
              "noches": 3,
              "dias_restantes": 63,
              "precio_usd": 72,
              "precio_ars": 104400,
              "precio_texto": "$ 104.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202027-01-08%20through%202027-01-11&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2027-01-08/2027-01-11?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 77,
              "precio_ars": 111600,
              "precio_texto": "$ 111.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Jul 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "28% OFF",
          "ahorro_pct_num": 28,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-07-01",
              "fecha_vuelta": "2027-07-04",
              "fechas_texto": "01 Jul - 04 Jul 2027",
              "noches": 3,
              "dias_restantes": 237,
              "precio_usd": 92,
              "precio_ars": 133400,
              "precio_texto": "$ 133.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MDZ%20from%20AEP%20on%202027-07-01%20through%202027-07-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mdz/2027-07-01/2027-07-04?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "neuquen",
    "ciudad": "Neuquén & Alto Valle",
    "pais": "Argentina",
    "bandera": "🦕",
    "iata": "NQN",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 84.811 ARS (US$ 63)",
    "comando_tg": "/neuquen",
    "resena": "Corazón energético y productivo de la Patagonia Norte: ruta del vino en San Patricio del Chañar, museos con los dinosaurios más gigantes del planeta en Villa El Chocón y río Limay.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ NQN)",
        "fechas": "03 Dic - 12 Dic 2026",
        "noches": 9,
        "precio": "$ 84.811 ARS (US$ 63 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-12-03",
        "fecha_vuelta": "2026-12-12",
        "actualizado_en_vivo": true,
        "precio_ars": 84811,
        "precio_usd": 63
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ NQN)",
        "fechas": "10 Dic - 19 Dic 2026",
        "noches": 9,
        "precio": "$ 90.748 ARS (US$ 67 aprox)",
        "destacado": "Vuelo directo de 1h 50m",
        "fecha_ida": "2026-12-10",
        "fecha_vuelta": "2026-12-19",
        "actualizado_en_vivo": true,
        "precio_ars": 90748,
        "precio_usd": 67
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ NQN)",
        "fechas": "17 Dic - 26 Dic 2026",
        "noches": 9,
        "precio": "$ 103.469 ARS (US$ 77 aprox)",
        "destacado": "Gran cantidad de frecuencias",
        "fecha_ida": "2026-12-17",
        "fecha_vuelta": "2026-12-26",
        "actualizado_en_vivo": true,
        "precio_ars": 103469,
        "precio_usd": 77
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Casino Magic",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Excepcional (2.200 reseñas)",
        "zona": "Parque Aeropuerto / Zona Oeste",
        "precio_noche": "$ 320.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Complejo 5 estrellas con piscina al aire libre climatizada, espectáculos en vivo, casino y spa de primer nivel.",
        "booking_url": "https://www.booking.com/hotel/ar/casino-magic.es.html",
        "precio_noche_ars": 320000,
        "precio_noche_usd": 237,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hilton Garden Inn Neuquén",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.600 reseñas)",
        "zona": "Torre Dr. Ramón / Alto Comahue",
        "precio_noche": "$ 135.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Edificio vanguardista conectado al shopping Alto Comahue con piscina cubierta, spa y restaurante internacional.",
        "booking_url": "https://www.booking.com/hotel/ar/hilton-garden-inn-neuquen.es.html",
        "precio_noche_ars": 135000,
        "precio_noche_usd": 100,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Cyan Soho Neuquén Hotel",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (1.950 reseñas)",
        "zona": "Centro Urbano de Neuquén",
        "precio_noche": "$ 72.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel moderno de estilo urbano céntrico con excelente desayuno buffet y conexión rápida al corredor petrolero.",
        "booking_url": "https://www.booking.com/hotel/ar/cyan-soho-neuquen.es.html",
        "precio_noche_ars": 72000,
        "precio_noche_usd": 53,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "$ 76.000 ARS",
      "rango_max": "$ 123.000 ARS",
      "mensaje": "¡Precio conveniente para volar al Alto Valle!",
      "texto_pin": "$ 84.811 ARS es una tarifa récord baja",
      "consejo": "Excelente base para conectar con el circuito de bodegas de San Patricio del Chañar a 45 minutos.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        105166,
        99229,
        94140,
        89052,
        84811
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 25 días · Tarifa récord más baja detectada",
      "aerolinea": "JetSMART",
      "escalas": "Directo (AEP ➔ NQN)",
      "fechas": "24 Nov - 29 Nov 2026",
      "fecha_ida": "2026-11-24",
      "fecha_vuelta": "2026-11-29",
      "noches": 5,
      "dias_para_el_vuelo": 25,
      "precio": "$ 98.500 ARS",
      "precio_usd": "US$ 73 aprox",
      "precio_ars": 98500,
      "precio_usd_num": 73,
      "ahorro_porcentaje": "31% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20BUE%20on%202026-11-24%20through%202026-11-29&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/neuquen/2026-11-24/2026-11-29?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "NQN",
      "ciudad": "Neuquén & Alto Valle",
      "actualizado_at": "2026-11-06T09:38:22.550155+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "31% OFF",
          "ahorro_pct_num": 31,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-18",
              "fecha_vuelta": "2026-11-25",
              "fechas_texto": "18 Nov - 25 Nov 2026",
              "noches": 7,
              "dias_restantes": 12,
              "precio_usd": 55,
              "precio_ars": 79800,
              "precio_texto": "$ 79.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202026-11-18%20through%202026-11-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2026-11-18/2026-11-25?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-11-29",
              "fechas_texto": "24 Nov - 29 Nov 2026",
              "noches": 5,
              "dias_restantes": 18,
              "precio_usd": 73,
              "precio_ars": 105800,
              "precio_texto": "$ 105.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202026-11-24%20through%202026-11-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2026-11-24/2026-11-29?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "26% OFF",
          "ahorro_pct_num": 26,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "12 Dec - 17 Dec 2026",
              "noches": 5,
              "dias_restantes": 36,
              "precio_usd": 77,
              "precio_ars": 111600,
              "precio_texto": "$ 111.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202026-12-12%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2026-12-12/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 80,
              "precio_ars": 116000,
              "precio_texto": "$ 116.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "29% OFF",
        "ahorro_pct_num": 29,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-10",
            "fechas_texto": "05 May - 10 May 2027",
            "noches": 5,
            "dias_restantes": 180,
            "precio_usd": 69,
            "precio_ars": 100000,
            "precio_texto": "$ 100.000 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2027-05-05/2027-05-10?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "31% OFF",
          "ahorro_pct_num": 31,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-18",
              "fecha_vuelta": "2026-11-25",
              "fechas_texto": "18 Nov - 25 Nov 2026",
              "noches": 7,
              "dias_restantes": 12,
              "precio_usd": 55,
              "precio_ars": 79800,
              "precio_texto": "$ 79.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202026-11-18%20through%202026-11-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2026-11-18/2026-11-25?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-11-29",
              "fechas_texto": "24 Nov - 29 Nov 2026",
              "noches": 5,
              "dias_restantes": 18,
              "precio_usd": 73,
              "precio_ars": 105800,
              "precio_texto": "$ 105.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202026-11-24%20through%202026-11-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2026-11-24/2026-11-29?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "26% OFF",
          "ahorro_pct_num": 26,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "12 Dec - 17 Dec 2026",
              "noches": 5,
              "dias_restantes": 36,
              "precio_usd": 77,
              "precio_ars": 111600,
              "precio_texto": "$ 111.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202026-12-12%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2026-12-12/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 80,
              "precio_ars": 116000,
              "precio_texto": "$ 116.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "29% OFF",
          "ahorro_pct_num": 29,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-10",
              "fechas_texto": "05 May - 10 May 2027",
              "noches": 5,
              "dias_restantes": 180,
              "precio_usd": 69,
              "precio_ars": 100000,
              "precio_texto": "$ 100.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NQN%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nqn/2027-05-05/2027-05-10?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "iguazu",
    "ciudad": "Puerto Iguazú & Triple Frontera",
    "pais": "Argentina / Brasil",
    "bandera": "🌊",
    "iata": "IGR",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "precio_desde": "$ 98.810 ARS (US$ 73)",
    "comando_tg": "/iguazu",
    "resena": "Una de las 7 Maravillas Naturales del Mundo: el estruendo de la Garganta del Diablo, pasarelas entre la selva subtropical misionera y la confluencia de los ríos Iguazú y Paraná en el Hito 3 Fronteras.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP/EZE ➔ IGR)",
        "fechas": "01 Dic - 04 Dic 2026",
        "noches": 3,
        "precio": "$ 98.810 ARS (US$ 73 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-12-01",
        "fecha_vuelta": "2026-12-04",
        "actualizado_en_vivo": true,
        "precio_ars": 98810,
        "precio_usd": 73
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ IGR)",
        "fechas": "03 Dic - 06 Dic 2026",
        "noches": 3,
        "precio": "$ 100.475 ARS (US$ 74 aprox)",
        "destacado": "Vuelo directo de 1h 50m",
        "fecha_ida": "2026-12-03",
        "fecha_vuelta": "2026-12-06",
        "actualizado_en_vivo": true,
        "precio_ars": 100475,
        "precio_usd": 74
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ IGR)",
        "fechas": "01 Dic - 05 Dic 2026",
        "noches": 4,
        "precio": "$ 100.475 ARS (US$ 74 aprox)",
        "destacado": "Llega al Parque Nacional a tiempo",
        "fecha_ida": "2026-12-01",
        "fecha_vuelta": "2026-12-05",
        "actualizado_en_vivo": true,
        "precio_ars": 100475,
        "precio_usd": 74
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Gran Meliá Iguazú",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (3.200 reseñas)",
        "zona": "Dentro del Parque Nacional Iguazú",
        "precio_noche": "$ 440.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El único hotel con vista frontal directa a la Garganta del Diablo. Piscina infinita de 50 metros frente a los saltos y acceso exclusivo a pie antes que abra el parque.",
        "booking_url": "https://www.booking.com/hotel/ar/gran-melia-iguazu.es.html",
        "precio_noche_ars": 440000,
        "precio_noche_usd": 326,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Loi Suites Iguazú Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (4.100 reseñas)",
        "zona": "Selva Iryapú (Reserva Ecológica)",
        "precio_noche": "$ 185.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Construido en plena selva misionera con puentes colgantes entre la vegetación, piscinas estilo laguna natural y gastronomía internacional.",
        "booking_url": "https://www.booking.com/hotel/ar/loi-suites-iguazu.es.html",
        "precio_noche_ars": 185000,
        "precio_noche_usd": 137,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "O2 Hotel Iguazú",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (2.280 reseñas)",
        "zona": "Centro Urbano de Puerto Iguazú",
        "precio_noche": "$ 65.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel moderno y sustentable en el centro con terraza rooftop panorámica, piscina, sauna, cercanía a restaurantes y precio muy accesible.",
        "booking_url": "https://www.booking.com/hotel/ar/o2-hotel-iguazu.es.html",
        "precio_noche_ars": 65000,
        "precio_noche_usd": 48,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 36,
      "rango_min": "$ 89.000 ARS",
      "rango_max": "$ 143.000 ARS",
      "mensaje": "Por el momento, se mantienen precios estándar para visitar las Cataratas del Iguazú.",
      "texto_pin": "$ 98.810 ARS es una tarifa récord baja",
      "consejo": "Excelente momento para comprar tickets de primavera. Horarios ideales saliendo de mañana temprano desde Aeroparque.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        122524,
        115608,
        109679,
        103750,
        98810
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "categoria_region": "cabotaje",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 28 días · Tarifa récord más baja detectada",
      "aerolinea": "JetSMART",
      "escalas": "Directo (AEP ➔ IGR)",
      "fechas": "27 Nov - 02 Dic 2026",
      "fecha_ida": "2026-11-27",
      "fecha_vuelta": "2026-12-02",
      "noches": 5,
      "dias_para_el_vuelo": 28,
      "precio": "$ 118.400 ARS",
      "precio_usd": "US$ 88 aprox",
      "precio_ars": 118400,
      "precio_usd_num": 88,
      "ahorro_porcentaje": "32% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20BUE%20on%202026-11-27%20through%202026-12-02&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/iguazu/2026-11-27/2026-12-02?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "IGR",
      "ciudad": "Puerto Iguazú & Triple Frontera",
      "actualizado_at": "2026-11-06T09:38:22.912289+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "32% OFF",
          "ahorro_pct_num": 32,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-29",
              "fecha_vuelta": "2026-12-03",
              "fechas_texto": "29 Nov - 03 Dec 2026",
              "noches": 4,
              "dias_restantes": 23,
              "precio_usd": 75,
              "precio_ars": 108800,
              "precio_texto": "$ 108.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-11-29%20through%202026-12-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-11-29/2026-12-03?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-20",
              "fecha_vuelta": "2026-11-22",
              "fechas_texto": "20 Nov - 22 Nov 2026",
              "noches": 2,
              "dias_restantes": 14,
              "precio_usd": 87,
              "precio_ars": 126200,
              "precio_texto": "$ 126.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-11-20%20through%202026-11-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-11-20/2026-11-22?affilid=flightbot",
              "aerolinea_gate": "Mego.travel",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "27% OFF",
          "ahorro_pct_num": 27,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-14",
              "fechas_texto": "12 Dec - 14 Dec 2026",
              "noches": 2,
              "dias_restantes": 36,
              "precio_usd": 61,
              "precio_ars": 88400,
              "precio_texto": "$ 88.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-12-12%20through%202026-12-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-12-12/2026-12-14?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-04",
              "fechas_texto": "01 Dec - 04 Dec 2026",
              "noches": 3,
              "dias_restantes": 25,
              "precio_usd": 64,
              "precio_ars": 92800,
              "precio_texto": "$ 92.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-12-01%20through%202026-12-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-12-01/2026-12-04?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "21% OFF",
          "ahorro_pct_num": 21,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-14",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "14 Jan - 16 Jan 2027",
              "noches": 2,
              "dias_restantes": 69,
              "precio_usd": 68,
              "precio_ars": 98600,
              "precio_texto": "$ 98.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202027-01-14%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2027-01-14/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "20 Jan - 22 Jan 2027",
              "noches": 2,
              "dias_restantes": 75,
              "precio_usd": 69,
              "precio_ars": 100000,
              "precio_texto": "$ 100.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202027-01-20%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2027-01-20/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "29% OFF",
        "ahorro_pct_num": 29,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-07",
            "fecha_vuelta": "2027-05-09",
            "fechas_texto": "07 May - 09 May 2027",
            "noches": 2,
            "dias_restantes": 182,
            "precio_usd": 79,
            "precio_ars": 114600,
            "precio_texto": "$ 114.600 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202027-05-07%20through%202027-05-09&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2027-05-07/2027-05-09?affilid=flightbot",
            "aerolinea_gate": "Kiwi.com",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "32% OFF",
          "ahorro_pct_num": 32,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-29",
              "fecha_vuelta": "2026-12-03",
              "fechas_texto": "29 Nov - 03 Dec 2026",
              "noches": 4,
              "dias_restantes": 23,
              "precio_usd": 75,
              "precio_ars": 108800,
              "precio_texto": "$ 108.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-11-29%20through%202026-12-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-11-29/2026-12-03?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-20",
              "fecha_vuelta": "2026-11-22",
              "fechas_texto": "20 Nov - 22 Nov 2026",
              "noches": 2,
              "dias_restantes": 14,
              "precio_usd": 87,
              "precio_ars": 126200,
              "precio_texto": "$ 126.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-11-20%20through%202026-11-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-11-20/2026-11-22?affilid=flightbot",
              "aerolinea_gate": "Mego.travel",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "27% OFF",
          "ahorro_pct_num": 27,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-14",
              "fechas_texto": "12 Dec - 14 Dec 2026",
              "noches": 2,
              "dias_restantes": 36,
              "precio_usd": 61,
              "precio_ars": 88400,
              "precio_texto": "$ 88.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-12-12%20through%202026-12-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-12-12/2026-12-14?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-04",
              "fechas_texto": "01 Dec - 04 Dec 2026",
              "noches": 3,
              "dias_restantes": 25,
              "precio_usd": 64,
              "precio_ars": 92800,
              "precio_texto": "$ 92.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202026-12-01%20through%202026-12-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2026-12-01/2026-12-04?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "21% OFF",
          "ahorro_pct_num": 21,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-14",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "14 Jan - 16 Jan 2027",
              "noches": 2,
              "dias_restantes": 69,
              "precio_usd": 68,
              "precio_ars": 98600,
              "precio_texto": "$ 98.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202027-01-14%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2027-01-14/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "20 Jan - 22 Jan 2027",
              "noches": 2,
              "dias_restantes": 75,
              "precio_usd": 69,
              "precio_ars": 100000,
              "precio_texto": "$ 100.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202027-01-20%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2027-01-20/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "29% OFF",
          "ahorro_pct_num": 29,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-07",
              "fecha_vuelta": "2027-05-09",
              "fechas_texto": "07 May - 09 May 2027",
              "noches": 2,
              "dias_restantes": 182,
              "precio_usd": 79,
              "precio_ars": 114600,
              "precio_texto": "$ 114.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IGR%20from%20AEP%20on%202027-05-07%20through%202027-05-09&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/igr/2027-05-07/2027-05-09?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "madryn",
    "ciudad": "Puerto Madryn & Península Valdés",
    "pais": "Argentina",
    "bandera": "🐋",
    "iata": "REL",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 138.519 ARS (US$ 103)",
    "comando_tg": "/madryn",
    "resena": "Santuario mundial de fauna marina: avistaje de Ballenas Francas Australes desde la playa El Doradillo y lanchas en Puerto Pirámides, buceo con lobos marinos y pingüinos en Punta Tombo.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ REL)",
        "fechas": "23 Nov - 28 Nov 2026",
        "noches": 5,
        "precio": "$ 138.519 ARS (US$ 103 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-11-23",
        "fecha_vuelta": "2026-11-28",
        "actualizado_en_vivo": true,
        "precio_ars": 138519,
        "precio_usd": 103
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ REL)",
        "fechas": "23 Nov - 27 Nov 2026",
        "noches": 4,
        "precio": "$ 142.890 ARS (US$ 106 aprox)",
        "destacado": "Vuelo directo de 2h",
        "fecha_ida": "2026-11-23",
        "fecha_vuelta": "2026-11-27",
        "actualizado_en_vivo": true,
        "precio_ars": 142890,
        "precio_usd": 106
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ REL/PMY)",
        "fechas": "23 Nov - 26 Nov 2026",
        "noches": 3,
        "precio": "$ 181.123 ARS (US$ 134 aprox)",
        "destacado": "Opción aeropuerto directo PMY",
        "fecha_ida": "2026-11-23",
        "fecha_vuelta": "2026-11-26",
        "actualizado_en_vivo": true,
        "precio_ars": 181123,
        "precio_usd": 134
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Territorio",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (1.450 reseñas)",
        "zona": "Punta Cuevas / Frente al Mar",
        "precio_noche": "$ 240.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Boutique de arquitectura contemporánea frente a las aguas del Golfo Nuevo con vista directa al paso de ballenas.",
        "booking_url": "https://www.booking.com/hotel/ar/territorio.es.html",
        "precio_noche_ars": 240000,
        "precio_noche_usd": 178,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Rayentray Puerto Madryn",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Fantástico (2.800 reseñas)",
        "zona": "Costanera Sur / Playa",
        "precio_noche": "$ 160.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Todas sus habitaciones tienen balcón con vista panorámica al mar. Casino, piscina cubierta climatizada y spa.",
        "booking_url": "https://www.booking.com/hotel/ar/rayentray-puerto-madryn.es.html",
        "precio_noche_ars": 160000,
        "precio_noche_usd": 119,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Dazzler by Wyndham Puerto Madryn",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (2.100 reseñas)",
        "zona": "Centro / Frente a la Bahía",
        "precio_noche": "$ 82.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Frente al mar en el centro de Madryn con gimnasio, sauna y excelente restaurante con cocina de mar.",
        "booking_url": "https://www.booking.com/hotel/ar/dazzler-puerto-madryn.es.html",
        "precio_noche_ars": 82000,
        "precio_noche_usd": 61,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "$ 125.000 ARS",
      "rango_max": "$ 201.000 ARS",
      "mensaje": "¡Temporada alta de ballenas con tarifa de oportunidad!",
      "texto_pin": "$ 138.519 ARS es una tarifa récord baja",
      "consejo": "Octubre y noviembre es el pico máximo de avistaje de ballenas con sus crías en el Golfo Nuevo.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        171764,
        162067,
        153756,
        145445,
        138519
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 27 días · Tarifa récord más baja detectada",
      "aerolinea": "Aerolíneas Argentinas",
      "escalas": "Directo (AEP ➔ REL)",
      "fechas": "26 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-26",
      "fecha_vuelta": "2026-12-01",
      "noches": 5,
      "dias_para_el_vuelo": 27,
      "precio": "$ 142.000 ARS",
      "precio_usd": "US$ 105 aprox",
      "precio_ars": 142000,
      "precio_usd_num": 105,
      "ahorro_porcentaje": "26% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20BUE%20on%202026-11-26%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/madryn/2026-11-26/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "REL",
      "ciudad": "Puerto Madryn & Península Valdés",
      "actualizado_at": "2026-11-06T09:38:23.154929+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "26% OFF",
          "ahorro_pct_num": 26,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "23 Nov - 28 Nov 2026",
              "noches": 5,
              "dias_restantes": 17,
              "precio_usd": 90,
              "precio_ars": 130500,
              "precio_texto": "$ 130.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202026-11-23%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2026-11-23/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-16",
              "fechas_texto": "13 Nov - 16 Nov 2026",
              "noches": 3,
              "dias_restantes": 7,
              "precio_usd": 110,
              "precio_ars": 159500,
              "precio_texto": "$ 159.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202026-11-13%20through%202026-11-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2026-11-13/2026-11-16?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "12 Dec - 17 Dec 2026",
              "noches": 5,
              "dias_restantes": 36,
              "precio_usd": 110,
              "precio_ars": 159500,
              "precio_texto": "$ 159.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202026-12-12%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2026-12-12/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 116,
              "precio_ars": 168200,
              "precio_texto": "$ 168.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "24% OFF",
        "ahorro_pct_num": 24,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-10",
            "fechas_texto": "05 May - 10 May 2027",
            "noches": 5,
            "dias_restantes": 180,
            "precio_usd": 100,
            "precio_ars": 145000,
            "precio_texto": "$ 145.000 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2027-05-05/2027-05-10?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "26% OFF",
          "ahorro_pct_num": 26,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "23 Nov - 28 Nov 2026",
              "noches": 5,
              "dias_restantes": 17,
              "precio_usd": 90,
              "precio_ars": 130500,
              "precio_texto": "$ 130.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202026-11-23%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2026-11-23/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-16",
              "fechas_texto": "13 Nov - 16 Nov 2026",
              "noches": 3,
              "dias_restantes": 7,
              "precio_usd": 110,
              "precio_ars": 159500,
              "precio_texto": "$ 159.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202026-11-13%20through%202026-11-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2026-11-13/2026-11-16?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "12 Dec - 17 Dec 2026",
              "noches": 5,
              "dias_restantes": 36,
              "precio_usd": 110,
              "precio_ars": 159500,
              "precio_texto": "$ 159.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202026-12-12%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2026-12-12/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 116,
              "precio_ars": 168200,
              "precio_texto": "$ 168.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-10",
              "fechas_texto": "05 May - 10 May 2027",
              "noches": 5,
              "dias_restantes": 180,
              "precio_usd": 100,
              "precio_ars": 145000,
              "precio_texto": "$ 145.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REL%20from%20AEP%20on%202027-05-05%20through%202027-05-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rel/2027-05-05/2027-05-10?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "salta",
    "ciudad": "Salta & Valles Calchaquíes",
    "pais": "Argentina",
    "bandera": "⛰️",
    "iata": "SLA",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 108.553 ARS (US$ 80)",
    "comando_tg": "/salta",
    "resena": "La Linda colonial: arquitectura virreinal intacta, peñas folklóricas y punto de partida estratégico hacia los viñedos de altura de Cafayate, Cachi y las Salinas Grandes.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ SLA)",
        "fechas": "05 Mar - 09 Mar 2027",
        "noches": 4,
        "precio": "$ 108.553 ARS (US$ 80 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-03-05",
        "fecha_vuelta": "2027-03-09",
        "actualizado_en_vivo": true,
        "precio_ars": 108553,
        "precio_usd": 80
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ SLA)",
        "fechas": "01 Ene - 08 Ene 2027",
        "noches": 7,
        "precio": "$ 116.536 ARS (US$ 86 aprox)",
        "destacado": "Vuelo directo de 2h 10m",
        "fecha_ida": "2027-01-01",
        "fecha_vuelta": "2027-01-08",
        "actualizado_en_vivo": true,
        "precio_ars": 116536,
        "precio_usd": 86
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ SLA)",
        "fechas": "05 Ene - 11 Ene 2027",
        "noches": 6,
        "precio": "$ 140.771 ARS (US$ 104 aprox)",
        "destacado": "Múltiples horarios diarios",
        "fecha_ida": "2027-01-05",
        "fecha_vuelta": "2027-01-11",
        "actualizado_en_vivo": true,
        "precio_ars": 140771,
        "precio_usd": 104
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "House of Jasmines Relais & Châteaux",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (1.450 reseñas)",
        "zona": "Valle de Lerma / Finca Histórica",
        "precio_noche": "$ 285.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Estancia centenaria al pie de los Andes con parque arbolado de eucaliptos, spa andino y alta gastronomía norteña.",
        "booking_url": "https://www.booking.com/hotel/ar/house-of-jasmines.es.html",
        "precio_noche_ars": 285000,
        "precio_noche_usd": 211,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hotel Alejandro I",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.200 reseñas)",
        "zona": "Plaza Belgrano (Centro)",
        "precio_noche": "$ 138.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel 5 estrellas frente a la plaza con piscina cubierta climatizada, vistas panorámicas al Valle de Lerma y gastronomía regional.",
        "booking_url": "https://www.booking.com/hotel/ar/alejandro-i.es.html",
        "precio_noche_ars": 138000,
        "precio_noche_usd": 102,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Design Suites Salta",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (2.350 reseñas)",
        "zona": "Paseo Güemes / Centro Histórico",
        "precio_noche": "$ 76.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño contemporáneo en el centro histórico, piscina en la azotea y excelente relación costo/beneficio para recorrer peñas a pie.",
        "booking_url": "https://www.booking.com/hotel/ar/design-suites-salta.es.html",
        "precio_noche_ars": 76000,
        "precio_noche_usd": 56,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 22,
      "rango_min": "$ 98.000 ARS",
      "rango_max": "$ 157.000 ARS",
      "mensaje": "¡Oportunidad en el Norte Argentino! Precios en el segmento más bajo de la temporada.",
      "texto_pin": "$ 108.553 ARS es una tarifa récord baja",
      "consejo": "JetSMART ofrece tarifas imbatibles para primavera. Salidas ideales desde Aeroparque.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        134606,
        127007,
        120494,
        113981,
        108553
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 24 días · Tarifa récord más baja detectada",
      "aerolinea": "JetSMART",
      "escalas": "Directo (AEP ➔ SLA)",
      "fechas": "23 Nov - 28 Nov 2026",
      "fecha_ida": "2026-11-23",
      "fecha_vuelta": "2026-11-28",
      "noches": 5,
      "dias_para_el_vuelo": 24,
      "precio": "$ 124.000 ARS",
      "precio_usd": "US$ 92 aprox",
      "precio_ars": 124000,
      "precio_usd_num": 92,
      "ahorro_porcentaje": "27% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20BUE%20on%202026-11-23%20through%202026-11-28&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/salta/2026-11-23/2026-11-28?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "SLA",
      "ciudad": "Salta & Valles Calchaquíes",
      "actualizado_at": "2026-11-06T09:38:23.397512+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "27% OFF",
          "ahorro_pct_num": 27,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-26",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "26 Nov - 02 Dec 2026",
              "noches": 6,
              "dias_restantes": 20,
              "precio_usd": 83,
              "precio_ars": 120400,
              "precio_texto": "$ 120.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-11-26%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-11-26/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 100,
              "precio_ars": 145000,
              "precio_texto": "$ 145.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-10",
              "fecha_vuelta": "2026-12-13",
              "fechas_texto": "10 Dec - 13 Dec 2026",
              "noches": 3,
              "dias_restantes": 34,
              "precio_usd": 63,
              "precio_ars": 91400,
              "precio_texto": "$ 91.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-12-10%20through%202026-12-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-12-10/2026-12-13?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2026-12-25",
              "fechas_texto": "21 Dec - 25 Dec 2026",
              "noches": 4,
              "dias_restantes": 45,
              "precio_usd": 102,
              "precio_ars": 147900,
              "precio_texto": "$ 147.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-12-21%20through%202026-12-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-12-21/2026-12-25?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-01",
              "fecha_vuelta": "2027-01-08",
              "fechas_texto": "01 Jan - 08 Jan 2027",
              "noches": 7,
              "dias_restantes": 56,
              "precio_usd": 75,
              "precio_ars": 108800,
              "precio_texto": "$ 108.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202027-01-01%20through%202027-01-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2027-01-01/2027-01-08?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-05",
              "fecha_vuelta": "2027-01-11",
              "fechas_texto": "05 Jan - 11 Jan 2027",
              "noches": 6,
              "dias_restantes": 60,
              "precio_usd": 91,
              "precio_ars": 132000,
              "precio_texto": "$ 132.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202027-01-05%20through%202027-01-11&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2027-01-05/2027-01-11?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Jul 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "25% OFF",
        "ahorro_pct_num": 25,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-07-19",
            "fecha_vuelta": "2027-07-26",
            "fechas_texto": "19 Jul - 26 Jul 2027",
            "noches": 7,
            "dias_restantes": 255,
            "precio_usd": 143,
            "precio_ars": 207400,
            "precio_texto": "$ 207.400 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202027-07-19%20through%202027-07-26&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2027-07-19/2027-07-26?affilid=flightbot",
            "aerolinea_gate": "Trip.com",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "27% OFF",
          "ahorro_pct_num": 27,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-26",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "26 Nov - 02 Dec 2026",
              "noches": 6,
              "dias_restantes": 20,
              "precio_usd": 83,
              "precio_ars": 120400,
              "precio_texto": "$ 120.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-11-26%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-11-26/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 100,
              "precio_ars": 145000,
              "precio_texto": "$ 145.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-10",
              "fecha_vuelta": "2026-12-13",
              "fechas_texto": "10 Dec - 13 Dec 2026",
              "noches": 3,
              "dias_restantes": 34,
              "precio_usd": 63,
              "precio_ars": 91400,
              "precio_texto": "$ 91.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-12-10%20through%202026-12-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-12-10/2026-12-13?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2026-12-25",
              "fechas_texto": "21 Dec - 25 Dec 2026",
              "noches": 4,
              "dias_restantes": 45,
              "precio_usd": 102,
              "precio_ars": 147900,
              "precio_texto": "$ 147.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202026-12-21%20through%202026-12-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2026-12-21/2026-12-25?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-01",
              "fecha_vuelta": "2027-01-08",
              "fechas_texto": "01 Jan - 08 Jan 2027",
              "noches": 7,
              "dias_restantes": 56,
              "precio_usd": 75,
              "precio_ars": 108800,
              "precio_texto": "$ 108.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202027-01-01%20through%202027-01-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2027-01-01/2027-01-08?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-05",
              "fecha_vuelta": "2027-01-11",
              "fechas_texto": "05 Jan - 11 Jan 2027",
              "noches": 6,
              "dias_restantes": 60,
              "precio_usd": 91,
              "precio_ars": 132000,
              "precio_texto": "$ 132.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202027-01-05%20through%202027-01-11&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2027-01-05/2027-01-11?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Jul 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-07-19",
              "fecha_vuelta": "2027-07-26",
              "fechas_texto": "19 Jul - 26 Jul 2027",
              "noches": 7,
              "dias_restantes": 255,
              "precio_usd": 143,
              "precio_ars": 207400,
              "precio_texto": "$ 207.400 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SLA%20from%20AEP%20on%202027-07-19%20through%202027-07-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sla/2027-07-19/2027-07-26?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "sanmartin",
    "ciudad": "San Martín de los Andes & Chapelco",
    "pais": "Argentina",
    "bandera": "🌲",
    "iata": "CPC",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 160.370 ARS (US$ 119)",
    "comando_tg": "/sanmartin",
    "resena": "Paraíso patagónico a orillas del Lago Lácar y cabecera de la mítica Ruta de los 7 Lagos. Bosques andinos milenarios, esquí en Cerro Chapelco y aldea de estilo alpino.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ CPC)",
        "fechas": "01 Abr - 08 Abr 2027",
        "noches": 7,
        "precio": "$ 160.370 ARS (US$ 119 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-01",
        "fecha_vuelta": "2027-04-08",
        "actualizado_en_vivo": true,
        "precio_ars": 160370,
        "precio_usd": 119
      },
      {
        "puesto": "🥈",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ CPC)",
        "fechas": "08 Abr - 15 Abr 2027",
        "noches": 7,
        "precio": "$ 195.651 ARS (US$ 145 aprox)",
        "destacado": "Vuelo directo de 2h 20m",
        "fecha_ida": "2027-04-08",
        "fecha_vuelta": "2027-04-15",
        "actualizado_en_vivo": true,
        "precio_ars": 195651,
        "precio_usd": 145
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (EZE ➔ CPC)",
        "fechas": "15 Abr - 22 Abr 2027",
        "noches": 7,
        "precio": "$ 195.651 ARS (US$ 145 aprox)",
        "destacado": "Excelente disponibilidad",
        "fecha_ida": "2027-04-15",
        "fecha_vuelta": "2027-04-22",
        "actualizado_en_vivo": true,
        "precio_ars": 195651,
        "precio_usd": 145
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Loi Suites Chapelco Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (2.600 reseñas)",
        "zona": "Chapelco Golf & Resort",
        "precio_noche": "$ 290.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort 5 estrellas enclavado en la cordillera con el único campo de golf co-diseñado por Jack Nicklaus en Argentina.",
        "booking_url": "https://www.booking.com/hotel/ar/loi-suites-chapelco.es.html",
        "precio_noche_ars": 290000,
        "precio_noche_usd": 215,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Le Village Hotel",
        "estrellas": "⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Fantástico (2.100 reseñas)",
        "zona": "Centro de San Martín (Av. San Martín)",
        "precio_noche": "$ 120.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Estilo montañés con jardín arbolado, sauna, hidromasaje y ubicación inmejorable para caminar por el centro.",
        "booking_url": "https://www.booking.com/hotel/ar/le-village.es.html",
        "precio_noche_ars": 120000,
        "precio_noche_usd": 89,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Apart Hotel Rincón de los Andes",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (1.800 reseñas)",
        "zona": "Al pie de la montaña / Río Pocahullo",
        "precio_noche": "$ 86.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Cabañas y departamentos de madera con chimenea a leña, piscina climatizada y ambiente familiar sereno.",
        "booking_url": "https://www.booking.com/hotel/ar/rincon-de-los-andes.es.html",
        "precio_noche_ars": 86000,
        "precio_noche_usd": 64,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 26,
      "rango_min": "$ 144.000 ARS",
      "rango_max": "$ 233.000 ARS",
      "mensaje": "¡Precio bajo para volar directo a Chapelco!",
      "texto_pin": "$ 160.370 ARS es una tarifa récord baja",
      "consejo": "Aterrizar en el aeropuerto Chapelco ahorra 3 horas de transfer terrestre respecto a volar vía Bariloche.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        198859,
        187633,
        178011,
        168388,
        160370
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "Aerolíneas Argentinas",
      "escalas": "Directo (AEP ➔ CPC)",
      "fechas": "25 Nov - 30 Nov 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-11-30",
      "noches": 5,
      "dias_para_el_vuelo": 26,
      "precio": "$ 168.000 ARS",
      "precio_usd": "US$ 124 aprox",
      "precio_ars": 168000,
      "precio_usd_num": 124,
      "ahorro_porcentaje": "25% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20BUE%20on%202026-11-25%20through%202026-11-30&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sanmartin/2026-11-25/2026-11-30?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "CPC",
      "ciudad": "San Martín de los Andes & Chapelco",
      "actualizado_at": "2026-11-06T09:38:23.641388+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-17",
              "fechas_texto": "12 Nov - 17 Nov 2026",
              "noches": 5,
              "dias_restantes": 6,
              "precio_usd": 124,
              "precio_ars": 179800,
              "precio_texto": "$ 179.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202026-11-12%20through%202026-11-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2026-11-12/2026-11-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "21% OFF",
          "ahorro_pct_num": 21,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "03 Dec - 08 Dec 2026",
              "noches": 5,
              "dias_restantes": 27,
              "precio_usd": 405,
              "precio_ars": 587200,
              "precio_texto": "$ 587.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202026-12-03%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2026-12-03/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-15",
              "fecha_vuelta": "2026-12-20",
              "fechas_texto": "15 Dec - 20 Dec 2026",
              "noches": 5,
              "dias_restantes": 39,
              "precio_usd": 130,
              "precio_ars": 188500,
              "precio_texto": "$ 188.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202026-12-15%20through%202026-12-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2026-12-15/2026-12-20?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 136,
              "precio_ars": 197200,
              "precio_texto": "$ 197.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "23% OFF",
        "ahorro_pct_num": 23,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-01",
            "fecha_vuelta": "2027-04-08",
            "fechas_texto": "01 Apr - 08 Apr 2027",
            "noches": 7,
            "dias_restantes": 146,
            "precio_usd": 104,
            "precio_ars": 150800,
            "precio_texto": "$ 150.800 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202027-04-01%20through%202027-04-08&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2027-04-01/2027-04-08?affilid=flightbot",
            "aerolinea_gate": "Kiwi.com",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-17",
              "fechas_texto": "12 Nov - 17 Nov 2026",
              "noches": 5,
              "dias_restantes": 6,
              "precio_usd": 124,
              "precio_ars": 179800,
              "precio_texto": "$ 179.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202026-11-12%20through%202026-11-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2026-11-12/2026-11-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "21% OFF",
          "ahorro_pct_num": 21,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "03 Dec - 08 Dec 2026",
              "noches": 5,
              "dias_restantes": 27,
              "precio_usd": 405,
              "precio_ars": 587200,
              "precio_texto": "$ 587.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202026-12-03%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2026-12-03/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-15",
              "fecha_vuelta": "2026-12-20",
              "fechas_texto": "15 Dec - 20 Dec 2026",
              "noches": 5,
              "dias_restantes": 39,
              "precio_usd": 130,
              "precio_ars": 188500,
              "precio_texto": "$ 188.500 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202026-12-15%20through%202026-12-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2026-12-15/2026-12-20?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "12 Jan - 17 Jan 2027",
              "noches": 5,
              "dias_restantes": 67,
              "precio_usd": 136,
              "precio_ars": 197200,
              "precio_texto": "$ 197.200 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202027-01-12%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2027-01-12/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "23% OFF",
          "ahorro_pct_num": 23,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-01",
              "fecha_vuelta": "2027-04-08",
              "fechas_texto": "01 Apr - 08 Apr 2027",
              "noches": 7,
              "dias_restantes": 146,
              "precio_usd": 104,
              "precio_ars": 150800,
              "precio_texto": "$ 150.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPC%20from%20AEP%20on%202027-04-01%20through%202027-04-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpc/2027-04-01/2027-04-08?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "ushuaia",
    "ciudad": "Ushuaia & Tierra del Fuego",
    "pais": "Argentina",
    "bandera": "🐧",
    "iata": "USH",
    "tipo_ruta": "Cabotaje Nacional",
    "es_cabotaje": true,
    "categoria_region": "cabotaje",
    "precio_desde": "$ 149.454 ARS (US$ 111)",
    "comando_tg": "/ushuaia",
    "resena": "La ciudad más austral del mundo: navegaciones por el Canal Beagle hacia el Faro Les Éclaireurs, Parque Nacional Tierra del Fuego, esquí en Cerro Castor y la mejor centolla fresca.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ USH)",
        "fechas": "26 Ene - 29 Ene 2027",
        "noches": 3,
        "precio": "$ 149.454 ARS (US$ 111 aprox)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-01-26",
        "fecha_vuelta": "2027-01-29",
        "actualizado_en_vivo": true,
        "precio_ars": 149454,
        "precio_usd": 111
      },
      {
        "puesto": "🥈",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ USH)",
        "fechas": "25 Ene - 28 Ene 2027",
        "noches": 3,
        "precio": "$ 169.167 ARS (US$ 125 aprox)",
        "destacado": "Vuelo directo de 3h 35m",
        "fecha_ida": "2027-01-25",
        "fecha_vuelta": "2027-01-28",
        "actualizado_en_vivo": true,
        "precio_ars": 169167,
        "precio_usd": 125
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (EZE ➔ USH)",
        "fechas": "24 Feb - 27 Feb 2027",
        "noches": 3,
        "precio": "$ 190.034 ARS (US$ 141 aprox)",
        "destacado": "Sale desde Ezeiza",
        "fecha_ida": "2027-02-24",
        "fecha_vuelta": "2027-02-27",
        "actualizado_en_vivo": true,
        "precio_ars": 190034,
        "precio_usd": 141
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Arakur Ushuaia Resort & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (3.800 reseñas)",
        "zona": "Reserva Natural Alarkén",
        "precio_noche": "$ 360.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort de lujo sobre la cima del cerro con piscinas infinitas climatizadas al aire libre mirando al Canal Beagle.",
        "booking_url": "https://www.booking.com/hotel/ar/arakur-ushuaia-resort-spa.es.html",
        "precio_noche_ars": 360000,
        "precio_noche_usd": 267,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Los Cauquenes Resort & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (2.950 reseñas)",
        "zona": "Playa sobre el Canal Beagle",
        "precio_noche": "$ 240.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El único hotel 5 estrellas situado directamente sobre la playa del Canal Beagle con muelle privado y spa.",
        "booking_url": "https://www.booking.com/hotel/ar/los-cauquenes-resort-spa.es.html",
        "precio_noche_ars": 240000,
        "precio_noche_usd": 178,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Fueguino Hotel Patagónico",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (2.100 reseñas)",
        "zona": "Centro de Ushuaia / Puerto",
        "precio_noche": "$ 98.000 ARS / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Excelente ubicación céntrica para recorrer la Av. San Martín a pie y embarcarse en catamaranes.",
        "booking_url": "https://www.booking.com/hotel/ar/fueguino.es.html",
        "precio_noche_ars": 98000,
        "precio_noche_usd": 73,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "$ 135.000 ARS",
      "rango_max": "$ 217.000 ARS",
      "mensaje": "¡Gran oportunidad de vuelo al Fin del Mundo!",
      "texto_pin": "$ 149.454 ARS es una tarifa récord baja",
      "consejo": "Para Ushuaia esta tarifa en vuelo directo representa un ahorro de más del 30% respecto al promedio habitual.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        185323,
        174861,
        165894,
        156927,
        149454
      ],
      "historial_formato": "$ "
    },
    "codigo_pais": "ar",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 29 días · Tarifa récord más baja detectada",
      "aerolinea": "JetSMART",
      "escalas": "Directo (AEP ➔ USH)",
      "fechas": "28 Nov - 04 Dic 2026",
      "fecha_ida": "2026-11-28",
      "fecha_vuelta": "2026-12-04",
      "noches": 6,
      "dias_para_el_vuelo": 29,
      "precio": "$ 189.000 ARS",
      "precio_usd": "US$ 140 aprox",
      "precio_ars": 189000,
      "precio_usd_num": 140,
      "ahorro_porcentaje": "30% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20BUE%20on%202026-11-28%20through%202026-12-04&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ushuaia/2026-11-28/2026-12-04?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "USH",
      "ciudad": "Ushuaia & Tierra del Fuego",
      "actualizado_at": "2026-11-06T09:38:24.047591+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "30% OFF",
          "ahorro_pct_num": 30,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 94,
              "precio_ars": 136300,
              "precio_texto": "$ 136.300 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-16",
              "fechas_texto": "13 Nov - 16 Nov 2026",
              "noches": 3,
              "dias_restantes": 7,
              "precio_usd": 139,
              "precio_ars": 201600,
              "precio_texto": "$ 201.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-11-13%20through%202026-11-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-11-13/2026-11-16?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-06",
              "fechas_texto": "03 Dec - 06 Dec 2026",
              "noches": 3,
              "dias_restantes": 27,
              "precio_usd": 162,
              "precio_ars": 234900,
              "precio_texto": "$ 234.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-12-03%20through%202026-12-06&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-12-03/2026-12-06?affilid=flightbot",
              "aerolinea_gate": "Mego.travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-31",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "31 Dec - 05 Jan 2027",
              "noches": 5,
              "dias_restantes": 55,
              "precio_usd": 224,
              "precio_ars": 324800,
              "precio_texto": "$ 324.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-12-31%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-12-31/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-26",
              "fecha_vuelta": "2027-01-29",
              "fechas_texto": "26 Jan - 29 Jan 2027",
              "noches": 3,
              "dias_restantes": 81,
              "precio_usd": 97,
              "precio_ars": 140600,
              "precio_texto": "$ 140.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202027-01-26%20through%202027-01-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2027-01-26/2027-01-29?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "12 Jan - 16 Jan 2027",
              "noches": 4,
              "dias_restantes": 67,
              "precio_usd": 162,
              "precio_ars": 234900,
              "precio_texto": "$ 234.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202027-01-12%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2027-01-12/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Jun 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "28% OFF",
        "ahorro_pct_num": 28,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-06-11",
            "fecha_vuelta": "2027-06-14",
            "fechas_texto": "11 Jun - 14 Jun 2027",
            "noches": 3,
            "dias_restantes": 217,
            "precio_usd": 180,
            "precio_ars": 261000,
            "precio_texto": "$ 261.000 ARS",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202027-06-11%20through%202027-06-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2027-06-11/2027-06-14?affilid=flightbot",
            "aerolinea_gate": "Aviakassa",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "30% OFF",
          "ahorro_pct_num": 30,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 94,
              "precio_ars": 136300,
              "precio_texto": "$ 136.300 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-16",
              "fechas_texto": "13 Nov - 16 Nov 2026",
              "noches": 3,
              "dias_restantes": 7,
              "precio_usd": 139,
              "precio_ars": 201600,
              "precio_texto": "$ 201.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-11-13%20through%202026-11-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-11-13/2026-11-16?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-06",
              "fechas_texto": "03 Dec - 06 Dec 2026",
              "noches": 3,
              "dias_restantes": 27,
              "precio_usd": 162,
              "precio_ars": 234900,
              "precio_texto": "$ 234.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-12-03%20through%202026-12-06&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-12-03/2026-12-06?affilid=flightbot",
              "aerolinea_gate": "Mego.travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-31",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "31 Dec - 05 Jan 2027",
              "noches": 5,
              "dias_restantes": 55,
              "precio_usd": 224,
              "precio_ars": 324800,
              "precio_texto": "$ 324.800 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202026-12-31%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2026-12-31/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-26",
              "fecha_vuelta": "2027-01-29",
              "fechas_texto": "26 Jan - 29 Jan 2027",
              "noches": 3,
              "dias_restantes": 81,
              "precio_usd": 97,
              "precio_ars": 140600,
              "precio_texto": "$ 140.600 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202027-01-26%20through%202027-01-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2027-01-26/2027-01-29?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "12 Jan - 16 Jan 2027",
              "noches": 4,
              "dias_restantes": 67,
              "precio_usd": 162,
              "precio_ars": 234900,
              "precio_texto": "$ 234.900 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202027-01-12%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2027-01-12/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Jun 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "28% OFF",
          "ahorro_pct_num": 28,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-06-11",
              "fecha_vuelta": "2027-06-14",
              "fechas_texto": "11 Jun - 14 Jun 2027",
              "noches": 3,
              "dias_restantes": 217,
              "precio_usd": 180,
              "precio_ars": 261000,
              "precio_texto": "$ 261.000 ARS",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20USH%20from%20AEP%20on%202027-06-11%20through%202027-06-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ush/2027-06-11/2027-06-14?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "florianopolis",
    "ciudad": "Florianópolis & Ilha da Magia",
    "pais": "Brasil",
    "bandera": "🏖️",
    "iata": "FLN",
    "tipo_ruta": "Internacional / Regional",
    "es_cabotaje": false,
    "categoria_region": "brasil",
    "precio_desde": "US$ 183",
    "comando_tg": "/florianopolis",
    "resena": "La 'Ilha da Magia': más de 40 playas espectaculares que combinan surf de primer nivel en Joaquina y Mole con la exclusiva vida nocturna y paradores de Jurerê Internacional.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (EZE/AEP ➔ FLN)",
        "fechas": "31 Mar - 16 Abr 2027",
        "noches": 16,
        "precio": "US$ 183 (aprox. $ 247.050 ARS)",
        "destacado": "Tarifa récord regional",
        "fecha_ida": "2027-03-31",
        "fecha_vuelta": "2027-04-16",
        "actualizado_en_vivo": true,
        "precio_ars": 247050,
        "precio_usd": 183
      },
      {
        "puesto": "🥈",
        "aerolinea": "GOL Linhas Aéreas",
        "escalas": "Directo (AEP ➔ FLN)",
        "fechas": "04 Abr - 12 Abr 2027",
        "noches": 8,
        "precio": "US$ 202 (aprox. $ 272.700 ARS)",
        "destacado": "Vuelo directo de 2h 05m",
        "fecha_ida": "2027-04-04",
        "fecha_vuelta": "2027-04-12",
        "actualizado_en_vivo": true,
        "precio_ars": 272700,
        "precio_usd": 202
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ FLN)",
        "fechas": "14 Abr - 30 Abr 2027",
        "noches": 16,
        "precio": "US$ 209 (aprox. $ 282.150 ARS)",
        "destacado": "Equipaje y atención directa",
        "fecha_ida": "2027-04-14",
        "fecha_vuelta": "2027-04-30",
        "actualizado_en_vivo": true,
        "precio_ars": 282150,
        "precio_usd": 209
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Costão do Santinho Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Excepcional (4.500 reseñas)",
        "zona": "Praia do Santinho (All Inclusive)",
        "precio_noche": "US$ 310 / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Mega resort all-inclusive frente al mar rodeado de dunas y reservas arqueológicas, con complejo de 9 piscinas y spa.",
        "booking_url": "https://www.booking.com/hotel/br/costao-do-santinho-resort-all-inclusive.es.html",
        "precio_noche_usd": 310,
        "precio_noche_ars": 418500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "IL Campanario Villaggio Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.200 reseñas)",
        "zona": "Jurerê Internacional",
        "precio_noche": "US$ 160 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "En el corazón de Jurerê a pasos de los paradores gastronómicos más exclusivos, piscinas climatizadas y saunas.",
        "booking_url": "https://www.booking.com/hotel/br/il-campanario-villaggio-resort.es.html",
        "precio_noche_usd": 160,
        "precio_noche_ars": 216000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Majestic Palace Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (2.800 reseñas)",
        "zona": "Av. Beira-Mar Norte",
        "precio_noche": "US$ 88 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Piscina infinita con vistas a la bahía norte, excelente restaurante en azotea y conexión rápida a las playas del norte y sur.",
        "booking_url": "https://www.booking.com/hotel/br/majestic-palace.es.html",
        "precio_noche_usd": 88,
        "precio_noche_ars": 118800,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 22,
      "rango_min": "US$ 170",
      "rango_max": "US$ 250",
      "mensaje": "¡Tarifa baja histórica para viajar a las playas de Florianópolis!",
      "texto_pin": "US$ 183 es una tarifa récord baja",
      "consejo": "Vuelo directo con JetSMART por menos de US$ 250 ida y vuelta es ideal para anticipar compras de verano.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        227,
        214,
        203,
        192,
        183
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "br",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 30 días · Tarifa récord más baja detectada",
      "aerolinea": "Emirates / Gol",
      "escalas": "Directo (EZE ➔ Brasil)",
      "fechas": "29 Nov - 06 Dic 2026",
      "fecha_ida": "2026-11-29",
      "fecha_vuelta": "2026-12-06",
      "noches": 7,
      "dias_para_el_vuelo": 30,
      "precio": "US$ 170",
      "precio_usd": "aprox. $ 229.500 ARS",
      "precio_ars": 229500,
      "precio_usd_num": 170,
      "ahorro_porcentaje": "24% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20BUE%20on%202026-11-29%20through%202026-12-06&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/florianopolis/2026-11-29/2026-12-06?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "FLN",
      "ciudad": "Florianópolis & Ilha da Magia",
      "actualizado_at": "2026-11-06T09:38:24.419965+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-25",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "25 Nov - 30 Nov 2026",
              "noches": 5,
              "dias_restantes": 19,
              "precio_usd": 267,
              "precio_ars": 387200,
              "precio_texto": "US$ 267",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-11-25%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-11-25/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Авиасейлс",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-16",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "16 Nov - 21 Nov 2026",
              "noches": 5,
              "dias_restantes": 10,
              "precio_usd": 309,
              "precio_ars": 448000,
              "precio_texto": "US$ 309",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-11-16%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-11-16/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-07",
              "fecha_vuelta": "2026-12-13",
              "fechas_texto": "07 Dec - 13 Dec 2026",
              "noches": 6,
              "dias_restantes": 31,
              "precio_usd": 202,
              "precio_ars": 292900,
              "precio_texto": "US$ 202",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-12-07%20through%202026-12-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-12-07/2026-12-13?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-16",
              "fecha_vuelta": "2026-12-23",
              "fechas_texto": "16 Dec - 23 Dec 2026",
              "noches": 7,
              "dias_restantes": 40,
              "precio_usd": 204,
              "precio_ars": 295800,
              "precio_texto": "US$ 204",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-12-16%20through%202026-12-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-12-16/2026-12-23?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-19",
              "fecha_vuelta": "2027-01-26",
              "fechas_texto": "19 Jan - 26 Jan 2027",
              "noches": 7,
              "dias_restantes": 74,
              "precio_usd": 224,
              "precio_ars": 324800,
              "precio_texto": "US$ 224",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202027-01-19%20through%202027-01-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2027-01-19/2027-01-26?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-01",
              "fecha_vuelta": "2027-01-10",
              "fechas_texto": "01 Jan - 10 Jan 2027",
              "noches": 9,
              "dias_restantes": 56,
              "precio_usd": 233,
              "precio_ars": 337800,
              "precio_texto": "US$ 233",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202027-01-01%20through%202027-01-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2027-01-01/2027-01-10?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-04",
            "fecha_vuelta": "2027-04-12",
            "fechas_texto": "04 Apr - 12 Apr 2027",
            "noches": 8,
            "dias_restantes": 149,
            "precio_usd": 202,
            "precio_ars": 292900,
            "precio_texto": "US$ 202",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202027-04-04%20through%202027-04-12&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2027-04-04/2027-04-12?affilid=flightbot",
            "aerolinea_gate": "Farera",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-25",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "25 Nov - 30 Nov 2026",
              "noches": 5,
              "dias_restantes": 19,
              "precio_usd": 267,
              "precio_ars": 387200,
              "precio_texto": "US$ 267",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-11-25%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-11-25/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Авиасейлс",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-16",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "16 Nov - 21 Nov 2026",
              "noches": 5,
              "dias_restantes": 10,
              "precio_usd": 309,
              "precio_ars": 448000,
              "precio_texto": "US$ 309",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-11-16%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-11-16/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-07",
              "fecha_vuelta": "2026-12-13",
              "fechas_texto": "07 Dec - 13 Dec 2026",
              "noches": 6,
              "dias_restantes": 31,
              "precio_usd": 202,
              "precio_ars": 292900,
              "precio_texto": "US$ 202",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-12-07%20through%202026-12-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-12-07/2026-12-13?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-16",
              "fecha_vuelta": "2026-12-23",
              "fechas_texto": "16 Dec - 23 Dec 2026",
              "noches": 7,
              "dias_restantes": 40,
              "precio_usd": 204,
              "precio_ars": 295800,
              "precio_texto": "US$ 204",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202026-12-16%20through%202026-12-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2026-12-16/2026-12-23?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-19",
              "fecha_vuelta": "2027-01-26",
              "fechas_texto": "19 Jan - 26 Jan 2027",
              "noches": 7,
              "dias_restantes": 74,
              "precio_usd": 224,
              "precio_ars": 324800,
              "precio_texto": "US$ 224",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202027-01-19%20through%202027-01-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2027-01-19/2027-01-26?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-01",
              "fecha_vuelta": "2027-01-10",
              "fechas_texto": "01 Jan - 10 Jan 2027",
              "noches": 9,
              "dias_restantes": 56,
              "precio_usd": 233,
              "precio_ars": 337800,
              "precio_texto": "US$ 233",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202027-01-01%20through%202027-01-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2027-01-01/2027-01-10?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-04",
              "fecha_vuelta": "2027-04-12",
              "fechas_texto": "04 Apr - 12 Apr 2027",
              "noches": 8,
              "dias_restantes": 149,
              "precio_usd": 202,
              "precio_ars": 292900,
              "precio_texto": "US$ 202",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FLN%20from%20EZE%20on%202027-04-04%20through%202027-04-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fln/2027-04-04/2027-04-12?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "maceio",
    "ciudad": "Maceió & Maragogi (Caribe Brasileño)",
    "pais": "Brasil",
    "bandera": "🌴",
    "iata": "MCZ",
    "tipo_ruta": "Internacional / Regional",
    "es_cabotaje": false,
    "categoria_region": "brasil",
    "precio_desde": "US$ 422",
    "comando_tg": "/maceio",
    "resena": "El auténtico 'Caribe Brasileño': las Galés de Maragogi con arrecifes marinos a kilómetros de la orilla, playas bordeadas de cocoteros y lagunas de aguas cálidas todo el año.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala corta (GRU)",
        "fechas": "18 Dic - 22 Dic 2026",
        "noches": 4,
        "precio": "US$ 422 (aprox. $ 569.700 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-12-18",
        "fecha_vuelta": "2026-12-22",
        "actualizado_en_vivo": true,
        "precio_ars": 569700,
        "precio_usd": 422
      },
      {
        "puesto": "🥈",
        "aerolinea": "GOL Linhas Aéreas",
        "escalas": "1 escala (GIG)",
        "fechas": "14 Mar - 24 Mar 2027",
        "noches": 10,
        "precio": "US$ 480 (aprox. $ 648.000 ARS)",
        "destacado": "Conexión ágil",
        "fecha_ida": "2027-03-14",
        "fecha_vuelta": "2027-03-24",
        "actualizado_en_vivo": true,
        "precio_ars": 648000,
        "precio_usd": 480
      },
      {
        "puesto": "🥉",
        "aerolinea": "Azul Linhas Aéreas",
        "escalas": "1 escala (VCP)",
        "fechas": "01 Ene - 05 Ene 2027",
        "noches": 4,
        "precio": "US$ 481 (aprox. $ 649.350 ARS)",
        "destacado": "Snacks y pantallas a bordo",
        "fecha_ida": "2027-01-01",
        "fecha_vuelta": "2027-01-05",
        "actualizado_en_vivo": true,
        "precio_ars": 649350,
        "precio_usd": 481
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Salinas Maragogi All Inclusive Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (4.800 reseñas)",
        "zona": "Maragogi (Primerísima Línea)",
        "precio_noche": "US$ 390 / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El resort all inclusive más premiado de Sudamérica en TripAdvisor: río interior con kayaks, piscinas y playa de aguas calmas.",
        "booking_url": "https://www.booking.com/hotel/br/salinas-do-maragogi-all-inclusive-resort.es.html",
        "precio_noche_usd": 390,
        "precio_noche_ars": 526500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Jatiúca Hotel & Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.500 reseñas)",
        "zona": "Praia de Jatiúca (Maceió)",
        "precio_noche": "US$ 180 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El único resort dentro de la zona urbana de Maceió frente a la playa con 62.000 m² de parque tropical, lagunas y piscinas.",
        "booking_url": "https://www.booking.com/hotel/br/jatiuca-resort.es.html",
        "precio_noche_usd": 180,
        "precio_noche_ars": 243000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Best Western Premier Maceió",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (3.100 reseñas)",
        "zona": "Praia de Pajuçara (Maceió)",
        "precio_noche": "US$ 85 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Frente a las piscinas naturales de Pajuçara donde salen las jangadas, piscina en terraza panorámica y precio sumamente accesible.",
        "booking_url": "https://www.booking.com/hotel/br/best-western-premier-maceio.es.html",
        "precio_noche_usd": 85,
        "precio_noche_ars": 114750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 28,
      "rango_min": "US$ 390",
      "rango_max": "US$ 580",
      "mensaje": "¡Precio récord para el paraíso de Maragogi y Maceió!",
      "texto_pin": "US$ 422 es una tarifa récord baja",
      "consejo": "Para visitar las piscinas naturales de Maragogi se recomienda viajar con tabla de mareas en luna nueva o llena.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        523,
        494,
        468,
        443,
        422
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "br",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 33 días · Tarifa récord más baja detectada",
      "aerolinea": "Emirates / Gol",
      "escalas": "Directo (EZE ➔ Brasil)",
      "fechas": "02 Dic - 09 Dic 2026",
      "fecha_ida": "2026-12-02",
      "fecha_vuelta": "2026-12-09",
      "noches": 7,
      "dias_para_el_vuelo": 33,
      "precio": "US$ 281",
      "precio_usd": "aprox. $ 379.350 ARS",
      "precio_ars": 379350,
      "precio_usd_num": 281,
      "ahorro_porcentaje": "24% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20BUE%20on%202026-12-02%20through%202026-12-09&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/maceio/2026-12-02/2026-12-09?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "MCZ",
      "ciudad": "Maceió & Maragogi (Caribe Brasileño)",
      "actualizado_at": "2026-11-06T09:38:24.661276+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 281,
              "precio_ars": 407400,
              "precio_texto": "US$ 281",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-27",
              "fecha_vuelta": "2027-01-04",
              "fechas_texto": "27 Dec - 04 Jan 2027",
              "noches": 8,
              "dias_restantes": 51,
              "precio_usd": 729,
              "precio_ars": 1057000,
              "precio_texto": "US$ 729",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202026-12-27%20through%202027-01-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2026-12-27/2027-01-04?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2026-12-31",
              "fechas_texto": "24 Dec - 31 Dec 2026",
              "noches": 7,
              "dias_restantes": 48,
              "precio_usd": 295,
              "precio_ars": 427800,
              "precio_texto": "US$ 295",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202026-12-24%20through%202026-12-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2026-12-24/2026-12-31?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 309,
              "precio_ars": 448000,
              "precio_texto": "US$ 309",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-12",
            "fechas_texto": "05 May - 12 May 2027",
            "noches": 7,
            "dias_restantes": 180,
            "precio_usd": 267,
            "precio_ars": 387200,
            "precio_texto": "US$ 267",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2027-05-05/2027-05-12?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 281,
              "precio_ars": 407400,
              "precio_texto": "US$ 281",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-27",
              "fecha_vuelta": "2027-01-04",
              "fechas_texto": "27 Dec - 04 Jan 2027",
              "noches": 8,
              "dias_restantes": 51,
              "precio_usd": 729,
              "precio_ars": 1057000,
              "precio_texto": "US$ 729",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202026-12-27%20through%202027-01-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2026-12-27/2027-01-04?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2026-12-31",
              "fechas_texto": "24 Dec - 31 Dec 2026",
              "noches": 7,
              "dias_restantes": 48,
              "precio_usd": 295,
              "precio_ars": 427800,
              "precio_texto": "US$ 295",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202026-12-24%20through%202026-12-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2026-12-24/2026-12-31?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 309,
              "precio_ars": 448000,
              "precio_texto": "US$ 309",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-12",
              "fechas_texto": "05 May - 12 May 2027",
              "noches": 7,
              "dias_restantes": 180,
              "precio_usd": 267,
              "precio_ars": 387200,
              "precio_texto": "US$ 267",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCZ%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mcz/2027-05-05/2027-05-12?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "natal",
    "ciudad": "Natal & Praia da Pipa",
    "pais": "Brasil",
    "bandera": "🐬",
    "iata": "NAT",
    "tipo_ruta": "Internacional / Regional",
    "es_cabotaje": false,
    "categoria_region": "brasil",
    "precio_desde": "US$ 335",
    "comando_tg": "/natal",
    "resena": "Dunas gigantescas de arena dorada en Genipabu para paseos en buggy y la magia de Praia da Pipa con acantilados rojizos donde se observan delfines nadando junto a la playa.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala corta (GRU)",
        "fechas": "09 Abr - 20 Abr 2027",
        "noches": 11,
        "precio": "US$ 335 (aprox. $ 452.250 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-09",
        "fecha_vuelta": "2027-04-20",
        "actualizado_en_vivo": true,
        "precio_ars": 452250,
        "precio_usd": 335
      },
      {
        "puesto": "🥈",
        "aerolinea": "GOL Linhas Aéreas",
        "escalas": "1 escala (GIG)",
        "fechas": "01 Mar - 10 Mar 2027",
        "noches": 9,
        "precio": "US$ 359 (aprox. $ 484.650 ARS)",
        "destacado": "Equipaje de mano estándar",
        "fecha_ida": "2027-03-01",
        "fecha_vuelta": "2027-03-10",
        "actualizado_en_vivo": true,
        "precio_ars": 484650,
        "precio_usd": 359
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Escala o directo estacional",
        "fechas": "23 Abr - 04 May 2027",
        "noches": 11,
        "precio": "US$ 382 (aprox. $ 515.700 ARS)",
        "destacado": "Atención personalizada",
        "fecha_ida": "2027-04-23",
        "fecha_vuelta": "2027-05-04",
        "actualizado_en_vivo": true,
        "precio_ars": 515700,
        "precio_usd": 382
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Sombra e Água Fresca",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (2.200 reseñas)",
        "zona": "Praia do Amor (Praia da Pipa)",
        "precio_noche": "US$ 240 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Sobre el punto más alto de Pipa frente a la Praia do Amor con 3 piscinas panorámicas, vista al mar y bosque atlántico.",
        "booking_url": "https://www.booking.com/hotel/br/sombra-e-agua-fresca.es.html",
        "precio_noche_usd": 240,
        "precio_noche_ars": 324000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Wish Natal",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Fantástico (3.800 reseñas)",
        "zona": "Via Costeira (Natal)",
        "precio_noche": "US$ 145 / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort frente al mar en la Via Costeira con parque acuático infantil, spa y vistas privilegiadas al Morro do Careca.",
        "booking_url": "https://www.booking.com/hotel/br/wish-natal.es.html",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Serhs Natal Grand Hotel & Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (3.400 reseñas)",
        "zona": "Ponta Negra / Via Costeira",
        "precio_noche": "US$ 98 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Gran complejo resort con 4 piscinas al aire libre, parque acuático, 5 restaurantes y precio imbatible por noche.",
        "booking_url": "https://www.booking.com/hotel/br/serhs-natal-grand.es.html",
        "precio_noche_usd": 98,
        "precio_noche_ars": 132300,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 28,
      "rango_min": "US$ 310",
      "rango_max": "US$ 460",
      "mensaje": "¡Gran precio para viajar a Natal y los acantilados de Pipa!",
      "texto_pin": "US$ 335 es una tarifa récord baja",
      "consejo": "Pipa se ubica a 1h 15m del aeropuerto de Natal; se recomienda transfer directo para alojarse en la villa.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        415,
        392,
        372,
        352,
        335
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "br",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 35 días · Tarifa récord más baja detectada",
      "aerolinea": "Emirates / Gol",
      "escalas": "Directo (EZE ➔ Brasil)",
      "fechas": "04 Dic - 14 Dic 2026",
      "fecha_ida": "2026-12-04",
      "fecha_vuelta": "2026-12-14",
      "noches": 10,
      "dias_para_el_vuelo": 35,
      "precio": "US$ 295",
      "precio_usd": "aprox. $ 398.250 ARS",
      "precio_ars": 398250,
      "precio_usd_num": 295,
      "ahorro_porcentaje": "24% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20BUE%20on%202026-12-04%20through%202026-12-14&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/natal/2026-12-04/2026-12-14?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "NAT",
      "ciudad": "Natal & Praia da Pipa",
      "actualizado_at": "2026-11-06T09:38:24.895297+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "23 Nov - 30 Nov 2026",
              "noches": 7,
              "dias_restantes": 17,
              "precio_usd": 536,
              "precio_ars": 777200,
              "precio_texto": "US$ 536",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202026-11-23%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2026-11-23/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 295,
              "precio_ars": 427800,
              "precio_texto": "US$ 295",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 310,
              "precio_ars": 449500,
              "precio_texto": "US$ 310",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-16",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "16 Jan - 22 Jan 2027",
              "noches": 6,
              "dias_restantes": 71,
              "precio_usd": 603,
              "precio_ars": 874400,
              "precio_texto": "US$ 603",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202027-01-16%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2027-01-16/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-01-31",
              "fechas_texto": "24 Jan - 31 Jan 2027",
              "noches": 7,
              "dias_restantes": 79,
              "precio_usd": 324,
              "precio_ars": 469800,
              "precio_texto": "US$ 324",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202027-01-24%20through%202027-01-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2027-01-24/2027-01-31?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-12",
            "fechas_texto": "05 May - 12 May 2027",
            "noches": 7,
            "dias_restantes": 180,
            "precio_usd": 280,
            "precio_ars": 406000,
            "precio_texto": "US$ 280",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2027-05-05/2027-05-12?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "23 Nov - 30 Nov 2026",
              "noches": 7,
              "dias_restantes": 17,
              "precio_usd": 536,
              "precio_ars": 777200,
              "precio_texto": "US$ 536",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202026-11-23%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2026-11-23/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 295,
              "precio_ars": 427800,
              "precio_texto": "US$ 295",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 310,
              "precio_ars": 449500,
              "precio_texto": "US$ 310",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-16",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "16 Jan - 22 Jan 2027",
              "noches": 6,
              "dias_restantes": 71,
              "precio_usd": 603,
              "precio_ars": 874400,
              "precio_texto": "US$ 603",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202027-01-16%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2027-01-16/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-01-31",
              "fechas_texto": "24 Jan - 31 Jan 2027",
              "noches": 7,
              "dias_restantes": 79,
              "precio_usd": 324,
              "precio_ars": 469800,
              "precio_texto": "US$ 324",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202027-01-24%20through%202027-01-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2027-01-24/2027-01-31?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-12",
              "fechas_texto": "05 May - 12 May 2027",
              "noches": 7,
              "dias_restantes": 180,
              "precio_usd": 280,
              "precio_ars": 406000,
              "precio_texto": "US$ 280",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NAT%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nat/2027-05-05/2027-05-12?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "recife",
    "ciudad": "Recife & Porto de Galinhas",
    "pais": "Brasil",
    "bandera": "🐠",
    "iata": "REC",
    "tipo_ruta": "Internacional / Regional",
    "es_cabotaje": false,
    "categoria_region": "brasil",
    "precio_desde": "US$ 367",
    "comando_tg": "/recife",
    "resena": "Las célebres piscinas naturales de aguas cristalinas de Porto de Galinhas, corales vivos, paseos en jangada tradicional y el encanto arquitectónico virreinal de Olinda.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "GOL Linhas Aéreas",
        "escalas": "1 escala corta (GRU)",
        "fechas": "20 Feb - 03 Mar 2027",
        "noches": 11,
        "precio": "US$ 367 (aprox. $ 495.450 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-02-20",
        "fecha_vuelta": "2027-03-03",
        "actualizado_en_vivo": true,
        "precio_ars": 495450,
        "precio_usd": 367
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (GIG)",
        "fechas": "09 Abr - 20 Abr 2027",
        "noches": 11,
        "precio": "US$ 370 (aprox. $ 499.500 ARS)",
        "destacado": "Equipaje carry-on incluido",
        "fecha_ida": "2027-04-09",
        "fecha_vuelta": "2027-04-20",
        "actualizado_en_vivo": true,
        "precio_ars": 499500,
        "precio_usd": 370
      },
      {
        "puesto": "🥉",
        "aerolinea": "Azul Linhas Aéreas",
        "escalas": "Directo o escala VCP",
        "fechas": "20 Feb - 04 Mar 2027",
        "noches": 12,
        "precio": "US$ 379 (aprox. $ 511.650 ARS)",
        "destacado": "Hub principal en Recife",
        "fecha_ida": "2027-02-20",
        "fecha_vuelta": "2027-03-04",
        "actualizado_en_vivo": true,
        "precio_ars": 511650,
        "precio_usd": 379
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Nannai Muro Alto Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (2.900 reseñas)",
        "zona": "Praia de Muro Alto / Porto de Galinhas",
        "precio_noche": "US$ 480 / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Bungalows sobre el agua estilo polinesio con piscinas privadas en una laguna natural de aguas calmas sin olas.",
        "booking_url": "https://www.booking.com/hotel/br/nannai-beach-resort.es.html",
        "precio_noche_usd": 480,
        "precio_noche_ars": 648000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "The Westin Porto de Galinhas",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (2.400 reseñas)",
        "zona": "Porto de Galinhas (Frente al Mar)",
        "precio_noche": "US$ 260 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort todo incluido de primera línea frente al mar con servicio de playa de lujo, spa Heavenly y gastronomía gourmet.",
        "booking_url": "https://www.booking.com/hotel/br/the-westin-porto-de-galinhas.es.html",
        "precio_noche_usd": 260,
        "precio_noche_ars": 351000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Grand Mercure Recife Boa Viagem",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (2.800 reseñas)",
        "zona": "Praia de Boa Viagem (Recife)",
        "precio_noche": "US$ 75 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Frente a la playa de Boa Viagem, piscina, desayuno buffet incluido y punto de partida económico hacia Olinda y Porto de Galinhas.",
        "booking_url": "https://www.booking.com/hotel/br/grand-mercure-recife-boa-viagem.es.html",
        "precio_noche_usd": 75,
        "precio_noche_ars": 101250,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 27,
      "rango_min": "US$ 340",
      "rango_max": "US$ 510",
      "mensaje": "¡Tarifa baja confirmada para Porto de Galinhas!",
      "texto_pin": "US$ 367 es una tarifa récord baja",
      "consejo": "Porto de Galinhas queda a solo 50 minutos por autopista del aeropuerto de Recife.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        455,
        429,
        407,
        385,
        367
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "br",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 23 días · Tarifa récord más baja detectada",
      "aerolinea": "Emirates / Gol",
      "escalas": "Directo (EZE ➔ Brasil)",
      "fechas": "22 Nov - 28 Nov 2026",
      "fecha_ida": "2026-11-22",
      "fecha_vuelta": "2026-11-28",
      "noches": 6,
      "dias_para_el_vuelo": 23,
      "precio": "US$ 316",
      "precio_usd": "aprox. $ 426.600 ARS",
      "precio_ars": 426600,
      "precio_usd_num": 316,
      "ahorro_porcentaje": "24% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20BUE%20on%202026-11-22%20through%202026-11-28&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/recife/2026-11-22/2026-11-28?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "REC",
      "ciudad": "Recife & Porto de Galinhas",
      "actualizado_at": "2026-11-06T09:38:25.157112+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 316,
              "precio_ars": 458200,
              "precio_texto": "US$ 316",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-11",
              "fecha_vuelta": "2026-12-18",
              "fechas_texto": "11 Dec - 18 Dec 2026",
              "noches": 7,
              "dias_restantes": 35,
              "precio_usd": 375,
              "precio_ars": 543800,
              "precio_texto": "US$ 375",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202026-12-11%20through%202026-12-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2026-12-11/2026-12-18?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2026-12-31",
              "fechas_texto": "21 Dec - 31 Dec 2026",
              "noches": 10,
              "dias_restantes": 45,
              "precio_usd": 459,
              "precio_ars": 665600,
              "precio_texto": "US$ 459",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202026-12-21%20through%202026-12-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2026-12-21/2026-12-31?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-08",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "08 Jan - 17 Jan 2027",
              "noches": 9,
              "dias_restantes": 63,
              "precio_usd": 501,
              "precio_ars": 726400,
              "precio_texto": "US$ 501",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202027-01-08%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2027-01-08/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "20 Jan - 27 Jan 2027",
              "noches": 7,
              "dias_restantes": 75,
              "precio_usd": 348,
              "precio_ars": 504600,
              "precio_texto": "US$ 348",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202027-01-20%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2027-01-20/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-12",
            "fechas_texto": "05 May - 12 May 2027",
            "noches": 7,
            "dias_restantes": 180,
            "precio_usd": 300,
            "precio_ars": 435000,
            "precio_texto": "US$ 300",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2027-05-05/2027-05-12?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 316,
              "precio_ars": 458200,
              "precio_texto": "US$ 316",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-11",
              "fecha_vuelta": "2026-12-18",
              "fechas_texto": "11 Dec - 18 Dec 2026",
              "noches": 7,
              "dias_restantes": 35,
              "precio_usd": 375,
              "precio_ars": 543800,
              "precio_texto": "US$ 375",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202026-12-11%20through%202026-12-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2026-12-11/2026-12-18?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2026-12-31",
              "fechas_texto": "21 Dec - 31 Dec 2026",
              "noches": 10,
              "dias_restantes": 45,
              "precio_usd": 459,
              "precio_ars": 665600,
              "precio_texto": "US$ 459",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202026-12-21%20through%202026-12-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2026-12-21/2026-12-31?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-08",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "08 Jan - 17 Jan 2027",
              "noches": 9,
              "dias_restantes": 63,
              "precio_usd": 501,
              "precio_ars": 726400,
              "precio_texto": "US$ 501",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202027-01-08%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2027-01-08/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "20 Jan - 27 Jan 2027",
              "noches": 7,
              "dias_restantes": 75,
              "precio_usd": 348,
              "precio_ars": 504600,
              "precio_texto": "US$ 348",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202027-01-20%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2027-01-20/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-12",
              "fechas_texto": "05 May - 12 May 2027",
              "noches": 7,
              "dias_restantes": 180,
              "precio_usd": 300,
              "precio_ars": 435000,
              "precio_texto": "US$ 300",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20REC%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rec/2027-05-05/2027-05-12?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "rio",
    "ciudad": "Río de Janeiro",
    "pais": "Brasil",
    "bandera": "🇧🇷",
    "iata": "GIG",
    "tipo_ruta": "Internacional / Regional",
    "es_cabotaje": false,
    "precio_desde": "US$ 240",
    "comando_tg": "/rio",
    "resena": "El Cristo Redentor, el teleférico del Pan de Azúcar y las playas míticas de Ipanema y Copacabana. A solo 2h 40m de los paraísos caribeños brasileños de Arraial do Cabo y Búzios.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "JetSMART",
        "escalas": "Directo (EZE/AEP ➔ GIG)",
        "fechas": "16 Mar - 21 Mar 2027",
        "noches": 5,
        "precio": "US$ 240 (aprox. $ 324.000 ARS)",
        "destacado": "Tarifa récord regional",
        "fecha_ida": "2027-03-16",
        "fecha_vuelta": "2027-03-21",
        "actualizado_en_vivo": true,
        "precio_ars": 324000,
        "precio_usd": 240
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (EZE ➔ GIG)",
        "fechas": "09 Abr - 16 Abr 2027",
        "noches": 7,
        "precio": "US$ 254 (aprox. $ 342.900 ARS)",
        "destacado": "Flota de aviones modernos",
        "fecha_ida": "2027-04-09",
        "fecha_vuelta": "2027-04-16",
        "actualizado_en_vivo": true,
        "precio_ars": 342900,
        "precio_usd": 254
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (AEP ➔ GIG)",
        "fechas": "18 Feb - 11 Mar 2027",
        "noches": 21,
        "precio": "US$ 248 (aprox. $ 334.800 ARS)",
        "destacado": "Sale desde Aeroparque",
        "fecha_ida": "2027-02-18",
        "fecha_vuelta": "2027-03-11",
        "actualizado_en_vivo": true,
        "precio_ars": 334800,
        "precio_usd": 248
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Copacabana Palace, A Belmond Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (2.650 reseñas)",
        "zona": "Copacabana frente al mar",
        "precio_noche": "US$ 450 / noche",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El palacio más legendario de Sudamérica. Piscina semiolímpica histórica, restaurante con estrella Michelin (Mee) y servicio 5 estrellas superior.",
        "booking_url": "https://www.booking.com/hotel/br/copacabana-palace.es.html",
        "precio_noche_usd": 450,
        "precio_noche_ars": 607500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Miramar Hotel by Windsor",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (4.200 reseñas)",
        "zona": "Av. Atlântica / Posto 5",
        "precio_noche": "US$ 160 / noche",
        "foto": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel de diseño frente a la playa con piscina infinita de granito verde en la terraza, servicio de mayordomo y desayuno buffet premiado.",
        "booking_url": "https://www.booking.com/hotel/br/miramar-by-windsor.es.html",
        "precio_noche_usd": 160,
        "precio_noche_ars": 216000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Ipanema Inn Hotel",
        "estrellas": "⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (2.890 reseñas)",
        "zona": "Barrio Ipanema (a 100m de la playa)",
        "precio_noche": "US$ 98 / noche",
        "foto": "https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ubicado en la calle más segura y arbolada de Ipanema, a pasos de restaurantes de autor. Desayuno artesanal y servicio de playa sin costos extra.",
        "booking_url": "https://www.booking.com/hotel/br/ipanema-inn.es.html",
        "precio_noche_usd": 98,
        "precio_noche_ars": 132300,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 42,
      "rango_min": "US$ 220",
      "rango_max": "US$ 330",
      "mensaje": "Por el momento, se mantienen los precios estándar para volar a Río de Janeiro.",
      "texto_pin": "US$ 240 es una tarifa récord baja",
      "consejo": "Vuelo directo con JetSMART saliendo de Aeroparque. Para fines de semana largos, esta tarifa suele duplicarse.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        298,
        281,
        266,
        252,
        240
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "br",
    "categoria_region": "brasil",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 25 días · Tarifa récord más baja detectada",
      "aerolinea": "Emirates / Gol",
      "escalas": "Directo (EZE ➔ Brasil)",
      "fechas": "24 Nov - 30 Nov 2026",
      "fecha_ida": "2026-11-24",
      "fecha_vuelta": "2026-11-30",
      "noches": 6,
      "dias_para_el_vuelo": 25,
      "precio": "US$ 342",
      "precio_usd": "aprox. $ 461.700 ARS",
      "precio_ars": 461700,
      "precio_usd_num": 342,
      "ahorro_porcentaje": "24% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20BUE%20on%202026-11-24%20through%202026-11-30&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rio/2026-11-24/2026-11-30?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "GIG",
      "ciudad": "Río de Janeiro",
      "actualizado_at": "2026-11-06T09:38:25.530922+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "23 Nov - 30 Nov 2026",
              "noches": 7,
              "dias_restantes": 17,
              "precio_usd": 244,
              "precio_ars": 353800,
              "precio_texto": "US$ 244",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-11-23%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-11-23/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-15",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "15 Nov - 21 Nov 2026",
              "noches": 6,
              "dias_restantes": 9,
              "precio_usd": 333,
              "precio_ars": 482800,
              "precio_texto": "US$ 333",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-11-15%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-11-15/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-19",
              "fecha_vuelta": "2026-12-25",
              "fechas_texto": "19 Dec - 25 Dec 2026",
              "noches": 6,
              "dias_restantes": 43,
              "precio_usd": 256,
              "precio_ars": 371200,
              "precio_texto": "US$ 256",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-12-19%20through%202026-12-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-12-19/2026-12-25?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "09 Dec - 17 Dec 2026",
              "noches": 8,
              "dias_restantes": 33,
              "precio_usd": 256,
              "precio_ars": 371200,
              "precio_texto": "US$ 256",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-12-09%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-12-09/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-28",
              "fecha_vuelta": "2027-02-04",
              "fechas_texto": "28 Jan - 04 Feb 2027",
              "noches": 7,
              "dias_restantes": 83,
              "precio_usd": 334,
              "precio_ars": 484300,
              "precio_texto": "US$ 334",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202027-01-28%20through%202027-02-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2027-01-28/2027-02-04?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-18",
              "fecha_vuelta": "2027-01-25",
              "fechas_texto": "18 Jan - 25 Jan 2027",
              "noches": 7,
              "dias_restantes": 73,
              "precio_usd": 407,
              "precio_ars": 590200,
              "precio_texto": "US$ 407",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202027-01-18%20through%202027-01-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2027-01-18/2027-01-25?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-06",
            "fecha_vuelta": "2027-05-13",
            "fechas_texto": "06 May - 13 May 2027",
            "noches": 7,
            "dias_restantes": 181,
            "precio_usd": 272,
            "precio_ars": 394400,
            "precio_texto": "US$ 272",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202027-05-06%20through%202027-05-13&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2027-05-06/2027-05-13?affilid=flightbot",
            "aerolinea_gate": "Clickavia",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "23 Nov - 30 Nov 2026",
              "noches": 7,
              "dias_restantes": 17,
              "precio_usd": 244,
              "precio_ars": 353800,
              "precio_texto": "US$ 244",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-11-23%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-11-23/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-15",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "15 Nov - 21 Nov 2026",
              "noches": 6,
              "dias_restantes": 9,
              "precio_usd": 333,
              "precio_ars": 482800,
              "precio_texto": "US$ 333",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-11-15%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-11-15/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-19",
              "fecha_vuelta": "2026-12-25",
              "fechas_texto": "19 Dec - 25 Dec 2026",
              "noches": 6,
              "dias_restantes": 43,
              "precio_usd": 256,
              "precio_ars": 371200,
              "precio_texto": "US$ 256",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-12-19%20through%202026-12-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-12-19/2026-12-25?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-17",
              "fechas_texto": "09 Dec - 17 Dec 2026",
              "noches": 8,
              "dias_restantes": 33,
              "precio_usd": 256,
              "precio_ars": 371200,
              "precio_texto": "US$ 256",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202026-12-09%20through%202026-12-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2026-12-09/2026-12-17?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-28",
              "fecha_vuelta": "2027-02-04",
              "fechas_texto": "28 Jan - 04 Feb 2027",
              "noches": 7,
              "dias_restantes": 83,
              "precio_usd": 334,
              "precio_ars": 484300,
              "precio_texto": "US$ 334",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202027-01-28%20through%202027-02-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2027-01-28/2027-02-04?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-18",
              "fecha_vuelta": "2027-01-25",
              "fechas_texto": "18 Jan - 25 Jan 2027",
              "noches": 7,
              "dias_restantes": 73,
              "precio_usd": 407,
              "precio_ars": 590200,
              "precio_texto": "US$ 407",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202027-01-18%20through%202027-01-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2027-01-18/2027-01-25?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-06",
              "fecha_vuelta": "2027-05-13",
              "fechas_texto": "06 May - 13 May 2027",
              "noches": 7,
              "dias_restantes": 181,
              "precio_usd": 272,
              "precio_ars": 394400,
              "precio_texto": "US$ 272",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20GIG%20from%20EZE%20on%202027-05-06%20through%202027-05-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/gig/2027-05-06/2027-05-13?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "salvador",
    "ciudad": "Salvador de Bahía & Costa dos Coqueiros",
    "pais": "Brasil",
    "bandera": "🥁",
    "iata": "SSA",
    "tipo_ruta": "Internacional / Regional",
    "es_cabotaje": false,
    "categoria_region": "brasil",
    "precio_desde": "US$ 371",
    "comando_tg": "/salvador",
    "resena": "Epicentro de la cultura afrobrasileña con las fachadas coloniales del Pelourinho, ritmo de Olodum y excursiones a las playas idílicas y piscinas naturales de Praia do Forte.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "GOL Linhas Aéreas",
        "escalas": "1 escala corta (GIG)",
        "fechas": "23 Nov - 30 Nov 2026",
        "noches": 7,
        "precio": "US$ 371 (aprox. $ 500.850 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-11-23",
        "fecha_vuelta": "2026-11-30",
        "actualizado_en_vivo": true,
        "precio_ars": 500850,
        "precio_usd": 371
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (GRU)",
        "fechas": "09 Abr - 20 Abr 2027",
        "noches": 11,
        "precio": "US$ 413 (aprox. $ 557.550 ARS)",
        "destacado": "Conexión eficiente",
        "fecha_ida": "2027-04-09",
        "fecha_vuelta": "2027-04-20",
        "actualizado_en_vivo": true,
        "precio_ars": 557550,
        "precio_usd": 413
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo de temporada (AEP ➔ SSA)",
        "fechas": "07 Dic - 14 Dic 2026",
        "noches": 7,
        "precio": "US$ 423 (aprox. $ 571.050 ARS)",
        "destacado": "Vuelo directo sin escalas",
        "fecha_ida": "2026-12-07",
        "fecha_vuelta": "2026-12-14",
        "actualizado_en_vivo": true,
        "precio_ars": 571050,
        "precio_usd": 423
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Fera Palace Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (2.100 reseñas)",
        "zona": "Centro Histórico / Rua Chile",
        "precio_noche": "US$ 230 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Edificio Art Déco de 1934 completamente restaurado. Piscina infinita en la terraza frente a la Bahía de Todos los Santos.",
        "booking_url": "https://www.booking.com/hotel/br/fera-palace.es.html",
        "precio_noche_usd": 230,
        "precio_noche_ars": 310500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Tivoli Ecoresort Praia do Forte",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Fantástico (3.600 reseñas)",
        "zona": "Praia do Forte (Costa dos Coqueiros)",
        "precio_noche": "US$ 340 / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ecoresort de lujo en plena naturaleza tropical con media pensión incluida, spa talasoterapia y acceso directo a la playa.",
        "booking_url": "https://www.booking.com/hotel/br/tivoli-ecoresort-praia-do-forte.es.html",
        "precio_noche_usd": 340,
        "precio_noche_ars": 459000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Wish Hotel da Bahia",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (3.100 reseñas)",
        "zona": "Campo Grande / Corredor da Vitória",
        "precio_noche": "US$ 78 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Monumento histórico con más de 350 obras de arte brasileñas, dos piscinas al aire libre y spa en una zona muy arbolada.",
        "booking_url": "https://www.booking.com/hotel/br/wish-hotel-da-bahia.es.html",
        "precio_noche_usd": 78,
        "precio_noche_ars": 105300,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "US$ 340",
      "rango_max": "US$ 510",
      "mensaje": "¡Precio bajo detectado para Bahía y playas del Nordeste!",
      "texto_pin": "US$ 371 es una tarifa récord baja",
      "consejo": "Tarifa excelente con escala breve en Río. Permite combinar cultura colonial con el relax de Praia do Forte.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        460,
        434,
        412,
        390,
        371
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "br",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "Emirates / Gol",
      "escalas": "Directo (EZE ➔ Brasil)",
      "fechas": "25 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-12-01",
      "noches": 6,
      "dias_para_el_vuelo": 26,
      "precio": "US$ 416",
      "precio_usd": "aprox. $ 561.600 ARS",
      "precio_ars": 561600,
      "precio_usd_num": 416,
      "ahorro_porcentaje": "24% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20BUE%20on%202026-11-25%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/salvador/2026-11-25/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "SSA",
      "ciudad": "Salvador de Bahía & Costa dos Coqueiros",
      "actualizado_at": "2026-11-06T09:38:25.769613+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "23 Nov - 30 Nov 2026",
              "noches": 7,
              "dias_restantes": 17,
              "precio_usd": 371,
              "precio_ars": 538000,
              "precio_texto": "US$ 371",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202026-11-23%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2026-11-23/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 416,
              "precio_ars": 603200,
              "precio_texto": "US$ 416",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 437,
              "precio_ars": 633600,
              "precio_texto": "US$ 437",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 458,
              "precio_ars": 664100,
              "precio_texto": "US$ 458",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-12",
            "fechas_texto": "05 May - 12 May 2027",
            "noches": 7,
            "dias_restantes": 180,
            "precio_usd": 395,
            "precio_ars": 572800,
            "precio_texto": "US$ 395",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2027-05-05/2027-05-12?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-11-30",
              "fechas_texto": "23 Nov - 30 Nov 2026",
              "noches": 7,
              "dias_restantes": 17,
              "precio_usd": 371,
              "precio_ars": 538000,
              "precio_texto": "US$ 371",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202026-11-23%20through%202026-11-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2026-11-23/2026-11-30?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 416,
              "precio_ars": 603200,
              "precio_texto": "US$ 416",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 437,
              "precio_ars": 633600,
              "precio_texto": "US$ 437",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 458,
              "precio_ars": 664100,
              "precio_texto": "US$ 458",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-12",
              "fechas_texto": "05 May - 12 May 2027",
              "noches": 7,
              "dias_restantes": 180,
              "precio_usd": 395,
              "precio_ars": 572800,
              "precio_texto": "US$ 395",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SSA%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ssa/2027-05-05/2027-05-12?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "santiago",
    "ciudad": "Santiago de Chile & Cordillera",
    "pais": "Chile",
    "bandera": "🇨🇱",
    "iata": "SCL",
    "tipo_ruta": "Internacional / Regional",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "precio_desde": "US$ 167",
    "comando_tg": "/santiago",
    "resena": "Cruce exprés de los Andes en 2 horas: polo comercial y tecnológico de vanguardia, bodegas de renombre en Valle del Maipo y centros de nieve como Valle Nevado a solo 1 hora.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "SKY Airline",
        "escalas": "Directo (AEP ➔ SCL)",
        "fechas": "26 Ene - 03 Feb 2027",
        "noches": 8,
        "precio": "US$ 167 (aprox. $ 225.450 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-01-26",
        "fecha_vuelta": "2027-02-03",
        "actualizado_en_vivo": true,
        "precio_ars": 225450,
        "precio_usd": 167
      },
      {
        "puesto": "🥈",
        "aerolinea": "JetSMART",
        "escalas": "Directo (AEP ➔ SCL)",
        "fechas": "01 Feb - 06 Feb 2027",
        "noches": 5,
        "precio": "US$ 169 (aprox. $ 228.150 ARS)",
        "destacado": "Vuelo directo de 2h 10m",
        "fecha_ida": "2027-02-01",
        "fecha_vuelta": "2027-02-06",
        "actualizado_en_vivo": true,
        "precio_ars": 228150,
        "precio_usd": 169
      },
      {
        "puesto": "🥉",
        "aerolinea": "LATAM Airlines",
        "escalas": "Directo (AEP/EZE ➔ SCL)",
        "fechas": "09 Abr - 23 Abr 2027",
        "noches": 14,
        "precio": "US$ 172 (aprox. $ 232.200 ARS)",
        "destacado": "Múltiples vuelos al día",
        "fecha_ida": "2027-04-09",
        "fecha_vuelta": "2027-04-23",
        "actualizado_en_vivo": true,
        "precio_ars": 232200,
        "precio_usd": 172
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "The Singular Santiago",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (2.400 reseñas)",
        "zona": "Barrio Lastarria",
        "precio_noche": "US$ 210 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel de diseño clásico refinado en el barrio más bohemio y seguro, rooftop con piscina y bar mirando al Parque Forestal.",
        "booking_url": "https://www.booking.com/hotel/cl/the-singular-santiago.es.html",
        "precio_noche_usd": 210,
        "precio_noche_ars": 283500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Mandarin Oriental Santiago",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.200 reseñas)",
        "zona": "Las Condes (Sector Financiero)",
        "precio_noche": "US$ 190 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Piscina estilo laguna con cascada rodeada de jardines, alta gastronomía y cercanía inmediata a Parque Arauco.",
        "booking_url": "https://www.booking.com/hotel/cl/mandarin-oriental-santiago.es.html",
        "precio_noche_usd": 190,
        "precio_noche_ars": 256500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Hotel Magnolia Santiago",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (1.900 reseñas)",
        "zona": "Cerro Santa Lucía / Centro",
        "precio_noche": "US$ 115 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Mansión patrimonial de 1929 restaurada con diseño vanguardista, terraza con vista panorámica y atención personalizada.",
        "booking_url": "https://www.booking.com/hotel/cl/magnolia.es.html",
        "precio_noche_usd": 115,
        "precio_noche_ars": 155250,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 20,
      "rango_min": "US$ 150",
      "rango_max": "US$ 230",
      "mensaje": "¡Tarifa mínima para una escapada de compras a Chile!",
      "texto_pin": "US$ 167 es una tarifa récord baja",
      "consejo": "SKY Airline y JetSMART compiten agresivamente en este corredor directo de apenas 2 horas.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        207,
        195,
        185,
        175,
        167
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "cl",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 28 días · Tarifa récord más baja detectada",
      "aerolinea": "Avianca / Copa",
      "escalas": "1 escala corta",
      "fechas": "27 Nov - 04 Dic 2026",
      "fecha_ida": "2026-11-27",
      "fecha_vuelta": "2026-12-04",
      "noches": 7,
      "dias_para_el_vuelo": 28,
      "precio": "US$ 143",
      "precio_usd": "aprox. $ 193.050 ARS",
      "precio_ars": 193050,
      "precio_usd_num": 143,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20BUE%20on%202026-11-27%20through%202026-12-04&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/santiago/2026-11-27/2026-12-04?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "SCL",
      "ciudad": "Santiago de Chile & Cordillera",
      "actualizado_at": "2026-11-06T09:38:26.168086+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-28",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "28 Nov - 02 Dec 2026",
              "noches": 4,
              "dias_restantes": 22,
              "precio_usd": 131,
              "precio_ars": 190000,
              "precio_texto": "US$ 131",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-11-28%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-11-28/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "13 Nov - 18 Nov 2026",
              "noches": 5,
              "dias_restantes": 7,
              "precio_usd": 176,
              "precio_ars": 255200,
              "precio_texto": "US$ 176",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-11-13%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-11-13/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-25",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "25 Dec - 01 Jan 2027",
              "noches": 7,
              "dias_restantes": 49,
              "precio_usd": 181,
              "precio_ars": 262400,
              "precio_texto": "US$ 181",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-12-25%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-12-25/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Авиасейлс",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-14",
              "fechas_texto": "08 Dec - 14 Dec 2026",
              "noches": 6,
              "dias_restantes": 32,
              "precio_usd": 217,
              "precio_ars": 314600,
              "precio_texto": "US$ 217",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-12-08%20through%202026-12-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-12-08/2026-12-14?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-26",
              "fecha_vuelta": "2027-02-03",
              "fechas_texto": "26 Jan - 03 Feb 2027",
              "noches": 8,
              "dias_restantes": 81,
              "precio_usd": 167,
              "precio_ars": 242200,
              "precio_texto": "US$ 167",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202027-01-26%20through%202027-02-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2027-01-26/2027-02-03?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-30",
              "fecha_vuelta": "2027-02-05",
              "fechas_texto": "30 Jan - 05 Feb 2027",
              "noches": 6,
              "dias_restantes": 85,
              "precio_usd": 193,
              "precio_ars": 279800,
              "precio_texto": "US$ 193",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202027-01-30%20through%202027-02-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2027-01-30/2027-02-05?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-10",
            "fecha_vuelta": "2027-05-18",
            "fechas_texto": "10 May - 18 May 2027",
            "noches": 8,
            "dias_restantes": 185,
            "precio_usd": 174,
            "precio_ars": 252300,
            "precio_texto": "US$ 174",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202027-05-10%20through%202027-05-18&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2027-05-10/2027-05-18?affilid=flightbot",
            "aerolinea_gate": "Trip.com",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-28",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "28 Nov - 02 Dec 2026",
              "noches": 4,
              "dias_restantes": 22,
              "precio_usd": 131,
              "precio_ars": 190000,
              "precio_texto": "US$ 131",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-11-28%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-11-28/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "13 Nov - 18 Nov 2026",
              "noches": 5,
              "dias_restantes": 7,
              "precio_usd": 176,
              "precio_ars": 255200,
              "precio_texto": "US$ 176",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-11-13%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-11-13/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-25",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "25 Dec - 01 Jan 2027",
              "noches": 7,
              "dias_restantes": 49,
              "precio_usd": 181,
              "precio_ars": 262400,
              "precio_texto": "US$ 181",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-12-25%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-12-25/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Авиасейлс",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-14",
              "fechas_texto": "08 Dec - 14 Dec 2026",
              "noches": 6,
              "dias_restantes": 32,
              "precio_usd": 217,
              "precio_ars": 314600,
              "precio_texto": "US$ 217",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202026-12-08%20through%202026-12-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2026-12-08/2026-12-14?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-26",
              "fecha_vuelta": "2027-02-03",
              "fechas_texto": "26 Jan - 03 Feb 2027",
              "noches": 8,
              "dias_restantes": 81,
              "precio_usd": 167,
              "precio_ars": 242200,
              "precio_texto": "US$ 167",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202027-01-26%20through%202027-02-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2027-01-26/2027-02-03?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-30",
              "fecha_vuelta": "2027-02-05",
              "fechas_texto": "30 Jan - 05 Feb 2027",
              "noches": 6,
              "dias_restantes": 85,
              "precio_usd": 193,
              "precio_ars": 279800,
              "precio_texto": "US$ 193",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202027-01-30%20through%202027-02-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2027-01-30/2027-02-05?affilid=flightbot",
              "aerolinea_gate": "Clickavia",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-10",
              "fecha_vuelta": "2027-05-18",
              "fechas_texto": "10 May - 18 May 2027",
              "noches": 8,
              "dias_restantes": 185,
              "precio_usd": 174,
              "precio_ars": 252300,
              "precio_texto": "US$ 174",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SCL%20from%20EZE%20on%202027-05-10%20through%202027-05-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/scl/2027-05-10/2027-05-18?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "sanandres",
    "ciudad": "San Andrés & Mar de 7 Colores",
    "pais": "Colombia",
    "bandera": "🇨🇴",
    "iata": "ADZ",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "precio_desde": "US$ 633",
    "comando_tg": "/sanandres",
    "resena": "Reserva de Biósfera Seaflower con su inconfundible 'Mar de los Siete Colores'. Excursiones a Johnny Cay, cayo Acuario con mantarrayas y arrecifes coralinos a 29°C constantes.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala corta (PTY)",
        "fechas": "06 Dic - 11 Dic 2026",
        "noches": 5,
        "precio": "US$ 633 (aprox. $ 854.550 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-12-06",
        "fecha_vuelta": "2026-12-11",
        "actualizado_en_vivo": true,
        "precio_ars": 854550,
        "precio_usd": 633
      },
      {
        "puesto": "🥈",
        "aerolinea": "Avianca",
        "escalas": "1 escala (BOG)",
        "fechas": "13 Dic - 18 Dic 2026",
        "noches": 5,
        "precio": "US$ 671 (aprox. $ 905.850 ARS)",
        "destacado": "Conexión ágil en Bogotá",
        "fecha_ida": "2026-12-13",
        "fecha_vuelta": "2026-12-18",
        "actualizado_en_vivo": true,
        "precio_ars": 905850,
        "precio_usd": 671
      },
      {
        "puesto": "🥉",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (LIM)",
        "fechas": "20 Dic - 25 Dic 2026",
        "noches": 5,
        "precio": "US$ 722 (aprox. $ 974.700 ARS)",
        "destacado": "Excelente equipaje",
        "fecha_ida": "2026-12-20",
        "fecha_vuelta": "2026-12-25",
        "actualizado_en_vivo": true,
        "precio_ars": 974700,
        "precio_usd": 722
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Decameron Isleño All Inclusive",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Excepcional (3.100 reseñas)",
        "zona": "Spratt Bight (Frente al Mar)",
        "precio_noche": "US$ 240 / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort todo incluido en la mejor zona de playa de San Andrés, arquitectura caribeña moderna y club de playa.",
        "booking_url": "https://www.booking.com/hotel/co/decameron-isleno.es.html",
        "precio_noche_usd": 240,
        "precio_noche_ars": 324000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hotel Casablanca San Andrés",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Fantástico (2.800 reseñas)",
        "zona": "Peatonal Spratt Bight",
        "precio_noche": "US$ 160 / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Sobre el paseo peatonal frente a la playa con 4 restaurantes gourmet reconocidos, piscina al aire libre y cócteles.",
        "booking_url": "https://www.booking.com/hotel/co/hotel-casablanca-san-andres.es.html",
        "precio_noche_usd": 160,
        "precio_noche_ars": 216000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Aquamare Hotel",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (2.200 reseñas)",
        "zona": "Centro Comercial y Turístico",
        "precio_noche": "US$ 95 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel boutique moderno inaugurado recientemente con piscina, desayuno buffet incluido y ubicación céntrica.",
        "booking_url": "https://www.booking.com/hotel/co/aquamare.es.html",
        "precio_noche_usd": 95,
        "precio_noche_ars": 128250,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "US$ 580",
      "rango_max": "US$ 870",
      "mensaje": "¡Oportunidad récord en el Caribe Colombiano!",
      "texto_pin": "US$ 633 es una tarifa récord baja",
      "consejo": "Copa vía Panamá ofrece una escala muy corta y permite llevar valija carry-on de 10 kg.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        785,
        741,
        703,
        665,
        633
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "co",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 30 días · Tarifa récord más baja detectada",
      "aerolinea": "Avianca / Copa",
      "escalas": "1 escala corta",
      "fechas": "29 Nov - 06 Dic 2026",
      "fecha_ida": "2026-11-29",
      "fecha_vuelta": "2026-12-06",
      "noches": 7,
      "dias_para_el_vuelo": 30,
      "precio": "US$ 485",
      "precio_usd": "aprox. $ 654.750 ARS",
      "precio_ars": 654750,
      "precio_usd_num": 485,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20BUE%20on%202026-11-29%20through%202026-12-06&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sanandres/2026-11-29/2026-12-06?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "ADZ",
      "ciudad": "San Andrés & Mar de 7 Colores",
      "actualizado_at": "2026-11-06T09:38:26.399525+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 485,
              "precio_ars": 703200,
              "precio_texto": "US$ 485",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 509,
              "precio_ars": 738000,
              "precio_texto": "US$ 509",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 534,
              "precio_ars": 774300,
              "precio_texto": "US$ 534",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-14",
            "fechas_texto": "05 May - 14 May 2027",
            "noches": 9,
            "dias_restantes": 180,
            "precio_usd": 461,
            "precio_ars": 668400,
            "precio_texto": "US$ 461",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2027-05-05/2027-05-14?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 485,
              "precio_ars": 703200,
              "precio_texto": "US$ 485",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 509,
              "precio_ars": 738000,
              "precio_texto": "US$ 509",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 534,
              "precio_ars": 774300,
              "precio_texto": "US$ 534",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-14",
              "fechas_texto": "05 May - 14 May 2027",
              "noches": 9,
              "dias_restantes": 180,
              "precio_usd": 461,
              "precio_ars": 668400,
              "precio_texto": "US$ 461",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ADZ%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/adz/2027-05-05/2027-05-14?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "cartagena",
    "ciudad": "Cartagena de Indias & Islas del Rosario",
    "pais": "Colombia",
    "bandera": "🌺",
    "iata": "CTG",
    "tipo_ruta": "Caribe Colombiano",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "codigo_pais": "co",
    "precio_desde": "US$ 492",
    "comando_tg": "/cartagena",
    "resena": "La Joya Colonial del Caribe: 11 kilómetros de murallas virreinales de piedra coralina, balcones cubiertos de buganvilias, ritmo de cumbia en Getsemaní y aguas turquesas en Islas del Rosario y Barú.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Avianca",
        "escalas": "1 escala rápida (BOG)",
        "fechas": "22 Feb - 05 Mar 2027",
        "fecha_ida": "2027-02-22",
        "fecha_vuelta": "2027-03-05",
        "noches": 11,
        "precio": "US$ 492 (aprox. $ 664.200 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 492,
        "precio_ars": 664200
      },
      {
        "puesto": "🥈",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala rápida (PTY)",
        "fechas": "30 Ene - 05 Feb 2027",
        "fecha_ida": "2027-01-30",
        "fecha_vuelta": "2027-02-05",
        "noches": 6,
        "precio": "US$ 668 (aprox. $ 901.800 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 668,
        "precio_ars": 901800
      },
      {
        "puesto": "🥉",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (LIM)",
        "fechas": "08 Mar - 19 Mar 2027",
        "fecha_ida": "2027-03-08",
        "fecha_vuelta": "2027-03-19",
        "noches": 11,
        "precio": "US$ 561 (aprox. $ 757.350 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 561,
        "precio_ars": 757350
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Charleston Santa Teresa Cartagena",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (1.980 reseñas)",
        "zona": "Centro Histórico Amurallado (Plaza Santa Teresa)",
        "precio_noche": "US$ 340 / noche",
        "precio_noche_usd": 340,
        "precio_noche_ars": 459000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Antiguo convento colonial del siglo XVII frente al bastión de San Francisco Javier, con terraza panorámica y piscina sobre las murallas.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Hotel+Charleston+Santa+Teresa+Cartagena"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hyatt Regency Cartagena",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.840 reseñas)",
        "zona": "Bocagrande (Frente al Mar Caribe)",
        "precio_noche": "US$ 185 / noche",
        "precio_noche_usd": 185,
        "precio_noche_ars": 249750,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Tres piscinas infinitas en altura con vistas ininterrumpidas al mar Caribe y a un paso de la Ciudad Amurallada.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Hyatt+Regency+Cartagena"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Hotel Capellán de Getsemaní",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (1.420 reseñas)",
        "zona": "Getsemaní (A 3 cuadras del Reloj Público)",
        "precio_noche": "US$ 110 / noche",
        "precio_noche_usd": 110,
        "precio_noche_ars": 148500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Encanto boutique colonial en el corazón cultural de Getsemaní, con piscina en el rooftop y desayuno caribeño gourmet.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Hotel+Capellan+de+Getsemani+Cartagena"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 22,
      "rango_min": "US$ 450",
      "rango_max": "US$ 680",
      "mensaje": "¡Tarifa de oportunidad al Caribe Colombiano! En el 25% más económico del año.",
      "texto_pin": "US$ 492 es una tarifa récord baja",
      "consejo": "Volar vía Bogotá con Avianca o vía Panamá con Copa permite combinar 5 noches en el Centro Histórico y 3 noches en Islas del Rosario.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        610,
        576,
        546,
        517,
        492
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "CTG",
      "ciudad": "Cartagena de Indias & Islas del Rosario",
      "actualizado_at": "2026-11-06T09:38:26.628897+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-16",
              "fecha_vuelta": "2026-11-23",
              "fechas_texto": "16 Nov - 23 Nov 2026",
              "noches": 7,
              "dias_restantes": 10,
              "precio_usd": 1019,
              "precio_ars": 1477600,
              "precio_texto": "US$ 1019",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202026-11-16%20through%202026-11-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2026-11-16/2026-11-23?affilid=flightbot",
              "aerolinea_gate": "Tickets",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-03",
              "fechas_texto": "24 Nov - 03 Dec 2026",
              "noches": 9,
              "dias_restantes": 18,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202026-11-24%20through%202026-12-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2026-11-24/2026-12-03?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-14",
            "fechas_texto": "05 May - 14 May 2027",
            "noches": 9,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2027-05-05/2027-05-14?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-16",
              "fecha_vuelta": "2026-11-23",
              "fechas_texto": "16 Nov - 23 Nov 2026",
              "noches": 7,
              "dias_restantes": 10,
              "precio_usd": 1019,
              "precio_ars": 1477600,
              "precio_texto": "US$ 1019",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202026-11-16%20through%202026-11-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2026-11-16/2026-11-23?affilid=flightbot",
              "aerolinea_gate": "Tickets",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-03",
              "fechas_texto": "24 Nov - 03 Dec 2026",
              "noches": 9,
              "dias_restantes": 18,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202026-11-24%20through%202026-12-03&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2026-11-24/2026-12-03?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-14",
              "fechas_texto": "05 May - 14 May 2027",
              "noches": 9,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CTG%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ctg/2027-05-05/2027-05-14?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "cusco",
    "ciudad": "Cusco & Machu Picchu",
    "pais": "Perú",
    "bandera": "🇵🇪",
    "iata": "CUZ",
    "tipo_ruta": "Sudamérica & Cultura Andina",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "precio_desde": "US$ 368",
    "comando_tg": "/cusco",
    "codigo_pais": "pe",
    "resena": "Capital arqueológica de América: templos incas milenarios, Valle Sagrado y el misterio celestial de Machu Picchu.",
    "vuelos": [
      {
        "puesto": "Top 1 Económico",
        "aerolinea": "LATAM Airlines",
        "fechas": "01 Dic - 05 Dic 2026",
        "escalas": "1 escala en Lima (LIM)",
        "precio": "US$ 368 (aprox. $ 496.800 ARS)",
        "noches": 4,
        "fecha_ida": "2026-12-01",
        "fecha_vuelta": "2026-12-05",
        "actualizado_en_vivo": true,
        "precio_ars": 496800,
        "precio_usd": 368
      },
      {
        "puesto": "Top 2 Rápido",
        "aerolinea": "Sky Airline",
        "fechas": "24 Nov - 29 Nov 2026",
        "escalas": "1 escala breve en Santiago / Lima",
        "precio": "US$ 376 (aprox. $ 507.600 ARS)",
        "noches": 5,
        "fecha_ida": "2026-11-24",
        "fecha_vuelta": "2026-11-29",
        "actualizado_en_vivo": true,
        "precio_ars": 507600,
        "precio_usd": 376
      },
      {
        "puesto": "Top 3 Confort",
        "aerolinea": "Avianca",
        "fechas": "01 Dic - 08 Dic 2026",
        "escalas": "1 escala en Bogotá (BOG)",
        "precio": "US$ 390 (aprox. $ 526.500 ARS)",
        "noches": 7,
        "fecha_ida": "2026-12-01",
        "fecha_vuelta": "2026-12-08",
        "actualizado_en_vivo": true,
        "precio_ars": 526500,
        "precio_usd": 390
      }
    ],
    "hoteles": [
      {
        "nombre": "Antigua Casona San Blas",
        "estrellas": "4 estrellas · 9.6 Excepcional",
        "precio_noche": "US$ 85 / noche",
        "zona": "Barrio San Blas",
        "comentario": "Casona colonial restaurada con chimenea central, patio andino y servicio de té de coca de cortesía.",
        "precio_noche_usd": 85,
        "precio_noche_ars": 114750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Casa Andina Standard Cusco Plaza",
        "estrellas": "3 estrellas · 9.0 Fantástico",
        "precio_noche": "US$ 58 / noche",
        "zona": "Centro Histórico",
        "comentario": "A 1 cuadra de la Plaza de Armas; habitaciones confortables con calefacción y desayuno buffet andino.",
        "precio_noche_usd": 58,
        "precio_noche_ars": 78300,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Tierra Viva Cusco Saphi",
        "estrellas": "3 estrellas · 8.9 Fabuloso",
        "precio_noche": "US$ 62 / noche",
        "zona": "Calle Saphi",
        "comentario": "Posada boutique tranquila cerca de la catedral; personal sumamente atento y oxígeno disponible.",
        "precio_noche_usd": 62,
        "precio_noche_ars": 83700,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "oportunidad",
      "posicion_pct": 32,
      "rango_min": "US$ 340",
      "rango_max": "US$ 510",
      "mensaje": "Tarifa muy ventajosa para volar a los Andes peruanos en temporada seca.",
      "texto_pin": "US$ 368 es una tarifa récord baja",
      "consejo": "Excelente oportunidad para reservar la excursión a Machu Picchu con tren panorámico y entradas oficiales.",
      "historial_valores": [
        456,
        431,
        408,
        386,
        368
      ],
      "historial_formato": "US$ "
    },
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 33 días · Tarifa récord más baja detectada",
      "aerolinea": "Avianca / Copa",
      "escalas": "1 escala corta",
      "fechas": "02 Dic - 09 Dic 2026",
      "fecha_ida": "2026-12-02",
      "fecha_vuelta": "2026-12-09",
      "noches": 7,
      "dias_para_el_vuelo": 33,
      "precio": "US$ 305",
      "precio_usd": "aprox. $ 411.750 ARS",
      "precio_ars": 411750,
      "precio_usd_num": 305,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20BUE%20on%202026-12-02%20through%202026-12-09&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cusco/2026-12-02/2026-12-09?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "CUZ",
      "ciudad": "Cusco & Machu Picchu",
      "actualizado_at": "2026-11-06T09:38:26.861843+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-11-29",
              "fechas_texto": "24 Nov - 29 Nov 2026",
              "noches": 5,
              "dias_restantes": 18,
              "precio_usd": 376,
              "precio_ars": 545200,
              "precio_texto": "US$ 376",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-11-24%20through%202026-11-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-11-24/2026-11-29?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 462,
              "precio_ars": 669900,
              "precio_texto": "US$ 462",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "01 Dec - 08 Dec 2026",
              "noches": 7,
              "dias_restantes": 25,
              "precio_usd": 390,
              "precio_ars": 565500,
              "precio_texto": "US$ 390",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-12-01%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-12-01/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-15",
              "fechas_texto": "08 Dec - 15 Dec 2026",
              "noches": 7,
              "dias_restantes": 32,
              "precio_usd": 468,
              "precio_ars": 678600,
              "precio_texto": "US$ 468",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-12-08%20through%202026-12-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-12-08/2026-12-15?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 336,
              "precio_ars": 487200,
              "precio_texto": "US$ 336",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-12",
            "fechas_texto": "05 May - 12 May 2027",
            "noches": 7,
            "dias_restantes": 180,
            "precio_usd": 290,
            "precio_ars": 420500,
            "precio_texto": "US$ 290",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2027-05-05/2027-05-12?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-11-29",
              "fechas_texto": "24 Nov - 29 Nov 2026",
              "noches": 5,
              "dias_restantes": 18,
              "precio_usd": 376,
              "precio_ars": 545200,
              "precio_texto": "US$ 376",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-11-24%20through%202026-11-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-11-24/2026-11-29?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-18",
              "fechas_texto": "11 Nov - 18 Nov 2026",
              "noches": 7,
              "dias_restantes": 5,
              "precio_usd": 462,
              "precio_ars": 669900,
              "precio_texto": "US$ 462",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-11-11%20through%202026-11-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-11-11/2026-11-18?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "01 Dec - 08 Dec 2026",
              "noches": 7,
              "dias_restantes": 25,
              "precio_usd": 390,
              "precio_ars": 565500,
              "precio_texto": "US$ 390",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-12-01%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-12-01/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-15",
              "fechas_texto": "08 Dec - 15 Dec 2026",
              "noches": 7,
              "dias_restantes": 32,
              "precio_usd": 468,
              "precio_ars": 678600,
              "precio_texto": "US$ 468",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202026-12-08%20through%202026-12-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2026-12-08/2026-12-15?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 336,
              "precio_ars": 487200,
              "precio_texto": "US$ 336",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-12",
              "fechas_texto": "05 May - 12 May 2027",
              "noches": 7,
              "dias_restantes": 180,
              "precio_usd": 290,
              "precio_ars": 420500,
              "precio_texto": "US$ 290",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUZ%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cuz/2027-05-05/2027-05-12?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "newyork",
    "ciudad": "Nueva York (Manhattan & Broadway)",
    "pais": "Estados Unidos",
    "bandera": "🇺🇸",
    "iata": "JFK / EWR",
    "tipo_ruta": "Internacional Directo / 1 Escala",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "precio_desde": "US$ 754",
    "comando_tg": "/newyork",
    "resena": "La Gran Manzana: rascacielos infinitos, luces de Broadway, Central Park, el Puente de Brooklyn y museos legendarios.",
    "vuelos": [
      {
        "puesto": "Top 1",
        "aerolinea": "American Airlines (Directo)",
        "escalas": "Directo sin escalas (10h 45m)",
        "fechas": "15 Abr - 27 Abr 2027",
        "noches": 12,
        "precio": "US$ 754 (aprox. $ 1.017.900 ARS)",
        "destacado": true,
        "fecha_ida": "2027-04-15",
        "fecha_vuelta": "2027-04-27",
        "actualizado_en_vivo": true,
        "precio_ars": 1017900,
        "precio_usd": 754
      },
      {
        "puesto": "Top 2",
        "aerolinea": "Delta Air Lines (Directo)",
        "escalas": "Directo sin escalas (10h 50m)",
        "fechas": "01 Abr - 15 Abr 2027",
        "noches": 14,
        "precio": "US$ 772 (aprox. $ 1.042.200 ARS)",
        "destacado": false,
        "fecha_ida": "2027-04-01",
        "fecha_vuelta": "2027-04-15",
        "actualizado_en_vivo": true,
        "precio_ars": 1042200,
        "precio_usd": 772
      },
      {
        "puesto": "Top 3",
        "aerolinea": "Copa Airlines (1 Escala PTY)",
        "escalas": "1 escala rápida en Panamá (13h 20m)",
        "fechas": "13 Feb - 27 Feb 2027",
        "noches": 14,
        "precio": "US$ 777 (aprox. $ 1.048.950 ARS)",
        "destacado": false,
        "fecha_ida": "2027-02-13",
        "fecha_vuelta": "2027-02-27",
        "actualizado_en_vivo": true,
        "precio_ars": 1048950,
        "precio_usd": 777
      }
    ],
    "hoteles": [
      {
        "categoria": "Económico Inteligente",
        "badge": "Calidad - Precio",
        "nombre": "Pod Times Square Hotel",
        "estrellas": 4,
        "puntuacion": 8.6,
        "calificacion": "Fabuloso",
        "zona": "Midtown West (a 3 cuadras de Times Square)",
        "precio_noche": "US$ 145 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        "descripcion": "Habitaciones modernas estilo cápsula chic con baño privado y terraza rooftop con vistas al skyline.",
        "booking_url": "https://www.booking.com/hotel/us/pod-times-square.html",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "Recomendado",
        "badge": "Mejor Ubicación",
        "nombre": "Arlo Midtown Manhattan",
        "estrellas": 4,
        "puntuacion": 8.9,
        "calificacion": "Excelente",
        "zona": "Hell's Kitchen / Hudson Yards",
        "precio_noche": "US$ 210 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        "descripcion": "Diseño vanguardista, camas premium y fácil acceso a The High Line, Broadway y Penn Station.",
        "booking_url": "https://www.booking.com/hotel/us/arlo-midtown.html",
        "precio_noche_usd": 210,
        "precio_noche_ars": 283500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "Alta Gama",
        "badge": "Vistas Panorámicas",
        "nombre": "1 Hotel Brooklyn Bridge",
        "estrellas": 5,
        "puntuacion": 9.2,
        "calificacion": "Excepcional",
        "zona": "DUMBO (Frente al East River y Manhattan)",
        "precio_noche": "US$ 390 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=600&q=80",
        "descripcion": "Lujo sustentable frente al Puente de Brooklyn con piscina infinita en la terraza frente a los rascacielos.",
        "booking_url": "https://www.booking.com/hotel/us/1-brooklyn-bridge.html",
        "precio_noche_usd": 390,
        "precio_noche_ars": 526500,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "Oportunidad Rara",
      "posicion_pct": 22,
      "rango_min": "US$ 690",
      "rango_max": "US$ 1.040",
      "mensaje": "Tarifa muy conveniente para volar directo a Nueva York (US$ 870 vs promedio de US$ 1.150).",
      "texto_pin": "US$ 754 es una tarifa récord baja",
      "consejo": "Los vuelos directos por debajo de US$ 900 son escasos; conviene asegurar la reserva con 90 días de anticipación.",
      "historial_dias": [
        "Hace 20d",
        "Hace 15d",
        "Hace 10d",
        "Hace 5d",
        "Hoy"
      ],
      "historial_valores": [
        935,
        882,
        837,
        792,
        754
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "us",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 35 días · Tarifa récord más baja detectada",
      "aerolinea": "Avianca / Copa",
      "escalas": "1 escala corta",
      "fechas": "04 Dic - 14 Dic 2026",
      "fecha_ida": "2026-12-04",
      "fecha_vuelta": "2026-12-14",
      "noches": 10,
      "dias_para_el_vuelo": 35,
      "precio": "US$ 585",
      "precio_usd": "aprox. $ 789.750 ARS",
      "precio_ars": 789750,
      "precio_usd_num": 585,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20BUE%20on%202026-12-04%20through%202026-12-14&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/newyork/2026-12-04/2026-12-14?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "JFK / EWR",
      "ciudad": "Nueva York (Manhattan & Broadway)",
      "actualizado_at": "2026-11-06T09:38:27.106847+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-15",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "15 Nov - 27 Nov 2026",
              "noches": 12,
              "dias_restantes": 9,
              "precio_usd": 826,
              "precio_ars": 1197700,
              "precio_texto": "US$ 826",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-11-15%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-11-15/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 585,
              "precio_ars": 848200,
              "precio_texto": "US$ 585",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-23",
              "fecha_vuelta": "2027-01-02",
              "fechas_texto": "23 Dec - 02 Jan 2027",
              "noches": 10,
              "dias_restantes": 47,
              "precio_usd": 890,
              "precio_ars": 1290500,
              "precio_texto": "US$ 890",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-12-23%20through%202027-01-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-12-23/2027-01-02?affilid=flightbot",
              "aerolinea_gate": "Cheapfaremart",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "01 Dec - 08 Dec 2026",
              "noches": 7,
              "dias_restantes": 25,
              "precio_usd": 940,
              "precio_ars": 1363000,
              "precio_texto": "US$ 940",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-12-01%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-12-01/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "Turna.com",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-02",
              "fecha_vuelta": "2027-01-14",
              "fechas_texto": "02 Jan - 14 Jan 2027",
              "noches": 12,
              "dias_restantes": 57,
              "precio_usd": 2025,
              "precio_ars": 2936200,
              "precio_texto": "US$ 2025",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202027-01-02%20through%202027-01-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2027-01-02/2027-01-14?affilid=flightbot",
              "aerolinea_gate": "Wowtickets",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-14",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "14 Jan - 21 Jan 2027",
              "noches": 7,
              "dias_restantes": 69,
              "precio_usd": 644,
              "precio_ars": 933800,
              "precio_texto": "US$ 644",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202027-01-14%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2027-01-14/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-15",
            "fecha_vuelta": "2027-04-27",
            "fechas_texto": "15 Apr - 27 Apr 2027",
            "noches": 12,
            "dias_restantes": 160,
            "precio_usd": 778,
            "precio_ars": 1128100,
            "precio_texto": "US$ 778",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202027-04-15%20through%202027-04-27&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2027-04-15/2027-04-27?affilid=flightbot",
            "aerolinea_gate": "Wingie",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-15",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "15 Nov - 27 Nov 2026",
              "noches": 12,
              "dias_restantes": 9,
              "precio_usd": 826,
              "precio_ars": 1197700,
              "precio_texto": "US$ 826",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-11-15%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-11-15/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 585,
              "precio_ars": 848200,
              "precio_texto": "US$ 585",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-23",
              "fecha_vuelta": "2027-01-02",
              "fechas_texto": "23 Dec - 02 Jan 2027",
              "noches": 10,
              "dias_restantes": 47,
              "precio_usd": 890,
              "precio_ars": 1290500,
              "precio_texto": "US$ 890",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-12-23%20through%202027-01-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-12-23/2027-01-02?affilid=flightbot",
              "aerolinea_gate": "Cheapfaremart",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "01 Dec - 08 Dec 2026",
              "noches": 7,
              "dias_restantes": 25,
              "precio_usd": 940,
              "precio_ars": 1363000,
              "precio_texto": "US$ 940",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202026-12-01%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2026-12-01/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "Turna.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-02",
              "fecha_vuelta": "2027-01-14",
              "fechas_texto": "02 Jan - 14 Jan 2027",
              "noches": 12,
              "dias_restantes": 57,
              "precio_usd": 2025,
              "precio_ars": 2936200,
              "precio_texto": "US$ 2025",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202027-01-02%20through%202027-01-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2027-01-02/2027-01-14?affilid=flightbot",
              "aerolinea_gate": "Wowtickets",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-14",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "14 Jan - 21 Jan 2027",
              "noches": 7,
              "dias_restantes": 69,
              "precio_usd": 644,
              "precio_ars": 933800,
              "precio_texto": "US$ 644",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202027-01-14%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2027-01-14/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-15",
              "fecha_vuelta": "2027-04-27",
              "fechas_texto": "15 Apr - 27 Apr 2027",
              "noches": 12,
              "dias_restantes": 160,
              "precio_usd": 778,
              "precio_ars": 1128100,
              "precio_texto": "US$ 778",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20JFK / EWR%20from%20EZE%20on%202027-04-15%20through%202027-04-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/jfk / ewr/2027-04-15/2027-04-27?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "miami",
    "ciudad": "Miami & Sur de Florida",
    "pais": "Estados Unidos",
    "bandera": "🇺🇸",
    "iata": "MIA",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "precio_desde": "US$ 594",
    "comando_tg": "/miami",
    "resena": "Playas turquesas, distritos de diseño como Wynwood y el centro financiero de Brickell. Punto de partida estratégico para conectar con Orlando en el tren de alta velocidad Brightline (3h 30m) o recorrer los cayos por la Overseas Highway.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Avianca / Copa Airlines",
        "escalas": "1 escala corta",
        "fechas": "09 Abr - 20 Abr 2027",
        "noches": 11,
        "precio": "US$ 594 (aprox. $ 801.900 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-09",
        "fecha_vuelta": "2027-04-20",
        "actualizado_en_vivo": true,
        "precio_ars": 801900,
        "precio_usd": 594
      },
      {
        "puesto": "🥈",
        "aerolinea": "American Airlines",
        "escalas": "Directo (EZE ➔ MIA)",
        "fechas": "28 Abr - 05 May 2027",
        "noches": 7,
        "precio": "US$ 636 (aprox. $ 858.600 ARS)",
        "destacado": "Vuelo directo nocturno",
        "fecha_ida": "2027-04-28",
        "fecha_vuelta": "2027-05-05",
        "actualizado_en_vivo": true,
        "precio_ars": 858600,
        "precio_usd": 636
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aerolíneas Argentinas",
        "escalas": "Directo (EZE ➔ MIA)",
        "fechas": "22 Sep - 29 Sep 2027",
        "noches": 7,
        "precio": "US$ 694 (aprox. $ 936.900 ARS)",
        "destacado": "Atención en español y valijas",
        "fecha_ida": "2027-09-22",
        "fecha_vuelta": "2027-09-29",
        "actualizado_en_vivo": true,
        "precio_ars": 936900,
        "precio_usd": 694
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "1 Hotel South Beach",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excepcional (2.890 reseñas)",
        "zona": "Collins Ave / South Beach",
        "precio_noche": "US$ 490 / noche",
        "foto": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El resort de lujo sustentable por excelencia en Miami: 4 piscinas al aire libre, club de playa privado y diseño orgánico frente al océano.",
        "booking_url": "https://www.booking.com/hotel/us/1-south-beach.es.html",
        "precio_noche_usd": 490,
        "precio_noche_ars": 661500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "The Palms Hotel & Spa",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (3.410 reseñas)",
        "zona": "Mid-Beach / Collins Ave",
        "precio_noche": "US$ 210 / noche",
        "foto": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Oasis tropical sereno frente a la playa con jardín botánico, restaurante farm-to-table y acceso directo al paseo marítimo de South Beach.",
        "booking_url": "https://www.booking.com/hotel/us/the-palms-spa.es.html",
        "precio_noche_usd": 210,
        "precio_noche_ars": 283500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "CitizenM Miami Brickell",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.120 reseñas)",
        "zona": "Brickell / Downtown Financiero",
        "precio_noche": "US$ 135 / noche",
        "foto": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Habitaciones inteligentes con domótica, camas XL comodísimas, piscina rooftop y ubicación privilegiada junto al tren Brightline y Metromover.",
        "booking_url": "https://www.booking.com/hotel/us/citizenm-miami-brickell.es.html",
        "precio_noche_usd": 135,
        "precio_noche_ars": 182250,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 38,
      "rango_min": "US$ 550",
      "rango_max": "US$ 820",
      "mensaje": "Por el momento, se mantienen los precios estándar para tu búsqueda a Miami.",
      "texto_pin": "US$ 594 es una tarifa récord baja",
      "consejo": "Tarifa de ida y vuelta muy competitiva con 1 escala corta (Avianca / Copa). Se ubica cerca del piso habitual de los últimos 60 días.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        737,
        695,
        659,
        624,
        594
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "us",
    "categoria_region": "caribe_usa",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 23 días · Tarifa récord más baja detectada",
      "aerolinea": "Avianca / Copa",
      "escalas": "1 escala corta",
      "fechas": "22 Nov - 28 Nov 2026",
      "fecha_ida": "2026-11-22",
      "fecha_vuelta": "2026-11-28",
      "noches": 6,
      "dias_para_el_vuelo": 23,
      "precio": "US$ 485",
      "precio_usd": "aprox. $ 654.750 ARS",
      "precio_ars": 654750,
      "precio_usd_num": 485,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20BUE%20on%202026-11-22%20through%202026-11-28&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/miami/2026-11-22/2026-11-28?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "MIA",
      "ciudad": "Miami & Sur de Florida",
      "actualizado_at": "2026-11-06T09:38:27.353045+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-14",
              "fecha_vuelta": "2026-11-24",
              "fechas_texto": "14 Nov - 24 Nov 2026",
              "noches": 10,
              "dias_restantes": 8,
              "precio_usd": 666,
              "precio_ars": 965700,
              "precio_texto": "US$ 666",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202026-11-14%20through%202026-11-24&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2026-11-14/2026-11-24?affilid=flightbot",
              "aerolinea_gate": "Mytrip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-26",
              "fecha_vuelta": "2026-12-05",
              "fechas_texto": "26 Nov - 05 Dec 2026",
              "noches": 9,
              "dias_restantes": 20,
              "precio_usd": 485,
              "precio_ars": 703200,
              "precio_texto": "US$ 485",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202026-11-26%20through%202026-12-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2026-11-26/2026-12-05?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 509,
              "precio_ars": 738000,
              "precio_texto": "US$ 509",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-17",
              "fecha_vuelta": "2027-01-25",
              "fechas_texto": "17 Jan - 25 Jan 2027",
              "noches": 8,
              "dias_restantes": 72,
              "precio_usd": 810,
              "precio_ars": 1174500,
              "precio_texto": "US$ 810",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202027-01-17%20through%202027-01-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2027-01-17/2027-01-25?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-02-02",
              "fechas_texto": "24 Jan - 02 Feb 2027",
              "noches": 9,
              "dias_restantes": 79,
              "precio_usd": 534,
              "precio_ars": 774300,
              "precio_texto": "US$ 534",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202027-01-24%20through%202027-02-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2027-01-24/2027-02-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-09",
            "fecha_vuelta": "2027-04-20",
            "fechas_texto": "09 Apr - 20 Apr 2027",
            "noches": 11,
            "dias_restantes": 154,
            "precio_usd": 594,
            "precio_ars": 861300,
            "precio_texto": "US$ 594",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202027-04-09%20through%202027-04-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2027-04-09/2027-04-20?affilid=flightbot",
            "aerolinea_gate": "Tickets",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-14",
              "fecha_vuelta": "2026-11-24",
              "fechas_texto": "14 Nov - 24 Nov 2026",
              "noches": 10,
              "dias_restantes": 8,
              "precio_usd": 666,
              "precio_ars": 965700,
              "precio_texto": "US$ 666",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202026-11-14%20through%202026-11-24&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2026-11-14/2026-11-24?affilid=flightbot",
              "aerolinea_gate": "Mytrip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-26",
              "fecha_vuelta": "2026-12-05",
              "fechas_texto": "26 Nov - 05 Dec 2026",
              "noches": 9,
              "dias_restantes": 20,
              "precio_usd": 485,
              "precio_ars": 703200,
              "precio_texto": "US$ 485",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202026-11-26%20through%202026-12-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2026-11-26/2026-12-05?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 509,
              "precio_ars": 738000,
              "precio_texto": "US$ 509",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-17",
              "fecha_vuelta": "2027-01-25",
              "fechas_texto": "17 Jan - 25 Jan 2027",
              "noches": 8,
              "dias_restantes": 72,
              "precio_usd": 810,
              "precio_ars": 1174500,
              "precio_texto": "US$ 810",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202027-01-17%20through%202027-01-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2027-01-17/2027-01-25?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-02-02",
              "fechas_texto": "24 Jan - 02 Feb 2027",
              "noches": 9,
              "dias_restantes": 79,
              "precio_usd": 534,
              "precio_ars": 774300,
              "precio_texto": "US$ 534",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202027-01-24%20through%202027-02-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2027-01-24/2027-02-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-09",
              "fecha_vuelta": "2027-04-20",
              "fechas_texto": "09 Apr - 20 Apr 2027",
              "noches": 11,
              "dias_restantes": 154,
              "precio_usd": 594,
              "precio_ars": 861300,
              "precio_texto": "US$ 594",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MIA%20from%20EZE%20on%202027-04-09%20through%202027-04-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mia/2027-04-09/2027-04-20?affilid=flightbot",
              "aerolinea_gate": "Tickets",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "orlando",
    "ciudad": "Orlando (Disney & Universal)",
    "pais": "Estados Unidos",
    "bandera": "🏰",
    "iata": "MCO",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "precio_desde": "US$ 710",
    "comando_tg": "/orlando",
    "resena": "La meca universal del entretenimiento y parques temáticos: Magic Kingdom, Epcot, Universal Studios, el nuevo Epic Universe y conexión veloz con Miami vía tren Brightline.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala corta (PTY)",
        "fechas": "27 Ene - 06 Feb 2027",
        "noches": 10,
        "precio": "US$ 710 (aprox. $ 958.500 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-01-27",
        "fecha_vuelta": "2027-02-06",
        "actualizado_en_vivo": true,
        "precio_usd": 710,
        "precio_ars": 958500
      },
      {
        "puesto": "🥈",
        "aerolinea": "Avianca",
        "escalas": "1 escala (BOG)",
        "fechas": "03 Feb - 13 Feb 2027",
        "noches": 10,
        "precio": "US$ 746 (aprox. $ 1.007.100 ARS)",
        "destacado": "Escala rápida",
        "fecha_ida": "2027-02-03",
        "fecha_vuelta": "2027-02-13",
        "actualizado_en_vivo": true,
        "precio_usd": 746,
        "precio_ars": 1007100
      },
      {
        "puesto": "🥉",
        "aerolinea": "American Airlines / LATAM",
        "escalas": "1 escala (MIA)",
        "fechas": "10 Feb - 20 Feb 2027",
        "noches": 10,
        "precio": "US$ 788 (aprox. $ 1.063.800 ARS)",
        "destacado": "Equipaje y millas",
        "fecha_ida": "2027-02-10",
        "fecha_vuelta": "2027-02-20",
        "actualizado_en_vivo": true,
        "precio_usd": 788,
        "precio_ars": 1063800
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Disney's Grand Floridian Resort & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Excepcional (3.400 reseñas)",
        "zona": "Monorail Disney / Magic Kingdom",
        "precio_noche": "US$ 640 / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El resort insignia de estilo victoriano de Walt Disney World: acceso directo en monorriel y vista a los fuegos artificiales.",
        "booking_url": "https://www.booking.com/hotel/us/disney-s-grand-floridian-resort-spa.es.html",
        "precio_noche_usd": 640,
        "precio_noche_ars": 864000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Loews Portofino Bay Hotel at Universal",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Fantástico (4.100 reseñas)",
        "zona": "Universal Orlando Resort",
        "precio_noche": "US$ 390 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Inspirado en el pueblo costero italiano de Portofino, incluye pases Universal Express Unlimited gratuitos para saltar filas.",
        "booking_url": "https://www.booking.com/hotel/us/loews-portofino-bay-at-universal-orlando.es.html",
        "precio_noche_usd": 390,
        "precio_noche_ars": 526500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Hyatt Regency Orlando",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (3.900 reseñas)",
        "zona": "International Drive",
        "precio_noche": "US$ 145 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Piscina estilo resort con tobogán y cascadas, spa y ubicación privilegiada sobre I-Drive a minutos de los parques.",
        "booking_url": "https://www.booking.com/hotel/us/hyatt-regency-orlando.es.html",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 28,
      "rango_min": "US$ 650",
      "rango_max": "US$ 980",
      "mensaje": "¡Precio muy competitivo para viajar a los parques de Orlando!",
      "texto_pin": "US$ 710 es una tarifa récord baja",
      "consejo": "Copa Airlines vía Panamá permite llegar a Orlando sin pasar por la aduana congestionada de Miami.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        880,
        831,
        788,
        746,
        710
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "us",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 25 días · Tarifa récord más baja detectada",
      "aerolinea": "Avianca / Copa",
      "escalas": "1 escala corta",
      "fechas": "24 Nov - 30 Nov 2026",
      "fecha_ida": "2026-11-24",
      "fecha_vuelta": "2026-11-30",
      "noches": 6,
      "dias_para_el_vuelo": 25,
      "precio": "US$ 585",
      "precio_usd": "aprox. $ 789.750 ARS",
      "precio_ars": 789750,
      "precio_usd_num": 585,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20BUE%20on%202026-11-24%20through%202026-11-30&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/orlando/2026-11-24/2026-11-30?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "MCO",
      "ciudad": "Orlando (Disney & Universal)",
      "actualizado_at": "2026-11-06T09:38:27.593269+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 585,
              "precio_ars": 848200,
              "precio_texto": "US$ 585",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 614,
              "precio_ars": 890300,
              "precio_texto": "US$ 614",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 644,
              "precio_ars": 933800,
              "precio_texto": "US$ 644",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Jul 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-07-07",
            "fecha_vuelta": "2027-07-21",
            "fechas_texto": "07 Jul - 21 Jul 2027",
            "noches": 14,
            "dias_restantes": 243,
            "precio_usd": 968,
            "precio_ars": 1403600,
            "precio_texto": "US$ 968",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202027-07-07%20through%202027-07-21&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2027-07-07/2027-07-21?affilid=flightbot",
            "aerolinea_gate": "City.Travel",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 585,
              "precio_ars": 848200,
              "precio_texto": "US$ 585",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 614,
              "precio_ars": 890300,
              "precio_texto": "US$ 614",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 644,
              "precio_ars": 933800,
              "precio_texto": "US$ 644",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Jul 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-07-07",
              "fecha_vuelta": "2027-07-21",
              "fechas_texto": "07 Jul - 21 Jul 2027",
              "noches": 14,
              "dias_restantes": 243,
              "precio_usd": 968,
              "precio_ars": 1403600,
              "precio_texto": "US$ 968",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MCO%20from%20EZE%20on%202027-07-07%20through%202027-07-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mco/2027-07-07/2027-07-21?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "cancun",
    "ciudad": "Cancún & Riviera Maya",
    "pais": "México",
    "bandera": "🇲🇽",
    "iata": "CUN",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "precio_desde": "US$ 636",
    "comando_tg": "/cancun",
    "resena": "El mar Caribe mexicano en su máxima pureza: arenas coralinas blancas, cenotes sagrados, la zona arqueológica maya de Tulum y el acceso rápido a Isla Mujeres en ferry panorámico.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Arajet",
        "escalas": "1 escala corta (SDQ)",
        "fechas": "13 Mar - 23 Mar 2027",
        "noches": 10,
        "precio": "US$ 636 (aprox. $ 858.600 ARS)",
        "destacado": "Tarifa récord Caribe",
        "fecha_ida": "2027-03-13",
        "fecha_vuelta": "2027-03-23",
        "actualizado_en_vivo": true,
        "precio_ars": 858600,
        "precio_usd": 636
      },
      {
        "puesto": "🥈",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala corta (PTY)",
        "fechas": "10 Mar - 24 Mar 2027",
        "noches": 14,
        "precio": "US$ 649 (aprox. $ 876.150 ARS)",
        "destacado": "Conexión eficiente Hub de las Américas",
        "fecha_ida": "2027-03-10",
        "fecha_vuelta": "2027-03-24",
        "actualizado_en_vivo": true,
        "precio_ars": 876150,
        "precio_usd": 649
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aeroméxico",
        "escalas": "1 escala (MEX)",
        "fechas": "23 Sep - 30 Sep 2027",
        "noches": 7,
        "precio": "US$ 676 (aprox. $ 912.600 ARS)",
        "destacado": "Aerolínea de bandera mexicana",
        "fecha_ida": "2027-09-23",
        "fecha_vuelta": "2027-09-30",
        "actualizado_en_vivo": true,
        "precio_ars": 912600,
        "precio_usd": 676
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Xcaret Arte (All-Fun Inclusive)",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (3.100 reseñas)",
        "zona": "Playa del Carmen / Riviera Maya",
        "precio_noche": "US$ 620 / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El concepto todo incluido más premiado del Caribe: acceso ilimitado a todos los parques y cenotes de Grupo Xcaret con traslados incluidos.",
        "booking_url": "https://www.booking.com/hotel/mx/hotel-xcaret-arte.es.html",
        "precio_noche_usd": 620,
        "precio_noche_ars": 837000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "The Grand at Moon Palace",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Fantástico (4.800 reseñas)",
        "zona": "Cancún Sur / Zona Privada",
        "precio_noche": "US$ 380 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Mega resort familiar todo incluido con parque acuático privado, simulador de surf FlowRider, 10 restaurantes temáticos y club de niños.",
        "booking_url": "https://www.booking.com/hotel/mx/the-grand-at-moon-palace.es.html",
        "precio_noche_usd": 380,
        "precio_noche_ars": 513000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Aloft Cancun",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (2.350 reseñas)",
        "zona": "Punta Cancún / Zona Hotelera",
        "precio_noche": "US$ 85 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "En el centro neurálgico de la Zona Hotelera, a pasos de la playa y restaurantes. Piscina en azotea con vista panorámica a la laguna sin pagar tarifas de resort.",
        "booking_url": "https://www.booking.com/hotel/mx/aloft-cancun.es.html",
        "precio_noche_usd": 85,
        "precio_noche_ars": 114750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "US$ 590",
      "rango_max": "US$ 880",
      "mensaje": "¡Tarifa baja confirmada! Los precios actuales están en el segmento más económico para Cancún.",
      "texto_pin": "US$ 636 es una tarifa récord baja",
      "consejo": "Arajet y Copa tienen asientos en clase promo para viajar al Caribe. Excelente oportunidad para anticipar compras.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        789,
        744,
        706,
        668,
        636
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "mx",
    "categoria_region": "caribe_usa",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "Arajet",
      "escalas": "1 escala corta",
      "fechas": "25 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-12-01",
      "noches": 6,
      "dias_para_el_vuelo": 26,
      "precio": "US$ 525",
      "precio_usd": "aprox. $ 708.750 ARS",
      "precio_ars": 708750,
      "precio_usd_num": 525,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20BUE%20on%202026-11-25%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cancun/2026-11-25/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "CUN",
      "ciudad": "Cancún & Riviera Maya",
      "actualizado_at": "2026-11-06T09:38:27.953637+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 525,
              "precio_ars": 761200,
              "precio_texto": "US$ 525",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-14",
              "fecha_vuelta": "2026-12-22",
              "fechas_texto": "14 Dec - 22 Dec 2026",
              "noches": 8,
              "dias_restantes": 38,
              "precio_usd": 825,
              "precio_ars": 1196200,
              "precio_texto": "US$ 825",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202026-12-14%20through%202026-12-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2026-12-14/2026-12-22?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-10",
              "fechas_texto": "03 Dec - 10 Dec 2026",
              "noches": 7,
              "dias_restantes": 27,
              "precio_usd": 875,
              "precio_ars": 1268800,
              "precio_texto": "US$ 875",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202026-12-03%20through%202026-12-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2026-12-03/2026-12-10?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-16",
              "fecha_vuelta": "2027-01-26",
              "fechas_texto": "16 Jan - 26 Jan 2027",
              "noches": 10,
              "dias_restantes": 71,
              "precio_usd": 844,
              "precio_ars": 1223800,
              "precio_texto": "US$ 844",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202027-01-16%20through%202027-01-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2027-01-16/2027-01-26?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-02-02",
              "fechas_texto": "24 Jan - 02 Feb 2027",
              "noches": 9,
              "dias_restantes": 79,
              "precio_usd": 578,
              "precio_ars": 838100,
              "precio_texto": "US$ 578",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202027-01-24%20through%202027-02-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2027-01-24/2027-02-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Sep 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-09-23",
            "fecha_vuelta": "2027-09-30",
            "fechas_texto": "23 Sep - 30 Sep 2027",
            "noches": 7,
            "dias_restantes": 321,
            "precio_usd": 676,
            "precio_ars": 980200,
            "precio_texto": "US$ 676",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202027-09-23%20through%202027-09-30&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2027-09-23/2027-09-30?affilid=flightbot",
            "aerolinea_gate": "Gotogate",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 525,
              "precio_ars": 761200,
              "precio_texto": "US$ 525",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-14",
              "fecha_vuelta": "2026-12-22",
              "fechas_texto": "14 Dec - 22 Dec 2026",
              "noches": 8,
              "dias_restantes": 38,
              "precio_usd": 825,
              "precio_ars": 1196200,
              "precio_texto": "US$ 825",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202026-12-14%20through%202026-12-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2026-12-14/2026-12-22?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-10",
              "fechas_texto": "03 Dec - 10 Dec 2026",
              "noches": 7,
              "dias_restantes": 27,
              "precio_usd": 875,
              "precio_ars": 1268800,
              "precio_texto": "US$ 875",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202026-12-03%20through%202026-12-10&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2026-12-03/2026-12-10?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-16",
              "fecha_vuelta": "2027-01-26",
              "fechas_texto": "16 Jan - 26 Jan 2027",
              "noches": 10,
              "dias_restantes": 71,
              "precio_usd": 844,
              "precio_ars": 1223800,
              "precio_texto": "US$ 844",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202027-01-16%20through%202027-01-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2027-01-16/2027-01-26?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-02-02",
              "fechas_texto": "24 Jan - 02 Feb 2027",
              "noches": 9,
              "dias_restantes": 79,
              "precio_usd": 578,
              "precio_ars": 838100,
              "precio_texto": "US$ 578",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202027-01-24%20through%202027-02-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2027-01-24/2027-02-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Sep 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-09-23",
              "fecha_vuelta": "2027-09-30",
              "fechas_texto": "23 Sep - 30 Sep 2027",
              "noches": 7,
              "dias_restantes": 321,
              "precio_usd": 676,
              "precio_ars": 980200,
              "precio_texto": "US$ 676",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUN%20from%20EZE%20on%202027-09-23%20through%202027-09-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cun/2027-09-23/2027-09-30?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "mexico",
    "ciudad": "Ciudad de México (CDMX) & Teotihuacán",
    "pais": "México",
    "bandera": "🌮",
    "iata": "MEX",
    "tipo_ruta": "Norteamérica Cultural & Gastronómica",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "codigo_pais": "mx",
    "precio_desde": "US$ 670",
    "comando_tg": "/mexico",
    "resena": "La gran metrópolis de América: pirámides prehispánicas milenarias, el Castillo de Chapultepec, la Casa Azul de Frida Kahlo en Coyoacán y la gastronomía callejera y de autor más premiada del planeta.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Avianca / Copa",
        "escalas": "1 escala (BOG / PTY)",
        "fechas": "24 Dic - 07 Ene 2027",
        "fecha_ida": "2026-12-24",
        "fecha_vuelta": "2027-01-07",
        "noches": 14,
        "precio": "US$ 670 (aprox. $ 904.500 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 670,
        "precio_ars": 904500
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (LIM / SCL)",
        "fechas": "08 Mar - 21 Mar 2027",
        "fecha_ida": "2027-03-08",
        "fecha_vuelta": "2027-03-21",
        "noches": 13,
        "precio": "US$ 793 (aprox. $ 1.070.550 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 793,
        "precio_ars": 1070550
      },
      {
        "puesto": "🥉",
        "aerolinea": "Aeroméxico",
        "escalas": "Directo (EZE ➔ MEX)",
        "fechas": "07 Ene - 21 Ene 2027",
        "fecha_ida": "2027-01-07",
        "fecha_vuelta": "2027-01-21",
        "noches": 14,
        "precio": "US$ 764 (aprox. $ 1.031.400 ARS)",
        "destacado": "Vuelo directo",
        "actualizado_en_vivo": true,
        "precio_usd": 764,
        "precio_ars": 1031400
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Four Seasons Hotel Mexico City",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (1.650 reseñas)",
        "zona": "Paseo de la Reforma (Junto al Bosque de Chapultepec)",
        "precio_noche": "US$ 420 / noche",
        "precio_noche_usd": 420,
        "precio_noche_ars": 567000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Palacio de estilo hacienda alrededor de un jardín central de naranjos sobre Paseo de la Reforma, sede del célebre bar Fifty Mils.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Four+Seasons+Hotel+Mexico+City"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Mondrian Mexico City Condesa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (1.890 reseñas)",
        "zona": "La Condesa / Roma Norte",
        "precio_noche": "US$ 195 / noche",
        "precio_noche_usd": 195,
        "precio_noche_ars": 263250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ubicación inmejorable entre Parque México y Parque España para caminar entre cafeterías de especialidad, galerías y bistrós.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Mondrian+Mexico+City+Condesa"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Histórico Central Hotel",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (3.420 reseñas)",
        "zona": "Centro Histórico (A 3 cuadras del Zócalo y Bellas Artes)",
        "precio_noche": "US$ 105 / noche",
        "precio_noche_usd": 105,
        "precio_noche_ars": 141750,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Edificio colonial restaurado con cafetería libre 24 horas incluida sin cargo, desayuno buffet completo y atención sobresaliente.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Historico+Central+Hotel+Mexico+City"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "US$ 620",
      "rango_max": "US$ 920",
      "mensaje": "¡Tarifa competitiva a CDMX! Debajo del promedio anual de la ruta.",
      "texto_pin": "US$ 670 es una tarifa récord baja",
      "consejo": "Copa (vía PTY) y Avianca (vía BOG) ofrecen las tarifas más bajas; Aeroméxico opera el vuelo directo en Boeing 787 Dreamliner.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        831,
        784,
        744,
        704,
        670
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "MEX",
      "ciudad": "Ciudad de México (CDMX) & Teotihuacán",
      "actualizado_at": "2026-11-06T09:38:28.198123+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-20",
              "fechas_texto": "12 Nov - 20 Nov 2026",
              "noches": 8,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202026-11-12%20through%202026-11-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2026-11-12/2026-11-20?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-07",
              "fechas_texto": "24 Dec - 07 Jan 2027",
              "noches": 14,
              "dias_restantes": 48,
              "precio_usd": 670,
              "precio_ars": 971500,
              "precio_texto": "US$ 670",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202026-12-24%20through%202027-01-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2026-12-24/2027-01-07?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-20",
              "fechas_texto": "08 Dec - 20 Dec 2026",
              "noches": 12,
              "dias_restantes": 32,
              "precio_usd": 858,
              "precio_ars": 1244100,
              "precio_texto": "US$ 858",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202026-12-08%20through%202026-12-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2026-12-08/2026-12-20?affilid=flightbot",
              "aerolinea_gate": "Wowtickets",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-20",
              "fechas_texto": "12 Jan - 20 Jan 2027",
              "noches": 8,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202027-01-12%20through%202027-01-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2027-01-12/2027-01-20?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-13",
            "fecha_vuelta": "2027-04-25",
            "fechas_texto": "13 Apr - 25 Apr 2027",
            "noches": 12,
            "dias_restantes": 158,
            "precio_usd": 849,
            "precio_ars": 1231000,
            "precio_texto": "US$ 849",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202027-04-13%20through%202027-04-25&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2027-04-13/2027-04-25?affilid=flightbot",
            "aerolinea_gate": "City.Travel",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-20",
              "fechas_texto": "12 Nov - 20 Nov 2026",
              "noches": 8,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202026-11-12%20through%202026-11-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2026-11-12/2026-11-20?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-07",
              "fechas_texto": "24 Dec - 07 Jan 2027",
              "noches": 14,
              "dias_restantes": 48,
              "precio_usd": 670,
              "precio_ars": 971500,
              "precio_texto": "US$ 670",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202026-12-24%20through%202027-01-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2026-12-24/2027-01-07?affilid=flightbot",
              "aerolinea_gate": "Kiwi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-08",
              "fecha_vuelta": "2026-12-20",
              "fechas_texto": "08 Dec - 20 Dec 2026",
              "noches": 12,
              "dias_restantes": 32,
              "precio_usd": 858,
              "precio_ars": 1244100,
              "precio_texto": "US$ 858",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202026-12-08%20through%202026-12-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2026-12-08/2026-12-20?affilid=flightbot",
              "aerolinea_gate": "Wowtickets",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-20",
              "fechas_texto": "12 Jan - 20 Jan 2027",
              "noches": 8,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202027-01-12%20through%202027-01-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2027-01-12/2027-01-20?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-13",
              "fecha_vuelta": "2027-04-25",
              "fechas_texto": "13 Apr - 25 Apr 2027",
              "noches": 12,
              "dias_restantes": 158,
              "precio_usd": 849,
              "precio_ars": 1231000,
              "precio_texto": "US$ 849",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MEX%20from%20EZE%20on%202027-04-13%20through%202027-04-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mex/2027-04-13/2027-04-25?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "puntacana",
    "ciudad": "Punta Cana",
    "pais": "República Dominicana",
    "bandera": "🇩🇴",
    "iata": "PUJ",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "precio_desde": "US$ 737",
    "comando_tg": "/puntacana",
    "resena": "El epicentro del descanso tropical caribeño: kilómetros de arena blanca fina, cocoteros infinitos, aguas protegidas por barrera de coral y excursiones inolvidables a Isla Saona.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Arajet",
        "escalas": "Directo o escala corta",
        "fechas": "21 Feb - 07 Mar 2027",
        "noches": 14,
        "precio": "US$ 737 (aprox. $ 994.950 ARS)",
        "destacado": "Tarifa récord sin escalas",
        "fecha_ida": "2027-02-21",
        "fecha_vuelta": "2027-03-07",
        "actualizado_en_vivo": true,
        "precio_ars": 994950,
        "precio_usd": 737
      },
      {
        "puesto": "🥈",
        "aerolinea": "Avianca",
        "escalas": "1 escala (BOG)",
        "fechas": "19 Mar - 26 Mar 2027",
        "noches": 7,
        "precio": "US$ 767 (aprox. $ 1.035.450 ARS)",
        "destacado": "Excelente servicio a bordo",
        "fecha_ida": "2027-03-19",
        "fecha_vuelta": "2027-03-26",
        "actualizado_en_vivo": true,
        "precio_ars": 1035450,
        "precio_usd": 767
      },
      {
        "puesto": "🥉",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala (PTY)",
        "fechas": "07 Mar - 21 Mar 2027",
        "noches": 14,
        "precio": "US$ 840 (aprox. $ 1.134.000 ARS)",
        "destacado": "Puntualidad líder en América",
        "fecha_ida": "2027-03-07",
        "fecha_vuelta": "2027-03-21",
        "actualizado_en_vivo": true,
        "precio_ars": 1134000,
        "precio_usd": 840
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hard Rock Hotel & Casino Punta Cana",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (5.200 reseñas)",
        "zona": "Playa Macao / Bávaro",
        "precio_noche": "US$ 420 / noche",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El resort todo incluido de temática musical más emblemático: 13 piscinas con toboganes, casino de clase mundial y campo de golf Jack Nicklaus.",
        "booking_url": "https://www.booking.com/hotel/do/hard-rock-and-casino-punta-cana.es.html",
        "precio_noche_usd": 420,
        "precio_noche_ars": 567000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Lopesan Costa Bávaro Resort & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (4.150 reseñas)",
        "zona": "Playa Bávaro (Primerísima Línea)",
        "precio_noche": "US$ 270 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Arquitectura moderna frente al mar con 6 piscinas (incluyendo una infinita de dos niveles), bulevar gastronómico temático y spa de hidroterapia.",
        "booking_url": "https://www.booking.com/hotel/do/lopesan-costa-bavaro-resort-spa-casino.es.html",
        "precio_noche_usd": 270,
        "precio_noche_ars": 364500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Serenade Punta Cana Beach & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (2.980 reseñas)",
        "zona": "Playa Cabeza de Toro",
        "precio_noche": "US$ 165 / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort todo incluido recientemente inaugurado con habitaciones impecables, gastronomía gourmet a la carta sin reserva previa y excelente tarifa.",
        "booking_url": "https://www.booking.com/hotel/do/serenade-punta-cana-beach-spa-resort.es.html",
        "precio_noche_usd": 165,
        "precio_noche_ars": 222750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 22,
      "rango_min": "US$ 680",
      "rango_max": "US$ 1.020",
      "mensaje": "¡Oportunidad récord! Vuelo al Caribe por debajo de los valores promedio habituales.",
      "texto_pin": "US$ 737 es una tarifa récord baja",
      "consejo": "Arajet vía Santo Domingo ofrece la tarifa más económica del año con 1 valija carry-on incluida.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        914,
        862,
        818,
        774,
        737
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "do",
    "categoria_region": "caribe_usa",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 28 días · Tarifa récord más baja detectada",
      "aerolinea": "Arajet",
      "escalas": "1 escala corta",
      "fechas": "27 Nov - 04 Dic 2026",
      "fecha_ida": "2026-11-27",
      "fecha_vuelta": "2026-12-04",
      "noches": 7,
      "dias_para_el_vuelo": 28,
      "precio": "US$ 481",
      "precio_usd": "aprox. $ 649.350 ARS",
      "precio_ars": 649350,
      "precio_usd_num": 481,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20BUE%20on%202026-11-27%20through%202026-12-04&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puntacana/2026-11-27/2026-12-04?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "PUJ",
      "ciudad": "Punta Cana",
      "actualizado_at": "2026-11-06T09:38:28.424485+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 481,
              "precio_ars": 697400,
              "precio_texto": "US$ 481",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "24 Dec - 05 Jan 2027",
              "noches": 12,
              "dias_restantes": 48,
              "precio_usd": 607,
              "precio_ars": 880200,
              "precio_texto": "US$ 607",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202026-12-24%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2026-12-24/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-16",
              "fechas_texto": "09 Dec - 16 Dec 2026",
              "noches": 7,
              "dias_restantes": 33,
              "precio_usd": 688,
              "precio_ars": 997600,
              "precio_texto": "US$ 688",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202026-12-09%20through%202026-12-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2026-12-09/2026-12-16?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 529,
              "precio_ars": 767000,
              "precio_texto": "US$ 529",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-14",
            "fechas_texto": "05 May - 14 May 2027",
            "noches": 9,
            "dias_restantes": 180,
            "precio_usd": 457,
            "precio_ars": 662600,
            "precio_texto": "US$ 457",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2027-05-05/2027-05-14?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 481,
              "precio_ars": 697400,
              "precio_texto": "US$ 481",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "24 Dec - 05 Jan 2027",
              "noches": 12,
              "dias_restantes": 48,
              "precio_usd": 607,
              "precio_ars": 880200,
              "precio_texto": "US$ 607",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202026-12-24%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2026-12-24/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-16",
              "fechas_texto": "09 Dec - 16 Dec 2026",
              "noches": 7,
              "dias_restantes": 33,
              "precio_usd": 688,
              "precio_ars": 997600,
              "precio_texto": "US$ 688",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202026-12-09%20through%202026-12-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2026-12-09/2026-12-16?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 529,
              "precio_ars": 767000,
              "precio_texto": "US$ 529",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-14",
              "fechas_texto": "05 May - 14 May 2027",
              "noches": 9,
              "dias_restantes": 180,
              "precio_usd": 457,
              "precio_ars": 662600,
              "precio_texto": "US$ 457",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PUJ%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/puj/2027-05-05/2027-05-14?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "aruba",
    "ciudad": "Aruba (Caribe Holandés)",
    "pais": "Reino de los Países Bajos",
    "bandera": "🇦🇼",
    "iata": "AUA",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "precio_desde": "US$ 565",
    "comando_tg": "/aruba",
    "resena": "La 'Isla Feliz': fuera de la franja de huracanes, sol constante los 365 días del año, máxima seguridad para caminar de noche y playas de ranking mundial como Eagle Beach y Palm Beach.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Avianca",
        "escalas": "1 escala corta (BOG)",
        "fechas": "06 Abr - 14 Abr 2027",
        "noches": 8,
        "precio": "US$ 565 (aprox. $ 762.750 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-06",
        "fecha_vuelta": "2027-04-14",
        "actualizado_en_vivo": true,
        "precio_ars": 762750,
        "precio_usd": 565
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM / Arajet",
        "escalas": "1 escala técnica",
        "fechas": "02 Ene - 13 Ene 2027",
        "noches": 11,
        "precio": "US$ 704 (aprox. $ 950.400 ARS)",
        "destacado": "Equipaje carry-on incluido",
        "fecha_ida": "2027-01-02",
        "fecha_vuelta": "2027-01-13",
        "actualizado_en_vivo": true,
        "precio_ars": 950400,
        "precio_usd": 704
      },
      {
        "puesto": "🥉",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala (PTY)",
        "fechas": "20 Abr - 28 Abr 2027",
        "noches": 8,
        "precio": "US$ 644 (aprox. $ 869.400 ARS)",
        "destacado": "Conexión ágil sin cambios de terminal",
        "fecha_ida": "2027-04-20",
        "fecha_vuelta": "2027-04-28",
        "actualizado_en_vivo": true,
        "precio_ars": 869400,
        "precio_usd": 644
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Bucuti & Tara Beach Resort",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.8",
        "calificacion": "Excepcional (3.800 reseñas)",
        "zona": "Eagle Beach (Frente al Mar)",
        "precio_noche": "US$ 510 / noche",
        "foto": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Elegido repetidamente el hotel #1 del Caribe para parejas y romance. Solo adultos, máxima tranquilidad y compromiso ecológico de carbono neutral.",
        "booking_url": "https://www.booking.com/hotel/aw/bucuti-beach-resort-aruba.es.html",
        "precio_noche_usd": 510,
        "precio_noche_ars": 688500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hyatt Regency Aruba Resort Spa",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.240 reseñas)",
        "zona": "Palm Beach (Zona High-Rise)",
        "precio_noche": "US$ 360 / noche",
        "foto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Resort frente al mar con complejo de piscinas de varios niveles, laguna con cisnes negros, casino y cercanía a pie a todos los shoppings.",
        "booking_url": "https://www.booking.com/hotel/aw/hyatt-regency-aruba-resort-and-casino.es.html",
        "precio_noche_usd": 360,
        "precio_noche_ars": 486000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "MVC Eagle Beach",
        "estrellas": "⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (1.450 reseñas)",
        "zona": "Eagle Beach (Frente al Mar)",
        "precio_noche": "US$ 145 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Boutique acogedor justo al otro lado de la calle de la mejor playa de Aruba. Ambiente relajado, piscina de inmersión y precio muy competitivo.",
        "booking_url": "https://www.booking.com/hotel/aw/mvc-eagle-beach.es.html",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 28,
      "rango_min": "US$ 520",
      "rango_max": "US$ 780",
      "mensaje": "¡Precio bajo de temporada detectado para volar a la 'Isla Feliz'!",
      "texto_pin": "US$ 565 es una tarifa récord baja",
      "consejo": "Avianca vía Bogotá perforó los US$ 700. Quedan pocos cupos con esta tarifa para primavera/otoño fuera de huracanes.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        701,
        661,
        627,
        593,
        565
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "aw",
    "categoria_region": "caribe_usa",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 30 días · Tarifa récord más baja detectada",
      "aerolinea": "Avianca / Copa",
      "escalas": "1 escala corta",
      "fechas": "29 Nov - 06 Dic 2026",
      "fecha_ida": "2026-11-29",
      "fecha_vuelta": "2026-12-06",
      "noches": 7,
      "dias_para_el_vuelo": 30,
      "precio": "US$ 488",
      "precio_usd": "aprox. $ 658.800 ARS",
      "precio_ars": 658800,
      "precio_usd_num": 488,
      "ahorro_porcentaje": "22% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20BUE%20on%202026-11-29%20through%202026-12-06&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aruba/2026-11-29/2026-12-06?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "AUA",
      "ciudad": "Aruba (Caribe Holandés)",
      "actualizado_at": "2026-11-06T09:38:28.701015+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-20",
              "fechas_texto": "13 Nov - 20 Nov 2026",
              "noches": 7,
              "dias_restantes": 7,
              "precio_usd": 569,
              "precio_ars": 825000,
              "precio_texto": "US$ 569",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202026-11-13%20through%202026-11-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2026-11-13/2026-11-20?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-25",
              "fecha_vuelta": "2026-12-04",
              "fechas_texto": "25 Nov - 04 Dec 2026",
              "noches": 9,
              "dias_restantes": 19,
              "precio_usd": 488,
              "precio_ars": 707600,
              "precio_texto": "US$ 488",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202026-11-25%20through%202026-12-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2026-11-25/2026-12-04?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 512,
              "precio_ars": 742400,
              "precio_texto": "US$ 512",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-02",
              "fecha_vuelta": "2027-01-13",
              "fechas_texto": "02 Jan - 13 Jan 2027",
              "noches": 11,
              "dias_restantes": 57,
              "precio_usd": 704,
              "precio_ars": 1020800,
              "precio_texto": "US$ 704",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202027-01-02%20through%202027-01-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2027-01-02/2027-01-13?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-06",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "06 Jan - 17 Jan 2027",
              "noches": 11,
              "dias_restantes": 61,
              "precio_usd": 863,
              "precio_ars": 1251400,
              "precio_texto": "US$ 863",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202027-01-06%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2027-01-06/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "20% OFF",
        "ahorro_pct_num": 20,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-06",
            "fecha_vuelta": "2027-04-14",
            "fechas_texto": "06 Apr - 14 Apr 2027",
            "noches": 8,
            "dias_restantes": 151,
            "precio_usd": 565,
            "precio_ars": 819200,
            "precio_texto": "US$ 565",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202027-04-06%20through%202027-04-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2027-04-06/2027-04-14?affilid=flightbot",
            "aerolinea_gate": "Vayama",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-13",
              "fecha_vuelta": "2026-11-20",
              "fechas_texto": "13 Nov - 20 Nov 2026",
              "noches": 7,
              "dias_restantes": 7,
              "precio_usd": 569,
              "precio_ars": 825000,
              "precio_texto": "US$ 569",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202026-11-13%20through%202026-11-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2026-11-13/2026-11-20?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-25",
              "fecha_vuelta": "2026-12-04",
              "fechas_texto": "25 Nov - 04 Dec 2026",
              "noches": 9,
              "dias_restantes": 19,
              "precio_usd": 488,
              "precio_ars": 707600,
              "precio_texto": "US$ 488",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202026-11-25%20through%202026-12-04&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2026-11-25/2026-12-04?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 512,
              "precio_ars": 742400,
              "precio_texto": "US$ 512",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "15% OFF",
          "ahorro_pct_num": 15,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-02",
              "fecha_vuelta": "2027-01-13",
              "fechas_texto": "02 Jan - 13 Jan 2027",
              "noches": 11,
              "dias_restantes": 57,
              "precio_usd": 704,
              "precio_ars": 1020800,
              "precio_texto": "US$ 704",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202027-01-02%20through%202027-01-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2027-01-02/2027-01-13?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-06",
              "fecha_vuelta": "2027-01-17",
              "fechas_texto": "06 Jan - 17 Jan 2027",
              "noches": 11,
              "dias_restantes": 61,
              "precio_usd": 863,
              "precio_ars": 1251400,
              "precio_texto": "US$ 863",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202027-01-06%20through%202027-01-17&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2027-01-06/2027-01-17?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-06",
              "fecha_vuelta": "2027-04-14",
              "fechas_texto": "06 Apr - 14 Apr 2027",
              "noches": 8,
              "dias_restantes": 151,
              "precio_usd": 565,
              "precio_ars": 819200,
              "precio_texto": "US$ 565",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AUA%20from%20EZE%20on%202027-04-06%20through%202027-04-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/aua/2027-04-06/2027-04-14?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "curazao",
    "ciudad": "Curazao & Willemstad",
    "pais": "Curazao",
    "bandera": "🐬",
    "iata": "CUR",
    "tipo_ruta": "Caribe Neerlandés (Fuera de Huracanes)",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "codigo_pais": "cw",
    "precio_desde": "US$ 771",
    "comando_tg": "/curazao",
    "resena": "El encanto neerlandés en el Caribe Sur: fachadas pastel Patrimonio UNESCO en Willemstad, 35 calas de agua turquesa cristalina (Kenepa Grandi, Cas Abao) y clima soleado fuera del cinturón de huracanes.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Avianca",
        "escalas": "1 escala rápida (BOG)",
        "fechas": "26 Nov - 02 Dic 2026",
        "fecha_ida": "2026-11-26",
        "fecha_vuelta": "2026-12-02",
        "noches": 6,
        "precio": "US$ 771 (aprox. $ 1.040.850 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 771,
        "precio_ars": 1040850
      },
      {
        "puesto": "🥈",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala (PTY)",
        "fechas": "03 Dic - 09 Dic 2026",
        "fecha_ida": "2026-12-03",
        "fecha_vuelta": "2026-12-09",
        "noches": 6,
        "precio": "US$ 817 (aprox. $ 1.102.950 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 817,
        "precio_ars": 1102950
      },
      {
        "puesto": "🥉",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala (PTY)",
        "fechas": "10 Dic - 16 Dic 2026",
        "fecha_ida": "2026-12-10",
        "fecha_vuelta": "2026-12-16",
        "noches": 6,
        "precio": "US$ 879 (aprox. $ 1.186.650 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 879,
        "precio_ars": 1186650
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Baoase Luxury Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (620 reseñas)",
        "zona": "Willemstad Sur (Laguna Privada de Playa)",
        "precio_noche": "US$ 450 / noche",
        "precio_noche_usd": 450,
        "precio_noche_ars": 607500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Santuario privado de inspiración balinesa frente al mar Caribe con playa propia en laguna calma y alta gastronomía frente al agua.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Baoase+Luxury+Resort+Curacao"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Avila Beach Hotel",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (1.740 reseñas)",
        "zona": "Pietermaai (Con 2 playas privadas con rompeolas)",
        "precio_noche": "US$ 210 / noche",
        "precio_noche_usd": 210,
        "precio_noche_ars": 283500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El hotel más tradicional y querido de la isla: dos bahías privadas de aguas tranquilas para hacer snorkel desde la orilla y caminar a Pietermaai.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Avila+Beach+Hotel+Curacao"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Scuba Lodge & Ocean Suites",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Fabuloso (980 reseñas)",
        "zona": "Distrito Histórico Pietermaai",
        "precio_noche": "US$ 135 / noche",
        "precio_noche_usd": 135,
        "precio_noche_ars": 182250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Casonas patrimoniales color pastel frente al océano con piscina infinita sobre el arrecife y restaurante en la costa.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Scuba+Lodge+Ocean+Suites+Curacao"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "US$ 710",
      "rango_max": "US$ 1.060",
      "mensaje": "¡Tarifa de oportunidad al Caribe Neerlandés! Fuera de zona de huracanes.",
      "texto_pin": "US$ 771 es una tarifa récord baja",
      "consejo": "Avianca vía Bogotá y Copa vía Panamá ofrecen las conexiones más rápidas hacia Hato International (CUR).",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        956,
        902,
        856,
        810,
        771
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "CUR",
      "ciudad": "Curazao & Willemstad",
      "actualizado_at": "2026-11-06T09:38:28.977492+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-16",
              "fecha_vuelta": "2027-01-26",
              "fechas_texto": "16 Jan - 26 Jan 2027",
              "noches": 10,
              "dias_restantes": 71,
              "precio_usd": 964,
              "precio_ars": 1397800,
              "precio_texto": "US$ 964",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202027-01-16%20through%202027-01-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2027-01-16/2027-01-26?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-05",
              "fecha_vuelta": "2027-01-15",
              "fechas_texto": "05 Jan - 15 Jan 2027",
              "noches": 10,
              "dias_restantes": 60,
              "precio_usd": 1078,
              "precio_ars": 1563100,
              "precio_texto": "US$ 1078",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202027-01-05%20through%202027-01-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2027-01-05/2027-01-15?affilid=flightbot",
              "aerolinea_gate": "Kupi.com",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-14",
            "fechas_texto": "05 May - 14 May 2027",
            "noches": 9,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2027-05-05/2027-05-14?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-16",
              "fecha_vuelta": "2027-01-26",
              "fechas_texto": "16 Jan - 26 Jan 2027",
              "noches": 10,
              "dias_restantes": 71,
              "precio_usd": 964,
              "precio_ars": 1397800,
              "precio_texto": "US$ 964",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202027-01-16%20through%202027-01-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2027-01-16/2027-01-26?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-05",
              "fecha_vuelta": "2027-01-15",
              "fechas_texto": "05 Jan - 15 Jan 2027",
              "noches": 10,
              "dias_restantes": 60,
              "precio_usd": 1078,
              "precio_ars": 1563100,
              "precio_texto": "US$ 1078",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202027-01-05%20through%202027-01-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2027-01-05/2027-01-15?affilid=flightbot",
              "aerolinea_gate": "Kupi.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-14",
              "fechas_texto": "05 May - 14 May 2027",
              "noches": 9,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CUR%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cur/2027-05-05/2027-05-14?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "cuba",
    "ciudad": "La Habana & Playas de Varadero",
    "pais": "Cuba",
    "bandera": "🎺",
    "iata": "HAV",
    "tipo_ruta": "Caribe Clásico & Playas",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "codigo_pais": "cu",
    "precio_desde": "US$ 933",
    "comando_tg": "/cuba",
    "resena": "El corazón nostálgico del Caribe: plazas virreinales de La Habana Vieja, autos clásicos de los años 50 por el Malecón, sones cubanos en directo y los 20 km de arena blanca y mar turquesa de Varadero.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala rápida (PTY)",
        "fechas": "02 Dic - 16 Dic 2026",
        "fecha_ida": "2026-12-02",
        "fecha_vuelta": "2026-12-16",
        "noches": 14,
        "precio": "US$ 933 (aprox. $ 1.259.550 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 933,
        "precio_ars": 1259550
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (LIM)",
        "fechas": "03 Dic - 17 Dic 2026",
        "fecha_ida": "2026-12-03",
        "fecha_vuelta": "2026-12-17",
        "noches": 14,
        "precio": "US$ 989 (aprox. $ 1.335.150 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 989,
        "precio_ars": 1335150
      },
      {
        "puesto": "🥉",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala (PTY)",
        "fechas": "09 Dic - 23 Dic 2026",
        "fecha_ida": "2026-12-09",
        "fecha_vuelta": "2026-12-23",
        "noches": 14,
        "precio": "US$ 1064 (aprox. $ 1.436.400 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 1064,
        "precio_ars": 1436400
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Gran Hotel Manzana Kempinski La Habana",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (840 reseñas)",
        "zona": "Parque Central / La Habana Vieja",
        "precio_noche": "US$ 310 / noche",
        "precio_noche_usd": 310,
        "precio_noche_ars": 418500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El edificio histórico Manzana de Gómez frente al Capitolio y el Gran Teatro, con piscina infinita en la azotea mirando a toda La Habana.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=La+Habana+Cuba"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Meliá Internacional Varadero All Inclusive",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Fabuloso (1.920 reseñas)",
        "zona": "Primera Línea de Playa Varadero",
        "precio_noche": "US$ 220 / noche",
        "precio_noche_usd": 220,
        "precio_noche_ars": 297000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Sobre la mejor franja de arena blanca de Varadero, con planta exclusiva The Level, 6 piscinas y gastronomía internacional todo incluido.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Varadero+Cuba"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Iberostar Parque Central",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Fabuloso (1.450 reseñas)",
        "zona": "Paseo del Prado / Habana Vieja",
        "precio_noche": "US$ 145 / noche",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Clásico colonial a pasos del Floridita y el Capitolio, ideal para combinar 3 noches culturales en La Habana con 7 noches en Varadero.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Iberostar+Parque+Central+Havana"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 26,
      "rango_min": "US$ 860",
      "rango_max": "US$ 1.290",
      "mensaje": "¡Tarifa conveniente al Caribe Cubano! Ideal para combinar Habana + Varadero.",
      "texto_pin": "US$ 933 es una tarifa récord baja",
      "consejo": "Copa Airlines vía Panamá (PTY) ofrece varias frecuencias diarias hacia La Habana (HAV) y vuelos directos a Santa Clara / Cayo Santa María.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1157,
        1092,
        1036,
        980,
        933
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "HAV",
      "ciudad": "La Habana & Playas de Varadero",
      "actualizado_at": "2026-11-06T09:38:29.222265+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-14",
            "fechas_texto": "05 May - 14 May 2027",
            "noches": 9,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2027-05-05/2027-05-14?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-21",
              "fechas_texto": "12 Dec - 21 Dec 2026",
              "noches": 9,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202026-12-12%20through%202026-12-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2026-12-12/2026-12-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-14",
              "fechas_texto": "05 May - 14 May 2027",
              "noches": 9,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20HAV%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/hav/2027-05-05/2027-05-14?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "panama",
    "ciudad": "Ciudad de Panamá, San Blas & Bocas del Toro",
    "pais": "Panamá",
    "bandera": "🚢",
    "iata": "PTY",
    "tipo_ruta": "Hub de las Américas & Caribe",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "codigo_pais": "pa",
    "precio_desde": "US$ 617",
    "comando_tg": "/panama",
    "resena": "El puente del mundo entre dos océanos: las esclusas del Canal de Panamá, los rooftops coloniales del Casco Antiguo UNESCO, las 365 islas vírgenes de San Blas (Guna Yala) y el mejor shopping tax-free.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Copa Airlines",
        "escalas": "Directo (EZE ➔ PTY)",
        "fechas": "03 Dic - 13 Dic 2026",
        "fecha_ida": "2026-12-03",
        "fecha_vuelta": "2026-12-13",
        "noches": 10,
        "precio": "US$ 617 (aprox. $ 832.950 ARS)",
        "destacado": "Vuelo directo",
        "actualizado_en_vivo": true,
        "precio_usd": 617,
        "precio_ars": 832950
      },
      {
        "puesto": "🥈",
        "aerolinea": "Avianca",
        "escalas": "1 escala rápida (BOG)",
        "fechas": "03 Dic - 14 Dic 2026",
        "fecha_ida": "2026-12-03",
        "fecha_vuelta": "2026-12-14",
        "noches": 11,
        "precio": "US$ 654 (aprox. $ 882.900 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 654,
        "precio_ars": 882900
      },
      {
        "puesto": "🥉",
        "aerolinea": "Copa Airlines",
        "escalas": "Directo (EZE ➔ PTY)",
        "fechas": "04 Dic - 13 Dic 2026",
        "fecha_ida": "2026-12-04",
        "fecha_vuelta": "2026-12-13",
        "noches": 9,
        "precio": "US$ 703 (aprox. $ 949.050 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 703,
        "precio_ars": 949050
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Sofitel Legend Casco Viejo Panama City",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (780 reseñas)",
        "zona": "Casco Antiguo (Frente al Océano Pacífico)",
        "precio_noche": "US$ 350 / noche",
        "precio_noche_usd": 350,
        "precio_noche_ars": 472500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Arquitectura histórica francesa sobre la punta del Casco Antiguo con piscina frente al mar y vistas panorámicas al skyline de rascacielos.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Sofitel+Legend+Casco+Viejo+Panama+City"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "W Panama",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (1.620 reseñas)",
        "zona": "Calle 50 / Distrito Financiero y Gastronómico",
        "precio_noche": "US$ 165 / noche",
        "precio_noche_usd": 165,
        "precio_noche_ars": 222750,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño moderno inspirado en la cultura panameña, piscina Wet Deck en el piso 15 y acceso rápido a Multiplaza y el metro.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=W+Panama+Hotel"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Central Hotel Panamá Casco Viejo",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Fabuloso (2.110 reseñas)",
        "zona": "Plaza de la Independencia (Casco Antiguo)",
        "precio_noche": "US$ 115 / noche",
        "precio_noche_usd": 115,
        "precio_noche_ars": 155250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El primer hotel histórico del país frente a la Catedral Metropolitana, completamente remodelado con piscina en la terraza y spa.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Central+Hotel+Panama+Casco+Viejo"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 22,
      "rango_min": "US$ 570",
      "rango_max": "US$ 850",
      "mensaje": "¡Excelente tarifa en vuelo directo a Panamá! Ideal para aprovechar el Stopover sin cargo.",
      "texto_pin": "US$ 617 es una tarifa récord baja",
      "consejo": "Con el programa Stopover de Copa Airlines podés conocer Ciudad de Panamá y San Blas hasta por 7 días sin costo adicional de pasaje aéreo.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        765,
        722,
        685,
        648,
        617
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "PTY",
      "ciudad": "Ciudad de Panamá, San Blas & Bocas del Toro",
      "actualizado_at": "2026-11-06T09:38:29.472654+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-13",
              "fechas_texto": "03 Dec - 13 Dec 2026",
              "noches": 10,
              "dias_restantes": 27,
              "precio_usd": 617,
              "precio_ars": 894600,
              "precio_texto": "US$ 617",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202026-12-03%20through%202026-12-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2026-12-03/2026-12-13?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-30",
              "fecha_vuelta": "2027-01-06",
              "fechas_texto": "30 Dec - 06 Jan 2027",
              "noches": 7,
              "dias_restantes": 54,
              "precio_usd": 811,
              "precio_ars": 1176000,
              "precio_texto": "US$ 811",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202026-12-30%20through%202027-01-06&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2026-12-30/2027-01-06?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-19",
            "fecha_vuelta": "2027-04-29",
            "fechas_texto": "19 Apr - 29 Apr 2027",
            "noches": 10,
            "dias_restantes": 164,
            "precio_usd": 742,
            "precio_ars": 1075900,
            "precio_texto": "US$ 742",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202027-04-19%20through%202027-04-29&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2027-04-19/2027-04-29?affilid=flightbot",
            "aerolinea_gate": "Trip.com",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-03",
              "fecha_vuelta": "2026-12-13",
              "fechas_texto": "03 Dec - 13 Dec 2026",
              "noches": 10,
              "dias_restantes": 27,
              "precio_usd": 617,
              "precio_ars": 894600,
              "precio_texto": "US$ 617",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202026-12-03%20through%202026-12-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2026-12-03/2026-12-13?affilid=flightbot",
              "aerolinea_gate": "Wingie",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-30",
              "fecha_vuelta": "2027-01-06",
              "fechas_texto": "30 Dec - 06 Jan 2027",
              "noches": 7,
              "dias_restantes": 54,
              "precio_usd": 811,
              "precio_ars": 1176000,
              "precio_texto": "US$ 811",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202026-12-30%20through%202027-01-06&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2026-12-30/2027-01-06?affilid=flightbot",
              "aerolinea_gate": "Farera",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-19",
              "fecha_vuelta": "2027-04-29",
              "fechas_texto": "19 Apr - 29 Apr 2027",
              "noches": 10,
              "dias_restantes": 164,
              "precio_usd": 742,
              "precio_ars": 1075900,
              "precio_texto": "US$ 742",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PTY%20from%20EZE%20on%202027-04-19%20through%202027-04-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pty/2027-04-19/2027-04-29?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "costarica",
    "ciudad": "Costa Rica: Volcán Arenal, Manuel Antonio & Guanacaste",
    "pais": "Costa Rica",
    "bandera": "🦥",
    "iata": "SJO",
    "tipo_ruta": "Ecoturismo, Volcanes & Playas",
    "es_cabotaje": false,
    "categoria_region": "caribe_usa",
    "codigo_pais": "cr",
    "precio_desde": "US$ 835",
    "comando_tg": "/costarica",
    "resena": "La capital mundial del Pura Vida y la biodiversidad: aguas termales bajo el Volcán Arenal, puentes colgantes en el bosque nuboso de Monteverde y playas rodeadas de selva en Manuel Antonio y Guanacaste.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Avianca",
        "escalas": "1 escala rápida (BOG)",
        "fechas": "29 Dic - 08 Ene 2027",
        "fecha_ida": "2026-12-29",
        "fecha_vuelta": "2027-01-08",
        "noches": 10,
        "precio": "US$ 835 (aprox. $ 1.127.250 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 835,
        "precio_ars": 1127250
      },
      {
        "puesto": "🥈",
        "aerolinea": "Copa Airlines",
        "escalas": "1 escala rápida (PTY)",
        "fechas": "29 Dic - 09 Ene 2027",
        "fecha_ida": "2026-12-29",
        "fecha_vuelta": "2027-01-09",
        "noches": 11,
        "precio": "US$ 844 (aprox. $ 1.139.400 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 844,
        "precio_ars": 1139400
      },
      {
        "puesto": "🥉",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (LIM)",
        "fechas": "27 Dic - 09 Ene 2027",
        "fecha_ida": "2026-12-27",
        "fecha_vuelta": "2027-01-09",
        "noches": 13,
        "precio": "US$ 845 (aprox. $ 1.140.750 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 845,
        "precio_ars": 1140750
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Nayara Tented Camp & Springs",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.7",
        "calificacion": "Excepcional (920 reseñas)",
        "zona": "Parque Nacional Volcán Arenal (La Fortuna)",
        "precio_noche": "US$ 480 / noche",
        "precio_noche_usd": 480,
        "precio_noche_ars": 648000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Uno de los eco-resorts más premiados del mundo: villas con piscina termal privada alimentada por el volcán Arenal en plena selva tropical.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Nayara+Springs+La+Fortuna+Costa+Rica"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Tabacón Thermal Resort & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (2.150 reseñas)",
        "zona": "La Fortuna (Río de Aguas Termales Naturales)",
        "precio_noche": "US$ 290 / noche",
        "precio_noche_usd": 290,
        "precio_noche_ars": 391500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Acceso ilimitado al mayor circuito de ríos y cascadas termales naturales de Costa Rica rodeados de jardines tropicales.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Tabacon+Thermal+Resort+Spa+Costa+Rica"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Shana by the Beach Manuel Antonio",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (1.840 reseñas)",
        "zona": "Manuel Antonio (Playa Biesanz)",
        "precio_noche": "US$ 145 / noche",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Rodeado de bosque lluvioso con monos y tucanes en los jardines, sendero directo a Playa Biesanz y a minutos del Parque Nacional.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Shana+by+the+Beach+Manuel+Antonio"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "US$ 770",
      "rango_max": "US$ 1.150",
      "mensaje": "¡Tarifa ideal a Costa Rica! En el rango más bajo hacia San José y Guanacaste.",
      "texto_pin": "US$ 835 es una tarifa récord baja",
      "consejo": "Entrar por San José (SJO) para visitar Arenal y salir desde Liberia (LIR) tras descansar en las playas de Guanacaste ahorra horas de ruta.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1035,
        977,
        927,
        877,
        835
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "SJO",
      "ciudad": "Costa Rica: Volcán Arenal, Manuel Antonio & Guanacaste",
      "actualizado_at": "2026-11-06T09:38:29.717685+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-29",
              "fecha_vuelta": "2027-01-08",
              "fechas_texto": "29 Dec - 08 Jan 2027",
              "noches": 10,
              "dias_restantes": 53,
              "precio_usd": 835,
              "precio_ars": 1210800,
              "precio_texto": "US$ 835",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202026-12-29%20through%202027-01-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2026-12-29/2027-01-08?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-02",
              "fechas_texto": "24 Dec - 02 Jan 2027",
              "noches": 9,
              "dias_restantes": 48,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202026-12-24%20through%202027-01-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2026-12-24/2027-01-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-14",
            "fechas_texto": "05 May - 14 May 2027",
            "noches": 9,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2027-05-05/2027-05-14?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-21",
              "fechas_texto": "12 Nov - 21 Nov 2026",
              "noches": 9,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202026-11-12%20through%202026-11-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2026-11-12/2026-11-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-29",
              "fecha_vuelta": "2027-01-08",
              "fechas_texto": "29 Dec - 08 Jan 2027",
              "noches": 10,
              "dias_restantes": 53,
              "precio_usd": 835,
              "precio_ars": 1210800,
              "precio_texto": "US$ 835",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202026-12-29%20through%202027-01-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2026-12-29/2027-01-08?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-02",
              "fechas_texto": "24 Dec - 02 Jan 2027",
              "noches": 9,
              "dias_restantes": 48,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202026-12-24%20through%202027-01-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2026-12-24/2027-01-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "12 Jan - 21 Jan 2027",
              "noches": 9,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202027-01-12%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2027-01-12/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-14",
              "fechas_texto": "05 May - 14 May 2027",
              "noches": 9,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SJO%20from%20EZE%20on%202027-05-05%20through%202027-05-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/sjo/2027-05-05/2027-05-14?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "madrid",
    "ciudad": "Madrid",
    "pais": "España",
    "bandera": "🇪🇸",
    "iata": "MAD",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "precio_desde": "€ 701",
    "comando_tg": "/madrid",
    "resena": "Capital europea de la cultura y la gastronomía, con el hub de trenes de alta velocidad más competitivo de Europa (Iryo, Ouigo y AVE a Barcelona por €9). Ideal para recorrer el Triángulo del Arte y hacer base para escapadas a Toledo y Segovia.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala corta (GRU)",
        "fechas": "14 Abr - 30 Abr 2027",
        "noches": 16,
        "precio": "€ 701",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-14",
        "fecha_vuelta": "2027-04-30",
        "actualizado_en_vivo": true,
        "precio_ars": 1023460,
        "precio_usd": 757,
        "precio_eur": 701
      },
      {
        "puesto": "🥈",
        "aerolinea": "Iberia",
        "escalas": "Directo (EZE ➔ MAD)",
        "fechas": "17 Abr - 03 May 2027",
        "noches": 16,
        "precio": "€ 743",
        "destacado": "Vuelo directo más veloz",
        "fecha_ida": "2027-04-17",
        "fecha_vuelta": "2027-05-03",
        "actualizado_en_vivo": true,
        "precio_ars": 1084780,
        "precio_usd": 802,
        "precio_eur": 743
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air Europa",
        "escalas": "Directo (EZE ➔ MAD)",
        "fechas": "18 Abr - 04 May 2027",
        "noches": 16,
        "precio": "€ 799",
        "destacado": "Excelente equipaje incluido",
        "fecha_ida": "2027-04-18",
        "fecha_vuelta": "2027-05-04",
        "actualizado_en_vivo": true,
        "precio_ars": 1166540,
        "precio_usd": 863,
        "precio_eur": 799
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Gran Hotel Inglés - The Leading Hotels",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (1.420 reseñas)",
        "zona": "Barrio de las Letras (Céntrico / Peatonal)",
        "precio_noche": "€ 360 / noche",
        "foto": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El hotel de lujo en activo más antiguo de Madrid, totalmente restaurado en estilo Art Déco. A pasos de la Puerta del Sol y los mejores wine bars.",
        "booking_url": "https://www.booking.com/hotel/es/gran-ingles.es.html",
        "precio_noche_eur": 360,
        "precio_noche_usd": 389,
        "precio_noche_ars": 522000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Only YOU Hotel Atocha",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.850 reseñas)",
        "zona": "Paseo de la Infanta Isabel / Estación Atocha",
        "precio_noche": "€ 170 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño cosmopolita frente a la estación de alta velocidad y el Parque del Retiro. Rooftop con vistas panorámicas y cafetería de especialidad.",
        "booking_url": "https://www.booking.com/hotel/es/only-you-atocha.es.html",
        "precio_noche_eur": 170,
        "precio_noche_usd": 184,
        "precio_noche_ars": 246500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Room Mate Alicia",
        "estrellas": "⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (2.190 reseñas)",
        "zona": "Plaza Santa Ana / Barrio de las Letras",
        "precio_noche": "€ 105 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Edificio histórico del siglo XX decorado por Pascua Ortega. Ubicación insuperable para recorrer todo a pie sin sobreprecios abusivos.",
        "booking_url": "https://www.booking.com/hotel/es/room-mate-alicia.es.html",
        "precio_noche_eur": 105,
        "precio_noche_usd": 113,
        "precio_noche_ars": 152250,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 38,
      "rango_min": "€ 640",
      "rango_max": "€ 970",
      "mensaje": "Por el momento, se mantienen los precios estándar para tu búsqueda a Madrid.",
      "texto_pin": "€ 701 es una tarifa récord baja",
      "consejo": "Tarifa muy competitiva para vuelo con 1 escala corta en San Pablo. Se ubica cerca del piso histórico de los últimos 60 días.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        869,
        820,
        778,
        736,
        701
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "es",
    "categoria_region": "europa_mundo",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 33 días · Tarifa récord más baja detectada",
      "aerolinea": "Air Europa / Iberia",
      "escalas": "1 escala en hub europeo",
      "fechas": "02 Dic - 09 Dic 2026",
      "fecha_ida": "2026-12-02",
      "fecha_vuelta": "2026-12-09",
      "noches": 12,
      "dias_para_el_vuelo": 33,
      "precio": "US$ 704",
      "precio_usd": "aprox. $ 950.400 ARS",
      "precio_ars": 950400,
      "precio_usd_num": 704,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20BUE%20on%202026-12-02%20through%202026-12-09&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/madrid/2026-12-02/2026-12-09?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "MAD",
      "ciudad": "Madrid",
      "actualizado_at": "2026-11-06T09:38:30.089799+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-30",
              "fecha_vuelta": "2026-12-14",
              "fechas_texto": "30 Nov - 14 Dec 2026",
              "noches": 14,
              "dias_restantes": 24,
              "precio_usd": 1087,
              "precio_ars": 1576200,
              "precio_texto": "US$ 1087",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-11-30%20through%202026-12-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-11-30/2026-12-14?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-09",
              "fechas_texto": "24 Nov - 09 Dec 2026",
              "noches": 15,
              "dias_restantes": 18,
              "precio_usd": 704,
              "precio_ars": 1020800,
              "precio_texto": "US$ 704",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-11-24%20through%202026-12-09&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-11-24/2026-12-09?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-24",
              "fechas_texto": "01 Dec - 24 Dec 2026",
              "noches": 23,
              "dias_restantes": 25,
              "precio_usd": 1088,
              "precio_ars": 1577600,
              "precio_texto": "US$ 1088",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-12-01%20through%202026-12-24&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-12-01/2026-12-24?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "24 Dec - 16 Jan 2027",
              "noches": 23,
              "dias_restantes": 48,
              "precio_usd": 1159,
              "precio_ars": 1680600,
              "precio_texto": "US$ 1159",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-12-24%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-12-24/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-02-08",
              "fechas_texto": "20 Jan - 08 Feb 2027",
              "noches": 19,
              "dias_restantes": 75,
              "precio_usd": 940,
              "precio_ars": 1363000,
              "precio_texto": "US$ 940",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202027-01-20%20through%202027-02-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2027-01-20/2027-02-08?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-28",
              "fecha_vuelta": "2027-02-18",
              "fechas_texto": "28 Jan - 18 Feb 2027",
              "noches": 21,
              "dias_restantes": 83,
              "precio_usd": 992,
              "precio_ars": 1438400,
              "precio_texto": "US$ 992",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202027-01-28%20through%202027-02-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2027-01-28/2027-02-18?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-14",
            "fecha_vuelta": "2027-04-30",
            "fechas_texto": "14 Apr - 30 Apr 2027",
            "noches": 16,
            "dias_restantes": 159,
            "precio_usd": 788,
            "precio_ars": 1142600,
            "precio_texto": "US$ 788",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202027-04-14%20through%202027-04-30&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2027-04-14/2027-04-30?affilid=flightbot",
            "aerolinea_gate": "Gotogate",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-30",
              "fecha_vuelta": "2026-12-14",
              "fechas_texto": "30 Nov - 14 Dec 2026",
              "noches": 14,
              "dias_restantes": 24,
              "precio_usd": 1087,
              "precio_ars": 1576200,
              "precio_texto": "US$ 1087",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-11-30%20through%202026-12-14&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-11-30/2026-12-14?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-09",
              "fechas_texto": "24 Nov - 09 Dec 2026",
              "noches": 15,
              "dias_restantes": 18,
              "precio_usd": 704,
              "precio_ars": 1020800,
              "precio_texto": "US$ 704",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-11-24%20through%202026-12-09&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-11-24/2026-12-09?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-01",
              "fecha_vuelta": "2026-12-24",
              "fechas_texto": "01 Dec - 24 Dec 2026",
              "noches": 23,
              "dias_restantes": 25,
              "precio_usd": 1088,
              "precio_ars": 1577600,
              "precio_texto": "US$ 1088",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-12-01%20through%202026-12-24&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-12-01/2026-12-24?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "24 Dec - 16 Jan 2027",
              "noches": 23,
              "dias_restantes": 48,
              "precio_usd": 1159,
              "precio_ars": 1680600,
              "precio_texto": "US$ 1159",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202026-12-24%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2026-12-24/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-20",
              "fecha_vuelta": "2027-02-08",
              "fechas_texto": "20 Jan - 08 Feb 2027",
              "noches": 19,
              "dias_restantes": 75,
              "precio_usd": 940,
              "precio_ars": 1363000,
              "precio_texto": "US$ 940",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202027-01-20%20through%202027-02-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2027-01-20/2027-02-08?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-28",
              "fecha_vuelta": "2027-02-18",
              "fechas_texto": "28 Jan - 18 Feb 2027",
              "noches": 21,
              "dias_restantes": 83,
              "precio_usd": 992,
              "precio_ars": 1438400,
              "precio_texto": "US$ 992",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202027-01-28%20through%202027-02-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2027-01-28/2027-02-18?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-14",
              "fecha_vuelta": "2027-04-30",
              "fechas_texto": "14 Apr - 30 Apr 2027",
              "noches": 16,
              "dias_restantes": 159,
              "precio_usd": 788,
              "precio_ars": 1142600,
              "precio_texto": "US$ 788",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MAD%20from%20EZE%20on%202027-04-14%20through%202027-04-30&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mad/2027-04-14/2027-04-30?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "barcelona",
    "ciudad": "Barcelona & Costa Brava",
    "pais": "España",
    "bandera": "🇪🇸",
    "iata": "BCN",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 869",
    "comando_tg": "/barcelona",
    "resena": "Modernismo deslumbrante de Gaudí con la Sagrada Familia y Park Güell, callejones del Barrio Gótico, gastronomía catalana y trenes de alta velocidad AVE a Madrid en solo 2h 30m.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Level",
        "escalas": "Directo (EZE ➔ BCN)",
        "fechas": "01 Dic - 16 Dic 2026",
        "noches": 15,
        "precio": "€ 869",
        "destacado": "Vuelo directo más veloz",
        "fecha_ida": "2026-12-01",
        "fecha_vuelta": "2026-12-16",
        "actualizado_en_vivo": true,
        "precio_ars": 1268740,
        "precio_usd": 939,
        "precio_eur": 869
      },
      {
        "puesto": "🥈",
        "aerolinea": "Iberia",
        "escalas": "1 escala corta (MAD)",
        "fechas": "08 Dic - 23 Dic 2026",
        "noches": 15,
        "precio": "€ 921",
        "destacado": "Excelente servicio a bordo",
        "fecha_ida": "2026-12-08",
        "fecha_vuelta": "2026-12-23",
        "actualizado_en_vivo": true,
        "precio_ars": 1344660,
        "precio_usd": 995,
        "precio_eur": 921
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air Europa",
        "escalas": "1 escala (MAD)",
        "fechas": "15 Dic - 30 Dic 2026",
        "noches": 15,
        "precio": "€ 991",
        "destacado": "Equipaje carry-on incluido",
        "fecha_ida": "2026-12-15",
        "fecha_vuelta": "2026-12-30",
        "actualizado_en_vivo": true,
        "precio_ars": 1446860,
        "precio_usd": 1070,
        "precio_eur": 991
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Arts Barcelona (The Ritz-Carlton)",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Excepcional (2.800 reseñas)",
        "zona": "Port Olímpic / Frente al Mar",
        "precio_noche": "€ 385 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Rascacielos icónico sobre la playa con 2 estrellas Michelin (Enoteca Paco Pérez), jardines y piscinas infinitas.",
        "booking_url": "https://www.booking.com/hotel/es/arts-barcelona.es.html",
        "precio_noche_eur": 385,
        "precio_noche_usd": 416,
        "precio_noche_ars": 558250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Cotton House Hotel, Autograph Collection",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Fantástico (2.100 reseñas)",
        "zona": "Gran Vía / Eixample",
        "precio_noche": "€ 240 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Antigua sede gremial de hiladores de algodón del siglo XIX con escalinata suspendida histórica y terraza ajardinada.",
        "booking_url": "https://www.booking.com/hotel/es/cotton-house-barcelona.es.html",
        "precio_noche_eur": 240,
        "precio_noche_usd": 259,
        "precio_noche_ars": 348000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Room Mate Gerard",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (2.450 reseñas)",
        "zona": "Eixample Dret (a 3 cuadras de P. de Gràcia)",
        "precio_noche": "€ 115 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño vanguardista de Jaime Beriestain, piscina en la azotea y ubicación estratégica para recorrer todo caminando.",
        "booking_url": "https://www.booking.com/hotel/es/room-mate-gerard.es.html",
        "precio_noche_eur": 115,
        "precio_noche_usd": 124,
        "precio_noche_ars": 166750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 26,
      "rango_min": "€ 800",
      "rango_max": "€ 1.200",
      "mensaje": "¡Tarifa baja confirmada para volar a Barcelona!",
      "texto_pin": "€ 869 es una tarifa récord baja",
      "consejo": "Level ofrece el único vuelo directo sin escalas desde Ezeiza perforando los US$ 1.000.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1078,
        1017,
        965,
        912,
        869
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "es",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 35 días · Tarifa récord más baja detectada",
      "aerolinea": "Air Europa / Iberia",
      "escalas": "1 escala en hub europeo",
      "fechas": "04 Dic - 14 Dic 2026",
      "fecha_ida": "2026-12-04",
      "fecha_vuelta": "2026-12-14",
      "noches": 12,
      "dias_para_el_vuelo": 35,
      "precio": "US$ 806",
      "precio_usd": "aprox. $ 1.088.100 ARS",
      "precio_ars": 1088100,
      "precio_usd_num": 806,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20BUE%20on%202026-12-04%20through%202026-12-14&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/barcelona/2026-12-04/2026-12-14?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "BCN",
      "ciudad": "Barcelona & Costa Brava",
      "actualizado_at": "2026-11-06T09:38:30.323612+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 806,
              "precio_ars": 1168700,
              "precio_texto": "US$ 806",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-14",
              "fecha_vuelta": "2026-12-28",
              "fechas_texto": "14 Dec - 28 Dec 2026",
              "noches": 14,
              "dias_restantes": 38,
              "precio_usd": 1434,
              "precio_ars": 2079300,
              "precio_texto": "US$ 1434",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202026-12-14%20through%202026-12-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2026-12-14/2026-12-28?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-29",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "29 Dec - 22 Jan 2027",
              "noches": 24,
              "dias_restantes": 53,
              "precio_usd": 1456,
              "precio_ars": 2111200,
              "precio_texto": "US$ 1456",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202026-12-29%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2026-12-29/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Flightnetwork",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 887,
              "precio_ars": 1286200,
              "precio_texto": "US$ 887",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 766,
            "precio_ars": 1110700,
            "precio_texto": "US$ 766",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 806,
              "precio_ars": 1168700,
              "precio_texto": "US$ 806",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-14",
              "fecha_vuelta": "2026-12-28",
              "fechas_texto": "14 Dec - 28 Dec 2026",
              "noches": 14,
              "dias_restantes": 38,
              "precio_usd": 1434,
              "precio_ars": 2079300,
              "precio_texto": "US$ 1434",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202026-12-14%20through%202026-12-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2026-12-14/2026-12-28?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-29",
              "fecha_vuelta": "2027-01-22",
              "fechas_texto": "29 Dec - 22 Jan 2027",
              "noches": 24,
              "dias_restantes": 53,
              "precio_usd": 1456,
              "precio_ars": 2111200,
              "precio_texto": "US$ 1456",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202026-12-29%20through%202027-01-22&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2026-12-29/2027-01-22?affilid=flightbot",
              "aerolinea_gate": "Flightnetwork",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 887,
              "precio_ars": 1286200,
              "precio_texto": "US$ 887",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 766,
              "precio_ars": 1110700,
              "precio_texto": "US$ 766",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BCN%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bcn/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "lisboa",
    "ciudad": "Lisboa, Sintra & Oporto",
    "pais": "Portugal",
    "bandera": "🚋",
    "iata": "LIS",
    "tipo_ruta": "Europa Atlántica & Histórica",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "codigo_pais": "pt",
    "precio_desde": "€ 908",
    "comando_tg": "/lisboa",
    "resena": "La luz dorada del Atlántico sobre siete colinas: el mítico tranvía 28 por callejones de azulejos en Alfama, noches de fado, los palacios de cuento de Sintra y las bodegas ribereñas de Oporto.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Air Europa / Iberia",
        "escalas": "1 escala rápida (MAD)",
        "fechas": "29 Ene - 07 Feb 2027",
        "fecha_ida": "2027-01-29",
        "fecha_vuelta": "2027-02-07",
        "noches": 9,
        "precio": "€ 908",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_eur": 908,
        "precio_usd": 981,
        "precio_ars": 1325680
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala (GRU)",
        "fechas": "29 Ene - 13 Feb 2027",
        "fecha_ida": "2027-01-29",
        "fecha_vuelta": "2027-02-13",
        "noches": 15,
        "precio": "€ 962",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_eur": 962,
        "precio_usd": 1039,
        "precio_ars": 1404520
      },
      {
        "puesto": "🥉",
        "aerolinea": "TAP Air Portugal",
        "escalas": "1 escala corta (GRU)",
        "fechas": "31 Ene - 15 Feb 2027",
        "fecha_ida": "2027-01-31",
        "fecha_vuelta": "2027-02-15",
        "noches": 15,
        "precio": "€ 958",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_eur": 958,
        "precio_usd": 1035,
        "precio_ars": 1398680
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Bairro Alto Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (1.120 reseñas)",
        "zona": "Praça Luís de Camões (Chiado / Bairro Alto)",
        "precio_noche": "€ 360 / noche",
        "precio_noche_eur": 360,
        "precio_noche_usd": 389,
        "precio_noche_ars": 525600,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ícono de hospitalidad portuguesa en un edificio del siglo XVIII entre Chiado y Bairro Alto, con terraza panorámica sobre el río Tajo.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Bairro+Alto+Hotel+Lisboa"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hotel da Baixa",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (3.280 reseñas)",
        "zona": "Baixa Pombalina (A 150 m de Plaza del Comercio y Rossio)",
        "precio_noche": "€ 175 / noche",
        "precio_noche_eur": 175,
        "precio_noche_usd": 189,
        "precio_noche_ars": 255500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Fachada clásica de azulejos en la zona más plana y céntrica de Lisboa, a pasos del Elevador de Santa Justa y el metro.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Hotel+da+Baixa+Lisboa"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "My Story Hotel Rossio",
        "estrellas": "⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (4.150 reseñas)",
        "zona": "Plaza del Rossio (Corazón Histórico)",
        "precio_noche": "€ 110 / noche",
        "precio_noche_eur": 110,
        "precio_noche_usd": 119,
        "precio_noche_ars": 160600,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ubicado en plena plaza del Rossio junto a la estación de trenes hacia Sintra, con habitaciones impecables y desayuno portugués.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=My+Story+Hotel+Rossio+Lisboa"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 22,
      "rango_min": "€ 840",
      "rango_max": "€ 1.250",
      "mensaje": "¡Tarifa récord a Portugal! Una de las puertas más económicas a Europa Occidental.",
      "texto_pin": "€ 908 es una tarifa récord baja",
      "consejo": "El tren de alta velocidad Alfa Pendular conecta Lisboa con Oporto en solo 2h 45m desde € 19 reservando con anticipación.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1126,
        1062,
        1008,
        953,
        908
      ],
      "historial_formato": "€ "
    },
    "salidas_reales_cazadas": {
      "iata": "LIS",
      "ciudad": "Lisboa, Sintra & Oporto",
      "actualizado_at": "2026-11-06T09:38:30.566725+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-31",
              "fecha_vuelta": "2027-02-23",
              "fechas_texto": "31 Jan - 23 Feb 2027",
              "noches": 23,
              "dias_restantes": 86,
              "precio_usd": 1076,
              "precio_ars": 1560200,
              "precio_texto": "US$ 1076",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202027-01-31%20through%202027-02-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2027-01-31/2027-02-23?affilid=flightbot",
              "aerolinea_gate": "Kupi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-22",
              "fecha_vuelta": "2027-02-07",
              "fechas_texto": "22 Jan - 07 Feb 2027",
              "noches": 16,
              "dias_restantes": 77,
              "precio_usd": 1098,
              "precio_ars": 1592100,
              "precio_texto": "US$ 1098",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202027-01-22%20through%202027-02-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2027-01-22/2027-02-07?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-31",
              "fecha_vuelta": "2027-02-23",
              "fechas_texto": "31 Jan - 23 Feb 2027",
              "noches": 23,
              "dias_restantes": 86,
              "precio_usd": 1076,
              "precio_ars": 1560200,
              "precio_texto": "US$ 1076",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202027-01-31%20through%202027-02-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2027-01-31/2027-02-23?affilid=flightbot",
              "aerolinea_gate": "Kupi.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-22",
              "fecha_vuelta": "2027-02-07",
              "fechas_texto": "22 Jan - 07 Feb 2027",
              "noches": 16,
              "dias_restantes": 77,
              "precio_usd": 1098,
              "precio_ars": 1592100,
              "precio_texto": "US$ 1098",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202027-01-22%20through%202027-02-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2027-01-22/2027-02-07?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LIS%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lis/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "roma",
    "ciudad": "Roma",
    "pais": "Italia",
    "bandera": "🇮🇹",
    "iata": "FCO",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "precio_desde": "€ 928",
    "comando_tg": "/roma",
    "resena": "La Ciudad Eterna deslumbra con 3.000 años de historia viva. Desde el Coliseo y los Museos Vaticanos hasta las trattorias de Trastevere, Roma es además el gran nodo ferroviario con trenes bala Frecciarossa a Florencia en solo 1h 32m.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Air Europa",
        "escalas": "1 escala corta (MAD)",
        "fechas": "28 Nov - 03 Dic 2026",
        "noches": 5,
        "precio": "€ 928",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-11-28",
        "fecha_vuelta": "2026-12-03",
        "actualizado_en_vivo": true,
        "precio_eur": 928,
        "precio_usd": 1002,
        "precio_ars": 1354880
      },
      {
        "puesto": "🥈",
        "aerolinea": "Iberia",
        "escalas": "1 escala corta (MAD)",
        "fechas": "24 Dic - 31 Dic 2026",
        "noches": 7,
        "precio": "€ 1.059",
        "destacado": "Escala rápida de 2 horas",
        "fecha_ida": "2026-12-24",
        "fecha_vuelta": "2026-12-31",
        "actualizado_en_vivo": true,
        "precio_eur": 1059,
        "precio_usd": 1144,
        "precio_ars": 1546140
      },
      {
        "puesto": "🥉",
        "aerolinea": "ITA Airways",
        "escalas": "Directo (EZE ➔ FCO)",
        "fechas": "26 Nov - 11 Dic 2026",
        "noches": 15,
        "precio": "€ 1.076",
        "destacado": "Vuelo directo sin escalas",
        "fecha_ida": "2026-11-26",
        "fecha_vuelta": "2026-12-11",
        "actualizado_en_vivo": true,
        "precio_eur": 1076,
        "precio_usd": 1162,
        "precio_ars": 1570960
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel de Russie, Rocco Forte Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (1.180 reseñas)",
        "zona": "Via del Babuino / Piazza del Popolo",
        "precio_noche": "€ 625 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El legendario hotel favorito de aristócratas y artistas. Jardines secretos aterrazados diseñados por Giuseppe Valadier y spa de lujo.",
        "booking_url": "https://www.booking.com/hotel/it/hotel-de-russie.es.html",
        "precio_noche_eur": 625,
        "precio_noche_usd": 675,
        "precio_noche_ars": 906250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "NH Collection Roma Fori Imperiali",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (2.420 reseñas)",
        "zona": "Fori Imperiali / Rione Monti",
        "precio_noche": "€ 220 / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Boutique de primer nivel con una de las mejores terrazas rooftop de Roma con vista directa al Foro Romano y al Monumento a Víctor Manuel II.",
        "booking_url": "https://www.booking.com/hotel/it/nh-collection-roma-fori-imperiali.es.html",
        "precio_noche_eur": 220,
        "precio_noche_usd": 238,
        "precio_noche_ars": 319000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "The Hoxton, Rome",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (1.950 reseñas)",
        "zona": "Barrio Salario / Parioli",
        "precio_noche": "€ 120 / noche",
        "foto": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño mid-century impecable, ambiente moderno y luminoso, gastronomía italiana contemporánea y precio imbatible en una zona residencial segura.",
        "booking_url": "https://www.booking.com/hotel/it/the-hoxton-rome.es.html",
        "precio_noche_eur": 120,
        "precio_noche_usd": 130,
        "precio_noche_ars": 174000,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "€ 850",
      "rango_max": "€ 1.280",
      "mensaje": "¡Los precios actuales son más bajos de lo habitual para volar a Roma!",
      "texto_pin": "€ 928 es una tarifa récord baja",
      "consejo": "Tarifa récord para viajar a Italia con Air Europa. Se ubica US$ 250 por debajo del promedio histórico habitual.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1151,
        1086,
        1030,
        974,
        928
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "it",
    "categoria_region": "europa_mundo",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 23 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "22 Nov - 28 Nov 2026",
      "fecha_ida": "2026-11-22",
      "fecha_vuelta": "2026-11-28",
      "noches": 12,
      "dias_para_el_vuelo": 23,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20BUE%20on%202026-11-22%20through%202026-11-28&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/roma/2026-11-22/2026-11-28?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "FCO",
      "ciudad": "Roma",
      "actualizado_at": "2026-11-06T09:38:30.806081+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-25",
              "fechas_texto": "11 Nov - 25 Nov 2026",
              "noches": 14,
              "dias_restantes": 5,
              "precio_usd": 1086,
              "precio_ars": 1574700,
              "precio_texto": "US$ 1086",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202026-11-11%20through%202026-11-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2026-11-11/2026-11-25?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "23 Nov - 08 Dec 2026",
              "noches": 15,
              "dias_restantes": 17,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202026-11-23%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2026-11-23/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 934,
            "precio_ars": 1354300,
            "precio_texto": "US$ 934",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-11",
              "fecha_vuelta": "2026-11-25",
              "fechas_texto": "11 Nov - 25 Nov 2026",
              "noches": 14,
              "dias_restantes": 5,
              "precio_usd": 1086,
              "precio_ars": 1574700,
              "precio_texto": "US$ 1086",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202026-11-11%20through%202026-11-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2026-11-11/2026-11-25?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-23",
              "fecha_vuelta": "2026-12-08",
              "fechas_texto": "23 Nov - 08 Dec 2026",
              "noches": 15,
              "dias_restantes": 17,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202026-11-23%20through%202026-12-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2026-11-23/2026-12-08?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 934,
              "precio_ars": 1354300,
              "precio_texto": "US$ 934",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FCO%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fco/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "paris",
    "ciudad": "París & Île-de-France",
    "pais": "Francia",
    "bandera": "🇫🇷",
    "iata": "CDG",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 1.072",
    "comando_tg": "/paris",
    "resena": "La Ciudad de la Luz: Museo del Louvre, Torre Eiffel, paseos por el Sena, elegancia de Saint-Germain y epicentro de trenes TGV y Eurostar hacia toda Europa.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Air France",
        "escalas": "Directo (EZE ➔ CDG)",
        "fechas": "27 Nov - 12 Dic 2026",
        "noches": 15,
        "precio": "€ 1.072",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-11-27",
        "fecha_vuelta": "2026-12-12",
        "actualizado_en_vivo": true,
        "precio_eur": 1072,
        "precio_usd": 1158,
        "precio_ars": 1565120
      },
      {
        "puesto": "🥈",
        "aerolinea": "Iberia",
        "escalas": "1 escala corta (MAD)",
        "fechas": "04 Dic - 19 Dic 2026",
        "noches": 15,
        "precio": "€ 1.136",
        "destacado": "Conexión eficiente",
        "fecha_ida": "2026-12-04",
        "fecha_vuelta": "2026-12-19",
        "actualizado_en_vivo": true,
        "precio_eur": 1136,
        "precio_usd": 1227,
        "precio_ars": 1658560
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air Europa",
        "escalas": "1 escala (MAD)",
        "fechas": "11 Dic - 26 Dic 2026",
        "noches": 15,
        "precio": "€ 1.222",
        "destacado": "Llega a aeropuerto Orly (ORY)",
        "fecha_ida": "2026-12-11",
        "fecha_vuelta": "2026-12-26",
        "actualizado_en_vivo": true,
        "precio_eur": 1222,
        "precio_usd": 1320,
        "precio_ars": 1784120
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Le Meurice - Dorchester Collection",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (1.900 reseñas)",
        "zona": "Rue de Rivoli / Jardines de las Tullerías",
        "precio_noche": "€ 820 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Palacio parisino de 1835 decorado por Philippe Starck con restaurante 2 estrellas Michelin de Alain Ducasse.",
        "booking_url": "https://www.booking.com/hotel/fr/le-meurice.es.html",
        "precio_noche_eur": 820,
        "precio_noche_usd": 886,
        "precio_noche_ars": 1189000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hôtel Madame Rêve",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (2.300 reseñas)",
        "zona": "Louvre / Bourse (1er Arrondissement)",
        "precio_noche": "€ 350 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Emplazado en el edificio histórico de correos con terraza en la azotea y vistas panorámicas de 360° a toda la ciudad.",
        "booking_url": "https://www.booking.com/hotel/fr/madame-reve.es.html",
        "precio_noche_eur": 350,
        "precio_noche_usd": 378,
        "precio_noche_ars": 507500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "CitizenM Paris Gare de Lyon",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (3.600 reseñas)",
        "zona": "Gare de Lyon / Bastille",
        "precio_noche": "€ 135 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Habitaciones inteligentes con tecnología domótica, camas king XL y ubicación insuperable frente a la estación de trenes.",
        "booking_url": "https://www.booking.com/hotel/fr/citizenm-paris-gare-de-lyon.es.html",
        "precio_noche_eur": 135,
        "precio_noche_usd": 146,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 27,
      "rango_min": "€ 990",
      "rango_max": "€ 1.480",
      "mensaje": "¡Precio bajo para viajar a la Ciudad de la Luz!",
      "texto_pin": "€ 1.072 es una tarifa récord baja",
      "consejo": "Air France ofrece vuelo nocturno directo de 13 horas que permite llegar descansado a la mañana a París.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1329,
        1254,
        1190,
        1126,
        1072
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "fr",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 25 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "24 Nov - 30 Nov 2026",
      "fecha_ida": "2026-11-24",
      "fecha_vuelta": "2026-11-30",
      "noches": 12,
      "dias_para_el_vuelo": 25,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20BUE%20on%202026-11-24%20through%202026-11-30&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/paris/2026-11-24/2026-11-30?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "CDG",
      "ciudad": "París & Île-de-France",
      "actualizado_at": "2026-11-06T09:38:31.052802+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-02",
              "fecha_vuelta": "2026-12-15",
              "fechas_texto": "02 Dec - 15 Dec 2026",
              "noches": 13,
              "dias_restantes": 26,
              "precio_usd": 1399,
              "precio_ars": 2028600,
              "precio_texto": "US$ 1399",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202026-12-02%20through%202026-12-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2026-12-02/2026-12-15?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-14",
              "fecha_vuelta": "2026-12-29",
              "fechas_texto": "14 Dec - 29 Dec 2026",
              "noches": 15,
              "dias_restantes": 38,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202026-12-14%20through%202026-12-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2026-12-14/2026-12-29?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 934,
            "precio_ars": 1354300,
            "precio_texto": "US$ 934",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-02",
              "fecha_vuelta": "2026-12-15",
              "fechas_texto": "02 Dec - 15 Dec 2026",
              "noches": 13,
              "dias_restantes": 26,
              "precio_usd": 1399,
              "precio_ars": 2028600,
              "precio_texto": "US$ 1399",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202026-12-02%20through%202026-12-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2026-12-02/2026-12-15?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-14",
              "fecha_vuelta": "2026-12-29",
              "fechas_texto": "14 Dec - 29 Dec 2026",
              "noches": 15,
              "dias_restantes": 38,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202026-12-14%20through%202026-12-29&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2026-12-14/2026-12-29?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 934,
              "precio_ars": 1354300,
              "precio_texto": "US$ 934",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CDG%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cdg/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "londres",
    "ciudad": "Londres",
    "pais": "Reino Unido",
    "bandera": "🇬🇧",
    "iata": "LHR",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 935",
    "comando_tg": "/londres",
    "resena": "Capital cosmopolita del Támesis: British Museum, Big Ben, teatros del West End y conexión en tren submarino Eurostar a París y Bruselas en poco más de 2 horas.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "British Airways",
        "escalas": "Directo (EZE ➔ LHR)",
        "fechas": "22 Abr - 06 May 2027",
        "noches": 14,
        "precio": "€ 935",
        "destacado": "Tarifa récord monitoreada",
        "fecha_ida": "2027-04-22",
        "fecha_vuelta": "2027-05-06",
        "actualizado_en_vivo": true,
        "precio_eur": 935,
        "precio_usd": 1010,
        "precio_ars": 1365100
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala corta (GRU)",
        "fechas": "04 Feb - 18 Feb 2027",
        "noches": 14,
        "precio": "€ 982",
        "destacado": "Excelente servicio",
        "fecha_ida": "2027-02-04",
        "fecha_vuelta": "2027-02-18",
        "actualizado_en_vivo": true,
        "precio_eur": 982,
        "precio_usd": 1061,
        "precio_ars": 1433720
      },
      {
        "puesto": "🥉",
        "aerolinea": "Iberia",
        "escalas": "1 escala (MAD)",
        "fechas": "11 Feb - 25 Feb 2027",
        "noches": 14,
        "precio": "€ 1.038",
        "destacado": "Equipaje incluido",
        "fecha_ida": "2027-02-11",
        "fecha_vuelta": "2027-02-25",
        "actualizado_en_vivo": true,
        "precio_eur": 1038,
        "precio_usd": 1121,
        "precio_ars": 1515480
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "The Savoy London",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (2.600 reseñas)",
        "zona": "The Strand / Covent Garden",
        "precio_noche": "€ 600 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El hotel histórico más emblemático del Reino Unido a orillas del Támesis, con el legendario American Bar y servicio de mayordomo.",
        "booking_url": "https://www.booking.com/hotel/gb/the-savoy.es.html",
        "precio_noche_eur": 600,
        "precio_noche_usd": 648,
        "precio_noche_ars": 870000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "The Hoxton, Shoreditch",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.800 reseñas)",
        "zona": "Shoreditch / East End",
        "precio_noche": "€ 200 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño industrial chic en el epicentro de la moda y arte callejero londinense, chimeneas y ambiente cosmopolita.",
        "booking_url": "https://www.booking.com/hotel/gb/the-hoxton-hotel.es.html",
        "precio_noche_eur": 200,
        "precio_noche_usd": 216,
        "precio_noche_ars": 290000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Treehouse Hotel London",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (2.400 reseñas)",
        "zona": "Marylebone / Oxford Circus",
        "precio_noche": "€ 150 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Concepto lúdico y sustentable inspirado en casas de árbol, rooftop bar con vistas a la torre BT y Regent Street.",
        "booking_url": "https://www.booking.com/hotel/gb/treehouse-london.es.html",
        "precio_noche_eur": 150,
        "precio_noche_usd": 162,
        "precio_noche_ars": 217500,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 18,
      "rango_min": "€ 860",
      "rango_max": "€ 1.290",
      "mensaje": "Oportunidad récord monitoreada para volar de Ezeiza (EZE) a Londres Heathrow (LHR).",
      "texto_pin": "€ 935 es una tarifa récord baja",
      "consejo": "British Airways en vuelo directo evita trasbordos y permite llegar al hub principal de Heathrow.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1159,
        1094,
        1038,
        982,
        935
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "gb",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "25 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-12-01",
      "noches": 12,
      "dias_para_el_vuelo": 26,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20BUE%20on%202026-11-25%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/londres/2026-11-25/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "LHR",
      "ciudad": "Londres",
      "actualizado_at": "2026-11-06T09:38:31.301220+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 934,
            "precio_ars": 1354300,
            "precio_texto": "US$ 934",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 934,
              "precio_ars": 1354300,
              "precio_texto": "US$ 934",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20LHR%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/lhr/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "berlin",
    "ciudad": "Berlín & Cultura Vanguardista",
    "pais": "Alemania",
    "bandera": "🇩🇪",
    "iata": "BER",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 1.285",
    "comando_tg": "/berlin",
    "resena": "Capital histórica y creativa: Puerta de Brandeburgo, Muro de Berlín, Isla de los Museos y la escena cultural y de música electrónica más innovadora de Europa.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Air France",
        "escalas": "1 escala corta (CDG)",
        "fechas": "24 Dic - 08 Ene 2027",
        "noches": 15,
        "precio": "€ 1.285",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-12-24",
        "fecha_vuelta": "2027-01-08",
        "actualizado_en_vivo": true,
        "precio_ars": 1876100,
        "precio_usd": 1388,
        "precio_eur": 1285
      },
      {
        "puesto": "🥈",
        "aerolinea": "Iberia",
        "escalas": "1 escala (MAD)",
        "fechas": "31 Dic - 15 Ene 2027",
        "noches": 15,
        "precio": "€ 1.362",
        "destacado": "Conexión eficiente",
        "fecha_ida": "2026-12-31",
        "fecha_vuelta": "2027-01-15",
        "actualizado_en_vivo": true,
        "precio_ars": 1988520,
        "precio_usd": 1471,
        "precio_eur": 1362
      },
      {
        "puesto": "🥉",
        "aerolinea": "Lufthansa",
        "escalas": "1 escala (FRA)",
        "fechas": "07 Ene - 22 Ene 2027",
        "noches": 15,
        "precio": "€ 1.465",
        "destacado": "Llega al aeropuerto BER",
        "fecha_ida": "2027-01-07",
        "fecha_vuelta": "2027-01-22",
        "actualizado_en_vivo": true,
        "precio_ars": 2138900,
        "precio_usd": 1582,
        "precio_eur": 1465
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Adlon Kempinski Berlin",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (4.100 reseñas)",
        "zona": "Pariser Platz / Puerta de Brandeburgo",
        "precio_noche": "€ 350 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El hotel legendario más célebre de Alemania frente a la Puerta de Brandeburgo, spa de 9.000 m² y restaurante 2 estrellas Michelin.",
        "booking_url": "https://www.booking.com/hotel/de/hotel-adlon-kempinski.es.html",
        "precio_noche_eur": 350,
        "precio_noche_usd": 378,
        "precio_noche_ars": 507500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "The Ritz-Carlton, Berlin",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (2.800 reseñas)",
        "zona": "Potsdamer Platz",
        "precio_noche": "€ 220 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Decoración inspirada en los años dorados de Berlín de 1920, bar de cócteles Fragrances galardonado y servicio de guante blanco.",
        "booking_url": "https://www.booking.com/hotel/de/the-ritz-carlton-berlin.es.html",
        "precio_noche_eur": 220,
        "precio_noche_usd": 238,
        "precio_noche_ars": 319000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Michelberger Hotel",
        "estrellas": "⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (3.200 reseñas)",
        "zona": "Friedrichshain / East Side Gallery",
        "precio_noche": "€ 100 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ambiente indie y bohemio junto al río Spree y el Muro de Berlín, restaurante con productos de su propia granja biológica.",
        "booking_url": "https://www.booking.com/hotel/de/michelberger.es.html",
        "precio_noche_eur": 100,
        "precio_noche_usd": 108,
        "precio_noche_ars": 145000,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 35,
      "rango_min": "€ 1.180",
      "rango_max": "€ 1.770",
      "mensaje": "Tarifa estándar competitiva para conocer Berlín.",
      "texto_pin": "€ 1.285 es una tarifa récord baja",
      "consejo": "Excelente opción para disfrutar de los famosos mercados navideños alemanes que abren a finales de noviembre.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1593,
        1503,
        1426,
        1349,
        1285
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "de",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 28 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "27 Nov - 04 Dic 2026",
      "fecha_ida": "2026-11-27",
      "fecha_vuelta": "2026-12-04",
      "noches": 12,
      "dias_para_el_vuelo": 28,
      "precio": "US$ 1000",
      "precio_usd": "aprox. $ 1.350.000 ARS",
      "precio_ars": 1350000,
      "precio_usd_num": 1000,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20BUE%20on%202026-11-27%20through%202026-12-04&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/berlin/2026-11-27/2026-12-04?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "BER",
      "ciudad": "Berlín & Cultura Vanguardista",
      "actualizado_at": "2026-11-06T09:38:31.546779+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1000,
              "precio_ars": 1450000,
              "precio_texto": "US$ 1000",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-28",
              "fecha_vuelta": "2027-01-12",
              "fechas_texto": "28 Dec - 12 Jan 2027",
              "noches": 15,
              "dias_restantes": 52,
              "precio_usd": 1605,
              "precio_ars": 2327200,
              "precio_texto": "US$ 1605",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202026-12-28%20through%202027-01-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2026-12-28/2027-01-12?affilid=flightbot",
              "aerolinea_gate": "Авиасейлс",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-08",
              "fechas_texto": "24 Dec - 08 Jan 2027",
              "noches": 15,
              "dias_restantes": 48,
              "precio_usd": 1050,
              "precio_ars": 1522500,
              "precio_texto": "US$ 1050",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202026-12-24%20through%202027-01-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2026-12-24/2027-01-08?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1100,
              "precio_ars": 1595000,
              "precio_texto": "US$ 1100",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 950,
            "precio_ars": 1377500,
            "precio_texto": "US$ 950",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1000,
              "precio_ars": 1450000,
              "precio_texto": "US$ 1000",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-28",
              "fecha_vuelta": "2027-01-12",
              "fechas_texto": "28 Dec - 12 Jan 2027",
              "noches": 15,
              "dias_restantes": 52,
              "precio_usd": 1605,
              "precio_ars": 2327200,
              "precio_texto": "US$ 1605",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202026-12-28%20through%202027-01-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2026-12-28/2027-01-12?affilid=flightbot",
              "aerolinea_gate": "Авиасейлс",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-08",
              "fechas_texto": "24 Dec - 08 Jan 2027",
              "noches": 15,
              "dias_restantes": 48,
              "precio_usd": 1050,
              "precio_ars": 1522500,
              "precio_texto": "US$ 1050",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202026-12-24%20through%202027-01-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2026-12-24/2027-01-08?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1100,
              "precio_ars": 1595000,
              "precio_texto": "US$ 1100",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 950,
              "precio_ars": 1377500,
              "precio_texto": "US$ 950",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BER%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ber/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "frankfurt",
    "ciudad": "Frankfurt (Hub Alemania)",
    "pais": "Alemania",
    "bandera": "🇩🇪",
    "iata": "FRA",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 985",
    "comando_tg": "/frankfurt",
    "resena": "El mayor nodo de aviación y trenes ICE de Europa Central. Ideal como puerta de entrada para recorrer Alemania, el Valle del Rin y la Selva Negra con tarifas competitivas.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Lufthansa",
        "escalas": "Directo (EZE ➔ FRA)",
        "fechas": "14 Jul - 28 Jul 2027",
        "noches": 14,
        "precio": "€ 985",
        "destacado": "Vuelo directo más veloz",
        "fecha_ida": "2027-07-14",
        "fecha_vuelta": "2027-07-28",
        "actualizado_en_vivo": true,
        "precio_ars": 1438100,
        "precio_usd": 1064,
        "precio_eur": 985
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala corta (GRU)",
        "fechas": "14 Jul - 28 Jul 2027",
        "noches": 14,
        "precio": "€ 1.034",
        "destacado": "Equipaje carry-on incluido",
        "fecha_ida": "2027-07-14",
        "fecha_vuelta": "2027-07-28",
        "actualizado_en_vivo": true,
        "precio_ars": 1509640,
        "precio_usd": 1117,
        "precio_eur": 1034
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air Europa",
        "escalas": "1 escala (MAD)",
        "fechas": "14 Jul - 28 Jul 2027",
        "noches": 14,
        "precio": "€ 1.093",
        "destacado": "Atención en español",
        "fecha_ida": "2027-07-14",
        "fecha_vuelta": "2027-07-28",
        "actualizado_en_vivo": true,
        "precio_ars": 1595780,
        "precio_usd": 1180,
        "precio_eur": 1093
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Sofitel Frankfurt Opera",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Excepcional (2.100 reseñas)",
        "zona": "Opernplatz (Plaza de la Ópera)",
        "precio_noche": "€ 295 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Palacio de estilo hôtel particulier francés con vistas directas a la Ópera Antigua, spa de lujo y restaurante Schönemann.",
        "booking_url": "https://www.booking.com/hotel/de/sofitel-frankfurt-opera.es.html",
        "precio_noche_eur": 295,
        "precio_noche_usd": 319,
        "precio_noche_ars": 427750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Steigenberger Icon Frankfurter Hof",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Fantástico (3.400 reseñas)",
        "zona": "Altstadt / Centro Histórico",
        "precio_noche": "€ 180 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel legendario fundado en 1876, arquitectura imperial tradicional a pasos de la plaza Römerberg y el río Meno.",
        "booking_url": "https://www.booking.com/hotel/de/steigenberger-frankfurter-hof.es.html",
        "precio_noche_eur": 180,
        "precio_noche_usd": 194,
        "precio_noche_ars": 261000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "25hours Hotel The Goldman",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Muy Bueno (2.300 reseñas)",
        "zona": "Ostend / Barrio Creativo",
        "precio_noche": "€ 90 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño creativo inspirado en personalidades históricas, bicicletas de cortesía y tranvía en la puerta al centro.",
        "booking_url": "https://www.booking.com/hotel/de/25hours-the-goldman.es.html",
        "precio_noche_eur": 90,
        "precio_noche_usd": 97,
        "precio_noche_ars": 130500,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 36,
      "rango_min": "€ 910",
      "rango_max": "€ 1.360",
      "mensaje": "Precios estándar vigentes para conectar con el corazón de Europa.",
      "texto_pin": "€ 985 es una tarifa récord baja",
      "consejo": "La estación de trenes del aeropuerto (Fernbahnhof) permite conectar en trenes de alta velocidad ICE a Colonia, Múnich o Zúrich.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1221,
        1152,
        1093,
        1034,
        985
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "de",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 30 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "29 Nov - 06 Dic 2026",
      "fecha_ida": "2026-11-29",
      "fecha_vuelta": "2026-12-06",
      "noches": 12,
      "dias_para_el_vuelo": 30,
      "precio": "US$ 1174",
      "precio_usd": "aprox. $ 1.584.900 ARS",
      "precio_ars": 1584900,
      "precio_usd_num": 1174,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20BUE%20on%202026-11-29%20through%202026-12-06&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/frankfurt/2026-11-29/2026-12-06?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "FRA",
      "ciudad": "Frankfurt (Hub Alemania)",
      "actualizado_at": "2026-11-06T09:38:31.788978+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1174,
              "precio_ars": 1702300,
              "precio_texto": "US$ 1174",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1233,
              "precio_ars": 1787800,
              "precio_texto": "US$ 1233",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1291,
              "precio_ars": 1872000,
              "precio_texto": "US$ 1291",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 1115,
            "precio_ars": 1616800,
            "precio_texto": "US$ 1115",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1174,
              "precio_ars": 1702300,
              "precio_texto": "US$ 1174",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1233,
              "precio_ars": 1787800,
              "precio_texto": "US$ 1233",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1291,
              "precio_ars": 1872000,
              "precio_texto": "US$ 1291",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 1115,
              "precio_ars": 1616800,
              "precio_texto": "US$ 1115",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20FRA%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/fra/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "amsterdam",
    "ciudad": "Ámsterdam",
    "pais": "Países Bajos",
    "bandera": "🇳🇱",
    "iata": "AMS",
    "tipo_ruta": "Europa & Canales del Norte",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 979",
    "comando_tg": "/amsterdam",
    "codigo_pais": "nl",
    "resena": "Canales concéntricos Patrimonio UNESCO, bicicletas, museos de Van Gogh y Rembrandt, y el animado barrio Jordaan.",
    "vuelos": [
      {
        "puesto": "Top 1 Directo KLM",
        "aerolinea": "KLM Royal Dutch Airlines",
        "fechas": "02 Dic - 06 Dic 2026",
        "escalas": "Vuelo Directo nocturno",
        "precio": "€ 979",
        "noches": 4,
        "fecha_ida": "2026-12-02",
        "fecha_vuelta": "2026-12-06",
        "actualizado_en_vivo": true,
        "precio_ars": 1429340,
        "precio_usd": 1057,
        "precio_eur": 979
      },
      {
        "puesto": "Top 2 SkyTeam",
        "aerolinea": "Air France",
        "fechas": "09 Dic - 13 Dic 2026",
        "escalas": "1 escala en París (CDG)",
        "precio": "€ 1.038",
        "noches": 4,
        "fecha_ida": "2026-12-09",
        "fecha_vuelta": "2026-12-13",
        "actualizado_en_vivo": true,
        "precio_ars": 1515480,
        "precio_usd": 1121,
        "precio_eur": 1038
      },
      {
        "puesto": "Top 3 OneWorld",
        "aerolinea": "Iberia",
        "fechas": "16 Dic - 20 Dic 2026",
        "escalas": "1 escala en Madrid (MAD)",
        "precio": "€ 1.116",
        "noches": 4,
        "fecha_ida": "2026-12-16",
        "fecha_vuelta": "2026-12-20",
        "actualizado_en_vivo": true,
        "precio_ars": 1629360,
        "precio_usd": 1205,
        "precio_eur": 1116
      }
    ],
    "hoteles": [
      {
        "nombre": "CitizenM Amstel Amsterdam",
        "estrellas": "4 estrellas · 9.1 Fantástico",
        "precio_noche": "€ 135 / noche",
        "zona": "Amstel / Weesperplein",
        "comentario": "Diseño contemporáneo holandés, camas king size ultramodernas y a 3 paradas de metro de Centraal Station.",
        "precio_noche_eur": 135,
        "precio_noche_usd": 146,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Hotel Notting Hill",
        "estrellas": "4 estrellas · 8.8 Fabuloso",
        "precio_noche": "€ 150 / noche",
        "zona": "De Pijp / Museumplein",
        "comentario": "Frente al canal Singelgracht, a pasos de los museos de Van Gogh y el mercado Albert Cuyp.",
        "precio_noche_eur": 150,
        "precio_noche_usd": 162,
        "precio_noche_ars": 217500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Motel One Amsterdam-Waterlooplein",
        "estrellas": "3 estrellas · 8.9 Fabuloso",
        "precio_noche": "€ 115 / noche",
        "zona": "Waterlooplein",
        "comentario": "Ubicación céntrica fantástica para recorrer caminando la Casa de Rembrandt y el Jardín Botánico.",
        "precio_noche_eur": 115,
        "precio_noche_usd": 124,
        "precio_noche_ars": 166750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "tarifa_habitual",
      "posicion_pct": 44,
      "rango_min": "€ 900",
      "rango_max": "€ 1.350",
      "mensaje": "Tarifa competitiva de media estación con vuelo directo de KLM.",
      "texto_pin": "€ 979 es una tarifa récord baja",
      "consejo": "Mayo y septiembre ofrecen el mejor balance de horas de luz, tulipanes y clima templado para pedalear.",
      "historial_valores": [
        1214,
        1145,
        1087,
        1028,
        979
      ],
      "historial_formato": "€ "
    },
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 33 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "02 Dic - 09 Dic 2026",
      "fecha_ida": "2026-12-02",
      "fecha_vuelta": "2026-12-09",
      "noches": 12,
      "dias_para_el_vuelo": 33,
      "precio": "US$ 1013",
      "precio_usd": "aprox. $ 1.367.550 ARS",
      "precio_ars": 1367550,
      "precio_usd_num": 1013,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20BUE%20on%202026-12-02%20through%202026-12-09&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/amsterdam/2026-12-02/2026-12-09?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "AMS",
      "ciudad": "Ámsterdam",
      "actualizado_at": "2026-11-06T09:38:32.032606+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1013,
              "precio_ars": 1468800,
              "precio_texto": "US$ 1013",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1064,
              "precio_ars": 1542800,
              "precio_texto": "US$ 1064",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1114,
              "precio_ars": 1615300,
              "precio_texto": "US$ 1114",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 962,
            "precio_ars": 1394900,
            "precio_texto": "US$ 962",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1013,
              "precio_ars": 1468800,
              "precio_texto": "US$ 1013",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1064,
              "precio_ars": 1542800,
              "precio_texto": "US$ 1064",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1114,
              "precio_ars": 1615300,
              "precio_texto": "US$ 1114",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 962,
              "precio_ars": 1394900,
              "precio_texto": "US$ 962",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AMS%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ams/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "atenas",
    "ciudad": "Atenas & Islas Griegas",
    "pais": "Grecia",
    "bandera": "🇬🇷",
    "iata": "ATH",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 986",
    "comando_tg": "/atenas",
    "resena": "Cuna milenaria de la civilización con el Partenón y la Acrópolis dominando la ciudad. Puerto de El Pireo a minutos para conectar en ferries a Santorini, Mykonos y Creta.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "ITA Airways",
        "escalas": "1 escala corta (FCO)",
        "fechas": "01 Abr - 15 Abr 2027",
        "noches": 14,
        "precio": "€ 986",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-01",
        "fecha_vuelta": "2027-04-15",
        "actualizado_en_vivo": true,
        "precio_eur": 986,
        "precio_usd": 1065,
        "precio_ars": 1439560
      },
      {
        "puesto": "🥈",
        "aerolinea": "Turkish Airlines",
        "escalas": "1 escala (IST)",
        "fechas": "08 Abr - 22 Abr 2027",
        "noches": 14,
        "precio": "€ 1.045",
        "destacado": "Excelente catering a bordo",
        "fecha_ida": "2027-04-08",
        "fecha_vuelta": "2027-04-22",
        "actualizado_en_vivo": true,
        "precio_eur": 1045,
        "precio_usd": 1129,
        "precio_ars": 1525700
      },
      {
        "puesto": "🥉",
        "aerolinea": "Iberia",
        "escalas": "1 escala (MAD)",
        "fechas": "15 Abr - 29 Abr 2027",
        "noches": 14,
        "precio": "€ 1.124",
        "destacado": "Equipaje carry-on incluido",
        "fecha_ida": "2027-04-15",
        "fecha_vuelta": "2027-04-29",
        "actualizado_en_vivo": true,
        "precio_eur": 1124,
        "precio_usd": 1214,
        "precio_ars": 1641040
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Hotel Grande Bretagne, Luxury Collection",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excepcional (2.900 reseñas)",
        "zona": "Plaza Syntagma",
        "precio_noche": "US$ 415 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Palacio histórico neoclásico fundado en 1874 con la terraza rooftop más célebre de Atenas con vista frontal al Partenón.",
        "booking_url": "https://www.booking.com/hotel/gr/hotel-grande-bretagne-a-luxury-collection-hotel-athens.es.html",
        "precio_noche_usd": 415,
        "precio_noche_ars": 560250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Electra Metropolis Athens",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (3.600 reseñas)",
        "zona": "Barrio Plaka / Mitropoleos",
        "precio_noche": "US$ 195 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Piscina en la azotea con vista directa a la Acrópolis iluminada, spa con piscina cubierta y gastronomía mediterránea.",
        "booking_url": "https://www.booking.com/hotel/gr/electra-metropolis.es.html",
        "precio_noche_usd": 195,
        "precio_noche_ars": 263250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Ergon House Athens",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Excelente (2.400 reseñas)",
        "zona": "Monastiraki / Plaka",
        "precio_noche": "US$ 125 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel boutique para foodies con huerta vertical, mercado gastronómico tradicional y terraza con cócteles mirando a la colina.",
        "booking_url": "https://www.booking.com/hotel/gr/ergon-house.es.html",
        "precio_noche_usd": 125,
        "precio_noche_ars": 168750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 38,
      "rango_min": "€ 910",
      "rango_max": "€ 1.360",
      "mensaje": "Precios estándar vigentes para Grecia y el Egeo.",
      "texto_pin": "€ 986 es una tarifa récord baja",
      "consejo": "ITA Airways vía Roma ofrece las conexiones más rápidas para volar al Mediterráneo oriental.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1223,
        1154,
        1094,
        1035,
        986
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "gr",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 35 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "04 Dic - 14 Dic 2026",
      "fecha_ida": "2026-12-04",
      "fecha_vuelta": "2026-12-14",
      "noches": 12,
      "dias_para_el_vuelo": 35,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20BUE%20on%202026-12-04%20through%202026-12-14&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/atenas/2026-12-04/2026-12-14?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "ATH",
      "ciudad": "Atenas & Islas Griegas",
      "actualizado_at": "2026-11-06T09:38:32.265593+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-01",
            "fecha_vuelta": "2027-04-15",
            "fechas_texto": "01 Apr - 15 Apr 2027",
            "noches": 14,
            "dias_restantes": 146,
            "precio_usd": 1108,
            "precio_ars": 1606600,
            "precio_texto": "US$ 1108",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202027-04-01%20through%202027-04-15&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2027-04-01/2027-04-15?affilid=flightbot",
            "aerolinea_gate": "Vayama",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-01",
              "fecha_vuelta": "2027-04-15",
              "fechas_texto": "01 Apr - 15 Apr 2027",
              "noches": 14,
              "dias_restantes": 146,
              "precio_usd": 1108,
              "precio_ars": 1606600,
              "precio_texto": "US$ 1108",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ATH%20from%20EZE%20on%202027-04-01%20through%202027-04-15&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ath/2027-04-01/2027-04-15?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "oslo",
    "ciudad": "Oslo & Fiordos Noruegos",
    "pais": "Noruega",
    "bandera": "🇳🇴",
    "iata": "OSL",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 955",
    "comando_tg": "/oslo",
    "resena": "Capital de la vanguardia escandinava con la Ópera de Oslo y el Museo Munch. Punto de partida para el célebre tren de Bergen y los majestuosos fiordos noruegos declarados Patrimonio UNESCO.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "KLM / Air France",
        "escalas": "1 escala (AMS/CDG)",
        "fechas": "22 Abr - 06 May 2027",
        "noches": 14,
        "precio": "€ 955",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-22",
        "fecha_vuelta": "2027-05-06",
        "actualizado_en_vivo": true,
        "precio_eur": 955,
        "precio_usd": 1031,
        "precio_ars": 1394300
      },
      {
        "puesto": "🥈",
        "aerolinea": "Lufthansa",
        "escalas": "1 escala (FRA)",
        "fechas": "04 Feb - 18 Feb 2027",
        "noches": 14,
        "precio": "€ 1.003",
        "destacado": "Conexión eficiente",
        "fecha_ida": "2027-02-04",
        "fecha_vuelta": "2027-02-18",
        "actualizado_en_vivo": true,
        "precio_eur": 1003,
        "precio_usd": 1083,
        "precio_ars": 1464380
      },
      {
        "puesto": "🥉",
        "aerolinea": "Iberia / SAS",
        "escalas": "1 escala (MAD)",
        "fechas": "11 Feb - 25 Feb 2027",
        "noches": 14,
        "precio": "€ 1.060",
        "destacado": "Equipaje carry-on incluido",
        "fecha_ida": "2027-02-11",
        "fecha_vuelta": "2027-02-25",
        "actualizado_en_vivo": true,
        "precio_eur": 1060,
        "precio_usd": 1145,
        "precio_ars": 1547600
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "The Thief",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (2.400 reseñas)",
        "zona": "Tjuvholmen / Fiordo de Oslo",
        "precio_noche": "€ 350 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel de diseño en el exclusivo islote de arte Tjuvholmen con spa nórdico, terraza rooftop sobre el fiordo y obras de arte contemporáneo.",
        "booking_url": "https://www.booking.com/hotel/no/the-thief.es.html",
        "precio_noche_eur": 350,
        "precio_noche_usd": 378,
        "precio_noche_ars": 507500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Grand Hotel Oslo",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (3.100 reseñas)",
        "zona": "Karl Johans gate / Centro Histórico",
        "precio_noche": "€ 210 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El legendario hotel donde se alojan los laureados del Premio Nobel de la Paz, spa de lujo y gastronomía noruega de autor.",
        "booking_url": "https://www.booking.com/hotel/no/grand-oslo.es.html",
        "precio_noche_eur": 210,
        "precio_noche_usd": 227,
        "precio_noche_ars": 304500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Clarion Hotel The Hub",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (4.200 reseñas)",
        "zona": "Jernbanetorget / Estación Central",
        "precio_noche": "€ 115 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel sustentable con huerta en la azotea, piscina de inmersión, sauna y conexión directa al tren Flytoget al aeropuerto.",
        "booking_url": "https://www.booking.com/hotel/no/clarion-the-hub.es.html",
        "precio_noche_eur": 115,
        "precio_noche_usd": 124,
        "precio_noche_ars": 166750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 34,
      "rango_min": "€ 880",
      "rango_max": "€ 1.320",
      "mensaje": "Precios estándar competitivos para volar a los fiordos de Noruega.",
      "texto_pin": "€ 955 es una tarifa récord baja",
      "consejo": "El tren rápido Flytoget conecta el aeropuerto de Gardermoen con el centro de Oslo en apenas 19 minutos.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1184,
        1117,
        1060,
        1003,
        955
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "no",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 23 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "22 Nov - 28 Nov 2026",
      "fecha_ida": "2026-11-22",
      "fecha_vuelta": "2026-11-28",
      "noches": 12,
      "dias_para_el_vuelo": 23,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20BUE%20on%202026-11-22%20through%202026-11-28&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/oslo/2026-11-22/2026-11-28?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "OSL",
      "ciudad": "Oslo & Fiordos Noruegos",
      "actualizado_at": "2026-11-06T09:38:32.505824+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "12 Nov - 28 Nov 2026",
              "noches": 16,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202026-11-12%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2026-11-12/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-28",
              "fechas_texto": "12 Dec - 28 Dec 2026",
              "noches": 16,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202026-12-12%20through%202026-12-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2026-12-12/2026-12-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-28",
              "fechas_texto": "12 Jan - 28 Jan 2027",
              "noches": 16,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202027-01-12%20through%202027-01-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2027-01-12/2027-01-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-21",
            "fechas_texto": "05 May - 21 May 2027",
            "noches": 16,
            "dias_restantes": 180,
            "precio_usd": 934,
            "precio_ars": 1354300,
            "precio_texto": "US$ 934",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202027-05-05%20through%202027-05-21&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2027-05-05/2027-05-21?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "12 Nov - 28 Nov 2026",
              "noches": 16,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202026-11-12%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2026-11-12/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-28",
              "fechas_texto": "12 Dec - 28 Dec 2026",
              "noches": 16,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202026-12-12%20through%202026-12-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2026-12-12/2026-12-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-28",
              "fechas_texto": "12 Jan - 28 Jan 2027",
              "noches": 16,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202027-01-12%20through%202027-01-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2027-01-12/2027-01-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-21",
              "fechas_texto": "05 May - 21 May 2027",
              "noches": 16,
              "dias_restantes": 180,
              "precio_usd": 934,
              "precio_ars": 1354300,
              "precio_texto": "US$ 934",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20OSL%20from%20EZE%20on%202027-05-05%20through%202027-05-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/osl/2027-05-05/2027-05-21?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "reikiavik",
    "ciudad": "Reikiavik & Auroras Boreales",
    "pais": "Islandia",
    "bandera": "🇮🇸",
    "iata": "KEF",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "€ 1.050",
    "comando_tg": "/reikiavik",
    "resena": "Tierra de fuego y hielo: auroras boreales danzantes en el cielo ártico, el Círculo Dorado con géiseres activos, cascadas atronadoras de Gullfoss y termas geotérmicas de la Blue Lagoon.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Iberia / Play",
        "escalas": "1 escala (MAD/BCN)",
        "fechas": "23 Abr - 07 May 2027",
        "noches": 14,
        "precio": "€ 1.050",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-23",
        "fecha_vuelta": "2027-05-07",
        "actualizado_en_vivo": true,
        "precio_eur": 1050,
        "precio_usd": 1134,
        "precio_ars": 1533000
      },
      {
        "puesto": "🥈",
        "aerolinea": "British / Icelandair",
        "escalas": "1 escala (LHR)",
        "fechas": "05 Feb - 19 Feb 2027",
        "noches": 14,
        "precio": "€ 1.102",
        "destacado": "Conexión eficiente",
        "fecha_ida": "2027-02-05",
        "fecha_vuelta": "2027-02-19",
        "actualizado_en_vivo": true,
        "precio_eur": 1102,
        "precio_usd": 1190,
        "precio_ars": 1608920
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air France / Play",
        "escalas": "1 escala (CDG)",
        "fechas": "12 Feb - 26 Feb 2027",
        "noches": 14,
        "precio": "€ 1.166",
        "destacado": "Temporada alta de auroras",
        "fecha_ida": "2027-02-12",
        "fecha_vuelta": "2027-02-26",
        "actualizado_en_vivo": true,
        "precio_eur": 1166,
        "precio_usd": 1259,
        "precio_ars": 1702360
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "The Retreat at Blue Lagoon Iceland",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (1.600 reseñas)",
        "zona": "Grindavík / Blue Lagoon Privada",
        "precio_noche": "€ 1090 / noche",
        "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Camping_%C3%91andubaysal_-_panoramio.jpg/960px-Camping_%C3%91andubaysal_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "descripcion": "Resort de ultra lujo esculpido en campos de lava volcánica con acceso ilimitado a laguna geotérmica privada y spa subterráneo.",
        "booking_url": "https://www.booking.com/hotel/is/the-retreat-at-blue-lagoon-iceland.es.html",
        "precio_noche_eur": 1090,
        "precio_noche_usd": 1177,
        "precio_noche_ars": 1580500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "ION Adventure Hotel",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.100 reseñas)",
        "zona": "Nesjavellir / Círculo Dorado",
        "precio_noche": "€ 315 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel de arquitectura suspendida frente al volcán Hengill, piscina geotérmica exterior con bar Northern Lights para ver auroras.",
        "booking_url": "https://www.booking.com/hotel/is/ion-luxury-adventure.es.html",
        "precio_noche_eur": 315,
        "precio_noche_usd": 340,
        "precio_noche_ars": 456750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Exeter Hotel Reykjavik",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (2.800 reseñas)",
        "zona": "Puerto Viejo de Reikiavik",
        "precio_noche": "€ 150 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño industrial contemporáneo en el animado puerto histórico, sauna nórdica y a pasos de los mejores restaurantes de mariscos.",
        "booking_url": "https://www.booking.com/hotel/is/exeter.es.html",
        "precio_noche_eur": 150,
        "precio_noche_usd": 162,
        "precio_noche_ars": 217500,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 26,
      "rango_min": "€ 970",
      "rango_max": "€ 1.450",
      "mensaje": "¡Precio bajo detectado para viajar a la tierra de las auroras boreales!",
      "texto_pin": "€ 1.050 es una tarifa récord baja",
      "consejo": "Noviembre y febrero son meses pico para avistar auroras boreales con noches largas y clima activo.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1302,
        1228,
        1166,
        1102,
        1050
      ],
      "historial_formato": "€ "
    },
    "codigo_pais": "is",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 25 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "24 Nov - 30 Nov 2026",
      "fecha_ida": "2026-11-24",
      "fecha_vuelta": "2026-11-30",
      "noches": 12,
      "dias_para_el_vuelo": 25,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20BUE%20on%202026-11-24%20through%202026-11-30&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/reikiavik/2026-11-24/2026-11-30?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "KEF",
      "ciudad": "Reikiavik & Auroras Boreales",
      "actualizado_at": "2026-11-06T09:38:32.945096+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "12 Nov - 28 Nov 2026",
              "noches": 16,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202026-11-12%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2026-11-12/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-28",
              "fechas_texto": "12 Dec - 28 Dec 2026",
              "noches": 16,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202026-12-12%20through%202026-12-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2026-12-12/2026-12-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-28",
              "fechas_texto": "12 Jan - 28 Jan 2027",
              "noches": 16,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202027-01-12%20through%202027-01-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2027-01-12/2027-01-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-21",
            "fechas_texto": "05 May - 21 May 2027",
            "noches": 16,
            "dias_restantes": 180,
            "precio_usd": 934,
            "precio_ars": 1354300,
            "precio_texto": "US$ 934",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202027-05-05%20through%202027-05-21&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2027-05-05/2027-05-21?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-28",
              "fechas_texto": "12 Nov - 28 Nov 2026",
              "noches": 16,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202026-11-12%20through%202026-11-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2026-11-12/2026-11-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-28",
              "fechas_texto": "12 Dec - 28 Dec 2026",
              "noches": 16,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202026-12-12%20through%202026-12-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2026-12-12/2026-12-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-28",
              "fechas_texto": "12 Jan - 28 Jan 2027",
              "noches": 16,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202027-01-12%20through%202027-01-28&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2027-01-12/2027-01-28?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-21",
              "fechas_texto": "05 May - 21 May 2027",
              "noches": 16,
              "dias_restantes": 180,
              "precio_usd": 934,
              "precio_ars": 1354300,
              "precio_texto": "US$ 934",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20KEF%20from%20EZE%20on%202027-05-05%20through%202027-05-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/kef/2027-05-05/2027-05-21?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "estambul",
    "ciudad": "Estambul",
    "pais": "Turquía",
    "bandera": "🇹🇷",
    "iata": "IST",
    "tipo_ruta": "Puente Europa & Asia",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 1.253",
    "comando_tg": "/estambul",
    "codigo_pais": "tr",
    "resena": "Encrucijada imperial entre dos continentes: mezquitas colosales, Gran Bazar milenario y atardeceres sobre el Bósforo.",
    "vuelos": [
      {
        "puesto": "Top 1 Turkish",
        "aerolinea": "Turkish Airlines",
        "fechas": "10 Mar - 31 Mar 2027",
        "escalas": "Escala técnica en San Pablo (mismo avión)",
        "precio": "US$ 1253 (aprox. $ 1.691.550 ARS)",
        "noches": 21,
        "fecha_ida": "2027-03-10",
        "fecha_vuelta": "2027-03-31",
        "actualizado_en_vivo": true,
        "precio_ars": 1691550,
        "precio_usd": 1253
      },
      {
        "puesto": "Top 2 Qatar Airways",
        "aerolinea": "Qatar Airways",
        "fechas": "27 Abr - 11 May 2027",
        "escalas": "1 escala en Doha (DOH)",
        "precio": "US$ 1297 (aprox. $ 1.750.950 ARS)",
        "noches": 14,
        "fecha_ida": "2027-04-27",
        "fecha_vuelta": "2027-05-11",
        "actualizado_en_vivo": true,
        "precio_ars": 1750950,
        "precio_usd": 1297
      },
      {
        "puesto": "Top 3 Star Alliance",
        "aerolinea": "Lufthansa",
        "fechas": "18 Abr - 24 Abr 2027",
        "escalas": "1 escala en Frankfurt (FRA)",
        "precio": "US$ 1373 (aprox. $ 1.853.550 ARS)",
        "noches": 6,
        "fecha_ida": "2027-04-18",
        "fecha_vuelta": "2027-04-24",
        "actualizado_en_vivo": true,
        "precio_ars": 1853550,
        "precio_usd": 1373
      }
    ],
    "hoteles": [
      {
        "nombre": "Romance Istanbul Hotel",
        "estrellas": "4 estrellas · 9.5 Excepcional",
        "precio_noche": "€ 110 / noche",
        "zona": "Sultanahmet",
        "comentario": "A pasos de Santa Sofía y Topkapi, con piscina cubierta, spa turco tradicional y atención de primer nivel.",
        "precio_noche_eur": 110,
        "precio_noche_usd": 119,
        "precio_noche_ars": 159500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "The Wings Hotel Bosphorus",
        "estrellas": "4 estrellas · 9.2 Fantástico",
        "precio_noche": "€ 125 / noche",
        "zona": "Karaköy",
        "comentario": "Rooftop con vista directa al Bósforo y la Torre Gálata; rodeado de cafés modernos y arte urbano.",
        "precio_noche_eur": 125,
        "precio_noche_usd": 135,
        "precio_noche_ars": 181250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Ada Hotel Istanbul",
        "estrellas": "3 estrellas · 8.9 Fabuloso",
        "precio_noche": "€ 75 / noche",
        "zona": "Sultanahmet Centro",
        "comentario": "Terraza panorámica a la Mezquita Azul y al mar de Mármara; excelente relación precio-calidad.",
        "precio_noche_eur": 75,
        "precio_noche_usd": 81,
        "precio_noche_ars": 108750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "oportunidad",
      "posicion_pct": 35,
      "rango_min": "US$ 1.150",
      "rango_max": "US$ 1.730",
      "mensaje": "Tarifa muy conveniente para volar con servicio premium de Turkish Airlines.",
      "texto_pin": "US$ 1.253 es una tarifa récord baja",
      "consejo": "Turkish Airlines permite stopover gratuito con noche de hotel bonificada en Estambul si combinas con otros destinos.",
      "historial_valores": [
        1554,
        1466,
        1391,
        1316,
        1253
      ],
      "historial_formato": "US$ "
    },
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "25 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-12-01",
      "noches": 12,
      "dias_para_el_vuelo": 26,
      "precio": "US$ 1056",
      "precio_usd": "aprox. $ 1.425.600 ARS",
      "precio_ars": 1425600,
      "precio_usd_num": 1056,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20BUE%20on%202026-11-25%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/estambul/2026-11-25/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "IST",
      "ciudad": "Estambul",
      "actualizado_at": "2026-11-06T09:38:33.192783+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 1056,
              "precio_ars": 1531200,
              "precio_texto": "US$ 1056",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 1109,
              "precio_ars": 1608000,
              "precio_texto": "US$ 1109",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-28",
              "fecha_vuelta": "2027-02-05",
              "fechas_texto": "28 Jan - 05 Feb 2027",
              "noches": 8,
              "dias_restantes": 83,
              "precio_usd": 1687,
              "precio_ars": 2446200,
              "precio_texto": "US$ 1687",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202027-01-28%20through%202027-02-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2027-01-28/2027-02-05?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-01-31",
              "fechas_texto": "24 Jan - 31 Jan 2027",
              "noches": 7,
              "dias_restantes": 79,
              "precio_usd": 1162,
              "precio_ars": 1684900,
              "precio_texto": "US$ 1162",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202027-01-24%20through%202027-01-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2027-01-24/2027-01-31?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-27",
            "fecha_vuelta": "2027-05-11",
            "fechas_texto": "27 Apr - 11 May 2027",
            "noches": 14,
            "dias_restantes": 172,
            "precio_usd": 1297,
            "precio_ars": 1880600,
            "precio_texto": "US$ 1297",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202027-04-27%20through%202027-05-11&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2027-04-27/2027-05-11?affilid=flightbot",
            "aerolinea_gate": "Trip.com",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-19",
              "fechas_texto": "12 Nov - 19 Nov 2026",
              "noches": 7,
              "dias_restantes": 6,
              "precio_usd": 1056,
              "precio_ars": 1531200,
              "precio_texto": "US$ 1056",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202026-11-12%20through%202026-11-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2026-11-12/2026-11-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 1109,
              "precio_ars": 1608000,
              "precio_texto": "US$ 1109",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-28",
              "fecha_vuelta": "2027-02-05",
              "fechas_texto": "28 Jan - 05 Feb 2027",
              "noches": 8,
              "dias_restantes": 83,
              "precio_usd": 1687,
              "precio_ars": 2446200,
              "precio_texto": "US$ 1687",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202027-01-28%20through%202027-02-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2027-01-28/2027-02-05?affilid=flightbot",
              "aerolinea_gate": "City.Travel",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-01-31",
              "fechas_texto": "24 Jan - 31 Jan 2027",
              "noches": 7,
              "dias_restantes": 79,
              "precio_usd": 1162,
              "precio_ars": 1684900,
              "precio_texto": "US$ 1162",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202027-01-24%20through%202027-01-31&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2027-01-24/2027-01-31?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-27",
              "fecha_vuelta": "2027-05-11",
              "fechas_texto": "27 Apr - 11 May 2027",
              "noches": 14,
              "dias_restantes": 172,
              "precio_usd": 1297,
              "precio_ars": 1880600,
              "precio_texto": "US$ 1297",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20IST%20from%20EZE%20on%202027-04-27%20through%202027-05-11&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ist/2027-04-27/2027-05-11?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "dubai",
    "ciudad": "Dubái",
    "pais": "Emiratos Árabes Unidos",
    "bandera": "🇦🇪",
    "iata": "DXB",
    "tipo_ruta": "Medio Oriente & Vanguardia",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 1.280",
    "comando_tg": "/dubai",
    "codigo_pais": "ae",
    "resena": "Metrópolis futurista en el desierto: rascacielos récord, islas en forma de palmera, safaris entre dunas y zocos de especias.",
    "vuelos": [
      {
        "puesto": "Top 1 Emirates",
        "aerolinea": "Emirates",
        "fechas": "05 Dic - 12 Dic 2026",
        "escalas": "Vuelo directo con escala en Río (GIG)",
        "precio": "US$ 1280 (aprox. $ 1.728.000 ARS)",
        "noches": 7,
        "fecha_ida": "2026-12-05",
        "fecha_vuelta": "2026-12-12",
        "actualizado_en_vivo": true,
        "precio_ars": 1728000,
        "precio_usd": 1280
      },
      {
        "puesto": "Top 2 Qatar Airways",
        "aerolinea": "Qatar Airways",
        "fechas": "07 Dic - 11 Dic 2026",
        "escalas": "1 escala en Doha (DOH)",
        "precio": "US$ 1339 (aprox. $ 1.807.650 ARS)",
        "noches": 4,
        "fecha_ida": "2026-12-07",
        "fecha_vuelta": "2026-12-11",
        "actualizado_en_vivo": true,
        "precio_ars": 1807650,
        "precio_usd": 1339
      },
      {
        "puesto": "Top 3 Star Alliance",
        "aerolinea": "Ethiopian Airlines",
        "fechas": "30 Abr - 09 May 2027",
        "escalas": "1 escala en Adís Abeba (ADD)",
        "precio": "US$ 1364 (aprox. $ 1.841.400 ARS)",
        "noches": 9,
        "fecha_ida": "2027-04-30",
        "fecha_vuelta": "2027-05-09",
        "actualizado_en_vivo": true,
        "precio_ars": 1841400,
        "precio_usd": 1364
      }
    ],
    "hoteles": [
      {
        "nombre": "Rove Downtown",
        "estrellas": "3 estrellas · 9.2 Fantástico",
        "precio_noche": "US$ 95 / noche",
        "zona": "Downtown Dubai",
        "comentario": "Piscina infinita con vistas frontales directas al Burj Khalifa; a 5 minutos a pie de Dubai Mall.",
        "precio_noche_usd": 95,
        "precio_noche_ars": 128250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Millennium Place Dubai Marina",
        "estrellas": "4 estrellas · 9.0 Fantástico",
        "precio_noche": "US$ 130 / noche",
        "zona": "Dubai Marina",
        "comentario": "Junto al paseo marítimo de la Marina y la estación de metro; excelente conectividad y restaurantes.",
        "precio_noche_usd": 130,
        "precio_noche_ars": 175500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Aloft Palm Jumeirah",
        "estrellas": "4 estrellas · 8.8 Fabuloso",
        "precio_noche": "US$ 145 / noche",
        "zona": "The Palm Jumeirah",
        "comentario": "Sobre el arco exterior de The Palm con acceso a playa privada, terraza lounge y vistas al golfo.",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "oportunidad",
      "posicion_pct": 38,
      "rango_min": "US$ 1.180",
      "rango_max": "US$ 1.770",
      "mensaje": "Tarifa muy competitiva para viajar al hub más moderno de Oriente Medio.",
      "texto_pin": "US$ 1.280 es una tarifa récord baja",
      "consejo": "Ideal para combinar con Abu Dhabi en tren o tour de día completo a solo 1h de viaje.",
      "historial_valores": [
        1587,
        1498,
        1421,
        1344,
        1280
      ],
      "historial_formato": "US$ "
    },
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 28 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "27 Nov - 04 Dic 2026",
      "fecha_ida": "2026-11-27",
      "fecha_vuelta": "2026-12-04",
      "noches": 12,
      "dias_para_el_vuelo": 28,
      "precio": "US$ 1060",
      "precio_usd": "aprox. $ 1.431.000 ARS",
      "precio_ars": 1431000,
      "precio_usd_num": 1060,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20BUE%20on%202026-11-27%20through%202026-12-04&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dubai/2026-11-27/2026-12-04?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "DXB",
      "ciudad": "Dubái",
      "actualizado_at": "2026-11-06T09:38:33.435968+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1060,
              "precio_ars": 1537000,
              "precio_texto": "US$ 1060",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-23",
              "fechas_texto": "09 Dec - 23 Dec 2026",
              "noches": 14,
              "dias_restantes": 33,
              "precio_usd": 1491,
              "precio_ars": 2162000,
              "precio_texto": "US$ 1491",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202026-12-09%20through%202026-12-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2026-12-09/2026-12-23?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "21 Dec - 05 Jan 2027",
              "noches": 15,
              "dias_restantes": 45,
              "precio_usd": 1113,
              "precio_ars": 1613800,
              "precio_texto": "US$ 1113",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202026-12-21%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2026-12-21/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-26",
              "fecha_vuelta": "2027-02-09",
              "fechas_texto": "26 Jan - 09 Feb 2027",
              "noches": 14,
              "dias_restantes": 81,
              "precio_usd": 1547,
              "precio_ars": 2243200,
              "precio_texto": "US$ 1547",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202027-01-26%20through%202027-02-09&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2027-01-26/2027-02-09?affilid=flightbot",
              "aerolinea_gate": "Т-Банк",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-02-08",
              "fechas_texto": "24 Jan - 08 Feb 2027",
              "noches": 15,
              "dias_restantes": 79,
              "precio_usd": 1166,
              "precio_ars": 1690700,
              "precio_texto": "US$ 1166",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202027-01-24%20through%202027-02-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2027-01-24/2027-02-08?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 1007,
            "precio_ars": 1460200,
            "precio_texto": "US$ 1007",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1060,
              "precio_ars": 1537000,
              "precio_texto": "US$ 1060",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-23",
              "fechas_texto": "09 Dec - 23 Dec 2026",
              "noches": 14,
              "dias_restantes": 33,
              "precio_usd": 1491,
              "precio_ars": 2162000,
              "precio_texto": "US$ 1491",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202026-12-09%20through%202026-12-23&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2026-12-09/2026-12-23?affilid=flightbot",
              "aerolinea_gate": "Gotogate",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "21 Dec - 05 Jan 2027",
              "noches": 15,
              "dias_restantes": 45,
              "precio_usd": 1113,
              "precio_ars": 1613800,
              "precio_texto": "US$ 1113",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202026-12-21%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2026-12-21/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-26",
              "fecha_vuelta": "2027-02-09",
              "fechas_texto": "26 Jan - 09 Feb 2027",
              "noches": 14,
              "dias_restantes": 81,
              "precio_usd": 1547,
              "precio_ars": 2243200,
              "precio_texto": "US$ 1547",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202027-01-26%20through%202027-02-09&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2027-01-26/2027-02-09?affilid=flightbot",
              "aerolinea_gate": "Т-Банк",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2027-01-24",
              "fecha_vuelta": "2027-02-08",
              "fechas_texto": "24 Jan - 08 Feb 2027",
              "noches": 15,
              "dias_restantes": 79,
              "precio_usd": 1166,
              "precio_ars": 1690700,
              "precio_texto": "US$ 1166",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202027-01-24%20through%202027-02-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2027-01-24/2027-02-08?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 1007,
              "precio_ars": 1460200,
              "precio_texto": "US$ 1007",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20DXB%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/dxb/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "maldivas",
    "ciudad": "Islas Maldivas & Atolones de Coral",
    "pais": "Maldivas",
    "bandera": "🏝️",
    "iata": "MLE",
    "tipo_ruta": "Océano Índico & Luna de Miel",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "codigo_pais": "mv",
    "precio_desde": "US$ 750",
    "comando_tg": "/maldivas",
    "resena": "El paraíso definitivo en el Océano Índico: 1.200 islas coralinas con villas sobre el agua en lagunas turquesas cristalinas, arrecifes con mantarrayas y tiburones ballena, e islas locales accesibles.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Qatar Airways / Emirates",
        "escalas": "2 escalas (GRU + DOH / DXB)",
        "fechas": "05 Mar - 21 Mar 2027",
        "fecha_ida": "2027-03-05",
        "fecha_vuelta": "2027-03-21",
        "noches": 16,
        "precio": "US$ 750 (aprox. $ 1.012.500 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 750,
        "precio_ars": 1012500
      },
      {
        "puesto": "🥈",
        "aerolinea": "Turkish Airlines",
        "escalas": "1 escala en ruta (IST c/ parada técnica GRU)",
        "fechas": "10 Abr - 26 Abr 2027",
        "fecha_ida": "2027-04-10",
        "fecha_vuelta": "2027-04-26",
        "noches": 16,
        "precio": "US$ 788 (aprox. $ 1.063.800 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 788,
        "precio_ars": 1063800
      },
      {
        "puesto": "🥉",
        "aerolinea": "Emirates",
        "escalas": "1 conexión en Dubái (EZE ➔ DXB ➔ MLE)",
        "fechas": "08 May - 24 May 2027",
        "fecha_ida": "2027-05-08",
        "fecha_vuelta": "2027-05-24",
        "noches": 16,
        "precio": "US$ 833 (aprox. $ 1.124.550 ARS)",
        "destacado": "Servicio a bordo",
        "actualizado_en_vivo": true,
        "precio_usd": 833,
        "precio_ars": 1124550
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Soneva Jani Overwater Villas",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.7",
        "calificacion": "Excepcional (410 reseñas)",
        "zona": "Atolón Noonu (Laguna Privada de 5 km)",
        "precio_noche": "US$ 680 / noche",
        "precio_noche_usd": 680,
        "precio_noche_ars": 918000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Célebres villas sobre pilotes con techo retráctil para dormir mirando las estrellas y tobogán directo a la laguna turquesa.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Maldives+Overwater+Resort"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Kuramathi Maldives Resort",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (1.890 reseñas)",
        "zona": "Atolón Rasdhoo (Con banco de arena infinito)",
        "precio_noche": "US$ 295 / noche",
        "precio_noche_usd": 295,
        "precio_noche_ars": 398250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Isla privada con arrecife de coral propio, villas sobre el agua y un famoso banco de arena virgen al atardecer.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Kuramathi+Maldives"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Kaani Palm Beach at Maafushi",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Fabuloso (2.340 reseñas)",
        "zona": "Isla de Maafushi (Atolón Malé Sur · Lancha pública $2)",
        "precio_noche": "US$ 115 / noche",
        "precio_noche_usd": 115,
        "precio_noche_ars": 155250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Frente a Bikini Beach en Maafushi con piscina infinita en la azotea: el secreto para disfrutar Maldivas a una fracción del costo de un resort privado.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Kaani+Palm+Beach+Maafushi+Maldives"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "US$ 690",
      "rango_max": "US$ 1.040",
      "mensaje": "¡Tarifa competitiva al Océano Índico! Ideal combinando con stopover en Dubái o Estambul.",
      "texto_pin": "US$ 750 es una tarifa récord baja",
      "consejo": "Combinar 4 noches en una isla local como Maafushi o Dhigurah y 3 noches en un resort sobre el agua reduce el presupuesto total a la mitad.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        930,
        878,
        833,
        788,
        750
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "MLE",
      "ciudad": "Islas Maldivas & Atolones de Coral",
      "actualizado_at": "2026-11-06T09:38:33.685879+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-25",
            "fechas_texto": "05 May - 25 May 2027",
            "noches": 20,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2027-05-05/2027-05-25?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-25",
              "fechas_texto": "05 May - 25 May 2027",
              "noches": 20,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20MLE%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/mle/2027-05-05/2027-05-25?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "bangkok",
    "ciudad": "Bangkok",
    "pais": "Tailandia",
    "bandera": "🇹🇭",
    "iata": "BKK",
    "tipo_ruta": "Sudeste Asiático & Templos",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 1.661",
    "comando_tg": "/bangkok",
    "codigo_pais": "th",
    "resena": "La Ciudad de los Ángeles: templos dorados sobre el río Chao Phraya, mercados flotantes y meca culinaria callejera.",
    "vuelos": [
      {
        "puesto": "Top 1 Emirates",
        "aerolinea": "Emirates",
        "fechas": "05 Abr - 19 Abr 2027",
        "escalas": "1 escala en Dubái (DXB)",
        "precio": "US$ 1661 (aprox. $ 2.242.350 ARS)",
        "noches": 14,
        "fecha_ida": "2027-04-05",
        "fecha_vuelta": "2027-04-19",
        "actualizado_en_vivo": true,
        "precio_ars": 2242350,
        "precio_usd": 1661
      },
      {
        "puesto": "Top 2 Qatar Airways",
        "aerolinea": "Qatar Airways",
        "fechas": "12 Abr - 26 Abr 2027",
        "escalas": "1 escala en Doha (DOH)",
        "precio": "US$ 1761 (aprox. $ 2.377.350 ARS)",
        "noches": 14,
        "fecha_ida": "2027-04-12",
        "fecha_vuelta": "2027-04-26",
        "actualizado_en_vivo": true,
        "precio_ars": 2377350,
        "precio_usd": 1761
      },
      {
        "puesto": "Top 3 Turkish",
        "aerolinea": "Turkish Airlines",
        "fechas": "19 Abr - 03 May 2027",
        "escalas": "1 escala en Estambul (IST)",
        "precio": "US$ 1894 (aprox. $ 2.556.900 ARS)",
        "noches": 14,
        "fecha_ida": "2027-04-19",
        "fecha_vuelta": "2027-05-03",
        "actualizado_en_vivo": true,
        "precio_ars": 2556900,
        "precio_usd": 1894
      }
    ],
    "hoteles": [
      {
        "nombre": "Riva Surya Bangkok",
        "estrellas": "4 estrellas · 9.2 Fantástico",
        "precio_noche": "US$ 85 / noche",
        "zona": "Riverside / Chao Phraya",
        "comentario": "Piscina sobre el río, habitaciones con balcón al agua y a minutos a pie del Gran Palacio Real.",
        "precio_noche_usd": 85,
        "precio_noche_ars": 114750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Eastin Grand Hotel Sathorn",
        "estrellas": "5 estrellas · 9.4 Excepcional",
        "precio_noche": "US$ 115 / noche",
        "zona": "Sathorn / Silom",
        "comentario": "Pasarela privada directa a la estación del Skytrain BTS, piscina infinita en piso 14 y gastronomía estelar.",
        "precio_noche_usd": 115,
        "precio_noche_ars": 155250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "nombre": "Lub d Bangkok Siam",
        "estrellas": "3 estrellas · 9.0 Fantástico",
        "precio_noche": "US$ 45 / noche",
        "zona": "Siam / MBK",
        "comentario": "Frente al Skytrain National Stadium; perfecto para compras, museos y viajeros jóvenes.",
        "precio_noche_usd": 45,
        "precio_noche_ars": 60750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "oportunidad",
      "posicion_pct": 36,
      "rango_min": "US$ 1.530",
      "rango_max": "US$ 2.290",
      "mensaje": "Gran tarifa para cruzar el planeta hacia la capital tailandesa.",
      "texto_pin": "US$ 1.661 es una tarifa récord baja",
      "consejo": "Una vez en Bangkok, los vuelos domésticos a Phuket, Chiang Mai o Krabi cuestan desde US$ 30.",
      "historial_valores": [
        2060,
        1943,
        1844,
        1744,
        1661
      ],
      "historial_formato": "US$ "
    },
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 30 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "29 Nov - 06 Dic 2026",
      "fecha_ida": "2026-11-29",
      "fecha_vuelta": "2026-12-06",
      "noches": 12,
      "dias_para_el_vuelo": 30,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20BUE%20on%202026-11-29%20through%202026-12-06&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bangkok/2026-11-29/2026-12-06?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "BKK",
      "ciudad": "Bangkok",
      "actualizado_at": "2026-11-06T09:38:33.956264+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Abr 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-04-19",
            "fecha_vuelta": "2027-05-08",
            "fechas_texto": "19 Apr - 08 May 2027",
            "noches": 19,
            "dias_restantes": 164,
            "precio_usd": 1716,
            "precio_ars": 2488200,
            "precio_texto": "US$ 1716",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202027-04-19%20through%202027-05-08&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2027-04-19/2027-05-08?affilid=flightbot",
            "aerolinea_gate": "Vayama",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Abr 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-04-19",
              "fecha_vuelta": "2027-05-08",
              "fechas_texto": "19 Apr - 08 May 2027",
              "noches": 19,
              "dias_restantes": 164,
              "precio_usd": 1716,
              "precio_ars": 2488200,
              "precio_texto": "US$ 1716",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20BKK%20from%20EZE%20on%202027-04-19%20through%202027-05-08&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/bkk/2027-04-19/2027-05-08?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "tokio",
    "ciudad": "Tokio (Narita / Haneda)",
    "pais": "Japón",
    "bandera": "🇯🇵",
    "iata": "NRT",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 1.825",
    "comando_tg": "/tokio",
    "resena": "La megalópolis más cautivante de Asia: contraste entre templos sintoístas de Asakusa y rascacielos de Shinjuku, cruce de Shibuya y tren bala Shinkansen a Kioto.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "United Airlines",
        "escalas": "1 escala técnica (USA)",
        "fechas": "02 Mar - 09 Mar 2027",
        "noches": 7,
        "precio": "US$ 1825 (aprox. $ 2.463.750 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-03-02",
        "fecha_vuelta": "2027-03-09",
        "actualizado_en_vivo": true,
        "precio_ars": 2463750,
        "precio_usd": 1825
      },
      {
        "puesto": "🥈",
        "aerolinea": "ANA / Turkish",
        "escalas": "1 escala (IST)",
        "fechas": "09 Mar - 16 Mar 2027",
        "noches": 7,
        "precio": "US$ 1934 (aprox. $ 2.610.900 ARS)",
        "destacado": "No requiere visa de EE.UU.",
        "fecha_ida": "2027-03-09",
        "fecha_vuelta": "2027-03-16",
        "actualizado_en_vivo": true,
        "precio_ars": 2610900,
        "precio_usd": 1934
      },
      {
        "puesto": "🥉",
        "aerolinea": "Ethiopian Airlines",
        "escalas": "Conexión ADD / NRT",
        "fechas": "16 Mar - 23 Mar 2027",
        "noches": 7,
        "precio": "US$ 2080 (aprox. $ 2.808.000 ARS)",
        "destacado": "2 valijas de 23 kg incluidas",
        "fecha_ida": "2027-03-16",
        "fecha_vuelta": "2027-03-23",
        "actualizado_en_vivo": true,
        "precio_ars": 2808000,
        "precio_usd": 2080
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Aman Tokyo",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (1.400 reseñas)",
        "zona": "Otemachi / Torre Otemachi",
        "precio_noche": "US$ 950 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Santuario urbano de arquitectura zen con vistas panorámicas al Palacio Imperial y al Monte Fuji, piscina de piedra negra de 30 metros.",
        "booking_url": "https://www.booking.com/hotel/jp/aman-tokyo.es.html",
        "precio_noche_usd": 950,
        "precio_noche_ars": 1282500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Park Hyatt Tokyo",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Fantástico (2.800 reseñas)",
        "zona": "Shinjuku Park Tower",
        "precio_noche": "US$ 480 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El legendario hotel de 'Lost in Translation', New York Bar en el piso 52 con jazz en vivo y horizonte infinito de Tokio.",
        "booking_url": "https://www.booking.com/hotel/jp/park-hyatt-tokyo.es.html",
        "precio_noche_usd": 480,
        "precio_noche_ars": 648000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Cerulean Tower Tokyu Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (3.600 reseñas)",
        "zona": "Shibuya (a 5 min del Cruce)",
        "precio_noche": "US$ 210 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Habitaciones espaciosas a partir del piso 19 con vistas al cruce de Shibuya, servicio impecable y acceso directo al tren Narita Express.",
        "booking_url": "https://www.booking.com/hotel/jp/cerulean-tower-tokyu.es.html",
        "precio_noche_usd": 210,
        "precio_noche_ars": 283500,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 36,
      "rango_min": "US$ 1.680",
      "rango_max": "US$ 2.520",
      "mensaje": "Tarifa muy competitiva para viajar al corazón de Japón.",
      "texto_pin": "US$ 1.825 es una tarifa récord baja",
      "consejo": "Para viajeros sin visa estadounidense, Turkish o Ethiopian vía África/Europa son las alternativas directas más buscadas.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        2263,
        2135,
        2026,
        1916,
        1825
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "jp",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 33 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "02 Dic - 09 Dic 2026",
      "fecha_ida": "2026-12-02",
      "fecha_vuelta": "2026-12-09",
      "noches": 12,
      "dias_para_el_vuelo": 33,
      "precio": "US$ 983",
      "precio_usd": "aprox. $ 1.327.050 ARS",
      "precio_ars": 1327050,
      "precio_usd_num": 983,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20BUE%20on%202026-12-02%20through%202026-12-09&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/tokio/2026-12-02/2026-12-09?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "NRT",
      "ciudad": "Tokio (Narita / Haneda)",
      "actualizado_at": "2026-11-06T09:38:34.203936+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (Jun 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-06-29",
            "fecha_vuelta": "2027-07-18",
            "fechas_texto": "29 Jun - 18 Jul 2027",
            "noches": 19,
            "dias_restantes": 235,
            "precio_usd": 2003,
            "precio_ars": 2904400,
            "precio_texto": "US$ 2003",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202027-06-29%20through%202027-07-18&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2027-06-29/2027-07-18?affilid=flightbot",
            "aerolinea_gate": "Vayama",
            "es_real_aviasales": true
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 983,
              "precio_ars": 1425400,
              "precio_texto": "US$ 983",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 1032,
              "precio_ars": 1496400,
              "precio_texto": "US$ 1032",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 1081,
              "precio_ars": 1567400,
              "precio_texto": "US$ 1081",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (Jun 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-06-29",
              "fecha_vuelta": "2027-07-18",
              "fechas_texto": "29 Jun - 18 Jul 2027",
              "noches": 19,
              "dias_restantes": 235,
              "precio_usd": 2003,
              "precio_ars": 2904400,
              "precio_texto": "US$ 2003",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20NRT%20from%20EZE%20on%202027-06-29%20through%202027-07-18&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/nrt/2027-06-29/2027-07-18?affilid=flightbot",
              "aerolinea_gate": "Vayama",
              "es_real_aviasales": true
            }
          ]
        }
      }
    }
  },
  {
    "id": "seul",
    "ciudad": "Seúl, Palacios Joseon & Isla de Jeju",
    "pais": "Corea del Sur",
    "bandera": "🏮",
    "iata": "ICN",
    "tipo_ruta": "Asia Oriental & Vanguardia Tecnológica",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "codigo_pais": "kr",
    "precio_desde": "US$ 750",
    "comando_tg": "/seul",
    "resena": "El epicentro de la vanguardia tecnológica y la cultura Hallyu: los Cinco Grandes Palacios de la dinastía Joseon junto a rascacielos futuristas, aldeas hanok en Bukchon y el street food nocturno de Myeongdong.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "United / American",
        "escalas": "1 escala (IAH / DFW)",
        "fechas": "06 Abr - 24 Abr 2027",
        "fecha_ida": "2027-04-06",
        "fecha_vuelta": "2027-04-24",
        "noches": 18,
        "precio": "US$ 750 (aprox. $ 1.012.500 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 750,
        "precio_ars": 1012500
      },
      {
        "puesto": "🥈",
        "aerolinea": "Turkish Airlines / Emirates",
        "escalas": "Sin visa EE.UU. (vía IST / DXB)",
        "fechas": "04 May - 22 May 2027",
        "fecha_ida": "2027-05-04",
        "fecha_vuelta": "2027-05-22",
        "noches": 18,
        "precio": "US$ 788 (aprox. $ 1.063.800 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 788,
        "precio_ars": 1063800
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air France / KLM",
        "escalas": "1 escala europea (CDG / AMS)",
        "fechas": "12 Sep - 30 Sep 2027",
        "fecha_ida": "2027-09-12",
        "fecha_vuelta": "2027-09-30",
        "noches": 18,
        "precio": "US$ 833 (aprox. $ 1.124.550 ARS)",
        "destacado": "Servicio a bordo",
        "actualizado_en_vivo": true,
        "precio_usd": 833,
        "precio_ars": 1124550
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Signiel Seoul (Lotte World Tower)",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (1.240 reseñas)",
        "zona": "Jamsil / Gangnam (Pisos 76 al 101 del rascacielos más alto)",
        "precio_noche": "US$ 390 / noche",
        "precio_noche_usd": 390,
        "precio_noche_ars": 526500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El hotel más alto de Corea en los pisos superiores de la Lotte World Tower, con vistas de 360 grados a todo Seúl y al río Han.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Signiel+Seoul"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Lotte Hotel Seoul Main Tower",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.890 reseñas)",
        "zona": "Myeongdong / Jung-gu (Conexión directa al Metro Euljiro 1-ga)",
        "precio_noche": "US$ 195 / noche",
        "precio_noche_usd": 195,
        "precio_noche_ars": 263250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "En el corazón comercial de Myeongdong, a pasos del Palacio Deoksugung y de las calles de gastronomía nocturna.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Lotte+Hotel+Seoul"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "L7 Hongdae by LOTTE",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Fabuloso (3.410 reseñas)",
        "zona": "Hongdae (Línea directa AREX desde el Aeropuerto Incheon)",
        "precio_noche": "US$ 110 / noche",
        "precio_noche_usd": 110,
        "precio_noche_ars": 148500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Hotel moderno con piscina en el rooftop en pleno barrio joven de Hongdae, a 1 minuto de la estación del tren directo al aeropuerto.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=L7+Hongdae+Seoul"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 24,
      "rango_min": "US$ 690",
      "rango_max": "US$ 1.040",
      "mensaje": "¡Tarifa competitiva a Corea del Sur! Ideal para primavera (cerezos) u otoño.",
      "texto_pin": "US$ 750 es una tarifa récord baja",
      "consejo": "Si alquilás un traje tradicional Hanbok (~US$ 12), la entrada a los 5 Palacios Reales de Seúl es 100% gratuita.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        930,
        878,
        833,
        788,
        750
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "ICN",
      "ciudad": "Seúl, Palacios Joseon & Isla de Jeju",
      "actualizado_at": "2026-11-06T09:38:34.451774+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-25",
            "fechas_texto": "05 May - 25 May 2027",
            "noches": 20,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2027-05-05/2027-05-25?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-25",
              "fechas_texto": "05 May - 25 May 2027",
              "noches": 20,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20ICN%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/icn/2027-05-05/2027-05-25?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "pekin",
    "ciudad": "Pekín (Ciudad Prohibida & Gran Muralla)",
    "pais": "China",
    "bandera": "🇨🇳",
    "iata": "PEK / PKX",
    "tipo_ruta": "Intercontinental 1 Escala",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 1.759",
    "comando_tg": "/pekin",
    "resena": "Capital imperial de China: la magnificencia de la Ciudad Prohibida, el ascenso a la Gran Muralla en Mutianyu, el místico Templo del Cielo y los tradicionales callejones hutong.",
    "vuelos": [
      {
        "puesto": "Top 1",
        "aerolinea": "Emirates (1 Escala DXB)",
        "escalas": "1 escala en Dubái (26h 40m)",
        "fechas": "27 Nov - 11 Dic 2026",
        "noches": 14,
        "precio": "US$ 1759 (aprox. $ 2.374.650 ARS)",
        "destacado": true,
        "fecha_ida": "2026-11-27",
        "fecha_vuelta": "2026-12-11",
        "actualizado_en_vivo": true,
        "precio_ars": 2374650,
        "precio_usd": 1759
      },
      {
        "puesto": "Top 2",
        "aerolinea": "Qatar Airways (1 Escala DOH)",
        "escalas": "1 escala en Doha (27h 15m)",
        "fechas": "24 Nov - 07 Dic 2026",
        "noches": 13,
        "precio": "US$ 1763 (aprox. $ 2.380.050 ARS)",
        "destacado": false,
        "fecha_ida": "2026-11-24",
        "fecha_vuelta": "2026-12-07",
        "actualizado_en_vivo": true,
        "precio_ars": 2380050,
        "precio_usd": 1763
      },
      {
        "puesto": "Top 3",
        "aerolinea": "Air France / KLM (1 Escala CDG/AMS)",
        "escalas": "1 escala en París (28h 20m)",
        "fechas": "08 Feb - 22 Feb 2027",
        "noches": 14,
        "precio": "US$ 1776 (aprox. $ 2.397.600 ARS)",
        "destacado": false,
        "fecha_ida": "2027-02-08",
        "fecha_vuelta": "2027-02-22",
        "actualizado_en_vivo": true,
        "precio_ars": 2397600,
        "precio_usd": 1776
      }
    ],
    "hoteles": [
      {
        "categoria": "Económico Inteligente",
        "badge": "Calidad - Precio",
        "nombre": "The Orchid Hotel Beijing",
        "estrellas": 4,
        "puntuacion": 9.3,
        "calificacion": "Excepcional",
        "zona": "Gulou / Hutongs históricos",
        "precio_noche": "US$ 75 / noche",
        "foto": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
        "descripcion": "Boutique encantador en un auténtico Siheyuan tradicional entre los hutongs de Gulou, con terraza con vista a la Torre del Tambor.",
        "booking_url": "https://www.booking.com/hotel/cn/the-orchid.html",
        "precio_noche_usd": 75,
        "precio_noche_ars": 101250,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "Recomendado",
        "badge": "Mejor Ubicación",
        "nombre": "Regent Beijing",
        "estrellas": 5,
        "puntuacion": 9.0,
        "calificacion": "Maravilloso",
        "zona": "Wangfujing / Jinbao Street",
        "precio_noche": "US$ 145 / noche",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
        "descripcion": "Confort contemporáneo y elegancia a 15 minutos a pie de la Ciudad Prohibida, con spa y metro directo.",
        "booking_url": "https://www.booking.com/hotel/cn/the-regent-beijing.html",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "Alta Gama",
        "badge": "Lujo Imperial",
        "nombre": "The Peninsula Beijing",
        "estrellas": 5,
        "puntuacion": 9.5,
        "calificacion": "Excepcional",
        "zona": "Wangfujing histórico",
        "precio_noche": "US$ 310 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=600&q=80",
        "descripcion": "El pináculo de la hospitalidad imperial china: suites de gran escala, servicio de té de alta alcurnia y flota de Rolls-Royce.",
        "booking_url": "https://www.booking.com/hotel/cn/the-peninsula-beijing.html",
        "precio_noche_usd": 310,
        "precio_noche_ars": 418500,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "Precio Habitual",
      "posicion_pct": 30,
      "rango_min": "US$ 1.620",
      "rango_max": "US$ 2.430",
      "mensaje": "Tarifa destacada para volar a la capital imperial china en aerolíneas de servicio completo.",
      "texto_pin": "US$ 1.759 es una tarifa récord baja",
      "consejo": "Para viajes de larga distancia a China conviene reservar con al menos 60 a 90 días de anticipación y tramitar el visado o verificar el tránsito sin visa de 144 horas.",
      "historial_dias": [
        "Hace 20d",
        "Hace 15d",
        "Hace 10d",
        "Hace 5d",
        "Hoy"
      ],
      "historial_valores": [
        2181,
        2058,
        1952,
        1847,
        1759
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "cn",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 38 días · Tarifa récord más baja detectada",
      "aerolinea": "Emirates / Air China",
      "escalas": "1 escala en hub internacional",
      "fechas": "08 Dic - 22 Dic 2026",
      "fecha_ida": "2026-12-08",
      "fecha_vuelta": "2026-12-22",
      "noches": 14,
      "dias_para_el_vuelo": 38,
      "precio": "US$ 995",
      "precio_usd": "aprox. $ 1.343.250 ARS",
      "precio_ars": 1343250,
      "precio_usd_num": 995,
      "ahorro_porcentaje": "25% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK%20from%20BUE%20on%202026-12-08%20through%202026-12-22&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/beijing/2026-12-08/2026-12-22?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "PEK / PKX",
      "ciudad": "Pekín (Ciudad Prohibida & Gran Muralla)",
      "actualizado_at": "2026-11-06T09:38:34.685824+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-07",
              "fechas_texto": "24 Nov - 07 Dec 2026",
              "noches": 13,
              "dias_restantes": 18,
              "precio_usd": 1763,
              "precio_ars": 2556400,
              "precio_texto": "US$ 1763",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202026-11-24%20through%202026-12-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2026-11-24/2026-12-07?affilid=flightbot",
              "aerolinea_gate": "Biletix",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 995,
              "precio_ars": 1442800,
              "precio_texto": "US$ 995",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "21% OFF",
          "ahorro_pct_num": 21,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 1045,
              "precio_ars": 1515200,
              "precio_texto": "US$ 1045",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 1094,
              "precio_ars": 1586300,
              "precio_texto": "US$ 1094",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "23% OFF",
        "ahorro_pct_num": 23,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-12",
            "fechas_texto": "05 May - 12 May 2027",
            "noches": 7,
            "dias_restantes": 180,
            "precio_usd": 945,
            "precio_ars": 1370200,
            "precio_texto": "US$ 945",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2027-05-05/2027-05-12?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "25% OFF",
          "ahorro_pct_num": 25,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-07",
              "fechas_texto": "24 Nov - 07 Dec 2026",
              "noches": 13,
              "dias_restantes": 18,
              "precio_usd": 1763,
              "precio_ars": 2556400,
              "precio_texto": "US$ 1763",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202026-11-24%20through%202026-12-07&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2026-11-24/2026-12-07?affilid=flightbot",
              "aerolinea_gate": "Biletix",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-11-24",
              "fecha_vuelta": "2026-12-01",
              "fechas_texto": "24 Nov - 01 Dec 2026",
              "noches": 7,
              "dias_restantes": 18,
              "precio_usd": 995,
              "precio_ars": 1442800,
              "precio_texto": "US$ 995",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202026-11-24%20through%202026-12-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2026-11-24/2026-12-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "21% OFF",
          "ahorro_pct_num": 21,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-19",
              "fechas_texto": "12 Dec - 19 Dec 2026",
              "noches": 7,
              "dias_restantes": 36,
              "precio_usd": 1045,
              "precio_ars": 1515200,
              "precio_texto": "US$ 1045",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202026-12-12%20through%202026-12-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2026-12-12/2026-12-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "12 Jan - 19 Jan 2027",
              "noches": 7,
              "dias_restantes": 67,
              "precio_usd": 1094,
              "precio_ars": 1586300,
              "precio_texto": "US$ 1094",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202027-01-12%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2027-01-12/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "23% OFF",
          "ahorro_pct_num": 23,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-12",
              "fechas_texto": "05 May - 12 May 2027",
              "noches": 7,
              "dias_restantes": 180,
              "precio_usd": 945,
              "precio_ars": 1370200,
              "precio_texto": "US$ 945",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PEK / PKX%20from%20EZE%20on%202027-05-05%20through%202027-05-12&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/pek / pkx/2027-05-05/2027-05-12?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "sydney",
    "ciudad": "Sídney, Melbourne & Gran Barrera de Coral",
    "pais": "Australia",
    "bandera": "🦘",
    "iata": "SYD",
    "tipo_ruta": "Oceanía & Ruta Transpacífica",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "codigo_pais": "au",
    "precio_desde": "US$ 750",
    "comando_tg": "/sydney",
    "resena": "La joya cosmopolita del Pacífico Sur: las velas blancas de la Ópera de Sídney sobre la bahía más hermosa del planeta, el surf en Bondi Beach, los callejones cafeteros de Melbourne y las Montañas Azules.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala transpacífica (SCL)",
        "fechas": "06 Abr - 26 Abr 2027",
        "fecha_ida": "2027-04-06",
        "fecha_vuelta": "2027-04-26",
        "noches": 20,
        "precio": "US$ 750 (aprox. $ 1.012.500 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 750,
        "precio_ars": 1012500
      },
      {
        "puesto": "🥈",
        "aerolinea": "Qantas / LATAM",
        "escalas": "1 escala rápida (SCL)",
        "fechas": "10 May - 30 May 2027",
        "fecha_ida": "2027-05-10",
        "fecha_vuelta": "2027-05-30",
        "noches": 20,
        "precio": "US$ 788 (aprox. $ 1.063.800 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 788,
        "precio_ars": 1063800
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air New Zealand",
        "escalas": "Vía Santiago / Auckland",
        "fechas": "08 Sep - 28 Sep 2027",
        "fecha_ida": "2027-09-08",
        "fecha_vuelta": "2027-09-28",
        "noches": 20,
        "precio": "US$ 833 (aprox. $ 1.124.550 ARS)",
        "destacado": "Servicio a bordo",
        "actualizado_en_vivo": true,
        "precio_usd": 833,
        "precio_ars": 1124550
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Park Hyatt Sydney",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (680 reseñas)",
        "zona": "The Rocks (Frente a la Ópera de Sídney y Harbour Bridge)",
        "precio_noche": "US$ 490 / noche",
        "precio_noche_usd": 490,
        "precio_noche_ars": 661500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Ubicado literalmente sobre el agua en The Rocks, con vistas privadas directas a la Ópera de Sídney desde los balcones y la piscina.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Park+Hyatt+Sydney"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Four Seasons Hotel Sydney",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (3.450 reseñas)",
        "zona": "Circular Quay / The Rocks",
        "precio_noche": "US$ 235 / noche",
        "precio_noche_usd": 235,
        "precio_noche_ars": 317250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "A 2 minutos a pie de las terminales de ferries de Circular Quay hacia Manly Beach y Taronga Zoo, con gran piscina climatizada.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Four+Seasons+Hotel+Sydney"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Little National Hotel Sydney",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.780 reseñas)",
        "zona": "Wynyard / CBD (Acceso directo al tren del aeropuerto)",
        "precio_noche": "US$ 135 / noche",
        "precio_noche_usd": 135,
        "precio_noche_ars": 182250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño inteligente de lujo accesible sobre la estación Wynyard, a 10 minutos caminando de Barangaroo y Circular Quay.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Little+National+Hotel+Sydney"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "US$ 690",
      "rango_max": "US$ 1.040",
      "mensaje": "¡Tarifa transpacífica de oportunidad! La ruta vía Santiago es la más corta del mundo.",
      "texto_pin": "US$ 750 es una tarifa récord baja",
      "consejo": "Volar vía Santiago de Chile (SCL) con LATAM o Qantas ahorra más de 10 horas de vuelo frente a las rutas por EE.UU. o Medio Oriente.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        930,
        878,
        833,
        788,
        750
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "SYD",
      "ciudad": "Sídney, Melbourne & Gran Barrera de Coral",
      "actualizado_at": "2026-11-06T09:38:34.930561+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-20",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "20 Dec - 16 Jan 2027",
              "noches": 27,
              "dias_restantes": 44,
              "precio_usd": 2036,
              "precio_ars": 2952200,
              "precio_texto": "US$ 2036",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202026-12-20%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2026-12-20/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-25",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "25 Dec - 19 Jan 2027",
              "noches": 25,
              "dias_restantes": 49,
              "precio_usd": 2102,
              "precio_ars": 3047900,
              "precio_texto": "US$ 2102",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202026-12-25%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2026-12-25/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Т-Банк",
              "es_real_aviasales": true
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-25",
            "fechas_texto": "05 May - 25 May 2027",
            "noches": 20,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2027-05-05/2027-05-25?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-20",
              "fecha_vuelta": "2027-01-16",
              "fechas_texto": "20 Dec - 16 Jan 2027",
              "noches": 27,
              "dias_restantes": 44,
              "precio_usd": 2036,
              "precio_ars": 2952200,
              "precio_texto": "US$ 2036",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202026-12-20%20through%202027-01-16&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2026-12-20/2027-01-16?affilid=flightbot",
              "aerolinea_gate": "Trip.com",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-25",
              "fecha_vuelta": "2027-01-19",
              "fechas_texto": "25 Dec - 19 Jan 2027",
              "noches": 25,
              "dias_restantes": 49,
              "precio_usd": 2102,
              "precio_ars": 3047900,
              "precio_texto": "US$ 2102",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202026-12-25%20through%202027-01-19&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2026-12-25/2027-01-19?affilid=flightbot",
              "aerolinea_gate": "Т-Банк",
              "es_real_aviasales": true
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-25",
              "fechas_texto": "05 May - 25 May 2027",
              "noches": 20,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20SYD%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/syd/2027-05-05/2027-05-25?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "nuevazelanda",
    "ciudad": "Nueva Zelanda: Auckland, Hobbiton & Queenstown",
    "pais": "Nueva Zelanda",
    "bandera": "🥝",
    "iata": "AKL",
    "tipo_ruta": "Oceanía & Paisajes Épicos",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "codigo_pais": "nz",
    "precio_desde": "US$ 1.195",
    "comando_tg": "/nuevazelanda",
    "resena": "La Tierra Media en la vida real: los fiordos glaciares de Milford Sound, la capital mundial de la aventura en Queenstown, los géiseres maoríes de Rotorua y las colinas verdes de Hobbiton.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "LATAM Airlines",
        "escalas": "1 escala rápida (SCL)",
        "fechas": "09 Abr - 23 Abr 2027",
        "fecha_ida": "2027-04-09",
        "fecha_vuelta": "2027-04-23",
        "noches": 14,
        "precio": "US$ 1195 (aprox. $ 1.613.250 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 1195,
        "precio_ars": 1613250
      },
      {
        "puesto": "🥈",
        "aerolinea": "LATAM / Qantas",
        "escalas": "1 escala (SCL)",
        "fechas": "16 Abr - 30 Abr 2027",
        "fecha_ida": "2027-04-16",
        "fecha_vuelta": "2027-04-30",
        "noches": 14,
        "precio": "US$ 1267 (aprox. $ 1.710.450 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 1267,
        "precio_ars": 1710450
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air New Zealand",
        "escalas": "Conexión Pacífico Sur",
        "fechas": "23 Abr - 07 May 2027",
        "fecha_ida": "2027-04-23",
        "fecha_vuelta": "2027-05-07",
        "noches": 14,
        "precio": "US$ 1362 (aprox. $ 1.838.700 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 1362,
        "precio_ars": 1838700
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Eichardt's Private Hotel Queenstown",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (340 reseñas)",
        "zona": "Frente al Lago Wakatipu (Centro de Queenstown)",
        "precio_noche": "US$ 460 / noche",
        "precio_noche_usd": 460,
        "precio_noche_ars": 621000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Patrimonio histórico de 1867 frente al muelle del lago Wakatipu con vistas imponentes a la cordillera The Remarkables.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Queenstown+New+Zealand"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "The Hotel Britomart Auckland",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Excepcional (1.840 reseñas)",
        "zona": "Distrito Britomart / Viaduct Harbour (Auckland)",
        "precio_noche": "US$ 195 / noche",
        "precio_noche_usd": 195,
        "precio_noche_ars": 263250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El primer hotel 5 Green Star de Nueva Zelanda, a 1 cuadra de la terminal de ferries hacia Waiheke Island.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=The+Hotel+Britomart+Auckland"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Kamana Lakehouse Queenstown",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (1.620 reseñas)",
        "zona": "Fernhill (Mirador Panorámico al Lago Wakatipu)",
        "precio_noche": "US$ 130 / noche",
        "precio_noche_usd": 130,
        "precio_noche_ars": 175500,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Famoso por sus tinas calientes privadas al aire libre (Onsen) mirando al lago y a las montañas nevadas de la Isla Sur.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Kamana+Lakehouse+Queenstown"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 18,
      "rango_min": "US$ 1.100",
      "rango_max": "US$ 1.650",
      "mensaje": "¡Tarifa récord histórica a Nueva Zelanda! Por debajo de los US$ 1.250 vía Santiago.",
      "texto_pin": "US$ 1.195 es una tarifa récord baja",
      "consejo": "LATAM conecta Buenos Aires con Auckland con solo 1 escala en Santiago (SCL), sin necesidad de visa de tránsito estadounidense.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1482,
        1398,
        1326,
        1255,
        1195
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "AKL",
      "ciudad": "Nueva Zelanda: Auckland, Hobbiton & Queenstown",
      "actualizado_at": "2026-11-06T09:38:35.173280+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "24 Dec - 21 Jan 2027",
              "noches": 28,
              "dias_restantes": 48,
              "precio_usd": 1757,
              "precio_ars": 2547600,
              "precio_texto": "US$ 1757",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202026-12-24%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2026-12-24/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Т-Банк",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-13",
              "fechas_texto": "24 Dec - 13 Jan 2027",
              "noches": 20,
              "dias_restantes": 48,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202026-12-24%20through%202027-01-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2026-12-24/2027-01-13?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-25",
            "fechas_texto": "05 May - 25 May 2027",
            "noches": 20,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2027-05-05/2027-05-25?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-21",
              "fechas_texto": "24 Dec - 21 Jan 2027",
              "noches": 28,
              "dias_restantes": 48,
              "precio_usd": 1757,
              "precio_ars": 2547600,
              "precio_texto": "US$ 1757",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202026-12-24%20through%202027-01-21&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2026-12-24/2027-01-21?affilid=flightbot",
              "aerolinea_gate": "Т-Банк",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-24",
              "fecha_vuelta": "2027-01-13",
              "fechas_texto": "24 Dec - 13 Jan 2027",
              "noches": 20,
              "dias_restantes": 48,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202026-12-24%20through%202027-01-13&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2026-12-24/2027-01-13?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-25",
              "fechas_texto": "05 May - 25 May 2027",
              "noches": 20,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20AKL%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/akl/2027-05-05/2027-05-25?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "polinesia",
    "ciudad": "Polinesia Francesa: Tahití, Moorea & Bora Bora",
    "pais": "Polinesia Francesa",
    "bandera": "🌺",
    "iata": "PPT",
    "tipo_ruta": "Pacífico Sur & Bungalows Sobre el Agua",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "codigo_pais": "pf",
    "precio_desde": "US$ 750",
    "comando_tg": "/polinesia",
    "resena": "La perla del Pacífico Sur: la laguna esmeralda de Bora Bora custodiada por el monte Otemanu, las cumbres volcánicas de Moorea a 30 minutos en ferry de Tahití y la hospitalidad polinesia.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "LATAM + Air Tahiti Nui",
        "escalas": "Vía Santiago / Auckland",
        "fechas": "10 May - 28 May 2027",
        "fecha_ida": "2027-05-10",
        "fecha_vuelta": "2027-05-28",
        "noches": 18,
        "precio": "US$ 750 (aprox. $ 1.012.500 ARS)",
        "destacado": "Tarifa récord",
        "actualizado_en_vivo": true,
        "precio_usd": 750,
        "precio_ars": 1012500
      },
      {
        "puesto": "🥈",
        "aerolinea": "Air France / Delta",
        "escalas": "Vía Los Ángeles (LAX)",
        "fechas": "07 Jun - 25 Jun 2027",
        "fecha_ida": "2027-06-07",
        "fecha_vuelta": "2027-06-25",
        "noches": 18,
        "precio": "US$ 788 (aprox. $ 1.063.800 ARS)",
        "destacado": "Conexión ágil",
        "actualizado_en_vivo": true,
        "precio_usd": 788,
        "precio_ars": 1063800
      },
      {
        "puesto": "🥉",
        "aerolinea": "United Airlines",
        "escalas": "Vía San Francisco (SFO)",
        "fechas": "06 Sep - 24 Sep 2027",
        "fecha_ida": "2027-09-06",
        "fecha_vuelta": "2027-09-24",
        "noches": 18,
        "precio": "US$ 833 (aprox. $ 1.124.550 ARS)",
        "destacado": "Equipaje incluido",
        "actualizado_en_vivo": true,
        "precio_usd": 833,
        "precio_ars": 1124550
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Four Seasons Resort Bora Bora",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.7",
        "calificacion": "Excepcional (540 reseñas)",
        "zona": "Motu Tehotu (Vista frontal al Monte Otemanu)",
        "precio_noche": "US$ 720 / noche",
        "precio_noche_usd": 720,
        "precio_noche_ars": 972000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El ícono mundial de los bungalows sobre el agua en un motu privado de coral con santuario interior de vida marina.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Four+Seasons+Resort+Bora+Bora"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Hilton Moorea Lagoon Resort & Spa",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Fantástico (1.120 reseñas)",
        "zona": "Isla de Moorea (Entre las bahías de Cook y Opunohu)",
        "precio_noche": "US$ 380 / noche",
        "precio_noche_usd": 380,
        "precio_noche_ars": 513000,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        "descripcion": "A solo 30 minutos en catamarán desde Tahití: bungalows sobre jardín de coral lleno de peces tropicales y rayas.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Hilton+Moorea+Lagoon+Resort+Spa"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Te Moana Tahiti Resort",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "8.8",
        "calificacion": "Fabuloso (1.680 reseñas)",
        "zona": "Punaauia (Tahití · Con vista al atardecer sobre Moorea)",
        "precio_noche": "US$ 195 / noche",
        "precio_noche_usd": 195,
        "precio_noche_ars": 263250,
        "temporada": "Referencia Media / Baja",
        "foto": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Arquitectura polinesia auténtica con piscina infinita frente a la laguna y acceso a los mejores food trucks (Roulottes) de Tahití.",
        "booking_url": "https://www.booking.com/searchresults.es.html?ss=Te+Moana+Tahiti+Resort"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 26,
      "rango_min": "US$ 690",
      "rango_max": "US$ 1.040",
      "mensaje": "¡Tarifa de oportunidad al Pacífico Sur! Temporada seca de mayo a octubre.",
      "texto_pin": "US$ 750 es una tarifa récord baja",
      "consejo": "Dedicar 5 noches a la isla de Moorea (a 30 min en ferry de US$ 15 desde Papeete) ahorra el vuelo doméstico caro y ofrece playas idílicas.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        930,
        878,
        833,
        788,
        750
      ],
      "historial_formato": "US$ "
    },
    "salidas_reales_cazadas": {
      "iata": "PPT",
      "ciudad": "Polinesia Francesa: Tahití, Moorea & Bora Bora",
      "actualizado_at": "2026-11-06T09:38:35.413915+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "22% OFF",
        "ahorro_pct_num": 22,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-25",
            "fechas_texto": "05 May - 25 May 2027",
            "noches": 20,
            "dias_restantes": 180,
            "precio_usd": 808,
            "precio_ars": 1171600,
            "precio_texto": "US$ 808",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2027-05-05/2027-05-25?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "24% OFF",
          "ahorro_pct_num": 24,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-12-02",
              "fechas_texto": "12 Nov - 02 Dec 2026",
              "noches": 20,
              "dias_restantes": 6,
              "precio_usd": 850,
              "precio_ars": 1232500,
              "precio_texto": "US$ 850",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202026-11-12%20through%202026-12-02&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2026-11-12/2026-12-02?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2027-01-01",
              "fechas_texto": "12 Dec - 01 Jan 2027",
              "noches": 20,
              "dias_restantes": 36,
              "precio_usd": 892,
              "precio_ars": 1293400,
              "precio_texto": "US$ 892",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202026-12-12%20through%202027-01-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2026-12-12/2027-01-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "16% OFF",
          "ahorro_pct_num": 16,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-02-01",
              "fechas_texto": "12 Jan - 01 Feb 2027",
              "noches": 20,
              "dias_restantes": 67,
              "precio_usd": 935,
              "precio_ars": 1355800,
              "precio_texto": "US$ 935",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202027-01-12%20through%202027-02-01&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2027-01-12/2027-02-01?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "22% OFF",
          "ahorro_pct_num": 22,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-25",
              "fechas_texto": "05 May - 25 May 2027",
              "noches": 20,
              "dias_restantes": 180,
              "precio_usd": 808,
              "precio_ars": 1171600,
              "precio_texto": "US$ 808",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20PPT%20from%20EZE%20on%202027-05-05%20through%202027-05-25&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ppt/2027-05-05/2027-05-25?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "elcairo",
    "ciudad": "El Cairo & Pirámides de Giza",
    "pais": "Egipto",
    "bandera": "🇪🇬",
    "iata": "CAI",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 1.611",
    "comando_tg": "/elcairo",
    "resena": "Las Pirámides de Giza y la Gran Esfinge, el nuevo Gran Museo Egipcio (GEM), bazares de Khan el-Khalili y base para cruceros fluviales por el histórico río Nilo.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Turkish Airlines",
        "escalas": "1 escala corta (IST)",
        "fechas": "09 Dic - 26 Dic 2026",
        "noches": 17,
        "precio": "US$ 1611 (aprox. $ 2.174.850 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2026-12-09",
        "fecha_vuelta": "2026-12-26",
        "actualizado_en_vivo": true,
        "precio_ars": 2174850,
        "precio_usd": 1611
      },
      {
        "puesto": "🥈",
        "aerolinea": "ITA Airways",
        "escalas": "1 escala (FCO)",
        "fechas": "16 Dic - 02 Ene 2027",
        "noches": 17,
        "precio": "US$ 1708 (aprox. $ 2.305.800 ARS)",
        "destacado": "Conexión ágil en Roma",
        "fecha_ida": "2026-12-16",
        "fecha_vuelta": "2027-01-02",
        "actualizado_en_vivo": true,
        "precio_ars": 2305800,
        "precio_usd": 1708
      },
      {
        "puesto": "🥉",
        "aerolinea": "Air France",
        "escalas": "1 escala (CDG)",
        "fechas": "23 Dic - 09 Ene 2027",
        "noches": 17,
        "precio": "US$ 1837 (aprox. $ 2.479.950 ARS)",
        "destacado": "Excelente franquicia de equipaje",
        "fecha_ida": "2026-12-23",
        "fecha_vuelta": "2027-01-09",
        "actualizado_en_vivo": true,
        "precio_ars": 2479950,
        "precio_usd": 1837
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "Marriott Mena House, Cairo",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.2",
        "calificacion": "Excepcional (3.800 reseñas)",
        "zona": "Giza (Frente a las Pirámides)",
        "precio_noche": "US$ 340 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Palacio real de 1869 situado a solo 700 metros de la Gran Pirámide de Keops con jardines perfumados y piscina con vista directa a los monumentos.",
        "booking_url": "https://www.booking.com/hotel/eg/marriott-mena-house-cairo.es.html",
        "precio_noche_usd": 340,
        "precio_noche_ars": 459000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Four Seasons Hotel Cairo at Nile Plaza",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.1",
        "calificacion": "Fantástico (2.900 reseñas)",
        "zona": "Garden City / Frente al Nilo",
        "precio_noche": "US$ 290 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "En el prestigioso barrio diplomático de Garden City con vistas al río Nilo y a la isla de Zamalek, spa y 9 restaurantes internacionales.",
        "booking_url": "https://www.booking.com/hotel/eg/four-seasons-cairo-at-nile-plaza.es.html",
        "precio_noche_usd": 290,
        "precio_noche_ars": 391500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Sofitel Cairo Nile El Gezirah",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "8.9",
        "calificacion": "Excelente (3.500 reseñas)",
        "zona": "Isla de Zamalek (Sobre el Río Nilo)",
        "precio_noche": "US$ 160 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Piscina infinita flotante sobre las aguas del Nilo, terraza panorámica para cenar y ambiente seguro en la isla residencial de Zamalek.",
        "booking_url": "https://www.booking.com/hotel/eg/sofitel-cairo-nile-el-gezirah.es.html",
        "precio_noche_usd": 160,
        "precio_noche_ars": 216000,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 37,
      "rango_min": "US$ 1.480",
      "rango_max": "US$ 2.220",
      "mensaje": "Precios estándar para viajar a la tierra de los Faraones.",
      "texto_pin": "US$ 1.611 es una tarifa récord baja",
      "consejo": "Noviembre y diciembre son los mejores meses del año para visitar Egipto por sus temperaturas moderadas de 24°C.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1998,
        1885,
        1788,
        1692,
        1611
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "eg",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 23 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "22 Nov - 28 Nov 2026",
      "fecha_ida": "2026-11-22",
      "fecha_vuelta": "2026-11-28",
      "noches": 12,
      "dias_para_el_vuelo": 23,
      "precio": "US$ 1163",
      "precio_usd": "aprox. $ 1.570.050 ARS",
      "precio_ars": 1570050,
      "precio_usd_num": 1163,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20BUE%20on%202026-11-22%20through%202026-11-28&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/elcairo/2026-11-22/2026-11-28?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "CAI",
      "ciudad": "El Cairo & Pirámides de Giza",
      "actualizado_at": "2026-11-06T09:38:35.656530+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1163,
              "precio_ars": 1686400,
              "precio_texto": "US$ 1163",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-26",
              "fechas_texto": "09 Dec - 26 Dec 2026",
              "noches": 17,
              "dias_restantes": 33,
              "precio_usd": 1611,
              "precio_ars": 2336000,
              "precio_texto": "US$ 1611",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202026-12-09%20through%202026-12-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2026-12-09/2026-12-26?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "21 Dec - 05 Jan 2027",
              "noches": 15,
              "dias_restantes": 45,
              "precio_usd": 1221,
              "precio_ars": 1770400,
              "precio_texto": "US$ 1221",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202026-12-21%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2026-12-21/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1279,
              "precio_ars": 1854600,
              "precio_texto": "US$ 1279",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 1105,
            "precio_ars": 1602200,
            "precio_texto": "US$ 1105",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1163,
              "precio_ars": 1686400,
              "precio_texto": "US$ 1163",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-09",
              "fecha_vuelta": "2026-12-26",
              "fechas_texto": "09 Dec - 26 Dec 2026",
              "noches": 17,
              "dias_restantes": 33,
              "precio_usd": 1611,
              "precio_ars": 2336000,
              "precio_texto": "US$ 1611",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202026-12-09%20through%202026-12-26&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2026-12-09/2026-12-26?affilid=flightbot",
              "aerolinea_gate": "Aviakassa",
              "es_real_aviasales": true
            },
            {
              "opcion": 2,
              "etiqueta_opcion": "Salida B",
              "fecha_ida": "2026-12-21",
              "fecha_vuelta": "2027-01-05",
              "fechas_texto": "21 Dec - 05 Jan 2027",
              "noches": 15,
              "dias_restantes": 45,
              "precio_usd": 1221,
              "precio_ars": 1770400,
              "precio_texto": "US$ 1221",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202026-12-21%20through%202027-01-05&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2026-12-21/2027-01-05?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1279,
              "precio_ars": 1854600,
              "precio_texto": "US$ 1279",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 1105,
              "precio_ars": 1602200,
              "precio_texto": "US$ 1105",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CAI%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cai/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "marrakech",
    "ciudad": "Marrakech & Atlas",
    "pais": "Marruecos",
    "bandera": "🇲🇦",
    "iata": "RAK",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 1.180",
    "comando_tg": "/marrakech",
    "resena": "La mística 'Ciudad Roja': la plaza Jemaa el-Fna, jardines Majorelle, zocos aromáticos de la Medina medieval y excursiones al desierto del Sahara y cordillera del Atlas.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Iberia",
        "escalas": "1 escala corta (MAD)",
        "fechas": "17 Abr - 28 Abr 2027",
        "noches": 11,
        "precio": "US$ 1180 (aprox. $ 1.593.000 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-04-17",
        "fecha_vuelta": "2027-04-28",
        "actualizado_en_vivo": true,
        "precio_ars": 1593000,
        "precio_usd": 1180
      },
      {
        "puesto": "🥈",
        "aerolinea": "Air Europa",
        "escalas": "1 escala (MAD)",
        "fechas": "17 Abr - 28 Abr 2027",
        "noches": 11,
        "precio": "US$ 1239 (aprox. $ 1.672.650 ARS)",
        "destacado": "Conexión eficiente",
        "fecha_ida": "2027-04-17",
        "fecha_vuelta": "2027-04-28",
        "actualizado_en_vivo": true,
        "precio_ars": 1672650,
        "precio_usd": 1239
      },
      {
        "puesto": "🥉",
        "aerolinea": "TAP Air Portugal",
        "escalas": "1 escala (LIS)",
        "fechas": "17 Abr - 28 Abr 2027",
        "noches": 11,
        "precio": "US$ 1310 (aprox. $ 1.768.500 ARS)",
        "destacado": "Opción de stopover en Lisboa",
        "fecha_ida": "2027-04-17",
        "fecha_vuelta": "2027-04-28",
        "actualizado_en_vivo": true,
        "precio_ars": 1768500,
        "precio_usd": 1310
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "La Mamounia Marrakech",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.5",
        "calificacion": "Excepcional (3.200 reseñas)",
        "zona": "Hivernage / Murallas de la Medina",
        "precio_noche": "US$ 620 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Palacio árabe-andalusí legendario de 1923 elegido entre los mejores hoteles del mundo, jardines de 8 hectáreas y spa suntuoso.",
        "booking_url": "https://www.booking.com/hotel/ma/la-mamounia.es.html",
        "precio_noche_usd": 620,
        "precio_noche_ars": 837000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Royal Mansour Marrakech",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Fantástico (1.800 reseñas)",
        "zona": "Medina Histórica",
        "precio_noche": "US$ 890 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseñado por artesanos reales marroquíes con riads privados individuales de varios pisos, piscinas privadas y túneles subterráneos de servicio.",
        "booking_url": "https://www.booking.com/hotel/ma/royal-mansour-marrakech.es.html",
        "precio_noche_usd": 890,
        "precio_noche_ars": 1201500,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Riad Kniza",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.4",
        "calificacion": "Excelente (1.950 reseñas)",
        "zona": "Bab Doukkala (Entrada Medina)",
        "precio_noche": "US$ 145 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Riad del siglo XVIII restaurado por expertos en antigüedades con patio andaluz tradicional, fuente, solárium y atención familiar cálida.",
        "booking_url": "https://www.booking.com/hotel/ma/riad-kniza.es.html",
        "precio_noche_usd": 145,
        "precio_noche_ars": 195750,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "bajo",
      "posicion_pct": 25,
      "rango_min": "US$ 1.090",
      "rango_max": "US$ 1.630",
      "mensaje": "¡Precio de oportunidad para sumergirse en la magia de Marruecos!",
      "texto_pin": "US$ 1.180 es una tarifa récord baja",
      "consejo": "Vía Madrid el vuelo a Marrakech dura solo 2 horas más, permitiendo volar al norte de África por menos de US$ 1.000.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1463,
        1381,
        1310,
        1239,
        1180
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "ma",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 25 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "24 Nov - 30 Nov 2026",
      "fecha_ida": "2026-11-24",
      "fecha_vuelta": "2026-11-30",
      "noches": 12,
      "dias_para_el_vuelo": 25,
      "precio": "US$ 1120",
      "precio_usd": "aprox. $ 1.512.000 ARS",
      "precio_ars": 1512000,
      "precio_usd_num": 1120,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20BUE%20on%202026-11-24%20through%202026-11-30&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/marrakech/2026-11-24/2026-11-30?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "RAK",
      "ciudad": "Marrakech & Atlas",
      "actualizado_at": "2026-11-06T09:38:35.906700+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1120,
              "precio_ars": 1624000,
              "precio_texto": "US$ 1120",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1176,
              "precio_ars": 1705200,
              "precio_texto": "US$ 1176",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1232,
              "precio_ars": 1786400,
              "precio_texto": "US$ 1232",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 1064,
            "precio_ars": 1542800,
            "precio_texto": "US$ 1064",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 1120,
              "precio_ars": 1624000,
              "precio_texto": "US$ 1120",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1176,
              "precio_ars": 1705200,
              "precio_texto": "US$ 1176",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1232,
              "precio_ars": 1786400,
              "precio_texto": "US$ 1232",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 1064,
              "precio_ars": 1542800,
              "precio_texto": "US$ 1064",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20RAK%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/rak/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  },
  {
    "id": "ciudaddelcabo",
    "ciudad": "Ciudad del Cabo (Cape Town)",
    "pais": "Sudáfrica",
    "bandera": "🇿🇦",
    "iata": "CPT",
    "tipo_ruta": "Internacional",
    "es_cabotaje": false,
    "categoria_region": "europa_mundo",
    "precio_desde": "US$ 899",
    "comando_tg": "/ciudaddelcabo",
    "resena": "La imponente Table Mountain, pingüinos en Boulders Beach, viñedos de Stellenbosch y el Cabo de Buena Esperanza donde se abrazan el Atlántico y el Índico.",
    "vuelos": [
      {
        "puesto": "🥇",
        "aerolinea": "Ethiopian Airlines",
        "escalas": "1 escala corta (ADD)",
        "fechas": "29 Ene - 12 Feb 2027",
        "noches": 14,
        "precio": "US$ 899 (aprox. $ 1.213.650 ARS)",
        "destacado": "Tarifa récord más baja",
        "fecha_ida": "2027-01-29",
        "fecha_vuelta": "2027-02-12",
        "actualizado_en_vivo": true,
        "precio_ars": 1213650,
        "precio_usd": 899
      },
      {
        "puesto": "🥈",
        "aerolinea": "South African / LATAM",
        "escalas": "1 escala (GRU)",
        "fechas": "20 Ene - 27 Ene 2027",
        "noches": 7,
        "precio": "US$ 1174 (aprox. $ 1.584.900 ARS)",
        "destacado": "Ruta transatlántica directa",
        "fecha_ida": "2027-01-20",
        "fecha_vuelta": "2027-01-27",
        "actualizado_en_vivo": true,
        "precio_ars": 1584900,
        "precio_usd": 1174
      },
      {
        "puesto": "🥉",
        "aerolinea": "Emirates / Qatar",
        "escalas": "1 escala",
        "fechas": "12 Feb - 26 Feb 2027",
        "noches": 14,
        "precio": "US$ 1025 (aprox. $ 1.383.750 ARS)",
        "destacado": "Servicio de 5 estrellas",
        "fecha_ida": "2027-02-12",
        "fecha_vuelta": "2027-02-26",
        "actualizado_en_vivo": true,
        "precio_ars": 1383750,
        "precio_usd": 1025
      }
    ],
    "hoteles": [
      {
        "categoria": "icon",
        "badge": "👑 Más Solicitado · Ícono Exclusivo",
        "nombre": "The Silo Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.6",
        "calificacion": "Excepcional (1.200 reseñas)",
        "zona": "V&A Waterfront / Silo District",
        "precio_noche": "US$ 780 / noche",
        "foto": "https://images.unsplash.com/photo-1651640821812-6328be4b6994?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Obra maestra arquitectónica de Thomas Heatherwick construida en un silo de grano histórico sobre el museo Zeitz MOCAA con piscina en la azotea.",
        "booking_url": "https://www.booking.com/hotel/za/the-silo.es.html",
        "precio_noche_usd": 780,
        "precio_noche_ars": 1053000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "favorite",
        "badge": "❤️ Más Solicitado · Favorito de Huéspedes",
        "nombre": "Mount Nelson, A Belmond Hotel",
        "estrellas": "⭐⭐⭐⭐⭐",
        "puntuacion": "9.3",
        "calificacion": "Fantástico (2.400 reseñas)",
        "zona": "Gardens / Pie de Table Mountain",
        "precio_noche": "US$ 420 / noche",
        "foto": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "descripcion": "El legendario 'Palacio Rosa' fundado en 1899, jardines exuberantes de 3 hectáreas, célebre Afternoon Tea y servicio Belmond de excelencia.",
        "booking_url": "https://www.booking.com/hotel/za/belmond-mount-nelson.es.html",
        "precio_noche_usd": 420,
        "precio_noche_ars": 567000,
        "temporada": "Referencia Media / Baja"
      },
      {
        "categoria": "value",
        "badge": "💎 Mejor Relación Calidad-Precio",
        "nombre": "Radisson RED Hotel Cape Town",
        "estrellas": "⭐⭐⭐⭐",
        "puntuacion": "9.0",
        "calificacion": "Excelente (3.100 reseñas)",
        "zona": "V&A Waterfront",
        "precio_noche": "US$ 130 / noche",
        "foto": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "descripcion": "Diseño moderno y vibrante en pleno Waterfront turístico y seguro, piscina en la azotea con vistas directas a Table Mountain.",
        "booking_url": "https://www.booking.com/hotel/za/radisson-red-hotel-v-a-waterfront-cape-town.es.html",
        "precio_noche_usd": 130,
        "precio_noche_ars": 175500,
        "temporada": "Referencia Media / Baja"
      }
    ],
    "termometro": {
      "nivel": "estandar",
      "posicion_pct": 35,
      "rango_min": "US$ 830",
      "rango_max": "US$ 1.240",
      "mensaje": "Precios estándar para descubrir los paisajes de Sudáfrica.",
      "texto_pin": "US$ 899 es una tarifa récord baja",
      "consejo": "Noviembre coincide con el inicio de la primavera sudafricana, ideal para combinar Ciudad del Cabo con la Ruta Jardín o safaris.",
      "historial_dias": [
        "Hace 52 d",
        "Hace 38 d",
        "Hace 24 d",
        "Hace 10 d",
        "Hoy"
      ],
      "historial_valores": [
        1115,
        1052,
        998,
        944,
        899
      ],
      "historial_formato": "US$ "
    },
    "codigo_pais": "za",
    "oportunidad_relampago": {
      "activa": true,
      "titulo": "🔥 Oportunidad Relámpago",
      "subtitulo": "Salida en 26 días · Tarifa récord más baja detectada",
      "aerolinea": "ITA Airways / Air Europa",
      "escalas": "1 escala en hub europeo",
      "fechas": "25 Nov - 01 Dic 2026",
      "fecha_ida": "2026-11-25",
      "fecha_vuelta": "2026-12-01",
      "noches": 12,
      "dias_para_el_vuelo": 26,
      "precio": "US$ 961",
      "precio_usd": "aprox. $ 1.297.350 ARS",
      "precio_ars": 1297350,
      "precio_usd_num": 961,
      "ahorro_porcentaje": "20% OFF",
      "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20BUE%20on%202026-11-25%20through%202026-12-01&hl=es",
      "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/ciudaddelcabo/2026-11-25/2026-12-01?affilid=flightbot"
    },
    "salidas_reales_cazadas": {
      "iata": "CPT",
      "ciudad": "Ciudad del Cabo (Cape Town)",
      "actualizado_at": "2026-11-06T09:38:36.138976+00:00",
      "meses": [
        {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 961,
              "precio_ars": 1393400,
              "precio_texto": "US$ 961",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1009,
              "precio_ars": 1463000,
              "precio_texto": "US$ 1009",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1057,
              "precio_ars": 1532600,
              "precio_texto": "US$ 1057",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      ],
      "early_bird": {
        "key": "mes6",
        "nombre": "A 6 Meses (May 2027)",
        "nombre_corto": "6 Meses",
        "año": 2027,
        "ahorro_porcentaje": "18% OFF",
        "ahorro_pct_num": 18,
        "salidas": [
          {
            "opcion": 1,
            "etiqueta_opcion": "🎯 Early Bird",
            "fecha_ida": "2027-05-05",
            "fecha_vuelta": "2027-05-20",
            "fechas_texto": "05 May - 20 May 2027",
            "noches": 15,
            "dias_restantes": 180,
            "precio_usd": 913,
            "precio_ars": 1323800,
            "precio_texto": "US$ 913",
            "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
            "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2027-05-05/2027-05-20?affilid=flightbot",
            "aerolinea_gate": "Early Bird Referencia",
            "es_real_aviasales": false
          }
        ]
      },
      "mapa_tabs": {
        "mes1": {
          "key": "mes1",
          "nombre": "Noviembre 2026",
          "nombre_mes": "Noviembre 2026",
          "nombre_corto": "Nov",
          "año": 2026,
          "ahorro_porcentaje": "20% OFF",
          "ahorro_pct_num": 20,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-11-12",
              "fecha_vuelta": "2026-11-27",
              "fechas_texto": "12 Nov - 27 Nov 2026",
              "noches": 15,
              "dias_restantes": 6,
              "precio_usd": 961,
              "precio_ars": 1393400,
              "precio_texto": "US$ 961",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202026-11-12%20through%202026-11-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2026-11-12/2026-11-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes2": {
          "key": "mes2",
          "nombre": "Diciembre 2026",
          "nombre_mes": "Diciembre 2026",
          "nombre_corto": "Dic",
          "año": 2026,
          "ahorro_porcentaje": "17% OFF",
          "ahorro_pct_num": 17,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2026-12-12",
              "fecha_vuelta": "2026-12-27",
              "fechas_texto": "12 Dec - 27 Dec 2026",
              "noches": 15,
              "dias_restantes": 36,
              "precio_usd": 1009,
              "precio_ars": 1463000,
              "precio_texto": "US$ 1009",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202026-12-12%20through%202026-12-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2026-12-12/2026-12-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes3": {
          "key": "mes3",
          "nombre": "Enero 2027",
          "nombre_mes": "Enero 2027",
          "nombre_corto": "Ene",
          "año": 2027,
          "ahorro_porcentaje": "13% OFF",
          "ahorro_pct_num": 13,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "Salida A",
              "fecha_ida": "2027-01-12",
              "fecha_vuelta": "2027-01-27",
              "fechas_texto": "12 Jan - 27 Jan 2027",
              "noches": 15,
              "dias_restantes": 67,
              "precio_usd": 1057,
              "precio_ars": 1532600,
              "precio_texto": "US$ 1057",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202027-01-12%20through%202027-01-27&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2027-01-12/2027-01-27?affilid=flightbot",
              "aerolinea_gate": "Tarifa de Referencia",
              "es_real_aviasales": false
            }
          ]
        },
        "mes6": {
          "key": "mes6",
          "nombre": "A 6 Meses (May 2027)",
          "nombre_corto": "6 Meses",
          "año": 2027,
          "ahorro_porcentaje": "18% OFF",
          "ahorro_pct_num": 18,
          "salidas": [
            {
              "opcion": 1,
              "etiqueta_opcion": "🎯 Early Bird",
              "fecha_ida": "2027-05-05",
              "fecha_vuelta": "2027-05-20",
              "fechas_texto": "05 May - 20 May 2027",
              "noches": 15,
              "dias_restantes": 180,
              "precio_usd": 913,
              "precio_ars": 1323800,
              "precio_texto": "US$ 913",
              "google_flights_url": "https://www.google.com/travel/flights?q=Flights%20to%20CPT%20from%20EZE%20on%202027-05-05%20through%202027-05-20&hl=es",
              "kiwi_url": "https://www.kiwi.com/es/search/results/buenos-aires-argentina/cpt/2027-05-05/2027-05-20?affilid=flightbot",
              "aerolinea_gate": "Early Bird Referencia",
              "es_real_aviasales": false
            }
          ]
        }
      }
    }
  }
];
})();
