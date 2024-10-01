/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        accent: '#2ECC71',
        deepBlue: '#34495E',
        softGold: '#F1C40F',
        glassGreen: 'rgba(46, 204, 113, 0.2)', // Semi-transparent green for glass effect
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Ensure this plugin is installed for backdrop filters
  ],
}