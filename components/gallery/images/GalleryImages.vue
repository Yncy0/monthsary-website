<script setup lang="ts">
const user = useSupabaseUser();
const imageUrls = ref([]);

onMounted(async () => {
  const results = await useFetchImage();

  if (!user.value) {
    imageUrls.value = getMockImages();
  } else {
    imageUrls.value = results;
  }
});
</script>

<template>
  <Suspense>
    <ul class="flex flex-row flex-wrap w-full object-cover gap-2 px-24">
      <li v-for="(image, index) in imageUrls" :key="index">
        <NuxtImg
          v-if="!user"
          :src="image"
          alt="It is an image"
          class="w-64 h-96 rounded-md"
        />
        <NuxtImg
          v-if="user"
          :src="image.image_url"
          alt="It is an image"
          class="w-64 h-96 rounded-md"
        />
      </li>
    </ul>
  </Suspense>
</template>
