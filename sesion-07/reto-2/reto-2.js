const mountains = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function createColumn(content, isHeader = false) {
  const type = isHeader ? "th" : "td";
  const column = document.createElement(type);
  column.textContent = content;

  if (!isNaN(content)) {
    column.style.textAlign = "right";
  }

  return column;
}

function createRow(columns, areHeaders = false) {
  const row = document.createElement("tr");

  for (const column of columns) {
    const columnNode = createColumn(column, areHeaders);
    row.appendChild(columnNode);
  }

  return row;
}

function createTable() {
  const table = document.createElement("table");
  const headers = createRow(["Name", "Height", "Place"], true);
  table.appendChild(headers);

  for (let i = 0; i < mountains.length; i++) {
    const mountain = mountains[i];
    const columns = [mountain.name, mountain.height, mountain.place];
    const row = createRow(columns);
    table.appendChild(row);
  }
  return table;
}

function render() {
  const root = document.getElementById("mountains");
  const table = createTable();
  root.appendChild(table);
}

render();
