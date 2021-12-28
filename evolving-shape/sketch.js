// Based on Generative Gestaltung – Creative Coding im Web P_2_2_3_01

let formResolution = 25;
let stepSize = 2;
let distortionFactor = 0.5;
let initRadius = 150;
let centerX;
let centerY;
let x = [];
let y = [];
let freeze = true;

function setup() {
  createCanvas(96 * 11, 96 * 8.5, SVG);

  // init shape
  centerX = width / 2;
  centerY = height / 2;
  let angle = radians(360 / formResolution);
  for (let i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }

  stroke(0, 50);
  strokeWeight(1);
  background(255);
  noFill();
}

let prevX;
let prevY;
function draw() {
  // floating towards mouse position
  if (mouseX != 0 && mouseY != 0) {
    centerX += (mouseX - centerX) * 0.01;
    centerY += (mouseY - centerY) * 0.01;
  }

  // calculate new points
  for (let i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    // uncomment the following line to show position of the agents
    // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
  }
  beginShape();
  // first controlpoint
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // only these points are drawn
  for (let i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlpoint
  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();
}

function mousePressed() {
  freeze = !freeze;
  if (freeze) {
    noLoop();
  } else {
    loop();
  }
}
function keyReleased() {
  if (key == "s" || key == "S") save("evolve.svg");
}
