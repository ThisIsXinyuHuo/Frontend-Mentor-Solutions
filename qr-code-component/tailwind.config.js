/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize : {
      sm : '15px'
    },
    fontFamily : {
      sans: ['Outfit', 'sans-serif'],
      heading : ['Outfit', 'sans-serif'],
    },
    fontWeight : {
      bold : 700
    },
    colors: {
      'white' : 'hsl(0, 0%, 100%)',
      'gray-light' : 'hsl(212, 45%, 89%)',
      'gray-blue': ' hsl(220, 15%, 55%)',
      'blue-dark': 'hsl(218, 44%, 22%)'
    },
    extend: {},
  },
  plugins: [],
}