const FLAKESIZE = 300;
const SPACING = FLAKESIZE / 25;
const LAYER = 2;
function mousePressed() {
  save("geo-flake-2.svg");
}
function setup() {
  createCanvas(600, 600, SVG);
  strokeWeight(1);
  angleMode(DEGREES);
  stroke("black");
  noLoop();
}

function draw() {
  noFill();
  square(0, 0, width);
  let middleX = width / 2;
  let middleY = height / 2;
  let lineTop = -1 * (FLAKESIZE / 2);
  // if (LAYER == 1) {
  for (let a = 0; a <= 360 + PI; a += 360 / 4) {
    push();
    translate(middleX, middleY);
    rotate(a);
    // flake line
    line(0, -1 * (FLAKESIZE / 2), 0, FLAKESIZE / 2);
    let counter = 0;
    let yPos = FLAKESIZE / SPACING;
    for (let lineCount = 0; lineCount <= yPos / 2; lineCount += 1) {
      yLineTop = lineTop + SPACING * lineCount;
      yLineBot = yLineTop * -1;
      let topX = middleX - SPACING * counter;
      let topY = -1 * middleY;
      line(0, yLineTop, topX, topY);
      line(0, yLineBot, topX, middleY);

      counter++;
    }
    pop();
  }
  // }
  // if (LAYER == 2) {
  for (let a = 45; a <= 360 + PI; a += 360 / 4) {
    push();
    translate(middleX, middleY);
    rotate(a);
    // flake line
    line(0, -1 * (FLAKESIZE / 2), 0, FLAKESIZE / 2);
    let counter = 0;
    let yPos = FLAKESIZE / SPACING;
    for (let lineCount = 0; lineCount <= yPos / 2; lineCount += 1) {
      yLineTop = lineTop + SPACING * lineCount;
      yLineBot = yLineTop * -1;
      let topX = middleX - SPACING * counter;
      let topY = -1 * middleY;
      line(0, yLineTop, topX, topY);
      line(0, yLineBot, topX, middleY);

      counter++;
    }
    pop();
  }
  // }
  noLoop();
}
