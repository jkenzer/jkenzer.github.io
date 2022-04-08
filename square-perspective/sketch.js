const squareSize = 25;
const spacing = 50;
const stacks = [];
let centerX;
let centerY;

function setup() {
  createCanvas(800, 800);
  // centerX = width / 2;
  centerX = 100;
  centerY = height / 2;

  for (let row = spacing; row < width; row = row + spacing + squareSize) {
    for (let col = spacing; col < height; col = col + spacing + squareSize) {
      let offsetX = (row - centerX) / 50;
      let offsetY = (col - centerY) / 50;
      console.log(offsetX);
      stacks.push(new SquareStack(8, row, col, offsetX, offsetY));
    }
  }

  noLoop();
}

function draw() {
  stacks.forEach((stack) => {
    stack.draw();
  });
}
