const tileWidth = 55;
const SPACING = 12;
let tilesX;
let tilesY;

function setup() {
  createCanvas(96 * 12, 96 * 9, SVG);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
  noFill();
  strokeWeight(2);
  stroke("black");
  tilesX = Math.floor(width / (tileWidth + SPACING));
  tilesY = Math.floor(height / (tileWidth + SPACING));
}

function draw() {
  translate(SPACING, SPACING);
  for (let x = 0; x < tilesX; x += 1) {
    for (let y = 0; y < tilesY; y += 1) {
      drawTile(
        x * (tileWidth + SPACING),
        y * (tileWidth + SPACING),
        Math.random() < 0.5 ? 0 : 90
      );
    }
  }
}

function drawTile(x, y, a) {
  push();
  translate(x + tileWidth / 2, y + tileWidth / 2);
  rotate(a);
  strokeWeight(2);
  square(0, 0, tileWidth + 2);
  strokeWeight(4);
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

function mouseClicked() {
  save("layer2.svg");
}
