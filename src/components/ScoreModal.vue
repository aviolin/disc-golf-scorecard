<script setup>
import { defineProps, defineEmits } from 'vue'
import { useGameStore } from '@/stores/game'

const props = defineProps({
    player: Object,
    hole: Object,
    modal: Object,
})

const gameStore = useGameStore()

const score = (value) => {
    gameStore.setScore(props.player.id, props.hole.id, value)
    props.modal.close();
}

</script>

<template>
    <p>How many throws did {{ player.name }} make on hole {{ hole.id + 1 }}?</p>
    <div class="button-holder">
        <button class="btn btn-secondary" @click.prevent="() => score('')">0</button>
        <button class="btn btn-secondary" v-for="i in 20" @click.prevent="() => score(i)" :key="i">{{ i }}</button>
    </div>
</template>

<style lang="scss" scoped>
.button-holder {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: center;
}
</style>