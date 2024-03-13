<script setup>
import { useRouter } from 'vue-router';
import { testService } from '~/services/testService';
import { test } from '~/constants/test';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const router = useRouter();

const { $toast } = useNuxtApp();

const loading = ref(false);

const testTypes = ref([]);

async function getTestTypes() {
   loading.value = true;
   try {
      const response = await testService.testTypes('test');
      testTypes.value = response;
   } catch (error) {
      console.log(error);
   } finally {
      loading.value = false;
   }
}

async function buyExams(test_id) {
   try {
      const response = await testService.buyExams({
         test_type: test_id
      });
      if (response.code === 200) {
         $toast.success(response.message);
         getTestTypes();
      }
   } catch (error) {
      error.response.data.message.non_field_errors?.forEach((errMsg) => {
         $toast.error(errMsg);
      });
      $toast.error(error.response.data.message);
   } finally {
   }
}

function selectedTestType(testType) {
   switch (testType) {
      case test.TYPE_ONLINE:
         startOnlineTest();
         break;
      case test.TYPE_BLOCK:
         startBlockTest();
         break;
      case test.TYPE_SCHOOL:
         startSchoolTest();
         break;
      default:
         return null;
   }
}

function startOnlineTest() {
   router.push({ path: '/online-test' });
}

function startBlockTest() {
   router.push({ path: '/block-test' });
}

function startSchoolTest() {
   router.push({ path: '/school-test' });
}

onMounted(() => {
   getTestTypes();
});
</script>

<template>
   <section class="py-8">
      <div class="container">
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
                        <Button v-if="item.bought" class="w-full sm:w-auto" @click="selectedTestType(item.name)"> Testni boshlash </Button>

                        <Button v-if="!item.bought" variant="outline" class="w-full sm:w-auto" @click="buyExams(item.id)">
                           Testni sotib olish
                        </Button>
                        <Button variant="outline" class="w-full sm:w-auto">Hisobni to'ldirish</Button>
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
