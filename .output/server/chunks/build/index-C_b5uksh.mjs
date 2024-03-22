import { u as useTests } from './useTests-DJvOJq7P.mjs';
import { u as useActiveTest } from './useTestActive-Dhh6j8AO.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { P as PageLoader, _ as _imports_0 } from './PageLoader-B4AATjWp.mjs';
import { useRouter } from 'vue-router';
import { _ as _sfc_main$1 } from './Button-DsDFiGaw.mjs';
import { _ as _sfc_main$2 } from './index-BIInlcvZ.mjs';
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
import './test-D2R-4yvK.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { testTypes, loading, buyExams, getTestTypes } = useTests();
    const { hasActiveTest, getActiveTest } = useActiveTest();
    const router = useRouter();
    const handleTestStart = async (research_id) => {
      try {
        await getActiveTest();
        if (hasActiveTest.value) {
          router.push({
            path: "/test"
          });
        } else {
          router.push({
            path: `/international-studies/${research_id}`
          });
        }
      } catch (error) {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      } else {
        _push(`<div class="container"><div class="flex flex-col justify-center sm:justify-start space-y-4"><h1 class="text-center sm:text-left text-2xl font-semibold sm:text-3xl">Abiturientlar va o&#39;quvchilar uchun test topshirish tizimi</h1><p class="text-center sm:text-left text-sm text-muted-foreground sm:text-base"> DTM talablari asosida tuzilgan 40 000 ta test savollaridan foydalangan holda test topshirish imkoni </p></div><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8"><!--[-->`);
        ssrRenderList(unref(testTypes), (item, i) => {
          _push(`<div><div class="relative min-h-[250px] h-full overflow-hidden transition border border-border rounded-md group hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"><div class="h-full flex flex-col justify-between p-2 sm:p-4 gap-2"><div class="flex flex-col gap-2"><img${ssrRenderAttr("src", _imports_0)} class="w-10 h-10 group-hover:scale-105 transition-transform duration-500 mt-1 sm:mt-0 mb-2"><h3 class="font-semibold text-base leading-none tracking-tight line-clamp-2">${ssrInterpolate(item.title)}</h3><p class="text-sm text-muted-foreground">${ssrInterpolate(item.short_description)}</p></div><div class="flex items-center justify-center flex-col sm:flex-row sm:justify-between mt-auto">`);
          if (item.is_free) {
            _push(ssrRenderComponent(unref(_sfc_main$1), {
              class: "w-full sm:w-auto",
              onClick: ($event) => handleTestStart(item.id, item.name)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Testni boshlash `);
                } else {
                  return [
                    createTextVNode(" Testni boshlash ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (!item.is_free) {
            _push(ssrRenderComponent(unref(_sfc_main$1), {
              variant: "outline",
              class: "w-full sm:w-auto",
              onClick: ($event) => unref(buyExams)(item.id, "research")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Testni sotib olish `);
                } else {
                  return [
                    createTextVNode(" Testni sotib olish ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(unref(_sfc_main$1), {
            variant: "outline",
            class: "w-full sm:w-auto",
            onClick: ($event) => unref(router).push({ path: "/profile/top-up-balance" })
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
            _: 2
          }, _parent));
          _push(`</div></div><div class="absolute top-0 right-0">`);
          _push(ssrRenderComponent(unref(_sfc_main$2), {
            variant: "secondary",
            class: "text-blue-500 text-sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.price)} so&#39;m`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.price) + " so'm", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/international-studies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C_b5uksh.mjs.map
