import { access_token } from '~/services/tokenService';

export default defineNuxtRouteMiddleware((to, from) => {
   if (to.path !== '/auth/login' && !access_token.value) {
      return navigateTo('/auth/login');
   }
});
