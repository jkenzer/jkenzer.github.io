function setup() {
  createCanvas(600, 600);
  strokeWeight(1);
  stroke("gold");
  noLoop();
}

function draw() {
  background(0);
  let flower;
  let flowerSize = 150;
  let numFlowers = width / flowerSize;
  // scale(0.5);
  for (let x = 1; x < numFlowers; x += 1) {
    console.log(x);
    flower = new Flower(x * flowerSize, height / 2);
    flower.draw();
  }
}

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.pedalLength = random(40, 75);
  }

  draw() {
    let pedal;
    push();
    noFill();
    translate(this.x, this.y);
    // make this radius random
    let radius = 40;
    circle(0, 0, radius);
    // draw stem
    this.stem(radius);
    let pedalCount = random([8, 16]);
    for (let a = 0; a < TWO_PI; a += TWO_PI / pedalCount) {
      rotate(a);
      pedal = new Pedal(0, radius / 4, this.pedalLength);
      pedal.draw();
    }
    pop();
  }

  stem(radius) {
    let lean = random([-1 * radius, radius]);
    beginShape();
    vertex((-1 * radius) / 4, radius / 2);
    quadraticVertex(0, radius - 10, radius / 4, radius / 2);
    quadraticVertex(lean, radius * 3, radius / 4, radius * 6);
    quadraticVertex(0, radius * 6, (-1 * radius) / 4, radius * 6);
    quadraticVertex(lean, radius * 3, (-1 * radius) / 4, radius / 2);
    endShape();
  }
}

class Pedal {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
  }

  draw() {
    let topPoint = createVector(this.x, this.y + this.length);
    push();
    translate(this.x, this.y);

    beginShape();
    vertex(topPoint.x, topPoint.y);
    quadraticVertex(
      this.x + 20,
      topPoint.y / 2,
      this.x + 10,
      topPoint.y - this.length
    );
    quadraticVertex(
      this.x,
      topPoint.y - this.length + 5,
      this.x - 10,
      topPoint.y - this.length
    );
    quadraticVertex(this.x - 20, topPoint.y / 2, topPoint.x, topPoint.y);
    vertex(topPoint.x, topPoint.y);
    endShape();
    pop();
  }
}
