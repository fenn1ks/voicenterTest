
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/main.scss'
  ],
  app: {
    baseURL: '/voicenterTest/',
    buildAssetsDir: 'assets'
  }
})
