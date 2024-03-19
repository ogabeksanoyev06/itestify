<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Button from '~/components/ui/button/Button.vue';

const route = useRoute();
const selectedQuestion = ref({});
const { testHistoryId, answerLabels, getHistoryTestId } = useTestHistoryData();
const testNumber = useCookie('testNumber', { default: () => 0 });

const getActiveTestNumber = (number) => {
   if (number !== testNumber.value) {
      testNumber.value = number;
      selectedQuestions();
   }
};

const selectedQuestions = () => {
   selectedQuestion.value = testHistoryId.value[0]?.questions[testNumber.value];
};

onMounted(async () => {
   await getHistoryTestId({
      id: route.params.answerAattempId,
      type: route.query.type
   });
   selectedQuestions();
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div v-for="(item, i) in testHistoryId" :key="i">
            <div class="inline-flex justify-center w-full">
               <p class="text-[18px] text-center shadow-[0_0px_10px_rgba(0,0,0,.15)] font-bold py-3 px-6 mb-6">
                  {{ item.subjectName }}
               </p>
            </div>
            <div class="relative overflow-x-auto mb-6">
               <table class="w-full whitespace-nowrap text-sm text-left rtl:text-right">
                  <thead class="border-b border-border">
                     <tr class="text-center">
                        <th scope="col" class="p-4">Test turi</th>
                        <th scope="col" class="p-4">Fan nomi</th>
                        <th scope="col" class="p-4">Savollar soni</th>
                        <th scope="col" class="p-4">Ball</th>
                        <th scope="col" class="p-4">Vaqti</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr class="bg-card border-b border-border transition-all duration-300 text-center">
                        <td class="p-4">{{ item.type }}</td>
                        <td class="p-4">{{ item.subjectName }}</td>
                        <td class="p-4">{{ item.questionCount }}</td>
                        <td class="p-4">70.7</td>
                        <td class="p-4">-20 daqiqa</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div class="flex flex-col gap-3">
               <div
                  class="flex flex-col gap-2 shadow-[0_0px_10px] border p-4"
                  :class="{
                     'shadow-red-600': !selectedQuestion.answer,
                     'shadow-green-600': selectedQuestion.is_correct,
                     'shadow-red-600': !selectedQuestion.is_correct && selectedQuestion.isPicked
                  }"
               >
                  <div class="question flex items-start text-base">
                     <b id="question_number" class="mr-1"> {{ testNumber + 1 }}. </b>
                     <span id="question_text">
                        <span v-html="selectedQuestion.question"> </span>
                        <span class="text-red-600" v-if="!selectedQuestion.answer">(belgilanmagan)</span>
                        <span class="text-red-600" v-else-if="!selectedQuestion.is_correct">(Xato)</span>
                        <span class="text-green-600" v-else>(To'g'ri)</span>
                     </span>
                  </div>
                  <ul class="flex flex-col gap-2">
                     <li
                        class="text-sm cursor-pointer border border-border rounded flex items-start gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                        v-for="(answer, aIndex) in selectedQuestion.answers"
                        :key="aIndex"
                        @click="selectAnswer(question.id, aIndex + 1)"
                        :class="{
                           'border-primary text-primary': selectedQuestion.isPicked && selectedQuestion.answer === aIndex + 1,
                           'text-red-600 border-red-600':
                              !selectedQuestion.is_correct && selectedQuestion.isPicked && aIndex + 1 === selectedQuestion.answer
                        }"
                     >
                        <span class="font-semibold">
                           {{ answerLabels[aIndex] + ')' }}
                        </span>
                        <span class="" v-html="answer"> </span>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="mt-6">
               <ul class="pagination-list flex flex-wrap gap-2 justify-center border-b border-border pb-4">
                  <Button
                     v-for="(question, index) in item.questions"
                     :key="index"
                     :variant="question.isPicked ? (question.is_correct ? 'success' : 'danger') : 'secondary'"
                     @click="getActiveTestNumber(index)"
                     class="w-8 h-8 transition-all duration-500"
                     :class="index === testNumber ? 'border-2 border-foreground' : ''"
                  >
                     {{ index + 1 }}
                  </Button>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>
