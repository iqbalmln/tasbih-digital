// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      title: "Tasbih Digital Indonesia",
      meta: [
        {
          name: "description",
          content:
            "Tasbih Digital Indonesia.",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  css: ["@/assets/css/main.css"],
});
