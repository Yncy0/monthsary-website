<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import useThreePerspectiveCamera from "~/composables/three/useThreeCamera";
import useThreeRender from "~/composables/three/useThreeRenderer";
import {
  useThreeAmbientLight,
  useThreePointLight,
} from "~/composables/three/useThreeLight";

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = useThreePerspectiveCamera(75, undefined, 0.1, 100, [0, 2, 5]);

  const canvas = document.querySelector("#bg") as HTMLCanvasElement;
  const renderer = useThreeRender(false, canvas, undefined, [650, 500]);

  const ambientLight = useThreeAmbientLight(0xffffff);
  const pointLight = useThreePointLight(0xffffff, 10, 100, [3, 3, 3]);

  scene.add(camera, ambientLight, pointLight);

  const loader = new GLTFLoader();

  // animation name: 'Armature|mixamo.com|Layer0'
  // FIXME: TOO MUCH SPAGHETTI ON THIS ONE!!!!!!
  loader.load("/nyanya/gangnam.glb", function (gltf) {
    scene.add(gltf.scene);

    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clips = gltf.animations;

    const clock = new THREE.Clock();

    function update() {
      mixer.update(clock.getDelta());
    }

    function animate() {
      requestAnimationFrame(animate);
      update();
    }

    animate();

    const clip = THREE.AnimationClip.findByName(
      clips,
      "Armature|mixamo.com|Layer0"
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  loader.load("/nyanya/capoeira.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(4, 0, 0);

    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clips = gltf.animations;

    const clock = new THREE.Clock();

    function update() {
      mixer.update(clock.getDelta());
    }

    function animate() {
      requestAnimationFrame(animate);
      update();
    }

    animate();

    const clip = THREE.AnimationClip.findByName(
      clips,
      "Armature|mixamo.com|Layer0"
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  loader.load("/nyanya/hiphopdance.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(-4, 0, 0);

    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clips = gltf.animations;

    const clock = new THREE.Clock();

    function update() {
      mixer.update(clock.getDelta());
    }

    function animate() {
      requestAnimationFrame(animate);
      update();
    }

    animate();

    const clip = THREE.AnimationClip.findByName(
      clips,
      "Armature|mixamo.com|Layer0"
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  loader.load("/nyanya/twerk.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(-3, -2, 0);

    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clips = gltf.animations;

    const clock = new THREE.Clock();

    function update() {
      mixer.update(clock.getDelta());
    }

    function animate() {
      requestAnimationFrame(animate);
      update();
    }

    animate();

    const clip = THREE.AnimationClip.findByName(
      clips,
      "Armature|mixamo.com|Layer0"
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <canvas id="bg" />
</template>
