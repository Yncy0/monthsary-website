<script setup lang="ts">
const user = useSupabaseUser();

const items = ref([]);
const isUser = ref(false);

onMounted(async () => {
  const results = await useFetchMemories();

  if (!user.value) {
    items.value = getMockGallery();
    isUser.value = false;
  } else {
    items.value = results;
    isUser.value = true;
  }
});
</script>

<template>
  <section
    id="gallery"
    class="flex flex-col min-w-full items-center gap-10 pb-20 pt-10"
  >
    <HeadingGlow
      :level="2"
      text="Memories..."
      text-size="5rem"
      text-align="center"
    />
    <div>
      <p>
        Here lies our precious memories that we did together, from the beginning
        until now.
        <span>
          <NuxtLink class="text-latte-primary" href="/gallery"
            >See more...
          </NuxtLink>
        </span>
      </p>
    </div>
    <div class="w-[1000px]">
      <IndexGalleryCarousel :items="items" :is-user="isUser" />
    </div>
  </section>
</template>
