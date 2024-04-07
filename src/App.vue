<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/play">Play</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 2rem;
}

</style>
