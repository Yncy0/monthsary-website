<!-- Navigation Items list, scale the navigation here for futures references.
For more infor: visit https://ui3.nuxt.dev/getting-started -->

<script setup lang="ts">
const isDark = ref(true);

const items = ref([
  [
    {
      label: "Home",
      to: "/",
      ref: "#home",
    },
  ],
  [
    {
      label: "Memories",
      // to: "/memories",
      ref: "#memories",
    },
  ],
  [
    {
      label: "Roadmap",
      // to: "/roadmap"
      ref: "#roadmap",
    },
  ],
]);

function scrollTo(s: any) {
  nextTick(() => {
    const element = document.querySelector(s);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("No element has been found");
    }
  });

  function toggleTheme() {
    !isDark;
    console.log(isDark);
  }
}
</script>

<!--Here lies the design
It uses NavigationMenu form NuxtUI, for more infor visit: https://ui3.nuxt.dev/components/navigation-menu-->
<template>
  <div class="sticky top-0 z-10 bg-white dark:bg-gray-900">
    <div class="flex flex-row items-center p-2 gap-4 w-full justify-center">
      <!-- <UNavigationMenu
        :items="items"
        orientation="horizontal"
        variant="link"
        class="gap-2"
      /> -->
      <UButton
        label="Home"
        @click="scrollTo('#home')"
        class="bg-transparent text-white hover:bg-transparent"
      />
      <UButton
        label="Memories"
        @click="scrollTo('#memories')"
        class="bg-transparent text-white hover:bg-transparent"
      />
      <UButton
        label="Roadmap"
        @click="scrollTo('#roadmap')"
        class="bg-transparent text-white hover:bg-transparent"
      />
      <!-- <UButton
        icon="i-lucide-moon"
        class="bg-transparent dark:text-white text-black hover:bg-transparent"
      /> -->
    </div>
    <USeparator />
  </div>
</template>
