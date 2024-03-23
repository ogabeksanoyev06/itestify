export default defineNuxtRouteMiddleware(async (to, from) => {
   const { hasActiveTest, getActiveTest } = useActiveTest();
   try {
      await getActiveTest();
      if (hasActiveTest.value) {
         if (to.path !== '/test') {
            return navigateTo('/test');
         }
      } else {
         if (to.path !== '/') {
            return navigateTo('/');
         }
      }
   } catch (error) {
      return navigateTo('/');
   }
});
