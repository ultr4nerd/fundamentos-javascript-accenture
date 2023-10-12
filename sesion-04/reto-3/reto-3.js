function pluck(list, propertyName) {
  const results = [];
  for (const item of list) {
    const value = item[propertyName];
    results.push(value);
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
