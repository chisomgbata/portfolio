/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        offwhite: "#F0F0F6",
        primary: "#4A26DB",
        white: "#FAFAFA",
        grey: "#767676",
        black: "#2B2B2B",
        darkBg: "#18191A",
        darkContent: "#242526",
        darkText: "#767676",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
