<script setup>
//TODO: Put it on a separate file
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

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#three"),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(500, 500);

  //Init shapes aka GEOMETRY

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  renderer.render(scene, camera);
});
</script>

<template>
  <section
    id="hero"
    class="flex flex-row justify-between min-w-full h-[720px] p-9 z-10"
  >
    <div class="flex flex-col items-start">
      <h1
        class="text-[8rem] text-transparent bg-linear-to-l from-violet-700 to-green-500 bg-clip-text font-bold text-start dark:drop-shadow-glow-pink-900"
      >
        Happy 2nd
        <span
          class="bg-linear-to-l from-violet-800 to-pink-500 text-transparent bg-clip-text dark:drop-shadow-glow-pink-300"
        >
          Monthsary!
        </span>
      </h1>
      <p class="pb-6">
        I hope you are doing well my love! May our relationship lasts forever.
      </p>
      <!-- <UButton
        label="Let's Get Started"
        size="xl"
        trailing-icon="i-lucide-arrow-right"
        class="p-4 shadow-2xl text-white bg-pink-500"
        :block="false"
      /> -->
    </div>
    <canvas id="three"></canvas>
    <!-- <div class="w-[645px]">
        <img
        src="/assets/images/gif/Catto(1) Copy.gif"
        class="dark:drop-shadow-glow-pink-500"
      />
      </div> -->
  </section>
</template>
