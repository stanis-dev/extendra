import { messages } from './i18n/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@vueuse/nuxt'],
  ssr: true,
  css: ['~/public/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  i18n: {
    customRoutes: 'config',
    pages: {
      proyectos: {
        en: '/projects',
        es: '/proyectos'
      },
      contact: {
        en: '/contact',
        es: '/contacto'
      }
    },
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'es',
        name: 'Español'
      }
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: {
      alwaysRedirect: true
    },
    vueI18n: {
      legacy: false,
      locale: 'es',
      messages
    }
  }
})
