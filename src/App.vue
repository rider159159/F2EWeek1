<script setup>
import { inject, onMounted } from 'vue';

const gsap = inject('$gsap');
let boxNum = ref(12)

function checkBodyWidth(){
  // 手機
  if(document.body.clientWidth > 0 && document.body.clientWidth < 768) {
    boxNum.value=12
  }else if(document.body.clientWidth >= 768 && document.body.clientWidth < 1280){ //
    boxNum.value=24
  }else if(document.body.clientWidth >= 1280){ //
    boxNum.value=36
  }
}

onMounted(() => {
  window.addEventListener('resize', checkBodyWidth)
  setInterval(()=>{
    gsap.utils.toArray(".fadeUp").forEach((item)=>{
      gsap.fromTo(item, {
        opacity: 'random(0.1,1,.5)',
        duration: 2.5
      },
      {
        opacity: 'random(0.1,0.9,.5)',
        duration: 2.5,
        ease: 'back',
        repeat: -1
      })
    })
  },1000)

});
</script>

<template>
  <div class="">
    <header class="z-1 fixed w-full top-34px right-10% flex justify-end">
      <div class="mr-30px abFont text-20px md:text-24px text-white font-bold">THE F2E</div>
      <div class="lg:hidden">
        <img src="@/assets/images/header/menu_btn.svg" alt="">
      </div>
      <div class="hidden lg:flex bg-white px-10px relative after:bg-primary2 after:w-356px after:h-36px">
        <div class="z--1 absolute bg-#6633FF w-356px h-36px right--5px bottom--5px"></div>
        <div class="nsFont font-bold py-10px px-10px">關卡資訊</div>
        <div class="nsFont font-bold py-10px px-10px">作品列表</div>
        <div class="nsFont font-bold py-10px px-10px">攻略資源</div>
        <div class="nsFont font-bold py-10px px-10px">求職專區</div>
      </div>

    </header>

    <!-- 區塊一   class="flex flex-col pt-10px items-center overflow-x-hidden bg-black h-965px">-->
    <section class="relative flex flex-col justify-between overflow-hidden py-20px h-965px bg-black">
      <!-- 跑馬燈1 -->
      <div class="marquee h-60px overflow-hidden relative">
        <div class="w-200% h-60px absolute overflow-hidden enFont text-60px  text-primary2 opacity-20">
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        </div>
      </div>
      <!-- 中間區塊 -->
      <div class="relative py-[172px]">
        <div class="flex flex-col items-center">
          <div class="absolute top-0 z-1">
            <p class="b40Font text-right text-white text-30px mb-20px md:mb-30px">2022</p>
            <div class="b40Font text-80px md:text-100px text-white flex flex-col md:flex-row mb-30px">
              <p class="md:mr-20px">THE</p>
              <p class="">F2E</p>
            </div>
            <div class="flex flex-col md:flex-row md:justify-between">
              <div class="cnFont md:text-30px flex justify-center py-12px px-41px bg-white text-primary2 mb-20px">互動式網頁設計</div>
              <div class="flex">
                <div class="flex flex-col text-white mr-20px">
                  <p class="cnFont text-14px mb-5px">個人組</p>
                  <p class="abFont text-30px md:text-45px">963</p>
                </div>
                <div class="flex flex-col text-white">
                  <p class="cnFont text-14px mb-5px">團體組</p>
                  <p class="abFont text-30px md:text-45px">39</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute top-0 flex flex-wrap justify-center items-center">
          <div v-for="item in boxNum" :key="item" class="fadeUp bg-#6633FF w-80px h-80px md:w-100px md:h-100px xl:w-120px xl:h-120px"></div>
        </div>
      </div>
      <!-- 跑馬燈2 -->
      <div class="marquee h-60px overflow-hidden relative">
        <div class="w-200% h-60px absolute overflow-hidden enFont text-60px  text-primary2 opacity-20">
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
          <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        </div>
      </div>
    </section>
    <!-- 區塊二 -->
    <Section2></Section2>
  </div>
</template>

<style scoped>

.marquee div {
  animation: marquee 5s linear infinite;
}

.marquee span {
  float: left;
  width: 50%;
}

@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}

</style>