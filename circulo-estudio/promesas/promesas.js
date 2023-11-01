function suma(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 3000);
  });
}

function division(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject("No puedo dividir entre cero");
      }

      resolve(a / b);
    }, 2000);
  });
}

suma(7, 3).then((result) => {
  console.log("La suma es", result);
});

division(7, 0)
  .then((result) => {
    console.log("La división es", result);
  })
  .catch((err) => {
    console.log("No se pudo completar mi promesa por la siguiente razón:", err);
  });
