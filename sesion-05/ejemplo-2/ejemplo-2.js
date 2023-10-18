function Animal(type) {
  this.type = type;
}

function Cat(lifes, color) {
  Animal.call(this, "Cat");
  this.lifes = lifes;
  this.color = color;
}

const cat = new Cat(7, "gray");
console.log(cat);

function Person(name) {
  this.name = name;
}

function Developer(name, skills, yearsOfExperience) {
  Person.call(this, name);
  this.skills = skills;
  this.yearsOfExperience = yearsOfExperience;
}

const john = new Developer("John", "JavaScript", 7);
console.log(john);
