<script setup></script>

<template>
  <section
    id="memories"
    class="flex flex-col min-w-full items-center gap-10 pb-20 pt-10"
  >
    <HeadingGlow
      :level="2"
      text="Memories"
      text-size="5rem"
      text-align="center"
    />
    <div>
      <p>
        Here lies our precious memories that we did together, from the beginning
        until now.
        <span>
          <NuxtLink class="text-pink-500" href="/gallery"
            >See more...
          </NuxtLink>
        </span>
      </p>
    </div>
    <div class="w-[1000px]">
      <IndexGalleryCarousel />
    </div>
  </section>
</template>
