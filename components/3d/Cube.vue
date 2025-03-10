<!--TODO: Refactor it I guess because it feels a spaghetti code-->

<script setup>
import * as THREE from "three";

//Make it run on Client only by putting onMounted()
onMounted(() => {
  //Init scene
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  scene.add(camera);

  const canvas = document.querySelector("#cube");
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(750, 500);

  //Init shapes aka GEOMETRY
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0xff6347,
  });
  const cube = new THREE.Mesh(geometry, material);

  cube.scale.x = 2.0;
  cube.scale.y = 2.0;
  cube.scale.z = 2.0;

  scene.add(cube);

  //Lighting of the 3D Canvas
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(0.3, 2, 1);

  const ambientLight = new THREE.AmbientLight(0xfffff);
  scene.add(pointLight, ambientLight);

  // const lightHelper = new THREE.PointLightHelper(pointLight);
  // scene.add(lightHelper);

  //Animations of the shape
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <canvas id="cube"></canvas>
</template>
