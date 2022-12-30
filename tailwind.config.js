/** @type {import('tailwindcss').Config} */
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
    },
    screens: {
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {},
  },
  plugins: [],
}
