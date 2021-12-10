function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background(220);
  noFill();
  strokeWeight(1);
  stroke("silver");
  leaf(200, 200, TWO_PI);
  leaf(100, 100, PI);
  leaf(400, 200, 1);
}

function leaf(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  beginShape();
  vertex(x - 200, y - 200);
  bezierVertex(x - 200, y - 200, x - 300, y - 100, x - 400, y - 200);
  bezierVertex(x - 400, y - 200, x - 450, y - 250, x - 600, y - 200);
  bezierVertex(x - 600, y - 200, x - 500, y - 350, x - 400, y - 300);
  bezierVertex(x - 400, y - 300, x - 250, y - 350, x - 200, y - 200);
  endShape();
  pop();
}
