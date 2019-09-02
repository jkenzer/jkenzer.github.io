class Ball {
  posX = 40;
  posY = 40;
  diameter = 20;
  goX = 1;
  goY = 1;
  fromCenter = this.diameter/2;

  constructor(){
    stroke(255);
    fill(255,156,32);
    ellipse(width/2,height/2,20,20);
  }

  show(){
    
    this.goX ? this.posX += 2 : this.posX -= 2;
    this.goY ? this.posY += 2 : this.posY -= 2;

    this.detectEdge();

    fill(255,156,32);
    ellipse(this.posX,this.posY,this.diameter,this.diameter);

  }
  
  hit(block){

    this.top = this.posY + this.fromCenter;
    this.bottom = this.posY - this.fromCenter;
    this.right = this.posX + this.fromCenter;
    this.left = this.posX - this.fromCenter;
    //moving down
    if(this.goY === 1){
      if(this.isInRange(this.top, block.y-2,block.y+2) && this.isInRange(this.posX, block.x, block.x + block.width)){
        this.goY = 0;
      }
    }else if(this.goY === 0){
      if(this.isInRange(block.y+block.height,this.bottom-2, this.bottom+2) && this.isInRange(this.posX, block.x, block.x + block.width)){
        this.goY = 1;
      }
    }
    //moving right
    if(this.goX === 1){
      if(this.isInRange(this.right, block.x-2, block.x+2) && this.isInRange(this.posY, block.y, block.y + block.height)){
        this.goX = 0;
      }
    }else if(this.goX === 0){
      if(this.isInRange(block.x+block.width, this.left-2, this.left+2) && this.isInRange(this.posY, block.y, block.y + block.height)){
        this.goX = 1;
      }
    }

  }

  detectEdge(){
    if(this.posX + 10 > width){ this.goX = 0; }
    if(this.posX - 10 < 0){ this.goX = 1; }
    if(this.posY + 10 > height){ this.goY = 0; }
    if(this.posY -10 < 0){ this.goY = 1; }
  }

  isInRange(intToTest, rangeMin, rangeMax){
    return ((intToTest - rangeMin) * (intToTest - rangeMax) <= 0);
  }
}