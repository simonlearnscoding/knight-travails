import {UICreator} from './modules/interface'
import {createChessboard} from './modules/chessboard'
import {createGameFlow} from './modules/gameflow'
import {createKnight} from './modules/knight'
import './styles/style.css';
import * as UI from './modules/interface'
export const game = {}

document.addEventListener('DOMContentLoaded', () => { startWebsite()}) //typo for testing

export function startWebsite() {
    game.ui = UICreator()
    game.chessBoard = createChessboard()
    game.knight = createKnight(game.chessBoard.fields)
    game.flow = createGameFlow(game)

   // game.ui.createMainStructure()
 }





// our task is to build a function knightMoves that
// shows the shortest possible way to get from ones square to another
// by outputting all squares the knight will stop on along the way.

// You can think of the board as having 2-dimensional coordinates.
// Your function would therefore look like:
//     knightMoves([0,0],[1,2]) == [[0,0],[1,2]]

  function knightMoves(startPos, endPos) {

  }


// Put together a script that creates a game board and a knight