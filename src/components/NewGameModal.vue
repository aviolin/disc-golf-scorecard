<script setup>
import { defineProps, ref, computed, onMounted } from 'vue'
import { useGameStore } from '@/stores/game';
import { useRouter } from 'vue-router'
import { useFirebase } from '@/composables/useFirebase'
import getRandomName from '@/utils/getRandomName'

const gameStore = useGameStore()
const router = useRouter()
const { user } = useFirebase()

const props = defineProps({
    modal: Object,
})

const players = ref([])
const holes = ref(9)

onMounted(() => {
  addPlayer()
})

const startNewGame = () => {
  gameStore.reset()

  gameStore.setHoles(holes.value)

  players.value = players.value.map(player => {
    return {
      ...player,
      name: player.name || player.placeholder
    }
  })

  gameStore.setPlayers(players.value)
  props.modal.close()
  router.push('/play');
}

const addPlayer = (name) => {
  let displayName = '';
  if (user.value && players.value.length === 0) {
    displayName = user.value.displayName
  }
  players.value.push({ 
    id: Date.now() + Math.random() + '', 
    name: displayName,
    placeholder: displayName || getRandomName(),
  })
}

const removePlayer = (id) => {
  players.value = players.value.filter(player => player.id !== id)
}

const canStartGame = computed(() => {
  return holes.value > 0 && players.value.length > 0
})
</script>

<template>
    <form class="setup-form" @submit.prevent="startNewGame">
      <div class="form-row">
        <p>Holes</p>
        <div class="hole-inputs">
          <label class="radio-wrapper"><input type="radio" name="holes" :value="1" v-model="holes" @change="holes = 1"><span>1</span></label>
          <label class="radio-wrapper"><input type="radio" name="holes" :value="9" v-model="holes" @change="holes = 9"><span>9</span></label>
          <label class="radio-wrapper"><input type="radio" name="holes" :value="18" v-model="holes" @change="holes = 18"><span>18</span></label>
        </div>
        <small>* You can add more as you go</small>
      </div>
  
      <div class="form-row">
        <p>Players</p>
        <div v-for="player in players" :key="player.id" class="player-row">
          <input type="text" name="player" :placeholder="player.placeholder" v-model="player.name" />
          <button class="btn btn-warn btn-icon" @click.prevent="removePlayer(player.id)">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
        <button class="btn btn-add" @click.prevent="addPlayer">
          <span class="material-symbols-outlined">person_add</span> Add Player
        </button>
      </div>
      <div class="form-row">
        <button class="btn btn-primary" :disabled="!canStartGame">Start</button>
        <small>* This will overwrite any current unsaved scorecard.</small>
      </div>
    </form>
</template>

<style lang="scss" scoped>

.logo {
  width: 3rem;
}
h1 {
  display: inline-flex;
  align-items: center;
}
p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
small {
  font-size: 1rem;
  margin-top: 0.5rem;
  display: block;
  font-style: italic;
}

.form-row {
  margin-bottom: 1rem;
}

.hole-inputs {
  display: flex;
  gap: .5rem;
  row-gap: .25rem;
  justify-content: center;
  flex-wrap: wrap;
}

.player-row {
  margin-bottom: .5rem;
  display: flex;
  gap: .5rem;
  input {
    margin: 0;
  }

}
</style>