<script setup>
const props = defineProps({
  text: String,
  textAlign: String,
  textSize: String,
  level: {
    type: Number,
    required: true,
    validator: (v) => [1, 2, 3, 4, 5, 6].includes(v),
  },
});

const Tag = `h${props.level}`;
</script>

<template>
  <span class="dark:drop-shadow-glow-pink-1000">
    <component
      :is="Tag"
      class="font-bold text-[5rem] text-center drop-shadow-latte-pink-900"
      :style="{ textAlign: textAlign, fontSize: textSize }"
    >
      {{ props.text }}
    </component>
  </span>
</template>
