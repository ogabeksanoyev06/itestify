import { mergeProps, unref, useSSRContext } from 'vue';
import { u as usePayment } from './usePayment-D0ZV7DzB.mjs';
import { c as currencyFormat } from './format-CXxZLjYI.mjs';
import dayjs from 'dayjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import 'axios';

const _sfc_main = {
  __name: "payment-history",
  __ssrInlineRender: true,
  setup(__props) {
    const { payments_history, getPaymentsHistory, loading } = usePayment();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-history" }, _attrs))}><h4 class="text-base sm:text-xl font-semibold mb-4">To&#39;lovlar tarixi</h4><div class="relative overflow-x-auto"><table class="w-full text-sm text-left rtl:text-right"><thead><tr class="border-b text-center"><th scope="col" class="px-6 py-4">#</th><th scope="col" class="px-6 py-4">To&#39;lov turi</th><th scope="col" class="px-6 py-4">To&#39;lov miqdori</th><th scope="col" class="px-6 py-4">Sana</th><th scope="col" class="px-6 py-4">Statusi</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(payments_history).results, (item, index) => {
        _push(`<tr class="bg-white border-b hover:bg-gray-100 transition-all duration-300 text-center"><td class="px-6 py-4 font-medium">${ssrInterpolate(index + 1)}</td><td class="px-6 py-4 font-medium">${ssrInterpolate(item.payment_system)}</td><td class="px-6 py-4 font-medium">${ssrInterpolate(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(item.amount))} so&#39;m</td><td class="px-6 py-4 font-medium">${ssrInterpolate(("dayjs" in _ctx ? _ctx.dayjs : unref(dayjs))(item.date).format("DD-MM-YYYY HH:mm:ss"))}</td><td class="px-6 py-4 font-medium">`);
        if (item.completed) {
          _push(`<span class="text-primary">To&#39;langan</span>`);
        } else {
          _push(`<span class="text-red-600">To&#39;lanmagan</span>`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/payment-history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payment-history-YM2Klwd1.mjs.map
