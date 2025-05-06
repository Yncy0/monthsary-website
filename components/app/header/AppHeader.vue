<!-- Navigation Items list, scale the navigation here for futures references.
For more infor: visit https://ui3.nuxt.dev/getting-started -->

<script setup lang="ts">
const user = useSupabaseUser();

const items = ref([
  {
    label: "Home",
    to: "/",
    children: [
      {
        label: "Go back",
        icon: "i-lucide-arrow-up",
        slot: "components",
        onSelect: () => scrollTo("#hero"),
      },
      {
        label: "Gallery",
        icon: "i-lucide-brain",
        slot: "components",
        onSelect: () => scrollTo("#gallery"),
      },
      {
        label: "Roadmap",
        icon: "i-lucide-map",
        slot: "components",
        onSelect: () => scrollTo("#roadmap"),
      },
    ],
  },

  {
    label: "Gallery",
    to: "gallery",
  },

  {
    label: "Roadmap",
    to: "roadmap",
  },
]);

//useToggle() is a VueUse functionality, visit: https://vueuse.org/shared/useToggle/#usetoggle
//const isDark = useDark();
//const toggleDark = useToggle(isDark);

const isButtonShown = ref(false);

watch(
  user,
  () => {
    if (!user.value) {
      isButtonShown.value = true;
    } else {
      isButtonShown.value = false;
    }
  },
  { immediate: true },
);

//TODO: Refactor on a seperate file
function scrollTo(s: any) {
  nextTick(() => {
    const element = document.querySelector(s);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
}
</script>

<!--Here lies the design
It uses NavigationMenu form NuxtUI, for more infor visit: https://ui3.nuxt.dev/components/navigation-menu-->
<template>
  <header class="sticky top-0 z-10 bg-white dark:bg-gray-900">
    <div class="flex flex-row items-center p-2 gap-4 w-full justify-center">
      <UNavigationMenu
        :items="items"
        orientation="horizontal"
        variant="link"
        content-orientation="vertical"
        class="gap-2"
      />
      <!-- <ClientOnly>
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          @click="toggleDark()"
          class="bg-transparent dark:text-white text-black hover:bg-transparent"
          :data-allow-mismatch="true"
        />
      </ClientOnly> -->

      <UButton v-if="!user" label="Login" variant="subtle" to="/login" />
      <AppHeaderPopover v-else />
    </div>
    <USeparator />
  </header>
</template>
