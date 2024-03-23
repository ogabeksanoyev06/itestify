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
            <nav class="hidden md:flex items-center gap-2 text-sm">
               <nuxt-link
                  :to="{ path: item.route }"
                  class="transition-all duration-300 rounded-full bg-transparent px-4 py-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-secondary"
                  :class="{ 'bg-primary/90 text-white hover:!bg-primary/90': item.route === route.path }"
                  v-for="(item, index) in menu"
                  :key="index"
               >
                  {{ item.name }}
               </nuxt-link>
            </nav>
         </div>
         <div class="flex items-center justify-end space-x-3 sm:space-x-2">
            <DropdownMenu>
               <DropdownMenuTrigger as-child>
                  <Button variant="outline" class="border-none" size="icon">
                     <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 block transition-transform duration-700 dark:-rotate-90 dark:scale-0 dark:hidden"
                     >
                        <path
                           d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                           fill="currentColor"
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                     <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 hidden transition-transform duration-700 dark:rotate-90 dark:block dark:scale-100"
                     >
                        <path
                           d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                           fill="currentColor"
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuItem class="cursor-pointer" @click="isDark = 'light'">
                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[1rem] w-[1rem] mr-2">
                        <path
                           d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                           fill="currentColor"
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                     Yorqin
                  </DropdownMenuItem>
                  <DropdownMenuItem class="cursor-pointer" @click="isDark = 'dark'">
                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[1rem] w-[1rem] mr-2">
                        <path
                           d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                           fill="currentColor"
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                     Qorong'i
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu v-if="isAuthenticated">
               <DropdownMenuTrigger>
                  <div>
                     <div
                        class="relative cursor-pointer overflow-hidden shrink-0 before:border before:border-solid before:border-white-100 before:opacity-20 before:absolute before:inset-0 w-9 h-9 rounded-full before:rounded-full"
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
                           <span v-else>
                              {{ (user.first_name ? user.first_name.slice(0, 1) : '') + (user.last_name ? user.last_name.slice(0, 1) : '') }}
                           </span>
                        </div>
                     </div>
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <div class="flex items-center gap-3 px-2 py-1.5 text-sm font-semibold">
                     <div
                        class="relative cursor-pointer overflow-hidden shrink-0 before:border before:border-solid before:border-white-100 before:opacity-20 before:absolute before:inset-0 w-9 h-9 rounded-full before:rounded-full"
                     >
                        <div
                           class="flex items-center justify-center text-white h-full w-full text-sm font-medium object-cover"
                           style="background: linear-gradient(rgb(68, 137, 247) 0%, rgb(0, 78, 203) 100%)"
                        >
                           {{ user?.first_name?.slice(0, 1) + user?.last_name?.slice(0, 1) }}
                        </div>
                     </div>
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
               <SheetTrigger as-child>
                  <Button variant="outline" size="icon" class="flex md:hidden border-none">
                     <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class="h-6 w-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                     </svg>
                  </Button>
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
