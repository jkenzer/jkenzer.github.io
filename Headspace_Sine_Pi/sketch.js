let c1;
let c2;
let c3;
let counter = 0;
function setup() {
  createCanvas(320, 240);
  c1  = new Circle(width/2, height/2, 100, 75);
  c2  = new Circle(width/2, height/2, 150, 100);
  c3  = new Circle(width/2, height/2, 175, 125);
}

function draw() {
  background(220);
  strokeWeight(0)

  fill(0,155,155)
  if(counter > 200){
    c3.update();
  }
  c3.draw();
  
  fill(155,234,155)
  if(counter > 100){
    c2.update();
  }
  c2.draw();
  
  fill(155,0,155)
  c1.update();
  c1.draw();
  
  counter++;
}

class Circle {
  constructor(x, y, w, size){
    this.x = x;
    this.y = y;
    this.w = w;
    this.size = size;
    this.angle = 0.0;
    this.inc = TWO_PI / 850.0;
  }
  
  update(){
    this.size = this.size + 1 * sin(this.angle);
    this.angle = this.angle + this.inc;
  }
  
  draw(){
    ellipse(this.x, this.y, this.w, this.size);
  }
}