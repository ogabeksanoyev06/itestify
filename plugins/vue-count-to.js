import countTo from 'vue-count-to';
export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.component('countTo', countTo);
});
