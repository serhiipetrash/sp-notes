<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/Layout/NavBar.vue';
import { useStoreNotes } from '@/stores/storeNotes'
import { onMounted } from 'vue';

const storeNotes = useStoreNotes()

/* mounted */
onMounted(() => {
  storeNotes.getNotes()
})

</script>

<style>

</style>


