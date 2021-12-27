class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    // translate(this.x, this.y);
    // circle(0, 0, 3);
    bezier(-150, 0, -125, -120, 125, 120, 150, 0);
    pop();
  }
}
