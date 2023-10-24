/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {   
    screens: {
      'sm': '375px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': ['Red Hat Text'],
      
      backgroundImage: {
        'Stars': "url('/images/bg-stars.svg')"
      },
      lineHeight: {
        'extra-loose': '6.5'
      },
      colors:{
        SoftRed: 'hsl(345, 95%, 68%)',
        DarkdesaturatedBlue: 'hsl(236, 21%, 26%)',
        VeryDarkBlue: 'hsl(235, 16%, 14%)',
        VeryDarkBlackBlue: 'hsl(234, 17%, 12%)',
        GreyishBlue: 'hsl(237, 18%, 59%)',
        White: 'hsl(0, 0%, 100%)',

      },
    },
  },
  plugins: [],
}
}
