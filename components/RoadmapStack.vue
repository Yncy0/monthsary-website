<script setup>
import H1Glow from "./headings/H1Glow.vue";

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
    <div v-if="props.imgSource">
      <img :src="props.imgSource" class="w-[680px] h-[560px] rounded-lg" />
    </div>
    <div v-else>
      <img
        src="/assets/images/gif/quest cat.gif"
        class="w-[680px] h-[560px] rounded-lg"
      />
    </div>
    <div class="flex flex-col justify-center">
      <H1Glow :text="header" text-size="3rem" text-align="start" />
      <p class="text-start">{{ props.body }}</p>
    </div>
  </div>
</template>
