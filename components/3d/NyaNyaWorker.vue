<script setup lang="ts">
import { LoopOnce } from "three";
import { useAnimations, useGLTF } from "@tresjs/cientos";

const { scene: model, animations } = await useGLTF("/nyanya/hammering.glb", {
  draco: true,
});

model.position.set(0, -2.7, -6);

// const actions = useAnimations(animations, model);
// const currentAction = ref(actions["Armature|Armature|Smash"]);

// currentAction.value.loop = LoopOnce;
// currentAction.value.play();
</script>

<template>
  <primitive :object="model" />
</template>
