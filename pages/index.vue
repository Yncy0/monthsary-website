<template>
  <Transition :css="false">
    <div class="flex flex-col min-w-full justify-center items-center">
      <section class="flex flex-row justify-between min-w-full h-[720px] p-9">
        <div class="flex flex-col items-start">
          <h1
            class="text-[8rem] font-bold text-start dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,0.9)] drop-shadow-[0px_0px_39px_rgba(255,0,123,0.4)]"
          >
            Happy
            <span
              class="text-pink-500 dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,0.5)] drop-shadow-[0px_0px_39px_rgba(255,0,123,0.3)]"
            >
              Monthsary!
            </span>
          </h1>
          <p class="pb-6">
            I hope you are doing well my love! Let me ask you a few questions on
            how we celebrate our monthsary.
          </p>
          <UButton
            label="Let's Get Started"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="p-4 shadow-2xl text-white bg-pink-500"
            :block="false"
          />
        </div>
        <div class="slime-catto w-[645px]">
          <img
            src="/assets/images/Catto Copy.png"
            class="dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,0.5)] drop-shadow-[0px_0px_39px_rgba(0,255,30,0.9)]"
          />
        </div>
      </section>

      <USeparator />

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
            Here lies our precious memories that we did together, from the
            beginning until now.
          </p>
        </div>
        <div class="w-[1000px]">
          <AppCarousel />
        </div>
      </section>

      <USeparator />

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
          <img
            src="/assets/images/photo_booth2.jpg"
            class="w-[400px] -rotate-12"
          />
          <img
            src="/assets/images/photo_booth1.jpg"
            class="w-[400px] rotate-12 top-28 relative"
          />
        </div>
      </section>
    </div>
  </Transition>
</template>
