<script setup lang="ts">
import PerspectiveCard from '@/components/card/PerspectiveCard.vue';
import SimplePerspectiveCard from '@/components/card/simplePerspectiveCard.vue';
import ParticlesBg from '@/components/ui/particles-bg/ParticlesBg.vue';
import RippleButton from '@/components/ui/ripple-button/RippleButton.vue';
import IInput from '@/components/ui/input/IInput.vue';
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useColorMode } from "@vueuse/core";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger.js";
import Bg from '@/assets/bg_1.jpg';

const isDark = computed(() => useColorMode().value == "dark");

gsap.registerPlugin(ScrollTrigger);

let t1: gsap.core.Timeline | null = null;
let t2: gsap.core.Timeline | null = null;

const change = (e: any) => {
  console.log(e.target.value, '????');
}

onMounted(() => {
  t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-trigger-wrapper",
        start: "top top",
        end: "+=800",
        scrub: 0.5,
        pin: true, // 当滚动条滚动时，保持元素固定在视窗内
        markers: true,
      },
    });

    t1
    .to("#scroll-trigger", {
      scale: 1.2,
    })
    .to('#Introduction',{
      opacity:0,
    },'<=')


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
      // .fromTo('#project-1 h3, #project-1 p', { color: 'transparent' }, { color: '#6d28d9' })
      // .fromTo('#project-2 h3, #project-2 p', { color: 'transparent' }, { color: '#6d28d9' }, '<=')
      // .fromTo('#project-3 h3, #project-3 p', { color: 'transparent' }, { color: '#6d28d9' }, '<=')
      // .fromTo('#project-4 h3, #project-4 p', { color: 'transparent' }, { color: '#6d28d9' }, '<=')
      .fromTo('#project-1', { xPercent: 50, yPercent: 50,duration:1}, {xPercent: 0,yPercent:0})
      .fromTo('#project-2', { xPercent: -50, yPercent: 50,duration:1}, {xPercent: 0,yPercent:0},'<=')
      .fromTo('#project-3', { xPercent: 50, yPercent: -50,duration:1}, {xPercent: 0,yPercent:0},'<=')
      .fromTo('#project-4', { xPercent: -50, yPercent: -50,duration:1}, {xPercent: 0,yPercent:0},'<=')
      .to('#project-1 h3, #project-1 p', { color: '#6d28d9' },'+=0.3')
      .to('#project-2 h3, #project-2 p', { color: '#6d28d9' }, '<=')
      .to('#project-3 h3, #project-3 p', { color: '#6d28d9' }, '<=')
      .to('#project-4 h3, #project-4 p', { color: '#6d28d9' }, '<=');


})

onUnmounted(() => {
  t1?.kill();
  t2?.kill();
})

</script>

<template>
  <div class="overflow-x-hidden">
      <!-- 简介 -->
  <section class="w-full h-screen overflow-hidden flex items-center justify-center" id="scroll-trigger-wrapper">
    <img class="w-full h-full object-cover absolute inset-0" :src="Bg" alt="" id='scroll-trigger'/>
    <div
      className="flex flex-col justify-center items-center px-4 z-10"
      id="Introduction">
      <div className="max-w-3xl mx-auto text-center">
        <!-- <h1 class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Hello World
        </h1> -->
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-900">hello world</h1>
        <p className="text-xl md:text-2xl mb-8 text-pink-300">
          I focus on creating beautiful and powerful websites and
          applications, and I love exploring new technologies and creative solutions.
        </p>
      </div>
    </div>
  </section>
  <!-- 卡片 -->
  <section class="flex items-center px-4 py-24 z-40 justify-center relative" id='card-container'>
    <div class="bg-red-500 w-[100px] h-[100px] relative"></div>
    <!-- <SimplePerspectiveCard>
        <template #title>
          <div>我的项目</div>
        </template>
        <template #desc>
          <span>以下是我最近完成的一些项目，展示了我在前端和后端开发方面的技能和经验。
            每个项目都代表了我对用户体验和技术实现的追求。</span>
        </template>
        <template #content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-purple-100 p-6 border-0 project-card" id='project-1'>
              <h3 className="text-xl font-semibold mb-2 text-transparent">电子商务平台</h3>
              <p className="text-transparent">
                使用 Next.js 和 Tailwind CSS 构建的现代电子商务网站，包含产品展示、购物车和支付功能。
              </p>
            </div>

            <div className="rounded-lg bg-purple-100 p-6 border-0 project-card" id='project-2'>
              <h3 className="text-xl font-semibold mb-2 text-transparent">社交媒体应用</h3>
              <p className="text-transparent">
                使用 Next.js 和 Tailwind CSS 构建的现代电子商务网站，包含产品展示、购物车和支付功能。
              </p>
            </div>

            <div className="rounded-lg bg-purple-100 p-6 border-0 project-card" id='project-3'>
              <h3 className="text-xl font-semibold mb-2 text-transparent">数据可视化仪表板</h3>
              <p className="text-transparent">
                使用 D3.js 和 Vue.js 构建的交互式数据可视化仪表板，帮助用户理解复杂数据。
              </p>
            </div>

            <div className="rounded-lg bg-purple-100 p-6 border-0 project-card" id='project-4'>
              <h3 className="text-xl font-semibold mb-2 text-transparent">移动应用程序</h3>
              <p className="text-transparent">
                使用 React Native 开发的跨平台移动应用，提供流畅的用户体验和离线功能。
              </p>
            </div>
          </div>
        </template>
      </SimplePerspectiveCard> -->
  </section>


  <!-- 粒子特效展示 -->
  <!-- <section class="w-full h-screen relative">
    <ParticlesBg class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'" :staticity="10"
      refresh>
    </ParticlesBg>
  </section> -->
  <section class="w-full h-screen bg-green-400">

  </section>
  </div>
</template>

<style scoped>
.inputClass {
  z-index: 10;
}
</style>
