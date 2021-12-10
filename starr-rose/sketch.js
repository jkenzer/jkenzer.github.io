// https://github.com/Lemmings42/Starr_Rose/blob/main/Starr_Rose.pde

let a = 8;
let b = 18;
let c = 18;

let radius = 50;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  beginShape();
  strokeWeight(1);
  for (let i = 0; i < 361; i++) {
    x = radius * (2 + sin(a * i) / 2) * cos(i + sin(b * i) / c);
    y = -radius * (2 + sin(a * i) / 2) * sin(i + sin(b * i) / c);
    vertex(x, y);
  }
  endShape();
}
