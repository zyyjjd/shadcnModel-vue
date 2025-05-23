<script lang="ts" setup>
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    const scroll = document.querySelector('.horizontal_scroll');
    const scrollArray = Array.from(scroll?.children as HTMLCollectionOf<HTMLElement>);
    scrollArray.forEach(child => {
        const clone = child.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true')
        scroll?.appendChild(clone);
    });
})

</script>


<template>
    <div class="max-w-[40rem] overflow-hidden bg-gradient-to-r from-transparent container">
        <div class="flex flex-row gap-2 horizontal_scroll">
            <div
                class='bg-slate-600 shadow-lg shadow-slate-600/50 rounded w-28 py-2 text-slate-50 text-center flex-shrink-0'>
                html</div>
            <div
                class='bg-slate-600 shadow-lg shadow-slate-600/50 rounded w-28 py-2 text-slate-50 text-center flex-shrink-0'>
                css</div>
            <div
                class='bg-slate-600 shadow-lg shadow-slate-600/50 rounded w-28 py-2 text-slate-50 text-center flex-shrink-0'>
                javaScript</div>
            <div
                class='bg-slate-600 shadow-lg shadow-slate-600/50 rounded w-28 py-2 text-slate-50 text-center flex-shrink-0'>
                typeScript</div>
            <div
                class='bg-slate-600 shadow-lg shadow-slate-600/50 rounded w-28 py-2 text-slate-50 text-center flex-shrink-0'>
                node</div>
            <div
                class='bg-slate-600 shadow-lg shadow-slate-600/50 rounded w-28 py-2 text-slate-50 text-center flex-shrink-0'>
                mysql</div>
            <div
                class='bg-slate-600 shadow-lg shadow-slate-600/50 rounded w-28 py-2 text-slate-50 text-center flex-shrink-0'>
                docker</div>
        </div>

    </div>
</template>

<style scoped>
.container {
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.horizontal_scroll {
    animation: scroll 2s linear infinite;
}

@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}
</style>