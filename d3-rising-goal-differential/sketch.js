const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 150, right: 150, bottom: 150, left: 150 };
const formatTipDate = d3.timeFormat("%B %d, %Y");
let marks;
let barChartInstance;
let svg;

// TODO: Tooltips aren't working
// TODO: count of games isn't working (switch to date?)

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

  svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  totalDiffByGame.unshift({ total: 0, gameNum: 0 });

  barChartInstance = barChart()
    .data(marks)
    .datum(totalDiffByGame)
    .margin(margin)
    .width(width)
    .height(height);

  svg.call(barChartInstance);
};
main();

function updateYear(select) {
  const year = select.value;
  if (!year) return;
  let startYear = new Date(year, "01", "01");
  let endYear = new Date(year, "12", "31");
  const filteredData = marks.filter(
    (d) => d.Date >= startYear && d.Date <= endYear
  );
  const filteredDatum = filteredData.map((d, i) => {
    const gamesToSum = filteredData.filter((fd, fi) => fi < i);
    const totalPrev = gamesToSum.reduce(
      (accum, p) => accum + p.goalDifferential,
      0
    );
    const total = totalPrev + d.goalDifferential;
    return {
      total,
      gameNum: i + 1,
    };
  });
  filteredDatum.unshift({ total: 0, gameNum: 0 });
  barChartInstance.data(filteredData);
  barChartInstance.datum(filteredDatum);
  svg.call(barChartInstance);
}
