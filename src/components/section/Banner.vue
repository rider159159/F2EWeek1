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

function elfScroll(){
  gsap.to(".elf-1", {
    top: 0,
    duration: .5,
    scrollTrigger: {
      trigger: ".elf-1", //觸發得物件
      toggleActions: "restart none none none",
    }
  })
  gsap.to(".elf-2", {
    bottom: 0,
    duration: .5,
    scrollTrigger: {
      trigger: ".elf-2", //觸發得物件
      toggleActions: "restart none none none",
    }
  })
  gsap.to(".elf-3", {
    bottom: 0,
    duration: .5,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".elf-3", //觸發得物件
      toggleActions: "restart none none none",
    }
  })
}

let timeHandle = null
function checkTimeout() {
  if(timeHandle){
    console.log('clear')
    clearTimeout(timeHandle);
  }
  timeHandle = setTimeout(() => {
    boxRandom()
    checkTimeout()
  }, 1000);
}

function boxRandom() {
  gsap.utils.toArray(".fadeUp").forEach((item) => {
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
}

onMounted(() => {
  window.addEventListener('resize', checkBodyWidth)
  checkBodyWidth()
  checkTimeout()
  elfScroll()
});
</script>

<template>
  <section class="relative flex flex-col justify-between overflow-hidden py-20px h-965px bg-black">
    <!-- 跑馬燈1 -->
    <div class="h-60px overflow-hidden relative">
      <div class="w-200% h-60px absolute overflow-hidden enFont text-60px  text-primary2 opacity-20">
        <!-- <span v-for="index in 50" :key="`time-${index}`">UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span> -->
        <Marquee title="UI DESIGN FRONTEND "></Marquee>
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
    <!-- 小精靈 -->
    <img class="elf-1 absolute top--50px left-[60px] w-[80px] md:w-[160px]" src="@/assets/images/section1/elfBlue.svg">
    <div class="elf-2 flex w-full absolute bottom--50px md:bottom--130px left-[40px]">
      <img class="w-[60px] md:w-[130px] mr-16px" src="@/assets/images/section1/elfPurple.svg">
      <img class="w-[60px] md:w-[130px]" src="@/assets/images/section1/elfRed.svg">
    </div>
    <img class="elf-3 box absolute bottom--90px md:bottom--240p right-0 w-[90px] md:w-[240px]" src="@/assets/images/section1/elfYellow.svg">
  </section>
</template>
