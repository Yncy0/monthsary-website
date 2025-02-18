<!--Navigation Items list, scale the navigation here for futures references.
    For more infor: visit https://ui3.nuxt.dev/getting-started
-->
<script lang="ts">
    const items = ref([
        {
            label: 'Home',
            to: '/'
        },
        {
            label: 'Memories',
            to: '/memories'
        },
        {
            label: 'Albums',
            to: '/albums'
        }
    ])
</script>

<!--Here lies the design
    It uses NavigationMenu form NuxtUI, for more infor visit: https://ui3.nuxt.dev/components/navigation-menu
-->
<template>
    <!-- <nav class="sticky top-0 z-50 shadow-2xl">
        <ul class="min-w-full flex flex-row gap-3 bg-pink-500 p-7 text-white ">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/memories">Memories</NuxtLink></li>
            <li><NuxtLink to="/albums">Albums</NuxtLink></li>
        </ul>
    </nav> -->
    <UNavigationMenu orientation="horizontal" :items="items" class="w-full justify-center bg-pink-500" />
</template>