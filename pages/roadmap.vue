<script setup lang="ts">
// const user = useSupabaseUser();
const items = ref([]);

onMounted(async () => {
  items.value = getMockRoadmap()
})
</script>

<template>
  <section class="flex flex-col items-center">
    <section class="text-center">
      <h1>Roadmap</h1>
      <p>A roadmap of our milestones and accomplishments as partner</p>
    </section>
    <RoadmapCard v-for="item in items" :headings="item.header" :description="item.body"/>
  </section>
</template>
