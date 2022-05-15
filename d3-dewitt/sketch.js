const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(200))
  .join("rect")
  .attr("x", (d) => d * 10)
  .attr("y", 0)
  .attr("width", 5)
  .attr("height", height)
  .attr("mask", "url(#circle-mask-2");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(100))
  .join("rect")
  .attr("x", 0)
  .attr("y", (d) => d * 10)
  .attr("width", width)
  .attr("height", 5)
  .attr("mask", "url(#circle-mask");

const mask = svg.append("mask").attr("id", "circle-mask");
const mask2 = svg.append("mask").attr("id", "circle-mask-2");

mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black");

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white");

mask2
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

mask2
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "black");

// mask2.append('circle').attr();
