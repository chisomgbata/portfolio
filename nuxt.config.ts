import { defineNuxtConfig } from "nuxt";
import postcss from "postcss";

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/css/tailwind.css"],
});
