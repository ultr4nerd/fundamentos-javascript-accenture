function loop(start, test, update, body) {
  for (let n = start; test(n); n = update(n)) {
    body(n);
  }
}

loop(
  3,
  (i) => i > 0,
  (i) => i - 1,
  (i) => {
    console.log(i);
  }
);
