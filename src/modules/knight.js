import {spawnKnight, spawnKing} from './interface'

export function createKnight(fields) {
    const obj = Object.create(functions)
    obj.fields = fields
    obj.position = null
    obj.queue = []
    obj.target = null
    obj.winningArray = null
    obj.visitedNodes = []

    obj.placeKnight = (field) => {
        obj.position = field
        obj.queue.push(obj.position)
        spawnKnight(field)


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
        return this.getMovesArray(this.target) //returning an array with the  fastest route
        },

        getMovesArray(target) {
        const array = []
        addNode(target)
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
            if (nodesToQueue.length === 0) {
                return}

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
