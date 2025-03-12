<!--WARNING: Spaghetti code since it is only for test purposes-->
<!--SPAGHETTI SCRIPT-->
<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
  const geometryCube = new THREE.BoxGeometry(1, 1, 1);
  const geometryCube2 = new THREE.BoxGeometry(1, 1, 1);
  const geometryCube3 = new THREE.BoxGeometry(1, 1, 1);
  const geometryCube4 = new THREE.BoxGeometry(1, 1, 1);
  const geometryCube5 = new THREE.BoxGeometry(1, 1, 1);

  const materialCube = new THREE.MeshStandardMaterial({
    color: 0xbcffe3,
  });
  const materialCube2 = new THREE.MeshStandardMaterial({
    color: 0x7f01c2,
  });
  const materialCube3 = new THREE.MeshStandardMaterial({
    color: 0xf22f91,
  });
  const materialCube4 = new THREE.MeshStandardMaterial({
    color: 0x58cef2,
  });
  const materialCube5 = new THREE.MeshStandardMaterial({
    color: 0x420aac,
  });

  const cube = new THREE.Mesh(geometryCube, materialCube);
  const cube2 = new THREE.Mesh(geometryCube2, materialCube2);
  const cube3 = new THREE.Mesh(geometryCube3, materialCube3);
  const cube4 = new THREE.Mesh(geometryCube4, materialCube4);
  const cube5 = new THREE.Mesh(geometryCube5, materialCube5);

  cube.scale.setScalar(2.5);

  cube2.position.x = -4;
  cube2.position.y = -1;

  cube3.position.x = -3.5;
  cube3.position.y = 2;
  cube3.position.z = -1.3;

  cube4.position.x = 2.5;
  cube4.position.y = -2;
  cube4.position.z = 1;

  cube5.position.x = 3;
  cube5.position.y = 2.3;
  cube5.position.z = -1;

  scene.add(cube, cube2, cube3, cube4, cube5);

  //Lighting of the 3D Canvas
  const pointLight = new THREE.PointLight(0xffffff, 100, 1000);
  pointLight.position.set(0, 2, 7);

  const ambientLight = new THREE.AmbientLight(0xfffff);
  scene.add(pointLight, ambientLight);

  const lightHelper = new THREE.PointLightHelper(pointLight);
  scene.add(lightHelper);

  const controls = new OrbitControls(camera, renderer.domElement);

  //Animations of the shape
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.01;

    cube4.rotation.x += 0.01;
    cube4.rotation.y += 0.01;

    cube5.rotation.x += 0.01;
    cube5.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <canvas id="cube"></canvas>
</template>
