let ball;
let block = {};

function setup() {
  createCanvas(600, 400);
  background(54,123,12);
  ball = new Ball();
  block.height = 20;
  block.width = 120;
  block.x = (width/2) - block.width/2;
  block.y = (height/2) - block.height/2
}

function mousePressed() {
  ball.posX = mouseX;
  ball.posY = mouseY;
  // prevent default
  return false;
}
function draw(){
  background(54,123,12);

  //deflection block
  fill(0);
  rect(block.x, block.y, block.width, block.height);

  ball.show();
  ball.hit(block);

}