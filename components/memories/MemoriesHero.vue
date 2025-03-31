<script setup>
import NyaNyaWizard from "../3D/NyaNyaWizard.vue";
import ImageBucket from "~/components/ImageBucket.vue";
</script>

<template>
  <section class="flex flex-col flex-wrap gap-64">
    <TresCanvas alpha window-size>
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <TresAmbientLight :intensity="2" />
      <TresPointLight :intensity="250" :position="[0, 0, 10]" />
      <Suspense>
        <NyaNyaWizard />
      </Suspense>
    </TresCanvas>
    <div class="w-1/2">
      <h1
        class="text-[5rem] text-transparent bg-clip-text bg-linear-to-tr from-indigo-500 to-pink-500 font-bold"
      >
        Memories
      </h1>
      <p>
        This page cotains images from our 520px camera. But this silly cat has a
        habit to not complete his sorcery on inserting images.
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <ImageBucket bucket="images" folder="photobooth" />
      <ImageBucket bucket="images" folder="skyranch" />
      <ImageBucket bucket="images" folder="03-30-25" />
      <ImageBucket bucket="images" folder="03-30-25-ex" />
      <ImageBucket bucket="images" folder="02-21-25" />
      <ImageBucket bucket="images" folder="02-12-25" />
      <ImageBucket bucket="images" folder="1st-moa" />
      <ImageBucket bucket="images" folder="ice-skate" />
    </div>
  </section>
</template>
