<script setup>
import { defineProps, ref, computed } from 'vue'
import ScoreModal from '@/components/ScoreModal.vue'
import ModalWrapper from '@/components/ModalWrapper.vue'

const props = defineProps({
    player: Object,
    hole: Object,
})

const modalOpen = ref(false)

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
            <button @click.prevent="() => setModalOpen(true)">
                <b>{{ player.holes[hole.id].score }}</b>
            </button>
            <ModalWrapper 
                v-if="modalOpen" 
                @close="() => setModalOpen(false)"
                v-slot="modal">
                <ScoreModal :player="player" :hole="hole" :modal="modal"/>
            </ModalWrapper>
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
    min-width: 6rem;

}
td {
    text-align: center;
    border: 0;
    background: var(--col-dark-gray);
    border: 1px solid var(--col-border);
    transition: 0.5s;

    &:hover {
        background: var(--col-light-gray);
    }

    &.score {
        &-ace {
            background: radial-gradient(#ccffff, #33ccff);
        }
        &-eagle {
            background: radial-gradient(#ccffcc, #66dd66);
        }
        &-birdie {
            background: radial-gradient(#ddffcc, #aadd99)
        }
        &-par {
            background: lightblue;
            background: radial-gradient(#f0f0ff, lightblue);
        }
        &-bogey {
            background: radial-gradient(#ffcccc, #ffaa33);
        }
        &-double-bogey {
            background: radial-gradient(#ffcccc, #ff5500);
        }
        &-triple-bogey {
            background: radial-gradient(#ffcccc, #ff3333);
        }
        &-other {
            background: radial-gradient(#ff9999, #ff3333);
        }
    }
}
.score-wrapper {
    height: 3rem;
}
</style>