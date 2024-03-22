import { mergeProps, unref, useSSRContext, withCtx, openBlock, createBlock, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-IQf18NCF.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { A as AppHeader } from './AppHeader-wWZ3oymC.mjs';
import { useRoute } from 'vue-router';
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
import './useAuth-CsntCOQI.mjs';
import './useApi-BcaOE1C1.mjs';
import 'axios';
import './useUserProfile-gyxlfZRa.mjs';
import './format-CXxZLjYI.mjs';
import './Button-DsDFiGaw.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _imports_0 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='1'%3e%3cpath%20d='M15%2030C23.2863%2030%2030%2023.2863%2030%2015C30%206.71375%2023.2863%200%2015%200C6.71375%200%200%206.71375%200%2015C0%2023.2863%206.71375%2030%2015%2030ZM6.86375%2014.675L21.3263%209.09875C21.9975%208.85625%2022.5837%209.2625%2022.3662%2010.2775L22.3675%2010.2762L19.905%2021.8775C19.7225%2022.7%2019.2337%2022.9%2018.55%2022.5125L14.8%2019.7487L12.9912%2021.4913C12.7912%2021.6913%2012.6225%2021.86%2012.235%2021.86L12.5013%2018.0438L19.4513%2011.765C19.7537%2011.4987%2019.3837%2011.3488%2018.985%2011.6138L10.3963%2017.0212L6.69375%2015.8663C5.89%2015.6112%205.8725%2015.0625%206.86375%2014.675Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='1'%3e%3cpath%20d='M17.8711%2015C17.8711%2016.5857%2016.5857%2017.8711%2015%2017.8711C13.4143%2017.8711%2012.1289%2016.5857%2012.1289%2015C12.1289%2013.4143%2013.4143%2012.1289%2015%2012.1289C16.5857%2012.1289%2017.8711%2013.4143%2017.8711%2015Z'%20fill='white'/%3e%3cpath%20d='M21.7144%209.92039C21.5764%209.5464%2021.3562%209.20789%2021.0701%208.93002C20.7923%208.64392%2020.454%208.42374%2020.0797%208.28572C19.7762%208.16785%2019.3203%208.02754%2018.4805%207.98932C17.5721%207.94789%2017.2997%207.93896%2014.9999%207.93896C12.6999%207.93896%2012.4275%207.94766%2011.5193%207.98909C10.6796%208.02754%2010.2234%208.16785%209.92014%208.28572C9.54591%208.42374%209.2074%208.64392%208.92976%208.93002C8.64366%209.20789%208.42348%209.54617%208.28523%209.92039C8.16736%2010.2239%208.02705%2010.6801%207.98883%2011.5198C7.9474%2012.428%207.93848%2012.7004%207.93848%2015.0004C7.93848%2017.3002%207.9474%2017.5726%207.98883%2018.481C8.02705%2019.3208%208.16736%2019.7767%208.28523%2020.0802C8.42348%2020.4545%208.64343%2020.7927%208.92953%2021.0706C9.2074%2021.3567%209.54568%2021.5769%209.91991%2021.7149C10.2234%2021.833%2010.6796%2021.9733%2011.5193%2022.0115C12.4275%2022.053%2012.6997%2022.0617%2014.9997%2022.0617C17.3%2022.0617%2017.5723%2022.053%2018.4803%2022.0115C19.3201%2021.9733%2019.7762%2021.833%2020.0797%2021.7149C20.8309%2021.4251%2021.4247%2020.8314%2021.7144%2020.0802C21.8323%2019.7767%2021.9726%2019.3208%2022.011%2018.481C22.0525%2017.5726%2022.0612%2017.3002%2022.0612%2015.0004C22.0612%2012.7004%2022.0525%2012.428%2022.011%2011.5198C21.9728%2010.6801%2021.8325%2010.2239%2021.7144%209.92039ZM14.9999%2019.4231C12.5571%2019.4231%2010.5768%2017.4431%2010.5768%2015.0002C10.5768%2012.5573%2012.5571%2010.5773%2014.9999%2010.5773C17.4426%2010.5773%2019.4229%2012.5573%2019.4229%2015.0002C19.4229%2017.4431%2017.4426%2019.4231%2014.9999%2019.4231ZM19.5977%2011.4361C19.0269%2011.4361%2018.5641%2010.9733%2018.5641%2010.4024C18.5641%209.83159%2019.0269%209.36879%2019.5977%209.36879C20.1685%209.36879%2020.6313%209.83159%2020.6313%2010.4024C20.6311%2010.9733%2020.1685%2011.4361%2019.5977%2011.4361Z'%20fill='white'/%3e%3cpath%20d='M15%200C6.717%200%200%206.717%200%2015C0%2023.283%206.717%2030%2015%2030C23.283%2030%2030%2023.283%2030%2015C30%206.717%2023.283%200%2015%200ZM23.5613%2018.5511C23.5197%2019.468%2023.3739%2020.094%2023.161%2020.6419C22.7135%2021.7989%2021.7989%2022.7135%2020.6419%2023.161C20.0942%2023.3739%2019.468%2023.5194%2018.5513%2023.5613C17.6328%2023.6032%2017.3394%2023.6133%2015.0002%2023.6133C12.6608%2023.6133%2012.3676%2023.6032%2011.4489%2023.5613C10.5322%2023.5194%209.90601%2023.3739%209.35829%2023.161C8.78334%2022.9447%208.26286%2022.6057%207.83257%2022.1674C7.39449%2021.7374%207.05551%2021.2167%206.83922%2020.6419C6.62636%2020.0942%206.48056%2019.468%206.4389%2018.5513C6.39656%2017.6326%206.38672%2017.3392%206.38672%2015C6.38672%2012.6608%206.39656%2012.3674%206.43867%2011.4489C6.48033%2010.532%206.6259%209.90601%206.83876%209.35806C7.05505%208.78334%207.39426%208.26263%207.83257%207.83257C8.26263%207.39426%208.78334%207.05528%209.35806%206.83899C9.90601%206.62613%2010.532%206.48056%2011.4489%206.43867C12.3674%206.39679%2012.6608%206.38672%2015%206.38672C17.3392%206.38672%2017.6326%206.39679%2018.5511%206.4389C19.468%206.48056%2020.094%206.62613%2020.6419%206.83876C21.2167%207.05505%2021.7374%207.39426%2022.1677%207.83257C22.6057%208.26286%2022.9449%208.78334%2023.161%209.35806C23.3741%209.90601%2023.5197%2010.532%2023.5616%2011.4489C23.6034%2012.3674%2023.6133%2012.6608%2023.6133%2015C23.6133%2017.3392%2023.6034%2017.6326%2023.5613%2018.5511Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30%2015C30%206.71484%2023.2852%200%2015%200C6.71484%200%200%206.71484%200%2015C0%2023.2852%206.71484%2030%2015%2030C15.0879%2030%2015.1758%2030%2015.2637%2029.9941V18.3223H12.041V14.5664H15.2637V11.8008C15.2637%208.5957%2017.2207%206.84961%2020.0801%206.84961C21.4512%206.84961%2022.6289%206.94922%2022.9688%206.99609V10.3477H21C19.4473%2010.3477%2019.1426%2011.0859%2019.1426%2012.1699V14.5605H22.8633L22.377%2018.3164H19.1426V29.4199C25.4121%2027.6211%2030%2021.8496%2030%2015Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_nuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer py-9 bg-[#eeeef5]" }, _attrs))}><div class="container"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"><div class="flex flex-col justify-between">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "mr-6 flex items-center space-x-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="h-6 w-6 rotate-[315deg]" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_102_1338)"${_scopeId}><path d="M208 128L128 208" stroke="#41B883" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M192 40L40 192" stroke="#41B883" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></g><defs${_scopeId}><clipPath id="clip0_102_1338"${_scopeId}><rect width="256" height="256" fill="white"${_scopeId}></rect></clipPath></defs></svg><span class="font-bold"${_scopeId}> iTestify </span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "h-6 w-6 rotate-[315deg]",
            viewBox: "0 0 256 256",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("g", { "clip-path": "url(#clip0_102_1338)" }, [
              createVNode("path", {
                d: "M208 128L128 208",
                stroke: "#41B883",
                "stroke-width": "16",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M192 40L40 192",
                stroke: "#41B883",
                "stroke-width": "16",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]),
            createVNode("defs", null, [
              createVNode("clipPath", { id: "clip0_102_1338" }, [
                createVNode("rect", {
                  width: "256",
                  height: "256",
                  fill: "white"
                })
              ])
            ])
          ])),
          createVNode("span", { class: "font-bold" }, " iTestify ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="text-gray-500"><li class="flex items-center gap-1 py-1"><span class="font-bold">Telefon:</span><span> +998 97 748 95 55</span></li><li class="flex items-center gap-1 py-1"><span class="font-bold">Telegram:</span><span> @ogabek</span></li></ul></div><div><h4 class="text-base text-primary font-bold mb-3">Foydali sahifalar</h4><ul><li class="flex items-center pb-2">`);
  _push(ssrRenderComponent(_component_nuxtLink, {
    to: "/",
    class: "text-gray-600 font-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Bosh sahifa`);
      } else {
        return [
          createTextVNode(" Bosh sahifa")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center py-2">`);
  _push(ssrRenderComponent(_component_nuxtLink, {
    to: "/choose-test",
    class: "text-gray-600 font-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Testlar `);
      } else {
        return [
          createTextVNode(" Testlar ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center py-2">`);
  _push(ssrRenderComponent(_component_nuxtLink, {
    to: "/international-studies",
    class: "text-gray-600 font-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Xalqaro tadqiqotlar`);
      } else {
        return [
          createTextVNode("Xalqaro tadqiqotlar")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center py-2">`);
  _push(ssrRenderComponent(_component_nuxtLink, {
    to: "/",
    class: "text-gray-600 font-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Yo&#39;riqnoma`);
      } else {
        return [
          createTextVNode("Yo'riqnoma")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h4 class="text-base text-primary font-bold mb-3">Bizning ijtimoiy tarmoqlar</h4><ul class="flex flex-wrap gap-6 bg-primary rounded-lg p-3"><li class="flex items-center cursor-pointer"><img${ssrRenderAttr("src", _imports_0)} alt=""></li><li class="flex items-center cursor-pointer"><img${ssrRenderAttr("src", _imports_1)} alt=""></li><li class="flex items-center cursor-pointer"><img${ssrRenderAttr("src", _imports_2)} alt=""></li></ul></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/default/footer/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col bg-background" }, _attrs))}>`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(`<div class="flex-1 bg-background"><main class="overflow-x-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      if (unref(route).name === "index") {
        _push(ssrRenderComponent(AppFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Cy-nCUU_.mjs.map
