fetch("/sketchbook/sketches.json")
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
            `<a class='capitalize' href='/sketchbook/${
              row.cells[0].data
            }/'>${row.cells[0].data.replace("-", " ")}</a>`
          ),
      },
      {
        id: "createdDate",
        name: "Created Date",
      },
      {
        name: "Last Modified Date",
        id: "lastModifiedDate",
      },
    ],
    search: true,
    data: sketches,
  }).render(document.getElementById("wrapper"));
}
