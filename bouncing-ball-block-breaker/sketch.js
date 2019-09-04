let ball;
let numOfBlocks = 5;
let blocks = [];

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("sketch");
  background(54,123,12);
  ball = new Ball();

  for(i=0 ; i<numOfBlocks ; i++){
    blocks[i] = new Block(random(20, 120), random(20, 120));
  }
}

function draw(){
  background('#2C4770');

  //deflection block
  stroke(255);
  fill('#051938');
  blocks.forEach( (block) => {
    rect(block.x, block.y, block.width, block.height);
  });

  ball.show();
  //ball.hit(block);

}