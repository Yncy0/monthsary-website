<script setup lang="ts">
definePageMeta({
  layout: "login",
});

const supabase = useSupabaseClient();
const email = ref("");

async function signInWithOtp() {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) throw error;
}
</script>

<template>
  <form
    class="flex flex-col justify-center items-center w-screen h-screen gap-5"
    @submit="signInWithOtp"
  >
    <UFormField label="Account">
      <UInput
        v-model="email"
        type="email"
        placeholder="Please enter your email account"
        class="w-2xs"
      />
    </UFormField>
    <UButton type="submit" label="Login" />
  </form>
</template>
