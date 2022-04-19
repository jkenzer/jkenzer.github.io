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
    }
    pop();
  }

  blank() {
    strokeWeight(1);
    // square(0, 0, size);
    // let spacing = size / 6;
    // for (let x = 0; x < size; x = x + spacing) {
    //   // line(0, x, x, 0);
    //   line(0, x, size, x);
    // }
  }
  oneLineVertical() {
    strokeWeight(1);
    stroke("black");
    // let spacing = size / 6;
    // for (let x = 0; x < size; x = x + spacing) {
    //   line(0, x, size / 2 - offset, x);
    //   line(size, x, size / 2 + offset, x);
    // }
    line(size / 2 - offset, 0, size / 2 - offset, size);
    line(size / 2 + offset, 0, size / 2 + offset, size);
  }
  oneLineHorizontal() {
    strokeWeight(1);
    stroke("black");
    // let spacing = size / 6;
    // for (let x = 0; x < size; x = x + spacing) {
    //   line(x, size / 2 - offset, x, 0);
    //   line(x, size / 2 + offset, x, size);
    // }
    line(0, size / 2 - offset, size, size / 2 - offset);
    line(0, size / 2 + offset, size, size / 2 + offset);
  }
  cross() {
    strokeWeight(1);
    stroke("black");
    line(size / 2 - offset, 0, size / 2 - offset, size / 2 - offset);
    line(size / 2 + offset, 0, size / 2 + offset, size / 2 - offset);
    line(0, size / 2 - offset, size / 2 - offset, size / 2 - offset);
    line(0, size / 2 + offset, size / 2 - offset, size / 2 + offset);
    line(size / 2 + offset, size / 2 - offset, size, size / 2 - offset);
    line(size / 2 + offset, size / 2 + offset, size, size / 2 + offset);

    line(size / 2 + offset, size / 2 + offset, size / 2 + offset, size);
    line(size / 2 - offset, size / 2 + offset, size / 2 - offset, size);
  }
  rightUpRight() {
    strokeWeight(1);
    stroke("black");
    line(size / 2 - offset, 0, size / 2 - offset, size / 2 + offset);
    line(size / 2 + offset, 0, size / 2 + offset, size / 2 - offset);
    line(size / 2 + offset, size / 2 - offset, size, size / 2 - offset);
    line(size / 2 - offset, size / 2 + offset, size, size / 2 + offset);
  }
  rightUpLeft() {
    strokeWeight(1);
    stroke("black");
    line(size / 2 - offset, 0, size / 2 - offset, size / 2 - offset);
    line(0, size / 2 - offset, size / 2 - offset, size / 2 - offset);
    line(size / 2 + offset, 0, size / 2 + offset, size / 2 + offset);
    line(0, size / 2 + offset, size / 2 + offset, size / 2 + offset);
  }
  rightDownRight() {
    strokeWeight(1);
    stroke("black");
    line(size / 2 - offset, size / 2 - offset, size, size / 2 - offset);
    line(size / 2 + offset, size / 2 + offset, size, size / 2 + offset);
    line(size / 2 - offset, size / 2 - offset, size / 2 - offset, size);
    line(size / 2 + offset, size / 2 + offset, size / 2 + offset, size);
  }
  rightDownLeft() {
    strokeWeight(1);
    stroke("black");
    line(0, size / 2 - offset, size / 2 + offset, size / 2 - offset);
    line(0, size / 2 + offset, size / 2 - offset, size / 2 + offset);
    line(size / 2 - offset, size / 2 + offset, size / 2 - offset, size);
    line(size / 2 + offset, size / 2 - offset, size / 2 + offset, size);
  }
}
