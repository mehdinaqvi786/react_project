/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0052A5',
          600: '#003974',
          700: '#001f3f',
          900: '#000f1c',
        },
        cyan: {
          400: '#00eaff',
          500: '#00f0ff',
        },
        dark: {
          50: '#f8f9fa',
          100: '#f0f0f0',
          900: '#0f0c29',
          950: '#000000',
        },
        accent: {
          cyan: '#00eaff',
          teal: '#0ff',
        },
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'heading': ['Teko', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'fadeInDown': 'fadeInDown 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'typewriter': 'typewriter 6s steps(40, end) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(0, 255, 255, 0.8)',
          },
        },
        typewriter: {
          '0%': {
            width: '0',
          },
          '50%': {
            width: '100%',
          },
          '100%': {
            width: '0',
          },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        'gradient-navy': 'linear-gradient(135deg, #000000, #0a0a23, #111122)',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4k': '2560px',
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 255, 255, 0.2)',
        'glow-md': '0 0 15px rgba(0, 255, 255, 0.4)',
        'glow-lg': '0 0 25px rgba(0, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}
