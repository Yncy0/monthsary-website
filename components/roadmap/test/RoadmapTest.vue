<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const items = ref([]);
const boxes: THREE.Mesh[] = [];

onMounted(() => {
  items.value = getMockRoadmap();

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.z = 5;

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, 1, 1).normalize();
  scene.add(camera, light);

  const canvas = document.querySelector("#bg") as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const raycast = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);

  function addMesh() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0ff000 });
    const box = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(10));

    box.position.set(x, y, z);

    scene.add(box);
    boxes.push(box);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onPointerMove(event: PointerEvent) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  let currentIntersect: THREE.Object3D | null = null;

  function animate() {
    requestAnimationFrame(animate);

    raycast.setFromCamera(pointer, camera);
    const intersects = raycast.intersectObjects(boxes, false);

    if (intersects.length > 0) {
      const firstHit = intersects[0].object;
      if (firstHit !== currentIntersect) {
        if (currentIntersect) {
          // Reset previous
          const mat = currentIntersect.material as THREE.MeshStandardMaterial;
          mat.color.set(0x0ff000);
          currentIntersect.scale.set(1, 1, 1);
        }

        // Set new
        currentIntersect = firstHit;
        const mat = currentIntersect.material as THREE.MeshStandardMaterial;
        mat.color.set(0xffffff);
        currentIntersect.scale.set(1.2, 1.2, 1.2);
      }
    } else {
      if (currentIntersect) {
        // Clear highlight when nothing is hit
        const mat = currentIntersect.material as THREE.MeshStandardMaterial;
        mat.color.set(0x0ff000);
        currentIntersect.scale.set(1, 1, 1);
        currentIntersect = null;
      }
    }

    controls.update();
    renderer.render(scene, camera);
  }

  items.value.forEach(addMesh);
  animate();
});
</script>

<template>
  <section>
    <canvas id="bg" class="w-full h-full block" />
  </section>
</template>
