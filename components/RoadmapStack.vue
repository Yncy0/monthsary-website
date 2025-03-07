<script setup>
import HeadingGlow from "./headings/HeadingGlow.vue";

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
  <div
    class="flex grow basis-0 flex-row justify-between gap-40"
    :style="{ flexDirection: flexDir }"
  >
    <div class="flex-1 flex">
      <div v-if="props.imgSource">
        <img :src="props.imgSource" class="w-[360px] h-[360px] rounded-lg" />
      </div>
      <div v-else class="flex-1">
        <img
          src="/assets/images/gif/quest cat.gif"
          class="w-[360px ] h-[360px] rounded-lg"
        />
      </div>
    </div>
    <USeparator orientation="vertical" class="h-full" type="solid" size="md">
      <UIcon name="i-lucide-paw-print" class="text-pink-500 size-5" />
    </USeparator>
    <div class="flex flex-col justify-center flex-1 w-[360px]">
      <HeadingGlow
        :level="3"
        :text="header"
        text-align="start"
        text-size="3rem"
      />
      <p class="text-start">{{ props.body }}</p>
    </div>
  </div>
</template>
