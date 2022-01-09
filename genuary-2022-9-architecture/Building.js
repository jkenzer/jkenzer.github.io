class Building {
  constructor(x, y, w, h, d, vp) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.d = d;
    this.vp = vp;

    this.tl = createVector(this.x - this.w / 2, this.y - this.h / 2);
    this.tr = createVector(this.x + this.w / 2, this.y - this.h / 2);
    this.bl = createVector(this.x - this.w / 2, this.y + this.h / 2);
    this.br = createVector(this.x + this.w / 2, this.y + this.h / 2);

    this.tlLine = p5.Vector.lerp(this.tl, this.vp, this.d);
    this.blLine = p5.Vector.lerp(this.bl, this.vp, this.d);
    this.trLine = p5.Vector.lerp(this.tr, this.vp, this.d);
    this.brLine = p5.Vector.lerp(this.br, this.vp, this.d);
  }

  draw() {
    // draw vanishing point
    // circle(this.vp.x, this.vp.y, 3);

    // draw front face
    rect(this.x, this.y, this.w, this.h);

    // draw corners
    // circle(this.tl.x, this.tl.y, 3);
    // circle(this.tr.x, this.tr.y, 3);
    // circle(this.bl.x, this.bl.y, 3);
    // circle(this.br.x, this.br.y, 3);

    this.drawDepthLines();
    this.drawBackFace();
  }

  drawDepthLines() {
    if (this.vp.x < this.tl.x || this.vp.y < this.tl.y) {
      line(this.tl.x, this.tl.y, this.tlLine.x, this.tlLine.y);
    }
    if (
      this.vp.x < this.bl.x ||
      (this.vp.y > this.tl.y && this.vp.y > this.bl.y)
    ) {
      line(this.bl.x, this.bl.y, this.blLine.x, this.blLine.y);
    }

    if (this.vp.x > this.tr.x || this.vp.y < this.tr.y) {
      line(this.tr.x, this.tr.y, this.trLine.x, this.trLine.y);
    }

    if (this.vp.x > this.br.x || this.vp.y > this.br.y) {
      line(this.br.x, this.br.y, this.brLine.x, this.brLine.y);
    }
  }

  drawBackFace() {
    if (this.vp.y < this.tl.y) {
      line(this.tlLine.x, this.tlLine.y, this.trLine.x, this.trLine.y);
    }
    if (
      (this.vp.y < this.tl.y && this.vp.y > this.bl.y) ||
      this.vp.y > this.bl.y
    ) {
      line(this.blLine.x, this.blLine.y, this.brLine.x, this.brLine.y);
    }
    if (this.vp.x < this.tl.x) {
      line(this.tlLine.x, this.tlLine.y, this.blLine.x, this.blLine.y);
    }

    if (this.vp.x > this.tr.x) {
      line(this.trLine.x, this.trLine.y, this.brLine.x, this.brLine.y);
    }
  }
}
