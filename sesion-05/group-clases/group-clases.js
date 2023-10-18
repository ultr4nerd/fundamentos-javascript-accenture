// Constructor

class Group {
  constructor() {
    this.members = [];
  }

  static from(array) {
    const group = new Group();

    for (let i = 0; i < array.length; i++) {
      group.add(array[i]);
    }

    return group;
  }

  add(item) {
    if (!this.has(item)) {
      this.members.push(item);
    }
  }

  has(item) {
    return this.members.includes(item);
  }
}

// Ejecución

const group = new Group();

console.group("group.add()");
group.add(5); // members: [5]
group.add(6); // members: [5, 6]
group.add(5); // members: [5, 6]
console.log("group", group);
console.groupEnd();

console.group("group.has()");
console.log("group.has(3)", group.has(3)); // false
console.log("group.has(5)", group.has(5)); // true
console.groupEnd();

console.group("Group.from()");
const newGroup = Group.from([1, 2, 3, 4, 5, 5, 6]);
console.log("newGroup", newGroup); // members: [1, 2, 3, 4, 5, 6]
console.groupEnd();
