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
            <table class="scorecard">
                <thead>
                    <tr>
                        <th class="hole">
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
                        <td class="hole">
                            <HoleInfo :hole="hole" />
                        </td>
                        <HoleScore :player="player" :hole="hole" v-for="(player, playerIndex) in gameStore.players" :key="playerIndex" />
                    </tr>
                    <tr>
                        <td class="hole">
                            <button class="btn btn-add btn-small" @click="gameStore.addHole()">+</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="scorecard-total-row">
                    <tr>
                        <td class="hole">
                            Total
                        </td>
                        <td v-for="(player, playerIndex) in gameStore.players" :key="playerIndex">
                            {{ player.total > 0 ? `+${player.total}` : player.total }}
                        </td>
                    </tr>
                </tfoot>
            </table>
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
td {
    text-align: center;
}
tfoot {
    position: sticky;
    bottom: 0;
    background: black;
    color: white;
    z-index: 50;
    td {
        padding: 1rem;
    }
}
th {
    position: sticky;
    top: 0;
    background: white;
    padding: .5rem;
    z-index: 50;
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
</style>