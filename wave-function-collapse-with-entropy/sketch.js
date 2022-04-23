let rowCount;
const size = 25;
const tiles = [];
let rules = {};
let tileTypes = [];
let grid = [];
let tile;

async function setup() {
  const data = await fetch("rules.json");
  rules = await data.json();

  tileTypes = Object.keys(rules);

  tile = new Tile();

  createCanvas(600, 600);
  noFill();
  noStroke();
  rowCount = width / size;

  for (let index = 0; index < rowCount * rowCount; index++) {
    grid.push({
      collapsed: false,
      options: ["cross", "oneLineVertical", "oneLineHorizontal", "blank"],
    });
  }

  // pick a start
  let randomGridItem = Math.floor(random(0, grid.length - 1));
  setNextTile(randomGridItem);
  setEntropy(randomGridItem);
}

function draw() {
  // console.table(grid);
  if (grid.length > 0) {
    let index = 0;
    for (let y = 0; y < height; y = y + size) {
      for (let x = 0; x < width; x = x + size) {
        // console.log(rowCount, index, index % rowCount);
        // console.log(index, grid[index].options.length);
        if (grid[index].collapsed) {
          push();
          translate(x, y);
          tile.draw(grid[index].options[0]);
          pop();
        }
        index++;
      }
    }
    const numTilesRemaining = grid.filter((tile) => !tile.collapsed);
    if (numTilesRemaining.length > 0) {
      const nextIndex = chooseNextTile();
      setNextTile(nextIndex);
      setEntropy(nextIndex);
    }
  }
  // noLoop();
}

function setEntropy(forIndex) {
  let forType = grid[forIndex].options[0];
  let forRules = rules[forType];
  let mod = forIndex % rowCount;
  // left
  if (forIndex > 0 && mod != 0) {
    if (!grid[forIndex - 1].collapsed) {
      let leftOptions = grid[forIndex - 1].options;
      let forLeftOptions = forRules.left;
      grid[forIndex - 1].options = leftOptions.filter((opt) =>
        forLeftOptions.includes(opt)
      );
    }
  }

  // right
  if (forIndex < grid.length - 1 && mod + 1 < rowCount) {
    if (!grid[forIndex + 1].collapsed) {
      let rightOptions = grid[forIndex + 1].options;
      let forRightOptions = forRules.right;
      grid[forIndex + 1].options = rightOptions.filter((opt) =>
        forRightOptions.includes(opt)
      );
    }
  }

  // above
  let aboveIndex = forIndex - rowCount;
  if (aboveIndex >= 0) {
    if (!grid[aboveIndex].collapsed) {
      let aboveOptions = grid[aboveIndex].options;
      let forAboveOptions = forRules.top;
      grid[aboveIndex].options = aboveOptions.filter((opt) =>
        forAboveOptions.includes(opt)
      );
    }
  }

  // below
  let belowIndex = forIndex + rowCount;
  if (belowIndex < grid.length) {
    if (!grid[belowIndex].collapsed) {
      let belowOptions = grid[belowIndex].options;
      let forBelowOptions = forRules.top;
      grid[belowIndex].options = belowOptions.filter((opt) =>
        forBelowOptions.includes(opt)
      );
    }
  }
}

function chooseNextTile() {
  let gridChoices = [];

  // non collapsed options
  grid.forEach((tile, index) => {
    if (!tile.collapsed) {
      gridChoices.push({ index, options: tile.options.length });
    }
  });

  gridChoices.sort((a, b) => {
    return a.options - b.options;
  });
  const smallestLength = gridChoices[0].options;
  const chooseFrom = gridChoices.filter((opt) => opt.options == smallestLength);
  const { index } = random(chooseFrom);

  return index;
}

function setNextTile(nextIndex) {
  grid[nextIndex].collapsed = true;
  const chosenOption = random(grid[nextIndex].options);
  grid[nextIndex].options = [chosenOption];
}
