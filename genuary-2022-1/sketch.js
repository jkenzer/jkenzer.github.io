// draw 10,000 of something
let lines = [];
function setup() {
  angleMode(DEGREES);
  createCanvas(96 * 6, 96 * 6);
  noLoop();
  for (let index = 0; index < 10000; index++) {
    lines.push(new Line(random(0, width), random(0, height)));
  }
}

function draw() {
  stroke("black");
  strokeWeight(2);
  noFill();
  for (const line of lines) {
    push();
    line.draw(0.04);
    pop();
  }
}
