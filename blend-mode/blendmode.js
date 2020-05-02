var xPos = 15;
var yPos = 15;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("sketch");
  background(255, 235, 0);
  noLoop();
}

function draw() {
  for (let x = 0; x < 64; x++) {
    push();
    if (x % 2 == 0) {
      blendMode(DIFFERENCE);
      translate(this.xPos, this.yPos);
    } else {
      blendMode(DIFFERENCE);
      translate(this.xPos, this.yPos - 25);
    }

    drawHatch();

    this.xPos += 68;
    if (this.xPos > width) {
      this.xPos = 15;
      this.yPos += 105;
    }
    pop();
  }
}

function drawHatch() {
  strokeWeight(30);
  stroke(80, 150, 255);
  line(0, 0, 50, 50);
  stroke(255, 50, 50);
  line(50, 0, 0, 50);
}