function keyValuePairs(obj) {
  const results = [];
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];
    const result = [key, value];
    results.push(result);
  }

  return results;
}

const user = { nombre: "Mauricio", edad: 24, ciudad: "CDMX" };
const results = keyValuePairs(user);
console.log(results);

const car = {
  brand: "Nissan",
  model: "Versa",
  year: 2020,
};
const pairs = keyValuePairs(car);
console.log(pairs);

function keyValuePairsWithForIn(obj) {
  const results = [];

  for (const key in obj) {
    const value = obj[key];
    const result = [key, value];
    results.push(result);
  }

  return results;
}

const resultsForIn = keyValuePairsWithForIn(user);
console.log(resultsForIn);
