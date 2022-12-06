/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      backgroundImage:{
        'hero': "url('./0d0eee7.png')"
      },
      keyframes:{
        wave:{
          '1%': { transform: 'rotate(-11deg)'},
        }
      },
      animation:{
        'waving-hand': 'wave 0.1s linear',
      }
    },
  },
  plugins: [],
};
