// Georg Nees Schotter Reproduction by Jim Plaxco, www.artsnova.com
let columns = 6; // number of columns of squares
let rows = 10; // number of rows of squares
let sqrsize = 95; // size of each square
let rndStep = 0.99; // Rotation Increment in degrees
let randsum = 0; // Cumulative rotation value
let padding = sqrsize / 2; // margin area
let randval; // random value for translation and rotation
let dampen = 0.99; // soften random effect for translation
// let flakes = [];

// void draw() {
// } // end of draw()
function setup() {
  createCanvas((columns + 1) * sqrsize, (rows + 1) * sqrsize, SVG);
  console.log(((columns + 2) * sqrsize) / 96, ((rows + 2) * sqrsize) / 96);
  // background(255); // set background color to white
  stroke(0); // set pen color to black
  smooth(); // use line smoothing
  noFill(); // do not fill the squares with color
  // rectMode(CENTER); // use x,y value as the center of the square
  angleMode(DEGREES);
  noLoop(); // execute draw() just one time
}

function draw() {
  for (let y = 1; y <= rows; y++) {
    randsum += y * rndStep; // Increment the random value
    for (let x = 1; x <= columns; x++) {
      push();
      randval = random(-randsum, randsum);
      translate(
        padding + x * sqrsize - 0.5 * sqrsize + randval * dampen,
        padding + y * sqrsize - 0.5 * sqrsize + randval * dampen
      );
      rotate(radians(randval));
      flakes = new Snowflake(0, 0);
      flakes.draw();
      pop();
    }
  }
}
function mousePressed() {
  save("nees flakes.svg");
}
