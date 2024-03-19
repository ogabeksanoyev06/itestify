import { ref, watch } from 'vue';

export const usePaginationTest = (questions) => {
   const testNumber = useCookie('testNumber', { default: () => 1 });
   const selectedQuestion = ref({});

   const selectedQuestions = () => {
     selectedQuestion.value = questions && questions[testNumber.value] ? questions[testNumber.value] : {};
   };

   const getActiveTestNumber = (number) => {
      if (number !== testNumber.value) {
         testNumber.value = number;
      }
   };

   const prev = () => {
      const prevNumber = testNumber.value - 1;
      if (prevNumber > 0) {
         getActiveTestNumber(prevNumber);
      }
   };

   const next = () => {
      const nextNumber = testNumber.value + 1;
      if (nextNumber <= questions.value.questions.length) {
         getActiveTestNumber(nextNumber);
      }
   };

   watch(testNumber, () => {
      selectedQuestions();
   });

   return {
      testNumber,
      selectedQuestion,
      selectedQuestions,
      getActiveTestNumber,
      prev,
      next
   };
};
