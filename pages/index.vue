<script setup>
import Counts from '~/components/pages/Counts.vue';
import CtaBanner from '~/components/pages/CtaBanner.vue';
import HeroBanner from '~/components/pages/HeroBanner.vue';
import TestTypes from '~/components/pages/TestTypes.vue';
import WhyUs from '~/components/pages/WhyUs.vue';
import Features from '~/components/pages/Features.vue';
import UsefulLinks from '~/components/pages/UsefulLinks.vue';
import img1 from '~/assets/images/5.jpg';
import img2 from '~/assets/images/6.jpg';
import img3 from '~/assets/images/7.jpg';
import img4 from '~/assets/images/8.jpg';
</script>

<template>
   <div>
      <HeroBanner />
      <TestTypes />
      <CtaBanner
         name="Online test"
         title="Sizning vaqtingizga qarab moslashadi."
         text="Online test bo'limida siz xohlagan yo'nalishni tanlang va Testni Boshlash tugmasi bilan jarayonni ishga tushuring."
         :img="img2"
      />
      <CtaBanner
         name="Blog test"
         title="Ummumiy shakllangan ko'nikmalar sinovdan o'tkaziladi."
         text="Bo'limda qaysi fan yuzasidan test ishlamoqchi bo'lganingizni tanlang, testlar miqdorini belgilang va o'z darajangizni tekshiring."
         :order="true"
         :img="img3"
      />
      <CtaBanner
         name="Maktab o'quvchilari uchun test"
         title="O'quvchilar uchun maxsus testlar."
         text="Bu bo'limda o'quvchilar olgan bilim va ko'nikmalarini amalda mustahkamlab olishadi. O'rganing va bazadan foydalanib mustahkamlang."
         :img="img4"
      />
      <CtaBanner
         name="Xalqaro tadqiqot testlari"
         title="Bu b'limda xalqaro darajada o'z o'rningizni egallang."
         text="Xalqaro tadqiqotlar bo'limi o'quvchi yoshlarni har 5 yilda PISA, PIRLSS, TIMSS testlaridan o'z bilimini tekshirish imkoniyatini beradi."
         :order="true"
         :img="img1"
      />
      <Features />
      <UsefulLinks />
      <Counts />

      <WhyUs />
   </div>
</template>
