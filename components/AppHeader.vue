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
  <div class="sticky top-0 z-10 bg-white dark:bg-gray-900">
    <div class="flex flex-row items-center p-2 gap-4 w-full justify-center">
      <UNavigationMenu
        :items="items"
        orientation="horizontal"
        variant="link"
        class="gap-2"
      />
      <UButton
        icon="i-lucide-moon"
        class="bg-transparent dark:text-white text-black hover:bg-transparent"
      />
    </div>
    <USeparator />
  </div>
</template>
