class Pipes {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
    for (let a = 0; a < 360; a = a + 10) {
      let x = cos(a) * 30;
      let y = sin(a) * 30;
      let line = new Line(x, y);
      line.draw(0.15);
    }
    pop();
  }
}
