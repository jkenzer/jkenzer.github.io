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
    }
    pop();
  }

  blank() {
    strokeWeight(0);
    square(0, 0, size);
  }
  oneLineVertical() {
    strokeWeight(1);
    stroke("black");
    line(size / 2, 0, size / 2, size);
  }
  oneLineHorizontal() {
    strokeWeight(1);
    stroke("black");
    line(0, size / 2, size, size / 2);
  }
  cross() {
    strokeWeight(1);
    stroke("black");
    line(size / 2, 0, size / 2, size);
    line(0, size / 2, size, size / 2);
  }
}
