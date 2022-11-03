export async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
}
let left = 0
let top = 0
export function resetPositions() {
    left = 0
    top = 0
}
const makeMoveHorizontal = async(destination, velocity) => {
    (destination < 0) ? velocity = -5 : velocity = 5
    const target = document.getElementById("knight")
    let pos= 0
    do
     {
        await delay(5);
         pos = pos + velocity
         target.style.left = `${pos + left}px`;
    } while(pos !=destination)
    left = (left + pos)
    return
};

const makeMoveVertical = async(destination, velocity) => {
    (destination < 0) ? velocity = -5 : velocity = 5
    const target = document.getElementById("knight")
    let pos= 0
    do {
        await delay(5);
        pos = pos + velocity
        target.style.top = `${pos + top}px`;
    } while(pos != destination)
    top = (top + pos)
    return
};
export async function move(array, knight) {
    let count = 0
    knight.position.element.classList.add('visited')
    for (const i of array) {
        count++
        await delay(300)
        const direction = calculateMovement(i.index, knight.position.index)
        await moveField(direction)
        i.element.classList.add('visited')
        i.element.innerText = count
        knight.position.index = i.index
    }
}
function calculateMovement(index, position) {
   const pixel = 40

   const x = ((index[1] - position[1]) * pixel)
   const y = ((index[0] - position[0]) * pixel)
   return [x, y]

}
async function moveField(index) {

    // await moveOne('left', index[0])
    await makeMoveHorizontal(index[0], 5)
    await makeMoveVertical(index[1], 5)
    // await moveOne('top', index[1])

}

// const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

// await waitFor(500);
async function moveOne(direction, fields, velocity=5) {
    await makeMoveHorizontal(direction, fields, velocity)
    }






//
// export function move() {
//     const knight = document.getElementById("knight")
//     setInterval( moveinstance, 50)
//     }
// function moveinstance() {
//     let pos = 0
//     while(pos<500) {
//         pos +=1
//         knight.style.left=pos +"px"
//     }
//     clearInterval(time)
//     }