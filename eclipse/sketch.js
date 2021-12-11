function setup() {
  createCanvas(10 * 96, 8 * 96);
  angleMode(DEGREES);
  noLoop();
  noFill();
}

function draw() {
  background(255);
  strokeWeight(1);
  stroke("black");

  const r = 250;
  const firstCenter = width / 2 - r / 2;

  drawCircleWithHatches(firstCenter, height / 2, r, 500, 8);
  // 240 and 120 are magic numbers
  arc(firstCenter + r, height / 2, r * 2 + 25, r * 2, 240, 120);

  // -58 and 62 are magic numbers
  for (let a = -60; a < 62; a += 3) {
    let x = r * cos(a) + firstCenter;
    let y = r * sin(a) + height / 2;
    line(x + 3, y, x + 25, y + 10);
  }
}

function drawCircleWithHatches(x, y, r, ha, s) {
  // circle location
  let cpt = createVector(x, y);

  // calculate the number of hatch lines
  const SPACING = s;

  // controls hatch angle but is not a "angle"
  const HATCHANGLES = ha;

  let hLines = [];
  let endingX = cpt.x - r;
  let startingX = endingX - HATCHANGLES;
  let startingY = cpt.y - r;
  let endingY = cpt.y + r;

  // Create enough hatch lines to cover the circle
  xPos = startingX;
  counter = 0;
  while (xPos < cpt.x + r) {
    xPos = startingX + SPACING * counter;
    hLines.push([
      createVector(startingX + SPACING * counter, startingY),
      createVector(endingX + SPACING * counter, endingY),
    ]);
    counter++;
  }

  // find the intersections and draw the hatch line
  hLines.forEach((l) => {
    let points = intersectLineCircle(l[0], l[1], cpt, r);
    if (points.length == 2) {
      line(points[0].x, points[0].y, points[1].x, points[1].y);
    }
  });
  circle(cpt.x, cpt.y, r * 2);
}

function intersectLineCircle(p1, p2, cpt, r) {
  let sign = function (x) {
    return x < 0.0 ? -1 : 1;
  };
  let x1 = p1.copy().sub(cpt);
  let x2 = p2.copy().sub(cpt);

  let dv = x2.copy().sub(x1);
  let dr = dv.mag();
  let D = x1.x * x2.y - x2.x * x1.y;

  // evaluate if there is an intersection
  let di = r * r * dr * dr - D * D;
  if (di < 0.0) return [];

  let t = sqrt(di);

  ip = [];

  let x = D * dv.y + sign(dv.y) * dv.x * t;
  let y = -D * dv.x + Math.abs(dv.y) * t;
  let newVector = new p5.Vector(x, y).div(dr * dr).add(cpt);
  ip.push(newVector);

  if (di > 0.0) {
    ip.push(
      new p5.Vector(
        D * dv.y - sign(dv.y) * dv.x * t,
        -D * dv.x - Math.abs(dv.y) * t
      )
        .div(dr * dr)
        .add(cpt)
    );
  }

  return ip;
}
