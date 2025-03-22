<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const props = defineProps({
  gltf: String,
});

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load(
  props.gltf,

  function (gltf) {
    scene.add(gltf.scene);
  },

  undefined,

  function (error) {
    console.error(error);
  }
);
</script>
