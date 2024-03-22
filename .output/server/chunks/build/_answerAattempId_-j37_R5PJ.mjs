import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useApi } from './useApi-BcaOE1C1.mjs';
import { useRoute } from 'vue-router';
import { t as test } from './test-D2R-4yvK.mjs';
import { u as useCookie } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Button-DsDFiGaw.mjs';
import 'axios';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vee-validate';
import 'dayjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';

const useTestHistoryData = () => {
  const route = useRoute();
  const api = useApi();
  const testHistoryId = ref([]);
  const answerLabels = ref(["A", "B", "C", "D", "E", "F", "G", "H"]);
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
const _sfc_main = {
  __name: "[answerAattempId]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const selectedQuestion = ref({});
    const { testHistoryId, answerLabels, getHistoryTestId } = useTestHistoryData();
    const testNumber = useCookie("testNumber", { default: () => 0 });
    const getActiveTestNumber = (number) => {
      if (number !== testNumber.value) {
        testNumber.value = number;
        selectedQuestions();
      }
    };
    const selectedQuestions = () => {
      var _a;
      selectedQuestion.value = (_a = testHistoryId.value[0]) == null ? void 0 : _a.questions[testNumber.value];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><!--[-->`);
      ssrRenderList(unref(testHistoryId), (item, i) => {
        _push(`<div><div class="inline-flex justify-center w-full"><p class="text-[18px] text-center shadow-[0_0px_10px_rgba(0,0,0,.15)] font-bold py-3 px-6 mb-6">${ssrInterpolate(item.subjectName)}</p></div><div class="relative overflow-x-auto mb-6"><table class="w-full whitespace-nowrap text-sm text-left rtl:text-right"><thead class="border-b border-border"><tr class="text-center"><th scope="col" class="p-4">Test turi</th><th scope="col" class="p-4">Fan nomi</th><th scope="col" class="p-4">Savollar soni</th><th scope="col" class="p-4">Ball</th><th scope="col" class="p-4">Vaqti</th></tr></thead><tbody><tr class="bg-card border-b border-border transition-all duration-300 text-center"><td class="p-4">${ssrInterpolate(item.type)}</td><td class="p-4">${ssrInterpolate(item.subjectName)}</td><td class="p-4">${ssrInterpolate(item.questionCount)}</td><td class="p-4">70.7</td><td class="p-4">-20 daqiqa</td></tr></tbody></table></div><div class="flex flex-col gap-3"><div class="${ssrRenderClass([{
          "shadow-red-700": !unref(selectedQuestion).answer,
          "shadow-green-600": unref(selectedQuestion).is_correct,
          "shadow-red-600": !unref(selectedQuestion).is_correct && unref(selectedQuestion).isPicked
        }, "flex flex-col gap-2 shadow-[0_0px_10px] border p-4"])}"><div class="question flex items-start text-base"><b id="question_number" class="mr-1">${ssrInterpolate(unref(testNumber) + 1)}. </b><span id="question_text"><span>${unref(selectedQuestion).question}</span>`);
        if (!unref(selectedQuestion).answer) {
          _push(`<span class="text-red-600">(belgilanmagan)</span>`);
        } else if (!unref(selectedQuestion).is_correct) {
          _push(`<span class="text-red-600">(Xato)</span>`);
        } else {
          _push(`<span class="text-green-600">(To&#39;g&#39;ri)</span>`);
        }
        _push(`</span></div><ul class="flex flex-col gap-2"><!--[-->`);
        ssrRenderList(unref(selectedQuestion).answers, (answer, aIndex) => {
          _push(`<li class="${ssrRenderClass([{
            "border-primary text-primary": unref(selectedQuestion).isPicked && unref(selectedQuestion).answer === aIndex + 1,
            "text-red-600 border-red-600": !unref(selectedQuestion).is_correct && unref(selectedQuestion).isPicked && aIndex + 1 === unref(selectedQuestion).answer
          }, "text-sm cursor-pointer border border-border rounded flex items-start gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"])}"><span class="font-semibold">${ssrInterpolate(unref(answerLabels)[aIndex] + ")")}</span><span class="">${answer}</span></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="mt-6"><ul class="pagination-list flex flex-wrap gap-2 justify-center border-b border-border pb-4"><!--[-->`);
        ssrRenderList(item.questions, (question, index) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            key: index,
            variant: question.isPicked ? question.is_correct ? "success" : "danger" : "secondary",
            onClick: ($event) => getActiveTestNumber(index),
            class: ["w-8 h-8 transition-all duration-500", index === unref(testNumber) ? "border-2 border-foreground" : ""]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(index + 1)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(index + 1), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/attempt/answer/[answerAattempId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_answerAattempId_-j37_R5PJ.mjs.map
