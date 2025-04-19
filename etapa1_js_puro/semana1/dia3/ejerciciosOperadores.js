/********************************************EJERCICIOS********************************************/

/* 
1. Crea dos variables numéricas y muestra el resultado de todas las operaciones aritméticas.
2. Usa operadores de asignación para modificar una variable `p` con varios valores.
3. Compara dos variables usando todos los operadores de comparación.
4. Escribe una expresión con `&&`, otra con `||`, y otra con `!`, que devuelvan `true`.
5. Declara una variable `contador` y aplica `++` y `--` varias veces.

Prueba todo con `console.log` y observa los resultados.
*/

//1

let num1 = 10;
let num2 = 5;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;
let potencia = num1 ** num2;

console.log("Suma: " + suma + 
    "\nResta: " + resta + 
    "\nMultiplicación: " + multiplicacion + 
    "\nDivisión: " + division +
     "\nMódulo: " + modulo + 
     "\nPotencia: " + potencia);
//\n para salto de línea

//2

let p = 5;

p += 2; // p = p + 2 → 7
console.log("+= ", p);

p -= 1; // p = p - 1 → 6
console.log("-= ", p);

p *= 3; // p = p * 3 → 18
console.log("*= ", p);

p /= 2; // p = p / 2 → 9
console.log("/= ", p);

p %= 4; // p = p % 4 → 1
console.log("%= ", p);


//3

const x = 5;
const y = "5";

console.log("x == y:", x == y);   // true (compara solo valor)
console.log("x === y:", x === y); // false (compara valor y tipo)
console.log("x != y:", x != y);   // false
console.log("x !== y:", x !== y); // true
console.log("x > 3:", x > 3);     // true
console.log("x < 10:", x < 10);   // true
console.log("x >= 5:", x >= 5);   // true
console.log("x <= 4:", x <= 4);   // false

//4

console.log(true && true);         // true
console.log(false || true);        // true
console.log(!false);               // true

// Con variables
const mayorEdad = 20 >= 18;
const tieneID = true;

console.log("¿Puede entrar? (&&):", mayorEdad && tieneID); // true
console.log("¿Acceso parcial? (||):", false || tieneID);   // true
console.log("¿No tiene ID? (!):", !tieneID);                // false


//5

let contador = 0;

contador++; // 1
console.log("contador++:", contador);

contador++; // 2
console.log("contador++:", contador);

contador--; // 1
console.log("contador--:", contador);

++contador; // 2 (pre-incremento)
console.log("++contador:", contador);

--contador; // 1 (pre-decremento)
console.log("--contador:", contador);
