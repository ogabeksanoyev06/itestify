export default defineNuxtRouteMiddleware((to, from) => {
   const { isAuthenticated } = useAuth();
   console.log(to);

   if (!isAuthenticated) {
      return navigateTo('/auth/login');
   }
});
