<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = useThreePerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
    [0, 0, 5],
  );

  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const renderer = useThreeRender(undefined, canvas, undefined, [
    window.innerWidth,
    window.innerHeight,
  ]);

  const ambientLight = useThreeAmbientLight(0xffffff, 2);
  const pointLightR = useThreePointLight(0xffffff, 200, 100, [5, 10, 10]);
  const pointLightL = useThreePointLight(0xffffff, 200, 100, [-5, 10, 10]);

  scene.add(camera, pointLightR, pointLightL, ambientLight);

  const loader = new GLTFLoader();

  // animation name: 'Armature|mixamo.com|Layer0'
  // FIXME: TOO MUCH SPAGHETTI ON THIS ONE!!!!!!
  loader.load("/nyanya/actionpose.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(0, 3, -9);

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
      "Armature|mixamo.com|Layer0",
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  loader.load("/nyanya/capoeira.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(-10, 2.5, -9);

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
      "Armature|mixamo.com|Layer0",
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  loader.load("/nyanya/hiphopdance.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(10, -7.5, -9);

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
      "Armature|mixamo.com|Layer0",
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  loader.load("/nyanya/hiphopdance1.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(-8, -7.5, -9);

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
      "Armature|mixamo.com|Layer0",
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  loader.load("/nyanya/twerk.glb", function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.position.set(10, 2.5, -9);

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
      "Armature|mixamo.com|Layer0",
    );
    const action = mixer.clipAction(clip);
    action.play();
  });

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  animate();

  //THANK YOU Fireship
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    // camera.position.z = t * -0.2;
    // camera.position.x = t * -0.002;
    camera.position.y = t * 0.017;
  }

  document.body.onscroll = moveCamera;
});
</script>

<template>
  <canvas id="canvas" class="fixed top-0 left-0 -z-10" />
</template>
