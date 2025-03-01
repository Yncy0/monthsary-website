<template>
  <section
    class="flex flex-row items-center justify-around min-w-full h-[720px] pt-32"
  >
    <div class="flex flex-col items-start w-[480px]">
      <span class="dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,1)]">
        <h3
          class="text-[5rem] font-bold text-pink-500 dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,1)] drop-shadow-[0px_0px_39px_rgba(255,0,123,0.9)]"
        >
          Gallery
        </h3>
      </span>
      <p class="pb-6">
        A collection of photos we took together. It contains serious, funny,
        silly, goofy, sweet, romantic photos with each other.
      </p>
      <UButton
        label="View Gallery"
        size="xl"
        icon="i-mdi-image-multiple"
        class="p-4 shadow-2xl text-white bg-pink-500"
        :block="false"
      />
    </div>
    <div class="flex flex-row">
      <img src="/assets/images/photo_booth2.jpg" class="w-[400px] -rotate-12" />
      <img
        src="/assets/images/photo_booth1.jpg"
        class="w-[400px] rotate-12 top-28 relative"
      />
    </div>
  </section>
</template>
