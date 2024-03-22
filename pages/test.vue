<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import TestLoader from '~/components/pages/TestLoader.vue';

const router = useRouter();

const selectedQuestion = ref({});

const testActiveNumber = useCookie('testActiveNumber', { default: () => 0 });

const { tests, testTimer, loading, testFinish, timerFormat, setTimer, selectAnswer, getActiveTest, getTestLiveTime } = useActiveTest();

const answerLabels = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

const getActivetestActiveNumber = (number) => {
   if (number !== testActiveNumber.value) {
      testActiveNumber.value = number;
      selectedQuestions();
   }
};

const prev = () => {
   const prevNumber = testActiveNumber.value - 1;
   if (prevNumber >= 0) {
      getActivetestActiveNumber(prevNumber);
   }
};

const next = () => {
   const nextNumber = testActiveNumber.value + 1;
   if (nextNumber <= tests.value.questions.length - 1) {
      getActivetestActiveNumber(nextNumber);
   }
};

const selectedQuestions = () => {
   selectedQuestion.value = tests.value.questions[testActiveNumber.value];
};

onMounted(async () => {
   await getActiveTest();
   await getTestLiveTime();
   selectedQuestions();
   setTimer();
   if (tests.value === null) {
      router.push('/');
   }
});

onBeforeUnmount(() => {
   testActiveNumber.value = 0;
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
                     <span id="question_number" class="text-sm font-bold">{{ testActiveNumber + 1 }}.</span>
                     <span id="question_text" class="text-sm" v-html="selectedQuestion.question"> </span>
                  </div>
                  <ul id="answers" class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                     <li
                        class="text-sm cursor-pointer border border-transparent rounded flex items-center gap-2 p-2 bg-gray-100 hover:border-primary dark:hover:bg-gray-800 dark:bg-card transition-all duration-300 group"
                        v-for="(answer, aIndex) in selectedQuestion.answers"
                        :key="aIndex"
                        @click="selectAnswer(selectedQuestion.id, aIndex + 1, testActiveNumber + 1)"
                        :class="{ '!border-primary': aIndex + 1 === selectedQuestion.answer }"
                     >
                        <span
                           class="text-base font-medium min-w-10 min-h-8 bg-card dark:bg-foreground flex items-center justify-center text-center rounded"
                        >
                           {{ answerLabels[aIndex] }}
                        </span>
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
                     :variant="index === testActiveNumber ? 'default' : item.isPicked ? 'secondary' : 'outline'"
                     @click="getActivetestActiveNumber(index)"
                     class="w-8 h-8"
                  >
                     {{ index + 1 }}
                  </Button>
               </ul>
               <div class="flex flex-col justify-center items-center gap-4 sm:justify-between sm:flex-row pt-4">
                  <div class="flex flex-wrap gap-4">
                     <Button size="lg" @click="prev">Orqaga</Button>
                     <Button size="lg" @click="next">Oldinga</Button>
                  </div>
                  <Button size="lg" variant="danger" class="bg-red-500" @click="testFinish">Yakunlash</Button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
