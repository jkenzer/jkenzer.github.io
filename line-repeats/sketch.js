let scaleSlider;
let count;
let rotation;
let saveBtn;
function setup() {
  createCanvas(810, 800, SVG);
  strokeWeight(1);
  noFill();
  noLoop();
  angleMode(DEGREES);
  scaleSlider = createSlider(0.005, 1, 0.005, 0.005);
  count = createSlider(1, 100, 1, 1);
  rotation = createSlider(-4, 4, 2, 0.1);
  scaleSlider.input(redraw);
  count.input(redraw);
  rotation.input(redraw);
  saveBtn = createButton("Save SVG");
  saveBtn.mousePressed(saveSVG);
}

function draw() {
  background("white");
  let scale = 1;
  for (let index = 0; index < count.value(); index++) {
    push();
    translate(width / 2, height / 2);
    rotate(index * rotation.value());
    // rotate(index * 2);
    let myLine = new Line(1.5 * index, index * 1.5);
    myLine.draw(scale);
    pop();
    scale += scaleSlider.value();
  }
}

function saveSVG() {
  save("line-repeats.svg");
}
