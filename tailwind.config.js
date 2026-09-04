/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#191715',
          gold: '#B88E4B',
          'gold-hover': '#9E7535',
          cream: '#FDFBF7',
          alabaster: '#F6F2EC',
          border: '#EBE5DC',
          muted: '#999187',
        }
      }
    },
  },
  plugins: [],
}
