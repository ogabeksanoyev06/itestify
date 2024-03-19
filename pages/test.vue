<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TestLoader from '~/components/pages/TestLoader.vue';

definePageMeta({
   middleware: 'auth'
});

const {
   tests,
   testTimer,
   testNumber,
   selectedQuestion,
   loading,
   testFinish,
   timerFormat,
   setTimer,
   selectedQuestions,
   selectAnswer,
   getActiveTestNumber,
   prev,
   next,
   getActiveTest,
   getTestLiveTime
} = useActiveTest();

const answerLabels = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

const route = useRoute();

onMounted(async () => {
   await getActiveTest();
   await getTestLiveTime();
   selectedQuestions();
   setTimer();
});

watch(route, () => {
   selectedQuestions();
});
</script>

<template>
   <div class="py-8">
      <TestLoader v-if="loading" />
      <div class="sm:container" v-else>
         <div class="flex flex-col gap-4">
            <div class="flex justify-center items-center flex-col md:!flex-row md:!justify-between gap-2 p-4 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
               <span class="text-base font-bold text-center"> {{ tests.subjectName }} </span>
               <span class="max-w-[150px] w-full text-center text-2xl rounded p-1 bg-green-100 text-primary">
                  {{ timerFormat(testTimer) }}
               </span>
            </div>
            <div class="px-4 py-8 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
               <div class="flex flex-col">
                  <div id="question" class="flex items-start space-x-1 mb-4">
                     <span id="question_number" class="text-sm font-bold">{{ testNumber }}.</span>
                     <span id="question_text" class="text-sm" v-html="selectedQuestion.question"> </span>
                  </div>
                  <ul id="answers" class="flex flex-col gap-2">
                     <li
                        class="text-sm cursor-pointer border border-border rounded flex items-start gap-1 py-4 px-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                        v-for="(answer, aIndex) in selectedQuestion.answers"
                        :key="aIndex"
                        @click="selectAnswer(selectedQuestion.id, aIndex + 1)"
                        :class="{ 'border-primary': aIndex + 1 === selectedQuestion.answer }"
                     >
                        <span class="font-semibold">{{ answerLabels[aIndex] + ')' }}</span>
                        <span class="" v-html="answer"> </span>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="p-4 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
               <ul class="pagination-list flex flex-wrap gap-2 justify-center border-b border-border pb-4">
                  <Button
                     v-for="(item, index) in tests.questions"
                     :key="item.id"
                     :variant="index + 1 === testNumber ? 'default' : item.isPicked ? 'secondary' : 'outline'"
                     @click="getActiveTestNumber(index + 1)"
                     class="w-8 h-8"
                  >
                     {{ index + 1 }}
                  </Button>
               </ul>
               <div class="flex flex-col justify-center items-center gap-4 sm:justify-between sm:flex-row pt-4">
                  <div class="flex flex-wrap gap-4">
                     <Button size="lg" @click="prev">Orqaga</Button> <Button size="lg" @click="next">Oldinga</Button>
                  </div>

                  <Button size="lg" variant="danger" class="bg-red-500" @click="testFinish">Yakunlash</Button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
