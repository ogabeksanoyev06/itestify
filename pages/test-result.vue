<script setup>
const testResult = useCookie('testResult');
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="flex flex-col items-center space-y-6">
            <h1 class="text-2xl md:text-3xl font-bold">Test Natijasi: {{ testResult?.science }}</h1>
            <div class="flex justify-between flex-wrap gap-3 text-center mt-4 max-w-[900px] w-full mx-auto">
               <div class="col-span-2">
                  <p class="text-primary text-[48px] font-bold">{{ testResult?.questions?.length }}</p>
                  <p class="text-sm font-medium">Savollar soni</p>
               </div>
               <div class="col-span-2">
                  <p class="text-[#7B61FF] text-[48px] font-bold">{{ testResult?.total_ball }}</p>
                  <p class="text-sm font-medium">Umumiy ball</p>
               </div>
               <div class="col-span-2">
                  <p class="text-orange-600 text-[48px] font-bold">{{ testResult?.incorrect_ans }}</p>
                  <p class="text-sm font-medium">Noto'g'ri javoblar</p>
               </div>
               <div class="col-span-2">
                  <p class="text-green-600 text-[48px] font-bold">{{ testResult?.correct_ans }}</p>
                  <p class="text-sm font-medium">To'g'ri javoblar natija</p>
               </div>
            </div>
         </div>
         <div class="flex justify-center mt-10">
            <nuxt-link to="/profile/tests-results"><Button size="lg">Barcha natijalar</Button></nuxt-link>
         </div>
      </div>
   </div>
</template>
