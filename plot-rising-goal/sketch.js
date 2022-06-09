const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 150, right: 150, bottom: 150, left: 150 };
const formatTipDate = d3.timeFormat("%B %d, %Y");
let marks;
let barChartInstance;
let svg;

// TODO: count of games isn't working (switch to date?)
// TODO: Show home games differently from away games

async function loadData() {
  const text = await (await fetch("./rising-data.csv")).text();
  const parseDate = d3.timeParse("%Y-%m-%d");
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

const main = async () => {
  const phoenixRising2021Results = await loadData();

  console.log(Plot.version);

  const getScore = (game, risingScore = true) => {
    let homeTeam = game["Home Team"];
    let awayTeam = game["Away Team"];
    let [homeScore, awayScore] = game.Score.split("-");
    if (risingScore && homeTeam.startsWith("Phoenix Rising")) return homeScore;
    if (risingScore && awayTeam.startsWith("Phoenix Rising")) return awayScore;
    if (!risingScore && homeTeam.startsWith("Phoenix Rising")) return awayScore;
    if (!risingScore && awayTeam.startsWith("Phoenix Rising")) return homeScore;
  };

  const makeMarks = (data) => {
    let marks = data.map((d, i) => {
      const gameNum = i + 1;
      const risingScore = +getScore(d);
      const oppScore = +getScore(d, false);
      const goalDifferential = risingScore - oppScore;
      return {
        score: `${gameNum} ${d["Home Team"]} ${d.Score} ${d["Away Team"]}`,
        date: formatTipDate(d.Date),
        Date: d.Date,
        goalDifferential,
        gameNum,
      };
    });
    return marks;
  };

  marks = makeMarks(
    phoenixRising2021Results.sort((a, b) => d3.ascending(a.Date, b.Date))
  );

  document.body.append(
    Plot.plot({
      width: width,
      style: {
        background: "transparent",
      },
      fontSize: 16,
      x: {
        line: true,
        label: "Date",
      },
      y: {
        line: true,
        label: "Goal Differential",
        domain: [-7, 7],
      },
      color: {
        scheme: "purd",
        label: "Goal Diff",
        type: "linear",
        legend: true,
        style: {
          background: "transparent",
        },
        // domain: [-3, 5]
      },
      marks: [
        Plot.areaY(marks, {
          x: "gameNum",
          y: "goalDifferential",
          y2: (d) => 0,
          sort: "gameNum",
        }),
        Plot.lineY(marks, {
          x: "gameNum",
          y: "goalDifferential",
          sort: "gameNum",
          opacity: 0.5,
        }),
        Plot.ruleY([0], { stroke: "#ccc" }),
        // Plot.text(marks, {x: "gameNum", y: "goalDifferential", text: d => d.result, dx: 3, dy: -15, fontSize: 13, textAnchor: "start"}),
      ],
    })
  );
};

main();
