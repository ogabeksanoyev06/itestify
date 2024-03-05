import api from '~/services/api';

export const authService = {
   login: (data) => api.post(`users/login/`, data),
   register: (data) => api.post('users/register/', data),
   refresh: (data) => api.post('users/token/refresh/', data),
   resetPassword: (data) => api.post(`users/reset-password/`, data)
};
