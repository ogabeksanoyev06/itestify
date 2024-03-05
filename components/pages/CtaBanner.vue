<template>
   <section class="mt-8 py-8">
      <div data-aos="fade-up">
         <div class="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
            <div :class="{ 'md:order-last': order }" class="flex flex-col space-y-4">
               <p class="text-base sm:text-2xl uppercase font-bold">
                  {{ props.name }}
               </p>
               <h5
                  class="text-2xl sm:text-3xl relative text-transparent bg-gradient-to-r from-green-500 to-sky-500/50 bg-clip-text font-semibold"
               >
                  {{ props.title }}
               </h5>
               <p class="text-base text-muted-foreground">
                  {{ props.text }}
               </p>
               <Button variant="secondary" class="w-fit"> Test yechish </Button>
            </div>
            <div :class="order ? 'md:mr-auto' : 'md:ml-auto'">
               <img src="https://ipro-five.vercel.app/img/news/img-1.jpg" alt="" class="rounded max-w-full" />
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const props = defineProps({
   title: String,
   name: String,
   text: String,
   order: {
      type: Boolean,
      default: false
   }
});
</script>
