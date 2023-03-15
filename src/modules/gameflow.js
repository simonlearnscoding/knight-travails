import {move, delay} from "./animation";
import {game, startWebsite} from "../index";
import {createKnight} from "./knight";

export function createGameFlow({knight, chessBoard}) {
    const flow = {}
    flow.knight = knight
    flow.switch = false
    let roundCount = 0
    flow.playRound = playRound
    return flow

    async function playRound(field) {
        if(flow.switch === true) {
            return
        }
        roundCount++
        flow.switch = true

        if (roundCount === 1){
            console.log(field)
            knight.placeKnight(field)
            flow.switch = false
        }
         else {
            chaseTheKing(field)

         }
    }

    async function chaseTheKing(field) {
        console.log(game.knight.position.index)
        game.knight.target = null
        game.knight.placeTarget(field)
        const winningArray = game.knight.chaseKing()
        if(!winningArray) {
            hardReset()
        }
        await move(winningArray, game.knight)
        await delay(1000)

        console.log(game.knight.position)
        reset(field)

        flow.switch = false
    }
    function hardReset(start, target) {
        const body = document.body
        body.innerHTML = ''
        startWebsite()
    }
    function reset(field) {


        chessBoard.removeGrayBoxes()
        chessBoard.resetAllFields()
        const newField = chessBoard.getField(field.index)
        game.knight = createKnight(game.chessBoard.fields)
        game.knight.placeKnight(newField)

        console.log(game.knight.position)
    }


}