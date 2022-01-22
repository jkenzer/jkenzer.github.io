let fromCreation = new Date("January 22, 2022 09:15:00");
let currentDate = new Date();
let timeDiff = currentDate.getTime() - fromCreation.getTime();
// Number of hours
let hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
function setup() {
  createCanvas(400, 400);
  // noLoop();
  noFill();
  stroke(0);
  strokeWeight(0.5);
  hoursDiff = 0;
}

function draw() {
  background("white");
  let r = map(hoursDiff, 0, 8500, 0, width);
  for (let i = 0; i < hoursDiff; i++) {
    push();
    rotate(random(TWO_PI));
    let spacing = 20;
    line(random(spacing, width), random(spacing, height), r, r);
    pop();
  }
  textSize(10);
  text("Hours Passed Since 01/22/22 9:15AM", 5, 15);
  text(hoursDiff, 5, 35);
  hoursDiff += 3;
  if (hoursDiff > 8400) {
    noLoop();
  }
}
