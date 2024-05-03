import { transform } from 'framer-motion'

const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo-logo': '#D3D3D3',
        'fondo-dark': '#3B3B3A',
        'naranja-logo': {
          100: '#F89E06',
          200: '#F87E18',
        }
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        }
      }
    },
  }, 
  darkMode: 'class',
  plugins: [nextui()],
}