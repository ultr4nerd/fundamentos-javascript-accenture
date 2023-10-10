const whatDoYouDo = function (job, name) {
  switch (job) {
    case "developer":
      return name + " develops cool apps.";
    case "designer":
      return name + " designs awesome websites.";
    default:
      return name + " does something else.";
  }
};

console.log(whatDoYouDo("developer", "Mau"));

// Funciones que mandan a llamar a otras

const fruits = ["apple", "watermelon", "pineapple"];

const mayusFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log("mayusFruits", mayusFruits);

// Arrow functions (ES6+)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const multiplicacion = (n1, n2) => n1 * n2;

console.log("Resultado", multiplicacion(2, 3));

const mayusFruitsArrow = fruits.map((f) => f.toUpperCase());
console.log("mayusFruitsArrow", mayusFruitsArrow);

// Scope (alcance)
// var - funci€ón
// let y const - bloque
