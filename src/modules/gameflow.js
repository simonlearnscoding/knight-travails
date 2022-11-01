

export function createGameFlow() {
    const flow = {}
    let roundCount = 0
    flow.playRound = playRound
    return flow

    function playRound(index) {
            roundCount++
            console.log(roundCount)
            console.log(index)
    }
}