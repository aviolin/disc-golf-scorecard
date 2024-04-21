<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useGameStore } from '@/stores/game'

const props = defineProps({
    player: Object,
    modal: Object,
})

const gameStore = useGameStore()
const name = ref(props.player.name)

const updateName = () => {
    gameStore.updateName(props.player.id, name.value)
    props.modal.close();
}

const removePlayer = () => {
    gameStore.removePlayer(props.player.id)
    props.modal.close();
}

</script>

<template>
    <p>Enter the player's name:</p>
    <div class="button-holder">
        <input type="text" name="player" placeholder="Name" v-model="name" />
        <button class="btn btn-primary" @click="updateName">Save</button>
        <button class="btn btn-remove" @click="removePlayer">
            <span class="material-symbols-outlined">delete</span> Remove Player
        </button>
    </div>
</template>

<style lang="scss" scoped>
.btn-primary {
    margin-bottom: 1rem;
}
</style>