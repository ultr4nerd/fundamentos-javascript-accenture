(function logName() {
  const myName = "John Doe";
  console.log(myName);
})();

(function (lastName) {
  const firstName = "John";
  console.log(firstName + " " + lastName);
})("Doe");

// Promesas (ignorar si no lo entiendo)

function printOverTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola mundo");
    }, 2000);
  });
}

async function myAsyncFunc() {
  const result = await printOverTime();
  return result;
}

(async function () {
  const resultado = await myAsyncFunc();
  console.log(resultado);
})();

