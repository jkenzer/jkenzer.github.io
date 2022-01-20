let font;
let points;
let bounds;
function preload() {
  font = loadFont("Anton-Regular.ttf");
}
function setup() {
  createCanvas(400, 400);
  stroke(0);
  noLoop();
  fill("orange");

  points = font.textToPoints("J", 0, 0, 200, {
    sampleFactor: 5,
    simplifyThreshold: 0,
  });
  bounds = font.textBounds("J", 0, 0, 200);
}

function draw() {
  background(255);
  beginShape();
  translate(bounds.x + bounds.w, bounds.y + bounds.h + bounds.h);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    // vertex(
    //   (p.x * width) / bounds.w +
    //     (sin((20 * p.y) / bounds.h + millis() / 1000) * width) / 30,
    //   (p.y * height) / bounds.h
    // );
    // console.log(p.x, bounds.w + bounds.x);
    if (p.x > bounds.w) {
      vertex(p.x + 300 / p.y, p.y);
    } else {
      vertex(p.x, p.y);
    }
  }
  endShape(CLOSE);
}
