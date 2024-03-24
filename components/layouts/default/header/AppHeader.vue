<script setup>
import { ref, onMounted, computed } from 'vue';
import { Button } from '@/components/ui/button';
import { useRoute } from 'vue-router';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const { isAuthenticated, logout } = useAuth();

const { user, userProfile, loading } = useUserProfile();

const menu = ref([
   {
      name: 'Testlar',
      route: '/choose-test'
   },
   {
      name: 'Xalqaro tadqiqotlar',
      route: '/international-studies'
   },
   {
      name: 'Kurslar',
      route: '/courses'
   }
   // {
   //    name: "Ta'lim yo'nalishlari",
   //    route: '/university_directions'
   // }
   // {
   //    name: "Yo'riqnoma",
   //    route: '/'
   // }
]);

const route = useRoute();

const colorMode = useColorMode();

const isDark = computed({
   get() {
      return colorMode.value === 'dark';
   },
   set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
   }
});

onMounted(async () => {
   if (isAuthenticated.value) {
      await userProfile();
   }
});
</script>

<template>
   <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex justify-between h-16 items-center">
         <div class="sm:mr-4 flex flex-1">
            <nuxt-link to="/" class="sm:mr-6 flex items-center space-x-1 text-base">
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
         </div>
         <div class="h-9 flex items-center justify-end gap-6">
            <nav class="hidden md:flex items-center gap-2 text-sm">
               <nuxt-link
                  :to="{ path: item.route }"
                  class="transition-all duration-300 rounded-full bg-transparent px-4 py-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-secondary"
                  :class="{ '!bg-primary/90 text-white hover:!bg-primary': item.route === route.path }"
                  v-for="(item, index) in menu"
                  :key="index"
               >
                  {{ item.name }}
               </nuxt-link>
            </nav>
            <div class="shrink-0 bg-border h-full w-[1px] hidden xl:flex"></div>
            <div class="group relative flex cursor-pointer items-center justify-center" @click="isDark = !isDark">
               <svg
                  viewBox="0 0 15 15"
                  width="1.2em"
                  height="1.2em"
                  class="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
               >
                  <path
                     fill="currentColor"
                     fill-rule="evenodd"
                     d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                     clip-rule="evenodd"
                  ></path>
               </svg>
               <svg
                  viewBox="0 0 15 15"
                  width="1.2em"
                  height="1.2em"
                  class="h-6 w-6 rotate-0 scale-100 text-foreground transition-all dark:-rotate-90 dark:scale-0"
               >
                  <path
                     fill="currentColor"
                     fill-rule="evenodd"
                     d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9"
                     clip-rule="evenodd"
                  ></path>
               </svg>
               <span class="sr-only">Toggle theme</span>
            </div>
            <DropdownMenu v-if="isAuthenticated">
               <DropdownMenuTrigger>
                  <div>
                     <div
                        class="relative cursor-pointer overflow-hidden shrink-0 before:border before:border-solid before:border-white-100 before:opacity-20 before:absolute before:inset-0 w-8 h-8 rounded-full before:rounded-full"
                     >
                        <div
                           class="flex items-center justify-center text-white h-full w-full text-sm font-medium object-cover"
                           style="background: linear-gradient(rgb(68, 137, 247) 0%, rgb(0, 78, 203) 100%)"
                        >
                           <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-4 w-4 animate-spin" v-if="loading">
                              <path
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M21 12a9 9 0 1 1-6.219-8.56"
                              ></path>
                           </svg>
                           <span v-else class="text-sm">
                              {{ (user.first_name ? user.first_name.slice(0, 1) : '') + (user.last_name ? user.last_name.slice(0, 1) : '') }}
                           </span>
                        </div>
                     </div>
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <div class="flex items-center gap-3 px-2 py-1.5 text-sm font-semibold">
                     <div class="flex flex-col space-y-1 whitespace-nowrap">
                        <p class="text-sm font-semibold leading-none">
                           {{ user?.first_name + ' ' + user?.last_name }}
                        </p>
                        <p class="text-xs leading-none text-muted-foreground">{{ phoneFormat('998' + user.phone) }}</p>
                     </div>
                  </div>
                  <div role="separator" class="-mx-1 my-1 h-px bg-gray-100"></div>
                  <nuxt-link :to="{ path: '/profile' }">
                     <DropdownMenuItem class="cursor-pointer">
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
                           <circle cx="12" cy="12" r="10"></circle>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                        </svg>
                        Mening profilim
                     </DropdownMenuItem>
                  </nuxt-link>
                  <nuxt-link :to="{ path: '/profile/top-up-balance' }">
                     <DropdownMenuItem class="cursor-pointer">
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
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                           <path d="M12 18V6"></path>
                        </svg>
                        Hisobni to'ldirish
                     </DropdownMenuItem>
                  </nuxt-link>
                  <nuxt-link :to="{ path: '/profile/tests-results' }">
                     <DropdownMenuItem class="cursor-pointer">
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
                           <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                        Mening natijalarim
                     </DropdownMenuItem>
                  </nuxt-link>
                  <nuxt-link :to="{ path: '/profile/payment-history' }">
                     <DropdownMenuItem class="cursor-pointer">
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
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                           <path d="M12 18V6"></path>
                        </svg>
                        To'lovlar tarixi
                     </DropdownMenuItem>
                  </nuxt-link>
                  <DropdownMenuItem class="cursor-pointer group hover:!bg-red-50" @click="logout">
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
                        class="w-4 h-4 mr-2 text-red-500 group-hover:text-red-700"
                     >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" x2="9" y1="12" y2="12"></line>
                     </svg>
                     Hisobdan Chiqish
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
            <nuxt-link to="/auth/login" v-else>
               <Button>Tizimga kirish</Button>
            </nuxt-link>
            <Sheet>
               <SheetTrigger>
                  <svg
                     stroke="currentColor"
                     fill="currentColor"
                     stroke-width="0"
                     viewBox="0 0 24 24"
                     class="flex md:hidden border-none h-6 w-6"
                     height="1em"
                     width="1em"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
               </SheetTrigger>
               <SheetContent :side="'left'">
                  <SheetHeader>
                     <SheetTitle>
                        <nuxt-link to="/" class="mr-6 flex items-center space-x-1 text-base">
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
                     </SheetTitle>
                  </SheetHeader>
                  <nav class="flex flex-col space-y-4 text-sm mt-8">
                     <nuxt-link
                        :to="{ path: item.route }"
                        class="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
                        v-for="(item, index) in menu"
                        :key="index"
                     >
                        {{ item.name }}
                     </nuxt-link>
                  </nav>
               </SheetContent>
            </Sheet>
         </div>
      </div>
   </header>
</template>
