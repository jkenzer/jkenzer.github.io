let img;
function preload() {
  img = loadImage("star_wars_land.jpg");
}
function setup() {
  createCanvas(800, 800);
  noLoop();
  image(img, 0, 0);

  loadPixels();
  for (var i = 0; i < pixels.length; i++) {
    if (pixels[i] > 255 / 2 + 20) {
      pixels[i] = 255;
    } else {
      pixels[i] = 0;
    }
  }
  updatePixels();
}

function draw() {}
