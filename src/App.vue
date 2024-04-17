<script setup>
import { ref } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import NewGameButton from '@/components/NewGameButton.vue'

const { app, auth, user, logout } = useFirebase()

</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/" class="logo"><img src="/favicon.svg"><i>Disc Golf Scorecard</i></RouterLink>
      </div>
      <nav>
        <RouterLink to="/play" class="btn btn-primary btn-small">Card</RouterLink>
        <RouterLink v-if="user" to="/account" class="btn btn-secondary btn-small">Account</RouterLink>
        <RouterLink v-else to="/log-in" class="btn btn-secondary btn-small">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 99;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
nav {
  display: flex;
  gap: .5rem;
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
</style>
