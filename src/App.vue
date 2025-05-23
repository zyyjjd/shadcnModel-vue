<script setup lang="ts">
import SimplePerspectiveCard from '@/components/card/simplePerspectiveCard.vue';
import ParticlesBg from '@/components/ui/particles-bg/ParticlesBg.vue';
import { onMounted, onUnmounted } from "vue";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger.js";
// import Bg from '@/assets/bg_1.jpg';
import Bg from './assets/bg_1.jpg';
import Typed from 'typed.js';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import GlobeBall from '@/components/GlobeBall/index.vue';
import SingleTimeline from '@/components/SingleTimeline/index.vue';
import Email from '@/components/Email/index.vue';
import KillsIcons from '@/components/KillsIcons/index.vue';
import KillsList from '@/components/KillsList/index.vue'
import HorizontalScrollingList from '@/components/HorizontalScrollingList/index.vue';

gsap.registerPlugin(ScrollTrigger);

let t1: gsap.core.Timeline | null = null;
let typed: Typed | null = null;

const timeline_data = [
  {
    id: "1",
    label: "2016.09 - 2020.06",
    desc: '江苏海洋大学  统计学 本科 课外学习：python javaScript java等语音基础'
  },
  {
    id: "2",
    label: "2020.10 - 2021.04",
    desc: '上海飞观信息科技有限公司 dp 调查问卷数据分析'
  },
  {
    id: "3",
    label: "2021.10 - today",
    desc: "南京恩博科技有限公司 前端工程师 参与公司内部项目开发"
  },
]

onMounted(() => {
  typed = new Typed(document.querySelector('#typed'), {
    strings: ['Hello World', 'I am JJD', '我是一个前端工程师'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 4000,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  })

  gsap.to('#Introduction', {
    scrollTrigger: {
      trigger: '#scroll-trigger-wrapper',
      start: 'top top',
      end: '+=50%',
      scrub: 0.5,
      pin: false,
      // markers: true,
    },
    opacity: 0,
  })

  gsap.to('#scroll-trigger', {
    scrollTrigger: {
      trigger: '#container',
      start: 'top',
      end: 'bottom-=' + document.getElementById('card-section')?.offsetHeight,
      scrub: true,
      pin: '#scroll-trigger',
    },
  })

  t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#card-container',
      start: '+=50%',
      end: 'bottom',
      scrub: 0.5,
      pin: false,
      // markers: true
    }
  });

  t1
    .fromTo('#card', { scale: 0, xPercent: 50, yPercent: 50, }, { scale: 1, xPercent: 0, yPercent: 0 })
    .fromTo('#project-1', { opacity: 0, xPercent: 50, yPercent: 50, }, { opacity: 1, xPercent: 0, yPercent: 0 }, '+=0.3')
    .fromTo('#project-2', { opacity: 0, xPercent: -50, yPercent: 50, }, { opacity: 1, xPercent: 0, yPercent: 0 }, '<=')
    .fromTo('#project-3', { opacity: 0, xPercent: 50, yPercent: -50, }, { opacity: 1, xPercent: 0, yPercent: 0 }, '<=')
    .fromTo('#project-4', { opacity: 0, xPercent: -50, yPercent: -50, }, { opacity: 1, xPercent: 0, yPercent: 0 }, '<=')
    .to('#project-1 h3, #project-1 p', { color: '#fff' }, '+=0.3')
    .to('#project-2 h3, #project-2 p', { color: '#fff' }, '<=')
    .to('#project-3 h3, #project-3 p', { color: '#fff' }, '<=')
    .to('#project-4 h3, #project-4 p', { color: '#fff' }, '<=');

  // GlobeBall 动画
  gsap.fromTo('#global', { xPercent: -100, opacity: 0 }, {
    scrollTrigger: {
      trigger: '#global',
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
    xPercent: 0,
    opacity: 1,
    duration: 0.5,
    ease: 'power1.inOut',
  });

  // Email 动画
  gsap.fromTo('#email', { xPercent: 100, opacity: 0 }, {
    scrollTrigger: {
      trigger: '#email',
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
    xPercent: 0,
    opacity: 1,
    duration: 0.5,
    ease: 'power1.inOut',
  });

  // KillsList 动画
  gsap.utils.toArray('.kill-card').forEach((item:HTMLElement, index) => {
    gsap.fromTo(item, { xPercent: 200 }, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
      },
      xPercent: 0,
      skewX: 0,
      duration: 0.5,
      ease: 'power1.inOut',
      delay: index * 0.12,
    })
  })



})

onUnmounted(() => {
  t1?.kill();
  // t2?.kill();
  typed?.destroy();
})

