<script setup>
import useFetchImage from "~/content/useFetchImage";

const imageUrls = ref([]);

onMounted(async () => {
  const results = await useFetchImage();
  imageUrls.value = results;
});
</script>

<template>
  <Suspense>
    <ul class="flex flex-row flex-wrap w-full object-cover gap-2">
      <li v-for="image in imageUrls" :key="image.id">
        <img
          :src="image.image_url"
          alt="It is an image"
          class="w-64 h-96 rounded-md"
        />
      </li>
    </ul>
  </Suspense>
</template>
