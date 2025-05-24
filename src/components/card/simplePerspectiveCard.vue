<template>
      <CardContainer>
        <CardBody
          :class="cn(
            'group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[40rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]',
            cardClass
            )"
        >
        <!-- 标题 -->
          <CardItem
            :translate-z="50"
            class="text-xl font-bold max-w-full text-neutral-600 dark:text-white"
          >
           <slot name="title"/>
          </CardItem>
          <!-- 描述 -->
          <CardItem
            v-if="$slots.desc"
            as="p"
            translate-z="60"
            class="mt-2 max-w-full text-sm text-neutral-500 dark:text-neutral-300"
          >
           <slot name="desc"/>
          </CardItem>
          <!-- 内容 -->
          <CardItem
            :translate-z="100"
            class="mt-4 w-full"
          >
            <slot name="content"/>
          </CardItem>
          <div class="mt-20 flex items-center justify-end">
            <CardItem
                v-if="$slots.button"
                :translate-z="20"
                as="button"
            >
                <slot name="button"/>
            </CardItem>
           
          </div>
        </CardBody>
      </CardContainer>
  </template>
  
  <script setup lang="ts">
  import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
  import {cn} from "@/lib/utils";

  const {cardClass} = defineProps<{
    cardClass?: string;
  }>();
   
  </script>