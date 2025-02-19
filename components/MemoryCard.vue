<script setup>
const props = defineProps({
  headerImage: String,
  description: String,
});
</script>

<template>
  <UCard>
    <template #header>
      <img :src="{ headerImage }" alt="images for card" />
    </template>

    <div>
      <p>{{ description }}</p>
    </div>

    <template #footer> </template>
  </UCard>
</template>
