<script setup>
import { testService } from '~/services/testService';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const sciences = ref([]);

const classes = ref([]);

const activeScience = ref(null);

const questionsCountSelect = ref([
   {
      id: 5,
      name: 5
   },
   {
      id: 10,
      name: 10
   },
   {
      id: 15,
      name: 15
   },
   {
      id: 20,
      name: 20
   },
   {
      id: 25,
      name: 25
   },
   {
      id: 30,
      name: 30
   }
]);

const questionLevelList = ref([
   {
      id: 'beginner',
      name: 'Oson',
      disabled: false
   },
   {
      id: 'medium',
      name: "O'rta",
      disabled: true
   },
   {
      id: 'advanced',
      name: 'Qiyin',
      disabled: true
   }
]);

const questionsCount = ref(5);

const selectedClass = ref(2);

const selectedLevel = ref('beginner');

function selectedScience(id) {
   activeScience.value = id;
}

async function getSciences() {
   try {
      const response = await testService.sciences();
      sciences.value = response;
   } catch (error) {
      console.error('Error fetching user:', error);
   } finally {
   }
}

async function getClasses() {
   try {
      const response = await testService.classes();
      classes.value = response;
   } catch (error) {
      console.error('Error fetching user:', error);
   } finally {
   }
}

onMounted(() => {
   getSciences();
   getClasses();
});
</script>

<template>
   <div class="py-8">
      <div class="flex flex-wrap gap-3 border-b border-border pb-8">
         <Button
            v-for="item in sciences"
            :key="item.id"
            @click="selectedScience(item.id)"
            :variant="item.id === activeScience ? '' : 'outline'"
         >
            {{ item.name }}
         </Button>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
         <div>
            <Select v-model="questionsCount">
               <SelectTrigger>
                  <SelectValue placeholder="Savollar sonini tanlang" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Savollar sonini tanlang</SelectLabel>
                     <SelectItem v-for="item in questionsCountSelect" :key="item.id" :value="item.id">
                        {{ item.name }}
                     </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
         <div>
            <Select v-model="selectedClass">
               <SelectTrigger>
                  <SelectValue placeholder="Sinfni tanlang" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Sinfni tanlang</SelectLabel>
                     <SelectItem v-for="item in classes" :key="item.id" :value="item.id">
                        {{ item.number }}
                     </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
         <div>
            <Select v-model="selectedLevel">
               <SelectTrigger>
                  <SelectValue placeholder="Darajani tanlang" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Darajani tanlang</SelectLabel>
                     <SelectItem
                        v-for="item in questionLevelList"
                        :key="item.id"
                        :value="item.id"
                        :disabled="item.disabled"
                     >
                        {{ item.name }}
                     </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
      </div>
      <div class="mt-6">
         <div class="relative overflow-x-auto my-6">
            <table class="w-full text-sm text-left rtl:text-right">
               <tbody>
                  <tr class="bg-primary text-white">
                     <th scope="col" class="px-6 py-4">#</th>
                     <th scope="col" class="px-6 py-4">Tanlangan fan</th>
                     <th scope="col" class="px-6 py-4">Sinf</th>
                     <th scope="col" class="px-6 py-4">Savollar soni</th>
                     <th scope="col" class="px-6 py-4">Qiyinchilik darajasi</th>
                     <th scope="col" class="px-6 py-4">Ball</th>
                  </tr>
                  <tr class="border-b border-border hover:bg-gray-100 dark:hover:bg-black transition-all duration-300">
                     <td class="px-6 py-4">1</td>
                     <td class="px-6 py-4">Ona tili</td>
                     <td class="px-6 py-4">10</td>
                     <td class="px-6 py-4">30</td>
                     <td class="px-6 py-4">Oson</td>
                     <td class="px-6 py-4">1</td>
                  </tr>

                  <tr
                     class="text-white"
                     style="background: linear-gradient(rgb(68, 137, 247) 0%, rgb(0, 78, 203) 100%)"
                  >
                     <th colspan="3" class="px-6 py-4 text-center">Umumiy ball</th>
                     <th colspan="3" class="px-6 py-4 text-center">30</th>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      <div class="flex justify-center mt-6"><Button size="lg">Testni boshlash</Button></div>
   </div>
</template>
