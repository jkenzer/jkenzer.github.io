var myAsciiArt;
var asciiart_width = 120; var asciiart_height = 60;
var images = [];
var gfx;
var ascii_arr;
var cyclic_t;

function preload() {
  images[0] = loadImage('IMG_0516.jpg');
  images[1] =loadImage('IMG_0855.jpg');
  images[2] = loadImage('IMG_1327.jpg');
  //images[3] = loadImage('IMG_1480.JPG');
}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("sketch");
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(1);
  myAsciiArt = new AsciiArt(this);
  myAsciiArt.printWeightTable();
  textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
  noStroke(); fill(255);
  frameRate(30);
}

function draw(){
  background(0);
  cyclic_t = millis() * 0.0002 % images.length;
  gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
  gfx.filter(POSTERIZE, 2);
  ascii_arr = myAsciiArt.convert(gfx);
  myAsciiArt.typeArray2d(ascii_arr, this);
  tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
  image(images[floor(cyclic_t)], 0, 0, width, height);
  noTint();
}
typeArray2d = function(_arr2d, _dst, _x, _y, _w, _h) {
  if(_arr2d === null) {
    console.log('[typeArray2d] _arr2d === null');
    return;
  }
  if(_arr2d === undefined) {
    console.log('[typeArray2d] _arr2d === undefined');
    return;
  }
  switch(arguments.length) {
    case 2: _x = 0; _y = 0; _w = width; _h = height; break;
    case 4: _w = width; _h = height; break;
    case 6: /* nothing to do */ break;
    default:
      console.log(
        '[typeArray2d] bad number of arguments: ' + arguments.length
      );
      return;
  }
  if(_dst.canvas === null) {
    console.log('[typeArray2d] _dst.canvas === null');
    return;
  }
  if(_dst.canvas === undefined) {
    console.log('[typeArray2d] _dst.canvas === undefined');
    return;
  }
  var temp_ctx2d = _dst.canvas.getContext('2d');
  if(temp_ctx2d === null) {
    console.log('[typeArray2d] _dst canvas 2d context is null');
    return;
  }
  if(temp_ctx2d === undefined) {
    console.log('[typeArray2d] _dst canvas 2d context is undefined');
    return;
  }
  var dist_hor = _w / _arr2d.length;
  var dist_ver = _h / _arr2d[0].length;
  var offset_x = _x + dist_hor * 0.5;
  var offset_y = _y + dist_ver * 0.5;
  for(var temp_y = 0; temp_y < _arr2d[0].length; temp_y++)
    for(var temp_x = 0; temp_x < _arr2d.length; temp_x++)
      /*text*/temp_ctx2d.fillText(
        _arr2d[temp_x][temp_y],
        offset_x + temp_x * dist_hor,
        offset_y + temp_y * dist_ver
      );
}