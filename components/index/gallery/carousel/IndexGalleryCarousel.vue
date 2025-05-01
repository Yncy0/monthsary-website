<script setup>
const items = getMockMemories();
</script>

<!--Carousel Template, for more infor visit: https://ui3.nuxt.dev/components/carousel-->
<template>
  <UCarousel
    v-slot="{ item }"
    loop
    dots
    :autoplay="{ delay: 2500 }"
    :items="items"
    :ui="{ item: 'basis-1/3' }"
  >
    <IndexGalleryCard
      :img-src="item.img"
      :description="item.description"
      :header="item.header"
    />
  </UCarousel>
</template>
