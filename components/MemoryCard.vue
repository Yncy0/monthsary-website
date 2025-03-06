<script setup>
const props = defineProps({
  imgSrc: String,
  header: String,
  description: String,
});
</script>

<template>
  <UCard class="m-1 h-[560px]">
    <template #header>
      <div class="flex flex-col gap-4">
        <img
          :src="props.imgSrc"
          class="rounded-lg w-[320px] h-[320px] object-cover"
        />
        <h3 class="text-pink-500 text-2xl font-bold">
          {{ props.header }}
        </h3>
      </div>
    </template>

    <div>
      <p>{{ props.description }}</p>
    </div>

    <!-- <template #footer>
      <p>See More!</p>
    </template> -->
  </UCard>
</template>
