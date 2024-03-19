import axios from 'axios';

export const useApi = () => {
   const config = useRuntimeConfig();
   const accessToken = useCookie('access_token');
   const refreshToken = useCookie('refresh_token');
   const { $toast } = useNuxtApp();

   const api = axios.create({
      baseURL: config.public.apiBaseUrl,
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
   });

   // Request interceptor
   api.interceptors.request.use(
      (config) => {
         const token = accessToken.value;
         if (token) {
            config.headers.Authorization = `Bearer ${token}`;
         }
         return config;
      },
      (error) => {
         return Promise.reject(error);
      }
   );

   api.interceptors.response.use(
      (response) => response.data ?? { noData: 'empty data' },
      async (error) => {
         if (error.response && error.response.status === 403) {
            const refreshToken = useCookie('refresh_token').value;
            try {
               const response = await api.post('users/token/refresh/', {
                  refresh: refreshToken
               });
               const accessTokenCookie = useCookie('access_token');
               accessTokenCookie.value = response.access;
               error.config.headers.Authorization = `Bearer ${response.access}`;
               return api.request(error.config);
            } catch (refreshError) {
               $toast.error('Token yangilash muvaffaqiyatsiz:', refreshError.message);
            }
         }
         return Promise.reject(error);
      }
   );
   return api;
};
