<template>
    <div class='md:w-[32rem] w-64 md:h-[32rem] h-96 grid grid-rows-5 overflow-hidden rounded-2xl border border-gray-800 bg-slate-800 px-4 py-8 shadow-xl relative'>
        <Meteors class="absolute inset-0"/>
        <Text3d  class="text-4xl font-bold max-md:text-3xl"
        shadow-color="blue">
            联系我
        </Text3d>
        <div class="flex items-center gap-2 w-full h-full">
            <div class="text-white">你的名字</div>
            <IInput :modelValue="name" placeholder="你叫什么名字？" container-class="w-full max-w-sm"/>
        </div>
        <div class="flex items-center gap-2 w-full h-full">
            <div class="text-white">你的邮箱</div>
            <IInput :modelValue="email" placeholder="你叫邮箱是什么？" container-class="w-full max-w-sm"/>
        </div>
        <div class="flex items-center gap-2 w-full h-full">
            <div class="text-white">你的留言</div>
            <IInput :modelValue="message" placeholder="你想说什么？" type="textarea" container-class="w-full max-w-sm"/>
        </div>
        <div class="flex justify-end">
            <GradientButton bg-color="#000" class="text-white w-5 h-3 active:scale-95">发送</GradientButton>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import {IInput} from "@/components/ui/input";
import { GradientButton } from "@/components/ui/gradient-button";
import { Text3d } from "@/components/ui/text-3d";
import { Meteors } from "@/components/ui/meteors";

const {name,email,message} = reactive({
    name: '',
    email: '',
    message: '',
})
</script>