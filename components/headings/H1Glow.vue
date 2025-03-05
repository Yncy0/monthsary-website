<script setup>
import HGlow from "./HGlow.vue";

const props = defineProps({
  text: String,
  textSize: String,
  textAlign: String,
});
</script>

<template>
  <HGlow>
    <h1
      class="text-[5rem] text-center font-bold text-pink-500 dark:drop-shadow-glow-pink-1000"
      :style="{ fontSize: props.textSize, textAlign: props.textAlign }"
    >
      {{ props.text }}
    </h1>
  </HGlow>
</template>
