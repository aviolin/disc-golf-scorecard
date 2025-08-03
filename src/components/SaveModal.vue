<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useGameStore } from '@/stores/game'
import { useFirebase } from '@/composables/useFirebase'

const props = defineProps({
    modal: Object,
})

const { addDocument, user } = useFirebase()
const gameStore = useGameStore()

const saveName = ref('')
const saveDate = ref(new Date().toISOString().split('T')[0])

const updateName = (event) => {
    saveName.value = event.target.value
}

const updateDate = (event) => {
    saveDate.value = event.target.value
}

const saveGame = () => {
    addDocument('games', {
        owner: user.value.uid,
        name: saveName.value,
        date: saveDate.value,
        holes: gameStore.holes,
        players: gameStore.players,
    })

    props.modal?.close()
}

</script>

<template>
    <p v-if="!user"><RouterLink to="/log-in">Log in</RouterLink> or <RouterLink to="/sign-up">create an account</RouterLink> to save your games.</p>
    <form v-else>
        <label for="savename">Save as:</label>
        <input type="text" id="savename" :value="saveName" @input="updateName"/>
        <label for="date">Date:</label>
        <input type="date" id="date" :value="saveDate" @change="updateDate"/>
        <button class="btn btn-save btn-primary" @click.prevent="saveGame">Save</button>
    </form>
</template>

<style lang="scss" scoped>
.btn-save {
    width: 100%;
}
</style>