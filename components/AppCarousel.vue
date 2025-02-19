<!--Items for carousel, apply some items here for scalability purposes-->

<script setup lang="ts">
    const items = [
        'assets/images/birb.jpg',
        'assets/images/birb.jpg',
        'assets/images/birb.jpg',
        'assets/images/birb.jpg',
        'assets/images/birb.jpg',
    ]
</script>

<!--Carousel Template, for more infor visit: https://ui3.nuxt.dev/components/carousel-->
<template>
    <UCarousel v-slot="{ item }" :items="items" class="w-full max-w-xs mx-auto">
        <img src="/assets/images/birb.jpg" width="320" height="320" class="rounded-lg"/>
    </UCarousel>
</template>