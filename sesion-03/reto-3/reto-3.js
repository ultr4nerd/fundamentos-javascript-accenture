function fibonacci(n) {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSequence(limit) {
  for (let i = 1; i <= limit; i++) {
    const result = fibonacci(i);
    console.log(result);
  }
}

fibonacciSequence(10);
