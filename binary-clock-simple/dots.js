class Dot {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.on = false;
  }

  draw() {
    (this.on) ? fill(55, 100, 174): fill(100, 100, 100);
    circle(this.xPos, this.yPos, 20);
  }
}