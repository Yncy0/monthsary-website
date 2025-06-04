<script setup lang="ts">
import * as THREE from "three";

const items = ref([]);

const scene = new THREE.Scene();

function addMesh() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x0ff00 });
  const box = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  box.position.set(x, y, z);

  scene.add(box);
}

Array(200).fill().forEach(addMesh)

onMounted(() => {
  items.value = getMockRoadmap();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 5;

  scene.add(camera);

  const canvas = document.querySelector("#bg") as HTMLCanvas;
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  function animate(){
    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(animate)
});
</script>

<template>
  <section>
    <canvas id="bg" />
  </section>
</template>
