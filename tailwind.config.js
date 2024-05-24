/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EBF2FE',
          100: '#D7E6FD',
          200: '#B0CDFB',
          300: '#89B4FA',
          400: '#629BF8',
          500: '#3B82F6',
          600: '#0B61EE',
          700: '#084BB8',
          800: '#063583',
          900: '#041F4D',
          950: '#021532'
        },
        secundary: {
          50: '#D5D5D8',
          100: '#CBCBCE',
          200: '#B6B6BA',
          300: '#A1A1A7',
          400: '#8C8C93',
          500: '#77777F',
          600: '#63636A',
          700: '#4F4F55',
          800: '#3C3C40',
          900: '#28282B',
          950: '#1E1E20'
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}