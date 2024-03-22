import { u as useApi } from './useApi-BcaOE1C1.mjs';
import { ref } from 'vue';

const usePayment = () => {
  const api = useApi();
  const payments_history = ref([]);
  const loading = ref(false);
  const getPaymentsHistory = async (data) => {
    loading.value = true;
    try {
      const response = await api.get("users/payments/history/", data);
      payments_history.value = response;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };
  const createPayment = async (paymentAmount) => {
    try {
      const response = await api.post("payments/payme/FillUserBalance/", {
        amount: paymentAmount * 100
      });
      (void 0).open(response.result.link);
    } catch (error) {
      console.log(error);
    }
  };
  return { getPaymentsHistory, createPayment, payments_history };
};

export { usePayment as u };
//# sourceMappingURL=usePayment-D0ZV7DzB.mjs.map
