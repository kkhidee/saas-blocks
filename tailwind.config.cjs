const eggshellDelightsTheme = require('tailwind-saasblocks/themes/eggshell-delights.theme');
const midnightEnvyTheme = require('tailwind-saasblocks/themes/midnight-envy.theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('tailwind-children'),
        require('tailwind-saasblocks')({
            themes: {
                dark: midnightEnvyTheme,
                light: eggshellDelightsTheme,
            },
        }),
    ],
};
