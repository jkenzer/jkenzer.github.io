const fs = require("fs");
const path = require("path");
const projectDir = process.argv[2];

console.log(`Checking for directory ${projectDir}`);

if (fs.existsSync(projectDir)) {
  console.log("Directory exists!");
  process.exit();
}

console.log(`Creating directory ${projectDir}`);
fs.mkdir(projectDir, (err) => {
  if (err) {
    console.log("error creating direcory");
    console.log(err);
    process.exit();
  }
});

const sketchjs = loadFile("_templates/sketch.js");
let indexhtml = loadFile("_templates/index.html");
indexhtml = indexhtml.replace("{{title}}", projectDir.replace("-", " "));

console.log("Creating sketch.js");

fs.writeFileSync(projectDir + "/sketch.js", sketchjs, {
  mode: 0666,
});

console.log("Creating index.html");

fs.writeFileSync(projectDir + "/index.html", indexhtml, {
  mode: 0666,
});

console.log("So simple!");

function loadFile(name) {
  return fs.readFileSync(path.join(__dirname, name), "utf-8");
}
