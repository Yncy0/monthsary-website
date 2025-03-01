<template>
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
        I hope you are doing well my love! Let me ask you a few questions on how
        we celebrate our monthsary.
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
        src="/assets/images/gif/Catto(1) Copy.gif"
        class="dark:drop-shadow-[0px_0px_39px_rgba(255,0,123,0.5)] drop-shadow-[0px_0px_39px_rgba(0,255,30,0.9)]"
      />
    </div>
  </section>
</template>
