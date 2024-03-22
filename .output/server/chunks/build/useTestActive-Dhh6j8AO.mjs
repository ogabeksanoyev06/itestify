import { u as useCookie, g as useNuxtApp } from './server.mjs';
import { u as useApi } from './useApi-BcaOE1C1.mjs';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { t as test } from './test-D2R-4yvK.mjs';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const useActiveTest = () => {
  const router = useRouter();
  const { $toast } = useNuxtApp();
  const api = useApi();
  const testResult = useCookie("testResult");
  const loading = ref(false);
  const testTimer = ref(0);
  const testActiveNumber = useCookie("testActiveNumber");
  const tests = ref({});
  const hasActiveTest = ref(false);
  const setTimer = () => {
    setInterval();
  };
  const timerFormat = (time) => {
    let sec_num = parseInt(time, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
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
      test_type_id: response.test_type_id,
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
  const getActiveTestNumber = (number) => {
    if (number !== testActiveNumber.value) {
      testActiveNumber.value = number;
      selectedQuestions();
    }
  };
  const testFinish = async () => {
    let endpoint = "";
    let payload = {
      question_id: null,
      total_result_id: tests.value.testId,
      answer: null,
      picked: null,
      finishing: true
    };
    switch (tests.value.type) {
      case test.TYPE_ONLINE:
        endpoint = "tests/online-test/done/";
        break;
      case test.TYPE_BLOCK:
        endpoint = "tests/science-test/done/";
        break;
      case test.TYPE_SCHOOL:
        endpoint = "tests/school-test/done/";
        break;
      case test.TYPE_RESEARCH:
        endpoint = "tests/researches/test/done/";
        payload.test_type_id = tests.value.test_type_id;
        break;
      default:
        console.error("Unknown test type");
        return;
    }
    try {
      const response = await api.post(endpoint, payload);
      testResult.value = response.result;
      console.log(response);
      router.push("/test-result");
    } catch (error) {
      console.log(error.response);
    }
  };
  const selectAnswer = async (question_id, answer, a) => {
    let endpoint = "";
    let payload = {
      question_id: Number(question_id),
      total_result_id: tests.value.testId,
      answer,
      picked: true,
      finishing: false
    };
    switch (tests.value.type) {
      case test.TYPE_ONLINE:
        endpoint = "tests/online-test/done/";
        break;
      case test.TYPE_BLOCK:
        endpoint = "tests/science-test/done/";
        break;
      case test.TYPE_SCHOOL:
        endpoint = "tests/school-test/done/";
        break;
      case test.TYPE_RESEARCH:
        endpoint = "tests/researches/test/done/";
        break;
      default:
        console.error("Unknown test type");
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
      const response = await api.post("tests/get-test-live-time/", {
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
      const response = await api.get("tests/active-tests/", data);
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
    } finally {
      loading.value = false;
    }
  };
  return {
    loading,
    testTimer,
    testActiveNumber,
    tests,
    hasActiveTest,
    setTimer,
    timerFormat,
    getActiveTestNumber,
    testFinish,
    selectAnswer,
    getTestLiveTime,
    getActiveTest
  };
};

export { useActiveTest as u };
//# sourceMappingURL=useTestActive-Dhh6j8AO.mjs.map
