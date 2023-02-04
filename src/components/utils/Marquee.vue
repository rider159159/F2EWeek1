<script setup>
  import { inject, onMounted } from 'vue';

  const gsap = inject('$gsap');
  
  const props = defineProps({
    title: {
      type: String,
    },
  })
  const titleRef = toRef(props, 'title')

  onMounted(()=>{
    useMarquee()
  })

  function useMarquee() {
    // const tl = gsap.timeline();
    gsap.fromTo(".marquee", { 
      x: '0%',
      duration: 1000,
    },{
      x: '-100%',
      duration: 1000,
      repeat: -1,
    })
  }
</script>

<template>
  <div class="marquee overflow-hidden absolute enFont text-60px  text-primary2 opacity-20 flex">
    <span v-for="index in 100" :key="`to-marquee-${index}`" class="whitespace-nowrap">
      {{ titleRef }}&nbsp
    </span>
  </div>
</template>
