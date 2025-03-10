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
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    console.log("Being called");

    renderer.render(scene, camera);
  }

  cube.scale.x = 2.0;
  cube.scale.y = 2.0;
  cube.scale.z = 2.0;

  animate();
});
</script>

<template>
  <canvas id="cube"></canvas>
</template>
