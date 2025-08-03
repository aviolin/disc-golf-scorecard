<script setup>
import { ref } from 'vue'
import { useGameStore } from '@/stores/game';
import HoleScore from '@/components/ScoreInfo.vue';
import HoleInfo from '@/components/HoleInfo.vue';
import PlayerInfo from '@/components/PlayerInfo.vue';
import SaveGame from '@/components/SaveGameButton.vue';
import NewGameButton from '@/components/NewGameButton.vue';

const gameStore = useGameStore();
</script>

<template>
    <div v-if="gameStore.players.length == 0 || gameStore.holes.length == 0" class="container">
        <p>You haven't started a game yet.</p>
        <NewGameButton classes="btn btn-primary"/>
    </div>
    <div v-else class="card-wrapper">
        <div class="table-wrapper">
            <table class="scorecard">
                <thead>
                    <tr>
                        <th class="hole hole-info btn-td">
                            <SaveGame />
                        </th>
                        <th v-for="(player, index) in gameStore.players" :key="index" class="player-info">
                            <PlayerInfo :player="player" />
                        </th>
                        <th class="btn-td">
                            <PlayerInfo :player="{}" :addButton="true" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(hole, holeIndex) in gameStore.holes" class="scorecard-row" :key="holeIndex">
                        <td class="hole hole-info">
                            <HoleInfo :hole="hole" />
                        </td>
                        <HoleScore :player="player" :hole="hole" v-for="(player, playerIndex) in gameStore.players" :key="playerIndex" />
                    </tr>
                    <tr>
                        <td class="hole hole-info btn-td">
                            <button class="btn btn-icon" @click.prevent="gameStore.addHole()">
                                <span class="material-symbols-outlined">add_circle</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="scorecard-total-row">
                    <tr>
                        <td class="hole hole-info">
                            Total
                        </td>
                        <td v-for="(player, playerIndex) in gameStore.players" :key="playerIndex" class="hole hole-total">
                            {{ player.total > 0 ? `+${player.total}` : player.total }}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 2rem;
}
.card-wrapper {
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100vw;
    height: calc(100vh - 4rem);
    height: calc(100dvh - 4rem);
    overflow: auto;
}
.table-wrapper {
    min-width: min(768px, 100%);
    width: fit-content;
    margin: auto;
    // background: var(--col-dark-gray);
}
td {
    text-align: center;
}
tfoot {
    position: sticky;
    bottom: 0;
    background: var(--col-black);
    color: var(--col-white);
    z-index: 50;
    td {
        padding: 1rem;
    }
    .hole-info {
        background: var(--col-black);
        z-index: 70;
    }
}
th {
    padding: .5rem;
}
thead {
    position: sticky;
    top: 2px;
    background: var(--col-white);
    z-index: 50;
}
.hole-info {
    position: sticky;
    left: 0;
    background: var(--col-black);
    z-index: 1;

    .btn-icon {
        * {
            color: var(--col-white);
        }
    }
}
.hole-total {
    font-weight: 700;
}
.add-hole {
    padding-block: 1rem;
    text-align: center;
}
.btn.btn-icon {
    width: 100%;
}

.btn-td {
    background: var(--col-black);
    transition: .3s;
    &:hover {
        background: var(--col-black);
    }
}

.player-info {
    background: var(--col-black);
    transition: .3s;
    &:hover {
        background: var(--col-black);
    }
}
</style>