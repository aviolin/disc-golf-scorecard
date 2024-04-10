<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useGameStore } from '@/stores/game'

const props = defineProps({
    hole: Object,
    modal: Object,
})

const gameStore = useGameStore()

const setPar = (value) => {
    gameStore.setPar(props.hole.id, value)
    props.modal?.close();
}

</script>

<template>
    <p>What is par for hole {{ hole.id }}?</p>
    <div class="button-holder">
        <button class="btn btn-secondary" v-for="i in 9" @click="() => setPar(i)" :key="i">{{ i }}</button>
    </div>
</template>

<style lang="scss" scoped>

</style>