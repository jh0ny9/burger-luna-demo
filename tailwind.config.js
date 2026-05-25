/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E3172D',
          charcoal: '#121212',
          ivory: '#FAF7F2',
          beige: '#D8C5AA',
          gray: '#232323'
        }
      },
      boxShadow: {
        glow: '0 10px 40px rgba(227, 23, 45, 0.3)'
      },
      backgroundImage: {
        noise: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,.06), transparent 45%), radial-gradient(circle at 80% 0%, rgba(227,23,45,.22), transparent 32%)'
      }
    },
  },
  plugins: [],
}
