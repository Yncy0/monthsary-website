<script setup>
import NyaNyaGang from "~/components/3d/NyaNyaGang.vue";
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center min-w-full h-[720px] p-9 mb-44"
  >
    <NyaNyaGang />
    <h1
      class="text-[6rem] text-transparent bg-linear-to-l from-violet-700 to-green-500 bg-clip-text font-bold text-start dark:drop-shadow-glow-pink-900"
    >
      Happy 4th
      <span
        class="bg-linear-to-l from-violet-800 to-pink-500 text-transparent bg-clip-text dark:drop-shadow-glow-pink-300"
      >
        Monthsary!
      </span>
    </h1>
    <p class="pb-6 text-2xl">
      I hope you are doing well my love! May our relationship lasts forever.
    </p>
    <ModalAsk />
  </section>
</template>
