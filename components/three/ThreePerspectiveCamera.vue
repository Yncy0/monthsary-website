<script setup>
import * as THREE from "three";

const props = defineProps({
  fov: Number,
  aspect: {
    type: Number,
    default: () => window.innerWidth / window.innerHeight,
  },
  near: Number,
  far: Number,
  position: {
    type: Array,
    default: () => [0, 0, 0], //x, y, z
  },
});

const camera = new THREE.PerspectiveCamera(
  props.fov,
  props.aspect,
  props.near,
  props.far
);
camera.position.set(
  props.position.at(0),
  props.position.at(1),
  props.position.at(2)
);
</script>
