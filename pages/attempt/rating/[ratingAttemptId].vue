<template>
  <div class="py-8">
    <div class="container">
      <div
        class="border rounded-full text-center mx-auto mb-6 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]"
        style="max-width: 250px; font-size: xx-large; font-size: xx-large"
      >
        <span>60,2 </span>
        <span style="font-size: large">/189</span>
      </div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right">
          <thead class="">
            <tr class="bg-primary-900 text-white">
              <th scope="col" class="px-6 py-4">Majburiy fanlar</th>
              <th scope="col" class="px-6 py-4">To'g'ri javoblar</th>
              <th scope="col" class="px-6 py-4">Ball</th>
              <th scope="col" class="px-6 py-4">To'plangan ball</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td class="px-6 py-4">Ona tili (majburiy)</td>
              <td class="px-6 py-4">
                <span class="text-base font-semibold text-secondary">6</span> -
                10
              </td>
              <td class="px-6 py-4">1.1</td>
              <td class="px-6 py-4 text-secondary">1.1</td>
            </tr>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td colspan="2" class="px-6 py-4 text-center font-semibold">
                Umumiy ball:
              </td>
              <td
                colspan="2"
                class="px-6 py-4 text-center font-bold text-secondary"
              >
                50
              </td>
            </tr>
            <tr class="bg-primary-900 text-white">
              <th scope="col" class="px-6 py-4">Asosiy fanlar</th>
              <th scope="col" class="px-6 py-4">To'g'ri javoblar</th>
              <th scope="col" class="px-6 py-4">Ball</th>
              <th scope="col" class="px-6 py-4">To'plangan ball</th>
            </tr>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td class="px-6 py-4">Ona tili (majburiy)</td>
              <td class="px-6 py-4">
                <span class="text-base text-secondary font-semibold">6</span> -
                10
              </td>
              <td class="px-6 py-4">3.1</td>
              <td class="px-6 py-4 text-secondary">18.6</td>
            </tr>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td colspan="2" class="px-6 py-4 text-center font-semibold">
                Umumiy ball:
              </td>
              <td
                colspan="2"
                class="px-6 py-4 text-center text-green-600 font-bold"
              >
                50
              </td>
            </tr>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td colspan="2" class="px-6 py-4 text-center font-bold">
                5ta fandan to'plangan ball:
              </td>
              <td
                colspan="2"
                class="px-6 py-4 text-center text-secondary font-bold text-xl"
              >
                100
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-wrap justify-center gap-2 mt-8">
        <AppButton color="secondary" @click="goToLink" class="rounded-none">
          Xatolikni tekshirish
        </AppButton>
        <AppButton color="primary" class="rounded-none" @click="goToCompare">
          Solishtirish
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppButton from '@/components/shared-components/AppButton.vue';

const router = useRouter();

const goToLink = () => {
  router.push({ path: `/attempt/answer/0` });
};

const goToCompare = () => {
  router.push({ path: `/attempt/compare/0` });
};
</script>

<style lang="scss" scoped></style>
