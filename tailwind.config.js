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
    },
  },
  plugins: [],
};
