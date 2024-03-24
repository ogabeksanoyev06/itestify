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
            <!-- <countTo :startVal="0" :endVal="2000" :duration="3000"></countTo> -->
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
               <h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">{{ statistics.users_count }}+</h3>
               <p class="text-sm text-muted-foreground">Foydalanuvchilar</p>
            </div>
            <div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b">
               <span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M9 21.3253V15.3253C9 14.7949 9.21071 14.2862 9.58579 13.9111C9.96086 13.536 10.4696 13.3253 11 13.3253H13C13.5304 13.3253 14.0391 13.536 14.4142 13.9111C14.7893 14.2862 15 14.7949 15 15.3253M19 13.8133V12.3253H21L12 3.32532L3 12.3253H5V19.3253C5 19.8558 5.21071 20.3645 5.58579 20.7395C5.96086 21.1146 6.46957 21.3253 7 21.3253H11.525M15 19.3253L17 21.3253L21 17.3253"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </span>
               <h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">{{ statistics.schools_count }}+</h3>
               <p class="text-sm text-muted-foreground">Maktablar</p>
            </div>
            <div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b">
               <span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M6 12.3252C5.46957 12.3252 4.96086 12.1145 4.58579 11.7394C4.21071 11.3643 4 10.8556 4 10.3252C4 9.79476 4.21071 9.28605 4.58579 8.91098C4.96086 8.53591 5.46957 8.3252 6 8.3252M6 12.3252C6.53043 12.3252 7.03914 12.1145 7.41421 11.7394C7.78929 11.3643 8 10.8556 8 10.3252C8 9.79476 7.78929 9.28605 7.41421 8.91098C7.03914 8.53591 6.53043 8.3252 6 8.3252M6 12.3252V20.3252M6 8.3252V4.3252M13.577 15.0952C13.3154 14.7601 12.9537 14.5171 12.5446 14.4014C12.1355 14.2858 11.7002 14.3035 11.3018 14.4521C10.9035 14.6006 10.5628 14.8723 10.3293 15.2275C10.0958 15.5828 9.98156 16.0033 10.0032 16.4279C10.0249 16.8525 10.1812 17.2591 10.4497 17.5888C10.7181 17.9185 11.0846 18.1541 11.496 18.2613C11.9074 18.3686 12.3423 18.342 12.7375 18.1853C13.1328 18.0287 13.4678 17.7502 13.694 17.3902M12 4.3252V14.3252M19 22.3252V22.3352M19 19.3252C19.4483 19.3238 19.8832 19.172 20.235 18.8941C20.5868 18.6163 20.8352 18.2285 20.9406 17.7927C21.0459 17.357 21.0019 16.8985 20.8158 16.4906C20.6297 16.0828 20.3122 15.7492 19.914 15.5432C19.5162 15.3394 19.0611 15.2762 18.6228 15.3639C18.1845 15.4516 17.7888 15.685 17.5 16.0262M12 18.3252V20.3252M18 9.3252C17.4696 9.3252 16.9609 9.11448 16.5858 8.73941C16.2107 8.36434 16 7.85563 16 7.3252C16 6.79476 16.2107 6.28605 16.5858 5.91098C16.9609 5.53591 17.4696 5.3252 18 5.3252M18 9.3252C18.5304 9.3252 19.0391 9.11448 19.4142 8.73941C19.7893 8.36434 20 7.85563 20 7.3252C20 6.79476 19.7893 6.28605 19.4142 5.91098C19.0391 5.53591 18.5304 5.3252 18 5.3252M18 9.3252V11.3252M18 5.3252V4.3252"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </span>
               <h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">{{ statistics.tests_count }}+</h3>
               <p class="text-sm text-muted-foreground">Testlar</p>
            </div>
         </div>
      </div>
   </div>
</template>
