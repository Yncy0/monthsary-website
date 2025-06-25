<script setup>
const user = useSupabaseUser();
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center min-w-full h-[720px] p-9 mb-44"
  >
    <!-- <NyaNyaGang /> -->
    <h1
      class="text-[6rem] text-transparent heading-gradient bg-clip-text font-bold text-center"
    >
      Happy 5th
      <span class="text-transparent  bg-clip-text">
        Monthsary
      </span>
      <br >
      <span class="text-transparent heading-gradient-span bg-clip-text">
        My Pookie!
      </span>
    </h1>
    <p v-if="user" class="pb-6 text-2xl">
      I hope you are doing well my love! May our relationship lasts forever.
    </p>
    <p v-else>
      It seems that you are not login yet, feel free to scroll anon or login to
      your account
    </p>
    <IndexHeroModal />
  </section>
</template>

<style scoped>
.heading-gradient {
  background-image: linear-gradient(
    to right,
    var(--color-latte-yellow),
    var(--color-latte-primary),
    var(--color-latte-secondary)
  );

  .heading-gradient-span {
    background-image: linear-gradient(
      to right,
      var(--color-latte-primary),
      var(--color-latte-secondary)
    );
  }
}
</style>
