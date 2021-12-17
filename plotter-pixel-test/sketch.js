function setup() {
  createCanvas(500, 400);
}

function draw() {
  //https://www.pixelto.net/px-to-mm-converter

  // plot each weight on a separate layer with a separate pen
  strokeWeight(1); //0.264583333 mm
  line(10, 10, 10, 200);
  line(20, 10, 20, 200);
  line(30, 10, 30, 200);
  text("Stroke 1", 10, 250);
  text("0.2645 mm", 10, 275);

  strokeWeight(2); //0.529166667 mm
  line(150, 10, 150, 200);
  line(160, 10, 160, 200);
  line(170, 10, 170, 200);
  text("Stroke 2", 150, 250);
  text("0.529 mm", 150, 275);

  strokeWeight(3); //0.79375 mm
  line(290, 10, 290, 200);
  line(300, 10, 300, 200);
  line(310, 10, 310, 200);
  text("Stroke 3", 290, 250);
  text("0.79375 mm", 290, 275);

  strokeWeight(4); //1.058333333 mm
  line(430, 10, 430, 200);
  line(440, 10, 440, 200);
  line(450, 10, 450, 200);
  text("Stroke 4", 430, 250);
  text("1.058 mm", 430, 275);
}
