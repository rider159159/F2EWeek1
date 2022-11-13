<script setup>
  import { inject, onMounted } from 'vue';
  const gsap = inject('$gsap');

  function scaleAnimation () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section4',
        start: 'top top',
        end: '+=2500px',
        pin: true,
        scrub: true
      },
    })
    tl.fromTo('.sectionPurple', {
      scale: '0.1',
      opacity: '0'
    },{
      scale:'1',
      opacity: '1'
    }).fromTo('.sectionOrange', {
      scale: '0.1',
      opacity: '0'
    }, {
      scale:'1',
      opacity: '1'
    })
  }
  onMounted(() => {
    scaleAnimation()
  })
</script>

<template>
  <!-- 藍背景 -->
  <section class="section4 sectionBlue relative bg-[#52C4CC] w-full h-100vh bg-cover bg-center">
    <div class="relative z-0 ml-30px md:ml-40px xl:ml-20vw flex flex-col justify-center h-full">
      <div class="flex items-center mb-10px xl:mb-40px">
        <p class="enFont text-20px md:text-30px mr-10px">Week1</p>
        <div class="relative overflow-hidden">
          <div class="cnFont md:text-24px flex justify-center items-center w-full absolute z-1 top-5px left-3px w-121px h-44px bg-[#DCF3F5]">
            版塊設計
          </div>
          <img class="relative z-2" src="@/assets/images/section4/border.svg" alt="">
        </div>
      </div>
      <div class="relative flex enFont text-50px md:text-90px mb-10px md:mb-20px">
        <div class="relative z-10 flex text-secondary1">
          <p class="mr-5px stroke">The</p>
          <p class="stroke">F2E</p>
        </div>
        <div class="absolute flex text-black top-4px left-4px">
          <p class="mr-5px">The</p>
          <p>F2E</p>
        </div>
      </div>
      <div class="relative flex cnFont text-45px md:text-80px text-secondary1 mb-30px md:mb-40px">
        <p class="relative z-10 stroke text-secondary1">活動網站設計</p>
        <p class="absolute text-black  top-4px left-4px">活動網站設計</p>
      </div>
      <p class="text-black font-bold text-24px md:text-30px mb-10px md:mb-20px">視差滾動</p>
      <button type="button" class="self-start border-0 px-16px py-8px text-black bg-[#FBBF00] font-bold text-14px md:text-16px">查看關卡細節</button>
    </div>
    <!-- 紫背景 -->
    <div class="sectionPurple bg-cover bg-center absolute z-1 top-0 w-full h-100vh bg-[#6633FF]">
      <div class="ml-30px md:ml-40px xl:ml-20vw flex flex-col justify-center h-full">
        <div class="flex items-center mb-10px xl:mb-40px">
          <p class="enFont text-20px md:text-30px mr-10px">Week2</p>
          <div class="relative overflow-hidden">
            <div class="cnFont md:text-24px flex flex justify-center items-center m-auto w-full absolute z-1 top-5px left-3px w-121px h-70px bg-[#DCF3F5]">
              <div class="flex flex-col">
                <p>凱鈿</p>
                <p>行動科技</p>
              </div>
            </div>
            <img class="relative z-2" src="@/assets/images/section4/border2.svg" alt="">
          </div>
        </div>
        <div class="relative flex enFont text-50px md:text-90px mb-10px md:mb-20px">
          <div class="relative z-10 flex text-secondary1">
            <p class="mr-5px stroke">今晚我想來</p>
          </div>
          <div class="absolute flex text-black top-4px left-4px">
            <p class="mr-5px">今晚我想來</p>
          </div>
        </div>
        <div class="relative flex cnFont text-45px md:text-80px text-secondary1 mb-30px md:mb-40px">
          <p class="relative z-10 stroke text-secondary1">點點簽</p>
          <p class="absolute text-black  top-4px left-4px">點點簽</p>
        </div>
        <p class="text-white nsFont font-bold  md:text-30px mb-10px md:mb-20px">Canvas</p>
        <button type="button" class="self-start border-0 px-16px py-8px text-black bg-[#FBBF00] font-bold text-14px md:text-16px">查看關卡細節</button>
      </div>
    </div>
    <!-- 橘背景 -->
    <div class="sectionOrange bg-cover bg-center absolute z-3 top-0 w-full h-100vh bg-[#FF7A00]">
      <div class="ml-30px md:ml-40px xl:ml-20vw flex flex-col justify-center h-full">
        <div class="flex items-center mb-10px xl:mb-40px">
          <p class="enFont text-20px md:text-30px mr-10px">Week3</p>
          <div class="relative overflow-hidden">
            <div class="cnFont md:text-24px flex justify-center items-center w-full absolute z-1 top-5px left-3px w-121px h-70px bg-[#DCF3F5]">
              <div class="flex flex-col">
                <p>新加坡商</p>
                <p>鈦坦科技</p>
              </div>
            </div>
            <img class="relative z-2" src="@/assets/images/section4/border2.svg" alt="">
          </div>
        </div>
        <div class="relative flex enFont text-50px md:text-90px mb-10px md:mb-20px">
          <div class="relative z-10 flex text-secondary1">
            <p class="mr-5px stroke">Scrum</p>
          </div>
          <div class="absolute flex text-black top-4px left-4px">
            <p class="mr-5px">Scrum</p>
          </div>
        </div>
        <div class="relative flex cnFont text-45px md:text-80px text-secondary1 mb-30px md:mb-40px">
          <p class="relative z-10 stroke text-secondary1">新手村</p>
          <p class="absolute text-black  top-4px left-4px">新手村</p>
        </div>
        <p class="text-black font-bold text-24px md:text-30px mb-10px md:mb-20px nsFont">JS draggable</p>
        <button type="button" class="self-start border-0 px-16px py-8px text-black bg-[#FBBF00] font-bold text-14px md:text-16px">查看關卡細節</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sectionBlue {
  background-image: url('@/assets/images/section4/phoneBg-blue.svg');
  @media(min-width: 768px){
    background-image: url('@/assets/images/section4/padBg-blue.svg');
  }
  @media(min-width: 1280px){
    background-image: url('@/assets/images/section4/pcBg-blue.svg');
  }
}
.sectionPurple  {
  background-image: url('@/assets/images/section4/phoneBg-purple.svg');
  @media(min-width: 768px){
    background-image: url('@/assets/images/section4/padBg-purple.svg');
  }
  @media(min-width: 1280px){
    background-image: url('@/assets/images/section4/pcBg-purple.svg');
  }
}
.sectionOrange {
  background-image: url('@/assets/images/section4/phoneBg-orange.svg');
  @media(min-width: 768px){
    background-image: url('@/assets/images/section4/padBg-orange.svg');
  }
  @media(min-width: 1280px){
    background-image: url('@/assets/images/section4/pcBg-orange.svg');
  }
}
.stroke{
    -webkit-text-stroke: 1px black;
}
</style>