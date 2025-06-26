<script setup lang="ts">
// const user = useSupabaseUser();
const items = ref([]);

onMounted(async () => {
  items.value = getMockRoadmap()
})
</script>

<template>
  <main class="mt-32">
    <section class="text-center">
      <h1 class="text-6xl text-latte-primary font-bold">Roadmap</h1>
      <p class="text-lg">A roadmap of our milestones and accomplishments as partner</p>
    </section>
    <RoadmapCard v-for="item in items" :headings="item.header" :description="item.body" class="mt-10"/>
  </main>
</template>
