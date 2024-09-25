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
            'backImg': "url('../images/back.png')",
         }

     }
     
  },
  plugins: [],
}

