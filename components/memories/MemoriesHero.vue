<script setup>
import NyaNyaWizard from "../3D/NyaNyaWizard.vue";
import { useGetImage } from "~/content/useGetImage";

const imageUrls = ref([]);

onMounted(async () => {
  const results = await useGetImage();
  imageUrls.value = results;
});
</script>

<template>
  <section>
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

    <ul>
      <li v-for="image in imageUrls" :key="image.name">
        <img :src="image.publicUrl" :alt="image.name" />
        <p>{{ image.name }}</p>
      </li>
    </ul>
  </section>
</template>
