/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7DCA45',
        secondary: '#000000',
        accent: '#5ca632',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        accent: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};