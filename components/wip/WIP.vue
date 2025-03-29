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
  camera.lookAt(0, 0, 0);

  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const renderer = useThreeRender(true, canvas, undefined, [
    window.innerWidth,
    window.innerHeight,
  ]);

  const pointLight = useThreePointLight(0xffffff, 100, 100, [0, 0, 10]);

  const ambientLight = useThreeAmbientLight(0xffffff, 2);

  scene.add(camera, pointLight, ambientLight);

  const loader = new GLTFLoader();
  loader.load(
    "/nyanya/hammering.glb",

    function (gltf) {
      scene.add(gltf.scene);

      const mixer = new THREE.AnimationMixer(gltf.scene);
      const clips = gltf.animations;

      gltf.scene.scale.setScalar(0.7);
      gltf.scene.position.set(-5, -2.5, -1);
      gltf.scene.rotateY(45.5);

      const clock = new THREE.Clock();

      function update() {
        mixer.update(clock.getDelta());
      }

      function animate() {
        requestAnimationFrame(animate);
        update;
      }

      animate();

      const clip = THREE.AnimationClip.findByName(
        clips,
        "Armature|mixamo.com|Layer0"
      );
      const action = mixer.clipAction(clip);
      action.play();
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
