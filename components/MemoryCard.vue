<script setup>
const props = defineProps({
  img: String,
  description: String,
});
</script>

<template>
  <UCard class="m-1">
    <template #header>
      <img :src="props.img" width="320" height="320" class="rounded-lg" />
    </template>

    <div>
      <p>{{ props.description }}</p>
    </div>

    <template #footer>
      <P>See More!</P>
    </template>
  </UCard>
</template>
