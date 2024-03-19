import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useActiveTests = () => {
   const route = useRoute();
   const router = useRouter();
   const { $toast } = useNuxtApp();
   const { tests, formatTestData } = useTestData();
   const { testTimer, setTimer, timerFormat, getTestLiveTime } = useTimer();
   const api = useApi();

   const loading = ref(false);
   const testNumber = ref(1);
   const selectedQuestion = ref({});
   const hasActiveTest = ref(false);

   const selectedQuestions = () => {
      const queryTestNumber = parseInt(route.query.testNumber || '1');
      testNumber.value = queryTestNumber;
      selectedQuestion.value = tests.value.questions[queryTestNumber - 1] || {};
   };

   const updateTestNumber = (number) => {
      if (number !== testNumber.value) {
         router.push({ path: '/test', query: { testNumber: number } });
      }
   };

   const prev = () => {
      const prevNumber = testNumber.value - 1;
      if (prevNumber > 0) {
         updateTestNumber(prevNumber);
      }
   };

   const next = () => {
      const nextNumber = testNumber.value + 1;
      if (nextNumber <= tests.value.questions.length) {
         updateTestNumber(nextNumber);
      }
   };

   const getEndpointAndPayload = (finishing) => {
      let endpoint = '';
      let payload = {
         question_id: null,
         total_result_id: tests.value.testId,
         answer: null,
         picked: null,
         finishing
      };
      switch (tests.value.type) {
         case 'online':
            endpoint = 'tests/online-test/done/';
            break;
         case 'block':
            endpoint = 'tests/science-test/done/';
            break;
         case 'school':
            endpoint = 'tests/school-test/done/';
            break;
         case 'research':
            endpoint = 'tests/research-test/done/';
            break;
         default:
            console.error('Unknown test type');
            return { endpoint, payload };
      }
      return { endpoint, payload };
   };

   const testFinish = async () => {
      const { endpoint, payload } = getEndpointAndPayload(true);
      if (!endpoint) return;

      try {
         const response = await api.post(endpoint, payload);
         useCookie('testResult', response);
         router.push('/test-result');
      } catch (error) {
         console.error(error);
      }
   };

   const selectAnswer = async (questionId, answer) => {
      const { endpoint, payload } = getEndpointAndPayload(false);
      if (!endpoint) return;

      payload.question_id = Number(questionId);
      payload.answer = answer;
      payload.picked = true;

      try {
         const response = await api.post(endpoint, payload);
         if (response.code === 200) {
            $toast.success(response.message);
            tests.value.questions.forEach((question) => {
               if (question.id === questionId) {
                  question.isPicked = true;
                  question.answer = answer;
               }
            });
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      }
   };

   const getActiveTest = async (data) => {
      loading.value = true;
      try {
         const response = await api.get('tests/active-tests/', data);
         const formattedData = formatTestData(response);
         if (Object.keys(formattedData).length > 0) {
            tests.value = formattedData;
            hasActiveTest.value = true;
            await getTestLiveTime(tests, api);
            selectedQuestions();
         } else {
            hasActiveTest.value = false;
         }
      } catch (error) {
         $toast.error(error.response.data.message);
         console.error(error);
      } finally {
         loading.value = false;
      }
   };

   return {
      loading,
      testTimer,
      testNumber,
      tests,
      selectedQuestion,
      hasActiveTest,
      selectedQuestions,
      prev,
      next,
      updateTestNumber,
      testFinish,
      selectAnswer,
      getActiveTest
   };
};
