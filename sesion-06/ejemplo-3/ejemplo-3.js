const number = 12345;

const numberAsString = number.toString();
const array = numberAsString.split("");
const numbers = array.map(parseFloat);
const result = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(result);

const result2 = number
  .toString()
  .split("")
  .map(parseFloat)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result2);
