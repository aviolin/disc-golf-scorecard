<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ModalWrapper from '@/components/ModalWrapper.vue'
import NewGameModal from '@/components/NewGameModal.vue'

const newGameModalIsOpen = ref(false)

const router = useRouter()

const newGame = () => {
  console.log('New Game')
  router.push('/')
}

</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/" class="logo"><img src="/favicon.svg"><i>Disc Golf Scorecard</i></RouterLink>
      </div>
      <nav>
        <button
          class="btn btn-nav"
          @click="newGameModalIsOpen = true"
        >
          New Game
        </button>
        <ModalWrapper
          v-if="newGameModalIsOpen"
          v-slot="modal"
          @close="newGameModalIsOpen = false"
        >
          <NewGameModal :modal="modal"/>
        </ModalWrapper>
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
