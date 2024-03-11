<script setup>
import { ref, watch } from 'vue';
import { universityService } from '~/services/universityService';

import { Pagination, PaginationEllipsis, PaginationList, PaginationListItem } from '@/components/ui/pagination';

import { Button } from '@/components/ui/button';

const university_directions = ref([]);

const total = ref(null);

const params = ref({
   university__name: '',
   direction_code: null,
   state_grant: null,
   contract: null,
   search: '',
   limit: 50,
   offset: 0
});

async function getUniversityDirections() {
   try {
      const response = await universityService.university_directions(params.value);
      university_directions.value = response.results;
      total.value = response.count;
   } catch (error) {
      //
   }
}

function goToPage(index) {
   params.value.offset = (index - 1) * params.value.limit;
}

onMounted(() => {
   getUniversityDirections();
});

watch(
   params,
   () => {
      getUniversityDirections();
   },
   { deep: true }
);
</script>

<template>
   <div class="py-8">
      <div class="container">
         <h1 class="text-center sm:text-left text-xl font-semibold">Qabul kvotalari va kirish ballari</h1>
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <Input placeholder="Universitet nomi" type="text" v-model="params.university__name" />
            <Input placeholder="Ta'lim yo'nalish kodi" type="number" v-model="params.direction_code" />
            <Input placeholder="Barchasi" type="text" v-model="params.search" />
            <Input placeholder="Grand" type="number" v-model="params.state_grant" />
            <Input placeholder="Kontrakt" type="number" v-model="params.contract" />
         </div>

         <div class="relative overflow-x-auto my-6">
            <table class="w-full text-sm text-left rtl:text-right">
               <thead>
                  <tr class="border-b border-border text-center">
                     <th scope="col" class="px-6 py-4">#</th>
                     <th scope="col" class="px-6 py-4">Universitet</th>
                     <th scope="col" class="px-6 py-4">Ta'lim yo'nalish kodi</th>
                     <th scope="col" class="px-6 py-4">Davlat granti</th>
                     <th scope="col" class="px-6 py-4">To'lov shartnoma</th>
                  </tr>
               </thead>
               <tbody>
                  <tr
                     class="border-b border-border hover:bg-gray-100 transition-all duration-300 text-center odd:bg-gray-50 dark:odd:bg-black"
                     v-for="(item, i) in university_directions"
                     :key="item.id"
                  >
                     <td class="px-6 py-4">{{ i + 1 }}</td>
                     <td class="px-6 py-4">{{ item.university.split('/')[0] }}</td>
                     <td class="px-6 py-4">{{ item.direction_code }}</td>
                     <td class="px-6 py-4">{{ item.state_grant }}</td>
                     <td class="px-6 py-4">{{ item.contract }}</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <Pagination
            v-slot="{ page }"
            :total="Math.ceil(total / params.limit) * 10"
            :sibling-count="1"
            show-edges
            :default-page="1"
         >
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
               <template v-for="(item, index) in items">
                  <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                     <Button
                        class="w-8 h-8 sm:w-9 sm:h-9 p-0"
                        :variant="item.value === page ? 'default' : 'outline'"
                        @click="goToPage(item.value)"
                     >
                        {{ item.value }}
                     </Button>
                  </PaginationListItem>
                  <PaginationEllipsis v-else :key="item.type" :index="index" />
               </template>
            </PaginationList>
         </Pagination>
      </div>
   </div>
</template>
