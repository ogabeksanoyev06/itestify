<template>
   <div class="top-up-balance">
      <h4 class="text-base sm:text-xl font-semibold mb-4">To'lov turini tanlang</h4>

      <div
         class="inline-flex flex-wrap items-center gap-5 max-w-[250px] cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow hover:border-white"
         :class="{ '!border-primary': selectedPaymentType === 1 }"
         @click="paymentSelect(1)"
      >
         <img src="/assets/svg/payme.svg" alt="" />
         <p class="text-base font-bold">PayMe</p>
      </div>

      <div class="flex flex-col gap-5 max-w-[450px] border rounded-lg p-5 mt-5">
         <p class="text-sm text-gray-500">
            Hisobni to'ldirish uchun kerakli miqdorni kiriting va to'lovni amalga oshirish tugmasini bosing. Minimal
            to'lov - 1000 so'm
         </p>
         <Input v-model="paymentAmount" placeholder="10 000" @keypress="isNumber($event)" />
         <Button :disabled="paymentAmount <= 9999 || paymentAmount === null" @click="createPayment">
            Hisobni to'ldirish
         </Button>
      </div>
   </div>
</template>

<script setup>
import { paymentService } from '~/services/paymentService';

definePageMeta({
   layout: 'cabinet'
});

const { $toast } = useNuxtApp();

const selectedPaymentType = ref(1);

const paymentAmount = ref(null);

const paymentSelect = (paymentType) => {
   selectedPaymentType.value = paymentType;
};
const isNumber = (evt) => {
   evt = evt ? evt : window.event;
   let charCode = evt.which ? evt.which : evt.keyCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      evt.preventDefault();
   } else {
      return true;
   }
};

async function createPayment() {
   try {
      const response = await paymentService.fillUserBalance(paymentAmount.value);
      window.open(response.result.link);
   } catch (error) {
      console.error('Error', error);
   }
}
</script>

<style lang="scss" scoped></style>
