<script setup>
import NyaNyaWizard from "../3D/NyaNyaWizard.vue";
</script>

<template>
  <section>
    <TresCanvas alpha window-size>
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <TresAmbientLight :intensity="2" />
      <TresPointLight :intensity="250" :position="[0, 0, 10]" />
      <Suspense>
        <NyaNyaWizard />
      </Suspense>
    </TresCanvas>
    <div class="w-1/2">
      <h1
        class="text-[5rem] text-transparent bg-clip-text bg-linear-to-tr from-indigo-500 to-pink-500 font-bold"
      >
        Memories
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        ipsam, quisquam et quod dicta odit porro, facere maxime dignissimos ad
        facilis laudantium quas sapiente autem nemo cumque voluptatibus
        repellendus omnis!
      </p>
    </div>
  </section>
</template>
