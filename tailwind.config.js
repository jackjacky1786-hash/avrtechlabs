/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandCyan: '#00E1D9',
        darkCore: '#040812',
        darkSurface: '#0a1224',
      }
    },
  },
  plugins: [],
}