const john = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  calculateAge: function () {
    const today = new Date();
    const year = today.getFullYear();
    return year - this.birthYear;
  },
};

const age = john.calculateAge();
console.log("La edad de John es", age);
