function arrayToObject(arr) {
  const result = {};

  // Array destructuring (ES6+)
  for (const [key, value] of arr) {
    result[key] = value;
  }
  return result;
}

const arreglo = [
  ["nombre", "Mauricio"],
  ["edad", 24],
  ["ciudad", "CDMX"],
];
const resultado = arrayToObject(arreglo);
console.log(resultado);

// Object destructuring
const user = { email: "m@g.com", name: "Mauricio" };

// Usar destructuring en funciones
function destructuring(param1, { email }, [el1, el2]) {
  console.log(param1, email, el1, el2);
}

destructuring("hola mundo", user, ["manzana", "pera"]);
