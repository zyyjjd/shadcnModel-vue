<script lang="ts" setup>

interface Props {
    data: string[];
    direction?: 'left' | 'right'
}

const {data,direction = 'left'} = defineProps<Props>()

</script>

<template>
    <div class="max-w-[60rem] overflow-hidden bg-gradient-to-r from-transparent container" :direction="direction">
        <div class="flex flex-row gap-4 horizontal_scroll">
            <div class='bg-slate-600 shadow-lg shadow-black/50 rounded px-6 py-2 text-slate-50 text-center flex-shrink-0' v-for="(item) in data" :key="item">{{item}}</div>
            <div class='bg-slate-600 shadow-lg shadow-black/50 rounded px-6 py-2 text-slate-50 text-center flex-shrink-0' v-for="(item) in data" :key="item">{{item}}</div>
        </div>
    </div>
</template>

<style scoped>

.container {
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.container .horizontal_scroll {
    width: max-content;
    animation: scroll 20s linear infinite;
    animation-direction: var(--_animation-direction,forwards);
    padding-block: 1rem;
    flex-wrap: nowrap;
    animation-play-state: running;
}

.container:hover .horizontal_scroll {
    animation-play-state: paused;
}

.container[direction = 'right'] {
    --_animation-direction: reverse;
}
.container[direction = 'left'] {
    --_animation-direction: forwards;
}


@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}
</style>