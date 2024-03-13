<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { testService } from '~/services/testService';
import { test } from '~/constants/test.js';

const router = useRouter();

const route = useRoute();

const loading = ref(false);

const { $toast } = useNuxtApp();

const answerLabels = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

const tests = ref({});

const testTimer = ref(0);

const testNumber = ref(1);

const selectedQuestion = ref({});

function setTimer() {
   let testTimerInterval = setInterval(function () {
      if (testTimer.value <= 0) {
         testFinish();
         clearInterval(testTimerInterval);
         return;
      }
      testTimer.value--;
   }, 1000);
}

function timerFormat(time) {
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
}

function blogTestFormattedQuestions(response) {
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
}

function schoolTestFormattedQuestions(response) {
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
}

function onlineTestFormattedQuestions(response) {
   tests.value = response;
}

function prev() {
   const prevNumber = testNumber.value - 1;
   if (prevNumber > 0) {
      getActiveTestNumber(prevNumber);
   }
}

function next() {
   const nextNumber = testNumber.value + 1;
   if (nextNumber <= tests.value.questions.length) {
      getActiveTestNumber(nextNumber);
   }
}

function selectedQuestions() {
   const queryTestNumber = parseInt(route.query.testNumber || '1');
   testNumber.value = queryTestNumber;
   selectedQuestion.value = tests.value.questions[queryTestNumber - 1] || {};
}

function getActiveTestNumber(number) {
   if (number !== testNumber.value) {
      router.push({ path: '/test', query: { testNumber: number } });
   }
}

function testFinish() {
   try {
      const response = testService.scienseTestDone({
         question_id: null,
         total_result_id: tests.value.testId,
         answer: null,
         picked: null,
         finishing: true
      });
      console.log(response);
   } catch (error) {
      console.log(error.response);
   }
}

async function selectAnswer(question_id, answer) {
   try {
      const response = await testService.scienseTestDone({
         question_id: Number(question_id),
         total_result_id: tests.value.testId,
         answer: answer,
         picked: true,
         finishing: false
      });
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
}

async function getTestLiveTime() {
   try {
      const response = await testService.getTestLiveTime({
         test_type: tests.value.type,
         test_id: tests.value.testId
      });
      if (response.code === 200) {
         $toast.success(response.message);
         testTimer.value = response.data.left_time * 60;
      }
   } catch (error) {
      $toast.error(error.response.data.message);
   } finally {
   }
}

async function getActiveTest() {
   loading.value = true;
   try {
      const response = await testService.activeTests();
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
            break;
      }
   } catch (error) {
      $toast.error(error.response.data.message);
   } finally {
      loading.value = false;
   }
}

onMounted(async () => {
   await getActiveTest();
   await getTestLiveTime();
   selectedQuestions();
   setTimer();
});

watch(route, () => {
   selectedQuestions();
});
</script>

<template>
   <div class="py-8">
      <div class="sm:container">
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
                     <span id="question_number" class="text-sm font-bold">{{ testNumber }}.</span>
                     <span id="question_text" class="text-sm" v-html="selectedQuestion.question"> </span>
                  </div>
                  <ul id="answers" class="flex flex-col gap-2">
                     <li
                        class="text-sm cursor-pointer border border-border rounded flex items-start gap-1 py-4 px-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                        v-for="(answer, aIndex) in selectedQuestion.answers"
                        :key="aIndex"
                        @click="selectAnswer(selectedQuestion.id, aIndex + 1)"
                        :class="{ 'border-primary': aIndex + 1 === selectedQuestion.answer }"
                     >
                        <span class="font-semibold">{{ answerLabels[aIndex] + ')' }}</span>
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
                     :variant="index + 1 === testNumber ? 'default' : item.isPicked ? 'secondary' : 'outline'"
                     @click="getActiveTestNumber(index + 1)"
                     class="w-8 h-8"
                  >
                     {{ index + 1 }}
                  </Button>
               </ul>
               <div class="flex flex-col justify-center items-center gap-4 sm:justify-between sm:flex-row pt-4">
                  <div class="flex flex-wrap gap-4">
                     <Button size="lg" @click="prev">Orqaga</Button> <Button size="lg" @click="next">Oldinga</Button>
                  </div>

                  <Button size="lg" variant="danger" class="bg-red-500" @click="testFinish">Yakunlash</Button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
