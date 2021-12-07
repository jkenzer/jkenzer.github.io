let rays = [];
let maxRays = 10;
let bows = [];
let img;
let rainbowColors = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];

function preload() {
  img = loadImage("images/bear1.png");
}
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  for (let ray = 0; ray < maxRays; ray++) {
    let newRay = new Ray(ray * (360 / maxRays));
    rays.push(newRay);
  }
  for (let bow = 0; bow < 5; bow++) {
    let theBow = new Rainbow(1 - bow * 0.09, rainbowColors[bow]);
    bows.push(theBow);
  }
  imageMode(CENTER);
  img.loadPixels();
}

function draw() {
  background("#3a86ff");
  translate(width / 2, height - height / 4);
  rays.forEach((ray) => {
    ray.update();
    ray.draw();
  });

  bows.forEach((bow) => {
    bow.update();
    bow.draw();
  });

  strokeWeight(2);
  stroke(0);
  fill("#83e377");
  ellipse(0, 100, 1100, 300);
  ellipse((-1 * width) / 2, 100, 800, 300);

  strokeWeight(0);
  rect((-1 * width) / 2, 50, width, 300);

  image(img, 0, 0 - 100);
}

class Ray {
  constructor(startAngle) {
    this.angCounter = startAngle;
    this.speed = 0.1;
  }
  update() {
    this.angCounter += this.speed;
    if (this.angCounter > 360) {
      this.angCounter = 0;
    }
  }
  draw() {
    fill("#fee440");
    strokeWeight(0);
    push();
    rotate(this.angCounter);
    quad(0, 0, 0, 0, height, width, height, width / 2);
    pop();
  }
}

class Rainbow {
  constructor(scale, color) {
    this.scale = scale;
    this.color = color;
  }
  update() {}
  draw() {
    noFill();
    stroke(this.color);
    strokeWeight(50);
    push();
    scale(this.scale);
    arc(0, 0, -width + 75, width - 75, 180, PI, OPEN);
    pop();
  }
}
