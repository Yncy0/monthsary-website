<script setup>
const props = defineProps({
  isReversed: Boolean,
  imgSource: String,
  header: String,
  body: String,
});

const flexDir = ref(props.isReversed ? "row-reverse" : "row");
</script>

<template>
  <div class="flex gap-36" :style="{ flexDirection: flexDir }">
    <img :src="props.imgSource" class="w-[680px] h-[560px] rounded-lg" />
    <!-- <Card :header="props.header" :body="props.body" /> -->
    <div class="flex flex-col justify-center">
      <span class="dark: drop-shadow-glow-pink-1000">
        <h1
          class="text-pink-500 text-[3rem] font-bold dark:drop-shadow-glow-pink-1000 drop-shadow-glow-pink-900"
        >
          {{ props.header }}
        </h1>
      </span>
      <p>{{ props.body }}</p>
    </div>
  </div>
</template>
