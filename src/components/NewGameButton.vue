<script setup>
import { ref } from 'vue'
import ModalWrapper from '@/components/ModalWrapper.vue'
import NewGameModal from '@/components/NewGameModal.vue'

const newGameModalIsOpen = ref(false)

const props = defineProps({
    classes: {
        type: String,
        default: 'btn btn-primary'
    }
})

</script>

<template>
    <button
        :class="classes"
        @click.prevent="newGameModalIsOpen = true"
    >
        New Game
    </button>
    <ModalWrapper
        v-if="newGameModalIsOpen"
        v-slot="modal"
        @close="newGameModalIsOpen = false"
    >
        <NewGameModal :modal="modal"/>
    </ModalWrapper>
</template>

<style lang="scss" scoped>
.btn {
    min-height: 3rem;
}
</style>