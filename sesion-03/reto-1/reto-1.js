// Ejemplo normal

function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

const result = power(3, 3);
console.log("El resultado es", result);

// Ejemplo recursivo

function powerRecursive(base, exponent) {
  if (exponent === 1) {
    return base;
  }

  return base * powerRecursive(base, exponent - 1);
}

const resultRecursive = power(3, 3);
console.log("El resultado recursivo es", resultRecursive);
