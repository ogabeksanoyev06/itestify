<template>
   <div>
      <NuxtLoadingIndicator color="#348feb" height="5" />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
      <client-only>
         <Toaster position="top-center" richColors closeButton />
      </client-only>
   </div>
</template>
