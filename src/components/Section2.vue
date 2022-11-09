<template>
  <div class="section2 bg-black h-704px flex flex-col justify-between overflow-hidden py-20px">
    <!-- 跑馬燈1 -->
    <div class="marquee-left h-60px overflow-hidden relative">
      <div class="w-200% h-60px absolute overflow-hidden enFont text-60px text-transparent opacity-20">
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
        <span>UI DESIGN FRONTEND UI DESIGN FRONTEND UI DESIGN FRONTEND</span>
      </div>
    </div>
    <!-- 小精靈 *3 -->
    <div>
      <div class="flex">
        <p class="">羨慕別人酷酷的網頁動畫</p>
        <img src="@/assets/images/header/menu_btn.svg" alt="">
      </div>
    </div>
    <!-- 跑馬燈2 -->
    <div class="marquee-right h-60px overflow-hidden relative">
      <div class="w-200% h-60px absolute overflow-hidden enFont text-60px text-transparent opacity-20">
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
  width: 50%;
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
  width: 50%;
  -webkit-text-stroke:1px #6633FF;
}

@keyframes marquee-right  {
  0% { right: 0; }
  100% { right: -100%; }
}
</style>