<script setup>
definePageMeta({
   layout: 'cabinet'
});

const { payments_history, getPaymentsHistory, loading } = usePayment();

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
               <tr class="border-b text-center">
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">To'lov turi</th>
                  <th scope="col" class="px-6 py-4">To'lov miqdori</th>
                  <th scope="col" class="px-6 py-4">Sana</th>
                  <th scope="col" class="px-6 py-4">Statusi</th>
               </tr>
            </thead>
            <tbody>
               <tr
                  class="bg-white border-b hover:bg-gray-100 transition-all duration-300 text-center"
                  v-for="(item, index) in payments_history.results"
                  :key="index"
               >
                  <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>
                  <td class="px-6 py-4 font-medium">{{ item.payment_system }}</td>
                  <td class="px-6 py-4 font-medium">{{ currencyFormat(item.amount) }} so'm</td>
                  <td class="px-6 py-4 font-medium">{{ item.date }}</td>
                  <td class="px-6 py-4 font-medium">
                     <span class="text-primary" v-if="item.completed">To'langan</span>
                     <span class="text-red-600" v-else>To'lanmagan</span>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<style lang="scss" scoped></style>
