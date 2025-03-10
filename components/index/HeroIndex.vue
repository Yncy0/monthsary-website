<script setup>
import Cube from "../3d/Cube.vue";
</script>

<template>
  <section
    id="hero"
    class="flex flex-row justify-between min-w-full h-[720px] p-9 z-10"
  >
    <div class="flex flex-col items-start">
      <h1
        class="text-[8rem] text-transparent bg-linear-to-l from-violet-700 to-green-500 bg-clip-text font-bold text-start dark:drop-shadow-glow-pink-900"
      >
        Happy 2nd
        <span
          class="bg-linear-to-l from-violet-800 to-pink-500 text-transparent bg-clip-text dark:drop-shadow-glow-pink-300"
        >
          Monthsary!
        </span>
      </h1>
      <p class="pb-6">
        I hope you are doing well my love! May our relationship lasts forever.
      </p>
      <!-- <UButton
        label="Let's Get Started"
        size="xl"
        trailing-icon="i-lucide-arrow-right"
        class="p-4 shadow-2xl text-white bg-pink-500"
        :block="false"
      /> -->
    </div>

    <Cube />
  </section>
</template>
