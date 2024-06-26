// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', "@nuxt/image"],
  i18n: {
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'ru',
        file: 'langs/ru.json',
        iso: 'ru-RU',
        name: "ru"
      },
      {
        code: 'kz',
        file: 'langs/kz.json',
        iso: 'kk-KZ',
        name: "kz"
      }
    ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  }
})