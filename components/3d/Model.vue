<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

onMounted(() => {
  const scene = new THREE.Scene();

  const loader = new GLTFLoader();

  loader.load(
    "/model/scene.gltf",
    function (gltf) {
      scene.add(gltf.scene);
    },

    function (error) {
      console.error(error);
    }
  );

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  scene.add(camera);

  const canvas = document.querySelector("#bg");
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(750, 500);

  renderer.render(scene, camera);
});
</script>

<template>
  <canvas id="bg" />
</template>
