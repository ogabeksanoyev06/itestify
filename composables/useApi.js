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
            try {
               const response = await api.post('users/token/refresh/', {
                  refresh: refreshToken.value
               });
               useCookie('access_token', response.access);
               return api.request(error.config);
            } catch (refreshError) {
               $toast.error('Token yangilash muvaffaqiyatsiz:', refreshError);
            }
         } else {
            const errorMessage = ErrorHandle(error.response.status);
            if (errorMessage) {
               $toast.error(errorMessage);
            }
         }
         return Promise.reject(error);
      }
   );
   return api;
};

function ErrorHandle(statusCode) {
   switch (statusCode) {
      case 400:
         return "So'rov noto'g'ri. Iltimos, ma'lumotlaringizni tekshiring va qayta urinib ko'ring.";
      case 401:
         return "Sizning identifikatsiyangiz tasdiqlanmadi. Iltimos, tizimga qayta kirish yoki ro'yxatdan o'tishga urinib ko'ring.";
      case 403:
         return "Sizga kerakli huquqlar yo'q. Iltimos, administratorga murojaat qiling.";
      case 404:
         return "So'ralgan resurs topilmadi. Iltimos, URL manzilini tekshiring.";
      case 500:
         return "Serverda ichki xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.";
   }
}
