let numBuildings = 2;
let buildings = [];
function setup() {
  createCanvas(400, 400);
  noFill();
  noLoop();
  strokeWeight(2);
  stroke("black");
  rectMode(CENTER);

  for (let i = 0; i < numBuildings; i++) {
    let w = random(10, 150);
    let h = random(10, 300);
    let x = random(0, width - w / 2);
    let y = height - h / 2 - 1;
    x = 150 + i * 25;
    let b = new Building(x, y, w, h, buildings, i);
    buildings.push(b);
  }
}

function draw() {
  buildings.forEach((b) => {
    b.draw();
  });
}
