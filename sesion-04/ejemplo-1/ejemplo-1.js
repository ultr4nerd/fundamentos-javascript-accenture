const array = [1, 2, 3, 4, 5];
let results;

function multiplyByTwo(numbers) {
  const results = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const result = number * 2;
    results.push(result);
  }

  return results;
}

results = multiplyByTwo(array);
console.log("multiplyByTwo", results);

function multiplyByTwoForOf(numbers) {
  const results = [];

  for (const number of numbers) {
    const result = number * 2;
    results.push(result);
  }

  return results;
}

results = multiplyByTwoForOf(array);
console.log("multiplyByTwoForOf", results);
