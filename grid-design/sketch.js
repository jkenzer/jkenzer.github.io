let grid = new Array(32)

function setup(){
  for(i=0 ; i < grid.length ; i++){
    grid[i] = new Array(24);
  }
  frameRate(.5);
  createCanvas(640, 480);
}
function draw(){
  for(i=0 ; i<grid.length ; i++){
    for(j=0 ; j<grid[i].length ; j++){
      stroke(147);
      if(i%2 ==0){
        (j%2 == 0)? fill(200): fill(255);
      }else{
        ((j+1)%2 == 0)? fill(200): fill(255);
      }
      rect(i*20,j*20,20,20);
    }

  }
  fill(255,205,100);
  let posX = floor(random(grid.length))*20;
  let posY = floor(random(grid[0].length))*20;
  ellipse(posX+10,posY+10, 20, 20);
}