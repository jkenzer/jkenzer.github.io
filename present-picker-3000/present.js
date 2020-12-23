class Present {
  constructor(num, xpos, ypos, letter) {
    this.num = num;
    this.xpos = xpos;
    this.ypos = ypos;
    this.active = true;
    this.size = 60;
    this.winner = false;
    this.lastChoice = false;
    this.strokeColor = 51;
    this.letter = letter;
  }

  draw() {
    if (this.strokeColor != 255) {
      stroke(this.strokeColor);
    } else {
      stroke(173, 50, 107);
    }
    strokeWeight(1);
    if (this.active) {
      fill(173, 50, 107);
    } else {
      if (this.winner) {
        fill(173, 50, 107);
      } else {
        fill(244, 229, 22);
      }
    }
    circle(this.xpos, this.ypos, this.size);
    if (this.active) {
      fill("white");
    } else {
      fill(173, 50, 107);
    }

    textSize(32);
    textAlign(CENTER);
    let display = this.active ? this.num : this.letter;
    text(display, this.xpos, this.ypos + 10);
  }

  clicked(random = false) {
    if (random) {
      this.markSelected();
      return;
    }

    let d = dist(mouseX, mouseY, this.xpos, this.ypos);
    if (d <= this.size / 2) {
      this.markSelected();
    }
  }

  markSelected() {
    song.play();
    setTimeout(function () {
      song.stop();
    }, 1000);
    this.active = false;
    this.lastChoice = true;
  }
}
