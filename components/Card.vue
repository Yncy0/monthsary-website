<script setup>
const props = defineProps({
  header: String,
  body: String,
});
</script>

<template>
  <UCard class="w-3xl">
    <template #header>
      <h1>{{ props.header }}</h1>
    </template>
    <div>
      <p>{{ props.body }}</p>
    </div>
  </UCard>
</template>
