<script setup>
const testResult = useCookie('testResult');
</script>

<template>
   <div>
      <h1>Test Natijasi</h1>
      <pre>{{ testResult }}</pre>
   </div>
</template>
