let numbers;
let particles = [];
let spots = [];

function setup() {
  createCanvas(800, 600);
  numbers = createGraphics(800, 600);
  numbers.clear();
  numbers.textAlign(CENTER, CENTER);
  numbers.fill(255);
  numbers.textSize(256);

  let num = floor(random(100000));
  numbers.text(nf(num, 5), width / 2, height / 2);
  numbers.loadPixels();
  let step = 2;
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      let index = (x + y * width) * 4;
      let r = numbers.pixels[index];
      if (r > 0) {
        spots.push(createVector(x, y));
      }
    }
  }
  background(0);

  for (let i = 0; i < spots.length * 4; i++) {
    let spot = spots[i % spots.length];
    let offset = p5.Vector.random2D();
    offset.mult(4);
    stroke(255, 0, 0);
    strokeWeight(2);
    point(spot.x + offset.x, spot.y + offset.y);
  }





}



function draw() {
  //background(0, 10);
  //tint(255, 0, 0);
  //image(numbers,0,0);

  if (frameCount < 100) {
    for (let i = 0; i < 1; i++) {
      let spot = random(spots);
      particles.push(new Particle(spot.x, spot.y));
    }
  }


  for (let particle of particles) {
    particle.show();
    particle.update();
  }

  particles = particles.filter(p => !p.isDead());




}