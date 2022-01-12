// need to adjust radius automatically

let r = 20;
let allCircles = [];
let numCircles = 100;
function setup() {
  createCanvas(400, 400);
  noLoop();
  noFill();
  let c = createVector(random(width), random(height));
  allCircles.push(c);
  while (allCircles.length < 35) {
    c = createVector(random(r, width - r), random(r, height - r));
    checkDistance(c);
  }
}

function draw() {
  allCircles.forEach((c) => {
    circle(c.x, c.y, r * 2);
  });
}

function checkDistance(currentC) {
  let overlapping = false;
  for (let i = 0; i < allCircles.length; i++) {
    const c = allCircles[i];
    overlapping = false;
    if (dist(currentC.x, currentC.y, c.x, c.y) < r * 2 + 2) {
      console.log(dist(currentC.x, currentC.y, c.x, c.y), r * 2);
      overlapping = true;
      break;
    }
  }
  if (!overlapping) {
    allCircles.push(currentC);
  }
}
