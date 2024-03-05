<template>
   <div class="bg-gray-50">
      <main class="min-h-screen flex justify-center items-center">
         <div class="container">
            <div class="flex flex-col justify-between py-4">
               <div class="flex flex-col items-center justify-center space-y-1 text-center">
                  <h2 class="text-2xl font-bold sm:text-3xl">Xush kelibsiz!</h2>
               </div>
               <div class="max-w-[480px] mx-auto w-full mt-3">
                  <slot />
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup></script>
