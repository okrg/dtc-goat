/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "../../public/**/*.html",
    "../../vendor/flarum/**/*.php"
  ],
  theme: {
    extend: {
      colors: {
        'dtc-primary': '#4f46e5',
        'dtc-secondary': '#06b6d4',
        'dtc-accent': '#8b5cf6',
        'dtc-dark': '#1e293b',
        'dtc-light': '#f8fafc',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
