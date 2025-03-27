<script setup>
import NyaNyaGang from "../3D/NyaNyaGang.vue";
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center min-w-full h-[720px] p-9 mb-44"
  >
    <h1
      class="text-[6rem] text-transparent bg-linear-to-l from-violet-700 to-green-500 bg-clip-text font-bold text-start dark:drop-shadow-glow-pink-900"
    >
      Happy 3rd
      <span
        class="bg-linear-to-l from-violet-800 to-pink-500 text-transparent bg-clip-text dark:drop-shadow-glow-pink-300"
      >
        Monthsary!
      </span>
    </h1>
    <p class="pb-6 text-2xl">
      I hope you are doing well my love! May our relationship lasts forever.
    </p>
    <UButton
      label="Let's Get Started"
      size="sm"
      trailing-icon="i-lucide-arrow-right"
      class="px-4 py-2 shadow-2xl text-white bg-pink-500 hover:bg-pink-600"
      :block="false"
    />

    <NyaNyaGang />
  </section>
</template>
