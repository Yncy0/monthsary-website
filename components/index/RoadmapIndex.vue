<script setup>
import RoadmapStack from "../RoadmapStack.vue";
import H3Glow from "../headings/H3Glow.vue";

//TODO: Create an array to loop it in the <template>
</script>

<template>
  <section
    id="roadmap"
    class="flex flex-col items-center justify-center py-10 min-w-full"
  >
    <H3Glow text="Roadmap" />
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

      <RoadmapStack :isReversed="true" header="Beach Date" body="???" />

      <RoadmapStack :isReversed="false" header="Baguio Date" body="???" />

      <RoadmapStack :isReversed="true" header="Oversea" body="???" />

      <RoadmapStack
        :isReversed="false"
        header="Here comes the MONEY!!!"
        body="???"
      />

      <RoadmapStack :isReversed="true" header="Home" body="???" />

      <RoadmapStack :isReversed="false" header="Wedding" body="???" />
    </div>
  </section>
</template>
