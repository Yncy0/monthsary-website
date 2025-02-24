<!-- Navigation Items list, scale the navigation here for futures references.
For more infor: visit https://ui3.nuxt.dev/getting-started -->

<script setup lang="ts">
const items = ref([
  [
    {
      label: "Home",
      to: "/",
    },
  ],
  [
    {
      label: "Memories",
      to: "/memories",
    },
  ],
  [
    {
      label: "Albums",
      to: "/albums",
    },
  ],
]);
</script>

<!--Here lies the design
It uses NavigationMenu form NuxtUI, for more infor visit: https://ui3.nuxt.dev/components/navigation-menu-->
<template>
  <div class="sticky top-0 z-10">
    <UNavigationMenu
      :items="items"
      orientation="horizontal"
      variant="link"
      class="w-full justify-center p-3 gap-4 bg-white dark:bg-gray-900"
    />
    <USeparator />
  </div>
</template>
