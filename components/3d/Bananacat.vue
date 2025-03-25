<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import useThreePerspectiveCamera from "~/composables/three/useThreeCamera";
import useThreeRender from "~/composables/three/useThreeRenderer";
import {
  useThreeAmbientLight,
  useThreePointLight,
} from "~/composables/three/useThreeLight";

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = useThreePerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
    [0, 0, 5]
  );

  const canvas = document.querySelector("#bg") as HTMLCanvasElement;
  const renderer = useThreeRender(undefined, canvas, undefined, [680, 500]);

  const pointLight = useThreePointLight(0xffffff, 10, 100, [0, 3, 3]);
  const ambientLight = useThreeAmbientLight(0xffffff);

  scene.add(pointLight, ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);

  const loader = new GLTFLoader();
  loader.load(
    "/bananacat/scene.gltf",

    function (gltf) {
      gltf.scene.scale.setScalar(3.7);
      gltf.scene.position.y = -3;

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
