<script setup>
import H2Glow from "../headings/H2Glow.vue";
</script>

<template>
  <section
    id="memories"
    class="flex flex-col min-w-full items-center gap-10 pb-20 pt-10"
  >
    <div>
      <H2Glow text="Memories" />

      <p>
        Here lies our precious memories that we did together, from the beginning
        until now.
      </p>
    </div>
    <div class="w-[1000px]">
      <MemoryCarousel />
    </div>
  </section>
</template>
