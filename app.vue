<script setup>
import { ref, onMounted } from 'vue';
import Loader from '~/components/pages/Loader.vue';

const loading = ref(false);

onMounted(() => {});
</script>

<template>
   <div>
      <Loader v-if="loading" />
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
