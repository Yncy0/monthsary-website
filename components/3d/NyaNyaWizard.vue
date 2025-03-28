<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

import useThreePerspectiveCamera from "~/composables/three/useThreeCamera";
import {
  useThreeAmbientLight,
  useThreePointLight,
} from "~/composables/three/useThreeLight";
import useThreeRender from "~/composables/three/useThreeRenderer";

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = useThreePerspectiveCamera(100, undefined, 0.1, 100, [0, 0, 5]);

  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const renderer = useThreeRender(true, canvas, undefined, [
    window.innerWidth,
    window.innerHeight,
  ]);

  const pointLight = useThreePointLight(0xffffff, 100, 100, [0, 0, 10]);
  // const pointLight2 = useThreePointLight(0xffffff, 500, 100, [0, 20, 10]);

  const ambientLight = useThreeAmbientLight(0xffffff, 2);

  scene.add(camera, pointLight, ambientLight);

  const loader = new GLTFLoader();
  loader.load(
    "/nyanya/nyanya1.glb",

    function (gltf) {
      scene.add(gltf.scene);

      gltf.scene.position.set(7, 2, -2);

      function animate() {
        requestAnimationFrame(animate);

        gltf.scene.rotation.x += 0.01;
        gltf.scene.rotation.y += 0.01;
        gltf.scene.rotation.z += 0.01;
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

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <canvas class="fixed top-0 left-0" id="canvas" />
</template>
