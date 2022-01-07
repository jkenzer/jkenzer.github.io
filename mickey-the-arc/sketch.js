function setup() {
  createCanvas(96 * 6, 96 * 6, SVG);
  noLoop();
  noFill();
  angleMode(DEGREES);
}

function draw() {
  stroke("black");
  strokeWeight(1);
  for (let index = 0; index < 15; index++) {
    let mickey = new Mickey(
      random(0, width),
      random(0, height),
      random(0.1, 0.55),
      random(0, 360)
    );
  }
}
function mousePressed() {
  save("mickey.svg");
}
// 7 x 10 black
// 9 x 12 white
