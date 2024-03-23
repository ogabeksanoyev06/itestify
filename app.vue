<script setup>
useSeoMeta({
   title: 'iTestify'
});
</script>

<template>
   <div>
      <NuxtLoadingIndicator height="5" color="var(--primary)" />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
      <client-only>
         <Toaster position="top-center" richColors closeButton />
      </client-only>
   </div>
</template>
