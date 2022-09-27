<template>
  <nav class="navbar is-success" aria-label="main navigation" role="navigation">
    <div class="container is-max-desktop px-2">

      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          sp-notes
        </div>
          <a
            :class="{'is-active' : showMobileNav }"
            @click.prevent="showMobileNav = !showMobileNav"
            class="navbar-burger"
            aria-expanded="false"
            aria-label="menu"
            data-target="navbarBasicExample"
            role="button"
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        :class="{'is-active' : showMobileNav }"
        id="navbarBasicExample"
        class="navbar-menu"
      >
        <div class="navbar-start">

        </div>

        <div class="navbar-end">

          <RouterLink to="/" class="navbar-item" active-class="is-active">
            Notes
          </RouterLink>

          <RouterLink to="/stats" class="navbar-item" active-class="is-active">
            Stats
          </RouterLink>

        </div>
      </div>
    </div>
  </nav>
</template>

<script setup >
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showMobileNav = ref(false)
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>