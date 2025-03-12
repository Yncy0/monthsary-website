<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

onMounted(() => {
  const scene = new THREE.Scene();

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

  const loader = new GLTFLoader();

  loader.load(
    "/model/scene.gltf",

    function (gltf) {
      scene.add(gltf.scene);
    },

    undefined,

    function (error) {
      console.error(error);
    }
  );

  const pointLight = new THREE.PointLight(0xffffff, 100, 100);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  pointLight.position.set(0, 3, 2);
  scene.add(pointLight, ambientLight);

  const pointLightHelper = new THREE.PointLightHelper(pointLight);
  scene.add(pointLightHelper);

  const controls = new OrbitControls(camera, renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <canvas id="bg" />
</template>
