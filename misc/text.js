function setup() {


  createCanvas(740, 500);
  background(0);

}


function draw() {

  fill('black')
  circle(125, 125, 125);
  stroke('white');
  line(125, 125, 180, 150);
  line(125, 125, 90, 90);
  fill('white');
  textSize(24);
  translate(125, 125);
  let tw = textWidth('Word');
  let asc = textAscent() * 0.6;
  text('Word', (tw / 2) * -1, -(asc), 25, 25);

}