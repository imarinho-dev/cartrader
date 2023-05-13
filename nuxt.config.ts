// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config",
  },
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
      Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
