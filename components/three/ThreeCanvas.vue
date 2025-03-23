<script setup>
import { Scene, WebGLRenderer } from "three";
import { render } from "vue";

const props = defineProps({
  alpha: Boolean,
  pixelRatio: {
    type: Number,
    default: () => window.devicePixelRatio,
  },
  size: {
    type: Array,
    default: () => [0, 0], // [width: Number, height: Number]
  },
});

//Client-side
onMounted(() => {
  const scene = new Scene();

  const renderer = new WebGLRenderer({
    canvas: document.querySelector("#bg"),
    alpha: props.alpha,
  });

  renderer.setPixelRatio(props.pixelRatio);

  //Passing index of array props.size
  //WHERE first index is width, and second index is height
  renderer.setSize(props.size.at(0), props.size.at(1));

  //Rendering loop
  function animate() {
    requestAnimationFrame(animate);

    //TODO: the render code
  }

  animate();
});
</script>

<template>
  <canvas id="bg">
    <slot />
  </canvas>
</template>
