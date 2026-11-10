/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#060b17',
        slateDark: '#0b1220',
        panel: '#111827',
        accent: '#6ee7ff',
        electric: '#42a5f5',
        violet: '#8577ff',
        steel: '#9ca9c8',
      },
      boxShadow: {
        neon: '0 0 30px rgba(110, 231, 255, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(110, 231, 255, 0.35)' },
          '50%': { boxShadow: '0 0 34px rgba(133, 119, 255, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite alternate',
        marquee: 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
};
