// Ejercicio 1

const time = 12;

if (time < 12) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good afternoon");
} else if (time >= 20) {
  console.log("Good evening");
}

// Cascada vs diferentes ifs

const alimento = "manzana";

if (alimento === "pizza") {
  console.log("esto es una pizza");
} else if (alimento === "manzana") {
  console.log("esto es una manzana");
}

if (alimento === "naranja") {
  console.log("Este alimento es de color naranja");
} else if (alimento === "manzana") {
  console.log("Este alimento es de color rojo");
}

// Usar ORs y ANDs

const comida = "pizza";
const color = "rojo";

if (comida === "manzana" && color === "rojo") {
  console.log("Esto es una manzana roja");
}

if (comida === "manzana" || color === "rojo") {
  console.log("Esto es una manzana o es alimento rojo");
}
