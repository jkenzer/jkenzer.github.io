const FLAKESIZE = 200;
const SPACING = FLAKESIZE / 15;
function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
  stroke("black");
  noLoop();
}

function draw() {
  translate(width / 2, height / 2);
  let lineTop = -1 * (FLAKESIZE / 2);
  let lineBottom = FLAKESIZE / 2;
  line(0, -1 * (FLAKESIZE / 2), 0, FLAKESIZE / 2);
  for (let x = -1 * (FLAKESIZE / 2); x <= lineBottom; x += SPACING) {
    let topX = width - x;
    let topY = -1 * (height / 2) + 10;
    console.log(topY);
    if (x < 0) {
      line(0, x, topX, topY);
    }
    circle(topX, 0, 2);
  }
  noLoop();
}
