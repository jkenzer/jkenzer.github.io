class Tile {
  draw(type) {
    switch (type) {
      case "blank":
        this.edges = [0, 0, 0, 0];
        this.blank();
        break;
      case "oneLineVertical":
        this.edges = [1, 0, 1, 0];
        this.oneLineVertical();
        break;
      case "oneLineHorizontal":
        this.edges = [0, 1, 0, 1];
        this.oneLineHorizontal();
        break;
      case "cross":
        this.edges = [1, 1, 1, 1];
        this.cross();
        break;
    }
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
