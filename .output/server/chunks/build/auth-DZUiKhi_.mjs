import { i as defineNuxtRouteMiddleware, u as useCookie, e as navigateTo } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("access_token");
  if (!token.value) {
    return navigateTo("/auth/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-DZUiKhi_.mjs.map
