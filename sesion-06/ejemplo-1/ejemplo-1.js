function addColor(car) {
  const newCar = Object.assign({}, car);
  newCar.color = "Black";
  return newCar;
}

const car = {
  brand: "Nissan",
  model: "Sentra",
  year: 2020,
};

const newCar = addColor(car);
console.log(newCar);
console.log(car);
