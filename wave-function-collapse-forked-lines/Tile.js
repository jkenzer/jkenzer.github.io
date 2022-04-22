class Tile {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw() {
    push();
    translate(this.x, this.y);
    switch (this.type) {
      case "blank":
        this.blank();
        break;
      case "oneLineVertical":
        this.oneLineVertical();
        break;
      case "oneLineHorizontal":
        this.oneLineHorizontal();
        break;
      case "cross":
        this.cross();
        break;
      case "rightUpRight":
        this.rightUpRight();
        break;
      case "rightUpLeft":
        this.rightUpLeft();
        break;
      case "rightDownRight":
        this.rightDownRight();
        break;
      case "rightDownLeft":
        this.rightDownLeft();
        break;
      case "forkUp":
        this.forkUp();
        break;
      case "forkDown":
        this.forkDown();
        break;
    }
    pop();
  }

  blank() {
    strokeWeight(0);
    square(0, 0, SIZE);
  }
  oneLineVertical() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, 0, HALFSIZE, SIZE);
  }
  oneLineHorizontal() {
    strokeWeight(1);
    stroke("black");
    line(0, HALFSIZE, SIZE, HALFSIZE);
  }
  cross() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, 0, HALFSIZE, SIZE);
    line(0, HALFSIZE, SIZE, HALFSIZE);
  }
  rightUpRight() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, 0, HALFSIZE, HALFSIZE);
    line(HALFSIZE, HALFSIZE, SIZE, HALFSIZE);
  }
  rightUpLeft() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, 0, HALFSIZE, HALFSIZE);
    line(0, HALFSIZE, HALFSIZE, HALFSIZE);
  }
  rightDownRight() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, HALFSIZE, SIZE);
    line(HALFSIZE, HALFSIZE, SIZE, HALFSIZE);
  }
  rightDownLeft() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, HALFSIZE, SIZE);
    line(0, HALFSIZE, HALFSIZE, HALFSIZE);
  }
  forkUp() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, HALFSIZE, SIZE);
    line(HALFSIZE, HALFSIZE, HALFSIZE / 2, 0);
    line(HALFSIZE, HALFSIZE, HALFSIZE + HALFSIZE / 2, 0);
  }
  forkDown() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, HALFSIZE, 0);
    line(HALFSIZE, HALFSIZE, HALFSIZE / 2, SIZE);
    line(HALFSIZE, HALFSIZE, HALFSIZE + HALFSIZE / 2, SIZE);
  }
}
