<script setup>
import * as THREE from "three";

const props = defineProps({
  size: {
    type: Array,
    default: () => [0, 0], //width, height
  },
  alpha: Boolean,
});

const canvas = document.querySelector("#bg");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: props.alpha,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(props.size.at(0), props.size.at(1));
</script>

<template>
  <canvas id="bg">
    <slot />
  </canvas>
</template>
