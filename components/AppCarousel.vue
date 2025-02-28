<!--Items for carousel, apply some items here for scalability purposes-->

<script setup lang="ts">
const items = [
  {
    img: "https://picsum.photos/640/640?random=1",
    description: "This is image 1",
  },
  {
    img: "https://picsum.photos/640/640?random=2",
    description: "This is image 2",
  },
  {
    img: "https://picsum.photos/640/640?random=3",
    description: "This is image 3",
  },
  {
    img: "https://picsum.photos/640/640?random=4",
    description: "This is image 4",
  },
  {
    img: "https://picsum.photos/640/640?random=5",
    description: "This is image 5",
  },
  {
    img: "https://picsum.photos/640/640?random=6",
    description: "This is image 6",
  },
];
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
    <MemoryCard :img-src="item.img" :description="item.description" />
  </UCarousel>
</template>
