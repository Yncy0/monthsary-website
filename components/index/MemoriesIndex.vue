<template>
  <section class="flex flex-col min-w-full items-center gap-10 pb-20 pt-5">
    <div>
      <span class="dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,1)]">
        <h2
          class="text-[5rem] font-bold text-pink-500 text-center dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,1)] drop-shadow-[0px_0px_39px_rgba(255,0,123,0.9)]"
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
