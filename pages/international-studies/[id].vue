<script setup>
import { useRoute } from 'vue-router';
import { testService } from '~/services/testService';

const route = useRoute();

const loading = ref(false);

const research_id = ref('');

const researchCategory = ref({});

async function getResearchId(id) {
   loading.value = true;
   try {
      const response = await testService.researchesId('2');
      researchCategory.value = response;
   } catch (error) {
      console.log(error);
   } finally {
      loading.value = false;
   }
}

onMounted(() => {
   research_id.value = route.params.id;
   getResearchId(5);
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="flex flex-col justify-center sm:justify-start space-y-3">
            <h1 class="text-center sm:text-left text-2xl font-bold sm:text-3xl">
               {{ researchCategory.title }}
            </h1>
            <p class="text-center sm:text-left text-sm text-muted-foreground sm:text-base">
               {{ researchCategory.description }}
            </p>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div
               class="rounded-xl border bg-card text-card-foreground shadow cursor-pointer min-h-[130px] hover:shadow-none transition-all duration-300 bg-[url(https://www.fozilov.uz/assets/Light.png)] bg-[length:200px_200px]"
               v-for="item in researchCategory.specifications"
               :key="item.id"
            >
               <div class="flex flex-col justify-between h-full gap-y-1.5 p-6">
                  <h3 class="font-semibold leading-none tracking-tight">{{ item.name }}</h3>
                  <div class="flex flex-col gap-y-1">
                     <p class="text-sm text-muted-foreground">
                        Umumiy vaqt: <span class="font-semibold">{{ item.total_time }} daqiqa</span>
                     </p>
                     <p class="text-sm text-muted-foreground">
                        Ball: <span class="font-semibold">{{ item.ball }} ball</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped></style>
