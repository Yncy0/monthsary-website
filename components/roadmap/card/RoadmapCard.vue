<script setup lang="ts">
const props = defineProps<{
  headings: string;
  description: string;
}>();
</script>

<template>
  <!-- TODO: make UCard variant into solid -->
  <UCard class="w-[1200px] bg-mocha-base">
    <h2>{{ props.headings }}</h2>
    <p>{{ props.description }}</p>
  </UCard>
</template>
