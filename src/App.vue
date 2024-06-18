<script setup>
import { useFirebase } from '@/composables/useFirebase'
import AnimatedLoader from '@/components/AnimatedLoader.vue'

const { status, user } = useFirebase()

</script>

<template>
  <template v-if="status !== 'loading'">
    <header>
      <div class="wrapper">
        <div class="logo">
          <RouterLink to="/" class="logo"><img src="/favicon.svg"><i>Disc Golf Scorecard</i></RouterLink>
        </div>
        <nav>
          <RouterLink to="/play" class="btn btn-primary btn-small">Current Card</RouterLink>
          <RouterLink v-if="user" to="/account" class="btn btn-icon"><span class="material-symbols-outlined">account_circle</span></RouterLink>
          <RouterLink v-else to="/log-in" class="btn btn-secondary btn-small">Login</RouterLink>
        </nav>
      </div>
    </header>
  
    <RouterView />

    <footer>
      <a href="https://github.com/aviolin/disc-golf-scorecard/">View the source on GitHub.</a>
      <small>© Copyright 2024, Arlo Adams.</small>
    </footer>
  </template>
  <template v-else>
    <AnimatedLoader />
  </template>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--col-mid-gray);
  z-index: 99;
}
footer {
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: .75rem;

  a {
    color: var(--col-white);
    font-size: .75rem;
  }

  small {
    font-size: .75rem;
  }
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
  color: var(--col-white);
  font-weight: 700;
  img {
    width: 2rem;
  }
}
</style>
