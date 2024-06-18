import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', () => {

    let data = null;
    if (localStorage.getItem('scorecard')) {
        data = JSON.parse(localStorage.getItem('scorecard'))
    }

    const players = ref(data?.players || [])
    const holes = ref(data?.holes || [])

    const addPlayer = () => {
        players.value.push({
            id: players.value.length + Date.now(),
            name: '',
            holes: [],
            total: 0,
        })

        setHoles(holes.value.length)

        return players.value[players.value.length - 1]
    }

    const removePlayer = (id) => {
        players.value = players.value.filter((p) => p.id !== id)
    }

    const setPlayers = (_players) => {
        players.value = _players.map((p) => {
            return {
                id: Date.now() + Math.random() + '',
                name: 'Anonymous',
                holes: holes.value.map((h) => {
                    return {
                        id: h.id,
                        score: '',
                    }
                }),
                total: 0,
                ...p,
            }
        })
    }

    const addHole = () => {
        holes.value.push({
            id: holes.value.length,
            par: 3,
        })

        players.value.forEach((player) => {
            player.holes.push({
                id: holes.value.length - 1,
                score: '',
            })
        })
    }

    const setHoles = (numHoles) => {
        holes.value = []
        for (let i = 0; i < numHoles; i++) {
            holes.value.push({
                id: i,
                par: 3,
                notes: '',
            })
        }

        players.value.forEach((player) => {
            for (let i = 0; i < numHoles; i++) {
                if (!player.holes[i]) {
                    player.holes[i] = {
                        id: i,
                        score: '',
                        notes: '',
                    } 
                }
            }
        })
    }

    const setGame = (game) => {
        players.value = [];
        holes.value = [];
        game.players.forEach((player) => {
            players.value.push({
                id: player.id,
                name: player.name,
                holes: player.holes,
                total: player.total,
            })
        })

        game.holes.forEach((hole) => {
            holes.value.push({
                id: hole.id,
                par: hole.par,
                notes: hole.notes,
            })
        })
    }

    const cloneGame = (game) => {
        setGame(game)
        players.value.forEach((player) => {
            player.holes = player.holes.map((h) => {
                return {
                    id: h.id,
                    score: '',
                    notes: '',
                }
            })
        })
    }

    const setHole = (holeId, par, notes) => {
        const hole = holes.value.find((h) => h.id === holeId)
        if (!hole) return;

        hole.par = par
        hole.notes = notes
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

    const updateName = (playerId, name) => {
        const player = players.value.find((p) => p.id === playerId)
        if (!player) return;

        player.name = name
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

    const reset = () => {
        players.value = []
        holes.value = []
    }

    const updateLocalStorage = () => {
        localStorage.setItem('scorecard', JSON.stringify({
            players: players.value,
            holes: holes.value,
        }))
    }

    watch(players, updateLocalStorage, { deep: true })
    watch(holes, updateLocalStorage, { deep: true })

    return { players, holes, cloneGame, setGame, addPlayer, removePlayer, setPlayers, updateName, addHole, setHole, setHoles, setScore, reset, setPar }
})