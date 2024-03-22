import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './Input-CFzrTygY.mjs';
import { _ as _sfc_main$2 } from './Button-DsDFiGaw.mjs';
import { ref, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as usePayment } from './usePayment-D0ZV7DzB.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import './useApi-BcaOE1C1.mjs';
import './server.mjs';
import 'vue-router';
import 'vee-validate';
import 'dayjs';
import 'axios';

const _imports_0 = "" + buildAssetsURL("payme.CQSqjJDf.svg");
const _sfc_main = {
  __name: "top-up-balance",
  __ssrInlineRender: true,
  setup(__props) {
    const { createPayment } = usePayment();
    const selectedPaymentType = ref(1);
    const paymentAmount = ref(null);
    const isNumber = (evt) => {
      evt = evt ? evt : (void 0).event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = _sfc_main$1;
      const _component_Button = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "top-up-balance" }, _attrs))}><h4 class="text-base sm:text-xl font-semibold mb-4">To&#39;lov turini tanlang</h4><div class="${ssrRenderClass([{ "!border-primary": unref(selectedPaymentType) === 1 }, "inline-flex flex-wrap items-center gap-5 max-w-[250px] cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow hover:border-white"])}"><img${ssrRenderAttr("src", _imports_0)} alt=""><p class="text-base font-bold">PayMe</p></div><div class="flex flex-col gap-5 max-w-[450px] border rounded-lg p-5 mt-5"><p class="text-sm text-gray-500"> Hisobni to&#39;ldirish uchun kerakli miqdorni kiriting va to&#39;lovni amalga oshirish tugmasini bosing. Minimal to&#39;lov - 1000 so&#39;m </p>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(paymentAmount),
        "onUpdate:modelValue": ($event) => isRef(paymentAmount) ? paymentAmount.value = $event : null,
        placeholder: "10 000",
        onKeypress: ($event) => isNumber($event)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        disabled: unref(paymentAmount) <= 9999 || unref(paymentAmount) === null,
        onClick: ($event) => unref(createPayment)(unref(paymentAmount))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hisobni to&#39;ldirish `);
          } else {
            return [
              createTextVNode(" Hisobni to'ldirish ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/top-up-balance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=top-up-balance-_POH7lnI.mjs.map
