<script setup></script>
<template>
   <div class="mt-6 py-8">
      <div class="flex items-stretch relative">
         <div class="container shrink-0 relative z-0">
            <div class="space-y-2 max-w-[900px] text-center mx-auto">
               <h1
                  class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-green-500 to-sky-500/50 bg-clip-text"
               >
                  Foydali havolalar
               </h1>
            </div>
            <div class="overflow-hidden px-[150px] -mx-[150px] relative z-0">
               <Swiper
                  class="h-full mt-8 w-full !overflow-visible"
                  :modules="[SwiperAutoplay]"
                  :slides-per-view="1.1"
                  :spaceBetween="10"
                  :centeredSlides="true"
                  :loop="true"
                  :autoplay="{
                     delay: 2000,
                     disableOnInteraction: false
                  }"
                  :breakpoints="{
                     '768': {
                        slidesPerView: 2.2,
                        spaceBetween: 20
                     },
                     '1024': {
                        slidesPerView: 3.2,
                        spaceBetween: 20
                     }
                  }"
               >
                  <SwiperSlide v-for="item in 10" :key="item">
                     <a
                        href="#"
                        class="flex flex-col items-center text-center gap-2 rounded border border-border backdrop-blur-md p-4 bg-card"
                     >
                        <div class="h-[64px] w-[64px] flex-shrink-0 mr-4">
                           <img
                              src="https://innovation.gov.uz/media/interactive_services/gerb_RTTbHAg.png"
                              class="w-full h-full object-contain"
                           />
                        </div>
                        <p class="text-sm text-foreground">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est officiis, unde iusto nihil
                        </p>
                     </a>
                  </SwiperSlide>
               </Swiper>
               <div
                  class="swiper-overlay dark:swiper-overlay-dark absolute right-0 top-8 bottom-0 w-[180px] sm:w-[228px] z-[1] pointer-events-none"
               ></div>
               <div
                  class="swiper-overlay dark:swiper-overlay-dark rotate-180 absolute left-0 top-8 bottom-0 w-[180px] sm:w-[228px] z-[1] pointer-events-none"
               ></div>
            </div>
         </div>
      </div>
   </div>
</template>

<style>
.swiper-overlay {
   background: linear-gradient(90deg, #f5f6f700, #f5f6f7 97.58%);
}
.swiper-overlay-dark {
   background: linear-gradient(90deg, #f5f6f700, #000 97.58%);
}
</style>
