<script setup>
import { useFirebase } from '@/composables/useFirebase'
import { useGameStore } from '@/stores/game'
import { router } from '@/router'
import NewGameButton from '@/components/NewGameButton.vue'

const { status, user, userGames, deleteDocument, getGames } = useFirebase()
const gameStore = useGameStore()

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

</script>

<template>
    <form v-if="status !== 'loading'" class="archive container">
        <h1>My games</h1>
        <NewGameButton />
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
                        {{ game.name }}
                        <time :datetime="game.date">{{ new Date(game.date).toLocaleDateString('en-us', {timeZone: 'UTC'}) }}</time>
                    </button>
                    <div class="game-row__buttons">
                        <div class="main-buttons">
                            <button class="btn btn-icon" @click.prevent="loadGame(game)">
                                <span class="material-symbols-outlined">visibility</span> View
                            </button>
                            <button class="btn btn-icon" @click.prevent="cloneGame(game)">
                                <span class="material-symbols-outlined">content_copy</span> Clone
                            </button>
                        </div>
                        <button class="btn btn-icon btn-warn" @click.prevent="deleteGame(game)">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
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
    background: var(--col-dark-gray);
    padding: 1rem;
    border-radius: var(--border-radius);
    color: var(--col-black);
    transition: .3s;

    &:hover {
        background: var(--col-accent);
    }
}

.btn-game {
    background: none;
    border: 0;
    color: var(--col-offwhite);
    font-size: 1.5rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
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
.main-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

}

time {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: .75rem;
}
</style>