<script setup>
import { defineProps, ref } from 'vue'
import { useGameStore } from '@/stores/game';
import { useRouter } from 'vue-router'

const gameStore = useGameStore()
const router = useRouter()

const props = defineProps({
    modal: Object,
})

const startNewGame = () => {
    gameStore.reset()
    props.modal.close()
    router.push('/');
}
</script>

<template>
    <p>Are you sure? This will overwrite your current game.</p>
    <div class="button-holder">
        <button class="btn btn-primary" @click="startNewGame">Start New Game</button>
        <button class="btn btn-secondary" @click="modal.close">Cancel</button>
    </div>
</template>

<style lang="scss" scoped>

.button-holder {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}
</style>