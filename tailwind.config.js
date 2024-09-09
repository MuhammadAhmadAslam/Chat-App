/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-background': 'rgba(17, 25, 40, 0.75)',
      },
      backdropBlur: {
        '19': '19px',
      },
      backdropSaturate: {
        '180': '180%',
      },
    },
  },
  plugins: [],
}