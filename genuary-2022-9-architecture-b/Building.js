class Building {
  constructor(x, y, w, h, other, i) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.other = other;
    this.i = i;

    this.tl = createVector(this.x - this.w / 2, this.y - this.h / 2);
    this.tr = createVector(this.x + this.w / 2, this.y - this.h / 2);
    this.bl = createVector(this.x - this.w / 2, this.y + this.h / 2);
    this.br = createVector(this.x + this.w / 2, this.y + this.h / 2);

    this.topLine = {
      pt1x: this.tl.x,
      pt1y: this.tl.y,
      pt2x: this.tr.x,
      pt2y: this.tr.y,
    };
    this.leftLine = {
      pt1x: this.tl.x,
      pt1y: this.tl.y,
      pt2x: this.bl.x,
      pt2y: this.bl.y,
    };
    this.rightLine = {
      pt1x: this.tr.x,
      pt1y: this.tr.y,
      pt2x: this.br.x,
      pt2y: this.br.y,
    };
    this.bottomLine = {
      pt1x: this.bl.x,
      pt1y: this.bl.y,
      pt2x: this.br.x,
      pt2y: this.br.y,
    };
  }

  draw() {
    textSize(14);
    text(this.i, this.x, this.y);
    this.other.forEach((o, i) => {
      // if (i === 0) {
      //   this.drawLines();
      //   return;
      // }
      if (
        (o.tl.x < this.tl.x && this.tl.x < this.tr.x) ||
        (o.tl.x > this.tl.x && this.tl.x > this.tr.x)
      ) {
        console.log("drawing normal", i);
        this.drawLines();
        return;
      } else if (o.tl.x > this.tl.x) {
        console.log("drawing left");

        if (this.tl.y <= o.tl.y) {
          line(this.tl.x, this.tl.y, this.tr.x, this.tr.y);
        }
        line(this.tl.x, this.tl.y, this.bl.x, this.bl.y);
        line(this.bl.x, this.bl.y, this.br.x, this.br.y);
        if (this.tr.x > o.tr.x) {
          line(this.tr.x, this.tr.y, this.br.x, this.br.y);
        }
      } else {
        console.log("drawing right");
      }
      this.drawRect();
    });
  }
  drawLines() {
    line(
      this.topLine.pt1x,
      this.topLine.pt1y,
      this.topLine.pt2x,
      this.topLine.pt2y
    );
    line(
      this.leftLine.pt1x,
      this.leftLine.pt1y,
      this.leftLine.pt2x,
      this.leftLine.pt2y
    );
    line(
      this.rightLine.pt1x,
      this.rightLine.pt1y,
      this.rightLine.pt2x,
      this.rightLine.pt2y
    );
    line(
      this.bottomLine.pt1x,
      this.bottomLine.pt1y,
      this.bottomLine.pt2x,
      this.bottomLine.pt2y
    );
  }
  drawRect() {
    push();
    strokeWeight(0.5);
    line(this.tl.x, this.tl.y, this.tr.x, this.tr.y);
    line(this.bl.x, this.bl.y, this.br.x, this.br.y);
    line(this.tl.x, this.tl.y, this.bl.x, this.bl.y);
    line(this.tr.x, this.tr.y, this.br.x, this.br.y);
    pop();
  }
}
