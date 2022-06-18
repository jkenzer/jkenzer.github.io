const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 150, right: 150, bottom: 150, left: 150 };

const data = {
  rm: "Lora Golke",
  Gifts: [
    {
      type: "Owner + Co-Owner Value",
      amount: 2025000,
    },
    {
      type: "Stewarded",
      amount: 106529.46,
    },
    {
      type: "Team Value",
      amount: 799424.39,
    },
  ],
  PlannedGifts: [
    {
      type: "Owner + Co-Owner Count",
      amount: 0,
    },
    {
      type: "Team Count",
      amount: 0,
    },
  ],
  currentOppTotalValue: 2930953.85,
  OpportunityGoal: 12000000,
  PlannedGiftGoal: 7,
  currentPlannedGiftTotal: 0,
};

document.body.append(
  Plot.plot({
    marginLeft: 100,
    marginRight: 50,
    marginBottom: 50,
    height: 100,
    caption: "test",
    color: {
      scheme: "bugn",
      legend: true,
    },
    y: {
      label: null,
      grid: true,
      axis: null,
    },
    x: {
      domain: [0, d3.max([data], (d) => d.OpportunityGoal)],
      label: `${d3.format("$,.2f")(data.currentOppTotalValue)} / ${d3.format(
        "$,.0f"
      )(data.OpportunityGoal)}`,
      tickFormat: "$,.0f",
      ticks: 4,
      labelAnchor: "center",
      labelOffset: 36,
      clamp: true,
    },
    marks: [
      Plot.barX(
        data.Gifts,
        Plot.stackX(
          Plot.groupZ(
            { x: "sum" },
            {
              x: "amount",
              fill: "type",
              title: (d) => `${d.type} - ${d3.format("$,.2f")(d.amount)}`,
            }
          )
        )
      ),
      Plot.ruleX([0]),
      Plot.text([data], {
        x: 0,
        textAnchor: "start",
        dx: +4,
        text: (d) =>
          `${d3.format(".0%")(d.currentOppTotalValue / d.OpportunityGoal)}`,
        y: "rm",
        fill: "black",
      }),
      Plot.frame(),
    ],
  })
);
