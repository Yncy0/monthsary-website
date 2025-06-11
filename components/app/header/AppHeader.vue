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
const isDark = useDark();
const toggleDark = useToggle(isDark);

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
function scrollTo(s: string) {
  nextTick(() => {
    const element = document.querySelector(s) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
}
</script>

<!--It uses NavigationMenu form NuxtUI, for more infor visit: https://ui3.nuxt.dev/components/navigation-menu-->
<template>
  <header class="sticky top-0 z-10 bg-latte-base dark:bg-mocha-base">
    <div class="flex flex-row items-center p-2 gap-4 w-full justify-center">
      <UNavigationMenu
        :items="items"
        orientation="horizontal"
        variant="link"
        content-orientation="vertical"
        class="gap-2"
      />

      <span>
        <UButton v-if="!user" label="Login" variant="subtle" to="/login" />
        <UButton v-else label="Logout" variant="subtle" />
      </span>

      <ClientOnly>
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="subtle"
          class="dark:text-white text-black"
          :data-allow-mismatch="true"
          @click="toggleDark()"
        />
      </ClientOnly>
    </div>
    <USeparator />
  </header>
</template>
