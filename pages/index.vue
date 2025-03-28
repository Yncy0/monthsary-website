<script setup>
import {
  IndexHero,
  IndexSectionMemories,
  IndexSectionRoadmap,
} from "~/components/index";
</script>

<template>
  <Transition :css="false">
    <main class="flex flex-col min-w-full justify-center items-center">
      <IndexHero />

      <IndexSectionMemories />
      <USeparator />

      <IndexSectionRoadmap />
    </main>
  </Transition>
</template>
