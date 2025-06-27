<script setup>
import * as THREE from "three"

// const user = useSupabaseUser();
const items = ref([]);

let scene, camera, light,  renderer

onMounted(async () => {
  items.value = getMockRoadmap();

  init()
  animate()
  document.body.onScroll = moveCamera;
});

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 12)

  light = new THREE.AmbientLight(0xffffff, 1)

  scene.add(camera, light)

  const canvas = document.querySelector("#bg")
  renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true})
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  generateStars(scene)
}

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

function moveCamera() {
  const t = document.getBoundingClientRect().top

  camera.position.y = t * 0.017
}
</script>

<template>
  <section class="mt-32">
    <canvas id="bg"/>
    <section class="text-center">
      <h1 class="text-6xl text-latte-primary font-bold">Roadmap</h1>
      <p class="text-lg">
        A roadmap of our milestones and accomplishments as partner
      </p>
    </section>
    <section>
      <RoadmapCard
        v-for="(item, index) in items"
        :key="index"
        :headings="item.header"
        :description="item.body"
        class="mt-10"
      />
    </section>
  </section>
</template>

<style scoped>
canvas {
  top: 0;
  left: 0;
  position: fixed;
}
</style>
