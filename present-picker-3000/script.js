let ornaments = [];
let numOrnaments = 13;
let lastChoice;
let lastChoiceOrnament;
let phrase = "MerryChristmas";
let phraseAnswer = "Merry Christmas";
let letters = phrase.split("");
let bonusText;
let input;
let buttonBonus;
let winner;
let snowflakes = [];
let gif;

function preload() {
  song = loadSound("assets/Sleigh-bells-sound.mp3");
  claps = loadSound("assets/applause.mp3");
  buzzer = loadSound("assets/buzzer.mp3");
  gif = loadImage("assets/tenor.gif");
}

function setup() {
  let canvas = createCanvas(1100, 915);
  canvas.parent("sketch");
  textFont("Langar");
  gif.pause();

  let row = 1;
  let placed = 0;
  let yPos = 180;
  let center = width / 2;
  let xPos = center;
  let randomLetter;
  for (let x = 0; x < numOrnaments; x++) {
    // range is 75 - height - 200
    placed++;
    if (row === 2 && placed === 1) {
      xPos = center - 75;
    } else if (row === 2 && placed === 2) {
      xPos = center + 75;
    }
    if ((row === 3 || row === 5) && placed === 1) {
      xPos = center - 150;
    } else if ((row === 3 || row === 5) && placed === 3) {
      xPos = center + 150;
    } else if (row === 3 || row === 5) {
      xPos = center;
    }
    if (row === 4 && placed === 1) {
      xPos = center - 210;
    } else if (row === 4 && placed === 2) {
      xPos = center - 75;
    } else if (row === 4 && placed === 3) {
      xPos = center + 75;
    } else if (row === 4) {
      xPos = center + 210;
    }

    randomLetter = Math.floor(random(letters.length));
    letter = letters[randomLetter];
    letters.splice(randomLetter, 1);
    ornaments.push(new Present(x + 1, xPos, yPos, letter));
    if (placed == row) {
      placed = 0;
      row++;
      yPos += 120;
    }
  }
  ornaments.push(new Present("B", width / 2, 75, letters[0]));
  ornaments[13].strokeColor = 255;

  button = createButton("Choose Random");
  button.position(20, height - 75);
  button.style(
    "padding:10px 10px;border-radius: 4px;color:white;background-color: #AD326B;cursor: pointer;text-transform: uppercase;letter-spacing: 0.05em;border:0"
  );
  button.mousePressed(selectRandom);

  lastChoiceOrnament = new Present(0, width - 100, height - 60, "");
  lastChoiceOrnament.color = "#445139";
  lastChoiceOrnament.strokeColor = "white";

  input = createInput();
  input.position(20, 130);
  input.style("display:none");

  buttonBonus = createButton("Check It");
  buttonBonus.position(input.x + input.width, 130);
  buttonBonus.style("display:none");
  buttonBonus.mousePressed(checkAnswer);

  bonusText = createElement("h2", "Answer");
  bonusText.style("font-weight:400;font-size:30px;color:#ffffff");

  bonusText.position(20, 70);
  bonusText.style("display:none");
}

function draw() {
  background("#5777A6");
  let t = frameCount / 60;

  headerText = createElement("h2", "Eduardo's Present Picker");
  headerText.style("font-weight:400;font-size:40px;color:#ffffff");
  headerText.position(20, 5);

  //tree
  fill("#445139");
  triangle(width / 2, 75, 200, height - 200, width - 200, height - 200);
  // trunk
  fill("#723F29");
  rect(width / 2 - 20, height - 200, 40, 200);

  push();
  translate(width / 2, 75);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();

  ornaments.forEach((ornament, index) => {
    if (winner) {
      ornament.winner = true;
    }
    ornament.draw();
  });

  textSize(32);
  strokeWeight(0);
  fill("#EBE1E5");
  text("Last Choice", width - 100, height - 100);
  lastChoiceOrnament.draw();

  const activeOs = ornaments.filter((o) => o.active);
  if (activeOs.length === 0 && !winner) {
    input.style("display:block");
    bonusText.style("display:block");
    buttonBonus.style("display:block");
  }
  if (winner) {
    input.style("display:none");
    bonusText.style("display:none");
    buttonBonus.style("display:none");
    winnerText = createElement("h2", "Winner!!!");
    winnerText.style("font-weight:400;font-size:60px;color:#ffffff");
    winnerText.position(20, 70);
  }

  // gif
  push();
  scale(0.35);
  translate(windowWidth / 2 - 50 * 2, windowHeight * 3 - gif.height - 70);
  image(gif, 0, 0);
  pop();
  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

function checkAnswer() {
  if (input.value().toLowerCase() == phraseAnswer.toLowerCase()) {
    console.log("you got it");
    winner = true;
    claps.play();
    setTimeout(function () {
      claps.stop();
    }, 4000);
  } else {
    buzzer.play();
    setTimeout(function () {
      buzzer.stop();
    }, 2000);
    console.log("wrong");
  }
}

function mouseClicked() {
  gif.play();
  setTimeout(function () {
    gif.pause();
  }, 6000);
  resetLastChoice();
  for (let x = 0; x < ornaments.length; x++) {
    ornaments[x].clicked();
  }
  setLastChoice();
}

function selectRandom() {
  const activeOs = ornaments.filter((o) => o.active);
  resetLastChoice();
  if (activeOs.length) {
    const rand = Math.floor(random(activeOs.length));
    let chosen = activeOs[rand].num;
    if (chosen == "B") {
      chosen = ornaments.length - 1;
    } else {
      chosen = chosen - 1;
    }
    ornaments[chosen].clicked(true);
    setLastChoice();
  }
}

function resetLastChoice() {
  for (let x = 0; x < ornaments.length; x++) {
    ornaments[x].lastChoice = false;
  }
}

function setLastChoice() {
  ornaments.forEach((o) => {
    if (o.lastChoice) {
      lastChoice = o.num;
    }
  });
  lastChoiceOrnament.num = lastChoice;
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill(173, 50, 107);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
