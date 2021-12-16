let numLines = 24;
let offset = 25;
function setup() {
  createCanvas(9 * 96, 12 * 96, SVG);
  background(220);
  strokeWeight(3);
  stroke("silver");
  let centerX = height / 2;
  let centerY = width / 2;
  let nInc = 0.01;

  for (let x = 0; x < numLines; x++) {
    let lineWeight = map(x, 0, numLines, 11, 3);
    let posXL = offset + x * 17;
    let posXR = width - posXL;
    let posYT = centerX - x * 20 - 5;
    let posYB = centerX + x * 20 + 5;
    let vStart = createVector(posXL, offset);
    let vEnd = createVector(centerY, posYT);
    let vEndY = createVector(posXR, offset);
    let vStartB = createVector(posXL, height - offset);
    let vEndB = createVector(centerY, posYB);
    let vEndBY = createVector(posXR, height - offset);

    noFill();
    beginShape();
    curveVertex(vStart.x, vStart.y);
    curveVertex(vStart.x, vStart.y);

    for (let l = 0.01; l < 1; l += 0.01) {
      let n = noise(l * lineWeight + nInc, l * lineWeight + nInc);
      let rOffset = map(n, 0, 1, -1 * lineWeight, lineWeight);
      let vLerp = p5.Vector.lerp(vStart, vEnd, l);
      curveVertex(vLerp.x + rOffset, vLerp.y);
      nInc += 0.01;
    }
    curveVertex(vEnd.x, vEnd.y);
    for (let l = 0.01; l < 1; l += 0.01) {
      let n = noise(l * lineWeight + nInc, l * lineWeight + nInc);
      let rOffset = map(n, 0, 1, -1 * lineWeight, lineWeight);
      let vLerp = p5.Vector.lerp(vEnd, vEndY, l);

      curveVertex(vLerp.x + rOffset, vLerp.y);
      nInc += 0.01;
    }
    curveVertex(vEndY.x, vEndY.y);
    curveVertex(vEndY.x, vEndY.y);
    endShape();

    beginShape();
    curveVertex(vStartB.x, vStartB.y);
    curveVertex(vStartB.x, vStartB.y);

    for (let l = 0.01; l < 1; l += 0.01) {
      let n = noise(l * lineWeight + nInc, l * lineWeight);
      let rOffset = map(n, 0, 1, -1 * lineWeight, lineWeight);
      let vLerp = p5.Vector.lerp(vStartB, vEndB, l);
      curveVertex(vLerp.x + rOffset, vLerp.y);
      nInc += 0.01;
    }
    curveVertex(vEndB.x, vEndB.y);
    for (let l = 0.01; l < 1; l += 0.01) {
      let n = noise(l * lineWeight + nInc, l * lineWeight);
      let rOffset = map(n, 0, 1, -1 * lineWeight, lineWeight);
      let vLerp = p5.Vector.lerp(vEndB, vEndBY, l);
      curveVertex(vLerp.x + rOffset, vLerp.y);
      nInc += 0.01;
    }
    curveVertex(vEndBY.x, vEndBY.y);
    curveVertex(vEndBY.x, vEndBY.y);

    endShape();
  }

  noLoop();
}

function mousePressed() {
  save("v-ups.svg");
}
