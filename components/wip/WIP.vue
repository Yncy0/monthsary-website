<script setup lang="ts">
import NyaNyaWorker from "~/components/3D/NyaNyaWorker.vue";
</script>

<template>
  <TresCanvas alpha window-size>
    <TresPerspectiveCamera :fov="75" :position="[0, 0, 5]" />
    <TresAmbientLight :intensity="2" />
    <TresPointLight :intensity="100" :distance="100" :position="[0, 0, 10]" />
    <Suspense>
      <NyaNyaWorker />
    </Suspense>
  </TresCanvas>
</template>
