//no se declara el tipo de dato, como por ejemplo en java (int IdEstudiante = 1;),
// en js no se declara el tipo de dato, solo se asigna el valor a la variable



//******************Tipos de datos primitivos en JavaScript**********************
const edad = 25;
console.log(typeof edad); // 'number'
//Incluye enteros, decimales, Infinity, -Infinity, y NaN (Not a Number).


const nombre = "Sofía";
console.log(typeof nombre); // 'string'
//Cadenas de texto, entre comillas dobles ", simples ' o backticks ` (para templates).


const esEstudiante = true;
console.log(typeof esEstudiante); // 'boolean'
//Valores de verdadero (true) o falso (false).


let x;
console.log(typeof x); // 'undefined'
//Variable declarada pero no inicializada.


const nada = null;
console.log(typeof nada); // 'object' (es un bug histórico de JS)
//Valor nulo, representa la ausencia intencional de valor.


const numeroGrande = 1234567890123456789012345678901234567890n;
console.log(typeof numeroGrande); // 'bigint'
//Números enteros grandes, se añaden la letra n al final del número.


const id = Symbol("id único");
console.log(typeof id); // 'symbol'
//Valor único e inmutable, útil para propiedades de objetos.


// *****************Tipos de datos estructurales o no primitivos******************

const persona = { nombre: "Ana", edad: 30 };
console.log(typeof persona); // 'object'
//Estructura de clave-valor. También incluye arrays y funciones (aunque tienen sus propios tipos especiales).


const frutas = ["manzana", "pera", "uva"];
console.log(typeof frutas); // 'object'
//Array, una colección ordenada de elementos.
//Técnicamente es un objeto, pero puedes distinguirlo con:
Array.isArray(frutas); // true
//Método que verifica si es un array.


function saludar() {
    return "¡Hola!";
  }
  console.log(typeof saludar); // 'function'
  //Las funciones también son objetos, pero typeof te da 'function'.

//****************************************Ejercicios******************************

// 1. String → Number
const str = "123";
const numFromStr = Number(str);
console.log(numFromStr, typeof numFromStr); // 123 "number"

// 2. Number → String
const num = 456;
const strFromNum = String(num);
console.log(strFromNum, typeof strFromNum); // "456" "string"

// 3. Boolean → Number
const bool = true;
const numFromBool = Number(bool);
console.log(numFromBool, typeof numFromBool); // 1 "number"

// 4. Number → Boolean
const zero = 0;
const boolFromZero = Boolean(zero);
console.log(boolFromZero, typeof boolFromZero); // false "boolean"

// 5. Cadena vacía → Boolean
const emptyStr = "";
const boolFromEmpty = Boolean(emptyStr);
console.log(boolFromEmpty, typeof boolFromEmpty); // false "boolean"
