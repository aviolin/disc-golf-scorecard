<script setup>
import { defineProps, ref, nextTick } from 'vue'
import { useGameStore } from '@/stores/game'
import PlayerModal from '@/components/PlayerModal.vue'
import ModalWrapper from '@/components/ModalWrapper.vue'

const props = defineProps({
    player: Object,
    addButton: Boolean,
})

const gameStore = useGameStore()

const modalOpen = ref(false)
const newPlayer = ref({ name: '' })

const addPlayer = () => {
    newPlayer.value = gameStore.addPlayer({ name: '' })
    nextTick(() => {
        modalOpen.value = true;
    })
}
</script>

<template>
    <template v-if="addButton">
        <button class="btn btn-icon" @click.prevent="addPlayer">
            <span class="material-symbols-outlined">person_add</span>
        </button>
    </template>
    <template v-else>
        <button @click.prevent="modalOpen = true">
            {{ player.name }}
        </button>
    </template>
    <ModalWrapper 
        v-if="modalOpen" 
        v-slot="modal"
        @close="modalOpen = false">
        <PlayerModal :player="addButton ? newPlayer : player" :modal="modal"/>
    </ModalWrapper>
</template>

<style lang="scss" scoped>
button {
    width: 100%;
    height: 100%;
    background: none;
    border: 0;
    position: relative;
    padding: 0 0rem;
    font-weight: 700;
    min-width: 1rem;
    min-height: 1rem;
    color: var(--col-white);
    cursor: pointer;
}
.hole-number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: .75rem;
}
</style>