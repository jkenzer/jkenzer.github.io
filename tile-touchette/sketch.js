function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
  noFill();
  strokeWeight(1);
  stroke("black");
}

function draw() {
  drawTile(10, 10, 180);
  drawTile(110, 10, 90);
  drawTile(210, 10, 0);
  drawTile(10, 110, 180);
  drawTile(110, 110, 90);
  drawTile(210, 110, 90);
}

function drawTile(x, y, a) {
  let tileWidth = 100;
  push();
  translate(x + tileWidth / 2, y + tileWidth / 2);
  rotate(a);
  square(0, 0, 100);
  arc((-1 * tileWidth) / 2, (-1 * tileWidth) / 2, 55, 55, 0, 90);
  arc((-1 * tileWidth) / 2, (-1 * tileWidth) / 2, 85, 85, 0, 90);
  arc(tileWidth / 2, tileWidth / 2, 55, 55, 180, 270);
  arc(tileWidth / 2, tileWidth / 2, 85, 85, 180, 270);
  pop();
}
