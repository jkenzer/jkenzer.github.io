let start;
let inc = 0.01;
let initLine = [];
let lines = [];
let curvyLinesCount = 25;

function setup() {
  // createCanvas(displayWidth, displayHeight);
  createCanvas(600, 660, SVG);
  initLine = [];
  lines = [];
  start = width / 2 + 125 / 2;
  initLine.push({ x: 0, y: start, diff: 0 });
  initLine.push({ x: 0, y: start, diff: 0 });

  for (let x = 0; x < width - 60; x += 20) {
    if (x > 35 && x < width - 25 && x % 20 == 0) {
      let n = noise(inc * 1200);
      let randY = map(n, 0, 1, -55, 55);
      initLine.push({ x: x, y: start + randY, diff: start - (start - randY) });
      inc += 0.01;
    }
  }
  initLine.push({ x: width - 65, y: start, diff: 0 });
  initLine.push({ x: width - 60, y: start, diff: 0 });
  initLine.push({ x: width - 60, y: start, diff: 0 });

  for (let x = 0; x < curvyLinesCount; x++) {
    lines[x] = initLine.map((point, index) => {
      return {
        x: point.x,
        y: point.y - x * 5 - (point.diff / curvyLinesCount) * x,
      };
    });
  }
}

function draw() {
  // background(0);
  strokeWeight(1);
  stroke("silver");
  noFill();
  for (let x = 50; x >= 0; x -= 2) {
    line(x, 242 - x, width - (60 - x), 242 - x);
  }
  line(0, 242, 0, 362);
  line(0, 242, 50, 192);
  lines.forEach((myLine, index) => {
    beginShape();
    myLine.forEach((point) => {
      curveVertex(point.x, point.y);
    });
    endShape();
  });

  for (let ll = 0; ll < lines.length; ll++) {
    let theLine = lines[ll];
    let thePointX = theLine[theLine.length - 1].x;
    let thePointY = theLine[theLine.length - 1].y;
    line(thePointX, thePointY, width - 10, thePointY - 50);
  }
  noLoop();
}

function mousePressed() {
  save("landscape.svg");
  setup();
  redraw();
}
