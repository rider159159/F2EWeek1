<script setup>
  import { inject, onMounted } from 'vue';
  const gsap = inject('$gsap');

  function scaleAnimation () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scaleContainer',
        start: 'top top',
        end: '+=2000px',
        pin: true,
        scrub: true
      }
    })
    tl.fromTo('.scaleCircle', {
      scale: '0',
      // duration: 1
      
    },{
      scale:'1'
    })
  }
  onMounted(() => {
    scaleAnimation()
  })
</script>

<template>
  <section class="scaleContainer w-full h-100vh bg-cover bg-center bg-black bg-no-repeat section3 bg-no relative">
    <div class="w-full absolute top-20px md:top-50px b40Font text-70px md:text-100px stroke text-black">
      <div class="flex flex-col md:flex-row justify-center items-center">
        <h2 class="md:mr-10px">THE</h2>
        <h2>F2E</h2>
      </div>
    </div>
    <div class="scaleCircle flex flex-col justify-center items-center bg-black h-100vh w-full">
      <div class="relative flex mb-100px">
        <img class="xl:hidden" src="@/assets/images/section3/borderPhone.svg" alt="">
        <img class="hidden xl:block" src="@/assets/images/section3/borderPC.svg" alt="">
        <div class="absolute top-0 left-0 flex flex-col xl:flex-row justify-evenly xl:items-center text-white text-60px cnFont w-full h-full">
          <div class="flex justify-center">
            <img class="w-80px xl:w-50px mr-10px" src="@/assets/images/section3/pacman.svg" alt="">
            <div class="">互動式</div>
          </div>
          <div class="flex justify-center">網頁設計</div>
        </div>
        <div class="top-0 left-0 flex absolute">
          <img class="absolute top--100px" src="@/assets/images/section3/cat.svg" alt="">
          <img class="absolute top--48px left-190px" src="@/assets/images/section3/seat.svg" alt="">
        </div>
      </div>
      <div class="flex">
        <img class="w-45px mr-40px" src="@/assets/images/section2/blue.svg" alt="">
        <img class="h-45px mr-50px" src="@/assets/images/section3/purple+red.svg" alt="">
        <img class="w-45px" src="@/assets/images/section2/yellow.svg" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section3{
  background-image: url('@/assets/images/section3/phoneBg.svg');

  @media(min-width: 768px){
    background-image: url('@/assets/images/section3/padBg.svg');
  }
  @media(min-width: 1280px){
    background-image: url('@/assets/images/section3/pcBg.svg');
  }
}
.stroke{
  -webkit-text-stroke: 1px #512BC5;
}
</style>