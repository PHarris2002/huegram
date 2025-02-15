/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        gridTemplateRows: {
          '7': 'repeat(7, minmax(0, 1fr))',
          '8': 'repeat(8, minmax(0, 1fr))',
          '9': 'repeat(9, minmax(0, 1fr))',
          '10': 'repeat(10, minmax(0, 1fr))',
          '11': 'repeat(11, minmax(0, 1fr))',
          '12': 'repeat(12, minmax(0, 1fr))',
          '13': 'repeat(13, minmax(0, 1fr))',
          '14': 'repeat(14, minmax(0, 1fr))',
          '15': 'repeat(15, minmax(0, 1fr))',
          '16': 'repeat(16, minmax(0, 1fr))',
          '17': 'repeat(17, minmax(0, 1fr))',
          '18': 'repeat(18, minmax(0, 1fr))',
          '19': 'repeat(19, minmax(0, 1fr))',
          '20': 'repeat(20, minmax(0, 1fr))',
        },
        gridTemplateColumns: {
          '13': 'repeat(13, minmax(0, 1fr))',
          '14': 'repeat(14, minmax(0, 1fr))',
          '15': 'repeat(15, minmax(0, 1fr))',
          '16': 'repeat(16, minmax(0, 1fr))',
          '17': 'repeat(17, minmax(0, 1fr))',
          '18': 'repeat(18, minmax(0, 1fr))',
          '19': 'repeat(19, minmax(0, 1fr))',
          '20': 'repeat(20, minmax(0, 1fr))',
        },
      }
    },
  },
  plugins: [],
}

