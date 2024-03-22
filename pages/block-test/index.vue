<script setup>
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ref } from 'vue';

const { sciences, subjects, getSciences, getSubjects, startSciencesTest, loading } = useTests();

const questionsCount = ref(5);

const selectedLevel = ref('beginner');

const scienceId = ref(null);

const subjectList = ref([]);

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

function handleChange(id) {
   if (!subjectList.value.includes(id)) {
      subjectList.value.push(id);
   } else {
      subjectList.value = subjectList.value.filter((item) => item !== id);
   }
}

function startTest() {
   const paramtersModel = {
      subject_list: subjectList.value,
      science_id: scienceId.value,
      test_score: selectedLevel.value,
      test_count: questionsCount.value
   };
   startSciencesTest(paramtersModel);
}

onMounted(() => {
   getSciences();
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="flex flex-wrap gap-2 border-b border-border pb-8">
            <Button v-for="item in sciences" :key="item.id" :variant="item.id === scienceId ? '' : 'outline'" @click="selectedScience(item.id)">
               {{ item.name }}
            </Button>
         </div>
         <div class="mt-6">
            <h4 class="text-base font-semibold mb-4">Mavzuni tanlang</h4>
            <div class="flex flex-col space-y-2">
               <div class="flex items-center space-x-4" v-for="item in subjects" :key="item.id">
                  <Checkbox :id="item.id" :checked="subjectList.includes(item.id)" @update:checked="handleChange(item.id)" />
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
                        <SelectItem v-for="item in questionLevelList" :key="item.id" :value="item.id" :disabled="item.disabled">
                           {{ item.name }}
                        </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>

         <div class="flex justify-center mt-6">
            <Button size="lg" @click="startTest" :disabled="!scienceId || !subjectList.length > 0 || !selectedLevel || !questionsCount">
               <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="mr-2 h-4 w-4 animate-spin" v-if="loading">
                  <path
                     fill="none"
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M21 12a9 9 0 1 1-6.219-8.56"
                  ></path>
               </svg>
               Testni boshlash
            </Button>
         </div>
      </div>
   </div>
</template>
