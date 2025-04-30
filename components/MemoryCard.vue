<script setup lang="ts">
const props = defineProps<{
  imgSrc: string;
  header: string;
  description: string;
}>();
</script>

<template>
  <UCard class="m-1 h-[560px]">
    <template #header>
      <div class="flex flex-col gap-4">
        <NuxtImg
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
