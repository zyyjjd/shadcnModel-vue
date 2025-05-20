<template>
    <!-- md:w-[32rem] w-64 md:h-[32rem] h-96   -->
    <GlowBorder class='overflow-hidden rounded-2xl border px-8 py-16 shadow-xl relative w-full'
        :color="['#0000FF', '#1E90FF', '#87CEEB']">
        <Text3d class="text-4xl font-bold max-md:text-3xl" shadow-color="#0b43bd">
            联系我
        </Text3d>
        <div class="grid gap-10 my-8 w-full">
            <div class="flex gap-2 w-full h-full">
                <div class='text-slate-600 leading-8'>你的名字</div>
                <IInput :modelValue="name" placeholder="你叫什么名字？" container-class="flex-1 z-10" />
            </div>
            <div class="flex gap-2 w-full h-full">
                <div class="text-slate-600 leading-8">你的邮箱</div>
                <IInput :modelValue="email" placeholder="你叫邮箱是什么？" container-class="flex-1 z-10" />
            </div>
            <div class="flex gap-2 w-full h-full">
                <div class="text-slate-600 leading-8">你的留言</div>
                <IInput :modelValue="message" placeholder="你想说什么？" type="textarea" container-class="flex-1 z-10" />
            </div>
        </div>
        <div class="flex justify-end w-full">
            <GradientButton bg-color="#000" class="text-white w-5 h-3 active:scale-95">发送</GradientButton>
        </div>
    </GlowBorder>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { IInput } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/gradient-button";
import { Text3d } from "@/components/ui/text-3d";
import { GlowBorder } from "@/components/ui/glow-border";
// import { Meteors } from "@/components/ui/meteors";

const { name, email, message } = reactive({
    name: '',
    email: '',
    message: '',
})
</script>