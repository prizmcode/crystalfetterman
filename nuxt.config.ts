import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-01-18',

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },

  modules: ['@nuxt/image', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      // URL the contact form posts to. Set NUXT_PUBLIC_CONTACT_ENDPOINT when building.
      contactEndpoint: '',
    },
  },

  // Built as static files (`npm run generate`).
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
});
