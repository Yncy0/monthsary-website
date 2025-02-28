<script setup>
const props = defineProps({
  imgSrc: String,
  description: String,
});
</script>

<template>
  <UCard class="m-1">
    <template #header>
      <img
        :src="props.imgSrc"
        class="rounded-lg w-[320px] h-[320px] object-cover"
      />
    </template>

    <div>
      <p>{{ props.description }}</p>
    </div>

    <template #footer>
      <p>See More!</p>
    </template>
  </UCard>
</template>
