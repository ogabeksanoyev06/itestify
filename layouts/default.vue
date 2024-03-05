<template>
   <div class="flex min-h-screen flex-col bg-background">
      <AppHeader />
      <div class="flex-1 bg-background">
         <main class="container">
            <slot />
         </main>
      </div>

      <AppFooter />
   </div>
</template>

<script setup>
import AppFooter from '../components/layouts/default/footer/AppFooter.vue';
import AppHeader from '../components/layouts/default/header/AppHeader.vue';
</script>
