function Person(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  const today = new Date();
  const year = today.getFullYear();

  console.log(year - this.birthYear);
};

const john = new Person("John", 1990, "Developer");
const mark = new Person("Mark", 1985, "Teacher");
const jane = new Person("Jane", 1975, "Designer");
