<script setup>
const { testTypes, getTestTypes } = useTests();

onMounted(() => {
   getTestTypes();
});
</script>

<template>
   <div class="py-8 mt-6">
      <div class="container">
         <div class="space-y-2 max-w-[900px] text-center mx-auto">
            <h1
               class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-green-500 to-sky-500/50 bg-clip-text"
            >
               Bizda mavjud testlar
            </h1>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="(item, index) in testTypes" :key="index" data-aos="fade-up" class="min-h-[150px]" :data-aos-duration="(index + 1) * 100">
               <div class="h-full flex flex-col bg-[#f6f6f7] dark:bg-[#202127] rounded-xl p-6 space-y-4">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true"
                     role="img"
                     class="icon text-primary size-8 shrink-0"
                     width="1em"
                     height="1em"
                     viewBox="0 0 512 512"
                  >
                     <path
                        fill="currentColor"
                        d="M502 10v140H362V10zm-176 0v140H186V10zm-176 0v140H10V10zm352 176v140H362V186zM512 0H352v160h160zM336 0H176v160h160zM160 0H0v160h160zm352 176H352v160h160zM336 336H176V176h160zm0 16H176v160h160zm176 0H352v160h160zm-352 0H0v160h160z"
                     ></path>
                  </svg>
                  <h3 class="font-semibold leading-none tracking-tight text-base md:text-xl">{{ item.title }}</h3>
                  <p class="text-sm text-muted-foreground">
                     {{ item.short_description }}
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
