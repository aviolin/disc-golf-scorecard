<script setup>
import { computed, ref } from 'vue'
import { useGameStore } from '../stores/game'

const holes = ref(0)

const gameStore = useGameStore()

const updateHoles = () => {
  gameStore.setHoles(holes.value)
}

const canStartGame = computed(() => {
  return holes.value > 0 && gameStore.players.length > 0
})
</script>

<template>
  <div class="setup-form">
    <h1><i>New Game</i></h1>
    <div class="form-row">
      <p>Holes</p>
      <div class="hole-inputs">
        <label class="radio-wrapper"><input type="radio" name="holes" :value="9" v-model="holes" @change="updateHoles"><span>{{ 9 }}</span></label>
        <label class="radio-wrapper"><input type="radio" name="holes" :value="18" v-model="holes" @change="updateHoles"><span>{{ 18 }}</span></label>
      </div>
      <small>* You can add more as you go</small>
    </div>

    <div class="form-row">
      <p>Players</p>
      <div v-for="player in gameStore.players" :key="player.id" class="player-row">
        <input type="text" name="player" placeholder="Name" v-model="player.name" />
        <button class="btn btn-remove" @click="() => gameStore.removePlayer(player.id)">X</button>
      </div>
      <button class="btn btn-add" @click="gameStore.addPlayer">Add Player +</button>
    </div>

    <span v-if="!canStartGame" class="btn btn-primary btn-disabled">Start Game</span>
    <RouterLink v-else class="btn btn-primary" to="play" >Start Game</RouterLink>
  </div>

</template>

<style lang="scss" scoped>
.setup-form {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  text-align: center;
}

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
}

.form-row {
  margin-bottom: 1rem;
}

input[type="text"] {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid black;
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
}

.radio-wrapper {
  position: relative;
  width: fit-content;

  span {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid black;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    cursor: pointer;

    &:hover {
      background: #eee;
    }
  }

  input {
    width: 2rem ;
    height: 2rem;
    margin: 0;
    opacity: 0;
  }
  
  input:checked + span {
    background: green;
    color: white;
    border-color: green;
  }

  input:focus-visible + span {
    outline: 2px solid blue;
  }
}
</style>
