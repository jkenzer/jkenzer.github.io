let radius = 125;
function setup() {
  createCanvas(10 * 96, 7 * 96);
  noLoop();
  noFill();
  angleMode(DEGREES);
}

function draw() {
  push();
  translate(width / 2 + 100, -100);
  let counter = 50;
  for (let a = -840; a < 840; a += 3) {
    let x = cos(a) * radius;
    let y = sin(a) * radius + counter;
    // new Mickey(x, y, 100 / (a * counter), 1);
    line(x, y, x - 2 * counter, y + counter);
    counter++;
  }
  pop();
}
