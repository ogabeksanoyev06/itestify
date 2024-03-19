<script setup>
import Button from '~/components/ui/button/Button.vue';
import { ref } from 'vue';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const isOpen = ref(false);
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="grid gap-6 xl:grid-cols-6 relative">
            <div class="flex flex-col space-y-6 xl:order-1 xl:col-span-4">
               <div class="relative aspect-video overflow-hidden rounded-md border border-border bg-primary/20">
                  <div class="absolute inset-x-0 inset-y-0 h-full w-full">
                     <iframe
                        src="https://kinescope.io/jhVuHtMnz4fV51bBjqk3LJ"
                        allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
                        frameborder="0"
                        style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px"
                     ></iframe>
                  </div>
               </div>
               <div class="flex flex-col space-y-4">
                  <h1 class="text-2xl font-bold md:text-4xl">Vue &amp; Nuxt asoslari</h1>
                  <div class="flex items-center space-x-5">
                     <div class="flex items-center space-x-2 text-sm md:text-base">
                        <svg
                           stroke="currentColor"
                           fill="currentColor"
                           stroke-width="0"
                           viewBox="0 0 256 256"
                           class="h-5 w-5"
                           height="1em"
                           width="1em"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="M192,88V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H184A8,8,0,0,1,192,88Z" opacity="0.2"></path>
                           <path
                              d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z"
                           ></path>
                        </svg>
                        <span>4 ta modul</span>
                     </div>
                     <div class="flex items-center space-x-2 text-sm md:text-base">
                        <svg
                           stroke="currentColor"
                           fill="currentColor"
                           stroke-width="0"
                           viewBox="0 0 256 256"
                           class="h-5 w-5"
                           height="1em"
                           width="1em"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M48,72h64V184H48ZM190.64,38.39a8,8,0,0,0-9.5-6.21l-46.81,10a8.07,8.07,0,0,0-6.15,9.57L139.79,107l62.46-13.42Z"
                              opacity="0.2"
                           ></path>
                           <path
                              d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"
                           ></path>
                        </svg>
                        <span>27 ta video</span>
                     </div>
                  </div>
                  <p class="text-sm md:text-base">
                     Ushbu kurs frontend sohasi bo‘yicha bilimlaringizni mustahkamlashga va eng asosiysi Vue.js va Nuxt.js texnologiyalarini tez va
                     oson o‘rganishingizga xizmat qiladi. Marhamat, bugundan harakatni boshlang!
                  </p>
               </div>
               <div class="flex flex-col space-y-4">
                  <h2 class="text-2xl font-bold">Kurs rejasi</h2>
                  <div class="flex flex-col">
                     <Collapsible v-model:open="isOpen">
                        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
                        <CollapsibleContent> Yes. Free to use for personal and commercial projects. No attribution required. </CollapsibleContent>
                     </Collapsible>
                  </div>
               </div>
            </div>
            <div class="sticky top-28 xl:order-2 xl:col-span-2">
               <div class="flex flex-col space-y-8 rounded-md border border-border p-6">
                  <div class="flex flex-col space-y-2">
                     <span class="text-slate-700 dark:text-slate-200">Kurs narxi:</span>
                     <div class="flex items-center justify-between">
                        <span class="text-xl font-bold lg:text-3xl">300 000 SO‘M</span>
                        <!-- <span class="rounded-md bg-primary/20 px-4 py-2 text-xs">50% chegirma</span> -->
                     </div>
                     <span
                        class="text-sm text-slate-700 dark:text-slate-200 md:text-base"
                        style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance"
                     >
                        Kurs uchun bir marta to‘lov qilasiz va undan istalgan vaqt foydalanish mumkin.
                     </span>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <Button variant="outline" size="lg"> Kirish </Button>
                     <Button size="lg"> Sotib olish </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
