import {spawnKnight, spawnKing} from './interface'
import {resetPositions} from "./animation";
import {reset} from "./gameflow"

export function createKnight(fields) {
    const obj = Object.create(functions)
    obj.fields = fields
    obj.position = null
    obj.queue = []
    obj.target = null
    obj.winningArray = null
    obj.visitedNodes = []

    obj.placeKnight = (field) => {
        resetPositions()
        obj.position = null
        obj.position = field

    console.log(obj.position)
        obj.target = null
        obj.winningArray = null
        obj.visitedNodes = []
        obj.queue = []

        obj.queue.push(obj.position)
        spawnKnight(obj.position)


    }
    obj.placeTarget = (field) => {
        obj.target = field
        spawnKing(field)
    }
    return obj
    }



const functions = {

    chaseKing() {
        this.recursion(this.position) // linking the  fastest route to the king
        const resultArray = this.getMovesArray(this.target) //returning an array with the  fastest route
        console.log(qualityCheck(resultArray))
        console.log('route:')
        resultArray.forEach(element =>  console.log(element.index[1], element.index[0]))
        if(qualityCheck(resultArray) !== 200) {
            console.log('something went wrong')
            console.log(qualityCheck(resultArray))
            console.log(this.position, this.target)
            return false
        }
        return resultArray
        },

        getMovesArray(target) {
        let array = []
        addNode(target)
        array.pop()
        array = array.reverse()
        return array

        function addNode(target) {
            array.push(target)
            if (!target.calledFrom){
              return
            }
            return addNode(target.calledFrom)
            }
        },
        recursion(node) {
            this.queue.shift()
            this.visitedNodes.push(node)
            if (node === this.target){
              return
            }
            const nodesToQueue = this.filterNodes(node.siblings)
            // if there is no node we haven't visited yet from here it's time to go home
            // if (nodesToQueue.length === 0) {
            //     return}

            nodesToQueue.forEach((sibling) => {
                this.queue.push(sibling)
                sibling.calledFrom = node
            })

            this.recursion(this.queue[0])
            },

        filterNodes(siblingnodes) {
            const nodesToDeleteSet = new Set(this.visitedNodes);
            const newArr = siblingnodes.filter((node) => {
                // return those elements not in the namesToDeleteSet
                return !nodesToDeleteSet.has(node);
            });

            return newArr
        }

}
function qualityCheck(array) {
    for (let integ = 0; integ < (array.length - 1); integ++) {

        const index = array[integ + 1].index
        const position = array[integ].index

        const x = Math.abs(index[1] - position[1])
        const y = Math.abs(index[0] - position[0])
        if (!((x == 1 && y == 2) | (x == 2 && y == 1))) {

            return(position, index)
        }
    }
    return 200
}

