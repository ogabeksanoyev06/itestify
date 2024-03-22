import { PaginationEllipsis, PaginationNext, PaginationPrev, PaginationRoot, PaginationList, PaginationListItem } from 'radix-vue';
import { useSSRContext, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, defineComponent, computed, mergeProps, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { DotsHorizontalIcon, ChevronRightIcon, ChevronLeftIcon } from '@radix-icons/vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _sfc_main$4 } from './Button-DsDFiGaw.mjs';
import { useRouter } from 'vue-router';
import { u as useTests } from './useTests-DJvOJq7P.mjs';
import dayjs from 'dayjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
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
import 'axios';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PaginationEllipsis",
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
      _push(ssrRenderComponent(unref(PaginationEllipsis), mergeProps(delegatedProps.value, {
        class: unref(cn)("w-9 h-9 flex items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(DotsHorizontalIcon), null, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(DotsHorizontalIcon))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationEllipsis.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PaginationNext",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, default: true },
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
      _push(ssrRenderComponent(unref(PaginationNext), mergeProps(delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              class: unref(cn)("w-9 h-9 p-0", props.class),
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronRightIcon), null, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(ChevronRightIcon))
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), {
                class: unref(cn)("w-9 h-9 p-0", props.class),
                variant: "outline"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(ChevronRightIcon))
                  ])
                ]),
                _: 3
              }, 8, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationNext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PaginationPrev",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, default: true },
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
      _push(ssrRenderComponent(unref(PaginationPrev), mergeProps(delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              class: unref(cn)("w-9 h-9 p-0", props.class),
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronLeftIcon), null, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(ChevronLeftIcon))
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), {
                class: unref(cn)("w-9 h-9 p-0", props.class),
                variant: "outline"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(ChevronLeftIcon))
                  ])
                ]),
                _: 3
              }, 8, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationPrev.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "tests-results",
  __ssrInlineRender: true,
  setup(__props) {
    const { testHistory, getTestHistory, loading } = useTests();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Pagination = PaginationRoot;
      const _component_PaginationList = PaginationList;
      const _component_PaginationPrev = _sfc_main$1;
      const _component_PaginationListItem = PaginationListItem;
      const _component_Button = _sfc_main$4;
      const _component_PaginationEllipsis = _sfc_main$3;
      const _component_PaginationNext = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col text-center gap-2 mb-8"><h4 class="text-base sm:text-xl font-semibold">Mening urunishlarim</h4><p class="text-base font-medium">Urinishlar soni: 17</p></div><div class="relative overflow-x-auto"><table class="w-full text-sm text-left rtl:text-right"><thead class="border-b"><tr class="text-center"><th scope="col" class="p-4">#</th><th scope="col" class="p-4">Sana va vaqt</th><th scope="col" class="p-4">Test turi</th><th scope="col" class="p-4">To&#39;plangan ball</th><th scope="col" class="p-4">Ko&#39;rish</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(testHistory), (item, i) => {
        _push(`<tr class="bg-white border-b hover:bg-gray-100 transition-all duration-300 text-center"><td class="p-4 font-semibold">${ssrInterpolate(i)}</td><td class="p-4">${ssrInterpolate(("dayjs" in _ctx ? _ctx.dayjs : unref(dayjs))(item.started).format("DD.MM.YYYY"))} ${ssrInterpolate(("dayjs" in _ctx ? _ctx.dayjs : unref(dayjs))(item.started).format("HH:mm"))} - ${ssrInterpolate(("dayjs" in _ctx ? _ctx.dayjs : unref(dayjs))(item.finished).format("HH:mm"))}</td><td class="p-4">${ssrInterpolate(item.type)}</td><td class="p-4">70.7</td><td class="p-4"><span class="flex items-center justify-center gap-1 cursor-pointer text-primary-700 hover:text-primary-800 transition-all"> Ko&#39;rish <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5"><path d="M10 12.3252C10 12.8556 10.2107 13.3643 10.5858 13.7394C10.9609 14.1145 11.4696 14.3252 12 14.3252C12.5304 14.3252 13.0391 14.1145 13.4142 13.7394C13.7893 13.3643 14 12.8556 14 12.3252C14 11.7948 13.7893 11.2861 13.4142 10.911C13.0391 10.5359 12.5304 10.3252 12 10.3252C11.4696 10.3252 10.9609 10.5359 10.5858 10.911C10.2107 11.2861 10 11.7948 10 12.3252Z" stroke="#3061af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 12.3252C18.6 16.3252 15.6 18.3252 12 18.3252C8.4 18.3252 5.4 16.3252 3 12.3252C5.4 8.3252 8.4 6.3252 12 6.3252C15.6 6.3252 18.6 8.3252 21 12.3252Z" stroke="#3061af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="flex items-center justify-center flex-col sm:flex-row sm:justify-between mt-8 gap-4"><p><span class="font-semibold">17</span> yozuvdan 1 dan 10 gacha ko&#39;rsatilmoqda</p>`);
      _push(ssrRenderComponent(_component_Pagination, {
        total: 100,
        "sibling-count": 0,
        "show-edges": "",
        "default-page": 1
      }, {
        default: withCtx(({ page }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PaginationList, { class: "flex items-center gap-1" }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PaginationPrev, { class: "w-8 h-8" }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(_component_PaginationListItem, {
                        key: index,
                        value: item.value,
                        "as-child": ""
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Button, {
                              class: "w-8 h-8 p-0",
                              variant: item.value === page ? "default" : "outline"
                            }, {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.value)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.value), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Button, {
                                class: "w-8 h-8 p-0",
                                variant: item.value === page ? "default" : "outline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["variant"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_PaginationEllipsis, {
                        key: item.type,
                        index
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_PaginationNext, { class: "w-8 h-8" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PaginationPrev, { class: "w-8 h-8" }),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                          key: index,
                          value: item.value,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              class: "w-8 h-8 p-0",
                              variant: item.value === page ? "default" : "outline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant"])
                          ]),
                          _: 2
                        }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                          key: item.type,
                          index
                        }, null, 8, ["index"]))
                      ], 64);
                    }), 256)),
                    createVNode(_component_PaginationNext, { class: "w-8 h-8" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PaginationList, { class: "flex items-center gap-1" }, {
                default: withCtx(({ items }) => [
                  createVNode(_component_PaginationPrev, { class: "w-8 h-8" }),
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                    return openBlock(), createBlock(Fragment, null, [
                      item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                        key: index,
                        value: item.value,
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            class: "w-8 h-8 p-0",
                            variant: item.value === page ? "default" : "outline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.value), 1)
                            ]),
                            _: 2
                          }, 1032, ["variant"])
                        ]),
                        _: 2
                      }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                        key: item.type,
                        index
                      }, null, 8, ["index"]))
                    ], 64);
                  }), 256)),
                  createVNode(_component_PaginationNext, { class: "w-8 h-8" })
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/tests-results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tests-results-BuzrvwJf.mjs.map
