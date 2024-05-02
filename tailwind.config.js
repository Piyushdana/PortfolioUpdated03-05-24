/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "md":"900px",
        "sm":"600px",
        "2xl":"1600px",
      },
    },
  },
  plugins: [],
}

