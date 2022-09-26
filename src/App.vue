<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <RouterLink to="/" class="button">Home</RouterLink>
  <RouterLink to="/about" class="button">About</RouterLink>

  <RouterView />

</template>

<style>
/* @import 'bulma/css/bulma.min.css'; */
</style>


