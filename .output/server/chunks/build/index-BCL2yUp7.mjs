import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useCommonData } from './useCommonData-DpGNGaik.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, Fragment, renderList } from 'vue';
import { _ as _sfc_main$8 } from './Button-DsDFiGaw.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-IQf18NCF.mjs';
import { u as useAuth } from './useAuth-CsntCOQI.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useTests } from './useTests-DJvOJq7P.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './useApi-BcaOE1C1.mjs';
import './server.mjs';
import 'vue-router';
import 'vee-validate';
import 'dayjs';
import 'axios';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$7 = {
  __name: "Counts",
  __ssrInlineRender: true,
  setup(__props) {
    const { statistics, getStatistics } = useCommonData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 my-6 bg-gray-100" }, _attrs))}><div class="container"><div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"><div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b"><span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21.3252V19.3252C3 18.2643 3.42143 17.2469 4.17157 16.4968C4.92172 15.7466 5.93913 15.3252 7 15.3252H11C11.96 15.3252 12.84 15.6632 13.53 16.2262M16 3.4552C16.8604 3.6755 17.623 4.1759 18.1676 4.87751C18.7122 5.57912 19.0078 6.44203 19.0078 7.3302C19.0078 8.21837 18.7122 9.08128 18.1676 9.78289C17.623 10.4845 16.8604 10.9849 16 11.2052M16 19.3252H22M19 16.3252V22.3252M5 7.3252C5 8.38606 5.42143 9.40348 6.17157 10.1536C6.92172 10.9038 7.93913 11.3252 9 11.3252C10.0609 11.3252 11.0783 10.9038 11.8284 10.1536C12.5786 9.40348 13 8.38606 13 7.3252C13 6.26433 12.5786 5.24691 11.8284 4.49677C11.0783 3.74662 10.0609 3.3252 9 3.3252C7.93913 3.3252 6.92172 3.74662 6.17157 4.49677C5.42143 5.24691 5 6.26433 5 7.3252Z" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"></path></svg></span><h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">${ssrInterpolate(unref(statistics).users_count)} +</h3><p class="text-sm text-muted-foreground">Foydalanuvchilar</p></div><div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b"><span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21.3252V19.3252C3 18.2643 3.42143 17.2469 4.17157 16.4968C4.92172 15.7466 5.93913 15.3252 7 15.3252H11C11.96 15.3252 12.84 15.6632 13.53 16.2262M16 3.4552C16.8604 3.6755 17.623 4.1759 18.1676 4.87751C18.7122 5.57912 19.0078 6.44203 19.0078 7.3302C19.0078 8.21837 18.7122 9.08128 18.1676 9.78289C17.623 10.4845 16.8604 10.9849 16 11.2052M16 19.3252H22M19 16.3252V22.3252M5 7.3252C5 8.38606 5.42143 9.40348 6.17157 10.1536C6.92172 10.9038 7.93913 11.3252 9 11.3252C10.0609 11.3252 11.0783 10.9038 11.8284 10.1536C12.5786 9.40348 13 8.38606 13 7.3252C13 6.26433 12.5786 5.24691 11.8284 4.49677C11.0783 3.74662 10.0609 3.3252 9 3.3252C7.93913 3.3252 6.92172 3.74662 6.17157 4.49677C5.42143 5.24691 5 6.26433 5 7.3252Z" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"></path></svg></span><h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">${ssrInterpolate(unref(statistics).schools_count)} +</h3><p class="text-sm text-muted-foreground">Maktablar</p></div><div class="bg-card rounded-lg p-8 text-center flex flex-col gap-2 relative border-border border-b"><span class="w-10 h-10 flex items-center justify-center absolute -top-5 right-0 rounded-full border border-border bg-card"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21.3252V19.3252C3 18.2643 3.42143 17.2469 4.17157 16.4968C4.92172 15.7466 5.93913 15.3252 7 15.3252H11C11.96 15.3252 12.84 15.6632 13.53 16.2262M16 3.4552C16.8604 3.6755 17.623 4.1759 18.1676 4.87751C18.7122 5.57912 19.0078 6.44203 19.0078 7.3302C19.0078 8.21837 18.7122 9.08128 18.1676 9.78289C17.623 10.4845 16.8604 10.9849 16 11.2052M16 19.3252H22M19 16.3252V22.3252M5 7.3252C5 8.38606 5.42143 9.40348 6.17157 10.1536C6.92172 10.9038 7.93913 11.3252 9 11.3252C10.0609 11.3252 11.0783 10.9038 11.8284 10.1536C12.5786 9.40348 13 8.38606 13 7.3252C13 6.26433 12.5786 5.24691 11.8284 4.49677C11.0783 3.74662 10.0609 3.3252 9 3.3252C7.93913 3.3252 6.92172 3.74662 6.17157 4.49677C5.42143 5.24691 5 6.26433 5 7.3252Z" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"></path></svg></span><h3 class="text-2xl sm:text-3xl font-semibold leading-none text-primary">${ssrInterpolate(unref(statistics).tests_count)} +</h3><p class="text-sm text-muted-foreground">Testlar</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/Counts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Counts = _sfc_main$7;
const _sfc_main$6 = {
  __name: "CtaBanner",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    text: String,
    order: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$8;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-6 py-8" }, _attrs))}><div class="container"><div data-aos="fade-up"><div class="grid items-center grid-cols-1 md:grid-cols-2 gap-10"><div class="${ssrRenderClass([{ "md:order-last": __props.order }, "flex flex-col space-y-4"])}"><p class="text-base sm:text-2xl uppercase font-bold">${ssrInterpolate(props.name)}</p><h5 class="text-2xl sm:text-3xl relative text-transparent bg-gradient-to-r from-green-500 to-sky-500/50 bg-clip-text font-semibold">${ssrInterpolate(props.title)}</h5><p class="text-base text-muted-foreground">${ssrInterpolate(props.text)}</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "secondary",
        class: "w-fit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Test yechish `);
          } else {
            return [
              createTextVNode(" Test yechish ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass(__props.order ? "md:mr-auto" : "md:ml-auto")}"><img src="https://ipro-five.vercel.app/img/news/img-1.jpg" alt="" class="rounded max-w-full"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/CtaBanner.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CtaBanner = _sfc_main$6;
const _imports_0 = "" + buildAssetsURL("1.CzW3b18R.jpg");
const _imports_1 = "" + buildAssetsURL("2.CBN5q2w7.jpg");
const _imports_2 = "" + buildAssetsURL("4.CoSnpQdw.jpg");
const _imports_3 = "" + buildAssetsURL("3.COCcODwm.jpg");
const _sfc_main$5 = {
  __name: "HeroBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const { isAuthenticated } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-ca3d180c><div class="min-h-[calc(100vh-56px)] flex items-center py-4 relative" data-v-ca3d180c><div class="grid grid-cols-1 gap-12 xl:grid-cols-2 items-center" data-v-ca3d180c><div class="flex flex-col space-y-6" data-v-ca3d180c><div class="flex justify-center xl:justify-start" data-v-ca3d180c>`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        size: "sm",
        variant: "outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" data-v-ca3d180c${_scopeId}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" data-v-ca3d180c${_scopeId}></path><path d="M5 3v4" data-v-ca3d180c${_scopeId}></path><path d="M19 17v4" data-v-ca3d180c${_scopeId}></path><path d="M3 5h4" data-v-ca3d180c${_scopeId}></path><path d="M17 19h4" data-v-ca3d180c${_scopeId}></path></svg> Xush kelibsiz, bo&#39;lajak bilimdon `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "w-4 h-4 mr-2"
              }, [
                createVNode("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
                createVNode("path", { d: "M5 3v4" }),
                createVNode("path", { d: "M19 17v4" }),
                createVNode("path", { d: "M3 5h4" }),
                createVNode("path", { d: "M17 19h4" })
              ])),
              createTextVNode(" Xush kelibsiz, bo'lajak bilimdon ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="text-4xl font-bold text-center sm:text-5xl md:text-6xl lg:text-6xl xl:text-left relative" data-v-ca3d180c><span style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "top", "text-decoration": "inherit", "text-wrap": "balance" })}" data-v-ca3d180c> iTestify orqali bilimingizni <span class="relative text-transparent bg-gradient-to-r from-green-500 to-sky-500/90 bg-clip-text" data-v-ca3d180c>tez va oson</span> oshiring. </span><img class="absolute kite-blue top-[0px] right-20 z-0" src="https://cdn.commeta.uz/static/review/static/front/svg/spring/kite-blue-mobile.svg" alt="" data-v-ca3d180c></h1><p class="leading-normal text-center text-muted-foreground sm:text-base sm:leading-6 xl:text-left" data-v-ca3d180c> Bu platforma sizga test topshirish, sinovlarni o&#39;tkazish va natijalarni o&#39;rganish imkoniyatini beradi. Bu yerga kirishingiz bilan, sizning bilimingizni sinash va rivojlantirishga yordam beradigan qulay va samarali vositaga ega bo&#39;lasiz. </p><div class="flex justify-center space-x-2 md:space-x-4 xl:justify-start" data-v-ca3d180c>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/choose-test" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { variant: "outline" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Test yechish`);
                } else {
                  return [
                    createTextVNode("Test yechish")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$8), { variant: "outline" }, {
                default: withCtx(() => [
                  createTextVNode("Test yechish")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(isAuthenticated)) {
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/register" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$8), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Ro&#39;yxatdan o&#39;tish`);
                  } else {
                    return [
                      createTextVNode("Ro'yxatdan o'tish")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$8), null, {
                  default: withCtx(() => [
                    createTextVNode("Ro'yxatdan o'tish")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-5 grid-rows-5 gap-3" data-v-ca3d180c><div class="col-span-2 row-span-5 overflow-hidden rounded" data-v-ca3d180c><img class="object-cover w-full h-full transition-all ease-linear hover:scale-110"${ssrRenderAttr("src", _imports_0)} data-v-ca3d180c></div><div class="col-span-3 col-start-3 row-span-3 row-start-3 overflow-hidden rounded" data-v-ca3d180c><img class="object-cover w-full h-full transition-all ease-linear hover:scale-110"${ssrRenderAttr("src", _imports_1)} data-v-ca3d180c></div><div class="col-span-2 col-start-3 row-span-2 row-start-1 overflow-hidden rounded" data-v-ca3d180c><img class="object-cover w-full h-full transition-all ease-linear hover:scale-110"${ssrRenderAttr("src", _imports_2)} data-v-ca3d180c></div><div class="col-start-5 row-span-2 row-start-1 overflow-hidden rounded" data-v-ca3d180c><img class="object-cover w-full h-full transition-all ease-linear hover:scale-110"${ssrRenderAttr("src", _imports_3)} data-v-ca3d180c></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/HeroBanner.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroBanner = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ca3d180c"]]);
const _sfc_main$4 = {
  __name: "TestTypes",
  __ssrInlineRender: true,
  setup(__props) {
    const { testTypes, getTestTypes } = useTests();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 mt-6" }, _attrs))}><div class="container"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(unref(testTypes), (item, index) => {
        _push(`<div data-aos="fade-up"${ssrRenderAttr("data-aos-duration", (index + 1) * 100)}><div class="rounded-xl border border-border bg-card text-card-foreground shadow min-h-[200px] h-full cursor-pointer hover:shadow-none transition-all duration-300"><div class="flex flex-col justify-center h-full gap-y-2 p-6"><div class="pointer-events-none"><span class="flex-shrink-0"><img src="https://cdn.commeta.uz/100x/https://cdn.commeta.uz/media/media/Group_MVewrf7.svg" class="w-8 h-8"></span></div><div class="flex flex-col space-y-2"><h3 class="font-semibold leading-none tracking-tight">${ssrInterpolate(item.title)}</h3><p class="text-sm text-muted-foreground">${ssrInterpolate(item.short_description)}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/TestTypes.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TestTypes = _sfc_main$4;
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 mt-6 mb-6" }, _attrs))}><div class="container"><div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"><div data-aos="zoom-in"><div class="min-h-[220px] p-[40px_30px] bg-card border border-border rounded-lg group transition-all hover:bg-primary ease-in-out duration-300"><span class="text-2xl text-primary font-bold group-hover:text-white"> 01 </span><h4 class="text-2xl font-semibold my-4 group-hover:text-white">Ro&#39;yhatdan o&#39;ting</h4><p class="text-sm font-medium group-hover:text-white">Kirish tugmasini bosib formani to&#39;dirib ro&#39;yhatdan o&#39;ting</p></div></div><div data-aos="zoom-in"><div class="min-h-[220px] p-[40px_30px] bg-card border border-border rounded-lg group transition-all hover:bg-primary ease-in-out duration-300"><span class="text-2xl text-primary font-bold group-hover:text-white"> 02 </span><h4 class="text-2xl font-semibold my-4 group-hover:text-white">Balansingizni to&#39;ldiring</h4><p class="text-sm font-medium group-hover:text-white">Pul o&#39;tkazish platformalaridan qulay tarzda pul o&#39;tkazing.</p></div></div><div data-aos="zoom-in"><div class="min-h-[220px] p-[40px_30px] bg-card border border-border rounded-lg group transition-all hover:bg-primary ease-in-out duration-300"><span class="text-2xl text-primary font-bold group-hover:text-white"> 03 </span><h4 class="text-2xl font-semibold my-4 group-hover:text-white">Testni ishlang</h4><p class="text-sm font-medium group-hover:text-white text-muted-foreground"> O&#39;zingiz hoxlagan yo&#39;nalishni tanlang va testni ishlang. </p></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/WhyUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WhyUs = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 py-8" }, _attrs))}><div class="container"><div class="space-y-2 max-w-[900px] text-center mx-auto"><h1 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-green-500 to-sky-500/50 bg-clip-text"> Siz uchun yaratilgan qulayliklar </h1><p class="text-base text-muted-foreground"> Platformamiz yuqori texnologiyalar zamonida taqdim qilinayotgan imkoniyatlardan unumli foydalanishga va vaqtingizni tejashga, o&#39;zingizga qulay vaqtda malaka oshirishingizga yordam beradi. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"><!--[-->`);
  ssrRenderList(4, (item, i) => {
    _push(`<div data-aos="fade-up"${ssrRenderAttr("data-aos-duration", (i + 1) * 100)}><div class="flex flex-col rounded-lg border border-border bg-card text-card-foreground shadow-sm gap-y-2 p-6"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="mb-3 h-6 w-6"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg></span><h3 class="text-2xl font-semibold leading-none tracking-tight">Qulay interfeys</h3><p class="text-sm text-muted-foreground"> Oson, tushunarli va qulay interfeys orqali platforma imkoniyatlaridan to&#39;liq foydalanishingiz mumkin </p></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/Features.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Features = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 py-8" }, _attrs))}><div class="flex items-stretch relative"><div class="container shrink-0 relative z-0"><div class="space-y-2 max-w-[900px] text-center mx-auto"><h1 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-green-500 to-sky-500/50 bg-clip-text"> Foydali havolalar </h1></div><div class="overflow-hidden px-[150px] -mx-[150px] relative z-0">`);
  _push(ssrRenderComponent(_component_Swiper, {
    class: "h-full mt-8 w-full !overflow-visible",
    modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
    "slides-per-view": 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2e3,
      disableOnInteraction: false
    },
    breakpoints: {
      "768": {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      "1024": {
        slidesPerView: 3.2,
        spaceBetween: 20
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(10, (item) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: item }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<a href="#" class="flex flex-col items-center text-center gap-2 rounded border border-border backdrop-blur-md p-4 bg-card"${_scopeId2}><div class="h-[64px] w-[64px] flex-shrink-0 mr-4"${_scopeId2}><img src="https://innovation.gov.uz/media/interactive_services/gerb_RTTbHAg.png" class="w-full h-full object-contain"${_scopeId2}></div><p class="text-sm text-foreground"${_scopeId2}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est officiis, unde iusto nihil </p></a>`);
              } else {
                return [
                  createVNode("a", {
                    href: "#",
                    class: "flex flex-col items-center text-center gap-2 rounded border border-border backdrop-blur-md p-4 bg-card"
                  }, [
                    createVNode("div", { class: "h-[64px] w-[64px] flex-shrink-0 mr-4" }, [
                      createVNode("img", {
                        src: "https://innovation.gov.uz/media/interactive_services/gerb_RTTbHAg.png",
                        class: "w-full h-full object-contain"
                      })
                    ]),
                    createVNode("p", { class: "text-sm text-foreground" }, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est officiis, unde iusto nihil ")
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(10, (item) => {
            return createVNode(_component_SwiperSlide, { key: item }, {
              default: withCtx(() => [
                createVNode("a", {
                  href: "#",
                  class: "flex flex-col items-center text-center gap-2 rounded border border-border backdrop-blur-md p-4 bg-card"
                }, [
                  createVNode("div", { class: "h-[64px] w-[64px] flex-shrink-0 mr-4" }, [
                    createVNode("img", {
                      src: "https://innovation.gov.uz/media/interactive_services/gerb_RTTbHAg.png",
                      class: "w-full h-full object-contain"
                    })
                  ]),
                  createVNode("p", { class: "text-sm text-foreground" }, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est officiis, unde iusto nihil ")
                ])
              ]),
              _: 2
            }, 1024);
          }), 64))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-overlay dark:swiper-overlay-dark absolute right-0 top-8 bottom-0 w-[180px] sm:w-[228px] z-[1] pointer-events-none"></div><div class="swiper-overlay dark:swiper-overlay-dark rotate-180 absolute left-0 top-8 bottom-0 w-[180px] sm:w-[228px] z-[1] pointer-events-none"></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/UsefulLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UsefulLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroBanner, null, null, _parent));
      _push(ssrRenderComponent(TestTypes, null, null, _parent));
      _push(ssrRenderComponent(CtaBanner, {
        name: "Online test",
        title: "Sizning vaqtingizga qarab moslashadi.",
        text: "Online test bo'limida siz xohlagan yo'nalishni tanlang va Testni Boshlash tugmasi bilan jarayonni ishga tushuring."
      }, null, _parent));
      _push(ssrRenderComponent(CtaBanner, {
        name: "Blog test",
        title: "Ummumiy shakllangan ko'nikmalar sinovdan o'tkaziladi.",
        text: "Bo'limda qaysi fan yuzasidan test ishlamoqchi bo'lganingizni tanlang, testlar miqdorini belgilang va o'z darajangizni tekshiring.",
        order: true
      }, null, _parent));
      _push(ssrRenderComponent(CtaBanner, {
        name: "Maktab o'quvchilari uchun test",
        title: "O'quvchilar uchun maxsus testlar.",
        text: "Bu bo'limda o'quvchilar olgan bilim va ko'nikmalarini amalda mustahkamlab olishadi. O'rganing va bazadan foydalanib mustahkamlang."
      }, null, _parent));
      _push(ssrRenderComponent(CtaBanner, {
        name: "Xalqaro tadqiqot testlari",
        title: "Bu b'limda xalqaro darajada o'z o'rningizni egallang.",
        text: "Xalqaro tadqiqotlar bo'limi o'quvchi yoshlarni har 5 yilda PISA, PIRLSS, TIMSS testlaridan o'z bilimini tekshirish imkoniyatini beradi.",
        order: true
      }, null, _parent));
      _push(ssrRenderComponent(Features, null, null, _parent));
      _push(ssrRenderComponent(UsefulLinks, null, null, _parent));
      _push(ssrRenderComponent(Counts, null, null, _parent));
      _push(ssrRenderComponent(WhyUs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BCL2yUp7.mjs.map
