/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
  './**/*.html'
   ],
   theme: {
      colors: {
         'violet': '#23155B',
         'light-violet': '#8053FF',
      },
     
      extend: {
         fontFamily: {
            poppins: ['Poppins']
         },
         backgroundImage: {
            'fundingBack': "url('../images/fundingBack.png')",
            'potensial-back': "url('../images/potential-back.png')",
            'backImg': "url('../images/back.png')",
         }

     }
     
  },
  plugins: [],
}

