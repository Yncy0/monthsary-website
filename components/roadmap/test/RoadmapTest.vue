<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const items = ref([]);
const boxes = [];

/*
NOTE: Let the declaration of the variables be like that
Might migrate to TypeScript later 
*/

let renderer;
let camera;
let scene;
let light;

let INTERSECTED;

let raycast;
const pointer = new THREE.Vector2();

let controls;

onMounted(() => {
  items.value = getMockRoadmap();

  init();

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);

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
  camera.position.z = 5;

  light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, 1, 1).normalize();
  scene.add(camera, light);

  const canvas = document.querySelector("#bg");
  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  raycast = new THREE.Raycaster();

  items.value.forEach(addMesh);
}

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

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  camera.updateMatrixWorld();

  raycast.setFromCamera(pointer, camera);

  const intersects = raycast.intersectObjects(boxes, false);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      if (INTERSECTED)
        INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex(0x0ff000);
    }
  } else {
    if (INTERSECTED) INTERSECTED.material.emissive.getHex();

    INTERSECTED = null;
  }

  renderer.render(scene, camera);
}
</script>

<template>
  <section>
    <canvas id="bg" class="w-full h-full block" />
  </section>
</template>
