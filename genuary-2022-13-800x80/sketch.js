let cp;
function setup() {
  createCanvas(800, 80);
  let seedR = 7;
  let seedCircles = [];
  // for (let i = seedR; i < width; i += seedR * 1.5) {
  //   seedCircles.push({
  //     x: i,
  //     y: height / 2,
  //     r: seedR,
  //   });
  // }
  for (let i = seedR; i < width; i += seedR * 1.5) {
    seedCircles.push({
      x: i,
      y: seedR,
      r: seedR,
    });
  }
  for (let i = seedR; i < width; i += seedR * 1.5) {
    seedCircles.push({
      x: i,
      y: height - seedR,
      r: seedR,
    });
  }
  cp = new CirclePack(0, 0, 800, 80, seedCircles);
  noLoop();
  noFill();
}

function draw() {
  // rect(0, 0, 800, 80);
  cp.draw();
}
