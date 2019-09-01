let ball;
let block = {};

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("sketch");
  background(54,123,12);
  ball = new Ball();
  block.height = 20;
  block.width = 120;
  block.x = (width/2) - block.width/2;
  block.y = (height/2) - block.height/2
}

function mousePressed() {
  ball.posX = mouseX;
  if(ball.posX % 2 > 0){
    ball.posX -=1;
  }
  ball.posY = mouseY;
  if(ball.posY % 2 > 0){
    ball.posY -=1;
  }
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

  if(keyIsDown(LEFT_ARROW)){
    block.x -=2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    block.x +=2;
  }
  if(keyIsDown(DOWN_ARROW)){
    block.y +=2;
  }
  if(keyIsDown(UP_ARROW)){
    block.y -=2;
  }
}