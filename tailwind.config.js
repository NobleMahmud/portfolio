/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        newFont: "'Dancing Script', newFont", // Adds a new `font-display` class
      }
    }
  },
  plugins: [require("daisyui")],
})