</script>

<template>
  <main id="container">
    <!-- 简介 -->
    <section class="w-full h-screen overflow-hidden flex items-center justify-center" id="scroll-trigger-wrapper">
      <img class="w-full h-full object-cover absolute inset-0 backdrop-blur-sm" :src="Bg" alt="" id='scroll-trigger' />
      <div class="fixed flex flex-col justify-center items-center px-4 z-10" id="Introduction">
        <div class="max-w-3xl mx-auto text-center backdrop-blur-sm">
          <div>
            <span class="text-4xl md:text-6xl font-bold mb-6 text-transparent whitespace-nowrap tracking-wide"
              id="typed" style="-webkit-text-stroke: 1.5px #fff;"></span>
          </div>
          <div class="text-2xl lg:text-6xl mt-8 text-white flex justify-center">
            <TextGenerateEffect words="专注于创建美观且功能强大的网站，探索新技术和创造性的解决方案" splitType="，" class="" :delay="400" />
          </div>
        </div>
      </div>
    </section>
    <!-- 时间轴 -->
    <section class="w-full h-screen flex items-center" id='card-container'>
      <SingleTimeline :data="timeline_data" title="学习&工作经历" titleClass="relative"
        itemClass="text-[#272627] font-semibold md:text-2xl text-xl"
        containerClass="bg-transparent backdrop-blur-[10px]" />
    </section>
    <!-- 卡片 -->
    <section class="flex items-center justify-center relative z-20 w-full h-screen" id="card-section">
      <ParticlesBg class="absolute inset-0" :quantity="100" :ease="100" color="#000" :staticity="10" refresh>
      </ParticlesBg>
      <SimplePerspectiveCard cardClass="md:w-[80rem] bg-black/10 backdrop-blur-2xl border-black/40" id='card'>
        <template #title>
          <div class="text-white">我的项目</div>
        </template>
        <template #desc>
          <span class="text-[#f0f0f0]">和不少人合作开发了一些简单的项目</span>
        </template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="rounded-lg bg-white/10 backdrop-blur-sm p-6 border-0 " id='project-1'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">CMS管理系统</h3>
              <p class="text-transparent">
                react15 + umi + antd + dva + less + ol 实现的简单后台管理系统
              </p>
            </div>

            <div class="rounded-lg bg-white/10 backdrop-blur-sm p-6 border-0 " id='project-2'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">森林防火展示平台</h3>
              <p class="text-transparent">
                react17 + umi + antd + dva + less + echarts + cesium 实现的展示平台，包含地图、数据展示、数据查询等功能。
              </p>
            </div>

            <div class="rounded-lg bg-white/10 backdrop-blur-sm p-6 border-0 " id='project-3'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">森林大屏</h3>
              <p class="text-transparent">
                react18 + vite + antd + echarts + tailwindcss + ol + zustand 实现的大屏展示平台，包含地图、数据展示、数据查询等功能。
              </p>
            </div>

            <div class="rounded-lg bg-white/10 backdrop-blur-sm p-6 border-0 " id='project-4'>
              <h3 class="text-xl font-semibold mb-2 text-transparent">森林防火办公平台</h3>
              <p class="text-transparent">
                vue2 + ruoyi + element-ui + sass + ol + vuex 实现的森林防火后台管理系统
              </p>
            </div>
          </div>
        </template>
      </SimplePerspectiveCard>
    </section>
    <!-- 技能 -->
    <section class="w-full h-screen bg-black relative grid grid-cols-6 grid-rows-5 px-10" id="kills-section">
      <div class="col-span-6 row-span-1 flex justify-center items-center">
        <HorizontalScrollingList/>
      </div>
      <div class="col-span-4 row-span-4 flex items-center">
        <KillsList class="z-20"/>
      </div>
      <div class="col-span-2 row-span-4 flex items-center">
        <KillsIcons />
      </div>
    </section>
    <!-- 3d globe & 邮件-->
    <section class="w-full h-screen bg-black relative grid xl:grid-cols-[1fr_2fr] grid-cols-1 px-16 overflow-x-hidden z-40"
      id="email-section">
      <div class="flex items-center">
        <GlobeBall id="global" />
      </div>
      <div id="email" class=" flex items-center justify-end">
        <Email class="md:w-[60rem] w-96"/>
      </div>
    </section>
  </main>
</template>

<style>
.typed-cursor {
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: rgb(88, 28, 135);
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

@media (min-width: 768px) {
  .typed-cursor {
    font-size: 3.75rem;
    line-height: 1;
    color: #fff;
  }
}
</style>
