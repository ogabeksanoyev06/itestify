import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { test } from '~/constants/test.js';

export const useActiveTest = () => {
   const route = useRoute();
   const router = useRouter();
   const { $toast } = useNuxtApp();

   const api = useApi();

   const loading = ref(false);
   const testTimer = ref(0);
   const testNumber = ref(1);
   const tests = ref({});
   const selectedQuestion = ref({});
   const hasActiveTest = ref(false);

   const setTimer = () => {
      let testTimerInterval = setInterval(() => {
         if (testTimer.value <= 0) {
            testFinish();
            clearInterval(testTimerInterval);
            return;
         }
         testTimer.value--;
      }, 1000);
   };

   const timerFormat = (time) => {
      let sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
         hours = '0' + hours;
      }
      if (minutes < 10) {
         minutes = '0' + minutes;
      }
      if (seconds < 10) {
         seconds = '0' + seconds;
      }
      return hours + ':' + minutes + ':' + seconds;
   };

   const blogTestFormattedQuestions = (response) => {
      tests.value = {
         subjectName: response.name,
         questionBall: response.ball,
         questionCount: response.questions.length,
         type: response.type,
         startedTime: response.time_interval.started_time,
         finishAt: response.time_interval.finish_at,
         testId: response.time_interval.id,
         questions: response.questions.map((question) => {
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
   };

   const schoolTestFormattedQuestions = (response) => {
      tests.value = {
         subjectName: response.name,
         type: response.type,
         testId: response.time_interval.id,
         questions: response.questions.map((question) => {
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
   };

   const onlineTestFormattedQuestions = (response) => {
      tests.value = response;
   };

   const prev = () => {
      const prevNumber = testNumber.value - 1;
      if (prevNumber > 0) {
         getActiveTestNumber(prevNumber);
      }
   };

   const next = () => {
      const nextNumber = testNumber.value + 1;
      if (nextNumber <= tests.value.questions.length) {
         getActiveTestNumber(nextNumber);
      }
   };

   const selectedQuestions = () => {
      const queryTestNumber = parseInt(route.query.testNumber || '1');
      testNumber.value = queryTestNumber;
      selectedQuestion.value = tests.value.questions[queryTestNumber - 1] || {};
   };

   const getActiveTestNumber = (number) => {
      if (number !== testNumber.value) {
         router.push({ path: '/test', query: { testNumber: number } });
      }
   };

   const testFinish = async () => {
      let endpoint = '';
      let payload = {
         question_id: null,
         total_result_id: tests.value.testId,
         answer: null,
         picked: null,
         finishing: true
      };
      switch (tests.value.type) {
         case test.TYPE_ONLINE:
            endpoint = 'tests/online-test/done/';
            break;
         case test.TYPE_BLOCK:
            endpoint = 'tests/science-test/done/';
            break;
         case test.TYPE_SCHOOL:
            endpoint = 'tests/school-test/done/';
            break;
         case test.TYPE_RESEARCH:
            endpoint = 'tests/research-test/done/';
            break;
         default:
            console.error('Unknown test type');
            return;
      }
      try {
         const response = await api.post(endpoint, payload);
         useCookie('testResult', response);
         router.push('/test-result');
      } catch (error) {
         console.log(error.response);
      }
   };

   const selectAnswer = async (question_id, answer) => {
      let endpoint = '';
      let payload = {
         question_id: Number(question_id),
         total_result_id: tests.value.testId,
         answer: answer,
         picked: true,
         finishing: false
      };
      switch (tests.value.type) {
         case test.TYPE_ONLINE:
            endpoint = 'tests/online-test/done/';
            break;
         case test.TYPE_BLOCK:
            endpoint = 'tests/science-test/done/';
            break;
         case test.TYPE_SCHOOL:
            endpoint = 'tests/school-test/done/';
            break;
         case test.TYPE_RESEARCH:
            endpoint = 'tests/research-test/done/';
            break;
         default:
            console.error('Unknown test type');
            return;
      }
      try {
         const response = await api.post(endpoint, payload);
         if (response.code === 200) {
            $toast.success(response.message);
            tests.value.questions.forEach((question) => {
               if (question.id === question_id) {
                  question.isPicked = true;
                  question.answer = answer;
               }
            });
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      }
   };

   const getTestLiveTime = async () => {
      try {
         const response = await api.post('tests/get-test-live-time/', {
            test_type: tests.value.type,
            test_id: tests.value.testId
         });
         if (response.code === 200) {
            $toast.success(response.message);
            testTimer.value = response.data.left_time * 60;
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      }
   };

   const getActiveTest = async (data) => {
      loading.value = true;
      try {
         const response = await api.get('tests/active-tests/', data);
         if (!response.code === 400) {
            hasActiveTest.value = true;
            switch (response.type) {
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
                  hasActiveTest.value = false;
                  break;
            }
         }
      } catch (error) {
         $toast.error(error.response.data.message);
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
      setTimer,
      timerFormat,
      prev,
      next,
      getActiveTestNumber,
      testFinish,
      selectAnswer,
      getTestLiveTime,
      getActiveTest
   };
};
