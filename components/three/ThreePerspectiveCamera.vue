<script setup>
import { PerspectiveCamera } from "three";

const props = defineProps({
  fov: Number,
  aspect: {
    type: Number,
    default: () => window.innerWidth / window.innerHeight,
  },
  near: Number,
  far: Number,
  lookAt: {
    type: Array,
    default: () => [0, 0, 0], //[x: Number, y: Number: z: Number]
  },
  position: {
    type: Array,
    default: () => [0, 0, 0], //[x: Number, y: Number: z: Number]
  },
});

//Client-side
onMounted(() => {
  const camera = new PerspectiveCamera(
    props.fov,
    props.aspect,
    props.near,
    props.far
  );

  camera.position.set(
    props.position.at(0),
    props.position.at(1),
    props.position.at(2)
  );

  camera.lookAt(props.lookAt(0), props.lookAt(1), props.lookAt(2));
});
</script>

<template></template>
