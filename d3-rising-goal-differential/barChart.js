function barChart() {
  let data;
  let datum;
  let margin;
  let height;
  let width;

  const my = (selection) => {
    const maxDiff = d3.max(data.map((d) => Math.abs(d.goalDifferential)));

    const y = d3
      .scaleLinear()
      .domain([maxDiff, maxDiff * -1])
      .range([margin.top, height - margin.bottom]);

    const xTime = d3
      .scaleTime()
      .domain(d3.extent(data.map((d) => d.date)))
      .range([margin.left, width - margin.right]);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data.map((d, i) => i))])
      .range([margin.left, width - margin.right]);

    const rightY = d3
      .scaleLinear()
      .domain([d3.max(datum.map((d) => d.total)), 0])
      .range([margin.top, height - margin.bottom]);

    selection
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("fill", "steelblue")
      .attr("x", (d, i) => x(i))
      .attr("height", (d) =>
        d.goalDifferential > 0
          ? y(0) - y(d.goalDifferential)
          : y(d.goalDifferential) - y(0) || 1
      )
      .attr("y", (d) => (d.goalDifferential > 0 ? y(d.goalDifferential) : y(0)))
      .attr("width", (d, i) => x(i + 1) - x(i) - 1)
      .on("mouseover", (event, d) => {
        tooltip.text(`${d.date} - ${d.score}`);
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", (event, d) => {
        let xPos = x(d.gameNum);
        let yPos = y(d.goalDifferential);
        return tooltip.style("top", `${yPos}px`).style("left", `${xPos}px`);
      })
      .on("mouseout", () => {
        return tooltip.style("visibility", "hidden");
      });

    selection
      .selectAll(".y-axis")
      .data([1])
      .join("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    selection
      .selectAll(".x-axis")
      .data([null])
      .join("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    selection
      .selectAll(".y-axis-right")
      .data([null])
      .join("g")
      .attr("class", "y-axis-right")
      .attr("transform", `translate(${width - margin.right},0)`)
      .call(d3.axisRight(rightY));

    selection
      .selectAll(".datum-path")
      .data(datum)
      .join("g")
      .attr("class", "datum-path")
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "rgb(236,28,36)")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.gameNum))
          .y((d) => rightY(d.total))
      );

    selection
      .append("text")
      .attr("class", "label")
      .attr("x", -(height / 2))
      .attr("y", margin.bottom / 2)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Per Goal Differential");

    selection
      .append("text")
      .attr("class", "label")
      .attr("x", width / 2)
      .attr("y", height - margin.bottom + margin.bottom / 2)
      .attr("text-anchor", "middle")
      .text("Game Number");

    selection
      .append("text")
      .attr("class", "label")
      .attr("x", -(height / 2))
      .attr("y", width - margin.bottom / 2)
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Culmative Goal Differential");

    let tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("background", "#000")
      .style("color", "white")
      .style("padding", "5px 10px")
      .text("a simple tooltip");
  };
  my.data = function (_) {
    return arguments.length ? ((data = _), my) : data;
  };
  my.datum = function (_) {
    return arguments.length ? ((datum = _), my) : datum;
  };

  my.margin = function (_) {
    return arguments.length ? ((margin = _), my) : margin;
  };

  my.width = function (_) {
    return arguments.length ? ((width = +_), my) : width;
  };

  my.height = function (_) {
    return arguments.length ? ((height = +_), my) : height;
  };

  return my;
}
