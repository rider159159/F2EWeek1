<script setup>
  import { inject, onMounted } from 'vue';

  const gsap = inject('$gsap');
  
  const props = defineProps({
    title: {
      type: String,
    },
    reserve: {
      type: Boolean,
      default: true,
    }
  })
  const titleRef = toRef(props, 'title')
  const reserveRef = toRef(props, 'reserve')

  onMounted(()=>{
    useMarquee()
  })

  function useMarquee() {
    // const tl = gsap.timeline();
    gsap.fromTo(".marquee", { 
      x: (reserveRef? "0%" : "-100%"), 
      duration: 1000,
    },{
      x: (reserveRef? "-100%" : "0%"), 
      duration: 1000,
      repeat: -1,
    })
  }
</script>

<template>
  <div class="marquee overflow-hidden absolute enFont text-60px  text-primary2 opacity-20 flex">
    <span v-for="index in 100" :key="`to-marquee-${index}`" class="whitespace-nowrap">
      {{ titleRef }}
    </span>
  </div>
</template>
