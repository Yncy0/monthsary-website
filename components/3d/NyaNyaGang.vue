<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import useThreePerspectiveCamera from "~/composables/three/useThreeCamera";
import useThreeRender from "~/composables/three/useThreeRenderer";
import {
  useThreeAmbientLight,
  useThreeDirectionalLight,
  useThreePointLight,
} from "~/composables/three/useThreeLight";

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = useThreePerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
    [0, 2, 5]
  );

  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const renderer = useThreeRender(undefined, canvas, undefined, [
    window.innerWidth,
    window.innerHeight,
  ]);

  const ambientLight = useThreeAmbientLight(0xffffff, 2);
  const pointLightR = useThreePointLight(0xffffff, 100, 100, [5, 10, 10]);
  const pointLightL = useThreePointLight(0xffffff, 100, 100, [-5, 10, 10]);

  scene.add(camera, pointLightR, pointLightL, ambientLight);

  const loader = new GLTFLoader();

  // animation name: 'Armature|mixamo.com|Layer0'
  // FIXME: TOO MUCH SPAGHETTI ON THIS ONE!!!!!!
  loader.load("/nyanya/actionpose.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(0, 4, -9);

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

    gltf.scene.position.set(-10, 3.5, -9);

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

    gltf.scene.position.set(10, -5.5, -9);

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

  loader.load("/nyanya/hiphopdance1.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(-8, -5.5, -9);

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

    gltf.scene.position.set(10, 3.5, -9);

    gltf.scene.rotation.set(0, 185, 0);

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
  <canvas class="fixed top-0 left-0 -z-10" id="canvas" />
</template>
