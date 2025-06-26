<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let scene, camera, renderer;

const loader = new GLTFLoader();

onMounted(() => {
  init();
  animate();

  document.body.onscroll = moveCamera;
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

  const light = new THREE.AmbientLight(0xffffff, 2);
  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(0, 5, 0);

  scene.add(camera, light, dirLight);

  const canvas = document.querySelector("#bg");
  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // call loadModel() manually **cannot loop it due to JSON error
  loadModel("/nyanya/nyanyapuccin_sapphire.glb", ...[10, 4, 0]);
  loadModel("/nyanya/nyanyapuccin_mauve.glb", ...[7, 0, 0]);
  loadModel("/nyanya/nyanyapuccin_pink.glb", ...[0, -3, 0]);
  loadModel("/nyanya/nyanyapuccin_green.glb", ...[-7, 0, 0]);
  loadModel("/nyanya/nyanyapuccin_yellow.glb", ...[-10, 4, 0]);
}

function loadModel(url, ...pos) {
  loader.load(url, function (gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.set(pos[0], pos[1], pos[2]);

    const randomize = THREE.MathUtils.randFloat(-0.001, 0.001)

    function animate() {
      requestAnimationFrame(animate);

      gltf.scene.rotation.x += randomize;
      gltf.scene.rotation.y += randomize;
      gltf.scene.rotation.z += randomize;
    }
    animate();
  });
}

// THANK YOU Fireship
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  // camera.position.z = t * -0.2;
  // camera.position.x = t * -0.002;
  camera.position.y = t * 0.017;
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
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
