<!--Items for carousel, apply some items here for scalability purposes-->

<script setup lang="ts">
const items = [
  {
    img: "/img/photobooth.jpg",
    description: "This is image 1",
  },
  {
    img: "/img/ice_skate.jpg",
    description: "This is image 2",
  },
  {
    img: "/img/skyranch.jpeg",
    description: "This is image 3",
  },
  {
    img: "/img/clay_date.jpg",
    description: "This is image 4",
  },
  {
    img: "/img/coffee_date.jpg",
    description: "This is image 5",
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
