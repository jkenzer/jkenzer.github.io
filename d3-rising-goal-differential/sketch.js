const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 150, right: 150, bottom: 150, left: 150 };

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
      Date,
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
      // console.log(d);
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

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  totalDiffByGame.unshift({ total: 0, gameNum: 0 });

  svg.call(
    barChart()
      .data(marks)
      .datum(totalDiffByGame)
      .margin(margin)
      .width(width)
      .height(height)
  );
};
main();
