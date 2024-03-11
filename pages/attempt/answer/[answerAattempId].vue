<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { testService } from '~/services/testService';
import { test } from '~/constants/test.js';

const route = useRoute();

const { $toast } = useNuxtApp();

const loading = ref(false);

const testHistoryId = ref([]);

const answerLabels = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

function schoolTestFormattedQuestions(response) {
   //
}

function onlineTestFormattedQuestions(response) {
   //
}

function blogTestFormattedQuestions(response) {
   let formatted = {
      subjectName: response[0].science,
      questionCount: response[0].question_count,
      type: route.query.type,
      questions: response[0].questions.map((question) => {
         return {
            id: question.id,
            question: question.question,
            answers: [question.answer1, question.answer2, question.answer3, question.answer4],
            correctAnswer: question.correct_answer,
            isPicked: question.is_picked,
            answer: question.answer
         };
      })
   };

   testHistoryId.value.push(formatted);
}

async function getHistortTestId() {
   loading.value = true;
   try {
      const response = await testService.testHistoryId({
         id: route.params.answerAattempId,
         type: route.query.type
      });
      switch (route.query.type) {
         case test.TYPE_BLOCK:
            blogTestFormattedQuestions(response);
            break;
         case test.TYPE_SCHOOL:
            schoolTestFormattedQuestions(response);
            break;
         case test.TYPE_ONLINE:
            onlineTestFormattedQuestions(response);
            break;
         default:
            break;
      }
   } catch (error) {
      $toast.error(error.response);
   } finally {
      loading.value = false;
   }
}

const typesTestValue = computed(() => {
   switch (route.query.type) {
      case test.TYPE_BLOCK:
         return 'Blog test';
      case test.TYPE_SCHOOL:
         return 'Maktab test';
      case test.TYPE_ONLINE:
         return 'DTM test';
      default:
         return 'Nomalum';
   }
});

onMounted(() => {
   getHistortTestId();
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div v-for="(item, i) in testHistoryId" :key="i">
            <div class="text-center mx-auto mb-8">
               <span
                  class="rounded-full shadow-[0px_0px_10px_0px_rgba(100,100,111,1)] px-6 py-2 bg-primary text-white text-base font-semibold"
               >
                  {{ typesTestValue }} natijasi
               </span>
            </div>

            <p class="text-[18px] text-center shadow-[0_0px_10px_rgba(0,0,0,.15)] font-bold py-3 px-6 mb-6">
               {{ item.subjectName }}
            </p>
            <div class="flex flex-col gap-3">
               <div
                  class="flex flex-col gap-2 shadow-[0_0_8px] rounded shadow-green-600 border p-4"
                  v-for="(question, index) in item.questions"
                  :key="index"
               >
                  <div class="question flex items-start text-base">
                     <b id="question_number" class="mr-1"> {{ index + 1 }}. </b>
                     <span id="question_text">
                        <span v-html="question.question"> </span>
                        <span class="text-red-600" v-if="!question.answer">(belgilanmagan)</span>
                        <span class="text-red-600" v-else-if="!question.is_correct">(Xato)</span>
                        <span class="text-red-600" v-else>(To'g'ri)</span>
                     </span>
                  </div>
                  <ul class="flex flex-col gap-2">
                     <li
                        class="text-sm cursor-pointer border border-border rounded flex items-start gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                        v-for="(answer, aIndex) in question.answers"
                        :key="aIndex"
                        @click="selectAnswer(question.id, aIndex + 1)"
                        :class="
                           ({ 'border-primary text-primary': question.isPicked && question.answer === aIndex + 1 },
                           {
                              'text-red-600 border-primary':
                                 !question.is_correct && question.isPicked && aIndex + 1 === question.answer
                           })
                        "
                     >
                        <span class="font-semibold">
                           {{ answerLabels[aIndex] + ')' }}
                        </span>
                        <span class="" v-html="answer"> </span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
