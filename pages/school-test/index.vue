<script setup>
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
definePageMeta({
   middleware: ['auth']
});
const { sciences, classes, getSciences, getClasses, startSchoolTest, loading } = useTests();

const questionsCount = ref(5);

const selectedClass = ref(2);

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
}

function startTest() {
   const paramtersModel = {
      science_id: activeScience.value,
      class_id: selectedClass.value,
      test_score: selectedLevel.value,
      test_count: questionsCount.value
   };
   startSchoolTest(paramtersModel);
}

onMounted(() => {
   getSciences();
   getClasses();
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="flex flex-wrap gap-3 border-b border-border pb-8">
            <Button v-for="item in sciences" :key="item.id" @click="selectedScience(item.id)" :variant="item.id === activeScience ? '' : 'outline'">
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
                        <SelectItem v-for="item in questionLevelList" :key="item.id" :value="item.id" :disabled="item.disabled">
                           {{ item.name }}
                        </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>
         <div class="flex justify-center mt-12">
            <Button size="lg" :disabled="!activeScience || !selectedClass || !selectedLevel || !questionsCount" @click="startTest">
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
