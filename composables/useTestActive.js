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

   const researchTestFormattedQuestions = (response) => {
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
            endpoint = 'tests/researches/test/done/';
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
            endpoint = 'tests/researches/test/done/';
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
         switch (response.type) {
            case test.TYPE_BLOCK:
               blogTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            case test.TYPE_SCHOOL:
               schoolTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            case test.TYPE_RESEARCH:
               researchTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            case test.TYPE_ONLINE:
               onlineTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            default:
               hasActiveTest.value = false;
               break;
         }
      } catch (error) {
         $toast.error(error.response.data.message);
         console.log('sassa', error);
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

// // useTestData.js
// import { ref } from 'vue';
// import { test } from '~/constants/test.js';

// export const useTestData = () => {
//   const tests = ref({});

//   const formatTestData = (response) => {
//     switch (response.type) {
//       case test.TYPE_BLOCK:
//         return formatBlogTestData(response);
//       case test.TYPE_SCHOOL:
//         return formatSchoolTestData(response);
//       case test.TYPE_ONLINE:
//         return formatOnlineTestData(response);
//       default:
//         return {};
//     }
//   };

//   const formatBlogTestData = (response) => {
//     return {
//       subjectName: response.name,
//       questionBall: response.ball,
//       questionCount: response.questions.length,
//       type: response.type,
//       startedTime: response.time_interval.started_time,
//       finishAt: response.time_interval.finish_at,
//       testId: response.time_interval.id,
//       questions: formatQuestions(response.questions),
//     };
//   };

//   const formatSchoolTestData = (response) => {
//     return {
//       subjectName: response.name,
//       type: response.type,
//       testId: response.time_interval.id,
//       questions: formatQuestions(response.questions),
//     };
//   };

//   const formatOnlineTestData = (response) => {
//     return response;
//   };

//   const formatQuestions = (questions) => {
//     return questions.map((question) => {
//       return {
//         id: question.id,
//         question: question.question,
//         answers: [question.answer1, question.answer2, question.answer3, question.answer4],
//         correctAnswer: question.correct_answer,
//         isPicked: question.is_picked,
//         answer: question.answer,
//       };
//     });
//   };

//   return {
//     tests,
//     formatTestData,
//   };
// };

// // useTimer.js
// import { ref } from 'vue';

// export const useTimer = () => {
//   const testTimer = ref(0);

//   const setTimer = (duration) => {
//     testTimer.value = duration * 60;
//     let testTimerInterval = setInterval(() => {
//       if (testTimer.value <= 0) {
//         clearInterval(testTimerInterval);
//         return;
//       }
//       testTimer.value--;
//     }, 1000);
//   };

//   const timerFormat = (time) => {
//     let sec_num = parseInt(time, 10);
//     let hours = Math.floor(sec_num / 3600);
//     let minutes = Math.floor((sec_num - hours * 3600) / 60);
//     let seconds = sec_num - hours * 3600 - minutes * 60;

//     if (hours < 10) {
//       hours = '0' + hours;
//     }
//     if (minutes < 10) {
//       minutes = '0' + minutes;
//     }
//     if (seconds < 10) {
//       seconds = '0' + seconds;
//     }
//     return hours + ':' + minutes + ':' + seconds;
//   };

//   const getTestLiveTime = async (tests, api) => {
//     try {
//       const response = await api.post('tests/get-test-live-time/', {
//         test_type: tests.value.type,
//         test_id: tests.value.testId,
//       });
//       if (response.code === 200) {
//         setTimer(response.data.left_time);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return {
//     testTimer,
//     setTimer,
//     timerFormat,
//     getTestLiveTime,
//   };
// };

// // useActiveTest.js
// import { ref } from 'vue';
// import { useRoute, useRouter } from 'vue-router';
// import { useTestData } from './useTestData';
// import { useTimer } from './useTimer';
// import { useApi } from './useApi';
// import { useNuxtApp } from '#app';
// import { useCookie } from '~/composables/useCookie';

// export const useActiveTest = () => {
//   const route = useRoute();
//   const router = useRouter();
//   const { $toast } = useNuxtApp();
//   const { tests, formatTestData } = useTestData();
//   const { testTimer, setTimer, timerFormat, getTestLiveTime } = useTimer();
//   const api = useApi();

//   const loading = ref(false);
//   const testNumber = ref(1);
//   const selectedQuestion = ref({});
//   const hasActiveTest = ref(false);

//   const selectedQuestions = () => {
//     const queryTestNumber = parseInt(route.query.testNumber || '1');
//     testNumber.value = queryTestNumber;
//     selectedQuestion.value = tests.value.questions[queryTestNumber - 1] || {};
//   };

//   const updateTestNumber = (number) => {
//     if (number !== testNumber.value) {
//       router.push({ path: '/test', query: { testNumber: number } });
//     }
//   };

//   const prev = () => {
//     const prevNumber = testNumber.value - 1;
//     if (prevNumber > 0) {
//       updateTestNumber(prevNumber);
//     }
//   };

//   const next = () => {
//     const nextNumber = testNumber.value + 1;
//     if (nextNumber <= tests.value.questions.length) {
//       updateTestNumber(nextNumber);
//     }
//   };

//   const getEndpointAndPayload = (finishing) => {
//     let endpoint = '';
//     let payload = {
//       question_id: null,
//       total_result_id: tests.value.testId,
//       answer: null,
//       picked: null,
//       finishing,
//     };
//     switch (tests.value.type) {
//       case 'online':
//         endpoint = 'tests/online-test/done/';
//         break;
//       case 'block':
//         endpoint = 'tests/science-test/done/';
//         break;
//       case 'school':
//         endpoint = 'tests/school-test/done/';
//         break;
//       case 'research':
//         endpoint = 'tests/research-test/done/';
//         break;
//       default:
//         console.error('Unknown test type');
//         return { endpoint, payload };
//     }
//     return { endpoint, payload };
//   };

//   const testFinish = async () => {
//     const { endpoint, payload } = getEndpointAndPayload(true);
//     if (!endpoint) return;

//     try {
//       const response = await api.post(endpoint, payload);
//       useCookie('testResult', response);
//       router.push('/test-result');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const selectAnswer = async (questionId, answer) => {
//     const { endpoint, payload } = getEndpointAndPayload(false);
//     if (!endpoint) return;

//     payload.question_id = Number(questionId);
//     payload.answer = answer;
//     payload.picked = true;

//     try {
//       const response = await api.post(endpoint, payload);
//       if (response.code === 200) {
//         $toast.success(response.message);
//         tests.value.questions.forEach((question) => {
//           if (question.id === questionId) {
//             question.isPicked = true;
//             question.answer = answer;
//           }
//         });
//       }
//     } catch (error) {
//       $toast.error(error.response.data.message);
//     }
//   };

//   const getActiveTest = async (data) => {
//     loading.value = true;
//     try {
//       const response = await api.get('tests/active-tests/', data);
//       const formattedData = formatTestData(response);
//       if (Object.keys(formattedData).length > 0) {
//         tests.value = formattedData;
//         hasActiveTest.value = true;
//         await getTestLiveTime(tests, api);
//         selectedQuestions();
//       } else {
//         hasActiveTest.value = false;
//       }
//     } catch (error) {
//       $toast.error(error.response.data.message);
//       console.error(error);
//     } finally {
//       loading.value = false;
//     }
//   };

//   return {
//     loading,
//     testTimer,
//     testNumber,
//     tests,
//     selectedQuestion,
//     hasActiveTest,
//     selectedQuestions,
//     prev,
//     next,
//     updateTestNumber,
//     testFinish,
//     selectAnswer,
//     getActiveTest,
//   };
// };
