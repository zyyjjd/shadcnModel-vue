<template>
    <div class="h-fit w-full">
      <Timeline
        :items="data"
        title="Work experience"
      >
        <template
          v-for="({id,desc}) in data"
          :key="id + 'template'"
          #[id]
        >
          <div class="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {{ desc }}
          </div>
        </template>
      </Timeline>
    </div>
  </template>
  
  <script setup lang="ts">
import { Timeline } from "@/components/ui/timeline";

  const data = [
    {
      id: "1",
      label: "2020.10 - 2021.04",
      desc:'just a test'
    },
    {
      id: "2",
      label: "2021.10 - today",
      desc:"just to enbo"
    },
 
  ];
  </script>