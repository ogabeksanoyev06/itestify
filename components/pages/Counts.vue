<script setup>
const { statistics, getStatistics } = useCommonData();

onMounted(() => {
   getStatistics();
});
</script>

<template>
   <div class="py-16 my-6 bg-gray-100">
      <div class="container">
         <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b">
               <span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M3 21.3252V19.3252C3 18.2643 3.42143 17.2469 4.17157 16.4968C4.92172 15.7466 5.93913 15.3252 7 15.3252H11C11.96 15.3252 12.84 15.6632 13.53 16.2262M16 3.4552C16.8604 3.6755 17.623 4.1759 18.1676 4.87751C18.7122 5.57912 19.0078 6.44203 19.0078 7.3302C19.0078 8.21837 18.7122 9.08128 18.1676 9.78289C17.623 10.4845 16.8604 10.9849 16 11.2052M16 19.3252H22M19 16.3252V22.3252M5 7.3252C5 8.38606 5.42143 9.40348 6.17157 10.1536C6.92172 10.9038 7.93913 11.3252 9 11.3252C10.0609 11.3252 11.0783 10.9038 11.8284 10.1536C12.5786 9.40348 13 8.38606 13 7.3252C13 6.26433 12.5786 5.24691 11.8284 4.49677C11.0783 3.74662 10.0609 3.3252 9 3.3252C7.93913 3.3252 6.92172 3.74662 6.17157 4.49677C5.42143 5.24691 5 6.26433 5 7.3252Z"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-5 h-5"
                     />
                  </svg>
               </span>
               <h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">{{ statistics.users_count }} +</h3>
               <p class="text-sm text-muted-foreground">Foydalanuvchilar</p>
            </div>
            <div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b">
               <span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M3 21.3252V19.3252C3 18.2643 3.42143 17.2469 4.17157 16.4968C4.92172 15.7466 5.93913 15.3252 7 15.3252H11C11.96 15.3252 12.84 15.6632 13.53 16.2262M16 3.4552C16.8604 3.6755 17.623 4.1759 18.1676 4.87751C18.7122 5.57912 19.0078 6.44203 19.0078 7.3302C19.0078 8.21837 18.7122 9.08128 18.1676 9.78289C17.623 10.4845 16.8604 10.9849 16 11.2052M16 19.3252H22M19 16.3252V22.3252M5 7.3252C5 8.38606 5.42143 9.40348 6.17157 10.1536C6.92172 10.9038 7.93913 11.3252 9 11.3252C10.0609 11.3252 11.0783 10.9038 11.8284 10.1536C12.5786 9.40348 13 8.38606 13 7.3252C13 6.26433 12.5786 5.24691 11.8284 4.49677C11.0783 3.74662 10.0609 3.3252 9 3.3252C7.93913 3.3252 6.92172 3.74662 6.17157 4.49677C5.42143 5.24691 5 6.26433 5 7.3252Z"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-5 h-5"
                     />
                  </svg>
               </span>
               <h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">{{ statistics.schools_count }} +</h3>
               <p class="text-sm text-muted-foreground">Maktablar</p>
            </div>
            <div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b">
               <span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M3 21.3252V19.3252C3 18.2643 3.42143 17.2469 4.17157 16.4968C4.92172 15.7466 5.93913 15.3252 7 15.3252H11C11.96 15.3252 12.84 15.6632 13.53 16.2262M16 3.4552C16.8604 3.6755 17.623 4.1759 18.1676 4.87751C18.7122 5.57912 19.0078 6.44203 19.0078 7.3302C19.0078 8.21837 18.7122 9.08128 18.1676 9.78289C17.623 10.4845 16.8604 10.9849 16 11.2052M16 19.3252H22M19 16.3252V22.3252M5 7.3252C5 8.38606 5.42143 9.40348 6.17157 10.1536C6.92172 10.9038 7.93913 11.3252 9 11.3252C10.0609 11.3252 11.0783 10.9038 11.8284 10.1536C12.5786 9.40348 13 8.38606 13 7.3252C13 6.26433 12.5786 5.24691 11.8284 4.49677C11.0783 3.74662 10.0609 3.3252 9 3.3252C7.93913 3.3252 6.92172 3.74662 6.17157 4.49677C5.42143 5.24691 5 6.26433 5 7.3252Z"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-5 h-5"
                     />
                  </svg>
               </span>
               <h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">{{ statistics.tests_count }} +</h3>
               <p class="text-sm text-muted-foreground">Testlar</p>
            </div>
         </div>
      </div>
   </div>
</template>
