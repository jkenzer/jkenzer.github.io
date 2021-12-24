let links = [];
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  noLoop();
  let rotation = 0;
  let size = 380;
  for (let numLinks = 0; numLinks < 8; numLinks++) {
    links[numLinks] = new Link(width / 2, height / 2, rotation, size);
    rotation += 45;
    size = size - 10;
  }
}

function draw() {
  background("white");
  strokeWeight(1);
  stroke("black");
  noFill();
  links.forEach((link, index) => {
    link.update((index + 1) / links.length);
    link.draw();
  });
}
