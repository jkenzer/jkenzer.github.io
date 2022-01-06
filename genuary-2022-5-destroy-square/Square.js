class Square {
  constructor(x, y, size, res) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.res = res;
    this.points = [];
    this.breakPointRadius = 1;
    this.mult = 0.5;
    this.numSteps = this.size + this.size / 2;
    let density = 20;

    this.breakPoint = createVector(random(size), random(size));
    for (let angle = 0; angle < 360; angle += 60) {
      let x = cos(angle) * this.breakPointRadius;
      let y = sin(angle) * this.breakPointRadius;
      let p = createVector(x, y);

      p.add(this.breakPoint);
      this.points.push(p);
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    rect(0, 0, this.size, this.size);
    // circle(this.breakPoint.x, this.breakPoint.y, this.breakPointRadius);
    for (let i = 0; i < this.points.length; i++) {
      for (let step = 0; step < this.numSteps; step++) {
        let angle;
        const p = this.points[i];
        if (p.x < this.breakPoint.x && p.y < this.breakPoint.y) {
          angle = map(noise(p.x * this.mult, p.y * this.mult), 0, 1, 180, 270);
        } else if (p.x > this.breakPoint.x && p.y < this.breakPoint.y) {
          angle = map(noise(p.x * this.mult, p.y * this.mult), 0, 1, 270, 360);
        } else if (p.x < this.breakPoint.x && p.y > this.breakPoint.y) {
          angle = map(noise(p.x * this.mult, p.y * this.mult), 0, 1, 90, 180);
        } else {
          angle = map(noise(p.x * this.mult, p.y * this.mult), 0, 1, 0, 90);
        }
        // let angle = p.heading();
        this.points[i].add(createVector(cos(angle), sin(angle)));
        if (
          this.points[i].x > this.size ||
          this.points[i].y > this.size ||
          this.points[i].x < 0 ||
          this.points[i].y < 0
        ) {
          console.log(this.points[i].x, this.points[i].y, "outside");
          break;
        }
        circle(this.points[i].x, this.points[i].y, 1);
        // }
      }
    }
  }
}
