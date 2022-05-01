let rowCount;
const SIZE = 25;
const tiles = [];
let rules = {};
let tileTypes = [];
let grid = [];
let tile;
const HALFSIZE = SIZE / 2;

async function setup() {
  tile = new Tile();
  // top, right, bottom, left
  rules = {
    blank: [0, 0, 0, 0],
    oneLineVertical: [1, 0, 1, 0],
    oneLineHorizontal: [0, 1, 0, 1],
    cross: [1, 1, 1, 1],
    rightUpRight: [1, 1, 0, 0],
    rightUpLeft: [1, 0, 0, 1],
    rightDownRight: [0, 1, 1, 0],
    rightDownLeft: [0, 0, 1, 1],
    forkUp: [2, 0, 1, 0],
    forkUpRight: [2, 1, 0, 0],
    forkUpLeft: [2, 0, 0, 1],
    forkDown: [1, 0, 2, 0],
    forkDownRight: [0, 1, 2, 0],
    forkDownLeft: [0, 0, 2, 1],
  };
  tileTypes = Object.keys(rules);

  createCanvas(600, 600);
  noFill();
  noStroke();
  rowCount = width / SIZE;

  for (let index = 0; index < rowCount * rowCount; index++) {
    grid.push({
      collapsed: false,
      options: tileTypes,
    });
  }

  // pick a start
  let randomGridItem = Math.floor(random(0, grid.length - 1));
  setNextTile(randomGridItem);
  setEntropy(randomGridItem);
}

function draw() {
  const notCollapsed = grid.filter((item) => !item.collapsed);
  if (notCollapsed.length === 0) return;
  if (grid.length > 0) {
    let index = 0;
    for (let y = 0; y < height; y = y + SIZE) {
      for (let x = 0; x < width; x = x + SIZE) {
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
  // top, right, bottom, left

  let forType = grid[forIndex].options[0];
  if (!forType) {
    console.log("No match");
    return;
  }
  const forRules = rules[forType];

  let mod = forIndex % rowCount;
  // left
  if (forIndex > 0 && mod != 0) {
    if (!grid[forIndex - 1].collapsed) {
      let leftOptions = grid[forIndex - 1].options;
      grid[forIndex - 1].options = leftOptions.filter(
        (opt) => rules[opt][1] === forRules[3]
      );
    }
  }

  // right
  if (forIndex < grid.length - 1 && mod + 1 < rowCount) {
    if (!grid[forIndex + 1].collapsed) {
      let rightOptions = grid[forIndex + 1].options;
      grid[forIndex + 1].options = rightOptions.filter(
        (opt) => rules[opt][3] === forRules[1]
      );
    }
  }

  // above
  let aboveIndex = forIndex - rowCount;
  if (aboveIndex >= 0) {
    if (!grid[aboveIndex].collapsed) {
      let aboveOptions = grid[aboveIndex].options;
      grid[aboveIndex].options = aboveOptions.filter(
        (opt) => rules[opt][2] === forRules[0]
      );
    }
  }

  // below
  let belowIndex = forIndex + rowCount;
  if (belowIndex < grid.length) {
    if (!grid[belowIndex].collapsed) {
      let belowOptions = grid[belowIndex].options;
      grid[belowIndex].options = belowOptions.filter(
        (opt) => rules[opt][0] === forRules[2]
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
