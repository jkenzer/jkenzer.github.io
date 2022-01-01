// draw 10,000 of something
let lines = [];
function setup() {
  angleMode(DEGREES);
  createCanvas(96 * 12, 96 * 12);
  noLoop();
  // for (let index = 0; index < 10000; index++) {
  //   lines.push(new Line(random(0, width), random(0, height)));
  // }
}

function draw() {
  stroke("black");
  strokeWeight(2);
  noFill();
  for (let index = 0; index < 278; index++) {
    let randomX = random(0, width);
    let randomY = random(0, height);
    let pipe = new Pipes(randomX, randomY);
  }
}
