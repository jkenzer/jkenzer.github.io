class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 100 / 2;
    this.numStems = random([6, 8]);
    this.rotateStems = 360 / (this.numStems * 2);
    this.numStemPieces = random([2, 3, 4]);
    this.stemDistance = this.size / this.numStemPieces - 3;
    this.elChoice = [];
    for (let numChoices = 0; numChoices < this.numStemPieces; numChoices++) {
      this.elChoice[numChoices] = random([
        "circle",
        "square",
        "chevron",
        "revchevron",
      ]);
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke("black");
    strokeWeight(1);
    noFill();
    // fill("silver");
    circle(0, 0, this.size / 10);

    push();
    noFill();

    for (let x = 0; x < this.numStems; x++) {
      rotate(this.rotateStems);
      line(-1 * this.size, -1 * this.size, this.size, this.size);

      for (let stemDot = 1; stemDot <= this.numStemPieces; stemDot++) {
        let stemLocation = this.stemDistance * stemDot;

        let negStemCoords = -1 * stemLocation;
        let posStemCoords = stemLocation;

        if (this.elChoice[stemDot - 1] == "circle") {
          this.circleStem(negStemCoords, posStemCoords);
        } else if (this.elChoice[stemDot - 1] == "chevron") {
          this.chevStem(negStemCoords, posStemCoords);
        } else if (this.elChoice[stemDot - 1] == "revchevron") {
          this.revchevStem(negStemCoords, posStemCoords);
        } else {
          this.squareStem(negStemCoords, posStemCoords);
        }
      }
    }

    pop();

    pop();
  }

  squareStem(negStemCoords, posStemCoords) {
    rect(negStemCoords - 2.5, negStemCoords - 2.5, 5, 5);
    rect(posStemCoords - 2.5, posStemCoords - 2.5, 5, 5);
  }
  circleStem(negStemCoords, posStemCoords) {
    circle(negStemCoords, negStemCoords, 5);
    circle(posStemCoords, posStemCoords, 5);
  }

  chevStem(negStemCoords, posStemCoords) {
    line(negStemCoords, negStemCoords, negStemCoords, negStemCoords + 10);
    line(negStemCoords, negStemCoords, negStemCoords + 10, negStemCoords);
    line(posStemCoords, posStemCoords, posStemCoords, posStemCoords - 10);
    line(posStemCoords, posStemCoords, posStemCoords - 10, posStemCoords);
  }

  revchevStem(negStemCoords, posStemCoords) {
    line(negStemCoords, negStemCoords, negStemCoords, negStemCoords - 10);
    line(negStemCoords, negStemCoords, negStemCoords - 10, negStemCoords);
    line(posStemCoords, posStemCoords, posStemCoords, posStemCoords + 10);
    line(posStemCoords, posStemCoords, posStemCoords + 10, posStemCoords);
  }
}
