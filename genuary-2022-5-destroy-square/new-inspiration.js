// https://youtu.be/1-QXuR-XX_s
let points = [];
let mult = 0.005;

function setup() {
  createCanvas(400, 400);
  background(30);
  angleMode(DEGREES);
  noStroke();
  fill(255);

  let density = 20;
  let space = width / density;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    let angle = map(noise(p.x * mult, p.y * mult), 0, 1, 0, 720);
    points[i].add(createVector(cos(angle), sin(angle)));
    circle(points[i].x, points[i].y, 1);
  }
}
