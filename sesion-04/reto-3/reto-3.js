// Arreglo: Usamos for normal (for (let i =0; ....), o for of)
// Objetos: Usamos Object.keys o for in

function pluck(list, propertyName) {
  const results = [];
  for (const item of list) {
    const result = item[propertyName];
    results.push(result);
  }
  return results;
}

const singers = [
  { name: "Steven Tyler", band: "Aerosmith", born: 1948 },
  { name: "Karen Carpenter", band: "The Carpenters", born: 1950 },
  { name: "Kurt Cobain", band: "Nirvana", born: 1967 },
  { name: "Chris Cornell", band: "Soundgarden", born: 1964 },
];
const result = pluck(singers, "name");
console.log(result);
