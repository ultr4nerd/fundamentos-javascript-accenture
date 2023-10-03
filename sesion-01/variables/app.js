"use strict";

var numero; // Declaración (Creando la cajita)

// console.log(numero); // Undefined

numero = 12; // Asignación (Poniendo un valor en la cajita)

var numero = 13; // En una sola línea

// console.log(numero); // 13

// ES6 (Ecmascript 6) (Usar con cuidado)

let nombre = "Mauricio"; // No nos deja redeclarar una variable, funciona diferente su scope, es mejor para la memoria.

nombre = "Javier";

const apellido = "Chávez"; // Constantes, scope de bloque igual que let, es mejor para memoria.

// Siempre ocupen const, a menos que se den cuenta que su dato es variable, entonces ocupan let.
// Y, si tienen problemas con el scope de let, ocupen var.

// Nomenclatura de variables

// Caracteres permitidos

var holaMUNDO$1 = "Hola"; // letras minúsculas, mayúsculas, dólar y números (sin caracteres especiales, que no empiecen por un número)

// Convención de nomenclatura (camel case)

var snake_case; // Python
var PascalCase; // Basic
var camelCase; // JS, Java

// TIPOS DE DATOS

// String (es todo lo que está dentro de comillas)

var texto = "Hola mundo";
var texto = "Adiós mundo";

var quote = 'Einstein dijo: "Este curso está cool"';
var quote = "Einstein dijo: \"Este curso está cool\"";

var message = "Mau's house";
var message = 'Mau\'s house';

var miVariable = "mundo";

var message = "Hola " + miVariable + " cruel";

// ES6 WARNING!
const myText = `Hola ${miVariable} cruel`;

// Number

var n1 = 2;
var n2 = 3;

var suma = n1 + n2;
var resta = n2 - n1;
var mult = n1 * n2;
var div = n2 / n1;
var modulo = n2 % n1; // residuo
var exponente = Math.pow(n1, 2); // n1 elevado a la dos
var raizCuadrada = Math.sqrt(4); // Raíz cuadrada de 4

var contador = 1;
contador++; // contador = contador + 1
contador--; // contador = contador - 1

// Incrementos
contador++; // Primero sustituye el valor y luego incrementa
++contador; // Primero incrementa, luego sustituye el valor

var valor = 5;
var resultado = 5 + contador++; // Resultado = 6, Contador = 2
var resultado = 5 + ++contador; // Resultado = 7, Contador = 2

// Boolean

var verdadero = true;
var falso = false;

var bool1 = false;
var bool2 = true;

// Operaciones que operan con booleanos y devuelven booleanos

var not = !bool1; // true -> false | false -> true
var and = bool1 && bool2; // AND (verdadero si ambos lo son, falso en el caso contrario)
var or = bool1 || bool2; // OR (verdadero con que uno de los valores sea verdadero, falso solo si ambos lo son)

// Operaciones que opere con cualquier tipo y devuelvan booleano

// No ocupemos estas igualdades
var igualdadRara = "hola" == "hola"; // Verdadero
var igualdadRara = "1" == 1; // Verdadero
var igualdadRara = [] == 0; // Verdadero

var desigualdadRara = "hola" != "hola";

// OCUPEN ESTO
var igualdad = "hola" === "hola"; // Siempre ocupen el triple igual
var desigualdad = "hola" !== "mundo";

// Operaciones que operan con números y devuelven booleanos

var mayorQue = 9 > 7; // verdadero
var menorQue = 9 < 7; // falso
var mayorIgualQue = 9 >= 9; // verdadero
var menorIgualQue = 9 <= 7; // falso

// Undefined

var x; // undefined

var x = undefined; // NO HAGAN ESTO

// Null

var user = null;

// typeof

console.log(typeof "hello");

// Type coersion

let user = null;

!!user;


var a = 5;
var b = 10;
var c = 15;

(3 + b) * c / a * 2;

((a + b * c) / 5) * 2;

b / a + 2 * c;

(a + b + c / c) * a;

((3 * a) / c) + a + b + c;  

a - (b + c) * a / 1;
