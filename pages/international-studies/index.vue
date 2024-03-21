<script setup>
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageLoader from '~/components/pages/PageLoader.vue';

const { testTypes, loading, buyExams, getTestTypes } = useTests();
const { hasActiveTest, getActiveTest } = useActiveTest();

const router = useRouter();

const handleTestStart = async (research_id) => {
   try {
      await getActiveTest();
      if (hasActiveTest.value) {
         router.push({
            path: '/test'
         });
      } else {
         router.push({
            path: `/international-studies/${research_id}`
         });
      }
   } catch (error) {}
};

onMounted(() => {
   getTestTypes('research');
});
</script>

<template>
   <section class="py-8">
      <PageLoader v-if="loading" />
      <div class="container" v-else>
         <div class="flex flex-col justify-center sm:justify-start space-y-4">
            <h1 class="text-center sm:text-left text-2xl font-semibold sm:text-3xl">Abiturientlar va o'quvchilar uchun test topshirish tizimi</h1>
            <p class="text-center sm:text-left text-sm text-muted-foreground sm:text-base">
               DTM talablari asosida tuzilgan 40 000 ta test savollaridan foydalangan holda test topshirish imkoni
            </p>
         </div>
         <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div v-for="(item, i) in testTypes" :key="i">
               <div
                  class="relative min-h-[250px] h-full overflow-hidden transition border border-border rounded-md group hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
               >
                  <div class="h-full flex flex-col justify-between p-2 sm:p-4 gap-2">
                     <div class="flex flex-col gap-2">
                        <img
                           src="/assets/images/icon.jpg"
                           class="w-10 h-10 group-hover:scale-105 transition-transform duration-500 mt-1 sm:mt-0 mb-2"
                        />

                        <h3 class="font-semibold text-base leading-none tracking-tight line-clamp-2">
                           {{ item.title }}
                        </h3>
                        <p class="text-sm text-muted-foreground">
                           {{ item.short_description }}
                        </p>
                     </div>
                     <div class="flex items-center justify-center flex-col sm:flex-row sm:justify-between mt-auto">
                        <Button v-if="item.is_free" class="w-full sm:w-auto" @click="handleTestStart(item.id, item.name)"> Testni boshlash </Button>

                        <Button v-if="!item.is_free" variant="outline" class="w-full sm:w-auto" @click="buyExams(item.id, 'research')">
                           Testni sotib olish
                        </Button>
                        <Button variant="outline" class="w-full sm:w-auto" @click="router.push({ path: '/profile/top-up-balance' })">
                           Hisobni to'ldirish
                        </Button>
                     </div>
                  </div>

                  <div class="absolute top-0 right-0">
                     <Badge variant="secondary" class="text-blue-500 text-sm">{{ item.price }} so'm</Badge>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<style>
@keyframes scaleImg {
   0% {
      transform: scale(1);
   }
   100% {
      transform: scale(0.8);
   }
}
</style>
