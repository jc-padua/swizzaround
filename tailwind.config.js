/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          1: '#006db3',
          2: '#003f67',
          3: '#00568d'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

