import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { test } from '~/constants/test.js';

export const useTestHistoryData = () => {
   const route = useRoute();
   const api = useApi();
   const testHistoryId = ref([]);
   const answerLabels = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

   const schoolTestFormattedQuestions = (response) => {
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
   };

   const onlineTestFormattedQuestions = (response) => {
      // Implement logic here
   };

   const blogTestFormattedQuestions = (response) => {
      let formatted = {
         subjectName: response[0].science,
         questionCount: response[0].question_count,
         type: route.query.type,
         maxBall: response[0].max_ball,
         totalBall: response[0].total_ball,
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
   };

   const researchTestFormattedQuestions = (response) => {
      let formatted = {
         subjectName: response[0].science,
         questionCount: response[0].question_count,
         type: route.query.type,
         maxBall: response[0].max_ball,
         totalBall: response[0].total_ball,
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
   };

   const getHistoryTestId = async (data) => {
      try {
         const response = await api.get(`tests/tests-history/${data.id}/?type=${data.type}`);
         switch (data.type) {
            case test.TYPE_BLOCK:
               blogTestFormattedQuestions(response);
               break;
            case test.TYPE_SCHOOL:
               schoolTestFormattedQuestions(response);
               break;
            case test.TYPE_ONLINE:
               onlineTestFormattedQuestions(response);
               break;
            case test.TYPE_RESEARCH:
               researchTestFormattedQuestions(response);
               break;
            default:
               break;
         }
      } catch (error) {
         console.error(error);
      }
   };

   return {
      testHistoryId,
      answerLabels,
      getHistoryTestId
   };
};
