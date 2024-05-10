// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },

  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/content',
  ],
  extends: ['@nuxt/ui-pro'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
