<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useGameStore } from '@/stores/game'

const props = defineProps({
    hole: Object,
    modal: Object,
})

const gameStore = useGameStore()

const notes = ref(props.hole.notes)
const par = ref(props.hole.par)

const setPar = (value) => {
    par.value = value
}

const updateNotes = (event) => {
    notes.value = event.target.value
}

const saveHole = () => {
    gameStore.setHole(props.hole.id, par.value, notes.value)
    props.modal?.close()
}
</script>

<template>
    <form>
        <p>What is par for hole {{ hole.id + 1}}?</p>
        <div class="par-inputs">
            <label 
                v-for="i in 9" 
                class="radio-wrapper" 
                :key="i"
            >
                <input 
                    type="radio" 
                    name="holes" 
                    :value="i" 
                    :checked="par === i"
                    @change="par = i"
                >
                <span>{{ i }}</span>
            </label>
        </div>
        <label for="notes">Notes:</label>
        <textarea id="notes" class="notes-textarea" cols="8" :value="notes" @input="updateNotes"></textarea>
        <button class="btn btn-save btn-primary" @click.prevent="saveHole">Save</button>
    </form>
</template>

<style lang="scss" scoped>
.par-inputs {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: center;
}
.btn-save {
    width: 100%;
}
</style>