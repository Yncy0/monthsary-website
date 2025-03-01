<script setup>
import RoadmapStack from "../RoadmapStack.vue";
</script>

<template>
  <section class="flex flex-col items-center justify-center py-10 min-w-full">
    <span class="dark:drop-shadow-glow-pink-1000">
      <h3
        class="text-[5rem] font-bold text-pink-500 dark:drop-shadow-glow-pink-900 drop-shadow-glow-pink-300"
      >
        Roadmap
      </h3>
    </span>
    <p>Roadmap for our goals as a couple</p>
    <div class="p-20 w-full flex flex-col gap-72">
      <RoadmapStack
        :isReversed="true"
        imgSource="/img/photobooth1.jpeg"
        header="Header 1"
        body="Lorem Ipsum"
      />

      <RoadmapStack
        :isReversed="false"
        imgSource="/img/ice_cream.jpg"
        header="Header 1"
        body="Lorem Ipsum"
      />

      <RoadmapStack
        :isReversed="true"
        imgSource="/img/ice_skate.jpg"
        header="Header 1"
        body="Lorem Ipsum"
      />

      <RoadmapStack
        :isReversed="false"
        imgSource="/img/skyranch.jpeg"
        header="Header 1"
        body="Lorem Ipsum"
      />

      <RoadmapStack
        :isReversed="true"
        imgSource="/img/coffee_date.jpg"
        header="Header 1"
        body="Lorem Ipsum"
      />

      <RoadmapStack
        :isReversed="false"
        imgSource="/img/clay_date1.jpg"
        header="Header 1"
        body="Lorem Ipsum"
      />
    </div>
  </section>
</template>
