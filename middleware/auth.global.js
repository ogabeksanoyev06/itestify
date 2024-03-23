export default defineNuxtRouteMiddleware(async (to, from) => {
   const token = useCookie('access_token');

   if (!token.value) {
      if (to.path === '/auth/login' || to.path === '/auth/register') {
         return;
      } else {
         return navigateTo('/auth/login');
      }
   }

   if (token.value) {
      if (to.path === '/auth/login' || to.path === '/auth/register') {
         return navigateTo('/');
      } else {
         return;
      }
   }
});
