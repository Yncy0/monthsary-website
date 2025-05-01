<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { scene: model } = await useGLTF("/nyanya/nyanya1.glb", {
  draco: true,
});
const { onBeforeRender } = useLoop();

model.position.set(5, 1, -8);

onBeforeRender(() => {
  if (model) {
    model.rotation.x += 0.01;
    model.rotation.y += 0.01;
    model.rotation.z += 0.01;
  }
});
</script>

<template>
  <primitive :object="model" />
</template>
