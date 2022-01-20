let tcs = [];
function setup() {
  createCanvas(displayWidth, displayHeight);
  stroke(0);
  noLoop();
  let r = 50;
  let spacing = 25;
  let strings = [" CIRCLES AND CIRCLES ", "TYPOOGRAPHY", " ALL THE WORDS "];
  for (let x = r; x < width; x += r * 2 + spacing) {
    for (let y = r; y < height; y += r * 2 + spacing) {
      tcs.push(new TextCircle(x, y, random(strings)));
    }
  }
}

function draw() {
  tcs.forEach((tc) => {
    tc.draw();
  });
}
class TextCircle {
  constructor(x, y, str) {
    this.x = x;
    this.y = y;
    this.str = str;
    this.r = 50;
  }

  draw() {
    textSize(10);
    push();
    translate(this.x, this.y);
    let stringIndex = 0;
    let a = TWO_PI / this.str.length;
    let r2 = this.r * random(0.4, 1);
    for (let i = PI; i < TWO_PI + PI; i += a) {
      let x = cos(i) * this.r;
      let y = sin(i) * r2;
      let cLettter = this.str[stringIndex];
      text(cLettter, x, y);
      stringIndex++;
    }
    pop();
  }
}
