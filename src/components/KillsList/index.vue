<template>
  <div class="grid xl:grid-cols-4 grid-cols-2 gap-x-1 gap-y-5 w-full">
    <GlareCard v-for="({desc,logo},idx) in kills" :key="idx" :class="cn('p-4 pt-20','kill-card')">
      <div class="flex flex-col w-full h-full justify-between items-center">
        <div class="flex justify-center items-center">
          <img :src="logo" alt="" class="w-16 h-16">
        </div>
        <span class="whitespace-normal text-white text-2xl tracking-wider">{{desc}}</span>
      </div>
    </GlareCard>
  </div>
</template>

<script lang="ts" setup>
import {GlareCard} from '@/components/ui/glare-card';
import worker from '@/assets/logos/worker.png';
import tool from '@/assets/logos/tool.png';
import project from '@/assets/logos/project.png';
import setting from '@/assets/logos/setting.png';
import draw from '@/assets/logos/draw.png';
import { cn } from '@/lib/utils';
  
const kills = [
   {
    logo:[worker],
    desc:'了解TypeScript,ES6及以上版本的JavaScript语法，优化开发效率',
  },
  {
    logo:[setting],
    desc:'了解React、Vue和Svelte等框架，具备前端开发能力',
  },
   {
    logo:[draw],
    desc:'了解Canvas、Echarts和Three等技术，具备数据可视化开发能力',
  },
   {
    logo:[tool],
    desc:'了解WebGIS、Cesium，具备地理信息系统开发能力',
  },
    {
    logo:[project],
    desc:'了解antd、element和shadcn等UI框架，具备UI开发能力',
  },
]

</script>
<style scoped>
  
</style>