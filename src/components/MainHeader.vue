<script setup>
import { useFirebase } from '@/composables/useFirebase'
import { useGameStore } from '@/stores/game'

const { user } = useFirebase()
const gameStore = useGameStore()

</script>

<template>
    <header>
        <div class="wrapper">
            <div class="logo">
                <RouterLink to="/" class="logo"><img src="/favicon.svg">Disc Golf Scorecard</RouterLink>
            </div>
        <nav>
            <RouterLink 
                v-if="gameStore.players.length != 0 && gameStore.holes.length != 0"
                to="/play" 
                class="btn btn-primary btn-small"
            >
                <span class="material-symbols-outlined">visibility</span> Current Game
            </RouterLink>
            <RouterLink v-if="user" to="/account" class="btn btn-icon"><span class="material-symbols-outlined">account_circle</span></RouterLink>
            <RouterLink v-else to="/log-in" class="btn btn-secondary btn-small">Log In</RouterLink>
        </nav>
        </div>
    </header>
</template>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--col-dark-gray);
  z-index: 99;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--col-dark-gray);
  border: 1px solid var(--col-border);
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