let spacing = 15;
let numLines = 30;

let amp = 55;
let angle = 0.0;
let angleIncrement;

function setup() {
  createCanvas(96 * 10, 96 * 7, SVG);
  noLoop();
  noFill();
  angleIncrement = TWO_PI / 30;
  // angleIncrement = TWO_PI;
}

function draw() {
  // line(0, height / 2, width, height / 2);
  let totalHeight = (numLines * spacing) / 2;

  // Horizontal
  for (let i = 0; i < numLines; i++) {
    let angle = 0.0;
    push();
    let lineSpacing = spacing * i;
    translate(0, height / 2 + lineSpacing - totalHeight);
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let y = sin(angle) * amp;
      curveVertex(x, y);
      angle += angleIncrement;
    }
    endShape();
    pop();
  }

  // Vertical
  for (let i = 0; i < numLines; i++) {
    let angle = 0.0;
    push();
    let lineSpacing = spacing * i;
    translate(width / 2 + lineSpacing - totalHeight, 0);
    beginShape();
    for (let y = 0; y < height; y += 10) {
      let x = sin(angle) * amp;
      curveVertex(x, y);
      angle += angleIncrement;
    }
    endShape();
    pop();
  }

  // Diagonal waves
  // line(0, 0, width, 0);
  // for (let i = 0; i < numLines; i++) {
  //   let angle = 0.0;
  //   push();
  //   let lineSpacing = spacing * i;
  //   translate(0, height - amp + lineSpacing - totalHeight);
  //   beginShape();
  //   let yPos = 0;
  //   for (let x = 0; x < width; x += 10) {
  //     let y = sin(angle) * amp;
  //     curveVertex(x, y + yPos);
  //     angle += angleIncrement;
  //     yPos = yPos - 5.8;
  //   }
  //   endShape();
  //   pop();
  // }
  // line(0, height, width, 0);
  // line(0, 0, width, height);
}
function mousePressed() {
  save("lewitt.svg");
}
