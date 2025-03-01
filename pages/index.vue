<script setup>
import HeroIndex from "~/components/index/HeroIndex.vue";
import MemoriesIndex from "~/components/index/MemoriesIndex.vue";
</script>

<template>
  <Transition :css="false">
    <div class="flex flex-col min-w-full justify-center items-center">
      <HeroIndex />
      <USeparator />

      <MemoriesIndex />
      <USeparator />
    </div>
  </Transition>
</template>
