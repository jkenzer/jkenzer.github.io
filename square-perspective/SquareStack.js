class SquareStack {
  constructor(stackSize, x, y, offsetX, offsetY) {
    this.stackSize = stackSize;
    this.x = x;
    this.y = y;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  draw() {
    let initX = this.x;
    let initY = this.y;
    for (let stack = 0; stack < this.stackSize; stack++) {
      square(initX, initY, squareSize);
      initX = initX + this.offsetX;
      initY = initY + this.offsetY;
    }
  }
}
