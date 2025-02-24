<script setup>
const props = defineProps({
  imgSrc: String,
  description: String,
});
</script>

<template>
  <UCard class="m-1">
    <template #header>
      <img :src="props.imgSrc" width="320" height="320" class="rounded-lg" />
    </template>

    <div>
      <p>{{ props.description }}</p>
    </div>

    <template #footer>
      <p>See More!</p>
    </template>
  </UCard>
</template>
