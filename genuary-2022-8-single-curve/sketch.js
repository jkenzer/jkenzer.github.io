let radius = 300;
function setup() {
  createCanvas(10 * 96, 7 * 96);
  noLoop();
  noFill();
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  let counter = 1.5;
  for (let a = 180; a < 540; a += 22) {
    let x = cos(a) * ((radius * counter) / 10);
    let y = sin(a) * radius;
    new Mickey(x, y, 100 / (a * counter), 1);
    counter++;
  }
}
