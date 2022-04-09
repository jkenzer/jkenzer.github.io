const squareSize = 25;
const spacing = 50;
let stackSize = 36;
const stacks = [];
let centerX;
let centerY;

function setup() {
  createCanvas(displayWidth, displayHeight);
  centerX = width / 2;
  centerY = height / 2;

  // for (let row = spacing; row < width; row = row + spacing + squareSize) {
  //   for (let col = spacing; col < height; col = col + spacing + squareSize) {
  //     let offsetX = map(row - centerX, (-1 * width) / 2, width / 2, -2.5, 2.5);
  //     let offsetY = map(
  //       col - centerY,
  //       (-1 * height) / 2,
  //       height / 2,
  //       -2.5,
  //       2.5
  //     );

  //     stacks.push(new SquareStack(18, row, col, offsetX, offsetY));
  //   }
  // }

  // noLoop();
}

function draw() {
  background("#e0c9a6");
  // stacks.forEach((stack) => {
  //   stack.draw();
  // });
  centerX = mouseX;
  centerY = mouseY;
  for (let row = spacing; row < width; row = row + spacing + squareSize) {
    for (let col = spacing; col < height; col = col + spacing + squareSize) {
      let distance = dist(row, col, centerX, centerY);
      stackSize = Math.floor(map(distance, (-1 * width) / 2, width / 2, 2, 25));
      let offsetX = map(row - centerX, (-1 * width) / 2, width / 2, -2.5, 2.5);
      let offsetY = map(
        col - centerY,
        (-1 * height) / 2,
        height / 2,
        -2.5,
        2.5
      );

      let stack = new SquareStack(stackSize, row, col, offsetX, offsetY);
      stack.draw();
    }
  }
}
