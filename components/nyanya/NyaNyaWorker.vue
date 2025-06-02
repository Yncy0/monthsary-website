<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { scene: model } = await useGLTF("/nyanya/worker.glb", {
  draco: true,
});

model.position.set(0, 2.5, -6);

const { onBeforeRender } = useLoop();

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
