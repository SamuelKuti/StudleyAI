import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA4614',
        peachBg: '#FFDDD4',
        light: '#FFFFFF',
        lightGray: '#f7f7f7',
        grayButton: '#646464',
        grayText: '#626262',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
} satisfies Config