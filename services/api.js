import { access_token } from '~/services/tokenService.js';
import { refresh_token } from '~/services/tokenService.js';
import { authService } from '~/services/authService.js';

// const { $toast } = useNuxtApp();

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

import axios from 'axios';

const api = axios.create({
   baseURL: 'https://api.exam-test.uz/api/',
   headers: { 'Content-Type': 'application/json' },
   timeout: 10000
});

api.interceptors.request.use(
   (config) => {
      const token = access_token;
      if (token.value !== null) {
         config.headers.Authorization = `Bearer ${token.value}`;
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
            const response = await authService.refresh({
               refresh: refresh_token.value
            });
            access_token.value = response.access;
            return api.request(error.config);
         } catch (refreshError) {
            console.log('Token yangilash muvaffaqiyatsiz:', refreshError);
         }
      } else {
         const errorMessage = ErrorHandle(error.response.status);
         if (errorMessage) {
            // $toast.error(errorMessage);
         }
      }
      return Promise.reject(error);
   }
);

export default api;
