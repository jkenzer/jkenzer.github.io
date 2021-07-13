class Circle {
  constructor(x, y, outerRadius) {
    this.x = x;
    this.y = y;
    this.innerRadius = 20;
    this.mediumRadius = 40;
    this.outerRadius = outerRadius;
  }

  draw() {
    stroke(0, 0, 0);
    strokeWeight(2);
    noFill();
    circle(this.x, this.y, this.innerRadius);
    circle(this.x, this.y, this.mediumRadius);
    circle(this.x, this.y, outerRadius);
  }
}
