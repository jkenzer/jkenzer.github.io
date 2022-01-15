let cp;
function setup() {
  createCanvas(800, 80);
  let seedR = 8;
  let seedCircles = [];
  // for (let i = seedR; i < width; i += seedR * 1.5) {
  //   seedCircles.push({
  //     x: i,
  //     y: height / 2,
  //     r: seedR,
  //   });
  // }
  let amp = 35;
  let angle = 0.0;
  let angleIncrement = TWO_PI / 15;
  for (let x = 0; x < width; x += seedR * 2) {
    let y = sin(angle) * amp;
    seedCircles.push({
      x: x,
      y: y + height / 2,
      r: seedR,
      fill: true,
    });
    angle += angleIncrement;
  }
  // for (let i = seedR; i < width; i += seedR * 1.5) {
  //   seedCircles.push({
  //     x: i,
  //     y: seedR,
  //     r: seedR,
  //   });
  // }
  // for (let i = seedR; i < width; i += seedR * 1.5) {
  //   seedCircles.push({
  //     x: i,
  //     y: height - seedR,
  //     r: seedR,
  //   });
  // }

  cp = new CirclePack(0, 0, 800, 80, seedCircles);
  noLoop();
  noFill();
}

function draw() {
  rect(0, 0, 800, 80);
  cp.draw();
}
