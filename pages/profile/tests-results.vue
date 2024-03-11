<script setup>
definePageMeta({
   layout: 'cabinet'
});

import { useRouter } from 'vue-router';
import { testService } from '~/services/testService';

const router = useRouter();

const loading = ref(false);

const testHistory = ref([]);

async function getHistortTest() {
   loading.value = true;
   try {
      const response = await testService.testHistory();
      testHistory.value = response;
   } catch (error) {
      $toast.error(error.response.data.message);
   } finally {
      loading.value = false;
   }
}

const goToLink = (index, type) => {
   router.push({
      path: `/attempt/answer/${index}`,
      query: {
         type: type
      }
   });
};

onMounted(() => {
   getHistortTest();
});
</script>

<template>
   <div>
      <div class="flex flex-col text-center gap-2 mb-8">
         <h4 class="text-base sm:text-xl font-semibold">Mening urunishlarim</h4>
         <p class="text-base font-medium">Urinishlar soni: 17</p>
      </div>
      <div class="relative overflow-x-auto">
         <table class="w-full text-sm text-left rtl:text-right">
            <thead class="border-b">
               <tr class="text-center">
                  <th scope="col" class="p-4">#</th>
                  <th scope="col" class="p-4">Sana va vaqt</th>
                  <th scope="col" class="p-4">Test turi</th>
                  <th scope="col" class="p-4">To'plangan ball</th>
                  <th scope="col" class="p-4">Ko'rish</th>
               </tr>
            </thead>
            <tbody>
               <tr
                  class="bg-white border-b hover:bg-gray-100 transition-all duration-300 text-center"
                  v-for="(item, i) in testHistory"
                  :key="item"
               >
                  <td class="p-4 font-semibold">
                     {{ i }}
                  </td>
                  <td class="p-4">18.11.2023 10:19 - 11:15</td>

                  <td class="p-4">{{ item.type }}</td>
                  <td class="p-4">70.7</td>
                  <td class="p-4">
                     <span
                        class="flex items-center justify-center gap-1 cursor-pointer text-primary-700 hover:text-primary-800 transition-all"
                        @click="goToLink(item.id, item.type)"
                     >
                        Ko'rish
                        <svg
                           width="24"
                           height="25"
                           viewBox="0 0 24 25"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           class="w-5"
                        >
                           <path
                              d="M10 12.3252C10 12.8556 10.2107 13.3643 10.5858 13.7394C10.9609 14.1145 11.4696 14.3252 12 14.3252C12.5304 14.3252 13.0391 14.1145 13.4142 13.7394C13.7893 13.3643 14 12.8556 14 12.3252C14 11.7948 13.7893 11.2861 13.4142 10.911C13.0391 10.5359 12.5304 10.3252 12 10.3252C11.4696 10.3252 10.9609 10.5359 10.5858 10.911C10.2107 11.2861 10 11.7948 10 12.3252Z"
                              stroke="#3061af"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M21 12.3252C18.6 16.3252 15.6 18.3252 12 18.3252C8.4 18.3252 5.4 16.3252 3 12.3252C5.4 8.3252 8.4 6.3252 12 6.3252C15.6 6.3252 18.6 8.3252 21 12.3252Z"
                              stroke="#3061af"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </span>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="flex items-center justify-center flex-col sm:flex-row sm:justify-between mt-8 gap-4">
         <p><span class="font-semibold">17</span> yozuvdan 1 dan 10 gacha ko'rsatilmoqda</p>
         <Pagination v-slot="{ page }" :total="100" :sibling-count="0" show-edges :default-page="1">
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
               <PaginationPrev class="w-8 h-8" />

               <template v-for="(item, index) in items">
                  <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                     <Button class="w-8 h-8 p-0" :variant="item.value === page ? 'default' : 'outline'">
                        {{ item.value }}
                     </Button>
                  </PaginationListItem>
                  <PaginationEllipsis v-else :key="item.type" :index="index" />
               </template>

               <PaginationNext class="w-8 h-8" />
            </PaginationList>
         </Pagination>
      </div>
   </div>
</template>
