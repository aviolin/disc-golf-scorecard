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
    <div class="card-wrapper">
        <div v-if="gameStore.players.length == 0 || gameStore.holes.length == 0">
            <p>You haven't started a game yet.</p>
            <NewGameButton classes="btn btn-primary"/>
        </div>
        <template v-else>
            <div class="table-wrapper">
                <table class="scorecard">
                    <thead>
                        <tr>
                            <th class="hole hole-info save-holder">
                                <SaveGame />
                            </th>
                            <th v-for="(player, index) in gameStore.players" :key="index">
                                <PlayerInfo :player="player" />
                            </th>
                            <th class="add-player">
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
                            <td class="hole hole-info">
                                <button class="btn btn-icon" @click="gameStore.addHole()">
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
        </template>
    </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100vw;
    height: calc(100vh - 4rem);
    height: calc(100dvh - 4rem);
    overflow: scroll;
}
.table-wrapper {
    min-width: min(768px, 100%);
    width: fit-content;
    margin: auto;
    background: var(--col-dark-gray);
    border-radius: var(--border-radius);
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
    top: 0;
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
.add-player {
    .btn {
        border: 0;
    }
}
.save-holder {
    background: var(--col-white);
}
.btn.btn-icon {
    width: 100%;
}
</style>