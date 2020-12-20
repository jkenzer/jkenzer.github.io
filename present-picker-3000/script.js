let ornaments = [];
let numOrnaments = 13;
let lastChoice;
let lastChoiceOrnament;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  textFont("Inconsolata");

  background("skyblue");

  for (let x = 0; x < numOrnaments; x++) {
    let randomY = random(150, height - 200);
    let randomX = width / 2 + random(-randomY * 0.5, randomY * 0.5);
    ornaments.push(new Present(x + 1, randomX, randomY));
  }
  ornaments.push(new Present("B", width / 2, 75));

  button = createButton("Choose Random");
  button.position(20, height - 75);
  button.style(
    "padding:10px 10px;border-radius: 4px;color:white;background-color: green;cursor: pointer;text-transform: uppercase;letter-spacing: 0.05em;border:0"
  );
  button.mousePressed(selectRandom);

  lastChoiceOrnament = new Present(0, width - 100, height - 60);
  lastChoiceOrnament.color = "red";
  lastChoiceOrnament.strokeColor = "white";
}

function draw() {
  fill("green");
  triangle(width / 2, 75, 200, height - 200, width - 200, height - 200);
  fill("brown");
  rect(width / 2 - 20, height - 200, 40, 200);

  ornaments.forEach((ornament, index) => {
    ornament.draw();
  });

  textSize(32);
  strokeWeight(0);
  fill("green");
  text("Last Choice", width - 100, height - 100);
  lastChoiceOrnament.draw();
}

function mouseClicked() {
  resetLastChoice();
  for (let x = 0; x < numOrnaments; x++) {
    ornaments[x].clicked();
  }
  setLastChoice();
}

function selectRandom() {
  const activeOs = ornaments.filter((o) => o.active);
  resetLastChoice();
  if (activeOs.length) {
    const rand = Math.floor(random(activeOs.length));
    const chosen = activeOs[rand].num - 1;
    ornaments[chosen].clicked(true);
    setLastChoice();
  }
}

function resetLastChoice() {
  for (let x = 0; x < numOrnaments; x++) {
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
  console.log(lastChoice);
}
