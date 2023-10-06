// While-loop;

// while normal
let i1 = 0;

// Condición
while (i1 < 20) {
  console.log("Contador:", i1);
  i1++; // Una manera de que la condición termine eventualmente
}

console.log("Finalizó mi ciclo");

// while usando break

let i2 = 0;

while (true) {
  console.log("Contador:", i2);
  if (i2 === 20) {
    break;
  }
  i2++;
}

// while con continue
let i3 = 0;

while (i3 <= 20) {
  i3++;
  if (i3 % 2 !== 0) {
    continue;
  }

  console.log("Contador:", i3);
}

// Ciclos do-while

let contador = 0;

do {
  console.log("Estoy dentro del while");
} while (false);
