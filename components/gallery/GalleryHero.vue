<script setup></script>

<template>
  <section>
    <TresCanvas ref="cameraRef" alpha window-size>
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <TresAmbientLight :intensity="2" />
      <TresPointLight :intensity="250" :position="[0, 0, 10]" />
      <ScrollControls :htmlScroll="true" :smooth-scroll="0.1" />
      <Suspense>
        <NyaNyaWizard />
      </Suspense>
    </TresCanvas>
    <div class="w-1/2 px-24 pt-10">
      <h1
        class="text-[5rem] text-transparent bg-clip-text bg-linear-to-tr from-indigo-500 to-pink-500 font-bold"
      >
        Gallery
      </h1>
      <p>
        This page cotains images from our 520px camera. But this silly cat has a
        habit to not complete his sorcery on inserting images.
      </p>
    </div>
  </section>
</template>
