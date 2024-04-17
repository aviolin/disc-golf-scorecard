<script setup>
import { ref } from 'vue'
import ModalWrapper from '@/components/ModalWrapper.vue'
import SaveModal from '@/components/SaveModal.vue'

const modalOpen = ref(false)
</script>

<template>
    <button class="btn btn-primary btn-small" @click="modalOpen = true">Save</button>
    <ModalWrapper 
        v-if="modalOpen" 
        v-slot="modal"
        @close="modalOpen = false">
        <SaveModal :modal="modal"/>
    </ModalWrapper>
</template>