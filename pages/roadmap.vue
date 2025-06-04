<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const items = ref([]);

const scene = new THREE.Scene();

function addMesh() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x0ff000 });
  const box = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  box.position.set(x, y, z);

  scene.add(box);
}

onMounted(() => {
  items.value = getMockRoadmap();

  items.value.forEach(addMesh)

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 5;

  const light = new THREE.AmbientLight(0x000000);

  scene.add(camera, light);

  const canvas = document.querySelector("#bg") as HTMLCanvas;
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const controls = new OrbitControls(camera, renderer.domElement);

  controls.update();

  function animate() {
    renderer.render(scene, camera);

    controls.update();
  }

  renderer.setAnimationLoop(animate);
});

</script>

<template>
  <section>
    <canvas id="bg" />
  </section>
</template>
