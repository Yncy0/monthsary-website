<template>
  <section
    id="memories"
    class="flex flex-col min-w-full items-center gap-10 pb-20 pt-10"
  >
    <div>
      <span class="dark:drop-shadow-glow-pink-1000">
        <h2
          class="text-[5rem] font-bold text-pink-500 text-center dark:drop-shadow-glow-pink-1000"
        >
          Memories
        </h2>
      </span>
      <p>
        Here lies our precious memories that we did together, from the beginning
        until now.
      </p>
    </div>
    <div class="w-[1000px]">
      <AppCarousel />
    </div>
  </section>
</template>
