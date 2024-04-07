import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', () => {
    const players = ref([])
    const holes = ref([])

    const addPlayer = () => {
        players.value.push({
            id: players.value.length + Date.now(),
            name: '',
            holes: [],
            total: 0,
        })

        setHoles(holes.value.length)
    }

    const removePlayer = (id) => {
        players.value = players.value.filter((p) => p.id !== id)
    }

    const setHoles = (numHoles) => {
        holes.value = []
        for (let i = 1; i <= numHoles; i++) {
            holes.value.push({
                id: i,
                par: 3,
            })
        }

        players.value.forEach((player) => {
            for (let i = 1; i <= numHoles; i++) {
                if (!player.holes[i]) {
                    player.holes[i] = {
                        id: i,
                        score: '',
                    } 
                }
            }
        })
    }

    const setScore = (playerId, holeId, score) => {
        const player = players.value.find((p) => p.id === playerId)
        if (!player) return;
        
        const holeIndex = player.holes.findIndex((h) => {
            return h?.id === holeId
        })
        if (holeIndex === -1) return;

        player.holes[holeIndex].score = score

        calcTotals()
    }

    const setPar = (holeId, par) => {
        const hole = holes.value.find((h) => h.id === holeId)
        if (!hole) return;

        hole.par = par

        calcTotals()
    }

    const calcTotals = () => {
        players.value.forEach((player) => {
            player.total = player.holes.reduce((acc, h) => {
                if (h.score === 'E' || h.score === '') return acc
                const par = holes.value.find((hole) => hole.id === h.id).par
                return acc + h.score - par
            }, 0)
        })
    }

    return { players, holes, addPlayer, removePlayer, setHoles, setScore, setPar }
})