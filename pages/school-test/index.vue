<script setup>
import { testService } from '~/services/testService';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const { $toast } = useNuxtApp();

const loading = ref(false);

const sciences = ref([]);

const classes = ref([]);

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

async function getSciences() {
   loading.value = true;
   try {
      const response = await testService.sciences();
      sciences.value = response;
   } catch (error) {
      console.error('Error fetching user:', error);
   } finally {
      loading.value = false;
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

async function startSchoolTest() {
   loading.value = true;
   let paramtersModel = {};
   paramtersModel.science_id = activeScience.value;
   paramtersModel.class_id = selectedClass.value;
   paramtersModel.test_score = selectedLevel.value;
   paramtersModel.test_count = questionsCount.value;

   try {
      const response = await testService.schoolTest(paramtersModel);
      if (parseInt(response.code) === 500) {
         $toast.error(response.message);
      } else {
         router.push({ path: '/test' });
      }
   } catch (error) {
      $toast.error(error.response.data.message);
   } finally {
      loading.value = false;
   }
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
         <div class="flex justify-center mt-6"><Button size="lg" @click="startSchoolTest">Testni boshlash</Button></div>
      </div>
   </div>
</template>
