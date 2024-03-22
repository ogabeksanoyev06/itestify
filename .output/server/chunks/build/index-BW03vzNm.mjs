import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useTests } from './useTests-DJvOJq7P.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$8, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$5, d as _sfc_main$4, e as _sfc_main$2, f as _sfc_main$3 } from './SelectScrollDownButton-DyBSBm8i.mjs';
import { _ as _sfc_main$1 } from './Button-DsDFiGaw.mjs';
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
import 'vue-router';
import 'vee-validate';
import 'dayjs';
import 'axios';
import 'radix-vue';
import '@radix-icons/vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { sciences, classes, getSciences, getClasses, startSchoolTest, loading } = useTests();
    const questionsCount = ref(5);
    const selectedClass = ref(2);
    const selectedLevel = ref("beginner");
    const activeScience = ref(null);
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
    const questionLevelList = ref([
      {
        id: "beginner",
        name: "Oson",
        disabled: false
      },
      {
        id: "medium",
        name: "O'rta",
        disabled: true
      },
      {
        id: "advanced",
        name: "Qiyin",
        disabled: true
      }
    ]);
    function selectedScience(id) {
      activeScience.value = id;
    }
    function startTest() {
      const paramtersModel = {
        science_id: activeScience.value,
        class_id: selectedClass.value,
        test_score: selectedLevel.value,
        test_count: questionsCount.value
      };
      startSchoolTest(paramtersModel);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="flex flex-wrap gap-3 border-b border-border pb-8"><!--[-->`);
      ssrRenderList(unref(sciences), (item) => {
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          key: item.id,
          onClick: ($event) => selectedScience(item.id),
          variant: item.id === unref(activeScience) ? "" : "outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"><div>`);
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
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        modelValue: unref(selectedClass),
        "onUpdate:modelValue": ($event) => isRef(selectedClass) ? selectedClass.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Sinfni tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Sinfni tanlang" })
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
                              _push5(`Sinfni tanlang`);
                            } else {
                              return [
                                createTextVNode("Sinfni tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(classes), (item) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.number)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.number), 1)
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
                              createTextVNode("Sinfni tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(classes), (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$3), {
                              key: item.id,
                              value: item.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.number), 1)
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
                            createTextVNode("Sinfni tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(classes), (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$3), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.number), 1)
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
                  createVNode(unref(_sfc_main$7), { placeholder: "Sinfni tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Sinfni tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(classes), (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$3), {
                          key: item.id,
                          value: item.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.number), 1)
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
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        modelValue: unref(selectedLevel),
        "onUpdate:modelValue": ($event) => isRef(selectedLevel) ? selectedLevel.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Darajani tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Darajani tanlang" })
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
                              _push5(`Darajani tanlang`);
                            } else {
                              return [
                                createTextVNode("Darajani tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(questionLevelList), (item) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), {
                            key: item.id,
                            value: item.id,
                            disabled: item.disabled
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
                              createTextVNode("Darajani tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(questionLevelList), (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$3), {
                              key: item.id,
                              value: item.id,
                              disabled: item.disabled
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "disabled"]);
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
                            createTextVNode("Darajani tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(questionLevelList), (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$3), {
                            key: item.id,
                            value: item.id,
                            disabled: item.disabled
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
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
                  createVNode(unref(_sfc_main$7), { placeholder: "Darajani tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Darajani tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(questionLevelList), (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$3), {
                          key: item.id,
                          value: item.id,
                          disabled: item.disabled
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
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
      _push(`</div></div><div class="flex justify-center mt-12">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        size: "lg",
        disabled: !unref(activeScience) || !unref(selectedClass) || !unref(selectedLevel) || !unref(questionsCount),
        onClick: startTest
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school-test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BW03vzNm.mjs.map
