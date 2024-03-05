import api from '~/services/api';

export const paymentService = {
   paymentsHistory: (data) => api.get(`users/payments/history/`, data),
   paymentsMerchant: (data) => api.get('payments/merchant/', data),
   fillUserBalance: (paymentAmount) =>
      api.post('payments/payme/FillUserBalance/', {
         amount: paymentAmount * 100
      })
};
