// combining day 3 with day 19

let textPlanet;

function setup() {
  createCanvas(96 * 6, 96 * 6, SVG);
  noFill();
  stroke("black");
  strokeWeight(1);
  angleMode(DEGREES);
  noLoop();
  textPlanet = new TextCircle(0, 0, " Welcome to ecapS");
}

function draw() {
  console.log("here");
  let r = 100;
  translate(width / 2, height / 2);
  textPlanet.draw();

  rotate(-8);
  arc(0, 0, 310, 60, 349, 190);
  arc(0, 0, 320, 70, 346, 193);

  arc(0, 0, 350, 100, 339, 200);
  arc(0, 0, 360, 110, 335, 203);
  arc(0, 0, 370, 120, 332, 206);
}
// function mousePressed() {
//   save("space.svg");
// }

class TextCircle {
  constructor(x, y, str) {
    this.x = x;
    this.y = y;
    this.str = str;
    this.r = 100;
  }

  draw() {
    textSize(26);
    push();
    translate(this.x - 10, this.y + 10);
    drawCircleWithHatches(11, -8, 85, 500, 18);
    let stringIndex = 0;
    let a = 360 / this.str.length;
    for (let i = 180; i < 360 + 180; i += a) {
      let x = cos(i) * this.r;
      let y = sin(i) * this.r;
      let cLettter = this.str[stringIndex];
      text(cLettter, x, y);
      stringIndex++;
    }
    pop();
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
  // circle(cpt.x, cpt.y, r * 2);
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
