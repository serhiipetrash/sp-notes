<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/Layout/NavBar.vue';
import { useStoreAuth } from '@/stores/storeAuth'
import { onMounted } from 'vue';

const storeAuth = useStoreAuth()

/* mounted */
onMounted(() => {
  storeAuth.init()
})

</script>

<style>

</style>


