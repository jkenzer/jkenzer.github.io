var currentY;
var currentX;

function setup() {
  var currentY;
  var currentX;

  createCanvas(740, 500);
  background(0);
  pos = createVector(random(0, width), random(0, height));
  vel = createVector(1, 1);
}


function draw() {
  blendMode(ADD);

  pos.add(vel);
  translate(pos.x, pos.y);
  if (pos.y < 0 || pos.y > height) {
    vel.y *= -1;
  }
  if (pos.x < 0 || pos.x > width) {
    vel.x *= -1;
  }

  v = p5.Vector.random2D();
  v.mult(random(25, 100));

  strokeWeight(random(1, 4));
  stroke(random(1, 255), random(5, 50), random(100, 200));
  line(0, 0, v.x, v.y);
}