

export function createGameFlow(knight) {
    const flow = {}
    flow.knight = knight
    let roundCount = 0
    flow.playRound = playRound
    return flow

    function playRound(field) {
        roundCount++
        if (roundCount === 1){
            knight.placeKnight(field)
        }
         if (roundCount === 2) {
             knight.placeTarget(field)
             knight.chaseKing()
         }
    }
}