let columns = 4; // number of columns of squares
let rows = 6; // number of rows of squares
let sqrsize = 165; // size of each square
let padding = 15; // margin area
let paddingSide;
let paddingTop;

function setup() {
  createCanvas(8 * 96, 12 * 96, SVG);
  // background(255);
  stroke(0);
  smooth();
  noFill();
  angleMode(DEGREES);
  noLoop();
  paddingSide = (width - columns * sqrsize) / 2;
  paddingTop = (height - rows * sqrsize) / 2;
}

function draw() {
  for (let y = 1; y <= rows; y++) {
    for (let x = 1; x <= columns; x++) {
      push();
      translate(
        paddingSide + x * sqrsize - 0.5 * sqrsize,
        paddingTop + y * sqrsize - 0.5 * sqrsize
      );
      flakes = new Snowflake(0, 0);
      flakes.draw();
      pop();
    }
  }
}
function mousePressed() {
  save("flakes sheet.svg");
}
