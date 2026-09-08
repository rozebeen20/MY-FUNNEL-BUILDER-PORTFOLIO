/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080807',
        background: '#0d0d0b',
        soft: '#141310',
        ivory: '#f5efe4',
        cream: '#ede3d2',
        gold: {
          DEFAULT: '#d9ad55',
          light: '#ebcb87',
          muted: '#a47a32',
        },
        border: '#d9ad55',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}