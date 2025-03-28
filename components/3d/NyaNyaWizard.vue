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

  const camera = useThreePerspectiveCamera(80, undefined, 0.1, 100, [0, 0, 5]);

  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const renderer = useThreeRender(true, canvas, undefined, [750, 500]);

  const pointLight = useThreePointLight(0xffffff, 100, 100, [0, 0, 10]);
  // const pointLight2 = useThreePointLight(0xffffff, 500, 100, [0, 20, 10]);

  const ambientLight = useThreeAmbientLight(0xffffff, 2);

  scene.add(camera, pointLight, ambientLight);

  const loader = new GLTFLoader();
  loader.load(
    "/nyanya/nyanya1.glb",

    function (gltf) {
      scene.add(gltf.scene);

      gltf.scene.position.set(0, -2, 0);

      const mixer = new THREE.AnimationMixer(gltf.scene);
      const clips = gltf.animations;

      const clock = new THREE.Clock();

      function update() {
        mixer.update(clock.getDelta());
      }

      function animate() {
        requestAnimationFrame(animate);

        update();

        gltf.scene.rotation.x += 0.01;
        gltf.scene.rotation.y += 0.01;
        gltf.scene.rotation.z += 0.01;
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
  <canvas id="canvas" />
</template>
