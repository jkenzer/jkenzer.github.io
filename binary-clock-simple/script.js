let dots = {};
let placeSpace = 40;
let timeSpace = 100;
let bottomRow = 400;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  textFont('Inconsolata');

  bottomRow = height / 2 - 100;
  console.log(bottomRow);
  if (bottomRow - 150 < 0) {
    bottomRow = 175;
  }
  // create an array
  dots = {
    hours: [],
    mins: [],
    secs: []
  };

  // start in the center and subtrack back to the left position
  // this is ugly
  let start = (width / 2) - placeSpace - timeSpace - placeSpace;
  dots.hours.tens = [new Dot(start, bottomRow - 50), new Dot(start, bottomRow)];
  start += placeSpace;
  dots.hours.ones = [new Dot(start, bottomRow - 100), new Dot(start, bottomRow - 50), new Dot(start, bottomRow)];
  start += timeSpace;
  dots.mins.tens = [new Dot(start, bottomRow - 100), new Dot(start, bottomRow - 50), new Dot(start, bottomRow)];
  start += placeSpace;
  dots.mins.ones = [new Dot(start, bottomRow - 150), new Dot(start, bottomRow - 100), new Dot(start, bottomRow - 50), new Dot(start, bottomRow)];
  start += timeSpace;
  dots.secs.tens = [new Dot(start, bottomRow - 100), new Dot(start, bottomRow - 50), new Dot(start, bottomRow)];
  start += placeSpace;
  dots.secs.ones = [new Dot(start, bottomRow - 150), new Dot(start, bottomRow - 100), new Dot(start, bottomRow - 50), new Dot(start, bottomRow)];
}

function draw() {
  background(55, 100, 144);

  let currentTime = new Date();
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  let currSecs = currentTime.getSeconds();
  let currMins = currentTime.getMinutes();
  let currHours = currentTime.getHours();
  currHours = (currHours > 12) ? currHours - 12 : currHours;
  let binSecs = currSecs.toString(2).padStart(6, 0);
  let binMins = currMins.toString(2).padStart(6, 0);
  let binHours = currHours.toString(2).padStart(4, 0);

  let binFullTime = `${binHours}:${binMins}:${binSecs}`
  text(binFullTime, width / 2, height / 2);

  setBinDots("secs", currSecs);
  setBinDots("mins", currMins);
  setBinDots("hours", currHours);

  for (let key in dots) {
    for (let innerKey in dots[key]) {
      for (let dot of dots[key][innerKey]) {
        dot.draw();
      }
    }
  }

  textSize(24);
  fill(150, 150, 150);
  text(`${currHours.toString().padStart(2, 0)}:${currMins.toString().padStart(2, 0)}:${currSecs.toString().padStart(2, 0)}`, width / 2, height / 2 + 50);

  let lineTop = height / 5;
  let lineBottom = height / 5 * 2.25;
  stroke(150, 150, 150);
  // line(width / 3, lineTop, width / 3, lineBottom);
  // line(width / 2, lineTop, width / 2, lineBottom);
  // line((width / 3 + width / 3), lineTop, (width / 3 + width / 3), lineBottom);
}

function setBinDots(place, time) {
  // break each digit into a place
  let [tens, ones] = time.toString().padStart(2, 0).split('');

  // convert each place to a bin representation
  let padTens = 3;
  let padOnes = 4
  if (place == "hours") {
    padTens = 2;
    padOnes = 3;
  }
  let tensBin = parseInt(tens).toString(2).padStart(padTens, 0);
  let onesBin = parseInt(ones).toString(2).padStart(padOnes, 0);

  // turn on the dots for each bin rep
  tensBin.split('').forEach((digit, idx) => {
    dots[place]["tens"][idx].on = (digit === "1") ? true : false;
  });
  onesBin.split('').forEach((digit, idx) => {
    dots[place]["ones"][idx].on = (digit === "1") ? true : false;
  });
}
