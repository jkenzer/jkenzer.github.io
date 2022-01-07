class Square {
  constructor(x, y, size, res) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.res = res;
    this.points = [];
    this.breakPointRadius = 2;
    this.mult = 0.5;
    this.numSteps = this.size + this.size / 2;
    let density = 20;

    this.breakPoint = createVector(random(size), random(size));
    for (let angle = 0; angle < 360; angle += 15) {
      let p = createVector(0, 1);
      p.setHeading(angle);
      p.mult(this.breakPointRadius);
      p.add(this.breakPoint);
      this.points.push({
        p,
        heading: angle,
      });
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    rect(0, 0, this.size, this.size);
    circle(this.breakPoint.x, this.breakPoint.y, this.breakPointRadius + 5);
    for (let i = 0; i < this.points.length; i++) {
      beginShape();
      for (let step = 0; step < this.numSteps; step++) {
        let angle;
        const p = this.points[i];
        angle = map(
          noise(p.p.x * this.mult, p.p.y * this.mult),
          0,
          1,
          this.points[i].heading - 1,
          this.points[i].heading + 1
        );
        let tp = p5.Vector.fromAngle(angle);
        this.points[i].p.add(tp.mult(1.3));
        if (
          this.points[i].p.x > this.size ||
          this.points[i].p.y > this.size ||
          this.points[i].p.x < 0 ||
          this.points[i].p.y < 0
        ) {
          break;
        }
        curveVertex(this.points[i].p.x, this.points[i].p.y, 1);
        endShape();
      }
    }
  }
}
