<script setup>
import HGlow from "./HGlow.vue";

const props = defineProps({
  text: String,
});
</script>

<template>
  <HGlow>
    <h2
      class="text-[5rem] text-center font-bold text-pink-500 dark:drop-shadow-glow-pink-1000"
    >
      {{ props.text }}
    </h2>
  </HGlow>
</template>
