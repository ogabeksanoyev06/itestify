<script setup>
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder="Viloyatni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Tanlang</SelectLabel>
                        <SelectItem value="apple"> Apple </SelectItem>
                        <SelectItem value="banana"> Banana </SelectItem>
                        <SelectItem value="blueberry"> Blueberry </SelectItem>
                        <SelectItem value="grapes"> Grapes </SelectItem>
                        <SelectItem value="pineapple"> Pineapple </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder="Universitetni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple"> Apple </SelectItem>
                        <SelectItem value="banana"> Banana </SelectItem>
                        <SelectItem value="blueberry"> Blueberry </SelectItem>
                        <SelectItem value="grapes"> Grapes </SelectItem>
                        <SelectItem value="pineapple"> Pineapple </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder="Test tilini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple"> Apple </SelectItem>
                        <SelectItem value="banana"> Banana </SelectItem>
                        <SelectItem value="blueberry"> Blueberry </SelectItem>
                        <SelectItem value="grapes"> Grapes </SelectItem>
                        <SelectItem value="pineapple"> Pineapple </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder="Ta'lim shaklini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple"> Apple </SelectItem>
                        <SelectItem value="banana"> Banana </SelectItem>
                        <SelectItem value="blueberry"> Blueberry </SelectItem>
                        <SelectItem value="grapes"> Grapes </SelectItem>
                        <SelectItem value="pineapple"> Pineapple </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-9">
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder="Ta'lim yo'nalishini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple"> Apple </SelectItem>
                        <SelectItem value="banana"> Banana </SelectItem>
                        <SelectItem value="blueberry"> Blueberry </SelectItem>
                        <SelectItem value="grapes"> Grapes </SelectItem>
                        <SelectItem value="pineapple"> Pineapple </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder="Chet tilini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple"> Apple </SelectItem>
                        <SelectItem value="banana"> Banana </SelectItem>
                        <SelectItem value="blueberry"> Blueberry </SelectItem>
                        <SelectItem value="grapes"> Grapes </SelectItem>
                        <SelectItem value="pineapple"> Pineapple </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>
         <div class="mt-6">
            <div class="relative overflow-x-auto my-6">
               <table class="w-full text-sm text-left rtl:text-right">
                  <tbody>
                     <tr class="bg-primary text-white">
                        <th scope="col" class="px-6 py-4">#</th>
                        <th scope="col" class="px-6 py-4">Majburiy fanlar</th>
                        <th scope="col" class="px-6 py-4">Testlar soni</th>
                        <th scope="col" class="px-6 py-4">Ball</th>
                     </tr>
                     <tr
                        class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        v-for="(item, i) in 3"
                        :key="item"
                     >
                        <td class="px-6 py-4">{{ i + 1 }}</td>
                        <td class="px-6 py-4">Ona tili (majburiy)</td>
                        <td class="px-6 py-4">10</td>
                        <td class="px-6 py-4">1.1</td>
                     </tr>
                     <tr class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                        <th colspan="2" class="px-6 py-4 text-center">Umumiy ball</th>
                        <th colspan="2" class="px-6 py-4 text-center">156</th>
                     </tr>
                     <tr class="bg-primary text-white">
                        <th scope="col" class="px-6 py-4">#</th>
                        <th scope="col" class="px-6 py-4">Asosiy fanlar</th>
                        <th scope="col" class="px-6 py-4">Testlar soni</th>
                        <th scope="col" class="px-6 py-4">Ball</th>
                     </tr>
                     <tr
                        class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        v-for="(item, i) in 2"
                        :key="item"
                     >
                        <td class="px-6 py-4">{{ i + 1 }}</td>
                        <td class="px-6 py-4">Matematika</td>
                        <td class="px-6 py-4">10</td>
                        <td class="px-6 py-4">3.1</td>
                     </tr>
                     <tr class="border-b border-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                        <th colspan="2" class="px-6 py-4 text-center">Umumiy ball</th>
                        <th colspan="2" class="px-6 py-4 text-center">156</th>
                     </tr>
                     <tr class="text-white" style="background: linear-gradient(rgb(68, 137, 247) 0%, rgb(0, 78, 203) 100%)">
                        <th colspan="2" class="px-6 py-4 text-center">5ta fan bo'yicha umumiy ball</th>
                        <th colspan="2" class="px-6 py-4 text-center">156</th>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div class="flex justify-center mt-6"><Button size="lg">Testni boshlash</Button></div>
      </div>
   </div>
</template>
