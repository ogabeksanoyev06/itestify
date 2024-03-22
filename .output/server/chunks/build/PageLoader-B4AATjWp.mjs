import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "" + buildAssetsURL("icon.DpeVCnXf.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white fixed top-0 left-0 w-full h-full flex items-center justify-center z-50" }, _attrs))} data-v-577264a3><div class="preloader-content" data-v-577264a3><div class="loader loader--fade" data-v-577264a3><span class="loader-item" data-v-577264a3></span><span class="loader-item" data-v-577264a3></span><span class="loader-item" data-v-577264a3></span><span class="loader-item" data-v-577264a3></span></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/PageLoader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-577264a3"]]);

export { PageLoader as P, _imports_0 as _ };
//# sourceMappingURL=PageLoader-B4AATjWp.mjs.map
