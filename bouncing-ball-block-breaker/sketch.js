let ball;
let numOfBlocks = 15;
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
  for(let block = 0 ; block < blocks.length ; block++){
    rect(blocks[block].x, blocks[block].y, blocks[block].width, blocks[block].height);
    if(ball.hit(blocks[block])){
      blocks.splice(block,1);
      block--;
    }
  };

  ball.show();

}