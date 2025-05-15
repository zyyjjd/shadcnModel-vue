<template>
    <ClientOnly>
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
            <!-- <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            /> -->
            <slot name="content"/>
          </CardItem>
          <div class="mt-20 flex items-center justify-end">
            <!-- <CardItem
              :translate-z="20"
              as="a"
              href="https://rahulv.dev"
              target="__blank"
              class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              <slot name="link"/>
            </CardItem> -->
            <CardItem
                v-if="$slots.button"
                :translate-z="20"
                as="button"
            >
                <slot name="button"/>
                <!-- <InteractiveHoverButton @click="onClick" :text="'开始'"/> -->
            </CardItem>
           
          </div>
        </CardBody>
      </CardContainer>
    </ClientOnly>
  </template>
  
  <script setup lang="ts">
  import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
  import {cn} from "@/lib/utils";

  const {cardClass} = defineProps<{
    cardClass?: string;
  }>();
   
  </script>