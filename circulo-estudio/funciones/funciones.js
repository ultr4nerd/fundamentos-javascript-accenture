function promedio(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}

// Funciones flecha

const numeros = [2, 3, 4, 5];
const suma = numeros.reduce((acc, curr) => acc + curr);
const resultado = suma / numeros.length;
console.log("El resultado es", resultado);
