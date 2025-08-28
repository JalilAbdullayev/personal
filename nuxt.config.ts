export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxthub/core"],
  css: ["~/assets/css/main.css"],
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  hub: {
    database: true,
  },
});
