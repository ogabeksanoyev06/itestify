<script setup>
// import { ref, onMounted } from 'vue';
// import Loader from '~/components/pages/Loader.vue';

useSeoMeta({
   title: 'iTestify'
});
</script>

<template>
   <div>
      <div>
         <NuxtLoadingIndicator />
         <NuxtLayout>
            <NuxtPage />
         </NuxtLayout>
         <client-only>
            <Toaster position="top-center" richColors closeButton />
         </client-only>
      </div>
   </div>
</template>
