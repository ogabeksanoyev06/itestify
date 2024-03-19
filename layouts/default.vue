<script setup>
import AppFooter from '../components/layouts/default/footer/AppFooter.vue';
import AppHeader from '../components/layouts/default/header/AppHeader.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
   <div class="flex min-h-screen flex-col bg-background">
      <AppHeader />
      <div class="flex-1 bg-background">
         <main class="overflow-x-hidden">
            <slot />
         </main>
      </div>

      <AppFooter v-if="route.name === 'index'" />
   </div>
</template>
