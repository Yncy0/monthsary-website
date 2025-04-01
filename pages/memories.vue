<script setup>
import MemoriesHero from "~/components/memories/MemoriesHero.vue";
import ImageBucket from "~/components/ImageBucket.vue";
</script>

<template>
  <main class="flex flex-col flex-wrap gap-64">
    <MemoriesHero />
    <section class="flex flex-col gap-2">
      <ImageBucket bucket="images" folder="photobooth" />
      <ImageBucket bucket="images" folder="skyranch" />
      <ImageBucket bucket="images" folder="03-30-25" />
      <ImageBucket bucket="images" folder="03-30-25-ex" />
      <ImageBucket bucket="images" folder="02-21-25" />
      <ImageBucket bucket="images" folder="02-12-25" />
      <ImageBucket bucket="images" folder="1st-moa" />
      <ImageBucket bucket="images" folder="ice-skate" />
    </section>
  </main>
</template>
