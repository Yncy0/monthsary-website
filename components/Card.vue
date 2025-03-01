<script setup>
const props = defineProps({
  header: String,
  body: String,
});
</script>

<template>
  <UCard class="w-2xl">
    <template #header>
      <span class="dark: drop-shadow-glow-pink-1000">
        <h1
          class="text-pink-500 text-[3rem] font-bold dark:drop-shadow-glow-pink-1000 drop-shadow-glow-pink-900"
        >
          {{ props.header }}
        </h1>
      </span>
    </template>
    <div>
      <p>{{ props.body }}</p>
    </div>
  </UCard>
</template>
