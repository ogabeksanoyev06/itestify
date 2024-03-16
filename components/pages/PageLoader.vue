<template>
   <div class="bg-white fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div class="preloader-content">
         <div class="loader loader--fade">
            <span class="loader-item"></span>
            <span class="loader-item"></span>
            <span class="loader-item"></span>
            <span class="loader-item"></span>
         </div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
   display: block;
   overflow: hidden;
   font-size: 0;
}

.loader-item {
   display: inline-block;
   width: 15px;
   height: 15px;
   margin-left: 2.5px;
   margin-right: 2.5px;
   background-color: #22c55e;
   color: #606266;
   -webkit-animation-duration: 4s;
   animation-duration: 4s;
   -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
   animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
   -webkit-animation-iteration-count: infinite;
   animation-iteration-count: infinite;
}

.loader--fade .loader-item {
   -webkit-animation-name: fade;
   animation-name: fade;
   -webkit-animation-duration: 1s;
   animation-duration: 1s;
}
.loader-item:first-child {
   -webkit-animation-delay: 0.1s;
   animation-delay: 0.1s;
}
.loader-item:nth-child(2) {
   -webkit-animation-delay: 0.2s;
   animation-delay: 0.2s;
}
.loader-item:nth-child(3) {
   -webkit-animation-delay: 0.3s;
   animation-delay: 0.3s;
}
.loader-item:nth-child(4) {
   -webkit-animation-delay: 0.4s;
   animation-delay: 0.4s;
}
@keyframes fade {
   0% {
      opacity: 0;
   }

   50% {
      opacity: 1;
   }
   100% {
      opacity: 0;
   }
}
</style>
