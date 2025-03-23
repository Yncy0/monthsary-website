<script setup>
import { Scene } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const props = defineProps({
  url: String,
});

//Client-side
onMounted(() => {
  const scene = new Scene();

  const loader = new GLTFLoader();

  loader.load(
    props.url,

    function (gltf) {
      scene.add(gltf);
    },

    undefined,

    function (error) {
      console.error(error);
    }
  );
});
</script>

<template></template>
