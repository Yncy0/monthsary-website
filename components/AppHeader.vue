<!--Navigation Items list, scale the navigation here for futures references.
    For more infor: visit https://ui3.nuxt.dev/getting-started
-->
<script setup lang="ts">
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
    <UNavigationMenu orientation="horizontal" :items="items" class="w-full justify-center bg-pink-500 sticky top-0 z-50 shadow-2xl" />
</template>