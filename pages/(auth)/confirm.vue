<script setup lang="ts">
definePageMeta({
  layout: "login",
});

const user = useSupabaseUser();
const redirectInfo = useSupabaseCookieRedirect();

watch(
  user,
  () => {
    if (user.value) {
      const path = redirectInfo.pluck();

      return navigateTo(path || "/");
    } else {
      return navigateTo("/login");
    }
  },
  { immediate: true },
);
</script>

<template>
  <div>Waiting for login</div>
</template>
