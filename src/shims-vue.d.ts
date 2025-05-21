// 声明Vue单文件组件类型
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// 全局声明Vue组合式API类型
declare global {
    import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue';
    export {
        onMounted,
        onUnmounted,
        ref,
        watch,
        nextTick
    }
}

// 声明Ref类型
declare type Ref<T> = import('vue').Ref<T>;