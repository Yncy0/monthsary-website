<script setup>
import MemoriesHero from "~/components/memories/MemoriesHero.vue";
import ImageBucket from "~/components/ImageBucket.vue";
</script>

<template>
  <main class="flex flex-col flex-wrap gap-64">
    <MemoriesHero />
    <section class="flex flex-col gap-2">
      <ImageBucket />
    </section>
  </main>
</template>
