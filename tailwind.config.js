/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Cor principal
        secondary: '#2d3748', // Cor secundária
        accent: '#4a5568', // Cor de destaque
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fonte padrão
      },
    },
  },
  plugins: [],
}
