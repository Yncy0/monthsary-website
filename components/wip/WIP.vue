<script setup lang="ts"></script>

<template>
  <section class="flex items-center justify-center h-[600px]">
    <TresCanvas alpha window-size>
      <TresPerspectiveCamera :fov="75" :position="[0, 0, 5]" />
      <TresAmbientLight :intensity="1" />
      <TresPointLight :intensity="100" :distance="100" :position="[0, 2, 7]" />

      <Levioso :speed="5" :intensity="5">
        <TresMesh :position="[4, 2, -2]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="red" />
        </TresMesh>
      </Levioso>

      <Levioso :speed="5" :intensity="5">
        <TresMesh :position="[-4, 2.5, -2]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="blue" />
        </TresMesh>
      </Levioso>

      <Levioso :speed="5" :intensity="5">
        <TresMesh :position="[4, -2.5, -2]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="purple" />
        </TresMesh>
      </Levioso>

      <Levioso :speed="5" :intensity="5">
        <TresMesh :position="[-4, -2, -2]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="orange" />
        </TresMesh>
      </Levioso>

      <Levioso :speed="5" :intensity="5">
        <TresMesh :position="[0, -2.5, -2]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="yellow" />
        </TresMesh>
      </Levioso>

      <Levioso :speed="5" :intensity="5">
        <TresMesh :position="[7, 0, -2]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="green" />
        </TresMesh>
      </Levioso>

      <Levioso :speed="5" :intensity="5">
        <TresMesh :position="[-7, 0, -2]">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="pink" />
        </TresMesh>
      </Levioso>

      <Suspense>
        <Levioso :speed="2" :floatFactor="2">
          <NyaNyaWorker />
        </Levioso>
      </Suspense>
    </TresCanvas>

    <h1 class="z-10 font-bold text-4xl">
      This page is still under construction
    </h1>
  </section>
</template>
