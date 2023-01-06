/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// import '../public/Eurostile.ttf';

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mainbg': '#041F31',
      'text': '#BDEBEA',
      'accent': '#F2F2F2',
      'title': '#D7E5EC',
      'gradient_from': '#00F5A0',
      'gradient_to': '#00D9F5',
      'black': '#000000',
      'white': colors.white,
      'yellow': colors.amber,
      ...colors,
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      
      'md': {'max': '767px'},
      'sm': {'max': '639px'},

      'smmin': '640px',
      // => @media (min-width: 640px) { ... }

      'mdmin': '768px',
      // => @media (min-width: 768px) { ... }

      'lgmin': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xlmin': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xlmin': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'eurostile': ['Eurostile', 'sans-serif'],
      'mona-sans': ['Mona Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
