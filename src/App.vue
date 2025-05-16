<script setup lang="ts">
import PerspectiveCard from '@/components/card/PerspectiveCard.vue';
import SimplePerspectiveCard from '@/components/card/simplePerspectiveCard.vue';
import ParticlesBg from '@/components/ui/particles-bg/ParticlesBg.vue';
import RippleButton from '@/components/ui/ripple-button/RippleButton.vue';
import IInput from '@/components/ui/input/IInput.vue';
import { computed, onMounted, onUnmounted } from "vue";
import { useColorMode } from "@vueuse/core";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger.js";
import Bg from '@/assets/bg_1.jpg';
import Typed from 'typed.js';
import ThreeModel from '@/components/three/index.vue';
import {ExpandableGallery} from "@/components/ui/expandable-gallery";
import {TextGenerateEffect} from '@/components/ui/text-generate-effect';
import GlobeBall from '@/components/GlobeBall'

const isDark = computed(() => useColorMode().value == "dark");

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=3626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let t1: gsap.core.Timeline | null = null;
let t2: gsap.core.Timeline | null = null;
let t3: gsap.core.Timeline | null = null;
let typed: Typed | null = null;

const change = (e: any) => {
  console.log(e.target.value, '????');
}

onMounted(() => {
  typed = new Typed(document.querySelector('#typed'),{
    strings: ['Hello World','I am JJD','我是一个前端工程师'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 4000,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  })

  t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#scroll-trigger-wrapper",
      start: "top top",
      end: "+=800",
      scrub: 0.5,
      pin: "#scroll-trigger", // 当滚动条滚动时，保持元素固定在视窗内
      // markers: true,
    },
  });

  t1
    .to("#scroll-trigger", {
      scale: 1.2,
    })
    .to('#Introduction', {
      opacity: 0,
    }, '<=')


  t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#card-container',
      start: '-=400',
      end: 'top',
      scrub: true,
      pin: false,
      // markers: true
    }
  });

  t2
    .fromTo('#card', { scale: 0, xPercent: 50, yPercent: 50, duration: 1 }, { scale: 1, xPercent: 0, yPercent: 0 })
    .fromTo('#project-1', { opacity: 0, xPercent: 50, yPercent: 50, duration: 1 }, { opacity: 1, xPercent: 0, yPercent: 0 }, '+=0.3')
    .fromTo('#project-2', { opacity: 0, xPercent: -50, yPercent: 50, duration: 1 }, { opacity: 1, xPercent: 0, yPercent: 0 }, '<=')
    .fromTo('#project-3', { opacity: 0, xPercent: 50, yPercent: -50, duration: 1 }, { opacity: 1, xPercent: 0, yPercent: 0 }, '<=')
    .fromTo('#project-4', { opacity: 0, xPercent: -50, yPercent: -50, duration: 1 }, { opacity: 1, xPercent: 0, yPercent: 0 }, '<=')
    .to('#project-1 h3, #project-1 p', { color: '#6d28d9' }, '+=0.3')
    .to('#project-2 h3, #project-2 p', { color: '#6d28d9' }, '<=')
    .to('#project-3 h3, #project-3 p', { color: '#6d28d9' }, '<=')
    .to('#project-4 h3, #project-4 p', { color: '#6d28d9' }, '<=');


})

onUnmounted(() => {
  t1?.kill();
  t2?.kill();
  typed?.destroy();
})

</script>

<template>
  <main id="container">
    <!-- 简介 -->
    <section class="w-full h-screen overflow-hidden flex items-center justify-center" id="scroll-trigger-wrapper">
      <img class="w-full h-full object-cover absolute inset-0" :src="Bg" alt="" id='scroll-trigger' />
      <div class="fixed flex flex-col justify-center items-center px-4 z-10" id="Introduction">
        <div class="max-w-3xl mx-auto text-center">
          <div>
            <span class="text-4xl md:text-6xl font-bold mb-6 text-transparent whitespace-nowrap tracking-wide" id="typed" style="-webkit-text-stroke: 1.5px rgb(168 85 247);"></span>
          </div>
          <div class="text-xl md:text-2xl mb-8 text-pink-300">
            <TextGenerateEffect words="I focus on creating beautiful and powerful websites and
            applications, and I love exploring new technologies and creative solutions." />
        
          </div>
        </div>
      </div>
      <!-- <div class="w-[200px] h-[200px] bg-gray-500 relative top-1/3 -translate-y-1/2 z-[999]" id="animationDiv">
        动画盒子
      </div> -->
    </section>
    <!-- 卡片 -->
    <section class="flex items-center justify-center relative bg-white z-20 w-full h-screen" id='card-container'>
      <ParticlesBg class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'"
        :staticity="10" refresh>
      </ParticlesBg>
      <SimplePerspectiveCard :cardClass="'md:w-[80rem]'" id='card'>
        <template #title>
          <div>我的项目</div>
        </template>
        <template #desc>
          <span>以下是我最近完成的一些项目，展示了我在前端和后端开发方面的技能和经验。
            每个项目都代表了我对用户体验和技术实现的追求。</span>
        </template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="rounded-lg bg-purple-100 p-6 border-0 " id='project-1'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">电子商务平台</h3>
              <p class="text-transparent">
                使用 Next.js 和 Tailwind CSS 构建的现代电子商务网站，包含产品展示、购物车和支付功能。
              </p>
            </div>

            <div class="rounded-lg bg-purple-100 p-6 border-0 " id='project-2'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">社交媒体应用</h3>
              <p class="text-transparent">
                使用 Next.js 和 Tailwind CSS 构建的现代电子商务网站，包含产品展示、购物车和支付功能。
              </p>
            </div>

            <div class="rounded-lg bg-purple-100 p-6 border-0 " id='project-3'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">数据可视化仪表板</h3>
              <p class="text-transparent">
                使用 D3.js 和 Vue.js 构建的交互式数据可视化仪表板，帮助用户理解复杂数据。
              </p>
            </div>

            <div class="rounded-lg bg-purple-100 p-6 border-0 " id='project-4'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">移动应用程序</h3>
              <p class="text-transparent">
                使用 React Native 开发的跨平台移动应用，提供流畅的用户体验和离线功能。
              </p>
            </div>
          </div>
        </template>
      </SimplePerspectiveCard>
    </section>
    <section class="w-full h-screen">
      <!-- <ThreeModel/> -->
      <GlobeBall/>
    </section>
    <section class="w-full h-screen">
      <ExpandableGallery :images="images" class="p-4 md:w-[40rem]"/>
    </section>
  </main>

</template>

<style>
.typed-cursor {
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: rgb(88,28,135);
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@media (min-width: 768px) {
  .typed-cursor {
    font-size: 3.75rem;
    line-height: 1;
    color: rgb(88,28,135);
  }
}

</style>
