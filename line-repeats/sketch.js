function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
  noFill();
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  rect(0, 0, 400, 400);
  for (let index = 0; index < 86; index++) {
    push();
    translate(width / 2, height / 2);
    rotate(index * 2);
    let myLine3 = new Line(1.5 * index, index * 1.5);
    myLine3.draw();
    pop();
  }
}
