export default defineNuxtRouteMiddleware(async (to, from) => {
   const token = useCookie('access_token');
   if (!token.value) {
      return navigateTo('/auth/login');
   }
});
