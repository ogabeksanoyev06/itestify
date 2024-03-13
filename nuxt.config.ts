// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-swiper'],
   css: ['@/assets/styles/main.scss'],
   plugins: [
      { src: './plugins/vee-validate-rules.js' },
      { src: './plugins/vee-validate-components.js' },
      { src: './plugins/sonner.client.js' },
      {
         src: '~/plugins/aos',
         mode: 'client',
         ssr: false
      },
      {
         src: '~/plugins/api.js'
      }
   ],
   shadcn: {
      prefix: '',
      /**
       * Directory that the component lives in.
       * @default "./components/ui"
       */
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
   },
   build: {
      transpile: ['vue-sonner']
   }
});
