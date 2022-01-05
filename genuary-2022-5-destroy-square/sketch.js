function setup() {
  createCanvas(400, 400);
  noLoop();
  noFill();
  // rectMode(CENTER);
}

function draw() {
  let sq = new Square(100, 100, 150, 30);
  sq.draw();
}
