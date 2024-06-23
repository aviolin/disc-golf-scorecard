<script setup>
import { defineProps, ref } from 'vue'
import HoleModal from '@/components/HoleModal.vue'
import ModalWrapper from '@/components/ModalWrapper.vue'

const props = defineProps({
    hole: Object,
})

const modalOpen = ref(false)

const setModalOpen = (value) => {
    modalOpen.value = value
}
</script>

<template>
    <button @click.prevent="() => setModalOpen(true)">
        <span class="hole-number">{{ hole.id + 1 }}</span>
        <b>{{ hole.par }}</b>
    </button>
    <ModalWrapper 
        v-if="modalOpen" 
        v-slot="modal"
        @close="() => setModalOpen(false)">
        <HoleModal :hole="hole" :modal="modal"/>
    </ModalWrapper>
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
    color: var(--col-white);
}
.hole-number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: .75rem;
}
</style>