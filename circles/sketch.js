let spacing = 80;
let outerRadius = 60;
let width = 600;
let height = 600;
function setup() {
  createCanvas(width, height);
}

function draw() {
  background(255);

  let spots = width / spacing;
  for (let row = 0; row < spots; row++) {
    let xCoord = row * spacing + outerRadius;
    let nextCircle = new Circle(xCoord, outerRadius, outerRadius);
    nextCircle.draw();
    for (let col = 1; col < spots; col++) {
      let yCoord = col * spacing + spacing;
      nextCircle = new Circle(xCoord, yCoord, outerRadius);
      nextCircle.draw();
    }
  }
  noLoop();
}
