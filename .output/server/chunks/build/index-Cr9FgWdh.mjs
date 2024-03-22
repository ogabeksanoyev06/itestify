import { _ as __nuxt_component_0 } from './nuxt-link-IQf18NCF.mjs';
import { u as useApi } from './useApi-BcaOE1C1.mjs';
import { g as useNuxtApp } from './server.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext, ref } from 'vue';
import { c as currencyFormat } from './format-CXxZLjYI.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './index-BIInlcvZ.mjs';
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
import 'vue-router';
import 'vee-validate';
import 'dayjs';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';

const useCourses = () => {
  const api = useApi();
  const { $toast } = useNuxtApp();
  const loading = ref(false);
  const activeCategory = ref(null);
  const courses = ref([]);
  const categories = ref([]);
  const getCategories = async () => {
    loading.value = true;
    try {
      const response = await api.get("courses/categories/");
      categories.value = response;
    } catch (error) {
      $toast.error(error.response.data.message);
    } finally {
      loading.value = false;
    }
  };
  const getCourses = async (id2) => {
    loading.value = true;
    try {
      const response = await api.get(`courses/?cat_id=${id2}`);
      courses.value = response;
    } catch (error) {
      $toast.error(error.response.data.message);
    } finally {
      loading.value = false;
    }
  };
  const setCategoryId = () => {
    if (categories.value.length > 0) {
      selectCategory(categories.value[0].id);
    }
  };
  const selectCategory = async (categoryId) => {
    activeCategory.value = categoryId;
    await getCourses(categoryId);
  };
  return { loading, categories, courses, getCategories, getCourses, activeCategory, setCategoryId, selectCategory };
};
const id = "vue-nuxt-asoslari";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { courses, categories, activeCategory, selectCategory, setCategoryId, getCategories } = useCourses();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="flex flex-wrap justify-center sm:justify-start gap-2 mb-8"><!--[-->`);
      ssrRenderList(unref(categories), (item) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          variant: item.id === unref(activeCategory) ? "default" : "outline",
          key: item.id,
          onClick: ($event) => unref(selectCategory)(item.id)
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
      _push(`<!--]--></div><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"><!--[-->`);
      ssrRenderList(unref(courses), (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: { path: `/courses/${id}` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="group relative flex h-full flex-col overflow-hidden rounded-md border transition hover:bg-muted/30 cursor-pointer"${_scopeId}><div class="relative w-full overflow-hidden rounded-t-md border-b"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="w-full object-cover"${_scopeId}></div><div class="space-y-3 p-3"${_scopeId}><div class="line-clamp-2 text-base font-medium transition group-hover:text-primary md:text-xl"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="flex items-center gap-5 text-sm flex-wrap"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M192,88V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H184A8,8,0,0,1,192,88Z" opacity="0.2"${_scopeId}></path><path d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(item.modules_count)} ta modul</span></div><div class="flex items-center space-x-2"${_scopeId}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M48,72h64V184H48ZM190.64,38.39a8,8,0,0,0-9.5-6.21l-46.81,10a8.07,8.07,0,0,0-6.15,9.57L139.79,107l62.46-13.42Z" opacity="0.2"${_scopeId}></path><path d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(item.lessons_count)} ta video</span></div></div><div class="flex justify-between items-center flex-wrap"${_scopeId}><div class="grid"${_scopeId}><div class="flex items-center space-x-1"${_scopeId}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"${_scopeId}><path d="M15 14.3252L12 12.3252V7.3252M3 12.3252C3 13.5071 3.23279 14.6774 3.68508 15.7693C4.13738 16.8613 4.80031 17.8534 5.63604 18.6892C6.47177 19.5249 7.46392 20.1878 8.55585 20.6401C9.64778 21.0924 10.8181 21.3252 12 21.3252C13.1819 21.3252 14.3522 21.0924 15.4442 20.6401C16.5361 20.1878 17.5282 19.5249 18.364 18.6892C19.1997 17.8534 19.8626 16.8613 20.3149 15.7693C20.7672 14.6774 21 13.5071 21 12.3252C21 11.1433 20.7672 9.97297 20.3149 8.88104C19.8626 7.78911 19.1997 6.79696 18.364 5.96123C17.5282 5.12551 16.5361 4.46257 15.4442 4.01028C14.3522 3.55799 13.1819 3.3252 12 3.3252C10.8181 3.3252 9.64778 3.55799 8.55585 4.01028C7.46392 4.46257 6.47177 5.12551 5.63604 5.96123C4.80031 6.79696 4.13738 7.78911 3.68508 8.88104C3.23279 9.97297 3 11.1433 3 12.3252Z" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg><span class="text-sm"${_scopeId}>43 min</span></div><div class="flex items-center space-x-1"${_scopeId}><svg viewBox="0 0 24 24" width="24" height="24" stroke="#16a34a" stroke-width="3" class="icon h-4 w-4"${_scopeId}><line x1="6" y1="15" x2="6" y2="19"${_scopeId}></line><line stroke="" x1="12" y1="10" x2="12" y2="19"${_scopeId}></line><line stroke="rgba(0, 0, 0, 0.2)" x1="18" y1="5" x2="18" y2="19"${_scopeId}></line></svg><span class="text-sm"${_scopeId}>intermediate</span></div></div><div class="flex items-center ml-auto"${_scopeId}><span class="text-sm text-primary text-right w-min font-semibold"${_scopeId}>${ssrInterpolate(item.teacher)}</span><div class="flex flex-shrink-0"${_scopeId}><img src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/ben-hong.jpg?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&amp;Expires=16725225600&amp;Signature=slnKhELL0RBsvErX4n2EkgzFnCUWKnFn2w%2BTUWbI5E0Ciqu5Mr9NeBMolESgC98%2FifgCBcHRf8CPPg0JzDeswDgDFWPcsfpaSexoiU67NE4o3IwKNaBMSVdQl4eQjs5HUliaaEjDiNOf5MO9HO9KFxf7hcBzvdbVsujVEiumNF7PbVsSoKqet77eslEaix2egXu0m8BP3aYpfJitWpsCl1x6gwEl38I58WeBaG65qrcqvneaWrZvZ1ch1Eg%2BC0d6%2BcOR9VeWm%2FhhiAx9i0FDThWxfLmSRZs5MnLBBHr%2BtFxfQm%2BCRBW2EmNQuGn%2BsVWhMMYqeWBo3dz6op0ebFqXGg%3D%3D" alt="" class="w-10 h-10 rounded-full object-cover flex items-center justify-center ml-1"${_scopeId}></div></div></div><p class="text-base font-medium text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(item.price))} so\u2018m</p></div><div class="absolute"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Bepul`);
                  } else {
                    return [
                      createTextVNode("Bepul")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "group relative flex h-full flex-col overflow-hidden rounded-md border transition hover:bg-muted/30 cursor-pointer" }, [
                  createVNode("div", { class: "relative w-full overflow-hidden rounded-t-md border-b" }, [
                    createVNode("img", {
                      src: item.image,
                      alt: item.title,
                      class: "w-full object-cover"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "space-y-3 p-3" }, [
                    createVNode("div", { class: "line-clamp-2 text-base font-medium transition group-hover:text-primary md:text-xl" }, toDisplayString(item.title), 1),
                    createVNode("div", { class: "flex items-center gap-5 text-sm flex-wrap" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        (openBlock(), createBlock("svg", {
                          stroke: "currentColor",
                          fill: "currentColor",
                          "stroke-width": "0",
                          viewBox: "0 0 256 256",
                          class: "h-4 w-4",
                          height: "1em",
                          width: "1em",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M192,88V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H184A8,8,0,0,1,192,88Z",
                            opacity: "0.2"
                          }),
                          createVNode("path", { d: "M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z" })
                        ])),
                        createVNode("span", null, toDisplayString(item.modules_count) + " ta modul", 1)
                      ]),
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        (openBlock(), createBlock("svg", {
                          stroke: "currentColor",
                          fill: "currentColor",
                          "stroke-width": "0",
                          viewBox: "0 0 256 256",
                          class: "h-4 w-4",
                          height: "1em",
                          width: "1em",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M48,72h64V184H48ZM190.64,38.39a8,8,0,0,0-9.5-6.21l-46.81,10a8.07,8.07,0,0,0-6.15,9.57L139.79,107l62.46-13.42Z",
                            opacity: "0.2"
                          }),
                          createVNode("path", { d: "M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z" })
                        ])),
                        createVNode("span", null, toDisplayString(item.lessons_count) + " ta video", 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-between items-center flex-wrap" }, [
                      createVNode("div", { class: "grid" }, [
                        createVNode("div", { class: "flex items-center space-x-1" }, [
                          (openBlock(), createBlock("svg", {
                            width: "24",
                            height: "25",
                            viewBox: "0 0 24 25",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4"
                          }, [
                            createVNode("path", {
                              d: "M15 14.3252L12 12.3252V7.3252M3 12.3252C3 13.5071 3.23279 14.6774 3.68508 15.7693C4.13738 16.8613 4.80031 17.8534 5.63604 18.6892C6.47177 19.5249 7.46392 20.1878 8.55585 20.6401C9.64778 21.0924 10.8181 21.3252 12 21.3252C13.1819 21.3252 14.3522 21.0924 15.4442 20.6401C16.5361 20.1878 17.5282 19.5249 18.364 18.6892C19.1997 17.8534 19.8626 16.8613 20.3149 15.7693C20.7672 14.6774 21 13.5071 21 12.3252C21 11.1433 20.7672 9.97297 20.3149 8.88104C19.8626 7.78911 19.1997 6.79696 18.364 5.96123C17.5282 5.12551 16.5361 4.46257 15.4442 4.01028C14.3522 3.55799 13.1819 3.3252 12 3.3252C10.8181 3.3252 9.64778 3.55799 8.55585 4.01028C7.46392 4.46257 6.47177 5.12551 5.63604 5.96123C4.80031 6.79696 4.13738 7.78911 3.68508 8.88104C3.23279 9.97297 3 11.1433 3 12.3252Z",
                              stroke: "#354052",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ])),
                          createVNode("span", { class: "text-sm" }, "43 min")
                        ]),
                        createVNode("div", { class: "flex items-center space-x-1" }, [
                          (openBlock(), createBlock("svg", {
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            stroke: "#16a34a",
                            "stroke-width": "3",
                            class: "icon h-4 w-4"
                          }, [
                            createVNode("line", {
                              x1: "6",
                              y1: "15",
                              x2: "6",
                              y2: "19"
                            }),
                            createVNode("line", {
                              stroke: "",
                              x1: "12",
                              y1: "10",
                              x2: "12",
                              y2: "19"
                            }),
                            createVNode("line", {
                              stroke: "rgba(0, 0, 0, 0.2)",
                              x1: "18",
                              y1: "5",
                              x2: "18",
                              y2: "19"
                            })
                          ])),
                          createVNode("span", { class: "text-sm" }, "intermediate")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center ml-auto" }, [
                        createVNode("span", { class: "text-sm text-primary text-right w-min font-semibold" }, toDisplayString(item.teacher), 1),
                        createVNode("div", { class: "flex flex-shrink-0" }, [
                          createVNode("img", {
                            src: "https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/ben-hong.jpg?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=slnKhELL0RBsvErX4n2EkgzFnCUWKnFn2w%2BTUWbI5E0Ciqu5Mr9NeBMolESgC98%2FifgCBcHRf8CPPg0JzDeswDgDFWPcsfpaSexoiU67NE4o3IwKNaBMSVdQl4eQjs5HUliaaEjDiNOf5MO9HO9KFxf7hcBzvdbVsujVEiumNF7PbVsSoKqet77eslEaix2egXu0m8BP3aYpfJitWpsCl1x6gwEl38I58WeBaG65qrcqvneaWrZvZ1ch1Eg%2BC0d6%2BcOR9VeWm%2FhhiAx9i0FDThWxfLmSRZs5MnLBBHr%2BtFxfQm%2BCRBW2EmNQuGn%2BsVWhMMYqeWBo3dz6op0ebFqXGg%3D%3D",
                            alt: "",
                            class: "w-10 h-10 rounded-full object-cover flex items-center justify-center ml-1"
                          })
                        ])
                      ])
                    ]),
                    createVNode("p", { class: "text-base font-medium text-slate-700 dark:text-slate-200" }, toDisplayString(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(item.price)) + " so\u2018m", 1)
                  ]),
                  createVNode("div", { class: "absolute" }, [
                    createVNode(_sfc_main$2, null, {
                      default: withCtx(() => [
                        createTextVNode("Bepul")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cr9FgWdh.mjs.map
