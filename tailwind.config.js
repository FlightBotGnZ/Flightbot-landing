/** Configuración de Tailwind CSS para compilación estática en producción (sin CDN runtime). */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './guias/*.html',
    './js/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
