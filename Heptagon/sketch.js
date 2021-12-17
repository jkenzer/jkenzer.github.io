let heptSize = 140;
function setup() {
  createCanvas(96 * 8, 96 * 8, SVG);
}

function draw() {
  // background(102);
  noFill();
  strokeWeight(1);
  stroke("blue");

  // let radius = 300;
  let radius = 200;

  translate(width / 2, height / 2);
  while (radius > heptSize) {
    console.log("here");
    let angle = TWO_PI / 75;
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = cos(a) * radius;
      let sy = sin(a) * radius;
      polygon(sx, sy, heptSize, 7);
    }
    radius -= heptSize;
  }
  noLoop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  save("heptagons-8x8.svg");
}
