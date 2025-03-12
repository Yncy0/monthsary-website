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

  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(650, 500);
  const loader = new GLTFLoader();

  loader.load(
    "/popcat/scene.gltf",

    function (gltf) {
      gltf.scene.scale.setScalar(0.07);
      gltf.scene.position.y = -0.35;
      gltf.scene.position.z = -1.2;

      scene.add(gltf.scene);

      function animate() {
        requestAnimationFrame(animate);

        gltf.scene.rotation.y += 0.03;
      }

      animate();
    },

    undefined,

    function (error) {
      console.error(error);
    }
  );

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
