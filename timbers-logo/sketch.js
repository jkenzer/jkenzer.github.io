function setup() {
  createCanvas(400, 600, SVG);
  noLoop();
}

function draw() {
  // background(220);
  strokeWeight(8);
  stroke("#00482B");
  noFill();
  beginShape();
  vertex(40, 10);
  quadraticVertex(width / 2, 70, 360, 10);
  quadraticVertex(380, 80, 360, 150);
  quadraticVertex(width / 2, 80, 40, 150);
  quadraticVertex(20, 80, 40, 10);
  endShape(CLOSE);

  beginShape();
  vertex(width / 2 - 40, 120);
  quadraticVertex(width / 2, 115, width / 2 + 40, 120);
  quadraticVertex(width / 2 + 20, 150, width / 2 + 40, 500);
  quadraticVertex(width / 2, 530, width / 2 - 40, 500);
  quadraticVertex(width / 2 - 20, 150, width / 2 - 40, 120);
  endShape(CLOSE);
}
function mousePressed() {
  save("timbers-ax.svg");
}
