let grid = new Array(32)

function setup(){
  for(i=0 ; i < grid.length ; i++){
    grid[i] = new Array(24);
  }
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
}