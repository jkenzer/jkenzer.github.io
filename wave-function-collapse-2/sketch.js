let rowCount;
const size = 15;
const tiles = [];
let rules = {};
let tileTypes = [];

async function setup() {
  const data = await fetch("rules.json");
  rules = await data.json();

  tileTypes = Object.keys(rules);
  const initalTile = random(tileTypes);

  createCanvas(600, 600);
  noFill();
  noStroke();
  noLoop();

  rowCount = width / size;
  prevTile = initalTile;
  let index = 0;
  for (let y = 0; y < height; y = y + size) {
    for (let x = 0; x < width; x = x + size) {
      let tileAbove = getTileAbove(index);
      if (index % rowCount == 0 && index > 0) {
        prevTile = undefined;
      }
      let nextTile = chooseTile(prevTile, tileAbove);
      tiles.push(new Tile(x, y, nextTile));
      prevTile = nextTile;
      index++;
    }
  }
}

function draw() {
  strokeWeight(2);
  stroke("black");
  square(0, 0, width);
  for (const tile of tiles) {
    // console.log("drawing", tile.type);
    tile.draw();
  }
}

function getTileAbove(index) {
  let aboveIndex = index - rowCount;
  if (aboveIndex >= 0) {
    let tile = tiles[index - rowCount];
    if (tile) {
      return tile.type;
    }
  } else {
    return undefined;
  }
}
function chooseTile(left, above) {
  let nextTile;
  if (above && prevTile) {
    let tileRulesRight = rules[left].adjacent.right;
    let tileRulesTop = rules[above].adjacent.bottom;
    let valids = tileRulesRight.filter((opt) => {
      return tileRulesTop.includes(opt);
    });
    nextTile = random(valids);
  } else if (above && !prevTile) {
    // loop through each key and grab the top ajacents that batch
    let matchingTypes = [];
    tileTypes.forEach((type) => {
      let match = rules[type].adjacent.top.filter((t) => t == above);
      if (match.length) {
        matchingTypes.push(type);
      }
    });

    // pick one of the keys
    return random(matchingTypes);
  } else if (prevTile) {
    nextTile = random(rules[left].adjacent.right);
  }
  return nextTile;
}
