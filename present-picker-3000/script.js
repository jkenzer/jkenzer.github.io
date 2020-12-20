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

function setup() {
  let canvas = createCanvas(1100, 915);
  canvas.parent("sketch");
  textFont("Inconsolata");

  background("#5777A6");

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

  bonusText = createElement("h2", "What is the phrase that pays?");
  bonusText.position(20, 70);
  bonusText.style("display:none");
}

function draw() {
  fill("#445139");

  headerText = createElement("h2", "Eduardo's Present Picker");
  headerText.position(20, 5);

  triangle(width / 2, 75, 200, height - 200, width - 200, height - 200);
  fill("#723F29");
  rect(width / 2 - 20, height - 200, 40, 200);

  ornaments.forEach((ornament, index) => {
    if (winner) {
      ornament.color = "#A6001D";
      ornament.fontColor = "white";
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
    winnerText.position(20, 70);
  }
}

function checkAnswer() {
  if (input.value().toLowerCase() == phraseAnswer.toLowerCase()) {
    console.log("you got it");
    winner = true;
  } else {
    console.log("wrong");
  }
}

function mouseClicked() {
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
