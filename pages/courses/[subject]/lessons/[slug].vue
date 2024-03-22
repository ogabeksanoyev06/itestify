<script setup>
import { ref } from 'vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const defaultValue = 'item-1';
const accordionItems = [
   { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
   { value: 'item-2', title: 'Is it unstyled?', content: "Yes. It's unstyled by default, giving you freedom over the look and feel." },
   { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' }
];
</script>
<template>
   <div class="py-8">
      <div class="container">
         <div class="grid gap-6 xl:grid-cols-6">
            <div class="xl:col-span-4">
               <div class="sticky top-28">
                  <div class="relative aspect-video overflow-hidden rounded-md border border-border bg-muted">
                     <div class="absolute inset-x-0 inset-y-0 h-full w-full">
                        <div class="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-muted">
                           <img src="https://fozilov.uz/_next/image?url=%2Flock-animate.gif&w=64&q=75" alt="" class="h-12 w-12" />
                           <p class="text-sm">Sizda ushbu videoni ko'rish huquqi mavjud emas.</p>
                        </div>
                     </div>
                  </div>
                  <div class="py-6">
                     <h2 class="text-2xl font-bold">Kurs uchun kerakli dasturlar</h2>
                  </div>
               </div>
            </div>
            <div class="h-min xl:col-span-2">
               <div class="flex flex-col">
                  <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
                     <AccordionItem
                        v-for="item in accordionItems"
                        :key="item.value"
                        :value="item.value"
                        class="border border-t-0 rounded-t-none first:rounded-t-md last:rounded-b-md first:border-t border-border"
                     >
                        <AccordionTrigger class="flex w-full items-center justify-between p-4 font-bold transition-all text-sm md:text-lg">
                           {{ item.title }}
                        </AccordionTrigger>
                        <AccordionContent class="px-4 text-sm">
                           <div class="pb-4 pt-0 space-y-2">
                              <a
                                 class="flex border border-border rounded-md p-4 hover:bg-muted-foreground/20 transition-all duration-300"
                                 href="/courses/vue-nuxt-asoslari/lessons/cltyfnkjy00012zgmc550zp4e"
                              >
                                 <div class="flex items-center space-x-3">
                                    <svg
                                       stroke="currentColor"
                                       fill="currentColor"
                                       stroke-width="0"
                                       viewBox="0 0 448 512"
                                       class="h-4 w-4"
                                       height="1em"
                                       width="1em"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                                       ></path>
                                    </svg>
                                    <svg
                                       stroke="currentColor"
                                       fill="currentColor"
                                       stroke-width="0"
                                       viewBox="0 0 512 512"
                                       class="h-4 w-4 text-primary"
                                       height="1em"
                                       width="1em"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
                                       ></path>
                                    </svg>
                                    <span>Kurs uchun kerakli dasturlar</span>
                                 </div>
                              </a>
                           </div>
                        </AccordionContent>
                     </AccordionItem>
                  </Accordion>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
