<script setup>
import { onMounted, ref, watch } from 'vue'
import { useFirebase } from '@/composables/useFirebase'
import { useGameStore } from '@/stores/game'
import { router } from '@/router'
import NewGameButton from '@/components/NewGameButton.vue'

const { status, user, userGames, deleteDocument, getGames } = useFirebase()
const gameStore = useGameStore()
const currentUID = ref('')

const loadGame = (game) => {
    gameStore.setGame(game);
    router.push('/play');
}

const cloneGame = (game) => {
    gameStore.cloneGame(game);
    router.push('/play');
}

const deleteGame = (game) => {
    deleteDocument('games', game.id)
    getGames();
} 

const shareGame = (game) => {
    console.log('share', game)
}

</script>

<template>
    <form v-if="status !== 'loading'" class="archive">
        <h1>My games</h1>
        <p v-if="!userGames.length && user">
            No games found.
        </p>
        <p v-else-if="!userGames.length && !user">
            <RouterLink to="/log-in">Log in</RouterLink> or <RouterLink to="/sign-up">create an account</RouterLink> to save your games.
        </p>
        <ul v-else>
            <li v-for="game in userGames" :key="game.id">
                <div class="game-row">
                    <button class="btn btn-game btn-icon" @click.prevent="loadGame(game)">
                        <span class="material-symbols-outlined">edit</span>
                        {{ game.name }}</button>
                    <div class="game-row__buttons">
                        <time :datetime="game.date"><span class="material-symbols-outlined">calendar_month</span>{{ game.date }}</time>
                        <button class="btn btn-icon" @click.prevent="cloneGame(game)">
                            <span class="material-symbols-outlined">content_copy</span> Clone
                        </button>
                        <button class="btn btn-icon" @click.prevent="shareGame(game)">
                            <span class="material-symbols-outlined">share</span> Share
                        </button>
                        <button class="btn btn-icon btn-warn" @click.prevent="deleteGame(game)">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="bottom-buttons">
            <NewGameButton />
        </div>
    </form>
</template>

<style lang="scss" scoped>
.archive {
    padding: 2rem;
    padding-bottom: 10rem;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;
    background: var(--col-tertiary);
    padding: 1rem;
    border-radius: .5rem;
}

.btn-game {
    background: none;
    border: 0;
    color: var(--col-primary);
    font-size: 1.5rem;
    margin-bottom: .5rem;
}
.game-row {
    width: 100%;
}
.game-row__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

}

datetime {
    display: flex;
    align-items: center;
    gap: .5rem;
}

.bottom-buttons {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    background: var(--col-secondary);

    .btn {
        width: 100%;
    }
}
</style>