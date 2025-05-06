<script setup lang="ts">
const props = defineProps<{
  isReversed: boolean;
  imgSource: string;
  header: string;
  body: string;
}>();

const flexDir = ref(props.isReversed ? "row-reverse" : "row");
</script>

<template>
  <div
    class="flex grow basis-0 flex-row justify-between gap-40"
    :style="{ flexDirection: flexDir }"
  >
    <div class="flex-1 flex items-center size-[520px]">
      <NuxtImg
        v-if="props.imgSource"
        :src="props.imgSource"
        class="size-[360px] rounded-lg"
      />
      <NuxtImg
        v-else
        src="/assets/images/gif/quest cat.gif"
        class="size-[360px] rounded-lg flex-1"
      />
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
