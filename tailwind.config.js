/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(56, 189, 248, 0.28)',
        card: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'radial-soft':
          'radial-gradient(circle at top left, rgba(56,189,248,.22), transparent 35%), radial-gradient(circle at bottom right, rgba(168,85,247,.20), transparent 35%)',
      },
    },
  },
  plugins: [],
};
