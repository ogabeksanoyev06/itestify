import { _ as _sfc_main$3 } from './Label-DPgnHvj4.mjs';
import { _ as _sfc_main$8, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$5, d as _sfc_main$4, e as _sfc_main$2$1, f as _sfc_main$3$1 } from './SelectScrollDownButton-DyBSBm8i.mjs';
import { ref, watch, onUpdated, resolveComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { u as useCommonData } from './useCommonData-DpGNGaik.mjs';
import { u as useUserProfile } from './useUserProfile-gyxlfZRa.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Button-DsDFiGaw.mjs';
import { _ as _sfc_main$1 } from './Input-CFzrTygY.mjs';
import 'radix-vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';
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
import 'dayjs';
import 'axios';
import 'class-variance-authority';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
    const { regions, districts, schools, getRegions, getDistricts, getSchools } = useCommonData();
    const { user, userProfile, updateUserProfile, loading } = useUserProfile();
    watch(
      () => user.value.region,
      (newValue, oldValue) => {
        if (newValue !== void 0 && newValue !== null && newValue !== oldValue) {
          getDistricts(user.value.region);
        }
      }
    );
    watch(
      () => user.value.district,
      (newValue, oldValue) => {
        if (newValue !== void 0 && newValue !== null && newValue !== oldValue) {
          getSchools(user.value.district);
        }
      }
    );
    onUpdated(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = resolveComponent("VForm");
      const _component_VField = resolveComponent("VField");
      const _component_Label = _sfc_main$3;
      const _component_Select = _sfc_main$8;
      const _component_SelectTrigger = _sfc_main$6;
      const _component_SelectValue = _sfc_main$7;
      const _component_SelectContent = _sfc_main$5;
      const _component_SelectGroup = _sfc_main$4;
      const _component_SelectLabel = _sfc_main$2$1;
      const _component_SelectItem = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h4 class="text-base sm:text-xl font-semibold mb-4">Asosiy malumotlar</h4>`);
      _push(ssrRenderComponent(_component_VForm, null, {
        default: withCtx(({ handleSubmit }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}><div class="grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8"${_scopeId}><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "username",
              rules: "required|max:60|min:3",
              modelValue: unref(user).username,
              "onUpdate:modelValue": ($event) => unref(user).username = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "username" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Foydalanuvchi nomi`);
                      } else {
                        return [
                          createTextVNode("Foydalanuvchi nomi")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "username",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                    modelValue: unref(user).username,
                    "onUpdate:modelValue": ($event) => unref(user).username = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "username" }, {
                      default: withCtx(() => [
                        createTextVNode("Foydalanuvchi nomi")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "username",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                      modelValue: unref(user).username,
                      "onUpdate:modelValue": ($event) => unref(user).username = $event
                    }, null, 8, ["class", "modelValue", "onUpdate:modelValue"]),
                    createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "first_name",
              rules: "required|max:60|min:3",
              modelValue: unref(user).first_name,
              "onUpdate:modelValue": ($event) => unref(user).first_name = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "first_name" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ism`);
                      } else {
                        return [
                          createTextVNode("Ism")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "first_name",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    modelValue: unref(user).first_name,
                    "onUpdate:modelValue": ($event) => unref(user).first_name = $event,
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "first_name" }, {
                      default: withCtx(() => [
                        createTextVNode("Ism")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "first_name",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      modelValue: unref(user).first_name,
                      "onUpdate:modelValue": ($event) => unref(user).first_name = $event,
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                    createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "last_name",
              rules: "required|max:60|min:3",
              modelValue: unref(user).last_name,
              "onUpdate:modelValue": ($event) => unref(user).last_name = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "last_name" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Familiya`);
                      } else {
                        return [
                          createTextVNode("Familiya")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "last_name",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    modelValue: unref(user).last_name,
                    "onUpdate:modelValue": ($event) => unref(user).last_name = $event,
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "last_name" }, {
                      default: withCtx(() => [
                        createTextVNode("Familiya")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "last_name",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      modelValue: unref(user).last_name,
                      "onUpdate:modelValue": ($event) => unref(user).last_name = $event,
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                    createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "father_name",
              rules: "max:60|min:3",
              modelValue: unref(user).father_name,
              "onUpdate:modelValue": ($event) => unref(user).father_name = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "father_name" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Otasining ismi`);
                      } else {
                        return [
                          createTextVNode("Otasining ismi")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "father_name",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    modelValue: unref(user).father_name,
                    "onUpdate:modelValue": ($event) => unref(user).father_name = $event,
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "father_name" }, {
                      default: withCtx(() => [
                        createTextVNode("Otasining ismi")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "father_name",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      modelValue: unref(user).father_name,
                      "onUpdate:modelValue": ($event) => unref(user).father_name = $event,
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                    createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "email",
              rules: "email",
              modelValue: unref(user).email,
              "onUpdate:modelValue": ($event) => unref(user).email = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "email" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "email",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    modelValue: unref(user).email,
                    "onUpdate:modelValue": ($event) => unref(user).email = $event,
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "email" }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "email",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      modelValue: unref(user).email,
                      "onUpdate:modelValue": ($event) => unref(user).email = $event,
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                    createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "phone",
              rules: "phone|max:9",
              modelValue: unref(user).phone,
              "onUpdate:modelValue": ($event) => unref(user).phone = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "phone" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Telefon raqam`);
                      } else {
                        return [
                          createTextVNode("Telefon raqam")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "phone",
                    type: "text",
                    placeholder: "Telefon raqam",
                    modelValue: unref(user).phone,
                    "onUpdate:modelValue": ($event) => unref(user).phone = $event,
                    class: ["pl-12", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3"${_scopeId2}> 998 </span></div><span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "phone" }, {
                      default: withCtx(() => [
                        createTextVNode("Telefon raqam")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative w-full" }, [
                      createVNode(unref(_sfc_main$1), {
                        id: "phone",
                        type: "text",
                        placeholder: "Telefon raqam",
                        modelValue: unref(user).phone,
                        "onUpdate:modelValue": ($event) => unref(user).phone = $event,
                        class: ["pl-12", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3" }, " 998 ")
                    ]),
                    createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "region" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "region" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Yo&#39;nalishni tanlang`);
                      } else {
                        return [
                          createTextVNode("Yo'nalishni tanlang")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).type,
                    "onUpdate:modelValue": ($event) => unref(user).type = $event
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(usertype.value, (type, i) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: i + 2,
                                        value: type.value
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(type.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(type.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(usertype.value, (type, i) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: i + 2,
                                          value: type.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(type.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(usertype.value, (type, i) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        key: i + 2,
                                        value: type.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(type.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(usertype.value, (type, i) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      key: i + 2,
                                      value: type.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(type.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "region" }, {
                      default: withCtx(() => [
                        createTextVNode("Yo'nalishni tanlang")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).type,
                      "onUpdate:modelValue": ($event) => unref(user).type = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(usertype.value, (type, i) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: i + 2,
                                    value: type.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(type.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "region" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "region" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Viloyatni tanlang`);
                      } else {
                        return [
                          createTextVNode("Viloyatni tanlang")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).region,
                    "onUpdate:modelValue": ($event) => unref(user).region = $event
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Viloyatni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(regions), (region, i) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: i + 2,
                                        value: region.id
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(region.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(region.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region, i) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: i + 2,
                                          value: region.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(region.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region, i) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        key: i + 2,
                                        value: region.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(region.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region, i) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      key: i + 2,
                                      value: region.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(region.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "region" }, {
                      default: withCtx(() => [
                        createTextVNode("Viloyatni tanlang")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).region,
                      "onUpdate:modelValue": ($event) => unref(user).region = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region, i) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: i + 2,
                                    value: region.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(region.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "district" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "district" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tumanni tanlang`);
                      } else {
                        return [
                          createTextVNode("Tumanni tanlang")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).district,
                    "onUpdate:modelValue": ($event) => unref(user).district = $event,
                    disabled: unref(user).region === ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Tumanni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(districts), (district) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: district.id,
                                        value: district.id
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(district.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(district.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: district.id,
                                          value: district.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(district.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        key: district.id,
                                        value: district.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(district.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      key: district.id,
                                      value: district.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(district.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "district" }, {
                      default: withCtx(() => [
                        createTextVNode("Tumanni tanlang")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).district,
                      "onUpdate:modelValue": ($event) => unref(user).district = $event,
                      disabled: unref(user).region === ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: district.id,
                                    value: district.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(district.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "school" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "school" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Maktabni tanlang`);
                      } else {
                        return [
                          createTextVNode("Maktabni tanlang")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).school,
                    "onUpdate:modelValue": ($event) => unref(user).school = $event,
                    disabled: unref(user).district === ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Maktabni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(schools), (school) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: school.id,
                                        value: school.id
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(school.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(school.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: school.id,
                                          value: school.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(school.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        key: school.id,
                                        value: school.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(school.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      key: school.id,
                                      value: school.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(school.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "school" }, {
                      default: withCtx(() => [
                        createTextVNode("Maktabni tanlang")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).school,
                      "onUpdate:modelValue": ($event) => unref(user).school = $event,
                      disabled: unref(user).district === ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: school.id,
                                    value: school.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(school.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "submit",
              class: "w-full sm:w-auto",
              disabled: unref(loading)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loading)) {
                    _push3(`<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="mr-2 h-4 w-4 animate-spin"${_scopeId2}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56"${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` Saqlash `);
                } else {
                  return [
                    unref(loading) ? (openBlock(), createBlock("svg", {
                      key: 0,
                      viewBox: "0 0 24 24",
                      width: "1.2em",
                      height: "1.2em",
                      class: "mr-2 h-4 w-4 animate-spin"
                    }, [
                      createVNode("path", {
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 12a9 9 0 1 1-6.219-8.56"
                      })
                    ])) : createCommentVNode("", true),
                    createTextVNode(" Saqlash ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(($event) => handleSubmit(unref(updateUserProfile)), ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode("div", { class: "grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, {
                        name: "username",
                        rules: "required|max:60|min:3",
                        modelValue: unref(user).username,
                        "onUpdate:modelValue": ($event) => unref(user).username = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "username" }, {
                            default: withCtx(() => [
                              createTextVNode("Foydalanuvchi nomi")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "username",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                            modelValue: unref(user).username,
                            "onUpdate:modelValue": ($event) => unref(user).username = $event
                          }, null, 8, ["class", "modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, {
                        name: "first_name",
                        rules: "required|max:60|min:3",
                        modelValue: unref(user).first_name,
                        "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "first_name" }, {
                            default: withCtx(() => [
                              createTextVNode("Ism")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "first_name",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            modelValue: unref(user).first_name,
                            "onUpdate:modelValue": ($event) => unref(user).first_name = $event,
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, {
                        name: "last_name",
                        rules: "required|max:60|min:3",
                        modelValue: unref(user).last_name,
                        "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "last_name" }, {
                            default: withCtx(() => [
                              createTextVNode("Familiya")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "last_name",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            modelValue: unref(user).last_name,
                            "onUpdate:modelValue": ($event) => unref(user).last_name = $event,
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, {
                        name: "father_name",
                        rules: "max:60|min:3",
                        modelValue: unref(user).father_name,
                        "onUpdate:modelValue": ($event) => unref(user).father_name = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "father_name" }, {
                            default: withCtx(() => [
                              createTextVNode("Otasining ismi")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "father_name",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            modelValue: unref(user).father_name,
                            "onUpdate:modelValue": ($event) => unref(user).father_name = $event,
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, {
                        name: "email",
                        rules: "email",
                        modelValue: unref(user).email,
                        "onUpdate:modelValue": ($event) => unref(user).email = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "email" }, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "email",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            modelValue: unref(user).email,
                            "onUpdate:modelValue": ($event) => unref(user).email = $event,
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, {
                        name: "phone",
                        rules: "phone|max:9",
                        modelValue: unref(user).phone,
                        "onUpdate:modelValue": ($event) => unref(user).phone = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "phone" }, {
                            default: withCtx(() => [
                              createTextVNode("Telefon raqam")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "relative w-full" }, [
                            createVNode(unref(_sfc_main$1), {
                              id: "phone",
                              type: "text",
                              placeholder: "Telefon raqam",
                              modelValue: unref(user).phone,
                              "onUpdate:modelValue": ($event) => unref(user).phone = $event,
                              class: ["pl-12", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3" }, " 998 ")
                          ]),
                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, { name: "region" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "region" }, {
                            default: withCtx(() => [
                              createTextVNode("Yo'nalishni tanlang")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).type,
                            "onUpdate:modelValue": ($event) => unref(user).type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(usertype.value, (type, i) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: i + 2,
                                          value: type.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(type.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, { name: "region" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "region" }, {
                            default: withCtx(() => [
                              createTextVNode("Viloyatni tanlang")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).region,
                            "onUpdate:modelValue": ($event) => unref(user).region = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region, i) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: i + 2,
                                          value: region.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(region.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, { name: "district" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "district" }, {
                            default: withCtx(() => [
                              createTextVNode("Tumanni tanlang")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).district,
                            "onUpdate:modelValue": ($event) => unref(user).district = $event,
                            disabled: unref(user).region === ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: district.id,
                                          value: district.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(district.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_component_VField, { name: "school" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "school" }, {
                            default: withCtx(() => [
                              createTextVNode("Maktabni tanlang")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).school,
                            "onUpdate:modelValue": ($event) => unref(user).school = $event,
                            disabled: unref(user).district === ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: school.id,
                                          value: school.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(school.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(unref(_sfc_main$2), {
                    type: "submit",
                    class: "w-full sm:w-auto",
                    disabled: unref(loading)
                  }, {
                    default: withCtx(() => [
                      unref(loading) ? (openBlock(), createBlock("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        width: "1.2em",
                        height: "1.2em",
                        class: "mr-2 h-4 w-4 animate-spin"
                      }, [
                        createVNode("path", {
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 12a9 9 0 1 1-6.219-8.56"
                        })
                      ])) : createCommentVNode("", true),
                      createTextVNode(" Saqlash ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-9wYHKmUF.mjs.map
