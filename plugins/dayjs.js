import dayjs from 'dayjs';

export default defineNuxtPlugin(function (nuxtApp) {
   nuxtApp.provide('dayjs', dayjs);
});
