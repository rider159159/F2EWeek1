<script setup>
import { inject, onMounted } from 'vue';

const gsap = inject('$gsap');
function section2Gsap(){
  gsap.to(".section2-blue", {
    x: 0,
    duration: 3,
    scrollTrigger: {
      trigger: ".section2-blue", //觸發得物件
      toggleActions: "restart none none none",
    }
  })
  gsap.to(".section2-purple", {
    x:-58 ,
    duration: 3,
    scrollTrigger: {
      trigger: ".section2-purple", //觸發得物件
      toggleActions: "restart none none none",
    }
  })
  gsap.to(".section2-yellow", {
    x: 0,
    duration: 3.5,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".section2-yellow", //觸發得物件
      toggleActions: "restart none none none",
    }
  })
}

onMounted(() => {
  section2Gsap()
});
</script>

<template>
  <div class="section2 relative bg-black h-704px flex flex-col justify-between overflow-hidden py-20px">
    <!-- 跑馬燈1 -->
    <div class="marquee-left h-60px overflow-hidden relative">
      <div class="w-500% md:w-200% h-60px absolute overflow-hidden enFont text-60px text-transparent opacity-80">
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <!-- <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span> -->
      </div>
    </div>
    <!-- 小精靈 *3 -->
    <div class="h-330px flex flex-col justify-between ">
      <div class="section2-blue flex translate-x-[-100%]">
        <p class="cnFont text-white break-keep text-30px justify-start mr-10px">羨慕別人酷酷的網頁動畫</p>
        <div class="flex">
          <img class="w-[30px] mr-10px" src="@/assets/images/section2/blue.svg">
          <img class="w-[30px]" src="@/assets/images/section2/pacman.svg" alt="">
        </div>
      </div>
      <div class="section2-purple flex translate-x-[100%]">
        <div class="flex">
          <img class="w-[30px] rotate-180" src="@/assets/images/section2/pacman.svg" alt="">
          <img class="w-[30px] mr-10px" src="@/assets/images/section2/purple.svg">
        </div>
        <p class="cnFont text-white break-keep text-30px justify-start mr-10px">動畫技能樹太雜無從下手</p>
      </div>
      <div class="section2-yellow flex translate-x-[-100%]">
        <p class="cnFont text-white break-keep text-30px justify-start mr-10px">滿足不了同事的許願</p>
        <div class="flex">
          <img class="w-[30px] mr-10px" src="@/assets/images/section2/yellow.svg">
          <img class="w-[30px]" src="@/assets/images/section2/pacman.svg" alt="">
        </div>
      </div>
    </div>
    <!-- 跑馬燈2 -->
    <div class="marquee-right h-60px overflow-hidden relative">
      <div class="w-200% h-60px absolute overflow-hidden enFont text-60px text-transparent opacity-80">
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.section2 .marquee-left div {
  animation: marquee-left 5s linear infinite;
}

.section2 .marquee-left span {
  float: left;
  width: auto;
  -webkit-text-stroke:1px #6633FF;
}

@keyframes marquee-left  {
  0% { left: 0; }
  100% { left: -100%; }
}

.section2 .marquee-right div {
  animation: marquee-right 5s linear infinite;
}

.section2 .marquee-right span {
  float: right;
  /* width: 100%; */
  -webkit-text-stroke:1px #6633FF;
}

@keyframes marquee-right  {
  0% { right: 0; }
  100% { right: -100%; }
}
</style>