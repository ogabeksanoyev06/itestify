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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { $toast } = useNuxtApp();

const router = useRouter();

const sciences = ref([]);

const subjects = ref([]);

const subjectList = ref([]);

const questionsCount = ref(5);

const selectedLevel = ref('beginner');

const scienceId = ref(null);

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
   scienceId.value = id;
   subjectList.value = [];
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

function handleChange(id) {
   if (!subjectList.value.includes(id)) {
      subjectList.value.push(id);
   } else {
      subjectList.value = subjectList.value.filter((item) => item !== id);
   }
}

async function startSciencesTest() {
   let paramtersModel = {};
   paramtersModel.subject_list = subjectList.value;
   paramtersModel.science_id = scienceId.value;
   paramtersModel.test_score = selectedLevel.value;
   paramtersModel.test_count = questionsCount.value;
   try {
      const response = await testService.sciencesTest(paramtersModel);
      if (response.code === 500) {
         $toast.error(response.message);
      } else {
         router.push({ path: '/test' });
      }
   } catch (error) {
      $toast.error(error.response.data.message);
   } finally {
   }
}

onMounted(() => {
   getSciences();
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="flex flex-wrap gap-2 border-b border-border pb-8">
            <Button
               v-for="item in sciences"
               :key="item.id"
               @click="selectedScience(item.id)"
               :variant="item.id === scienceId ? '' : 'outline'"
            >
               {{ item.name }}
            </Button>
         </div>
         <div class="mt-6">
            <h4 class="text-base font-semibold mb-4">Mavzuni tanlang</h4>
            <div class="flex flex-col space-y-2">
               <div class="flex items-center space-x-4" v-for="item in subjects" :key="item.id">
                  <Checkbox
                     :id="item.id"
                     :checked="subjectList.includes(item.id)"
                     @update:checked="handleChange(item.id)"
                  />
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

         <div class="flex justify-center mt-6">
            <Button size="lg" @click="startSciencesTest">Testni boshlash</Button>
         </div>
      </div>
   </div>
</template>
