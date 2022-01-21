let r = 50;
function setup() {
  w = 7 * 96;
  h = (r / 2) * 12 + (4 * r) / 2 + r + r / 2;
  createCanvas(w, h);
  noLoop();
  noFill();
  strokeWeight(2);
  stroke(0);
}

function draw() {
  rect(0, 0, width, height);
  let y = height;
  let xStart = r / 2;
  for (let row = 0; row < 6; row++) {
    for (let x = xStart; x < width; x += r + 2) {
      arc(x, height, r, r, PI, TWO_PI);
      circle(x - 5, height - 5, 2);
      circle(x + 5, height - 5, 2);
    }
    height -= r / 2;
    if (row % 2 == 0) {
      xStart = 0;
    } else {
      xStart = r / 2;
    }
  }
  height -= r;
  for (let cRow = 0; cRow < 4; cRow++) {
    for (let x = xStart; x < width + r; x += r + 2) {
      circle(x, height, r - 10);
    }
    height -= r / 2;
    if (cRow % 2 == 0) {
      xStart = 0;
    } else {
      xStart = r / 2;
    }
  }
  height = 0;
  for (let row = 0; row < 6; row++) {
    for (let x = xStart; x < width; x += r + 2) {
      arc(x, height, r, r, TWO_PI, PI);
      circle(x - 5, height + 5, 2);
      circle(x + 5, height + 5, 2);
    }
    height += r / 2;
    if (row % 2 == 0) {
      xStart = 0;
    } else {
      xStart = r / 2;
    }
  }
}
