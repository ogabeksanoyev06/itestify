<script setup>
import { paymentService } from '~/services/paymentService';
definePageMeta({
   layout: 'cabinet'
});

const data = ref([]);

const loading = ref(false);

async function getPaymentsHistory() {
   loading.value = true;
   try {
      const response = await paymentService.paymentsHistory();
      data.value = response;
   } catch (error) {
      console.log(error);
   } finally {
      loading.value = false;
   }
}

onMounted(() => {
   getPaymentsHistory();
});
</script>

<template>
   <div class="payment-history">
      <h4 class="text-base sm:text-xl font-semibold mb-4">To'lovlar tarixi</h4>
      <div class="relative overflow-x-auto">
         <table class="w-full text-sm text-left rtl:text-right">
            <thead>
               <tr class="bg-primary text-white">
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">To'lov turi</th>
                  <th scope="col" class="px-6 py-4">To'lov miqdori</th>
                  <th scope="col" class="px-6 py-4">Sana</th>
                  <th scope="col" class="px-6 py-4">Statusi</th>
               </tr>
            </thead>
            <tbody>
               <tr
                  class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
                  v-for="(item, index) in data"
                  :key="item.id"
               >
                  <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>
                  <td class="px-6 py-4 font-medium">{{ item.payment_system }}</td>
                  <td class="px-6 py-4 font-medium">{{ item.amount }} so'm</td>
                  <td class="px-6 py-4 font-medium">{{ item.date }}</td>
                  <td class="px-6 py-4 font-medium">
                     <span class="text-secondary" v-if="item.completed">To'langan</span>
                     <span class="text-danger" v-else>To'lanmagan</span>
                  </td>
               </tr>

               <tr v-if="data.length === 0">
                  <td colspan="5" class="px-6 py-4 font-medium bg-gray-300 text-center">Ma'lumot topilmadi</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<style lang="scss" scoped></style>
