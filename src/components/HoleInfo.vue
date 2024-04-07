<script setup>
import { defineProps, ref } from 'vue'
import { useGameStore } from '@/stores/game'
import HoleModal from '@/components/HoleModal.vue'

const props = defineProps({
    hole: Object,
})

const modalOpen = ref(false)

const gameStore = useGameStore()

const setModalOpen = (value) => {
    modalOpen.value = value
}
</script>

<template>
    <button @click="() => setModalOpen(true)">
        <span class="hole-number">{{ hole.id }}</span>
        <b>{{ hole.par }}</b>
    </button>
    <HoleModal v-if="modalOpen" :hole="hole" @close="() => setModalOpen(false)"/>
</template>

<style lang="scss" scoped>
button {
    width: 100%;
    height: 100%;
    background: none;
    border: 0;
    position: relative;
    padding: 1rem;
    cursor: pointer;
}
.hole-number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: .75rem;
}
</style>