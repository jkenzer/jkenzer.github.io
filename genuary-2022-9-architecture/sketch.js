let numBuildings = 5;
let buildings = [];
function setup() {
  createCanvas(600, 400);
  noLoop();
  noFill();
  stroke("black");
  strokeWeight(2);
  rectMode(CENTER);
  let vp = createVector(400, height / 2);
  for (let i = 0; i < numBuildings; i++) {
    let h = random(10, 350);
    let w = random(10, 100);
    let b = new Building(
      random(5 + w / 2, width - w / 2 - 5),
      height - h / 2 - 1,
      w,
      h,
      random(0.1, 0.3),
      vp
    );
    buildings.push(b);
  }
}

function draw() {
  buildings.forEach((b) => {
    b.draw();
  });
}
