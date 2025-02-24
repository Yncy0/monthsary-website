<script setup>
const props = defineProps({
  description: String,
});
</script>

<template>
  <UCard>
    <template #header>
      <img src="/assets/images/birb.jpg" />
    </template>

    <div>
      <p>{{ props.description }}</p>
    </div>

    <template #footer> </template>
  </UCard>
</template>
