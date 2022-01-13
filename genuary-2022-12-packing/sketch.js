let cp;
let x = 30;
let y = 10;
let myWidth = 200;
let myHeight = 200;
function setup() {
  createCanvas(600, 600);
  noLoop();
  noFill();
  cp = new CirclePack(x, y, myWidth, myHeight);
  cp2 = new CirclePack(x + 250, y + 250, myWidth, myHeight);
}

function draw() {
  rect(x, y, myWidth, myHeight);
  rect(x + 250, y + 250, myWidth, myHeight);
  cp.draw();
  cp2.draw();
}
