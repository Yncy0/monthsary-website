<script setup>
import {
  IndexHero,
  IndexSectionMemories,
  IndexSectionRoadmap,
} from "~/components/index";
</script>

<template>
  <Transition :css="false">
    <div class="flex flex-col min-w-full justify-center items-center">
      <IndexHero />

      <IndexSectionMemories />
      <USeparator />

      <IndexSectionRoadmap />
    </div>
  </Transition>
</template>
