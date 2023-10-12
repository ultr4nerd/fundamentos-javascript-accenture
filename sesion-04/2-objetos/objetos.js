const scratch = {
  nombre: "Scratch",
  edad: 1,
  esGato: true,
  vidas: 7,
  colores: ["gris", "blanco", "marrón"],
  dueno: {
    nombre: "Mauricio",
  },
  "Mi propiedad": "hola",
};

var nombre = scratch["nombre"];
console.log(nombre);

var nombre = scratch.nombre;
console.log(nombre);

scratch.edad = 2;
console.log(scratch);

scratch["edad"] = 3;
console.log(scratch);
