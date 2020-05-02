var xPos = 15;
var yPos = 15;
var blendModeIndexEven = 0;
var blendModeIndexODD = 1;
var strokeWeightInt = 30;

function setup() {
  let canvas = createCanvas(630, 600);
  canvas.parent("sketch");
  blendModes = [
    BLEND,
    ADD,
    DARKEST,
    LIGHTEST,
    DIFFERENCE,
    EXCLUSION,
    MULTIPLY,
    OVERLAY,
    HARD_LIGHT,
    SOFT_LIGHT,
    DODGE,
    BURN
  ]
  background(255, 235, 0);
  noLoop();
}

function draw() {
  clear();
  for (let x = 0; x < 64; x++) {
    push();
    if (x % 2 == 0) {
      blendMode(blendModes[blendModeIndexEven]);
      translate(xPos, yPos);
    } else {
      blendMode(blendModes[blendModeIndexODD]);
      translate(xPos, yPos - 25);
    }

    drawHatch();

    xPos += 68;
    if (xPos > width) {
      xPos = 15;
      yPos += 105;
    }
    pop();
  }
}

function drawHatch() {
  console.log(strokeWeightInt);
  strokeWeight(strokeWeightInt);
  stroke(80, 150, 255);
  line(0, 0, 50, 50);
  stroke(255, 50, 50);
  line(50, 0, 0, 50);
}

function handleonchange(option, toChange) {
  console.log('here');
  if (toChange == "ODD") {
    blendModeIndexODD = option.value;
  } else {
    blendModeIndexEven = option.value;
  }
  xPos = 15;
  yPos = 15;
  redraw();
}

function handleStrokeChange(option) {
  strokeWeightInt = option.value;
  xPos = 15;
  yPos = 15;
  redraw();
}