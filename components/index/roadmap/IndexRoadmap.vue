<script setup lang="ts">
const items = getMockRoadmap();
</script>

<template>
  <section
    id="roadmap"
    class="flex flex-col items-center justify-center py-10 min-w-full"
  >
    <HeadingGlow :level="2" text="Roadmap" />
    <p>Lists of accomplished goals</p>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="px-20 pt-20 w-full flex flex-col"
    >
      <IndexRoadmapStack
        :is-reversed="false"
        :img-source="item.img"
        :header="item.header"
        :body="item.body"
      />
    </div>
    <UButton
      label="See More..."
      trailing-icon="i-lucide-arrow-right"
      :block="false"
      @click="navigateTo('/roadmap')"
    />
  </section>
</template>
