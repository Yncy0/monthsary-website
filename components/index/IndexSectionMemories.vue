<script setup>
import HeadingGlow from "../headings/HeadingGlow.vue";
</script>

<template>
  <section
    id="memories"
    class="flex flex-col min-w-full items-center gap-10 pb-20 pt-10"
  >
    <HeadingGlow
      :level="2"
      text="Memories"
      text-size="5rem"
      text-align="center"
    />
    <div>
      <p>
        Here lies our precious memories that we did together, from the beginning
        until now.
        <span> <a class="text-pink-500" href="/memories">See more...</a></span>
      </p>
    </div>
    <div class="w-[1000px]">
      <MemoryCarousel />
    </div>
  </section>
</template>
