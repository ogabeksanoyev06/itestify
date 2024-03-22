import { u as useCookie, a as useRuntimeConfig } from './server.mjs';
import axios from 'axios';

const useApi = () => {
  const config = useRuntimeConfig();
  const accessToken = useCookie("access_token");
  useCookie("refresh_token");
  const api = axios.create({
    baseURL: config.public.apiBaseUrl,
    headers: { "Content-Type": "application/json" },
    timeout: 1e4
  });
  api.interceptors.request.use(
    (config2) => {
      const token = accessToken.value;
      if (token) {
        config2.headers.Authorization = `Bearer ${token}`;
      }
      return config2;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    (response) => {
      var _a;
      return (_a = response.data) != null ? _a : { noData: "empty data" };
    },
    async (error) => {
      if (error.response && error.response.status === 403) {
        const refreshToken = useCookie("refresh_token").value;
        try {
          const response = await api.post("users/token/refresh/", {
            refresh: refreshToken
          });
          const accessTokenCookie = useCookie("access_token");
          accessTokenCookie.value = response.access;
          error.config.headers.Authorization = `Bearer ${response.access}`;
          return api.request(error.config);
        } catch (refreshError) {
        }
      }
      return Promise.reject(error);
    }
  );
  return api;
};

export { useApi as u };
//# sourceMappingURL=useApi-BcaOE1C1.mjs.map
