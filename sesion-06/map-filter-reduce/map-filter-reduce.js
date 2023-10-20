// Ejecuta una función en cada elemento de un arreglo
function map(array, fn) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = fn(element);
    newArray.push(result);
  }
  return newArray;
}
// Resultados
Array.prototype.$map = function (fn) {
  return map(this, fn);
};
const resultMap = [1, 2, 3, 4, 5].$map((x) => x * 2);
console.log(resultMap);

// Ejecuta una función y si el valor es verdadero lo deja en el arreglo, si no, lo quita
function filter(array, fn) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const mustStay = fn(element);
    if (mustStay) {
      newArray.push(element);
    }
  }
  return newArray;
}
// Resultados
Array.prototype.$filter = function (fn) {
  return filter(this, fn);
};
const resultFilter = [1, 2, 3, 4, 5].$filter((x) => x % 2 === 0);
console.log(resultFilter);

// Reduce todo un arreglo a un solo valor ejecutando una función reductora
function reduce(array, fn, initialValue) {
  let accumulator = initialValue;
  let initialIndex = 0;
  if (accumulator === undefined) {
    accumulator = array[0];
    initialIndex = 1;
  }
  for (let i = initialIndex; i < array.length; i++) {
    const element = array[i];
    accumulator = fn(accumulator, element, i, array);
  }
  return accumulator;
}
// Resultados
Array.prototype.$reduce = function (fn, initialValue) {
  return reduce(this, fn, initialValue);
};
const resultReduce = [1, 2, 3, 4, 5].$reduce(
  (acc, currValue) => acc + currValue
);
console.log(resultReduce);
