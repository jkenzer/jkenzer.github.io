// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in
//
// Coding Challenge #24: Perlin Noise Flow  Field
// https://youtu.be/BjoM9oKOAKY

class FlowField {
  constructor(res) {
    this.scl = res;
    this.cols = floor(width / res) + 1;
    this.rows = floor(height / res) + 1;
    this.vectors = new Array(this.cols * this.rows);
    this.inc = 0.02;
    this.zoff = 0;
  }

  // This sets all the directions in the flow field
  update() {
    let yoff = 0;
    for (let y = 0; y < this.rows; y++) {
      let xoff = 0;
      for (let x = 0; x < this.cols; x++) {
        let n = noise(xoff, yoff);
        let angle = map(n, -1, 1, 0, TWO_PI);
        let v = p5.Vector.fromAngle(angle);
        let index = x + y * this.cols;
        this.vectors[index] = v;

        xoff += this.inc;
      }
      yoff += this.inc;
    }
  }

  // This is just for debugging - visualizing the flow field
  display() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let index = x + y * this.cols;
        let v = this.vectors[index];

        stroke(0);
        strokeWeight(2);
        push();
        translate(x * this.scl, y * this.scl);
        rotate(v.heading());
        line(0, 0, this.scl, 0);
        pop();
      }
    }
  }
}
