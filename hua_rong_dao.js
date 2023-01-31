import Board from './Board.js';
import Piece from './Piece.js';

const board = document.getElementById('game-board');

const puzzlePieces = [];

let puzzleTxt = '^11^v11v^<>^v22v2..2';
let goalFound = false;
for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
  for (let colIndex = 0; colIndex < 4; colIndex++) {
    let char = puzzleTxt[rowIndex * 4 + colIndex];
    if (char == '^') {
      puzzlePieces.push(new Piece(false, false, rowIndex, colIndex, 'v'));
    } else if (char == '<') {
      puzzlePieces.push(new Piece(false, false, rowIndex, colIndex, 'h'));
    } else if (char == '2') {
      puzzlePieces.push(new Piece(false, true, rowIndex, colIndex, null));
    } else if (char == '1') {
      if (!goalFound) {
        puzzlePieces.push(new Piece(true, false, rowIndex, colIndex, null));
      }
      goalFound = true;
    }
  }
}

console.log(puzzlePieces);

const puzzle = new Board(puzzlePieces);

puzzle.createCellElements(board);
console.table(puzzle.grid);
