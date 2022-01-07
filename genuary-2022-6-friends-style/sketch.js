function setup() {
  createCanvas(400, 400);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  let p = createVector(0, 100);

  translate(width / 2, height / 2);
  // p.setHeading(TWO_PI);
  // circle(p.x, p.y, 3);
  // line(0, 0, p.x, p.y);
  // console.log(p.heading());
  // arc(0, 0, 200, 200, 0, 15);

  let points = [];
  let radius = 20;
  for (let i = 0; i < 360; i += 15) {
    let np = createVector(0, 1);
    np.setHeading(i);
    np.mult(radius);
    point(np.x, np.y);
  }
}
