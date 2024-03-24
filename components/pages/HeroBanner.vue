<script setup>
import { Button } from '@/components/ui/button';

const { isAuthenticated } = useAuth();
</script>

<template>
   <div class="container">
      <div class="min-h-[calc(100vh-64px)] flex items-center py-4 relative">
         <div class="grid grid-cols-1 gap-12 xl:grid-cols-2 items-center">
            <div class="flex flex-col space-y-6">
               <div class="flex justify-center xl:justify-start">
                  <Button size="sm" variant="outline">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-4 h-4 mr-2"
                     >
                        <path
                           d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                        ></path>
                        <path d="M5 3v4"></path>
                        <path d="M19 17v4"></path>
                        <path d="M3 5h4"></path>
                        <path d="M17 19h4"></path>
                     </svg>
                     Xush kelibsiz, bo'lajak bilimdon
                  </Button>
               </div>
               <h1 class="text-4xl font-bold text-center sm:text-5xl md:text-6xl lg:text-6xl xl:text-left relative">
                  <span style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance">
                     iTestify orqali bilimingizni
                     <span class="relative text-transparent bg-gradient-to-r from-green-500 to-sky-500/90 bg-clip-text">tez va oson</span>
                     oshiring.
                  </span>
                  <img
                     class="absolute kite-blue top-[0px] right-20 z-0"
                     src="https://cdn.commeta.uz/static/review/static/front/svg/spring/kite-blue-mobile.svg"
                     alt=""
                  />
               </h1>
               <p class="leading-normal text-center text-muted-foreground sm:text-base sm:leading-6 xl:text-left">
                  Bu platforma sizga test topshirish, sinovlarni o'tkazish va natijalarni o'rganish imkoniyatini beradi. Bu yerga kirishingiz bilan,
                  sizning bilimingizni sinash va rivojlantirishga yordam beradigan qulay va samarali vositaga ega bo'lasiz.
               </p>
               <div class="flex justify-center space-x-2 md:space-x-4 xl:justify-start">
                  <nuxt-link to="/choose-test"><Button variant="outline">Test yechish</Button></nuxt-link>

                  <nuxt-link to="/auth/register" v-if="!isAuthenticated"><Button>Ro'yxatdan o'tish</Button></nuxt-link>
               </div>
            </div>
            <div class="grid grid-cols-5 grid-rows-5 gap-3">
               <div class="col-span-2 row-span-5 overflow-hidden rounded">
                  <img class="object-cover w-full h-full transition-all ease-linear hover:scale-110" src="/assets/images/3.jpg" />
               </div>
               <div class="col-span-3 col-start-3 row-span-3 row-start-3 overflow-hidden rounded">
                  <img class="object-cover w-full h-full transition-all ease-linear hover:scale-110" src="/assets/images/1.jpg" />
               </div>
               <div class="col-span-2 col-start-3 row-span-2 row-start-1 overflow-hidden rounded">
                  <img class="object-cover w-full h-full transition-all ease-linear hover:scale-110" src="/assets/images/4.jpg" />
               </div>
               <div class="col-start-5 row-span-2 row-start-1 overflow-hidden rounded">
                  <img class="object-cover w-full h-full transition-all ease-linear hover:scale-110" src="/assets/images/1.jpg" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.hero-particles {
   background:
      linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0) 100%),
      url('https://loading.io/assets/img/c/bg/ball-wed.svg') center center/cover,
      #fefef2;
}

.kite-blue {
   animation: fly-blue 4s ease-in-out infinite;
}

.kite-yellow {
   animation: fly-yellow 4s ease-in-out infinite;
}

@keyframes fly-blue {
   50% {
      transform: translateY(0) translate(0);
   }

   0%,
   100% {
      transform: translateY(10px) translate(-3%);
   }
}

@keyframes fly-yellow {
   0%,
   100% {
      transform: translateY(-16px) translate(0);
   }

   50% {
      transform: translateY(0) translate(3%);
   }
}
</style>
