function calculateAverage(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

const numbers = [8, 9, 9, 8];
const result = calculateAverage(numbers);
console.log("El resultado es", result);
