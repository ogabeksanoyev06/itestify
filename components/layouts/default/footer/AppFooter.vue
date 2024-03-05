<template>
   <div class="footer py-9 bg-[#eeeef5]">
      <div class="container">
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div class="flex flex-col justify-between">
               <nuxt-link to="/" class="mr-6 flex items-center space-x-1">
                  <svg class="h-6 w-6 rotate-[315deg]" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_102_1338)">
                        <path d="M208 128L128 208" stroke="#41B883" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M192 40L40 192" stroke="#41B883" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                     </g>
                     <defs>
                        <clipPath id="clip0_102_1338">
                           <rect width="256" height="256" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
                  <span class="font-bold"> iTestify </span>
               </nuxt-link>
               <ul class="text-gray-500">
                  <li class="flex items-center gap-1 py-1">
                     <span class="font-bold">Telefon:</span>
                     <span> +998 97 748 95 55</span>
                  </li>
                  <li class="flex items-center gap-1 py-1">
                     <span class="font-bold">Telegram:</span>
                     <span> @ogabek</span>
                  </li>
               </ul>
            </div>
            <div>
               <h4 class="text-base text-primary font-bold mb-3">Foydali sahifalar</h4>
               <ul>
                  <li class="flex items-center pb-2">
                     <nuxtLink to="/" class="text-gray-600 font-medium"> Bosh sahifa</nuxtLink>
                  </li>
                  <li class="flex items-center py-2">
                     <nuxtLink to="/choose-test" class="text-gray-600 font-medium"> Testlar </nuxtLink>
                  </li>
                  <li class="flex items-center py-2">
                     <nuxtLink to="/international-studies" class="text-gray-600 font-medium">Xalqaro tadqiqotlar</nuxtLink>
                  </li>
                  <li class="flex items-center py-2">
                     <nuxtLink to="/" class="text-gray-600 font-medium">Yo'riqnoma</nuxtLink>
                  </li>
               </ul>
            </div>
            <div>
               <h4 class="text-base text-primary font-bold mb-3">Bizning ijtimoiy tarmoqlar</h4>
               <ul class="flex flex-wrap gap-6 bg-primary rounded-lg p-3">
                  <li class="flex items-center cursor-pointer">
                     <img src="/assets/svg/telegram.svg" alt="" />
                  </li>
                  <li class="flex items-center cursor-pointer">
                     <img src="/assets/svg/instagram.svg" alt="" />
                  </li>
                  <li class="flex items-center cursor-pointer">
                     <img src="/assets/svg/facebook.svg" alt="" />
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>
