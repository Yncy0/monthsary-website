<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <UPopover>
    <UButton icon="i-lucide-circle-user" color="neutral" variant="ghost" />
    <template #content>
      <div class="size-48 m-4 p-2 flex flex-col gap-5">
        <header class="flex flex-row items-center gap-2">
          <UIcon
            v-if="!user.value"
            name="i-lucide-circle-user"
            class="text-red-600"
          />
          <UIcon v-else name="i-lucide-circle-user" />

          <span v-if="!user.value">Hello Anon!</span>
          <span v-else>Welcome User</span>
        </header>

        <div class="body">
          <p v-if="!user.value">
            It seems that you scrolling anonymously! If you are the chosen user
            please login
          </p>
        </div>

        <div class="footer">
          <UButton v-if="!user.value" label="Login" to="/login" />
          <UButton v-else label="Logout" />
        </div>
      </div>
    </template>
  </UPopover>
</template>
