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
  <div class="flex justify-between" :style="{ flexDirection: flexDir }">
    <img :src="props.imgSource" class="w-[560px] h-[560px] rounded-lg" />
    <Card :header="props.header" :body="props.body" />
  </div>
</template>
