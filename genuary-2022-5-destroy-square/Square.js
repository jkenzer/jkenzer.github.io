class Square {
  constructor(x, y, size, res) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.res = res;
    this.flowField = [];
    this.cols = floor(size / res);
    this.rows = floor(size / res);
    this.upperLeft = createVector(-1 * (size / 2), -1 * (size / 2));

    // this should be dynamic
    this.steps = 250;
    this.stepSize = 1.5;

    // move to function to create a random number of break points
    // this.breakPoint = createVector(
    //   random(-1 * (size / 2), size / 2),
    //   random(-1 * (size / 2), size / 2)
    // );
    this.breakPoint = createVector(random(size), random(size));
  }

  draw() {
    push();
    translate(this.x, this.y);
    rect(0, 0, this.size, this.size);
    circle(this.breakPoint.x, this.breakPoint.y, 3);

    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        let index = x + y * this.cols;
        let angle = TWO_PI / 5;
        // let angle = TWO_PI / random(1, 10);
        let v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        this.flowField[index] = v;

        stroke(0, 50);
        push();
        // translate(this.upperLeft.x, this.upperLeft.y);
        translate(x * this.res, y * this.res);
        line(x, y, x + this.res, y);
        line(x, y, x, y + this.res);
        rotate(v.heading());
        strokeWeight(1);
        line(0, 0, this.res, 0);
        pop();
      }
    }
    console.log(this.flowField);
    push();
    // translate(this.upperLeft.x, this.upperLeft.y);
    this.walkpoint(this.breakPoint);
    pop();
    pop();
  }

  walkpoint(pt) {
    console.log(pt);
    stroke("black");
    beginShape();
    vertex(pt.x, pt.y);
    for (let step = 0; step < this.steps; step++) {
      if (pt.x < 0 || pt.x > this.size || pt.y < 0 || pt.y > this.size) {
        break;
      }
      let x = floor(pt.x / this.res);
      let y = floor(pt.y / this.res);
      let index = x + y * this.cols;
      console.log("index", index);
      let force = this.flowField[index];
      if (!force) {
        console.log("break");
        break;
      }
      vertex(pt.x, pt.y);
      force.mult(this.stepSize);
      pt.add(force);
    }
    vertex(pt.x, pt.y);
    endShape();
  }
}
