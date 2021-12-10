let circleX;
let circleY;
let circleRadius = 180;
let myVertex;
let numStars = 25;
function setup() {
  createCanvas(9 * 96, 6 * 96, SVG);
  circleX = (width / 4) * 3 + random(-50, 50);
  circleY = height / 5 + random(-50, 50);
  myVertex = random([vertex, curveVertex]);
  noLoop();
}

function draw() {
  background("white");
  noFill();

  circle(circleX, circleY, circleRadius);

  let bottomYs = [];
  let lowerMountainRange = random(60, 105);
  let upperMountainRange = lowerMountainRange * 3;
  let randomOffset = random(0.01, 0.3);
  for (let x = 0; x <= width; x += 10) {
    let n = noise(x * randomOffset);
    let bottom = height - map(n, 0, 1, lowerMountainRange, upperMountainRange);
    bottomYs.push({ x, bottom });

    if (x <= circleX - circleRadius / 2 || x >= circleX + circleRadius / 2) {
      line(x, 0, x, bottom);
    } else {
      let placedX = x - circleX;
      let y = Math.sqrt((circleRadius / 2) ** 2 - placedX ** 2);
      line(x, 0, x, circleY - y);
      line(x, y + circleY, x, bottom);
    }
  }

  // for(let star = 0 ; star < numStars ; star++){
  //   let starX = random(5, width - 5);
  //   let starY = random(5, height - 205);
  //   drawStar(starX, starY);
  // }

  noFill();

  beginShape();
  myVertex(bottomYs[0].x, bottomYs[0].bottom);
  bottomYs.forEach((bPoint) => {
    myVertex(bPoint.x, bPoint.bottom);
  });
  myVertex(width, bottomYs[bottomYs.length - 1].bottom);
  myVertex(width, bottomYs[bottomYs.length - 1].bottom);

  endShape();
}
function drawStar(x, y) {
  push();
  translate(x, y);
  rotate(random(0, PI));
  point(0, 0);
  line(4, 0, 8, 0);
  line(12, 0, 18, 0);

  line(-4, 0, -8, 0);
  line(-12, 0, -18, 0);

  line(0, 4, 0, 8);
  line(0, -4, 0, -8);
  pop();
}
function mousePressed() {
  save("scenic cirlce.svg");
}
