/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import lineClamp from '@tailwindcss/line-clamp';
import children from 'tailwind-children';
import saasblocks from 'tailwind-saasblocks';
import eggshellDelightsTheme from 'tailwind-saasblocks/themes/eggshell-delights.theme';
import midnightEnvyTheme from 'tailwind-saasblocks/themes/midnight-envy.theme';

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
  plugins: [
    typography,
    forms,
    lineClamp,
    children,
    saasblocks({
      themes: {
        dark: midnightEnvyTheme,
        light: eggshellDelightsTheme,
      },
    }),
  ],
} satisfies Config;
