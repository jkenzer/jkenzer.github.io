const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 150, right: 150, bottom: 150, left: 150 };
let phoenixRising2021Results;

async function loadData() {
  const text = await (await fetch("./phoenix-rising-2021-results.csv")).text();
  const parseDate = d3.utcParse("%m/%d/%y");
  return d3.csvParse(text, ({ Date, Score, ...rest }) => {
    let homeScore = +Score.split("-")[0];
    let awayScore = +Score.split("-")[1];
    let winningTeam =
      homeScore > awayScore ? "home" : homeScore < awayScore ? "away" : "draw";
    let points = 0;
    if (winningTeam === "draw") {
      points = 1;
    } else if (
      rest["Home Team"] === "Phoenix Rising" &&
      winningTeam === "home"
    ) {
      points = 3;
    } else if (
      rest["Away Team"].startsWith("Phoenix Rising") &&
      winningTeam === "away"
    ) {
      points = 3;
    }
    return {
      Date: parseDate(Date),
      Score,
      ...rest,
      homeScore,
      awayScore,
      winningTeam,
      points,
    };
  });
}
loadData()
  .then((data) => {
    phoenixRising2021Results = data;

    const getScore = (game, risingScore = true) => {
      let homeTeam = game["Home Team"];
      let awayTeam = game["Away Team"];
      let [homeScore, awayScore] = game.Score.split("-");
      if (risingScore && homeTeam.startsWith("Phoenix Rising"))
        return homeScore;
      if (risingScore && awayTeam.startsWith("Phoenix Rising"))
        return awayScore;
      if (!risingScore && homeTeam.startsWith("Phoenix Rising"))
        return awayScore;
      if (!risingScore && awayTeam.startsWith("Phoenix Rising"))
        return homeScore;
    };

    const makeMarks = (data) => {
      let marks = data.map((d, i) => {
        const gameNum = i + 1;
        const risingScore = +getScore(d);
        const oppScore = +getScore(d, false);
        const goalDifferential = risingScore - oppScore;
        return {
          score: `${d["Home Team"]} ${d.Score} ${d["Away Team"]}`,
          date: d.Date,
          goalDifferential,
          gameNum,
        };
      });
      return marks;
    };

    const marks = makeMarks(phoenixRising2021Results);

    const totalDiffByGame = marks.map((d, i) => {
      const gamesToSum = marks.filter((fd, fi) => fi < i);
      const totalPrev = gamesToSum.reduce(
        (accum, p) => accum + p.goalDifferential,
        0
      );
      const total = totalPrev + d.goalDifferential;
      return {
        total,
        gameNum: d.gameNum,
      };
    });

    const xAxis = (g) =>
      g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = (g) =>
      g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

    const yAxisRight = (g) =>
      g
        .attr("transform", `translate(${width - margin.right},0)`)
        .call(d3.axisRight(rightY));

    const maxDiff = d3.max(marks.map((d) => d.goalDifferential));

    const y = d3
      .scaleLinear()
      .domain([maxDiff, maxDiff * -1])
      .range([margin.top, height - margin.bottom]);

    const xTime = d3
      .scaleTime()
      .domain(d3.extent(marks.map((d) => d.date)))
      .range([margin.left, width - margin.right]);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(marks.map((d) => d.gameNum))])
      .range([margin.left, width - margin.right]);

    const rightY = d3
      .scaleLinear()
      .domain([d3.max(totalDiffByGame.map((d) => d.total)), 0])
      .range([margin.top, height - margin.bottom]);

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .style("display", "block");

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

    svg
      .append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(marks)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("height", (d) =>
        d.goalDifferential > 0
          ? y(0) - y(d.goalDifferential)
          : y(d.goalDifferential) - y(0) || 1
      )
      .attr("y", (d) => (d.goalDifferential > 0 ? y(d.goalDifferential) : y(0)))
      .attr("width", (d, i) => x(i + 1) - x(i) - 1)
      .on("mouseover", (event, d) => {
        console.log(d.score);
        tooltip.text(d.score);
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", (event) => {
        console.log(d3.pointer(event));
        let [x, y] = d3.pointer(event);
        return tooltip.style("top", y + "px").style("left", x + "px");
      })
      .on("mouseout", () => {
        return tooltip.style("visibility", "hidden");
      });

    totalDiffByGame.unshift({ total: 0, gameNum: 0 });
    svg
      .append("path")
      .datum(totalDiffByGame)
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

    svg.append("g").call(yAxis);
    svg.append("g").call(yAxisRight);
    svg.append("g").call(xAxis);

    svg
      .append("text")
      .attr("class", "label")
      .attr("x", -(height / 2))
      .attr("y", margin.bottom / 2)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Per Goal Differential");
    svg
      .append("text")
      .attr("class", "label")
      .attr("x", width / 2)
      .attr("y", height - margin.bottom + margin.bottom / 2)
      .attr("text-anchor", "middle")
      .text("Game Number");
    svg
      .append("text")
      .attr("class", "label")
      .attr("x", -(height / 2))
      .attr("y", width - margin.bottom / 2)
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Culmative Goal Differential");
  })
  .catch((err) => {
    console.error(err);
  });
