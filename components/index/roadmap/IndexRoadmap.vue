<script setup lang="ts">
const user = useSupabaseUser();

const items = ref([]);

onMounted(async () => {
  const results = await useFetchRoadmap();

  if (!user.value) {
    items.value = getMockRoadmap();
  } else {
    items.value = results;
  }
});
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
        v-if="!user"
        :is-reversed="evenOrOdd(index)"
        :img-source="item.img"
        :header="item.header"
        :body="item.body"
      />
      <IndexRoadmapStack
        v-if="user"
        :is-reversed="evenOrOdd(index)"
        :img-source="item.images.image_url"
        :header="item.header"
        :body="item.body"
      />
    </div>
    <UButton
      label="See More..."
      trailing-icon="i-lucide-arrow-right"
      variant="subtle"
      :block="false"
      @click="navigateTo('/roadmap')"
    />
  </section>
</template>
