<script setup></script>

<template>
  <section>
    <TresCanvas ref="cameraRef" alpha window-size>
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <TresAmbientLight :intensity="1" />
      <TresPointLight :intensity="100" :position="[0, 5, 0]" />
      <ScrollControls :html-scroll="true" :smooth-scroll="0.1" />
      <Suspense>
        <NyaNyaWizard />
      </Suspense>
    </TresCanvas>
    <section class="w-1/2 px-24 pt-10">
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
      var(--color-latte-secondary), var(--color-latte-lavender)
    );
}
</style>
