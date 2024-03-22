import { _ as _sfc_main$2 } from './Button-DsDFiGaw.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { u as useCookie } from './server.mjs';
import { u as useActiveTest } from './useTestActive-Dhh6j8AO.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
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
import './useApi-BcaOE1C1.mjs';
import 'axios';
import './test-D2R-4yvK.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 bg-white/95 w-full h-full flex items-center justify-center z-[99999]" }, _attrs))} data-v-8739a180><div class="lds-roller" data-v-8739a180><div data-v-8739a180></div><div data-v-8739a180></div><div data-v-8739a180></div><div data-v-8739a180></div><div data-v-8739a180></div><div data-v-8739a180></div><div data-v-8739a180></div><div data-v-8739a180></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/TestLoader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TestLoader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8739a180"]]);
const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const selectedQuestion = ref({});
    const testActiveNumber = useCookie("testActiveNumber", { default: () => 0 });
    const { tests, testTimer, loading, testFinish, timerFormat, setTimer, selectAnswer, getActiveTest, getTestLiveTime } = useActiveTest();
    const answerLabels = ref(["A", "B", "C", "D", "E", "F", "G", "H"]);
    const getActivetestActiveNumber = (number) => {
      if (number !== testActiveNumber.value) {
        testActiveNumber.value = number;
        selectedQuestions();
      }
    };
    const prev = () => {
      const prevNumber = testActiveNumber.value - 1;
      if (prevNumber >= 0) {
        getActivetestActiveNumber(prevNumber);
      }
    };
    const next = () => {
      const nextNumber = testActiveNumber.value + 1;
      if (nextNumber <= tests.value.questions.length - 1) {
        getActivetestActiveNumber(nextNumber);
      }
    };
    const selectedQuestions = () => {
      selectedQuestion.value = tests.value.questions[testActiveNumber.value];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(TestLoader, null, null, _parent));
      } else {
        _push(`<div class="sm:container"><div class="flex flex-col gap-4"><div class="flex justify-center items-center flex-col md:!flex-row md:!justify-between gap-2 p-4 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]"><span class="text-base font-bold text-center">${ssrInterpolate(unref(tests).subjectName)}</span><span class="max-w-[150px] w-full text-center text-2xl rounded p-1 bg-green-100 text-primary">${ssrInterpolate(unref(timerFormat)(unref(testTimer)))}</span></div><div class="px-4 py-8 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]"><div class="flex flex-col"><div id="question" class="flex items-start space-x-1 mb-4"><span id="question_number" class="text-sm font-bold">${ssrInterpolate(unref(testActiveNumber) + 1)}.</span><span id="question_text" class="text-sm">${selectedQuestion.value.question}</span></div><ul id="answers" class="grid grid-cols-1 lg:grid-cols-2 gap-2"><!--[-->`);
        ssrRenderList(selectedQuestion.value.answers, (answer, aIndex) => {
          _push(`<li class="${ssrRenderClass([{ "!border-primary": aIndex + 1 === selectedQuestion.value.answer }, "text-sm cursor-pointer border border-transparent rounded flex items-center gap-2 p-2 bg-gray-100 hover:border-primary dark:hover:bg-gray-800 dark:bg-card transition-all duration-300 group"])}"><span class="text-base font-medium min-w-10 min-h-8 bg-card dark:bg-foreground flex items-center justify-center text-center rounded">${ssrInterpolate(answerLabels.value[aIndex])}</span><span class="">${answer}</span></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="p-4 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]"><ul class="pagination-list flex flex-wrap gap-2 justify-center border-b border-border pb-4"><!--[-->`);
        ssrRenderList(unref(tests).questions, (item, index) => {
          _push(ssrRenderComponent(_component_Button, {
            key: item.id,
            variant: index === unref(testActiveNumber) ? "default" : item.isPicked ? "secondary" : "outline",
            onClick: ($event) => getActivetestActiveNumber(index),
            class: "w-8 h-8"
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
        _push(`<!--]--></ul><div class="flex flex-col justify-center items-center gap-4 sm:justify-between sm:flex-row pt-4"><div class="flex flex-wrap gap-4">`);
        _push(ssrRenderComponent(_component_Button, {
          size: "lg",
          onClick: prev
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Orqaga`);
            } else {
              return [
                createTextVNode("Orqaga")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          size: "lg",
          onClick: next
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Oldinga`);
            } else {
              return [
                createTextVNode("Oldinga")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_Button, {
          size: "lg",
          variant: "danger",
          class: "bg-red-500",
          onClick: unref(testFinish)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Yakunlash`);
            } else {
              return [
                createTextVNode("Yakunlash")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-DTBFz6LF.mjs.map
