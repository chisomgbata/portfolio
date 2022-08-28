/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      offwhite: "#F0F0F6",
      primary: "#4A26DB",
      white: "#FAFAFA",
      gray: "#767676",
      black: "#2B2B2B",
    },
  },
  plugins: [],
};
