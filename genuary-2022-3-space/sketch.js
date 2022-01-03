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
    circle(x, y, 1);
    circle(x - 14, y, 1);
    line(x, y, x - 14, y);
  }
  for (let index = 275; index < 450; index = index + 3) {
    x = r * cos(index);
    y = r * sin(index);
    circle(x, y, 1);
    circle(x + 10, y, 1);
    line(x, y, x + 10, y);
  }
  rotate(-8);
  arc(0, 0, 310, 60, 349, 190);
  arc(0, 0, 320, 70, 346, 193);

  arc(0, 0, 350, 100, 339, 200);
  arc(0, 0, 360, 110, 335, 203);
  arc(0, 0, 370, 120, 332, 206);
}
