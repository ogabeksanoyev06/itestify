import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$8, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$5, d as _sfc_main$4, e as _sfc_main$2, f as _sfc_main$3 } from './SelectScrollDownButton-DyBSBm8i.mjs';
import { _ as _sfc_main$1 } from './Button-DsDFiGaw.mjs';
import 'radix-vue';
import '@radix-icons/vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="grid grid-cols-12 gap-6"><div class="col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Viloyatni tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Viloyatni tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tanlang`);
                            } else {
                              return [
                                createTextVNode("Tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apple `);
                            } else {
                              return [
                                createTextVNode(" Apple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Banana `);
                            } else {
                              return [
                                createTextVNode(" Banana ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Blueberry `);
                            } else {
                              return [
                                createTextVNode(" Blueberry ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Grapes `);
                            } else {
                              return [
                                createTextVNode(" Grapes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Pineapple `);
                            } else {
                              return [
                                createTextVNode(" Pineapple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Tanlang")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "apple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Apple ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "banana" }, {
                            default: withCtx(() => [
                              createTextVNode(" Banana ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blueberry ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                            default: withCtx(() => [
                              createTextVNode(" Grapes ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Pineapple ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Tanlang")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Apple ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx(() => [
                            createTextVNode(" Banana ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blueberry ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx(() => [
                            createTextVNode(" Grapes ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Pineapple ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), { placeholder: "Viloyatni tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Tanlang")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "apple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apple ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "banana" }, {
                        default: withCtx(() => [
                          createTextVNode(" Banana ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                        default: withCtx(() => [
                          createTextVNode(" Blueberry ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                        default: withCtx(() => [
                          createTextVNode(" Grapes ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Pineapple ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Universitetni tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Universitetni tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Fruits`);
                            } else {
                              return [
                                createTextVNode("Fruits")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apple `);
                            } else {
                              return [
                                createTextVNode(" Apple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Banana `);
                            } else {
                              return [
                                createTextVNode(" Banana ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Blueberry `);
                            } else {
                              return [
                                createTextVNode(" Blueberry ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Grapes `);
                            } else {
                              return [
                                createTextVNode(" Grapes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Pineapple `);
                            } else {
                              return [
                                createTextVNode(" Pineapple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Fruits")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "apple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Apple ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "banana" }, {
                            default: withCtx(() => [
                              createTextVNode(" Banana ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blueberry ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                            default: withCtx(() => [
                              createTextVNode(" Grapes ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Pineapple ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Fruits")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Apple ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx(() => [
                            createTextVNode(" Banana ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blueberry ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx(() => [
                            createTextVNode(" Grapes ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Pineapple ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), { placeholder: "Universitetni tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Fruits")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "apple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apple ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "banana" }, {
                        default: withCtx(() => [
                          createTextVNode(" Banana ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                        default: withCtx(() => [
                          createTextVNode(" Blueberry ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                        default: withCtx(() => [
                          createTextVNode(" Grapes ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Pineapple ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Test tilini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Test tilini tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Fruits`);
                            } else {
                              return [
                                createTextVNode("Fruits")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apple `);
                            } else {
                              return [
                                createTextVNode(" Apple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Banana `);
                            } else {
                              return [
                                createTextVNode(" Banana ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Blueberry `);
                            } else {
                              return [
                                createTextVNode(" Blueberry ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Grapes `);
                            } else {
                              return [
                                createTextVNode(" Grapes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Pineapple `);
                            } else {
                              return [
                                createTextVNode(" Pineapple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Fruits")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "apple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Apple ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "banana" }, {
                            default: withCtx(() => [
                              createTextVNode(" Banana ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blueberry ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                            default: withCtx(() => [
                              createTextVNode(" Grapes ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Pineapple ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Fruits")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Apple ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx(() => [
                            createTextVNode(" Banana ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blueberry ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx(() => [
                            createTextVNode(" Grapes ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Pineapple ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), { placeholder: "Test tilini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Fruits")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "apple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apple ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "banana" }, {
                        default: withCtx(() => [
                          createTextVNode(" Banana ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                        default: withCtx(() => [
                          createTextVNode(" Blueberry ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                        default: withCtx(() => [
                          createTextVNode(" Grapes ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Pineapple ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Ta'lim shaklini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Ta'lim shaklini tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Fruits`);
                            } else {
                              return [
                                createTextVNode("Fruits")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apple `);
                            } else {
                              return [
                                createTextVNode(" Apple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Banana `);
                            } else {
                              return [
                                createTextVNode(" Banana ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Blueberry `);
                            } else {
                              return [
                                createTextVNode(" Blueberry ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Grapes `);
                            } else {
                              return [
                                createTextVNode(" Grapes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Pineapple `);
                            } else {
                              return [
                                createTextVNode(" Pineapple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Fruits")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "apple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Apple ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "banana" }, {
                            default: withCtx(() => [
                              createTextVNode(" Banana ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blueberry ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                            default: withCtx(() => [
                              createTextVNode(" Grapes ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Pineapple ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Fruits")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Apple ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx(() => [
                            createTextVNode(" Banana ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blueberry ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx(() => [
                            createTextVNode(" Grapes ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Pineapple ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), { placeholder: "Ta'lim shaklini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Fruits")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "apple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apple ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "banana" }, {
                        default: withCtx(() => [
                          createTextVNode(" Banana ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                        default: withCtx(() => [
                          createTextVNode(" Blueberry ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                        default: withCtx(() => [
                          createTextVNode(" Grapes ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Pineapple ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-9">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Ta'lim yo'nalishini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Ta'lim yo'nalishini tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Fruits`);
                            } else {
                              return [
                                createTextVNode("Fruits")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apple `);
                            } else {
                              return [
                                createTextVNode(" Apple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Banana `);
                            } else {
                              return [
                                createTextVNode(" Banana ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Blueberry `);
                            } else {
                              return [
                                createTextVNode(" Blueberry ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Grapes `);
                            } else {
                              return [
                                createTextVNode(" Grapes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Pineapple `);
                            } else {
                              return [
                                createTextVNode(" Pineapple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Fruits")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "apple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Apple ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "banana" }, {
                            default: withCtx(() => [
                              createTextVNode(" Banana ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blueberry ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                            default: withCtx(() => [
                              createTextVNode(" Grapes ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Pineapple ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Fruits")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Apple ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx(() => [
                            createTextVNode(" Banana ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blueberry ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx(() => [
                            createTextVNode(" Grapes ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Pineapple ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), { placeholder: "Ta'lim yo'nalishini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Fruits")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "apple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apple ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "banana" }, {
                        default: withCtx(() => [
                          createTextVNode(" Banana ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                        default: withCtx(() => [
                          createTextVNode(" Blueberry ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                        default: withCtx(() => [
                          createTextVNode(" Grapes ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Pineapple ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { placeholder: "Chet tilini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { placeholder: "Chet tilini tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Fruits`);
                            } else {
                              return [
                                createTextVNode("Fruits")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apple `);
                            } else {
                              return [
                                createTextVNode(" Apple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Banana `);
                            } else {
                              return [
                                createTextVNode(" Banana ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Blueberry `);
                            } else {
                              return [
                                createTextVNode(" Blueberry ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Grapes `);
                            } else {
                              return [
                                createTextVNode(" Grapes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Pineapple `);
                            } else {
                              return [
                                createTextVNode(" Pineapple ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Fruits")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "apple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Apple ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "banana" }, {
                            default: withCtx(() => [
                              createTextVNode(" Banana ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blueberry ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                            default: withCtx(() => [
                              createTextVNode(" Grapes ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                            default: withCtx(() => [
                              createTextVNode(" Pineapple ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Fruits")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "apple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Apple ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "banana" }, {
                          default: withCtx(() => [
                            createTextVNode(" Banana ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blueberry ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                          default: withCtx(() => [
                            createTextVNode(" Grapes ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                          default: withCtx(() => [
                            createTextVNode(" Pineapple ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), { placeholder: "Chet tilini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Fruits")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "apple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apple ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "banana" }, {
                        default: withCtx(() => [
                          createTextVNode(" Banana ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "blueberry" }, {
                        default: withCtx(() => [
                          createTextVNode(" Blueberry ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "grapes" }, {
                        default: withCtx(() => [
                          createTextVNode(" Grapes ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { value: "pineapple" }, {
                        default: withCtx(() => [
                          createTextVNode(" Pineapple ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-6"><div class="relative overflow-x-auto my-6"><table class="w-full text-sm text-left rtl:text-right"><tbody><tr class="bg-primary text-white"><th scope="col" class="px-6 py-4">#</th><th scope="col" class="px-6 py-4">Majburiy fanlar</th><th scope="col" class="px-6 py-4">Testlar soni</th><th scope="col" class="px-6 py-4">Ball</th></tr><!--[-->`);
      ssrRenderList(3, (item, i) => {
        _push(`<tr class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"><td class="px-6 py-4">${ssrInterpolate(i + 1)}</td><td class="px-6 py-4">Ona tili (majburiy)</td><td class="px-6 py-4">10</td><td class="px-6 py-4">1.1</td></tr>`);
      });
      _push(`<!--]--><tr class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"><th colspan="2" class="px-6 py-4 text-center">Umumiy ball</th><th colspan="2" class="px-6 py-4 text-center">156</th></tr><tr class="bg-primary text-white"><th scope="col" class="px-6 py-4">#</th><th scope="col" class="px-6 py-4">Asosiy fanlar</th><th scope="col" class="px-6 py-4">Testlar soni</th><th scope="col" class="px-6 py-4">Ball</th></tr><!--[-->`);
      ssrRenderList(2, (item, i) => {
        _push(`<tr class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"><td class="px-6 py-4">${ssrInterpolate(i + 1)}</td><td class="px-6 py-4">Matematika</td><td class="px-6 py-4">10</td><td class="px-6 py-4">3.1</td></tr>`);
      });
      _push(`<!--]--><tr class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"><th colspan="2" class="px-6 py-4 text-center">Umumiy ball</th><th colspan="2" class="px-6 py-4 text-center">156</th></tr><tr class="text-white" style="${ssrRenderStyle({ "background": "linear-gradient(rgb(68, 137, 247) 0%, rgb(0, 78, 203) 100%)" })}"><th colspan="2" class="px-6 py-4 text-center">5ta fan bo&#39;yicha umumiy ball</th><th colspan="2" class="px-6 py-4 text-center">156</th></tr></tbody></table></div></div><div class="flex justify-center mt-6">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Testni boshlash`);
          } else {
            return [
              createTextVNode("Testni boshlash")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/online-test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DvRsptyu.mjs.map
