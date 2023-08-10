import { withTV } from 'tailwind-variants/transformer'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[600],
        },
        secondary: {
          DEFAULT: colors.purple[600],
        },
        success: {
          DEFAULT: colors.green[500],
        },
        warning: {
          DEFAULT: colors.yellow[500],
        },
        danger: {
          DEFAULT: colors.red[600],
        },
        text: {
          DEFAULT: colors.gray[900],
          light: colors.gray[500],
        },
        background: {
          DEFAULT: colors.white,
        },
        gray: {
          DEFAULT: colors.gray[200],
        },
      },
      boxShadow: {
        checkbox: '0 0 0 2px rgb(0 0 0 / 0.05)',
      },
    },
  },

  plugins: [],
})
