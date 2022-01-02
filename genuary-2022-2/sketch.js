let img;
function preload() {
  img = loadImage("star_wars_land.jpg");
}
function setup() {
  createCanvas(800, 800);
  noLoop();
  pixelDensity(1);

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      r = img.get(x, y);
      if (r[0] < 255 / 2) {
        circle(x, y, 1);
      }
    }
  }
}

function draw() {
  // image(img, 0, 0);
  // console.log(pixels.length);
}
