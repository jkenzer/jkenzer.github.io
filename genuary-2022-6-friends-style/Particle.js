// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in
//
// Coding Challenge #24: Perlin Noise Flow  Field
// https://youtu.be/BjoM9oKOAKY

class Particle {
  constructor(start, maxspeed) {
    this.finished = false;
    this.history = [];
    this.pos = start;
  }

  update() {
    this.history.push(this.pos.copy());
    this.pos.add(this.vel);
  }
  show() {
    stroke(0);
    noFill();
    strokeWeight(1);
    beginShape();
    this.history.forEach((v) => {
      vertex(v.x, v.y);
    });
    endShape();
  }

  check(others) {
    if (!this.finished) {
      others.forEach((other) => {
        if (other != this) {
          other.history.forEach((v) => {
            let d = p5.Vector.dist(this.pos, v);
            if (d < 8) {
              this.finished = true;
              return;
            }
          });
        }
      });
    }
  }

  edges() {
    if (
      this.pos.x < 0 ||
      this.pos.x > width - 1 ||
      this.pos.y < 0 ||
      this.pos.y > height - 1
    ) {
      this.finished = true;
    }
  }

  follow(flowfield) {
    let x = floor(this.pos.x / flowfield.scl);
    let y = floor(this.pos.y / flowfield.scl);
    let index = x + y * flowfield.cols;
    this.vel = flowfield.vectors[index];
  }
}
