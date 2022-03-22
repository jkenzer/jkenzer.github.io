let peak = [];
function setup() {
  createCanvas(800, 800);
  let xoff = 0;
  let yoff = 1;
  for (let x = 0; x <= 100; x += 25) {
    let y = map(noise(xoff, yoff), 0, 1, 10, 150);
    peak.push({ x, y });
    xoff += 0.5;
  }
  noLoop();
  noFill();
}

function draw() {
  stroke("black");
  strokeWeight(2);
  for (let row = 10; row < 145 * 3; row += 145) {
    let xPos = 0;
    for (let xPos = 10; xPos < 125 * 5; xPos += 125) {
      push();
      translate(xPos, row);

      beginShape();
      vertex(peak[0].x, 25);
      peak.forEach((pt) => {
        vertex(pt.x, pt.y);
      });
      vertex(peak[peak.length - 1].x, 25);

      endShape(CLOSE);
      pop();
    }
    xPos = 0;

    for (let xPos = 10; xPos < 125 * 5; xPos += 125) {
      push();
      translate(xPos, row + 15);

      beginShape();
      vertex(peak[0].x, 150);
      peak.forEach((pt) => {
        vertex(pt.x, pt.y);
      });
      vertex(peak[peak.length - 1].x, 150);

      endShape(CLOSE);
      pop();
    }
  }
}
