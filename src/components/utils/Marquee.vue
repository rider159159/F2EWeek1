<script setup>
  import { inject, onMounted } from 'vue';

  const gsap = inject('$gsap');
  const props = defineProps({
    title: {
      type: String,
    }
  })
  const titleRef = toRef(props, 'title')

  onMounted(()=>{
    useMarquee()
  })

  function useMarquee() {
    // const tl = gsap.timeline();
    gsap.fromTo(".marquee", { 
      x: '0%',
      duration: 50,
    },{
      x: '-100%',
      duration: 50,
      repeat: -1,
    })
  }
</script>

<template>
  <div class="marquee">
    <span v-for="index in 100" :key="`to-marquee-${index}`">
      {{ titleRef }} 
    </span>
  </div>
</template>
