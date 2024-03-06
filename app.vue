<template>
   <div>
      <NuxtLoadingIndicator />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
      <client-only>
         <Toaster position="top-center" richColors closeButton />
      </client-only>
   </div>
</template>
