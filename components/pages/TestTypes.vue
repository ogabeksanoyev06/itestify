<script setup>
const { testTypes, getTestTypes } = useTests();

onMounted(() => {
   getTestTypes();
});
</script>

<template>
   <div class="py-8 mt-6">
      <div class="container">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(item, index) in testTypes" :key="index" data-aos="fade-up" :data-aos-duration="(index + 1) * 100">
               <div
                  ref="container"
                  class="rounded-xl border border-border bg-card text-card-foreground shadow min-h-[200px] h-full cursor-pointer hover:shadow-none transition-all duration-300"
               >
                  <div class="flex flex-col justify-center h-full gap-y-2 p-6">
                     <div class="pointer-events-none">
                        <span class="flex-shrink-0">
                           <img src="https://cdn.commeta.uz/100x/https://cdn.commeta.uz/media/media/Group_MVewrf7.svg" class="w-8 h-8" />
                        </span>
                     </div>
                     <div class="flex flex-col space-y-2">
                        <h3 class="font-semibold leading-none tracking-tight text-base md:text-xl">{{ item.title }}</h3>
                        <p class="text-sm text-muted-foreground">
                           {{ item.short_description }}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
