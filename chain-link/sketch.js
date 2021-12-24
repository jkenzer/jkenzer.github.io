function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  strokeWeight(1);
  stroke("black");
  noFill();
  let size = 380;
  const link = new Link(width / 2, height / 2, 90, size);
  link.draw();
  const link2 = new Link(width / 2, height / 2, 0, size);
  link2.draw();
  const link3 = new Link(width / 2, height / 2, 45, size);
  link3.draw();
  const link4 = new Link(width / 2, height / 2, -45, size);
  link4.draw();

  size = 275;
  const link5 = new Link(width / 2, height / 2, 100, size);
  link5.draw();
  const link6 = new Link(width / 2, height / 2, 10, size);
  link6.draw();
  const link7 = new Link(width / 2, height / 2, 55, size);
  link7.draw();
  const link8 = new Link(width / 2, height / 2, -35, size);
  link8.draw();
}
