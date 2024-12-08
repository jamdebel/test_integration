/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#7CD5F3',
          coral: '#FF8B8B',
          light: '#F0F9FF',
        },
      },
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};