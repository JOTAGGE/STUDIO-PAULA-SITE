/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          950: '#191c15',
          900: '#262c20',
          800: '#373f2f',
          700: '#4b553f',
          600: '#5f6c51',
          500: '#748364',
          400: '#90a07e',
          300: '#b1bfa3',
          200: '#d4ddcb',
          100: '#e9efe3',
          50: '#f4f7f2',
        },
        sand: {
          950: '#171614',
          900: '#2b2926',
          800: '#44413c',
          700: '#635f58',
          600: '#847f76',
          500: '#a6a095',
          400: '#c5c0b5',
          300: '#ded9cf',
          200: '#eae6dc',
          100: '#f5f2ea',
          50: '#faf8f4',
        },
        gold: {
          900: '#574218',
          800: '#836324',
          700: '#ae8430',
          600: '#c99b3d',
          500: '#dfb253',
          400: '#eac373',
          300: '#f2d59a',
          200: '#f8e6c2',
          100: '#fcf3e3',
          50: '#fefaf2',
        },
        ink: {
          DEFAULT: '#22251e',
          pure: '#151713',
          soft: '#363a30',
          muted: '#6a6f63',
          faint: '#9aa092'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(27, 30, 23, 0.12), 0 0 0 1px rgba(27, 30, 23, 0.05)',
        'luxury-lg': '0 30px 60px -20px rgba(27, 30, 23, 0.2), 0 0 0 1px rgba(27, 30, 23, 0.08)',
        'glow-gold': '0 0 35px -5px rgba(223, 178, 83, 0.3)',
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
