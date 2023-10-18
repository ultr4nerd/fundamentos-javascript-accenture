// Constructor
function Vec(x, y) {
  this.x = x;
  this.y = y;
}

// Métodos
Vec.prototype.plus = function (v2) {
  const x = this.x + v2.x;
  const y = this.y + v2.y;
  return new Vec(x, y);
};

Vec.prototype.minus = function (v2) {
  const x = this.x - v2.x;
  const y = this.y - v2.y;
  return new Vec(x, y);
};

Vec.prototype.length = function () {
  let result = Math.pow(this.x, 2) + Math.pow(this.y, 2);
  return Math.sqrt(result);
};

// Ejecución
const v1 = new Vec(7, 5);
const v2 = new Vec(2, 3);

console.group("Constructor");
console.log(v1); // 7, 5
console.groupEnd();

console.group("Plus");
const v3 = v1.plus(v2);
console.log(v3); // 9, 8
console.groupEnd();

console.group("Minus");
const v4 = v1.minus(v2);
console.log(v4); // 5, 2
console.groupEnd();

console.group("Length");
const result = v1.length();
console.log(result);
console.groupEnd();
