<!--Items for carousel, apply some items here for scalability purposes-->

<script setup lang="ts">
const items = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
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
    <img :src="item" width="320" height="320" class="rounded-lg" />
  </UCarousel>
</template>
