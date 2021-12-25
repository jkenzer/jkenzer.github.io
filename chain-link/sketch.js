let links = [];
let borderLinks = [];
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
  // noLoop();
  let rotation = 0;
  let size = 350;
  for (let numLinks = 0; numLinks < 8; numLinks++) {
    links[numLinks] = new Link(width / 2, height / 2, rotation, size);
    rotation += 45;
    size = size - 10;
  }
  size = 150;
  const numBorderLinks = (height / size) * 4;
  let x = 0;
  let y = 0;
  for (let index = 0; index < numBorderLinks; index++) {
    if (index < numBorderLinks / 4) {
      rotation = 0;
      y = size * index + size / 2;
      x = size / 4;
    } else if (index < numBorderLinks / 2) {
      if (index === numBorderLinks / 4) {
        x = (-1 * size) / 2;
      }
      y = height - size / 4;
      x = x + size;
      rotation = 90;
    } else if (
      index >= numBorderLinks / 2 &&
      index < (numBorderLinks / 4) * 3
    ) {
      if (index === (numBorderLinks / 4) * 2) {
        y = height + size / 2;
      }
      x = width - size / 4;
      rotation = 0;
      y = y - size;
    } else if (index >= (numBorderLinks / 4) * 3) {
      if (index === (numBorderLinks / 4) * 3) {
        x = width + size / 2;
      }
      rotation = 90;
      y = size / 4;
      x = x - size;
    }
    borderLinks[index] = new Link(x, y, rotation, size);
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
  borderLinks.forEach((link) => {
    link.draw();
  });
}
