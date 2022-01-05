let inc = 0.05;
let scl = 10;
let cols, rows;
let steps = 3000;

let flowfield;
let points = [];

function setup() {
  createCanvas(576, 576, SVG);
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(cols * rows);
  noFill();
  noLoop();
}

function draw() {
  background(255);
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      if (x % 2 == 0) {
        points.push(createVector(x * scl, y * scl));
      }
      let index = x + y * cols;
      let angle = noise(xoff, yoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;

      // stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;
  }

  // pick a point
  points.forEach((pt) => {
    walkpoint(pt);
  });
  console.log(points.length);
}

function walkpoint(pt) {
  stroke("black");
  beginShape();
  for (let step = 0; step < steps; step++) {
    if (pt.x < 0 || pt.x > width || pt.y < 0 || pt.y > height) {
      break;
    }
    curveVertex(pt.x, pt.y);
    let x = floor(pt.x / scl);
    let y = floor(pt.y / scl);
    let index = x + y * cols;
    let force = flowfield[index];
    pt.add(force);
  }
  endShape();
}

function mousePressed() {
  save("fidenza.svg");
}
