<script setup>
import { ref } from 'vue'
import ModalWrapper from '@/components/ModalWrapper.vue'
import SaveModal from '@/components/SaveModal.vue'

const modalOpen = ref(false)
</script>

<template>
    <button class="btn btn-icon" @click="modalOpen = true"><span class="material-symbols-outlined">save</span></button>
    <ModalWrapper 
        v-if="modalOpen" 
        v-slot="modal"
        @close="modalOpen = false">
        <SaveModal :modal="modal"/>
    </ModalWrapper>
</template>

<style lang="scss" scoped>
.btn-icon {
    width: 100%;
}
</style>