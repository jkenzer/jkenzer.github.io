function setup() {
  createCanvas(600, 400);
  noLoop();
  noFill();
  angleMode(DEGREES);
}

function draw() {
  stroke("black");
  strokeWeight(1);
  for (let index = 0; index < 25; index++) {
    let mickey = new Mickey(
      random(0, width),
      random(0, height),
      random(0.1, 0.35),
      random(0, 360)
    );
  }
}
