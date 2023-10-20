function flatten(arrays) {
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  });
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);
console.log(array);
