/** @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: 'class',
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        },
      },
      screens: {
        widescreen: { raw: '(min-aspect-ratio: 3/2)' },
        tallscreen: { raw: '(max-aspect-ratio: 13/20)' },

        mac: '1440px',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '8%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
