let grid = new Array(32)

function setup(){
  for(i=0 ; i < grid.length ; i++){
    grid[i] = new Array(24);
  }
  frameRate(10);
  createCanvas(645, 485);
}
posX = 30;
posY = 10;
rowCount = 1;
function draw(){
  drawGrid();
  fill(255,105,100);
  ellipse(posX,posY, 20, 20);
  posX = posX+40;
  if(posY > height){
    posX = 30;
    posY = 10;
  }
  if(posX > width){
    if(rowCount%2 == 0){
      posX = 30;
      posY = posY+20;
    }else{
      posX = 10;
      posY = posY+20;
    }
    rowCount++;
  }
}

function drawGrid(){
  background(255);
  for(i=0 ; i<grid.length ; i++){
    for(j=0 ; j<grid[i].length ; j++){
      stroke(147);
      if(i%2 ==0){
        if(j%2 == 0){
          fill(200);
          rect(i*20,j*20,20,20);
          fill(255,205,100);
          ellipse((i*20)+10,(j*20)+10, 15, 15);
        }else{
          fill(255);
          rect(i*20,j*20,20,20);
        }
      }else{
        if((j+1)%2 == 0){
          fill(200);
          rect(i*20,j*20,20,20);
          fill(255,205,100);
          ellipse((i*20)+10,(j*20)+10, 15, 15);
        }else{
          fill(255);
          rect(i*20,j*20,20,20);
        }
      }
    }

  }
}