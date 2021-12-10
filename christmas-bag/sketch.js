let tree;
let fontMerry;
let boundsMerry;
let font;
function preload() {
  font = loadFont("AlfaSlabOne-Regular.ttf");
}
function setup() {
  createCanvas(96 * 8.5, 96 * 11, SVG);
  textFont(font);
  tree = new XMasTree(width / 2, height / 2 - 25);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  // background(220);
  textSize(80);
  noFill();
  strokeWeight(1);
  stroke("black");
  textAlign(CENTER, CENTER);
  text("Merry", width / 2, height / 2 + 100);
  text("Christmas", width / 2, height / 2 + 185);

  tree.draw();
}

class XMasTree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.numTops = random([1,2,3]);
    this.numTops = random([1]);
  }

  draw() {
    translate(this.x, this.y);
    scale(2.5);
    fill("brown");
    noFill();
    rect(0, 3, 15, 25);

    if (this.numTops == 1) {
      triangle(-30, -10, 30, -10, 0, -100);
    } else if (this.numTops == 2) {
      triangle(-30, -10, 30, -10, 0, -75);
      triangle(-25, -35, 25, -35, 0, -100);
    } else {
      triangle(-30, -10, 30, -10, 0, -75);
      triangle(-25, -30, 25, -30, 0, -85);
      triangle(-20, -50, 20, -50, 0, -100);
    }
  }
}
function mousePressed() {
  save("christmas bag.svg");
}
