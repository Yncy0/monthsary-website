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
        header="Photobooth Date"
        body="Photobooth image that started from SM MOA, the total number photobooth stall that we visited are: 4. 2 in SM MOA, 1 in SM San Fernando Pampanga, 1 in Robinson Place Malolos City. "
      />

      <RoadmapStack
        :isReversed="false"
        imgSource="/img/ice_cream.jpg"
        header="Ice Cream Date"
        body="Always eating DQ with different flavors. You often didn't finished eating it!"
      />

      <RoadmapStack
        :isReversed="true"
        imgSource="/img/ice_skate.jpg"
        header="Ice Skating Date"
        body="From 30 minutes of duration in the beginning, to max hours cap in the second visit. Such a worth it activity, I hope more of this to come!"
      />

      <RoadmapStack
        :isReversed="false"
        imgSource="/img/skyranch.jpeg"
        header="Skyranch San Fernando Pampanga"
        body="Such a cute moment for our 1st monthsary celebration! Never forget the flowers you gave me."
      />

      <RoadmapStack
        :isReversed="true"
        imgSource="/img/coffee_date.jpg"
        header="Coffee Date"
        body="You always invite me to drink coffee whenever you misses me, thanks Coffee Buddy!"
      />

      <RoadmapStack
        :isReversed="false"
        imgSource="/img/clay_date1.jpg"
        header="Clay Date"
        body="One of the cutest moments in our relationship goals. From cutesy clays to something SPICY! OoooOOooo... decisions decision..."
      />
    </div>
  </section>
</template>
