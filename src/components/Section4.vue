<script setup>
  import { inject, onMounted } from 'vue';
  const gsap = inject('$gsap');
</script>

<template>
  <!-- 藍背景 -->
  <section class="scaleContainer bg-[#52C4CC] section4 w-full h-100vh bg-cover bg-center">
    <!-- 紫背景 -->
    <div></div>
    <!-- 橘背景 -->
    <div></div>
  </section>
</template>

<style scoped lang="scss">
.section4{
  background-image: url('@/assets/images/section3/phoneBg.svg');
}

</style>