// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],


  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwindcss.config.ts",
  },

  pwa: {
    manifest: {
      name: "smkcoding",
      short_name: "smkcoding",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "icon-512.png",
          sizes: "512x512",
          type: "image/png"
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  }
})