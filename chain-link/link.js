class Link {
  constructor(x, y, a, s) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.s = s;
  }

  update(a) {
    this.a += a;
  }
  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.a);
    const radius = this.s / 4;
    const spacing = radius / 12;
    for (let index = this.s - radius; index < this.s; index += spacing) {
      rect(0, 0, index / 2, index, radius, radius, radius, radius);
    }
    pop();
  }
}
