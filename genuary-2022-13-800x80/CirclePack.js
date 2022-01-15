class CirclePack {
  constructor(x, y, myWidth, myHeight, seedCircles) {
    this.minR = 1;
    this.maxR = 20;
    this.allCircles = seedCircles;
    this.numCircles = 300000;
    let c;
    let counter = 0;

    for (let i = 0; i < this.numCircles; i++) {
      c = {
        x: random(this.minR + x, myWidth + x - this.minR),
        y: random(this.minR + y, myHeight + y - this.minR),
        r: this.minR,
        fill: false,
      };
      if (this.isValid(c)) {
        while (this.isValid(c) && c.r < this.maxR) {
          c.r++;
        }
        this.allCircles.push(c);
      }
      counter++;
      if (counter > 200000) {
        console.log(counter);
        break;
      }
    }
  }
  draw() {
    this.allCircles.forEach((c) => {
      // if (c.r >= this.maxR * 0.5) {
      //   strokeWeight(0);
      // } else {
      //   strokeWeight(1);
      // }
      if (c.fill) {
        fill(155);
      } else {
        noFill();
      }
      circle(c.x, c.y, c.r * 2);
    });
  }
  isValid(currentC) {
    if (
      currentC.x - currentC.r + 2 < 0 ||
      currentC.x + currentC.r + 2 > width ||
      currentC.y - currentC.r + 2 < 0 ||
      currentC.y + currentC.r + 2 > height
    ) {
      return false;
    }
    for (let i = 0; i < this.allCircles.length; i++) {
      const c = this.allCircles[i];
      if (dist(currentC.x, currentC.y, c.x, c.y) < c.r + currentC.r + 2) {
        return false;
      }
    }
    return true;
  }
}
