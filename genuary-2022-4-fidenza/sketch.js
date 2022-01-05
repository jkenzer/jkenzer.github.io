let inc = 1.5;
let scl = 20;
let stepSize = 1;
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
      points.push(createVector(x * scl, y * scl));
      let index = x + y * cols;
      let angle = noise(xoff, yoff);
      let cAngle = map(angle, -1, 1, 0, TWO_PI);
      let v = p5.Vector.fromAngle(cAngle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;

      stroke(0, 50);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      strokeWeight(1);
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
  }

  // pick a point
  // let pttest = createVector(width / 2, 200);
  // walkpoint(pttest);
  // let pttest2 = createVector(width / 2 + 10, 300);
  // walkpoint(pttest2);

  points.forEach((pt) => {
    walkpoint(pt);
  });
  // console.log(points.length);
}

function walkpoint(pt) {
  stroke("black");
  beginShape();
  vertex(pt.x, pt.y);
  for (let step = 0; step < steps; step++) {
    if (pt.x < 0 || pt.x > width || pt.y < 0 || pt.y > height) {
      break;
    }
    let x = floor(pt.x / scl);
    let y = floor(pt.y / scl);
    let index = x + y * cols;
    let force = flowfield[index];
    if (!force) {
      break;
    }
    curveVertex(pt.x, pt.y);
    force.mult(stepSize);
    pt.add(force);
  }
  vertex(pt.x, pt.y);
  endShape();
}

// function mousePressed() {
//   save("fidenza.svg");
// }
