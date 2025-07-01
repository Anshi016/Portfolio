/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1A1A1A',
          200: '#161616',
          300: '#121212',
          400: '#0E0E0E',
        },
        electric: {
          100: '#66E0FF',
          200: '#33D4FF',
          300: '#00D4FF',
          400: '#00A8CC',
        },
        accent: {
          green: '#00FF88',
          purple: '#8B5CF6',
          orange: '#FF6B35',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particles': 'particles 20s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #00D4FF' },
          '100%': { boxShadow: '0 0 40px #00D4FF, 0 0 60px #00D4FF' }
        },
        particles: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-1000px) rotate(720deg)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00D4FF' }
        }
      }
    },
  },
  plugins: [],
};

