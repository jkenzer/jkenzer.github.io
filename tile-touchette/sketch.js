let tileWidth = 100;

function setup() {
  createCanvas(820, 820);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
  noFill();
  strokeWeight(1);
  stroke("black");
}

function draw() {
  for (let x = 5; x < width + 15; x += 105) {
    for (let y = 5; y < height + 15; y += 105) {
      drawTile(x, y, Math.random() < 0.5 ? 0 : 90);
    }
  }
}

function drawTile(x, y, a) {
  push();
  translate(x + tileWidth / 2, y + tileWidth / 2);
  rotate(a);
  square(0, 0, 100);
  arc(
    (-1 * tileWidth) / 2,
    (-1 * tileWidth) / 2,
    tileWidth - 15,
    tileWidth - 15,
    0,
    90
  );
  arc(
    (-1 * tileWidth) / 2,
    (-1 * tileWidth) / 2,
    tileWidth + 15,
    tileWidth + 15,
    0,
    90
  );
  arc(tileWidth / 2, tileWidth / 2, tileWidth - 15, tileWidth - 15, 180, 270);
  arc(tileWidth / 2, tileWidth / 2, tileWidth + 15, tileWidth + 15, 180, 270);
  pop();
}
