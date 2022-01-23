let vines = [];
function setup() {
  createCanvas(400, 400);
  noLoop();
  noFill();
  for (let i = 1; i < 28; i++) {
    let x = 10 + i * 2;
    vines.push(new Vine(x + width / 2 - 40, height - 95));
  }
}

function draw() {
  // draw vase
  let topWidth = 80;
  let botWidth = 55;
  ellipse(width / 2, height - 100, topWidth, 20);
  arc(width / 2, height - 95, topWidth - 5, 18, PI, TWO_PI);
  arc(width / 2, height - 10, botWidth, 10, TWO_PI, PI);
  line(
    width / 2 - topWidth / 2,
    height - 100,
    width / 2 - botWidth / 2,
    height - 10
  );
  line(
    width / 2 + topWidth / 2,
    height - 100,
    width / 2 + botWidth / 2,
    height - 10
  );
  vines.forEach((vine) => {
    vine.draw();
  });
}
class Vine {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  draw() {
    let cp1x = random(-40, 40);
    let cp1y = -1 * random(25, 55);
    let cp2x = random(-40, 40);
    let cp2y = -1 * random(65, 85);
    let cp3x = random(-40, 40);
    let cp3y = -1 * random(65, 85);
    push();
    translate(this.x, this.y);
    rotate(random(-1.5, 1.5));
    beginShape();
    vertex(0, 0);
    bezierVertex(cp1x, cp1y, cp2x, cp2y, 0, -100);
    rect(0, -100, 8, 8);
    if (random() > 0.5) {
      bezierVertex(cp1x, cp1y, cp2x, cp2y, 0, -150);
      rect(0, -150, 4, 4);
    }
    if (random() > 0.8) {
      bezierVertex(cp1x, cp1y, cp3x, cp3y, 0, -200);
      circle(0, -200, 2);
    }
    endShape();
    pop();
  }
}
