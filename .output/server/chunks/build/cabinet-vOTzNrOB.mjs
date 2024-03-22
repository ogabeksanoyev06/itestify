import { ref, watch, unref, useSSRContext } from 'vue';
import { u as useUserProfile } from './useUserProfile-gyxlfZRa.mjs';
import { p as phoneFormat, c as currencyFormat } from './format-CXxZLjYI.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
import { A as AppHeader } from './AppHeader-wWZ3oymC.mjs';
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
import './nuxt-link-IQf18NCF.mjs';
import './useAuth-CsntCOQI.mjs';
import './Button-DsDFiGaw.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _sfc_main = {
  __name: "cabinet",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    const currentRoute = ref("");
    const highlighter = ref({});
    const menu = ref([
      {
        title: "Asosiy malumotlar",
        name: "profile"
      },
      {
        title: "Hisobni to`ldirish",
        name: "profile-top-up-balance"
      },
      {
        title: "To`lovlar tarixi",
        name: "profile-payment-history"
      },
      {
        title: "Test natijalari",
        name: "profile-tests-results"
      }
    ]);
    const usertype = ref([
      {
        value: "applicant",
        name: "Abituriyent"
      },
      {
        value: "pupil",
        name: "O'quvchi"
      },
      {
        value: "teacher",
        name: "O'qituvchi"
      }
    ]);
    const { user, userProfile, loading } = useUserProfile();
    const highlightButton = (id) => {
      const button = (void 0).getElementById(id);
      const container = (void 0).querySelector(".mini-x-scroll");
      if (button && container) {
        const buttonPosition = button.getBoundingClientRect();
        const containerPosition = container.getBoundingClientRect();
        const buttonLeftRelativeToContainer = buttonPosition.left - containerPosition.left;
        if (highlighter.value) {
          highlighter.value.style.width = `${buttonPosition.width}px`;
          highlighter.value.style.transform = `translateX(${buttonLeftRelativeToContainer}px)`;
        }
      }
    };
    const updateActiveButton = () => {
      currentRoute.value = route.name;
      const activeButton = menu.value.find((item) => item.name === currentRoute.value);
      if (activeButton) {
        const id = menu.value.indexOf(activeButton) + 1;
        highlightButton(id);
      }
    };
    watch(route, updateActiveButton);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(`<main class="min-h-[calc(100vh-64px)] py-8"><div class="container"><div class="bg-card pt-3 px-3 sm:pt-6 sm:px-6 rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mb-8"><div class="flex justify-between items-center flex-wrap gap-5 bg-[url(https://www.fozilov.uz/assets/Light.png)] bg-[length:200px_200px]"><div class="flex items-start flex-wrap gap-3"><div class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-white-100 before:opacity-20 before:absolute before:inset-0 w-14 h-14 rounded-full before:rounded-full"><div class="flex items-center justify-center text-white h-full w-full text-base object-cover relative text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-content">${ssrInterpolate(((_a = unref(user).first_name) == null ? void 0 : _a.slice(0, 1)) + ((_b = unref(user).last_name) == null ? void 0 : _b.slice(0, 1)))}</div></div><div><h2 class="text-primary-800 text-base sm:text-xl font-semibold">${ssrInterpolate(unref(user).username)}</h2><p class="text-gray text-base font-medium">${ssrInterpolate(("phoneFormat" in _ctx ? _ctx.phoneFormat : unref(phoneFormat))("998" + unref(user).phone))}</p></div></div><div><h2 class="text-primary-800 text-base sm:text-xl font-semibold">Mening hisobim</h2><p class="text-gray text-base font-medium">${ssrInterpolate(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(unref(user).balance))} so&#39;m</p></div><div><h2 class="text-primary-800 text-base sm:text-xl font-semibold">Mening maqomim</h2><p class="text-gray text-base font-medium">${ssrInterpolate((_c = unref(usertype).find((type) => type.value === unref(user).type)) == null ? void 0 : _c.name)}</p></div></div><nav class="border-t border-border mt-5"><div class="relative overflow-hidden py-2"><div class="flex gap-6 overflow-y-auto mini-x-scroll"><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(`<button${ssrRenderAttr("id", i + 1)} class="${ssrRenderClass([{ "!text-foreground font-semibold": unref(currentRoute) === item.name }, "!pt-2 text-foreground/90 py-2 rounded-sm transition-all hover:text-foreground leading-130 text-sm font-medium z-10 flex items-center gap-1 shrink-0"])}">${ssrInterpolate(item.title)}</button>`);
      });
      _push(`<!--]--></div><div class="absolute h-[2px] bg-primary left-0 bottom-0 rounded-t-md transition-all duration-500"></div></div></nav></div><div class="shadow-[rgba(0,0,0,0.16)_0px_1px_4px] px-3 py-6 sm:px-6 rounded-2xl">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/cabinet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cabinet-vOTzNrOB.mjs.map
