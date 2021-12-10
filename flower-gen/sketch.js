// For Birb's Nest #WCCChallenge
// Topic: Flowers
// https://openprocessing.org/sketch/1322812/

const palette = [
  "#feebe1",
  "#d97645",
  "#f594c9",
  "#e25088",
  "#d81354",
  "#ec423c",
  "#b31429",
  "#68182d",
  "#4f171a",
];

let sc = 0.45; // multiplier that changes the petal shapes
//parameters for the petal Beziers
let minWidth = 50 * sc;
let maxWidth = 100 * sc;
let minHeight = 0 * sc;
let maxHeight = 100 * sc;
let flowerSize;
let rows = 4; //gets bizarre when you make this bigger
let flowers = [];

function setup() {
  noLoop();
  createCanvas(600, 600, SVG);
  noiseTexture();
  strokeJoin(ROUND);
  strokeCap(ROUND);
  angleMode(DEGREES);
  flowerSize = width / rows;

  //create the flowers
  let flowerX = width / rows;
  for (let i = 0; i < width; i += flowerX) {
    for (let j = 0; j < height; j += flowerX) {
      let flora = new Flower(i + flowerX / 2, j + flowerX / 2);
      flowers.push(flora);
    }
  }
}

function draw() {
  // background("#f2b897");

  //add the margin
  translate(width / 2, height / 2);
  scale(0.75);
  translate(-width / 2, -height / 2);
  push();
  flowers.forEach((flower) => {
    flower.render();
  });
  pop();
}

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.petals = random([3, 6, 12]);
    this.petals2 = random([5, 6]);
    this.randWidth = random(minWidth, maxWidth);
    this.randHeight = random(minHeight, maxHeight);
    this.randWidth2 = random(minWidth, maxWidth);
    this.randHeight2 = random(minHeight, maxHeight);
    this.offsetAngle = 360 / (this.petals2 * 2);
    this.size2 = (flowerSize / 2) * random(0.5, 0.9);
    this.col1 = getRandomFromPalette();
    this.col2 = getRandomFromPalette();
    do {
      this.colS = getRandomFromPalette();
    } while (this.col2 === this.colS);
  }

  render() {
    //draw bottom layer

    let pointA = { x: 0, y: 0 };
    let cpA = {
      x: map(mouseX, 0, width, 20, this.randWidth),
      y: map(mouseY, 0, height, 20, this.randHeight),
    };
    let pointB = {
      x: 0,
      y: (flowerSize * 0.9) / 2,
    };
    let cpB = { x: cpA.x * -1, y: cpA.y };
    push();
    translate(this.x, this.y);
    noStroke();
    fill(colorAlpha(this.col1, 0.3));
    for (let i = 0; i < this.petals; i++) {
      let angle = 360 / this.petals;
      rotate(angle);
      beginShape();
      vertex(pointA.x, pointA.y);
      quadraticVertex(cpA.x, cpA.y, pointB.x, pointB.y);
      quadraticVertex(cpB.x, cpB.y, pointA.x, pointA.y);
      endShape(CLOSE);
    }
    //draw top layer
    cpA = {
      x: map(mouseX, 0, width, 20, this.randWidth2),
      y: this.randHeight2,
    };
    pointB = {
      x: 0,
      y: this.size2,
    };
    cpB = { x: cpA.x * -1, y: cpA.y };
    stroke(this.colS);
    fill(colorAlpha(this.col2, 0.7));
    rotate(this.offsetAngle);
    for (let i = 0; i < this.petals2; i++) {
      let angle = 360 / this.petals2;
      rotate(angle);
      beginShape();
      vertex(pointA.x, pointA.y);
      quadraticVertex(cpA.x, cpA.y, pointB.x, pointB.y);
      quadraticVertex(cpB.x, cpB.y, pointA.x, pointA.y);
      endShape(CLOSE);
    }
    //draw stamen
    fill(this.colS);
    for (let i = 0; i < this.petals2; i++) {
      let angle = 360 / this.petals2;
      rotate(angle);
      line(0, 0, 0, 10);
      ellipse(0, 10, 0.1 * this.size2);
    }
    pop();
  }
}

//helper functions ---------------------------
function getRandomFromPalette() {
  const randomC = floor(random(0, palette.length));
  return palette[randomC];
}

function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color("rgba(" + [red(c), green(c), blue(c), alpha].join(",") + ")");
}

function noiseTexture() {
  pg = createGraphics(width, height);
  pg.noStroke();
  for (let i = 0; i < 30000; i++) {
    let x = random(width);
    let y = random(height);
    let n = noise(x * 0.01, y * 0.01) * width * 0.002;
    pg.fill(255, 70);
    pg.ellipse(x, y, n, n);
  }
}
function mousePressed() {
  save("flower gen.svg");
}
