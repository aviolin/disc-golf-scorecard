<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits([
    'close',
])

</script>

<template>
    <Teleport to="body">
        <div class="modal">
            <div class="modal-inner">
                <button class="btn btn-close" @click="() => emit('close')">X</button>
                <slot :close="() => emit('close')" :test="5"></slot>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-inner {
    max-width: min(calc(100% - 4rem), 600px);
    margin: auto;
    margin-top: 3rem;
    background: white;
    padding: 1rem;
    position: relative;
}
.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    border: 0;
    background: transparent;
    color: black;
    cursor: pointer;
}
</style>