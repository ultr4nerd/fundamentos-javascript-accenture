class Animal {
  constructor(type) {
    this.type = type;
  }

  eat() {
    console.log(this.type + " is eating...");
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  meow() {
    console.log("meoww!");
  }
}

const cat = new Cat();
cat.eat();
cat.meow();
