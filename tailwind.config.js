/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary:"#003049",
        bgprimary:"#003566",
        bgsearch:"#ffc300",
        secondary:"#f4a261",
        bglogin:"#0077b6",
        bgbnav:"#669bbc"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}

