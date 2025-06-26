<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let scene, camera, renderer;

const loader = new GLTFLoader();

onMounted(() => {
  init();
  animate();
});

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.set(0, 0, 10);

  const light = new THREE.AmbientLight(0xffffff, 1);

  scene.add(camera, light);

  const canvas = document.querySelector("#bg");
  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  loadModel("/nyanya/nyanyapuccin_sapphire.glb", ...[5, 0, 0]);
  loadModel("/nyanya/nyanyapuccin_mauve.glb", ...[7, 0, 0]);
  loadModel("/nyanya/nyanyapuccin_green.glb", ...[-5, 0, 0]);
  loadModel("/nyanya/nyanyapuccin_yellow.glb", ...[-7, 0, 0]);
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

function loadModel(url, ...pos) {
  loader.load(url, function (gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.set(pos[0], pos[1], pos[2])
  });
}
</script>

<template>
  <canvas id="bg" />
</template>

<style scoped>
canvas {
  top: 0;
  left: 0;
  position: fixed;
}
</style>
