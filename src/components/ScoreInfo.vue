<script setup>
import { defineProps, ref, computed } from 'vue'
import { useGameStore } from '@/stores/game'
import ScoreModal from '@/components/ScoreModal.vue'

const props = defineProps({
    player: Object,
    hole: Object,
})

const modalOpen = ref(false)

const gameStore = useGameStore()

const setModalOpen = (value) => {
    modalOpen.value = value
}

const scoreClass = computed(() => {
    if (!props.player.holes[props.hole.id].score) {
        return 'none'
    }

    const score = props.player.holes[props.hole.id].score - props.hole.par
    switch (score) {
        case -3:
            return 'ace'
        case -2:
            return 'eagle'
        case -1:
            return 'birdie'
        case 0:
            return 'par'
        case 1:
            return 'bogey'
        case 2:
            return 'double-bogey'
        case 3:
            return 'triple-bogey'
        default:
            return 'other'
    }
})
</script>

<template>
    <td :class="'score-' + scoreClass">
        <div class="score-wrapper">
            <button @click="() => setModalOpen(true)">
                <b>{{  player.holes[hole.id].score }}</b>
            </button>
            <ScoreModal v-if="modalOpen" :player="player" :hole="hole" @close="() => setModalOpen(false)"/>
        </div>
    </td>
</template>

<style lang="scss" scoped>
button {
    width: 100%;
    height: 100%;
    background: none;
    border: 0;
    padding: 1rem;
    cursor: pointer;

}
td {
    text-align: center;
    border: 0;
    background: #f9f9f9;

    &.score {
        &-ace {
            background: gold;
        }
        &-eagle {
            background: #33ffff;
        }
        &-birdie {
            background: #bbffaa;
        }
        &-par {
            background: #eee;
        }
        &-bogey {
            background: red;
        }
        &-double-bogey {
            background: salmon;
        }
        &-triple-bogey {
            background: orange;
        }
        &-other {
            background: #efefef;
        }
    }
}
</style>