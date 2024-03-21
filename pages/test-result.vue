<script setup>
const testResult = useCookie('testResult');
</script>

<template>
   <div>
      <h1>Test Natijasi</h1>
      <p>{{ testResult?.science }}</p>
   </div>
</template>
