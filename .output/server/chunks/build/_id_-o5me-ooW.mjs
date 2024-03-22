import { _ as _sfc_main$1 } from './Button-DsDFiGaw.mjs';
import { ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { u as useTests } from './useTests-DJvOJq7P.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$8, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$5, d as _sfc_main$4, e as _sfc_main$2, f as _sfc_main$3 } from './SelectScrollDownButton-DyBSBm8i.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './useApi-BcaOE1C1.mjs';
import './server.mjs';
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
import 'axios';
import '@radix-icons/vue';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, researches, getResearchById, startResearchesTest } = useTests();
    useRoute();
    const research_id = ref("");
    const selected_specification = ref(null);
    const questionsCount = ref(5);
    const questionsCountSelect = ref([
      {
        id: 5,
        name: 5
      },
      {
        id: 10,
        name: 10
      },
      {
        id: 15,
        name: 15
      },
      {
        id: 20,
        name: 20
      },
      {
        id: 25,
        name: 25
      },
      {
        id: 30,
        name: 30
      }
    ]);
    function startTest() {
      const paramtersModel = {
        test_type_id: research_id.value,
        specification_id: selected_specification.value,
        question_count: questionsCount.value
      };
      startResearchesTest(paramtersModel);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="flex flex-col justify-center sm:justify-start space-y-3"><h1 class="text-center sm:text-left text-2xl font-bold sm:text-3xl">${ssrInterpolate(unref(researches).title)}</h1><p class="text-center sm:text-left text-sm text-muted-foreground sm:text-base">${ssrInterpolate(unref(researches).short_description)}</p></div><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        modelValue: unref(questionsCount),
        "onUpdate:modelValue": ($event) => isRef(questionsCount) ? questionsCount.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Savollar sonini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Savollar sonini tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Savollar sonini tanlang`);
                            } else {
                              return [
                                createTextVNode("Savollar sonini tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(questionsCountSelect), (item) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Savollar sonini tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(questionsCountSelect), (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$3), {
                              key: item.id,
                              value: item.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Savollar sonini tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(questionsCountSelect), (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$3), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), { placeholder: "Savollar sonini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Savollar sonini tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(questionsCountSelect), (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$3), {
                          key: item.id,
                          value: item.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"><!--[-->`);
      ssrRenderList(unref(researches).specifications, (item) => {
        _push(`<div class="${ssrRenderClass([{ "border-primary": unref(selected_specification) === item.id }, "rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer min-h-[130px] hover:shadow-none transition-all duration-300 bg-[url('https://www.fozilov.uz/assets/Light.png')] bg-[length:200px_200px]"])}"><div class="flex flex-col justify-between h-full gap-y-1.5 p-6"><h3 class="font-semibold leading-none tracking-tight">${ssrInterpolate(item.name)}</h3><div class="flex flex-col gap-y-1"><p class="text-sm text-muted-foreground"> Umumiy vaqt: <span class="font-semibold">${ssrInterpolate(item.total_time)} daqiqa</span></p><p class="text-sm text-muted-foreground"> Ball: <span class="font-semibold">${ssrInterpolate(item.ball)} ball</span></p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-6">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "lg",
        onClick: startTest,
        disabled: !unref(selected_specification) || !unref(questionsCount) || unref(loading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loading)) {
              _push2(`<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="mr-2 h-4 w-4 animate-spin"${_scopeId}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` Testni boshlash `);
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("svg", {
                key: 0,
                viewBox: "0 0 24 24",
                width: "1.2em",
                height: "1.2em",
                class: "mr-2 h-4 w-4 animate-spin"
              }, [
                createVNode("path", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M21 12a9 9 0 1 1-6.219-8.56"
                })
              ])) : createCommentVNode("", true),
              createTextVNode(" Testni boshlash ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/international-studies/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-o5me-ooW.mjs.map
