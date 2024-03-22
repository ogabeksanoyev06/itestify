import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, defineComponent, renderSlot, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { useForwardPropsEmits, AccordionRoot, AccordionContent, useForwardProps, AccordionItem, AccordionHeader, AccordionTrigger } from 'radix-vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { ChevronDownIcon } from '@radix-icons/vue';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccordionContent",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps(delegatedProps.value, { class: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(cn)("pb-4 pt-0", props.class))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(cn)("pb-4 pt-0", props.class)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)("border-b", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AccordionTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps({ class: "flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AccordionTrigger), mergeProps(delegatedProps.value, {
              class: unref(cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all  [&[data-state=open]>svg]:rotate-180", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode(unref(ChevronDownIcon), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(AccordionTrigger), mergeProps(delegatedProps.value, {
                class: unref(cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all  [&[data-state=open]>svg]:rotate-180", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(unref(ChevronDownIcon), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
                  ])
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const defaultValue = "item-1";
const _sfc_main = {
  __name: "lessons",
  __ssrInlineRender: true,
  setup(__props) {
    const accordionItems = [
      { value: "item-1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
      { value: "item-2", title: "Is it unstyled?", content: "Yes. It's unstyled by default, giving you freedom over the look and feel." },
      { value: "item-3", title: "Can it be animated?", content: "Yes! You can use the transition prop to configure the animation." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="grid gap-6 xl:grid-cols-6"><div class="xl:col-span-4"><div class="sticky top-28"><div class="relative aspect-video overflow-hidden rounded-md border border-border bg-muted"><div class="absolute inset-x-0 inset-y-0 h-full w-full"><div class="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-muted"><img src="https://fozilov.uz/_next/image?url=%2Flock-animate.gif&amp;w=64&amp;q=75" alt="" class="h-12 w-12"><p class="text-sm">Sizda ushbu videoni ko&#39;rish huquqi mavjud emas.</p></div></div></div><div class="py-6"><h2 class="text-2xl font-bold">Kurs uchun kerakli dasturlar</h2></div></div></div><div class="h-min xl:col-span-2"><div class="flex flex-col">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        type: "single",
        class: "w-full",
        collapsible: "",
        "default-value": defaultValue
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(accordionItems, (item) => {
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                key: item.value,
                value: item.value,
                class: "border border-t-0 rounded-t-none first:rounded-t-md last:rounded-b-md first:border-t border-border"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "flex w-full items-center justify-between p-4 font-bold transition-all text-sm md:text-lg" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "px-4 text-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="pb-4 pt-0 space-y-2"${_scopeId3}><a class="flex border border-border rounded-md p-4 hover:bg-muted-foreground/20 transition-all duration-300" href="/courses/vue-nuxt-asoslari/lessons/cltyfnkjy00012zgmc550zp4e"${_scopeId3}><div class="flex items-center space-x-3"${_scopeId3}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"${_scopeId3}></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-4 w-4 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"${_scopeId3}></path></svg><span${_scopeId3}>Kurs uchun kerakli dasturlar</span></div></a></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "pb-4 pt-0 space-y-2" }, [
                              createVNode("a", {
                                class: "flex border border-border rounded-md p-4 hover:bg-muted-foreground/20 transition-all duration-300",
                                href: "/courses/vue-nuxt-asoslari/lessons/cltyfnkjy00012zgmc550zp4e"
                              }, [
                                createVNode("div", { class: "flex items-center space-x-3" }, [
                                  (openBlock(), createBlock("svg", {
                                    stroke: "currentColor",
                                    fill: "currentColor",
                                    "stroke-width": "0",
                                    viewBox: "0 0 448 512",
                                    class: "h-4 w-4",
                                    height: "1em",
                                    width: "1em",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", { d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" })
                                  ])),
                                  (openBlock(), createBlock("svg", {
                                    stroke: "currentColor",
                                    fill: "currentColor",
                                    "stroke-width": "0",
                                    viewBox: "0 0 512 512",
                                    class: "h-4 w-4 text-primary",
                                    height: "1em",
                                    width: "1em",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" })
                                  ])),
                                  createVNode("span", null, "Kurs uchun kerakli dasturlar")
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$1), { class: "flex w-full items-center justify-between p-4 font-bold transition-all text-sm md:text-lg" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$3), { class: "px-4 text-sm" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "pb-4 pt-0 space-y-2" }, [
                            createVNode("a", {
                              class: "flex border border-border rounded-md p-4 hover:bg-muted-foreground/20 transition-all duration-300",
                              href: "/courses/vue-nuxt-asoslari/lessons/cltyfnkjy00012zgmc550zp4e"
                            }, [
                              createVNode("div", { class: "flex items-center space-x-3" }, [
                                (openBlock(), createBlock("svg", {
                                  stroke: "currentColor",
                                  fill: "currentColor",
                                  "stroke-width": "0",
                                  viewBox: "0 0 448 512",
                                  class: "h-4 w-4",
                                  height: "1em",
                                  width: "1em",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", { d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" })
                                ])),
                                (openBlock(), createBlock("svg", {
                                  stroke: "currentColor",
                                  fill: "currentColor",
                                  "stroke-width": "0",
                                  viewBox: "0 0 512 512",
                                  class: "h-4 w-4 text-primary",
                                  height: "1em",
                                  width: "1em",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" })
                                ])),
                                createVNode("span", null, "Kurs uchun kerakli dasturlar")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(accordionItems, (item) => {
                return createVNode(unref(_sfc_main$2), {
                  key: item.value,
                  value: item.value,
                  class: "border border-t-0 rounded-t-none first:rounded-t-md last:rounded-b-md first:border-t border-border"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$1), { class: "flex w-full items-center justify-between p-4 font-bold transition-all text-sm md:text-lg" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$3), { class: "px-4 text-sm" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pb-4 pt-0 space-y-2" }, [
                          createVNode("a", {
                            class: "flex border border-border rounded-md p-4 hover:bg-muted-foreground/20 transition-all duration-300",
                            href: "/courses/vue-nuxt-asoslari/lessons/cltyfnkjy00012zgmc550zp4e"
                          }, [
                            createVNode("div", { class: "flex items-center space-x-3" }, [
                              (openBlock(), createBlock("svg", {
                                stroke: "currentColor",
                                fill: "currentColor",
                                "stroke-width": "0",
                                viewBox: "0 0 448 512",
                                class: "h-4 w-4",
                                height: "1em",
                                width: "1em",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", { d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" })
                              ])),
                              (openBlock(), createBlock("svg", {
                                stroke: "currentColor",
                                fill: "currentColor",
                                "stroke-width": "0",
                                viewBox: "0 0 512 512",
                                class: "h-4 w-4 text-primary",
                                height: "1em",
                                width: "1em",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" })
                              ])),
                              createVNode("span", null, "Kurs uchun kerakli dasturlar")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/lessons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lessons-fqkk8lVR.mjs.map
