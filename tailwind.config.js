/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DM_Sans": ['"DM Sans"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "softRed" : "#ec775f",
        "cyan" : "#76b5bc",
        "darkBrown" : "#382314",
        "mediumBrown" : "#93867b",
        "cream" : "#f8e9dd",
        "orange" : "#fffaf5",
      }
    },
  },
  plugins: [],
}