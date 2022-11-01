import {createFieldHTML, createChessboardContent} from './interface'
import {game} from './../index'
export function createChessboard() {
    const obj = {}
    obj.html = createChessboardContent()
    obj.fields = createFields()
    return obj
}

function createFields() {
    const Array = []
    for(let i = 1; i < 9 ; i++) {
        for(let j = 1; j < 9 ; j++) {
            Array.push(createField([i, j]))
        }
    }
    return Array
}


function createField(index) {
    const obj = {}
    obj.index = index
    obj.element = createFieldHTML()
    obj.element.addEventListener('click',
    obj.FunctionTrigger)
    obj.FunctionTrigger = (index=index) => {

        console.log(index)
        game.flow.playRound(index)
    }

    return obj
}
function getColor() {

}