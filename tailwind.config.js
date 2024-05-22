/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      keyframes:{
        scroll:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },

      fontFamily:{
        "display": ["Grandslang b side", "cursive"],
      },

      boxShadow :{
        'shadow':"0 5px 25px 2px #fff",
      },


      backgroundImage: {
         
        'my-gradient': "linear-gradient(to right, #f0f, #90f)",
        "my-gradient2": "linear-gradient(to left bottom, #c37272, #c08562, #b09961, #99ac73, #80bc95, #6bc0ab, #5cc2c2, #5bc2d6, #59badc, #62b2e0, #71a8df, #839edb);",
        // "my-gradient2": "linear-gradient( to bottom,  #d7e2f0 0%,#c0cedb 33%,#a9bdd7 66%, #879fac 100%)",
         
        // background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.1)));
        "linear-gradient": "linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%) ",
      },

         

      screens:{
        "md":"900px",
        "sm":"600px",
        "2xl":"1600px",
      },
    },
  },
  plugins: [],
}

