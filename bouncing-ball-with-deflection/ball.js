class Ball {
  posX = 40;
  posY = 40;
  diameter = 20;
  goX = 1;
  goY = 1;
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
    let minimumBallDistance = this.diameter /2;
    let blockMaxX = block.x + block.width + minimumBallDistance;
    let blockMinX = block.x - minimumBallDistance
    let blockMinY = block.y - minimumBallDistance;
    let blockMaxY = block.y + block.height + minimumBallDistance;
    if(((this.posY === blockMinY) || (this.posY === blockMaxY))
         && (this.posX <= blockMaxX)
         && (this.posX >= blockMinX)){
      if(this.goY === 0){
        this.goY = 1;
      }else{
        this.goY = 0;
      }
      
    }
  }

  detectEdge(){
    if(this.posX + 10 > width){ this.goX = 0; }
    if(this.posX - 10 < 0){ this.goX = 1; }
    if(this.posY + 10 > height){ this.goY = 0; }
    if(this.posY -10 < 0){ this.goY = 1; }
  }

}