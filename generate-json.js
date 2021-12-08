const fs = require("fs");

const outputName = "sketches.json";

function getDirectories(path) {
  let dirs = [];
  const allReads = fs.readdirSync(path);
  allReads.forEach((file) => {
    const stat = fs.statSync(path + "/" + file);
    if (stat.isDirectory() && file.charAt(0) != "." && file.charAt(0) != "_") {
      const dirContents = fs.readdirSync(`${path}/${file}`);
      let newestFile = 0;
      let newestDate = "";
      dirContents.forEach((innerFile) => {
        const innerStat = fs.statSync(`${path}/${file}/${innerFile}`);
        if (innerStat.mtimeMs > newestFile) {
          newestFile = innerStat.mtimeMs;
          newestDate = innerStat.mtime;
        }
      });
      dirs.push({
        sketch: file,
        name: file,
        createdDate: stat.birthtime,
        lastModifiedDate: newestDate,
        code: file,
      });
    }
  });
  return dirs;
}

const directories = getDirectories(".");

const sorted_directories = directories.sort(
  (a, b) => b.lastModifiedDate - a.lastModifiedDate
);

const data = JSON.stringify(sorted_directories);
fs.writeFile(outputName, data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
