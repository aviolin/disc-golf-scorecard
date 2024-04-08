<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/game'

const holes = ref(9)

const gameStore = useGameStore()

const updateHoles = () => {
  gameStore.setHoles(holes.value)
}
</script>

<template>
  <div class="setup-form">
    <h1><img class="logo" src="/favicon.svg"><i>Disc Golf Scorecard</i></h1>
    <div class="form-row">
      <p>Holes</p>
      <div class="hole-inputs">
        <label v-for="i in 22" :key="i" class="radio-wrapper"><input type="radio" name="holes" :value="i" v-model="holes" @change="updateHoles"><span>{{ i }}</span></label>
      </div>
    </div>

    <div class="form-row">
      <p>Players</p>
      <div v-for="player in gameStore.players" :key="player.id" class="player-row">
        <input type="text" name="player" placeholder="Name" v-model="player.name" />
        <button class="btn btn-remove-player" @click="() => gameStore.removePlayer(player.id)">X</button>
      </div>
      <button class="btn btn-add-player" @click="gameStore.addPlayer">Add Player +</button>
    </div>

    <RouterLink class="btn btn-start" to="play">Start Game</RouterLink>
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
