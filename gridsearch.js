fetch("/sketches.json")
  // fetch("http://127.0.0.1:5500/sketches.json")
  .then((response) => response.json())
  .then((data) => createTable(data));

function createTable(sketches) {
  new gridjs.Grid({
    sort: true,
    columns: [
      {
        id: "sketch",
        name: "Sketch",
        formatter: (_, row) =>
          gridjs.html(
            `<a class='capitalize' href='/${
              row.cells[0].data
            }/'>${row.cells[0].data.replace("-", " ")}</a>`
          ),
      },
      {
        id: "createdDate",
        name: "Created Date",
        formatter: (cell) =>
          `${new Intl.DateTimeFormat("en-US").format(new Date(cell))}`,
      },
      {
        name: "Last Modified Date",
        id: "lastModifiedDate",
        formatter: (cell) =>
          `${new Intl.DateTimeFormat("en-US").format(new Date(cell))}`,
      },
      {
        id: "code",
        name: "Code",
        formatter: (_, row) =>
          gridjs.html(
            `<a class='capitalize' href='https://github.com/jkenzer/jkenzer.github.io/tree/master/${row.cells[0].data}/'>Code</a>`
          ),
      },
    ],
    search: true,
    data: sketches,
  }).render(document.getElementById("wrapper"));
}
