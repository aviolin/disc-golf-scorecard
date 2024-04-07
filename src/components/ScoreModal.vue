<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useGameStore } from '@/stores/game'

const props = defineProps({
    player: Object,
    hole: Object,
})

const gameStore = useGameStore()

const emit = defineEmits([
    'close',
])

const score = (value) => {
    gameStore.setScore(props.player.id, props.hole.id, value)
    emit('close')
}

</script>

<template>
    <div class="score-modal">
        <div class="score-modal-inner">
            <button class="btn btn-close" @click="() => emit('close')">X</button>
            <p>How many throws did {{ player.name }} make on hole {{ hole.id }}?</p>
            <div class="button-holder">
                <button class="btn btn-throws" v-for="i in 9" @click="() => score(i)" :key="i">{{ i }}</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
p {
    font-size: 1.5rem;
}
.score-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}
.score-modal-inner {
    max-width: min(calc(100% - 4rem), 600px);
    margin: auto;
    margin-top: 3rem;
    background: white;
    padding: 1rem;
    position: relative;
}
.btn-throws {
    padding: 1rem;
    border: 0;
    color: black;
    background: white;
    border: 1px solid black;
    border-radius: 0.25rem;
    cursor: pointer;
    margin: 0.5rem;
}
.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    border: 0;
    background: white;
    color: black;
    cursor: pointer;
}
</style>