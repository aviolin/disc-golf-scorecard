<script setup>
import { useFirebase } from '@/composables/useFirebase'
import { useGameStore } from '@/stores/game'
import { router } from '@/router'
import MainFooter from '@/components/MainFooter.vue'
import NewGameButton from '@/components/NewGameButton.vue'

const { status, user, userGames, gamesStatus, deleteDocument, getGames } = useFirebase()
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
        <div class="logged-out-hero" v-if="!user">
            <h1>Disc Golf Scorecard</h1>
            <div class="button-wrapper">
                <NewGameButton />
            </div>
            <p>Easily track and save your scores.</p>
            <p>
                <RouterLink to="/log-in">Log in</RouterLink> or <RouterLink to="/sign-up">create an account</RouterLink> to save your games.
            </p>
        </div>
        <div class="logged-in-hero" v-else>
            <h1>My games</h1>
            <NewGameButton />
        </div>
        <p v-if="user && gamesStatus === 'loading'">
            Loading your games...
        </p>
        <p v-else-if="!userGames.length && user">
            No games found.
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

    <MainFooter />
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
    width: 100%;
    background: var(--col-dark-gray);
    padding: 1rem;
    border-radius: var(--border-radius);
    color: var(--col-black);
    transition: .3s;
    border: 1px solid var(--col-border);
    
    &:hover {
        box-shadow: 0 0 .5rem .5rem #f9f9f9;
        background: var(--col-black);
    }
}
.logged-out-hero {
    text-align: center;
    margin-bottom: 2rem;
    .button-wrapper {
        margin-block: 3rem;
    }
}
.btn-game {
    background: none;
    border: 0;
    color: var(--col-white);
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