export default class Piece {
  constructor(isGoal, isSingle, rowIndex, colIndex, orientation) {
    this.isGoal = isGoal;
    this.isSingle = isSingle;
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.orientation = orientation;
  }
}
