<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/" class="logo"><img src="/favicon.svg"><i>Disc Golf Scorecard</i></RouterLink>
      </div>
      <nav>
        <RouterLink to="/" class="btn btn-nav">New Game</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
nav {
  display: flex;
  gap: 1rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: .5rem;
  text-decoration: none;
  color: black;
  img {
    width: 2rem;
  }
}
.btn-nav {
  background: none;
  color: black;
  text-decoration: none;
  font-size: .75rem;
  padding: .25rem .5rem;
  border: 1px solid black;
}
</style>
