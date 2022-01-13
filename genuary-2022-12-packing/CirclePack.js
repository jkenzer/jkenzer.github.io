class CirclePack {
  constructor(x, y, myWidth, myHeight) {
    this.minR = 5;
    this.maxR = 20;
    this.allCircles = [];
    this.numCircles = 100;
    let c = {
      x: random(this.maxR + x, myWidth + x - this.maxR),
      y: random(this.maxR + y, myHeight + y - this.maxR),
      r: this.maxR,
    };
    this.allCircles.push(c);
    let counter = 0;
    while (this.allCircles.length < 250) {
      c = {
        x: random(this.maxR + x, myWidth + x - this.maxR),
        y: random(this.maxR + y, myHeight + y - this.maxR),
        r: this.maxR,
      };
      this.checkDistance(c);
      counter++;
      if (counter > 200000) {
        console.log(counter);
        break;
      }
    }
  }
  draw() {
    this.allCircles.forEach((c) => {
      circle(c.x, c.y, c.r * 2);
    });
  }
  checkDistance(currentC) {
    let overlapping = false;

    for (let i = 0; i < this.allCircles.length; i++) {
      const c = this.allCircles[i];
      overlapping = false;
      if (dist(currentC.x, currentC.y, c.x, c.y) < c.r + this.minR) {
        overlapping = true;
        break;
      }
      if (dist(currentC.x, currentC.y, c.x, c.y) < currentC.r + c.r + 1) {
        while (dist(currentC.x, currentC.y, c.x, c.y) < currentC.r + c.r + 1) {
          currentC.r--;
        }
      }
    }
    if (!overlapping) {
      this.allCircles.push(currentC);
    }
  }
}
