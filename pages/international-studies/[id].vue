<script setup>
import { useRoute } from 'vue-router';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';
definePageMeta({
   middleware: ['auth']
});
const { loading, researches, getResearchById, startResearchesTest } = useTests();

const route = useRoute();

const research_id = ref('');

const selected_specification = ref(null);

const questionsCount = ref(5);

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

function selectedSpecification(item) {
   selected_specification.value = item.id;
}

function startTest() {
   const paramtersModel = {
      test_type_id: research_id.value,
      specification_id: selected_specification.value,
      question_count: questionsCount.value
   };
   startResearchesTest(paramtersModel);
}

onMounted(() => {
   research_id.value = route.params.id;
   getResearchById(route.params.id);
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="flex flex-col justify-center sm:justify-start space-y-3">
            <h1 class="text-center sm:text-left text-2xl font-bold sm:text-3xl">
               {{ researches.title }}
            </h1>
            <p class="text-center sm:text-left text-sm text-muted-foreground sm:text-base">
               {{ researches.short_description }}
            </p>
         </div>
         <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div
               class="rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer min-h-[130px] hover:shadow-none transition-all duration-300 bg-[url('https://www.fozilov.uz/assets/Light.png')] bg-[length:200px_200px]"
               v-for="item in researches.specifications"
               :key="item.id"
               @click="selectedSpecification(item)"
               :class="{ 'border-primary': selected_specification === item.id }"
            >
               <div class="flex flex-col justify-between h-full gap-y-1.5 p-6">
                  <h3 class="font-semibold leading-none tracking-tight">{{ item.name }}</h3>
                  <div class="flex flex-col gap-y-1">
                     <p class="text-sm text-muted-foreground">
                        Umumiy vaqt: <span class="font-semibold">{{ item.total_time }} daqiqa</span>
                     </p>
                     <p class="text-sm text-muted-foreground">
                        Ball: <span class="font-semibold">{{ item.ball }} ball</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div class="flex justify-center mt-6">
            <Button size="lg" @click="startTest" :disabled="!selected_specification || !questionsCount || loading">
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

<style lang="scss" scoped></style>
