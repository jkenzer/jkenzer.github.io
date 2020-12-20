class Present {
  constructor(num, xpos, ypos, letter) {
    this.num = num;
    this.xpos = xpos;
    this.ypos = ypos;
    this.active = true;
    this.size = 60;
    this.color = "#AD326B";
    this.fontColor = "white";
    this.lastChoice = false;
    this.strokeColor = 51;
    this.letter = letter;
  }

  draw() {
    stroke(this.strokeColor);
    strokeWeight(1);
    fill(this.color);
    circle(this.xpos, this.ypos, this.size);
    fill(this.fontColor);
    textSize(32);
    textAlign(CENTER);
    let display = this.active ? this.num : this.letter;
    text(display, this.xpos, this.ypos + 10);
  }

  clicked(random = false) {
    if (random) {
      this.color = "gray";
      this.fontColor = "darkgray";
      this.active = false;
      this.lastChoice = true;
      return;
    }

    let d = dist(mouseX, mouseY, this.xpos, this.ypos);
    if (d <= this.size / 2) {
      console.log("clicked");
      this.color = "gray";
      this.fontColor = "darkgray";
      this.active = false;
      this.lastChoice = true;
    }
  }
}
