/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          colors:{
            "textheading":'#020043',
            "btncolor":'#FFC637',
            "ptextcolor":"#4D4C7B",
            "sectioncolor":"#FFFFF5"
          },
         
        },
        fontFamily:{
          oswald:[ "Oswald", "sans-serif"],
          inter:[  "Inter", "sans-serif"]
          
        },
      },
    plugins: [
        
      ],
  }