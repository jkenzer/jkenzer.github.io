var myAsciiArt;
var asciiart_width = 120;
var asciiart_height = 60;
var images = [];
var gfx;
var ascii_arr;
var cyclic_t;
var x = 0;
var result = [];

function preload() {
  images[0] = loadImage('https://jkenzer.github.io/sketchbook/ascii-photos/IMG_0516.jpg');
  images[1] = loadImage('https://jkenzer.github.io/sketchbook/ascii-photos/IMG_0855.jpg');
  images[2] = loadImage('https://jkenzer.github.io/sketchbook/ascii-photos/IMG_1327.jpg');
  //images[3] = loadImage('IMG_1480.JPG');
}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("sketch");
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(3);
  myAsciiArt = new AsciiArt(this);
  // myAsciiArt.printWeightTable();
  textAlign(CENTER, CENTER);
  textFont('monospace', 8);
  textStyle(NORMAL);
  noStroke();
  fill(255);
  frameRate(15);
  changePhoto();

}

function draw() {
  background(0);
  myAsciiArt.typeArray2d(ascii_arr, this);
  if (x < result.length) {
    ascii_arr.forEach((item, i) => {
      item.forEach((innerItem, j) => {
        if (innerItem == result[x]) {
          ascii_arr[i][j] = "";
        }

      });
    });
    x++;
  } else {
    changePhoto();
    gfx.filter(POSTERIZE, 2);
    myAsciiArt.typeArray2d(ascii_arr, this);
    x = 0;
    tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
    image(images[floor(cyclic_t)], 0, 0, width, height);
    noTint();
  }
}

function changePhoto() {
  cyclic_t = millis() * 0.0002 % images.length;
  gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
  ascii_arr = myAsciiArt.convert(gfx);
  result = myAsciiArt.__weightTable.map(a => String.fromCharCode(a.code));
}
