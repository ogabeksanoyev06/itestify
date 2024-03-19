import { ref } from 'vue';
import { test } from '~/constants/test.js';

export const useTestData = () => {
   const tests = ref({});

   const formatTestData = (response) => {
      switch (response.type) {
         case test.TYPE_BLOCK:
            return formatBlogTestData(response);
         case test.TYPE_SCHOOL:
            return formatSchoolTestData(response);
         case test.TYPE_ONLINE:
            return formatOnlineTestData(response);
         default:
            return {};
      }
   };

   const formatBlogTestData = (response) => {
      return {
         subjectName: response.name,
         questionBall: response.ball,
         questionCount: response.questions.length,
         type: response.type,
         startedTime: response.time_interval.started_time,
         finishAt: response.time_interval.finish_at,
         testId: response.time_interval.id,
         questions: formatQuestions(response.questions)
      };
   };

   const formatSchoolTestData = (response) => {
      return {
         subjectName: response.name,
         type: response.type,
         testId: response.time_interval.id,
         questions: formatQuestions(response.questions)
      };
   };

   const formatOnlineTestData = (response) => {
      return response;
   };

   const formatQuestions = (questions) => {
      return questions.map((question) => {
         return {
            id: question.id,
            question: question.question,
            answers: [question.answer1, question.answer2, question.answer3, question.answer4],
            correctAnswer: question.correct_answer,
            isPicked: question.is_picked,
            answer: question.answer
         };
      });
   };

   return {
      tests,
      formatTestData
   };
};
