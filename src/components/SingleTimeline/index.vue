<template>
  <div class="h-fit w-full">
    <Timeline :items="data" :title="title" :titleClass="titleClass" :containerClass="containerClass">
      <template v-for="({ id, desc }) in data" :key="id + 'template'" #[id]>
        <div :class="cn('mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200', itemClass)">
          {{ desc }}
        </div>
      </template>
    </Timeline>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils"

const { title, data, titleClass, itemClass, containerClass } = defineProps<{ data: { id: string; label: string; desc: string }[], title: string, titleClass?: string, itemClass?: string, containerClass?: string }>();

</script>
