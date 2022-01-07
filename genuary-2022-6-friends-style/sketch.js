// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in
//
// Coding Challenge #24: Perlin Noise Flow  Field
// https://youtu.be/BjoM9oKOAKY

let flowfield;
particles = [];

let debug = false;

function setup() {
  createCanvas(500, 500);
  let res = 8;
  flowfield = new FlowField(res);
  flowfield.update();

  particles = [];
  for (let i = 0; i < 1000; i++) {
    let start = createVector(random(width), random(height));
    particles.push(new Particle(start, 5));
  }
}

function draw() {
  background(255);

  flowfield.update();

  if (debug) flowfield.display();

  particles.forEach((p) => {
    p.edges();
    p.check(particles);
    if (!p.finished) {
      p.follow(flowfield);
      p.update();
    }
    p.show();
  });
}
