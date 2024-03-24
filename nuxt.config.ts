export default defineNuxtConfig({
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   runtimeConfig: {
      public: {
         apiBaseUrl: 'https://api.exam-test.uz/api/'
      }
   },
   modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-swiper'],
   css: ['@/assets/styles/main.scss'],
   plugins: [
      { src: './plugins/vee-validate-rules.js' },
      { src: './plugins/vee-validate-components.js' },
      { src: './plugins/sonner.client.js' },
      // { src: './plugins/vue-count-to.js', mode: 'client', ssr: false },
      { src: '~/plugins/aos', mode: 'client', ssr: false }
   ],
   build: {
      transpile: ['vue-sonner']
   },
   shadcn: {
      prefix: '',
      componentDir: './components/ui'
   },
   colorMode: {
      preference: 'light',
      fallback: 'light',
      hid: 'nuxt-color-mode-script',
      globalName: '__NUXT_COLOR_MODE__',
      componentName: 'ColorScheme',
      classPrefix: '',
      classSuffix: '',
      storageKey: 'nuxt-color-mode'
   }
});
