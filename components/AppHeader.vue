<!-- Navigation Items list, scale the navigation here for futures references.
For more infor: visit https://ui3.nuxt.dev/getting-started -->

<script setup lang="ts">
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
      ref: "#memories",
    },
  ],
  [
    {
      label: "Roadmap",
      ref: "#roadmap",
    },
  ],
]);

//TODO: Refactor on a seperate file
function scrollTo(s: any) {
  nextTick(() => {
    const element = document.querySelector(s);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("No element has been found");
    }
  });
}

//useToggle() is a VueUse functionality, visit: https://vueuse.org/shared/useToggle/#usetoggle
const isDark = useDark();
const toggleDark = useToggle(isDark);
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
        class="bg-transparent dark:text-white text-gray-900 hover:bg-transparent"
      />
      <UButton
        label="Memories"
        @click="scrollTo('#memories')"
        class="bg-transparent dark:text-white text-gray-900 hover:bg-transparent"
      />
      <UButton
        label="Roadmap"
        @click="scrollTo('#roadmap')"
        class="bg-transparent dark:text-white text-gray-900 hover:bg-transparent"
      />
      <!--FIXME: Button loads the first time when toggling-->
      <div v-if="isDark">
        <UButton
          icon="i-lucide-moon"
          @click="toggleDark()"
          class="bg-transparent dark:text-white text-black hover:bg-transparent"
        />
      </div>
      <div v-else>
        <UButton
          icon="i-lucide-sun"
          @click="toggleDark()"
          class="bg-transparent dark:text-white text-black hover:bg-transparent"
        />
      </div>
    </div>
    <USeparator />
  </div>
</template>
