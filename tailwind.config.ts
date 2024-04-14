/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'layer-color-3': '#1a1d2d',
      'text-color': '#abadc6',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
