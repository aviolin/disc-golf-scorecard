<script setup>
import { useFirebase } from '@/composables/useFirebase'
import AnimatedLoader from '@/components/AnimatedLoader.vue'
import { useGameStore } from '@/stores/game'
import MainHeader from '@/components/MainHeader.vue'

const { status, user } = useFirebase()
const gameStore = useGameStore()

</script>

<template>
  <template v-if="status !== 'loading'">
    <MainHeader />
  
    <RouterView />

  </template>
  <template v-else>
    <AnimatedLoader />
  </template>
</template>