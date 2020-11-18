// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
class Particle {

  constructor(x,y) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(0,0);
    this.position = createVector(x,y);
    this.lifespan = 1;
    this.dir = 10;
    this.rMax = random(2,5);
    this.r = 0;

  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.r = map(this.lifespan,0,255,1,this.rMax);
    
    this.lifespan += this.dir;
    if (this.lifespan >= 255) {
      this.dir = -1;
      this.lifespan = 255;
    }
    
    
    
    this.velocity.mult(random(0.5,1));
  }

  // Method to display
  show() {
    noStroke();
    fill(255, 0, 0, this.lifespan);
    ellipse(this.position.x, this.position.y, this.r*2);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}