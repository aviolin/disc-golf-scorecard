<script setup>
import { onMounted, ref, watch } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import { useGameStore } from '@/stores/game'
import { router } from '@/router'
import NewGameButton from '@/components/NewGameButton.vue'

const { user, userGames, deleteDocument } = useFirebase()
const gameStore = useGameStore()
const currentUID = ref('')

const loadGame = (game) => {
    gameStore.setGame(game);
    router.push('/play');
}

const cloneGame = (game) => {
    gameStore.setGame(game);
    router.push('/play');
}

</script>

<template>
    <form class="archive">
        <h1>My games</h1>
        <NewGameButton classes="btn btn-primary"/>
        <p v-if="!userGames.length && user">
            No games found.
        </p>
        <p v-else-if="!userGames.length && !user">
            <RouterLink to="/log-in">Log in</RouterLink> or <RouterLink to="/sign-up">create an account</RouterLink> to save your games.
        </p>
        <ul v-else>
            <li v-for="game in userGames" :key="game.id">
                <button class="btn btn-game" @click.prevent="loadGame(game)"><small>{{ game.date }}</small> - {{ game.name }}</button>
                <div>
                    <button class="btn btn-add btn-small" @click.prevent="cloneGame(game)">Clone</button>
                    <button class="btn btn-remove" @click.prevent="deleteDocument('games', game.id)">Delete</button>
                </div>
            </li>
        </ul>
    </form>
</template>

<style lang="scss" scoped>
.archive {
    padding: 2rem;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.btn-game {
    background: none;
    border: 0;
    color: black;
}
</style>