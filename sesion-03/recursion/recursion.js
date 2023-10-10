/**
 * FACTORIAL
 * 1. Caso base, ej: factorial(1) == 1
 * 2. Caso recursivo, factorial(n) == n * factorial(n-1)
 */

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(30); // 120
console.log("El resultado es:", result);

// De forma iterativa

function factorialIterativo(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

const result2 = factorialIterativo(30); // 120
console.log("El resultado iterativo es:", result);
