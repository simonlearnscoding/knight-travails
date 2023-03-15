import {createFieldHTML, createChessboardContent} from './interface'
import {game} from './../index'
export function createChessboard() {
    const obj = {}
    obj.getField = (index) => {
        const findthem = obj.fields.filter(item => item.index[0] == index[0] && item.index[1] == index[1])
        return findthem[0]

    }
    obj.html = createChessboardContent()
    obj.fields = createFields(obj)
    obj.fields.forEach((node) => { node.siblings = node.siblingsfn()})
    obj.resetAllFields = () => {
        obj.html.innerHTML = ''
        obj.fields = createFields(obj)
        obj.fields.forEach((node) => {node.siblings = node.siblingsfn()})

        // obj.fields.forEach(node => {


            // node.element.innerText = ""
            // node.calledFrom = null;
            // })
    }
    obj.removeGrayBoxes = () => {obj.fields.forEach(node => node.element.classList.remove('visited'))}
    return obj
}

function createFields(obj) {
    const Array = []
    for(let i = 1; i < 9 ; i++) {
        for(let j = 1; j < 9 ; j++) {
            Array.push(createField([i, j], obj))
        }
    }
    return Array
}

function createField(index, chessBoard) {
    const obj = {}
    obj.chessBoard = chessBoard
    obj.index = index
    obj.possibleMoves = [
        [2,1], [2, -1],
        [-2, -1], [-2, -1],
        [1, -2], [1, 2],
        [-1, 2], [-1, -2]
    ]
    obj.calledFrom = null
    obj.siblingsfn = createSiblings
    obj.siblings = null
    obj.element = createFieldHTML()
    obj.relatedFields = {}
    obj.previousElement = null
    obj.element.addEventListener('click',
        FunctionTrigger.bind(obj))

    async function FunctionTrigger() {
        console.log(index)
        await game.flow.playRound(this)
    }
    function createSiblings() {
        const moves = []
        for (const move of obj.possibleMoves) {
            const targetIndex = [(obj.index[0] + move[0]), (obj.index[1] + move[1])]

            const target = obj.chessBoard.fields.find( node => (node.index[0] === targetIndex[0]) && (node.index[1] === targetIndex[1]))
            if (target){
                moves.push(target)
            }
        }
         return moves
    }
    return obj
}



