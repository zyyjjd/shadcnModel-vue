<script setup lang="ts">
import PerspectiveCard from '@/components/card/PerspectiveCard.vue';
import ParticlesBg from '@/components/ui/particles-bg/ParticlesBg.vue';
import RippleButton from '@/components/ui/ripple-button/RippleButton.vue';
import IInput from '@/components/ui/input/IInput.vue';
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

const isDark = computed(() => useColorMode().value == "dark");

const change = (e: any) => {
  console.log(e.target.value,'????');
}
</script>

<template>
   <ParticlesBg
      class="fixed w-full h-screen inset-0 z-[-1]"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
 <div
    class="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent"
  >
    <span
      class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    >
      Hello World
    </span>
    <IInput id="input-demo" placeholder="请输入内容" @change="change" containerClass="inputClass"/>
    <PerspectiveCard class="z-10"/>
    <RippleButton class="z-20">
      <span>Click Me</span>
    </RippleButton>
  </div>
  <div
    class="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent"
  >
    <span
      class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    >
      Hello World
    </span>
    <IInput id="input-demo" placeholder="请输入内容" @change="change" containerClass="inputClass"/>
    <PerspectiveCard class="z-10"/>
    <RippleButton class="z-20">
      <span>Click Me</span>
    </RippleButton>
  </div>
</template>

<style scoped>
.inputClass {
  z-index: 10;
}
</style>
