<script setup>
import HeroIndex from "~/components/index/HeroIndex.vue";
import MemoriesIndex from "~/components/index/MemoriesIndex.vue";
import RoadmapIndex from "~/components/index/RoadmapIndex.vue";
</script>

<template>
  <Transition :css="false">
    <div class="flex flex-col min-w-full justify-center items-center">
      <HeroIndex />

      <MemoriesIndex />
      <USeparator />

      <RoadmapIndex />
    </div>
  </Transition>
</template>
