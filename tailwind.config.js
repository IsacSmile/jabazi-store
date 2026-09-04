/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F5F2EC',
          300: '#EFECE6',
        },
        beige: {
          50: '#F9F7F3',
          100: '#F3EFEA',
          200: '#E6DFD5',
          300: '#D9CFC4',
          400: '#C8BCAC',
          500: '#B5A795',
        },
        charcoal: {
          100: '#F4F4F3',
          300: '#A3A09B',
          500: '#585550',
          700: '#2E2B27',
          800: '#23201C',
          900: '#1C1A17',
          950: '#12110F',
        },
        gold: {
          100: '#F8F4EC',
          300: '#E2D1B8',
          500: '#C5A880',
          600: '#B89762',
          700: '#9B7C4B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}
