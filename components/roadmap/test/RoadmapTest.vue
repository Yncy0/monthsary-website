<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const items = ref([]);

onMounted(() => {
  items.value = getMockRoadmap();
  const scene = new THREE.Scene();

  // Mesh
  function addMesh() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0ff000 });
    const box = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(20));

    box.position.set(x, y, z);

    scene.add(box);
  }
  items.value.forEach(addMesh);


  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 5;

  // Lighting
  const light = new THREE.AmbientLight(0xffffff);

  scene.add(camera, light);

  // Canvas
  const canvas = document.querySelector("#bg") as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

    // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  controls.update();

  // Raycast
  const raycast = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  window.addEventListener("pointermove", onPointerMove);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    raycast.setFromCamera(pointer, camera);

    const intersects = raycast.intersectObjects(scene.children, false);
   

    if (intersects.length > 0) {
      intersects[0].object.material.color.set(0xffffff);
    }
  }

  animate();
});
</script>

<template>
  <section>
    <canvas id="bg" class="w-full h-full block" />
  </section>
</template>
