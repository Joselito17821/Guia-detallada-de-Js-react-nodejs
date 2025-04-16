/*
Conversión de unidades
Crea tres variables: metros, centimetros y milimetros. 
Parte de un valor inicial en metros y calcula el equivalente en las otras dos unidades.
*/

let metros = 10;
let centimetros = metros * 100;
let milimetros = centimetros * 10;

console.log(milimetros);


/*
Intercambio de valores entre variables
Supón que tienes dos variables a y b, 
intercambia sus valores sin escribir directamente los nuevos valores.
*/

let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;

console.log(a , b)

let x = "rojo";
let y = "azul";

let temporal = x;
x = y;
y = temporal;

console.log(x, y)


// EN JS no es necesario finalizar una linea con ;

/*
Conversión de temperaturas (Celsius a Fahrenheit)
*/

const celsius = 30;
const fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit); // Debería dar 86

/*
Tu edad en días:
*/

const edad = 20;
const diasVividos = edad * 365;

console.log(diasVividos);
