let charGoal = '1';
let charSingle = '2';
let charSpace = '.';

export default class Board {
  constructor(pieces) {
    this.width = 4;
    this.height = 5;
    this.pieces = pieces;
    this.grid = [];
    this.spacePieceCoords = [];

    this.constructGrid();
  }

  constructGrid() {
    for (let rowIndex = 0; rowIndex < this.height; rowIndex++) {
      row = [];
      for (let colIndex = 0; colIndex < this.width; colIndex++) {
        row.push('');
      }
      this.grid.push(row);
    }

    this.pieces.array.forEach((piece) => {
      if (piece.isGoal) {
        this.grid[piece.rowIndex][piece.colIndex] = charGoal;
        this.grid[piece.rowIndex][piece.colIndex + 1] = charGoal;
        this.grid[piece.rowIndex + 1][piece.colIndex] = charGoal;
        this.grid[piece.rowIndex + 1][piece.colIndex + 1] = charGoal;
      } else if (piece.isSingle) {
        this.grid[piece.rowIndex][piece.colIndex] = charSingle;
      } else {
        if (piece.orientation == 'h') {
          this.grid[piece.rowIndex][piece.colIndex] = '<';
          this.grid[piece.rowIndex][piece.colIndex + 1] = '>';
        } else if (piece.orientation == 'v') {
          this.grid[piece.rowIndex][piece.colIndex] = '^';
          this.grid[piece.rowIndex + 1][piece.colIndex] = 'v';
        }
      }
    });

    // get the empty space coordinate
    this.getSpacePieces();
  }

  getSpacePieces() {
    for (rowIndex = 0; rowIndex < this.height; rowIndex++) {
      for (colIndex = 0; colIndex < this.width; colIndex++) {
        if (this.grid[rowIndex][colIndex] == charSpace) {
          this.spacePieceCoords.push([rowIndex, colIndex]);
        }
      }
    }
  }

  display() {
    console.table(this.grid);
  }
}
