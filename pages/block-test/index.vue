<script setup>
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue
} from '../../components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { testService } from '~/services/testService';

const sciences = ref([]);
const subjects = ref([]);

const questionsCount = ref(5);

const selectedLevel = ref('beginner');

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

function selectedScience(id) {
   activeScience.value = id;
   getSubjects(id);
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

async function getSubjects(science_id) {
   try {
      const response = await testService.subjects(science_id);
      subjects.value = response;
   } catch (error) {
      console.error('Error fetching user:', error);
   } finally {
   }
}

onMounted(() => {
   getSciences();
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
      <div class="mt-6">
         <h4 class="text-base font-semibold mb-4">Mavzuni tanlang</h4>
         <div class="flex flex-col space-y-2">
            <div class="flex items-center space-x-4" v-for="item in subjects" :key="item.id">
               <Checkbox :id="item.id" />
               <label
                  :for="item.id"
                  class="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  v-html="item.name"
               >
               </label>
            </div>
         </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
         <div>
            <Select>
               <SelectTrigger>
                  <SelectValue placeholder="Savollar sonini tanlang" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Tanlang</SelectLabel>
                     <SelectItem value="apple"> Apple </SelectItem>
                     <SelectItem value="banana"> Banana </SelectItem>
                     <SelectItem value="blueberry"> Blueberry </SelectItem>
                     <SelectItem value="grapes"> Grapes </SelectItem>
                     <SelectItem value="pineapple"> Pineapple </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
         <div>
            <Select>
               <SelectTrigger>
                  <SelectValue placeholder="Darajani tanlang" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Tanlang</SelectLabel>
                     <SelectItem value="apple"> Apple </SelectItem>
                     <SelectItem value="banana"> Banana </SelectItem>
                     <SelectItem value="blueberry"> Blueberry </SelectItem>
                     <SelectItem value="grapes"> Grapes </SelectItem>
                     <SelectItem value="pineapple"> Pineapple </SelectItem>
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
                     <th scope="col" class="px-6 py-4">Mavzu</th>
                     <th scope="col" class="px-6 py-4">Savollar soni</th>
                     <th scope="col" class="px-6 py-4">Qiyinchilik darajasi</th>
                     <th scope="col" class="px-6 py-4">Ball</th>
                  </tr>
                  <tr class="bg-white border-b hover:bg-gray-100 transition-all duration-300">
                     <td class="px-6 py-4">1</td>
                     <td class="px-6 py-4">Ona tili</td>
                     <td class="px-6 py-4">Tenglamalar</td>
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