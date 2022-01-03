function setup() {
  createCanvas(400, 400);
  noFill();
  stroke("black");
  strokeWeight(1);
  angleMode(DEGREES);
}

function draw() {
  let r = 100;
  translate(width / 2, height / 2);
  for (let index = 90; index < 275; index = index + 3) {
    x = r * cos(index);
    y = r * sin(index);
    circle(x, y, 3);
    circle(x - 10, y, 3);
    line(x, y, x - 10, y);
  }
  for (let index = 275; index < 450; index = index + 3) {
    x = r * cos(index);
    y = r * sin(index);
    circle(x, y, 3);
    circle(x + 10, y, 3);
    line(x, y, x + 10, y);
  }
}
