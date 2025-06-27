<script setup></script>

<template>
  <section>
    <TresCanvas alpha window-size>
      <TresPerspectiveCamera :position="[0, 0, 12]" />
      <TresAmbientLight :intensity="2" />
      <TresPointLight :intensity="50" :position="[0, 5, 0]" />
      <ScrollControls :html-scroll="true" :smooth-scroll="0.1" />
      <GeneratedStars />
      <Suspense>
        <NyaNyaWizard />
      </Suspense>
    </TresCanvas>
    <section class="w-1/2 h-screen px-24 flex flex-col justify-center">
      <h1
        class="text-[6rem] text-transparent bg-clip-text heading-gradient font-bold"
      >
        Gallery
      </h1>
      <p>
        This page cotains images from our 520px camera. But this silly cat has a
        habit to not complete his sorcery on inserting images.
      </p>
    </section>
  </section>
</template>

<style scoped>
.heading-gradient {
  background-image: linear-gradient(
    to top,
    var(--color-latte-secondary),
    var(--color-latte-lavender)
  );
}
</style>
