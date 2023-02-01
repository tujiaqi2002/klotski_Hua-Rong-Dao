export default class Piece {
  #rowIndex;
  #colIndex;

  constructor(pieceContainer, isGoal, isSingle, rowIndex, colIndex, orientation) {
    this.isGoal = isGoal;
    this.isSingle = isSingle;
    this.#rowIndex = rowIndex;
    this.#colIndex = colIndex;
    this.orientation = orientation;
    this.isClicked = false;
    this.pieceContainer = pieceContainer;

    this.pieceElement = this.createPieceElement();
    this.pieceContainer.addEventListener('mouseup', () => mouseUpResponse(this));
  }

  createPieceElement() {
    const pieceElement = document.createElement('div');
    this.pieceContainer.append(pieceElement);
    pieceElement.style.setProperty('--x', this.colIndex);
    pieceElement.style.setProperty('--y', this.rowIndex);
    pieceElement.addEventListener('mousemove', () => mouseMoveResponse(this));

    pieceElement.addEventListener('mousedown', () => mouseDownResponse(this));
    if (this.isSingle) {
      pieceElement.classList.add('piece-single');
    } else if (this.isGoal) {
      pieceElement.classList.add('piece-goal');
    } else if (this.orientation == 'h') {
      pieceElement.classList.add('piece-horizontal');
    } else if (this.orientation == 'v') {
      pieceElement.classList.add('piece-vertical');
    }
    return pieceElement;
  }

  get rowIndex() {
    return this.#rowIndex;
  }

  set rowIndex(rowIndex) {
    this.#rowIndex = rowIndex;
    this.pieceElement.style.setProperty('--y', rowIndex);
  }

  get colIndex() {
    return this.#colIndex;
  }

  set colIndex(colIndex) {
    this.#colIndex = colIndex;
    this.pieceElement.style.setProperty('--x', colIndex);
  }
}

function mouseDownResponse(piece) {
  // make border black
  piece.pieceElement.style.setProperty('border', 'solid black 7px');
  piece.clickedPositionX = event.clientX;
  piece.clickedPositionY = event.clientY;
  piece.isClicked = true;
}

function mouseUpResponse(piece) {
  piece.pieceElement.style.removeProperty('border');
}

function mouseMoveResponse(piece) {
  //   console.log(event.layerX);
  //   console.log(event);
  //   console.log(piece.pieceElement.getBoundingClientRect());
  //   console.log(piece.pieceElement.getBoundingClientRect().width);
  //   console.log(
  //     (event.clientX - piece.clickedPositionX) / piece.pieceElement.getBoundingClientRect().width
  //   );
  //   console.log(event.clientX - piece.clickedPositionX);

  const a = event.clientX - piece.clickedPositionX;
  console.log(event.movementX);
//   piece.pieceElement.style.setProperty('--dx', event.movementX);
}
