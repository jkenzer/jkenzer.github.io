// Maurer Rose
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/4uU9lZ-HSqA
// https://editor.p5js.org/codingtrain/sketches/qa7RiptE9

let spacing;
let radius = 125;
let margin = 96 / 2; // half inch

function setup() {
  createCanvas(96 * 10, 96 * 8, SVG);
  angleMode(DEGREES);
  let margins = margin * 2;
  spacing = (width - margins) / 3;
  noLoop();
}

function draw() {
  // background(0);
  stroke("gold");
  noFill();
  strokeWeight(1);

  drawRose(spacing - radius, 200, 5, 97);
  drawRose(spacing * 2 - radius, 200, 2, 39);
  drawRose(spacing * 3 - radius, 200, 3, 47);

  drawRose(spacing - radius, 200 + radius * 2, 4, 31);
  drawRose(spacing * 2 - radius, 200 + radius * 2, 6, 71);
  drawRose(spacing * 3 - radius, 200 + radius * 2, 7, 19);
}

function drawRose(x, y, n, d) {
  push();
  beginShape();
  translate(x, y);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = radius * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();
}
function mousePressed() {
  save("m roses.svg");
}
