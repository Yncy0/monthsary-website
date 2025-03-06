<script setup>
import H3Glow from "./headings/H3Glow.vue";

const props = defineProps({
  isReversed: Boolean,
  imgSource: String,
  header: String,
  body: String,
  status: String,
});

const flexDir = ref(props.isReversed ? "row-reverse" : "row");
</script>

<template>
  <UCard>
    <div
      class="flex flex-row justify-between gap-10"
      :style="{ flexDirection: flexDir }"
    >
      <div v-if="props.imgSource">
        <img :src="props.imgSource" class="w-[680px] h-[560px] rounded-lg" />
      </div>
      <div v-else>
        <img
          src="/assets/images/gif/quest cat.gif"
          class="w-[520px] h-[520px] rounded-lg"
        />
      </div>
      <div class="flex flex-col justify-center">
        <UBadge variant="outline" class="w-20 flex">{{ props.status }}</UBadge>
        <H3Glow :text="header" text-size="3rem" text-align="start" />
        <p class="text-start">{{ props.body }}</p>
      </div>
    </div>
  </UCard>
</template>
