const fs = require("fs");

const outputName = "sketches.json";

function getDirectories(path) {
  let dirs = [];
  const allReads = fs.readdirSync(path);
  allReads.forEach((file) => {
    let stat = fs.statSync(path + "/" + file);
    if (stat.isDirectory() && file.charAt(0) != "." && file.charAt(0) != "_") {
      dirs.push({
        sketch: file,
        name: file,
        createdDate: stat.ctime,
        lastModifiedDate: stat.mtime,
      });
    }
  });
  return dirs;
}

const directories = getDirectories(".");

const data = JSON.stringify(directories);
fs.writeFile(outputName, data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
