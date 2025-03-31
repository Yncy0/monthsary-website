<script setup>
import { useGetImage } from "~/content/useGetImage";

const props = defineProps({
  bucket: String,
  folder: String,
  width: Number,
  height: Number,
});

const imageUrls = ref([]);

onMounted(async () => {
  const results = await useGetImage(props.bucket, props.folder);
  imageUrls.value = results;
});
</script>

<template>
  <ul class="flex flex-row flex-wrap w-full object-cover gap-2">
    <li v-for="image in imageUrls" :key="image.name">
      <img
        :src="image.publicUrl"
        :alt="image.name"
        class="w-64 h-96 rounded-md"
        :width="props.width"
        :height="props.height"
      />
      <p>{{ image.name }}</p>
    </li>
  </ul>
</template>
