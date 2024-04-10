<script setup>
import { ref } from 'vue'
import { useGameStore } from '@/stores/game';
import HoleScore from '@/components/ScoreInfo.vue';
import HoleInfo from '@/components/HoleInfo.vue';
import PlayerInfo from '@/components/PlayerInfo.vue';

const gameStore = useGameStore();
</script>

<template>
    <div class="scorecard-wrapper">
        <table class="scorecard">
            <thead>
                <tr>
                    <th class="hole">Hole</th>
                    <th v-for="(player, index) in gameStore.players" :key="index">
                        <PlayerInfo :player="player" />
                    </th>
                    <th class="add-player">
                        <PlayerInfo :player="{}" :addButton="true" />
                    </th>
                </tr>
            </thead>
            <tr v-for="(hole, holeIndex) in gameStore.holes" class="scorecard-row" :key="holeIndex">
                <td class="hole">
                    <HoleInfo :hole="hole" />
                </td>
                <HoleScore :player="player" :hole="hole" v-for="(player, playerIndex) in gameStore.players" :key="playerIndex" />
            </tr>
            <tfoot class="scorecard-total-row">
                <td class="hole">
                    Total
                </td>
                <td v-for="(player, playerIndex) in gameStore.players" :key="playerIndex">
                    {{ player.total > 0 ? `+${player.total}` : player.total }}
                </td>
            </tfoot>
        </table>
        <div class="add-hole">
            <button class="btn btn-add" @click="gameStore.addHole()">Add Hole +</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.scorecard-wrapper {
    padding: 2rem;
}
.scorecard {
    margin: auto;
}
td {
    text-align: center;
}
tfoot {
    position: sticky;
    bottom: 0;
    background: #333;
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