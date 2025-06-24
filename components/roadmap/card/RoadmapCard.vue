<script setup lang="ts">
const props = defineProps<{
  headings: string;
  description: string;
}>();
</script>

<template>
  <UCard variant="solid" class="w-[1200px] bg-mocha-base flex flex-col items-center text-center">
    <h2 class="text-3xl font-bold">{{ props.headings }}</h2>
    <p class="text-lg">{{ props.description }}</p>
  </UCard>
</template>
