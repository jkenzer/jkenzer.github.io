// https://www.youtube.com/watch?v=H-9jCNhLe-Q
const particles = [];

function setup() {
  let canvas = createCanvas(740, 500);
  canvas.parent("sketch");
  const particlesLength = Math.floor(width / 10);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(55, 100, 144);
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles);
    // p.checkParticles(particles.slice(index));
  })
  // })
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    // this.size = random(3, 10);
    this.size = 6;
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.numConnections = 0;
  }

  draw() {
    noStroke();
    fill('rgba(255,255,255,0.5)');
    if (this.numConnections > 0) {
      this.size = this.numConnections * 5;
    } else {
      this.size = 5;
    }
    circle(this.pos.x, this.pos.y, this.size);
  }

  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < 70) {
        stroke('rgba(255,255,255,0.5)');
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
        this.numConnections += 1;
        particle.numConnections += 1;
      } else {
        if (this.numConnections > 0) {
          this.numConnections -= 1;
        }
      }
    });
  }
}