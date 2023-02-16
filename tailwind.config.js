/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./css/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': 'url("../Assets/img/sanFrancisco.jpg")',
        'sanFranciscoDesktop': 'url("../Assets/img/sanFranciscoDesktop.jpg")',
        'yosemite': 'url("../Assets/img/yosemite.jpg")',
        'LA': 'url("../Assets/img/LA.jpg")',
        'seattle': 'url("../Assets/img/seattle.jpg")',
        'new_york': 'url("../Assets/img/new_york.jpg")',
        'norway': 'url("../Assets/img/norway.jpg")',
        'sydney': 'url("../Assets/img/sydney.jpg")',
        'miami': 'url("../Assets/img/miami.jpg")',
        'switzerlands': 'url("../Assets/img/switzerland.jpg")',
        'bali': 'url("../Assets/img/bali.jpg")',
        'chicago': 'url("../Assets/img/chicago.jpg")',
        'europe': 'url("../Assets/img/europe.jpg")',
        'iceland': 'url("../Assets/img/iceland.jpg")',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      },
    },
  },
  plugins: [],
}
