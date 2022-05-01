class Tile {
  draw(type) {
    switch (type) {
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
      case "forkUpRight":
        this.forkUpRight();
        break;
      case "forkUpLeft":
        this.forkUpLeft();
        break;
      case "forkDown":
        this.forkDown();
        break;
      case "forkDownRight":
        this.forkDownRight();
        break;
      case "forkDownLeft":
        this.forkDownLeft();
        break;
    }
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
  forkUpRight() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, SIZE, HALFSIZE);
    line(HALFSIZE, HALFSIZE, HALFSIZE / 2, 0);
    line(HALFSIZE, HALFSIZE, HALFSIZE + HALFSIZE / 2, 0);
  }
  forkUpLeft() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, 0, HALFSIZE);
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
  forkDownRight() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, SIZE, HALFSIZE);
    line(HALFSIZE, HALFSIZE, HALFSIZE / 2, SIZE);
    line(HALFSIZE, HALFSIZE, HALFSIZE + HALFSIZE / 2, SIZE);
  }
  forkDownLeft() {
    strokeWeight(1);
    stroke("black");
    line(HALFSIZE, HALFSIZE, 0, HALFSIZE);
    line(HALFSIZE, HALFSIZE, HALFSIZE / 2, SIZE);
    line(HALFSIZE, HALFSIZE, HALFSIZE + HALFSIZE / 2, SIZE);
  }
}
