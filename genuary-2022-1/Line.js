class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(scale = 1) {
    push();
    translate(this.x, this.y);
    rotate(random(0, 360));
    bezier(
      -150 * scale,
      0 * scale,
      -125 * scale,
      -120 * scale,
      125 * scale,
      120 * scale,
      150 * scale,
      0 * scale
    );
    pop();
  }
}
