const FLAKESIZE = 200;
const SPACING = FLAKESIZE / 15;
function setup() {
  createCanvas(600, 600);
  strokeWeight(1);
  stroke("black");
  noLoop();
}

function draw() {
  noFill();
  square(0, 0, width);
  let middleX = width / 2;
  let middleY = height / 2;
  translate(middleX, middleY);
  let lineTop = -1 * (FLAKESIZE / 2);
  let lineBottom = FLAKESIZE / 2;

  for (let a = 0; a <= TWO_PI; a += TWO_PI / 6) {
    push();
    rotate(a);
    // flake line
    line(0, -1 * (FLAKESIZE / 2), 0, FLAKESIZE / 2);
    let counter = 0;
    for (let lineY = lineTop; lineY <= lineBottom; lineY += SPACING) {
      let topX = middleX - SPACING * counter;
      let topY = -1 * middleY;
      line(0, lineY, topX, topY);
      line(0, -1 * lineY, topX, middleY);

      counter++;
    }
    pop();
  }
  noLoop();
}
