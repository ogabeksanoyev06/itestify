<script setup></script>
<template>
   <div class="mt-6 py-8">
      <div class="container">
         <div class="space-y-2 max-w-[900px] text-center mx-auto">
            <h1
               class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-green-500 to-sky-500/50 bg-clip-text"
            >
               Siz uchun yaratilgan qulayliklar
            </h1>
            <p class="text-base text-muted-foreground">
               Platformamiz yuqori texnologiyalar zamonida taqdim qilinayotgan imkoniyatlardan unumli foydalanishga va vaqtingizni tejashga,
               o'zingizga qulay vaqtda malaka oshirishingizga yordam beradi.
            </p>
         </div>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="(item, i) in 4" :key="item" data-aos="fade-up" :data-aos-duration="(i + 1) * 100">
               <div class="flex flex-col rounded-lg border border-border bg-card text-card-foreground shadow-sm gap-y-2 p-6">
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        class="mb-3 h-6 w-6"
                     >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <path d="M2 10h20"></path>
                     </svg>
                  </span>
                  <h3 class="text-2xl font-semibold leading-none tracking-tight">Qulay interfeys</h3>
                  <p class="text-sm text-muted-foreground">
                     Oson, tushunarli va qulay interfeys orqali platforma imkoniyatlaridan to'liq foydalanishingiz mumkin
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
